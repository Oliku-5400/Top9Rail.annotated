/* =========================================================================
 * jackpots.ch — TOP 10 MOST POPULAR GAMES — MOBILE
 * -------------------------------------------------------------------------
 * Mobile-optimised companion to Top10Rail.jsx.
 *
 * Differences vs. desktop:
 *   • All 9 games on a single horizontal row (no two-row split).
 *   • 2.3 tiles visible at first sight; the partial third tile is the
 *     affordance that tells the user "swipe for more".
 *   • CSS scroll-snap so every tile lands cleanly under the thumb.
 *   • Giant red numeral is OVERLAID on the tile (bottom-left, bleeding out
 *     of the tile slightly) instead of sitting in its own column — saves
 *     horizontal real-estate while keeping the brand's visual signature.
 *   • Thin progress bar under the rail tracks scroll position.
 *
 * Identical to desktop:
 *   • Strapi data source (same endpoint, same config name, same shape).
 *   • Fallback list when Strapi is unreachable.
 *   • Click behaviour: <a target="_blank" rel="noopener noreferrer"> on
 *     each card so the same game-detail deep links open the same way.
 *   • Tokens, fonts, MIN/MAX scrim, fallback artwork.
 * ========================================================================= */


/* ---- Strapi endpoint (must match desktop) ------------------------------- */
const STRAPI_BASE_URL_M = 'https://strapi.jp.gamingenius.com';
const TOP10_CONFIG_NAME_M = 'top10-games';


/* ---- Brand tokens ------------------------------------------------------- */
const RED_JP_M = '#C10230';
const INK_JP_M = '#1D1E1B';


/* ---- Display headline style (Roboto Black Italic) ----------------------- */
const displayItalicJP_M = {
  fontFamily: 'Roboto',
  fontWeight: 900,
  fontStyle: 'italic',
  textTransform: 'uppercase',
  letterSpacing: '-0.01em',
  lineHeight: 1,
};


/* ---- Fallback artwork map (mirrors desktop) ----------------------------- */
const TOP10_ART_M = {
  'King of Olympus':       {bg: 'linear-gradient(135deg, #001E4A 0%, #00478A 50%, #8BCBFF 100%)', accent: '#FFD97A', provider: 'Playtech'},
  'Queens of Ra':          {bg: 'linear-gradient(135deg, #3A1E07 0%, #8A5A1B 55%, #E2B25A 100%)', accent: '#F8CB3B', provider: 'Games Global'},
  'Oink Oink Astronauts':  {bg: 'linear-gradient(135deg, #2A0052 0%, #7228D5 50%, #F26B43 100%)', accent: '#F8CB3B', provider: 'Playtech'},
  '4 Supercharged Clovers':{bg: 'linear-gradient(135deg, #0B3A1C 0%, #1F7A3D 55%, #F59500 100%)', accent: '#FFD97A', provider: 'Playson'},
  'Book of Ra Jewel':      {bg: 'linear-gradient(135deg, #1F1000 0%, #664011 50%, #E5A300 100%)', accent: '#FFD97A', provider: 'Playtech'},
  'Golden Crown':          {bg: 'linear-gradient(135deg, #4A1010 0%, #A60028 55%, #F59500 100%)', accent: '#F8CB3B', provider: 'Fazi'},
  'Mummy Full of Wilds':   {bg: 'linear-gradient(135deg, #1B3D0F 0%, #3B8A1F 55%, #CBE88A 100%)', accent: '#FFD97A', provider: 'Greentube'},
  'Joker 81':              {bg: 'linear-gradient(135deg, #0A0A2E 0%, #2B1B66 50%, #C10230 100%)', accent: '#F8CB3B', provider: 'Synot'},
  'Mighty Wild Panther':   {bg: 'linear-gradient(135deg, #1A1A1A 0%, #3E2E5B 55%, #6C3B9A 100%)', accent: '#F8CB3B', provider: 'Wazdan'},
};


