/* =========================================================================
 * jackpots.ch — PROVIDER OF THE MONTH — MOBILE
 * -------------------------------------------------------------------------
 * Mobile companion to ProviderOfMonth.jsx. Self-contained (the desktop file
 * is not loaded on mobile), same Strapi entry, same data contract.
 *
 * Differences vs. desktop:
 *   • Stacked layout: logo, tagline, title and CTA on top; carousel below.
 *   • Swipe left / right to change game (plus tap side cards or dots).
 *   • Autoplay pauses while the user is touching the carousel.
 *   • Uses `backgroundMobile` (portrait) if set in Strapi, else `background`.
 *
 * Identical to desktop:
 *   • Strapi config name 'provider-of-the-month', language from URL
 *     (/de/, /en/, /fr/, /it/ → fallback DE), per-language text + hrefs.
 *   • 4 s autoplay, reduced-motion respected, MIN/MAX on centre card only.
 *   • Kameleoon goals: 'potm-click-cta', 'potm-click-game' (+ optional 'potm-click-game-rank-<n>').
 *   • Renders nothing if Strapi fails, is malformed or `active: false`.
 * ========================================================================= */
(function () {

  /* ---- Config (must match desktop) -------------------------------------- */
  var STRAPI_BASE_URL = 'https://strapi.jp.gamingenius.com';
  var CONFIG_NAME     = 'provider-of-the-month';
  var LANGS           = ['de', 'en', 'fr', 'it'];
  var DEFAULT_LANG    = 'de';
  var AUTOPLAY_MS     = 4000;
  var SWIPE_PX        = 40;   // min horizontal distance that counts as a swipe

  var RED_JP = '#C10230';
  var INK_JP = '#1D1E1B';


  /* =======================================================================
   * Helpers
   * ===================================================================== */
  function detectLang() {
    var seg = (window.location.pathname.split('/')[1] || '').toLowerCase();
    return LANGS.indexOf(seg) !== -1 ? seg : DEFAULT_LANG;
  }

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
    } catch (e) { /* ignore */ }
  }

  function fetchProviderOfMonthMobile() {
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
      logoBrightness: (function (b) { b = parseFloat(b); return isFinite(b) && b > 0 ? Math.min(3, Math.max(0.5, b)) : 1; })(payload.logoBrightness),
      providerName: pick(payload.providerName, lang),
      tagline:      pick(payload.tagline, lang),
      title:        pick(payload.title, lang),
      ctaLabel:     pick(payload.cta && payload.cta.label, lang),
      ctaHref:      pick(payload.cta && payload.cta.href, lang),
      games:        games,
    };
  }

  function circularOffset(i, active, n) {
    var half = Math.floor(n / 2);
    return ((i - active + n + half) % n) - half;
  }


  /* =======================================================================
   * Styles (mobile)
   * ===================================================================== */
  (function injectStyles() {
    if (document.getElementById('potm-m-styles')) return;
    var el = document.createElement('style');
    el.id = 'potm-m-styles';
    el.textContent = [
      '.potm-m-wrap{padding:16px 0;}',
      '.potm-m{position:relative;border-radius:14px;overflow:hidden;background:' + INK_JP + ';color:#fff;font-family:Roboto,Arial,sans-serif;padding:22px 16px 20px;isolation:isolate;text-align:center;}',
      '.potm-m-bg{position:absolute;inset:0;background-size:cover;background-position:center;z-index:-2;}',
      '.potm-m-bg--fallback{background:radial-gradient(140% 90% at 50% 80%,#3a3b37 0%,' + INK_JP + ' 70%);}',
      '.potm-m-overlay{position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(29,30,27,.92) 0%,rgba(29,30,27,.72) 42%,rgba(29,30,27,.45) 70%,rgba(29,30,27,.8) 100%);}',

      // Box adapts to the logo: fixed height, width follows the logo's proportions.
      '.potm-m-logo{display:inline-flex;align-items:center;justify-content:center;height:60px;padding:0 18px;max-width:100%;box-sizing:border-box;border-radius:12px;background:rgba(29,30,27,.82);border:1px solid rgba(255,255,255,.14);}',
      '.potm-m-logo img{height:28px;width:auto;max-width:min(230px,60vw);object-fit:contain;display:block;}',
      '.potm-m-logo span{font-weight:700;letter-spacing:.08em;text-transform:uppercase;font-size:14px;}',
      '.potm-m-tagline{margin:26px 0 0;font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.72);}',
      '.potm-m-title{margin:8px 0 0;font:italic normal 900 30px/0.95 Roboto,Arial,sans-serif;text-transform:uppercase;letter-spacing:-.01em;color:#fff;text-shadow:0 3px 14px rgba(0,0,0,.35);}',
      '.potm-m-cta{margin-top:18px;display:inline-flex;align-items:center;padding:11px 20px;border-radius:6px;background:' + RED_JP + ';color:#fff !important;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;text-decoration:none !important;box-shadow:0 6px 16px rgba(193,2,48,.35);-webkit-tap-highlight-color:transparent;}',
      '.potm-m-cta:active{transform:scale(.98);}',

      '.potm-m-stage{margin-top:34px;touch-action:pan-y;user-select:none;-webkit-user-select:none;}',
      '.potm-m-track{--potm-m-card:min(46vw,220px);position:relative;height:var(--potm-m-card);}',
      '.potm-m-card{position:absolute;top:0;left:50%;width:var(--potm-m-card);height:var(--potm-m-card);margin-left:calc(var(--potm-m-card) / -2);border-radius:10px;overflow:hidden;background:' + INK_JP + ';box-shadow:0 10px 26px rgba(0,0,0,.45),0 2px 5px rgba(0,0,0,.25);transition:transform 420ms cubic-bezier(.2,0,0,1),opacity 420ms cubic-bezier(.2,0,0,1),filter 420ms ease;color:#fff;text-decoration:none;-webkit-tap-highlight-color:transparent;}',
      '.potm-m-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;pointer-events:none;}',
      '.potm-m-card--side{filter:brightness(.6);}',
      '.potm-m-card--hidden{pointer-events:none;}',

      '.potm-m-scrim{position:absolute;left:0;right:0;bottom:0;padding:22px 10px 8px;background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.6) 45%,rgba(0,0,0,.86) 100%);font-size:10px;line-height:1.3;font-variant-numeric:tabular-nums;opacity:0;transition:opacity 260ms ease 100ms;}',
      '.potm-m-card--active .potm-m-scrim{opacity:1;}',
      '.potm-m-scrim-title{font-weight:700;font-size:11px;margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
      '.potm-m-row{display:flex;justify-content:space-between;gap:6px;white-space:nowrap;}',
      '.potm-m-row b{font-weight:700;letter-spacing:.06em;}',

      '.potm-m-dots{display:flex;justify-content:center;flex-wrap:wrap;gap:6px;margin-top:16px;}',
      '.potm-m-dot{width:7px;height:7px;padding:0;border:0;border-radius:4px;background:rgba(255,255,255,.45);transition:width 220ms ease,background 220ms ease;}',
      '.potm-m-dot--active{width:20px;background:' + RED_JP + ';}',

      '.potm-m-skeleton{height:440px;border-radius:14px;background:linear-gradient(90deg,#2a2b28 0%,#34352f 50%,#2a2b28 100%);background-size:200% 100%;animation:potm-m-sk 1.4s linear infinite;}',
      '@keyframes potm-m-sk{from{background-position:200% 0}to{background-position:-200% 0}}',
      '@media (prefers-reduced-motion:reduce){.potm-m-card,.potm-m-scrim,.potm-m-dot{transition:none}.potm-m-skeleton{animation:none}}',
    ].join('\n');
    document.head.appendChild(el);
  })();

  function cardStyle(offset) {
    var abs = Math.abs(offset);
    var sign = offset < 0 ? -1 : 1;
    if (abs === 0) return { transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 3 };
    if (abs === 1) return { transform: 'translateX(' + (sign * 66) + '%) scale(.78)', opacity: 1, zIndex: 2 };
    return { transform: 'translateX(' + (sign * 110) + '%) scale(.6)', opacity: 0, zIndex: 1 };
  }


  /* =======================================================================
   * <ProviderOfMonthMobile />
   * ===================================================================== */
  function ProviderOfMonthMobile() {
    var lang = detectLang();
    var s = React.useState({ status: 'loading', content: null });
    var state = s[0], setState = s[1];
    var a = React.useState(0);
    var active = a[0], setActive = a[1];
    var p = React.useState(false);
    var paused = p[0], setPaused = p[1];
    var touchRef = React.useRef(null);
    var swipedRef = React.useRef(false);

    var content = state.content;
    var n = content ? content.games.length : 0;

    var reducedMotion = React.useMemo(function () {
      return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }, []);

    React.useEffect(function () {
      var cancelled = false;
      fetchProviderOfMonthMobile()
        .then(function (payload) {
          if (cancelled) return;
          var c = resolveContent(payload, lang);
          setState({ status: c ? 'ready' : 'empty', content: c });
        })
        .catch(function (err) {
          console.warn('[ProviderOfMonthMobile] Strapi fetch failed, widget hidden:', err);
          if (!cancelled) setState({ status: 'error', content: null });
        });
      return function () { cancelled = true; };
    }, [lang]);

    React.useEffect(function () {
      if (paused || reducedMotion || n < 2) return;
      var t = setTimeout(function () { setActive(function (x) { return (x + 1) % n; }); }, AUTOPLAY_MS);
      return function () { clearTimeout(t); };
    }, [active, paused, reducedMotion, n]);

    function go(i) { if (n) setActive(((i % n) + n) % n); }

    // ---- Swipe handling (pointer events: works for finger and mouse) ----
    function onPointerDown(e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      touchRef.current = { x: e.clientX, y: e.clientY };
      swipedRef.current = false;
      setPaused(true);
    }
    function onPointerUp(e) {
      var start = touchRef.current;
      touchRef.current = null;
      setPaused(false);
      if (!start) return;
      var dx = e.clientX - start.x;
      var dy = e.clientY - start.y;
      if (Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(dy)) {
        swipedRef.current = true;   // suppress the click that follows a swipe
        go(active + (dx < 0 ? 1 : -1));
      }
    }

    if (state.status === 'loading') {
      return <section className="potm-m-wrap"><div className="potm-m-skeleton" aria-hidden="true" /></section>;
    }
    if (!content) return null;

    // Separate portrait background for mobile if provided, otherwise the desktop one.
    var mobileBg = content.backgroundMobile || content.background;

    return (
      <section className="potm-m-wrap">
        <div className="potm-m">
          <div
            className={'potm-m-bg' + (mobileBg ? '' : ' potm-m-bg--fallback')}
            style={mobileBg ? { backgroundImage: 'url("' + mobileBg + '")' } : undefined}
          />
          <div className="potm-m-overlay" />

          {/* ---- Top: logo, tagline, title, CTA ---- */}
          <div className="potm-m-logo">
            {content.providerLogo
              ? <img src={content.providerLogo} alt={content.providerName || 'Provider'} style={content.logoBrightness !== 1 ? { filter: 'brightness(' + content.logoBrightness + ')' } : undefined} />
              : <span>{content.providerName}</span>}
          </div>
          {content.tagline && <p className="potm-m-tagline">{content.tagline}</p>}
          {content.title && <h2 className="potm-m-title">{content.title}</h2>}

          {/* ---- Middle: game carousel ---- */}
          <div
            className="potm-m-stage"
            role="region"
            aria-roledescription="carousel"
            aria-label={content.title || 'Provider of the month'}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={function () { touchRef.current = null; setPaused(false); }}
            onDragStart={function (e) { e.preventDefault(); }}
          >
            <div className="potm-m-track">
              {content.games.map(function (g, i) {
                var off = circularOffset(i, active, n);
                var abs = Math.abs(off);
                var cls = 'potm-m-card' + (abs === 0 ? ' potm-m-card--active' : abs === 1 ? ' potm-m-card--side' : ' potm-m-card--hidden');
                return (
                  <a
                    key={g.rank + '-' + i}
                    className={cls}
                    href={g.href}
                    style={cardStyle(off)}
                    tabIndex={abs === 0 ? 0 : -1}
                    aria-hidden={abs === 0 ? undefined : 'true'}
                    aria-label={g.title}
                    draggable="false"
                    onClick={function (e) {
                      if (swipedRef.current) { e.preventDefault(); swipedRef.current = false; return; }
                      if (abs !== 0) { e.preventDefault(); go(i); return; }
                      trackGoal('potm-click-game');                  // one goal for all game clicks
                      trackGoal('potm-click-game-rank-' + g.rank);  // optional: only counts if this goal exists in Kameleoon
                    }}
                  >
                    <img src={g.image} alt={g.title} draggable="false" decoding="async" />
                    <div className="potm-m-scrim">
                      {g.title && <div className="potm-m-scrim-title">{g.title}</div>}
                      {g.min && <div className="potm-m-row"><b>MIN</b><span>{g.min}</span></div>}
                      {g.max && <div className="potm-m-row"><b>MAX</b><span>{g.max}</span></div>}
                    </div>
                  </a>
                );
              })}
            </div>

            {n > 1 && (
              <div className="potm-m-dots">
                {content.games.map(function (g, i) {
                  return (
                    <button
                      key={'dot-' + i}
                      type="button"
                      className={'potm-m-dot' + (i === active ? ' potm-m-dot--active' : '')}
                      aria-label={g.title}
                      aria-current={i === active ? 'true' : undefined}
                      onClick={function () { go(i); }}
                    />
                  );
                })}
              </div>
            )}
          </div>

          {/* ---- Bottom: CTA (centred, below the carousel) ---- */}
          {content.ctaLabel && content.ctaHref && (
            <a className="potm-m-cta" href={content.ctaHref} onClick={function () { trackGoal('potm-click-cta'); }}>
              {content.ctaLabel}
            </a>
          )}
        </div>
      </section>
    );
  }


  /* ---- Expose ----------------------------------------------------------- */
  window.ProviderOfMonthMobile = ProviderOfMonthMobile;

})();
