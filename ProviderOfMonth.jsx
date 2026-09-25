/* =========================================================================
 * jackpots.ch — PROVIDER OF THE MONTH — DESKTOP
 * -------------------------------------------------------------------------
 * Hero banner: provider logo, tagline, headline and CTA on the left,
 * 3-card "coverflow" game carousel with pagination dots on the right.
 *
 * Data:       Strapi  → /api/configurations?filters[name][$eq]=provider-of-the-month
 * Delivery:   GitHub  → jsDelivr → Kameleoon loader (Babel-transformed in the browser)
 *
 * Content editors change EVERYTHING in Strapi (background, provider logo,
 * tagline, title, CTA label + link, game list). No code change needed.
 *
 * Language:   Taken from the first URL segment (/de/, /en/, /fr/, /it/).
 *             Falls back to DE. Every text/href field may be either a plain
 *             string (same for all languages) or { de, en, fr, it }.
 *
 * Behaviour:
 *   • Carousel auto-rotates every 4 s, pauses on hover / keyboard focus,
 *     and is disabled for users with "reduce motion".
 *   • Click a side card or a dot → that game moves to the centre.
 *   • Click the centre card → opens the game (href for current language).
 *   • ← / → keys move the carousel when it has focus.
 *   • MIN / MAX bet is shown on the centre card only.
 *   • Kameleoon goals: 'potm-click-cta' and 'potm-click-game-rank-<n>'.
 *   • If Strapi is unreachable, returns bad data or `active: false`,
 *     the widget renders nothing (no stale / wrong provider promo).
 *
 * Everything is wrapped in an IIFE so no names clash with the Top 10
 * scripts that live on the same page. Only `window.ProviderOfMonth` and
 * the shared helpers under `window.POTM` are exposed.
 * ========================================================================= */