/* ---- Fallback list (mirrors desktop) ------------------------------------ */
const TOP10_GAMES_FALLBACK_M = [
  {rank: 1, title: 'King of Olympus',         min: '0.10 CHF', max: "30'000.00 CHF", href: 'https://www.jackpots.ch/de/spiel/gates-of-olympus-super-scatter', image: ''},
  {rank: 2, title: 'Queens of Ra',            min: '0.10 CHF', max: "12'500.00 CHF", href: 'https://www.jackpots.ch/de/spiel/big-bass-splash-1000',          image: ''},
  {rank: 3, title: 'Oink Oink Astronauts',    min: '0.20 CHF', max: "8'000.00 CHF",  href: 'https://www.jackpots.ch/de/spiel/thunder-coins-xxl-hold-and-win',  image: ''},
  {rank: 4, title: '4 Supercharged Clovers',  min: '0.10 CHF', max: "6'250.00 CHF",  href: 'https://www.jackpots.ch/de/spiel/gold-blitz',                     image: ''},
  {rank: 5, title: 'Book of Ra Jewel',        min: '0.10 CHF', max: "5'000.00 CHF",  href: 'https://www.jackpots.ch/de/spiel/queens-of-ra-coin-collect',      image: ''},
  {rank: 6, title: 'Golden Crown',            min: '0.20 CHF', max: "4'000.00 CHF",  href: 'https://www.jackpots.ch/de/spiel/lil-demon-mega-cash-collect',    image: ''},
  {rank: 7, title: 'Mummy Full of Wilds',     min: '0.10 CHF', max: "3'500.00 CHF",  href: 'https://www.jackpots.ch/de/spiel/333-fat-frogs',                  image: ''},
  {rank: 8, title: 'Joker 81',                min: '0.10 CHF', max: "2'500.00 CHF",  href: 'https://www.jackpots.ch/de/spiel/baa-baa-baa',                    image: ''},
  {rank: 9, title: 'Mighty Wild Panther',     min: '0.20 CHF', max: "2'000.00 CHF",  href: 'https://www.jackpots.ch/de/spiel/supercharged-clovers-hold-and-win', image: ''},
];


/* =========================================================================
 * Strapi fetch — identical contract to desktop
 * ========================================================================= */
async function fetchTop10FromStrapiMobile() {
  const url = `${STRAPI_BASE_URL_M}/api/configurations?filters[name][$eq]=${encodeURIComponent(TOP10_CONFIG_NAME_M)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Strapi responded ${res.status}`);
  const json = await res.json();
  const entry = json?.data?.[0];
  const payload = entry?.attributes?.data ?? entry?.data;
  if (!Array.isArray(payload)) throw new Error('Malformed Strapi payload');
  return payload;
}


/* =========================================================================
 * <Top10CardMobile />
 * -------------------------------------------------------------------------
 * Square tile with the giant red numeral overlaid on the bottom-left,
 * partially bleeding out of the tile so it reads as a "stamp" on the
 * artwork (same visual signature as desktop, but space-efficient).
 * ========================================================================= */
function Top10CardMobile({ rank, title, min, max, href, image }) {
  const art = TOP10_ART_M[title] || {bg: 'linear-gradient(135deg, #6B0119, #C10230)', accent: '#F8CB3B', provider: ''};
  const hasImage = !!(image && image.trim());

  return (
    <a
      href={href || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="t10m-card"
      style={{
        position: 'relative',
        flex: '0 0 auto',
        // Width is driven by --t10m-card-w which the rail sets based on
        // its measured client width (so we get ~2.3 cards visible no
        // matter the container — phone, tablet, device frame).
        width: 'var(--t10m-card-w, 150px)',
        scrollSnapAlign: 'start',
        textDecoration: 'none',
        color: 'inherit',
        paddingBottom: 18,    // breathing room for the bleed-out numeral
        paddingLeft: 14,      // breathing room for the bleed-out numeral
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* ----- Square tile ------------------------------------------------ */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1 / 1',
        borderRadius: 10,
        overflow: 'hidden',
        background: hasImage ? '#1D1E1B' : art.bg,
        boxShadow: '0 6px 16px rgba(29,30,27,0.22), 0 2px 4px rgba(29,30,27,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {hasImage && (
          <img src={image} alt={title} style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            display: 'block',
          }}/>
        )}

        {!hasImage && (
          <div style={{
            ...displayItalicJP_M,
            color: art.accent,
            fontSize: 'clamp(13px, 3.6vw, 17px)',
            textAlign: 'center',
            textShadow: '0 2px 6px rgba(0,0,0,0.5)',
            padding: 8,
            lineHeight: 1,
            marginBottom: 30,
          }}>{title}</div>
        )}

        {!hasImage && art.provider && (
          <div style={{
            position: 'absolute', top: 6, right: 8,
            fontSize: 8, fontWeight: 500, letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase',
          }}>{art.provider}</div>
        )}

        {/* MIN / MAX scrim */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          padding: '8px 10px 8px 38%',  // leave room for numeral overlap
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.85) 100%)',
          color: '#fff',
          fontSize: 10,
          fontWeight: 400,
          lineHeight: 1.3,
          display: 'flex', flexDirection: 'column', gap: 1,
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: '0.01em',
        }}>
          <div style={{display: 'flex', justifyContent: 'space-between', gap: 6, whiteSpace: 'nowrap'}}>
            <span style={{fontWeight: 700, letterSpacing: '0.06em'}}>MIN</span>
            <span>{min.replace(/\s*CHF\s*$/i, '')}</span>
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between', gap: 6, whiteSpace: 'nowrap'}}>
            <span style={{fontWeight: 700, letterSpacing: '0.06em'}}>MAX</span>
            <span>{max.replace(/\s*CHF\s*$/i, '')}</span>
          </div>
        </div>
      </div>

      {/* ----- Giant numeral, overlaid bottom-left, bleeding out ---------- */}
      <div aria-hidden style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        ...displayItalicJP_M,
        fontSize: 'clamp(72px, 22vw, 110px)',
        lineHeight: 0.85,
        color: RED_JP_M,
        textShadow: '0 2px 0 rgba(255,255,255,0.85), 0 8px 22px rgba(193,2,48,0.28)',
        WebkitTextStroke: '0.5px rgba(255,255,255,0.5)',
        pointerEvents: 'none',
        userSelect: 'none',
        fontVariantNumeric: 'lining-nums',
      }}>{rank}</div>
    </a>
  );
}


/* =========================================================================
 * <Top10RailMobile />
 * ========================================================================= */
function Top10RailMobile({ heading = 'TOP 9 MOST POPULAR GAMES' }) {
  const [games, setGames] = React.useState(TOP10_GAMES_FALLBACK_M);
  const [progress, setProgress] = React.useState(0);  // 0..1
  const scrollerRef = React.useRef(null);

  React.useEffect(() => {
    let cancelled = false;
    fetchTop10FromStrapiMobile()
      .then(data => { if (!cancelled) setGames(data); })
      .catch(err => {
        console.warn('[Top10RailMobile] Strapi fetch failed, using fallback:', err);
      });
    return () => { cancelled = true; };
  }, []);

  // Keep --t10m-card-w in sync with the rail's measured width so we always
  // show ~2.3 cards, regardless of viewport / wrapper / device frame.
  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      // Subtract horizontal padding (16 + 16) so the math reflects the
      // visible track width.
      const w = el.clientWidth - 32;
      const cardW = Math.max(110, Math.min(180, Math.floor(w / 2.3)));
      el.style.setProperty('--t10m-card-w', cardW + 'px');
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => { ro.disconnect(); window.removeEventListener('resize', update); };
  }, []);

  // Update the progress bar as the user swipes.
  const onScroll = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  const sorted = [...games].sort((a, b) => a.rank - b.rank).slice(0, 9);

  return (
    <section style={{padding: '20px 0 18px'}}>

      {/* Heading — sized down for mobile but same display style. */}
<div style={{padding: '0'}}> 
  <h2 style={{
    font: 'italic normal 900 22px/27px Roboto, sans-serif',
    textTransform: 'uppercase',
    color: '#000',
    margin: '0 0 10px 0',
    letterSpacing: 0,
  }}>{heading}</h2>
</div>

      {/* Horizontal scroller */}
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="t10m-scroller"
        style={{
          display: 'flex',
          gap: 4,
          overflowX: 'auto',
          overflowY: 'visible',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
padding: '4px 16px 24px',
scrollPaddingLeft: 16,
        }}
      >
        {sorted.map(g => (
          <Top10CardMobile key={g.rank} {...g} />
        ))}
        {/* trailing spacer so the last card can snap to start */}
        <div aria-hidden style={{flex: '0 0 8px'}} />
      </div>

      {/* Thin progress bar — thumb slides along a track as the user swipes. */}
      <div style={{
        margin: '6px 16px 0',
        height: 3,
        borderRadius: 2,
        background: 'rgba(29,30,27,0.10)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0, bottom: 0,
          width: '32%',
          left: `${progress * 68}%`,  // (100 - thumbWidth) so right edge stops at 100%
          background: RED_JP_M,
          borderRadius: 2,
          transition: 'left 120ms linear',
        }} />
      </div>
    </section>
  );
}


/* ---- Hide native scrollbar on the rail (kept clean on desktop preview) -- */
(function injectScrollerStyles(){
  if (document.getElementById('t10m-styles')) return;
  const s = document.createElement('style');
  s.id = 't10m-styles';
  s.textContent = `
    .t10m-scroller { scrollbar-width: none; }
    .t10m-scroller::-webkit-scrollbar { display: none; }
    .t10m-card { transition: transform 200ms cubic-bezier(0.2,0,0,1); }
    .t10m-card:active { transform: scale(0.98); }
  `;
  document.head.appendChild(s);
})();


/* ---- Expose ------------------------------------------------------------- */
Object.assign(window, {
  Top10RailMobile,
  Top10CardMobile,
  TOP10_GAMES_FALLBACK_M,
  TOP10_ART_M,
  fetchTop10FromStrapiMobile,
});