(function () {

  /* ---- Config ----------------------------------------------------------- */
  var STRAPI_BASE_URL = 'https://strapi.jp.gamingenius.com';
  var CONFIG_NAME     = 'provider-of-the-month';
  var LANGS           = ['de', 'en', 'fr', 'it'];
  var DEFAULT_LANG    = 'de';
  var AUTOPLAY_MS     = 4000;

  /* ---- Brand tokens (same as Top 10) ------------------------------------ */
  var RED_JP = '#C10230';
  var INK_JP = '#1D1E1B';


  /* =======================================================================
   * Helpers (shared with the mobile file through window.POTM)
   * ===================================================================== */

  // Current site language from the URL: /de/…, /en/…, /fr/…, /it/…
  function detectLang() {
    var seg = (window.location.pathname.split('/')[1] || '').toLowerCase();
    return LANGS.indexOf(seg) !== -1 ? seg : DEFAULT_LANG;
  }

  // Resolve a Strapi field that is either "text" or { de, en, fr, it }.
  function pick(field, lang) {
    if (field == null) return '';
    if (typeof field === 'string') return field;
    if (typeof field === 'object') {
      if (field[lang]) return field[lang];
      if (field[DEFAULT_LANG]) return field[DEFAULT_LANG];
      for (var i = 0; i < LANGS.length; i++) if (field[LANGS[i]]) return field[LANGS[i]];
    }
    return '';
  }

  function stripChf(v) {
    return String(v == null ? '' : v).replace(/\s*CHF\s*$/i, '');
  }

  function trackGoal(name) {
    try {
      if (window.Kameleoon && window.Kameleoon.API && window.Kameleoon.API.Goals) {
        window.Kameleoon.API.Goals.processConversion(name);
      }
    } catch (e) { /* never break a click because of tracking */ }
  }

  // Same Strapi contract as the Top 10: configurations entry, JSON in `data`.
  // Here the payload is an OBJECT (not an array).
  function fetchProviderOfMonth() {
    var url = STRAPI_BASE_URL + '/api/configurations?filters[name][$eq]=' + encodeURIComponent(CONFIG_NAME);
    return fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('Strapi responded ' + res.status);
        return res.json();
      })
      .then(function (json) {
        var entry = json && json.data && json.data[0];
        var payload = entry && ((entry.attributes && entry.attributes.data) || entry.data);
        if (!payload || typeof payload !== 'object' || !Array.isArray(payload.games)) {
          throw new Error('Malformed Strapi payload');
        }
        return payload;
      });
  }

  // Normalise the payload for the current language → flat, render-ready object.
  function resolveContent(payload, lang) {
    if (!payload || payload.active === false) return null;
    var games = payload.games
      .filter(function (g) { return g && g.image; })
      .slice()
      .sort(function (a, b) { return (a.rank || 0) - (b.rank || 0); })
      .map(function (g, i) {
        return {
          rank:  g.rank || i + 1,
          title: pick(g.title, lang),
          min:   stripChf(g.min),
          max:   stripChf(g.max),
          image: g.image,
          href:  pick(g.href, lang) || '#',
        };
      });
    if (!games.length) return null;
    return {
      background:   payload.background || '',
      backgroundMobile: payload.backgroundMobile || '',   // optional, portrait; mobile falls back to `background`
      providerLogo: payload.providerLogo || '',
      // Optional: brighten/dim the logo without editing the file. 1 = unchanged,
      // e.g. 1.6 turns a mid-grey (#808080) logo into a light grey (#CDCDCD).
      logoBrightness: (function (b) { b = parseFloat(b); return isFinite(b) && b > 0 ? Math.min(3, Math.max(0.5, b)) : 1.6; })(payload.logoBrightness),
      providerName: pick(payload.providerName, lang),
      tagline:      pick(payload.tagline, lang),
      title:        pick(payload.title, lang),
      ctaLabel:     pick(payload.cta && payload.cta.label, lang),
      ctaHref:      pick(payload.cta && payload.cta.href, lang),
      games:        games,
    };
  }

  // Circular offset of card i relative to the active card: … -2 -1 0 1 2 …
  function circularOffset(i, active, n) {
    var half = Math.floor(n / 2);
    return ((i - active + n + half) % n) - half;
  }

  // Loads Strapi data once, re-resolves on language change.
  function useProviderOfMonth(logTag) {
    var lang = detectLang();
    var s = React.useState({ status: 'loading', content: null });
    var state = s[0], setState = s[1];
    React.useEffect(function () {
      var cancelled = false;
      fetchProviderOfMonth()
        .then(function (payload) {
          if (cancelled) return;
          var content = resolveContent(payload, lang);
          setState({ status: content ? 'ready' : 'empty', content: content });
        })
        .catch(function (err) {
          console.warn('[' + logTag + '] Strapi fetch failed, widget hidden:', err);
          if (!cancelled) setState({ status: 'error', content: null });
        });
      return function () { cancelled = true; };
    }, [lang]);
    return state;
  }

  // Autoplay + pause handling, shared by desktop and mobile.
  function useCarousel(n) {
    var a = React.useState(0);
    var active = a[0], setActive = a[1];
    var p = React.useState(false);
    var paused = p[0], setPaused = p[1];

    var reducedMotion = React.useMemo(function () {
      return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }, []);

    var go = React.useCallback(function (i) {
      if (!n) return;
      setActive(((i % n) + n) % n);
    }, [n]);

    // One timeout per active index → any manual move restarts the countdown.
    // (Browsers throttle timers in background tabs, so no extra handling.)
    React.useEffect(function () {
      if (paused || reducedMotion || n < 2) return;
      var t = setTimeout(function () {
        setActive(function (x) { return (x + 1) % n; });
      }, AUTOPLAY_MS);
      return function () { clearTimeout(t); };
    }, [active, paused, reducedMotion, n]);

    return { active: active, go: go, setPaused: setPaused };
  }

  function injectStyles(id, css) {
    if (document.getElementById(id)) return;
    var el = document.createElement('style');
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }


  /* =======================================================================
   * Styles (desktop)
   * ===================================================================== */
  injectStyles('potm-styles', [
    // Align with the site's game rows: same wrapper classes as the GameSection
    // rows (incl. `with-title`), plus 2.5px = the padding of each .GameBox tile,
    // so the banner starts/ends exactly where the first/last game tile does.
    '.potm,.potm-skeleton{margin:0 2.5px;}',
    '.potm{position:relative;display:flex;align-items:stretch;height:clamp(360px,31vw,460px);border-radius:16px;overflow:hidden;background:' + INK_JP + ';color:#fff;font-family:Roboto,Arial,sans-serif;isolation:isolate;}',
    '.potm-bg{position:absolute;inset:0;background-size:cover;background-position:center;z-index:-2;}',
    '.potm-bg--fallback{background:radial-gradient(120% 140% at 80% 50%,#3a3b37 0%,' + INK_JP + ' 60%);}',
    '.potm-overlay{position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(29,30,27,.92) 0%,rgba(29,30,27,.78) 34%,rgba(29,30,27,.30) 62%,rgba(29,30,27,.45) 100%);}',

    '.potm-content{flex:0 0 44%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:40px 0 40px clamp(28px,3.6vw,52px);min-width:0;}',
    // Box adapts to the logo: fixed height, width follows the logo's proportions.
    // Very wide logos are capped by max-width and scaled down to fit.
    '.potm-logo{display:inline-flex;align-items:center;justify-content:center;height:clamp(68px,6.4vw,92px);padding:0 clamp(22px,2.2vw,32px);max-width:100%;box-sizing:border-box;border-radius:14px;background:rgba(29,30,27,.82);border:1px solid rgba(255,255,255,.14);box-shadow:0 8px 24px rgba(0,0,0,.25);}',
    '.potm-logo img{height:clamp(30px,2.9vw,42px);width:auto;max-width:clamp(220px,24vw,340px);object-fit:contain;display:block;}',
    '.potm-logo span{font-weight:700;letter-spacing:.08em;text-transform:uppercase;font-size:18px;}',
    '.potm-tagline{margin:22px 0 0;font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.72);}',
    '.potm-title{margin:10px 0 0;font-family:Roboto,Arial,sans-serif;font-weight:900;font-style:italic;text-transform:uppercase;letter-spacing:-.01em;line-height:.95;font-size:clamp(34px,3.7vw,58px);color:#fff;text-shadow:0 4px 18px rgba(0,0,0,.35);max-width:12ch;}',
    '.potm-cta{margin-top:26px;display:inline-flex;align-items:center;gap:8px;padding:12px 22px;border-radius:6px;background:' + RED_JP + ';color:#fff !important;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;text-decoration:none !important;box-shadow:0 6px 18px rgba(193,2,48,.35);transition:background 160ms ease,transform 160ms ease;}',
    '.potm-cta:hover{background:#A00228;transform:translateY(-1px);}',
    '.potm-cta:focus-visible,.potm-card:focus-visible,.potm-dot:focus-visible{outline:2px solid #fff;outline-offset:3px;}',

    '.potm-stage{flex:1 1 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:0;outline:none;}',
    '.potm-track{--potm-card:clamp(170px,15.5vw,240px);position:relative;width:100%;height:var(--potm-card);}',
    '.potm-card{position:absolute;top:0;left:50%;width:var(--potm-card);height:var(--potm-card);margin-left:calc(var(--potm-card) / -2);border-radius:12px;overflow:hidden;background:' + INK_JP + ';box-shadow:0 14px 34px rgba(0,0,0,.45),0 2px 6px rgba(0,0,0,.25);transition:transform 480ms cubic-bezier(.2,0,0,1),opacity 480ms cubic-bezier(.2,0,0,1),filter 480ms ease;text-decoration:none;color:#fff;-webkit-tap-highlight-color:transparent;}',
    '.potm-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;}',
    '.potm-card--side{filter:brightness(.62);cursor:pointer;}',
    '.potm-card--side:hover{filter:brightness(.8);}',
    '.potm-card--hidden{pointer-events:none;}',

    '.potm-scrim{position:absolute;left:0;right:0;bottom:0;padding:26px 12px 10px;background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.6) 45%,rgba(0,0,0,.86) 100%);font-size:11px;line-height:1.35;font-variant-numeric:tabular-nums;letter-spacing:.01em;opacity:0;transform:translateY(8px);transition:opacity 300ms ease 120ms,transform 300ms ease 120ms;}',
    '.potm-card--active .potm-scrim{opacity:1;transform:none;}',
    '.potm-scrim-title{font-weight:700;font-size:12px;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
    '.potm-row{display:flex;justify-content:space-between;gap:8px;white-space:nowrap;}',
    '.potm-row b{font-weight:700;letter-spacing:.06em;}',

    '.potm-dots{display:flex;gap:8px;margin-top:22px;}',
    '.potm-dot{width:8px;height:8px;padding:0;border:0;border-radius:4px;background:rgba(255,255,255,.45);cursor:pointer;transition:width 240ms ease,background 240ms ease;}',
    '.potm-dot:hover{background:rgba(255,255,255,.75);}',
    '.potm-dot--active{width:24px;background:' + RED_JP + ';}',

    '.potm-skeleton{height:clamp(360px,31vw,460px);border-radius:16px;background:linear-gradient(90deg,#2a2b28 0%,#34352f 50%,#2a2b28 100%);background-size:200% 100%;animation:potm-sk 1.4s linear infinite;}',
    '@keyframes potm-sk{from{background-position:200% 0}to{background-position:-200% 0}}',
    '@media (prefers-reduced-motion:reduce){.potm-card,.potm-scrim,.potm-dot{transition:none}.potm-skeleton{animation:none}}',
  ].join('\n'));


  /* =======================================================================
   * Card transform for a given offset (desktop)
   * ===================================================================== */
  function cardStyle(offset) {
    var abs = Math.abs(offset);
    var sign = offset < 0 ? -1 : 1;
    if (abs === 0) return { transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 3 };
    if (abs === 1) return { transform: 'translateX(' + (sign * 62) + '%) scale(.82)', opacity: 1, zIndex: 2 };
    return { transform: 'translateX(' + (sign * 110) + '%) scale(.64)', opacity: 0, zIndex: 1 };
  }


  /* =======================================================================
   * <ProviderOfMonth />
   * ===================================================================== */
  function ProviderOfMonth() {
    var data = useProviderOfMonth('ProviderOfMonth');
    var content = data.content;
    var n = content ? content.games.length : 0;
    var c = useCarousel(n);

    if (data.status === 'loading') {
      return (
        <section className="GameSection Home">
          <div className="wrapper-games wrapper-game-section with-title">
            <div className="wrapper-games-inner"><div className="potm-skeleton" aria-hidden="true" /></div>
          </div>
        </section>
      );
    }
    if (!content) return null;

    function onKeyDown(e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); c.go(c.active + 1); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); c.go(c.active - 1); }
    }

    return (
      <section className="GameSection Home">
        <div className="wrapper-games wrapper-game-section with-title">
          <div className="wrapper-games-inner">
            <div
              className="potm"
              onMouseEnter={function () { c.setPaused(true); }}
              onMouseLeave={function () { c.setPaused(false); }}
              onFocus={function () { c.setPaused(true); }}
              onBlur={function (e) { if (!e.currentTarget.contains(e.relatedTarget)) c.setPaused(false); }}
            >
              <div
                className={'potm-bg' + (content.background ? '' : ' potm-bg--fallback')}
                style={content.background ? { backgroundImage: 'url("' + content.background + '")' } : undefined}
              />
              <div className="potm-overlay" />

              {/* ---- Left: logo, tagline, title, CTA ---- */}
              <div className="potm-content">
                <div className="potm-logo">
                  {content.providerLogo
                    ? <img src={content.providerLogo} alt={content.providerName || 'Provider'} style={content.logoBrightness !== 1 ? { filter: 'brightness(' + content.logoBrightness + ')' } : undefined} />
                    : <span>{content.providerName}</span>}
                </div>
                {content.tagline && <p className="potm-tagline">{content.tagline}</p>}
                {content.title && <h2 className="potm-title">{content.title}</h2>}
                {content.ctaLabel && content.ctaHref && (
                  <a className="potm-cta" href={content.ctaHref} onClick={function () { trackGoal('potm-click-cta'); }}>
                    {content.ctaLabel}
                  </a>
                )}
              </div>

              {/* ---- Right: game carousel ---- */}
              <div
                className="potm-stage"
                tabIndex={0}
                role="region"
                aria-roledescription="carousel"
                aria-label={content.title || 'Provider of the month'}
                onKeyDown={onKeyDown}
              >
                <div className="potm-track">
                  {content.games.map(function (g, i) {
                    var off = circularOffset(i, c.active, n);
                    var abs = Math.abs(off);
                    var cls = 'potm-card' + (abs === 0 ? ' potm-card--active' : abs === 1 ? ' potm-card--side' : ' potm-card--hidden');
                    return (
                      <a
                        key={g.rank + '-' + i}
                        className={cls}
                        href={g.href}
                        style={cardStyle(off)}
                        tabIndex={abs === 0 ? 0 : -1}
                        aria-hidden={abs === 0 ? undefined : 'true'}
                        aria-label={g.title}
                        onClick={function (e) {
                          if (abs !== 0) { e.preventDefault(); c.go(i); return; }
                          trackGoal('potm-click-game-rank-' + g.rank);
                        }}
                      >
                        <img src={g.image} alt={g.title} draggable="false" decoding="async" />
                        <div className="potm-scrim">
                          {g.title && <div className="potm-scrim-title">{g.title}</div>}
                          {g.min && <div className="potm-row"><b>MIN</b><span>{g.min}</span></div>}
                          {g.max && <div className="potm-row"><b>MAX</b><span>{g.max}</span></div>}
                        </div>
                      </a>
                    );
                  })}
                </div>

                {n > 1 && (
                  <div className="potm-dots">
                    {content.games.map(function (g, i) {
                      return (
                        <button
                          key={'dot-' + i}
                          type="button"
                          className={'potm-dot' + (i === c.active ? ' potm-dot--active' : '')}
                          aria-label={g.title}
                          aria-current={i === c.active ? 'true' : undefined}
                          onClick={function () { c.go(i); }}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


  /* ---- Expose ----------------------------------------------------------- */
  window.POTM = {
    detectLang: detectLang,
    pick: pick,
    stripChf: stripChf,
    trackGoal: trackGoal,
    fetchProviderOfMonth: fetchProviderOfMonth,
    resolveContent: resolveContent,
  };
  window.ProviderOfMonth = ProviderOfMonth;

})();
