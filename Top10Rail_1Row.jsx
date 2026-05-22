/* =========================================================================
 * jackpots.ch — TOP 10 MOST POPULAR GAMES — SINGLE SCROLLABLE ROW
 * -------------------------------------------------------------------------
 * Updated version of Top10Rail.jsx.
 *
 * Changes vs. original:
 *   • All 9 games rendered in a single consistent row (no two-row split).
 *   • Exactly 4.3 cards visible at a time — the partial 5th card signals
 *     there is more to scroll.
 *   • Free horizontal scroll (no snap) with native scrollbar hidden.
 *   • Mouse drag-to-scroll on desktop (grab cursor); touch scroll on mobile.
 *   • Dragging does not accidentally trigger card link navigation.
 *   • Thin red progress bar below the rail tracks scroll position.
 *   • Card widths are calculated dynamically from the container width via
 *     ResizeObserver, so the 4.3-visible rule holds at any container size.
 *
 * Unchanged from original:
 *   • Strapi data source (same endpoint, same config name, same shape).
 *   • Fallback list when Strapi is unreachable.
 *   • Click behaviour: <a target="_blank" rel="noopener noreferrer">.
 *   • Brand tokens, fonts, MIN/MAX scrim, fallback artwork.
 *   • All cards use the original size="lg" style (4/3 aspect ratio).
 * ========================================================================= */


/* ---- Strapi endpoint ---------------------------------------------------- */
const STRAPI_BASE_URL = 'https://strapi.jp.gamingenius.com';
const TOP10_CONFIG_NAME = 'top10-games';


/* ---- Brand tokens ------------------------------------------------------- */
const RED_JP = '#C10230';
const INK_JP = '#1D1E1B';


/* ---- Display headline style (Roboto Black Italic) ----------------------- */
const displayItalicJP = {
  fontFamily: 'Roboto',
  fontWeight: 900,
  fontStyle: 'italic',
  textTransform: 'uppercase',
  letterSpacing: '-0.01em',
  lineHeight: 1,
};


/* ---- Fallback artwork map ----------------------------------------------- */
const TOP10_ART = {
  'King of Olympus':       { bg: 'linear-gradient(135deg, #001E4A 0%, #00478A 50%, #8BCBFF 100%)', accent: '#FFD97A', provider: 'Playtech' },
  'Queens of Ra':          { bg: 'linear-gradient(135deg, #3A1E07 0%, #8A5A1B 55%, #E2B25A 100%)', accent: '#F8CB3B', provider: 'Games Global' },
  'Oink Oink Astronauts':  { bg: 'linear-gradient(135deg, #2A0052 0%, #7228D5 50%, #F26B43 100%)', accent: '#F8CB3B', provider: 'Playtech' },
  '4 Supercharged Clovers':{ bg: 'linear-gradient(135deg, #0B3A1C 0%, #1F7A3D 55%, #F59500 100%)', accent: '#FFD97A', provider: 'Playson' },
  'Book of Ra Jewel':      { bg: 'linear-gradient(135deg, #1F1000 0%, #664011 50%, #E5A300 100%)', accent: '#FFD97A', provider: 'Playtech' },
  'Golden Crown':          { bg: 'linear-gradient(135deg, #4A1010 0%, #A60028 55%, #F59500 100%)', accent: '#F8CB3B', provider: 'Fazi' },
  'Mummy Full of Wilds':   { bg: 'linear-gradient(135deg, #1B3D0F 0%, #3B8A1F 55%, #CBE88A 100%)', accent: '#FFD97A', provider: 'Greentube' },
  'Joker 81':              { bg: 'linear-gradient(135deg, #0A0A2E 0%, #2B1B66 50%, #C10230 100%)', accent: '#F8CB3B', provider: 'Synot' },
  'Mighty Wild Panther':   { bg: 'linear-gradient(135deg, #1A1A1A 0%, #3E2E5B 55%, #6C3B9A 100%)', accent: '#F8CB3B', provider: 'Wazdan' },
};


/* ---- Fallback list ------------------------------------------------------ */
const TOP10_GAMES_FALLBACK = [
  { rank: 1, title: 'King of Olympus',         min: '0.10 CHF', max: "30'000.00 CHF", href: 'https://www.jackpots.ch/de/spiel/gates-of-olympus-super-scatter',    image: '' },
  { rank: 2, title: 'Queens of Ra',            min: '0.10 CHF', max: "12'500.00 CHF", href: 'https://www.jackpots.ch/de/spiel/big-bass-splash-1000',               image: '' },
  { rank: 3, title: 'Oink Oink Astronauts',    min: '0.20 CHF', max: "8'000.00 CHF",  href: 'https://www.jackpots.ch/de/spiel/thunder-coins-xxl-hold-and-win',     image: '' },
  { rank: 4, title: '4 Supercharged Clovers',  min: '0.10 CHF', max: "6'250.00 CHF",  href: 'https://www.jackpots.ch/de/spiel/gold-blitz',                         image: '' },
  { rank: 5, title: 'Book of Ra Jewel',        min: '0.10 CHF', max: "5'000.00 CHF",  href: 'https://www.jackpots.ch/de/spiel/queens-of-ra-coin-collect',          image: '' },
  { rank: 6, title: 'Golden Crown',            min: '0.20 CHF', max: "4'000.00 CHF",  href: 'https://www.jackpots.ch/de/spiel/lil-demon-mega-cash-collect',        image: '' },
  { rank: 7, title: 'Mummy Full of Wilds',     min: '0.10 CHF', max: "3'500.00 CHF",  href: 'https://www.jackpots.ch/de/spiel/333-fat-frogs',                      image: '' },
  { rank: 8, title: 'Joker 81',                min: '0.10 CHF', max: "2'500.00 CHF",  href: 'https://www.jackpots.ch/de/spiel/baa-baa-baa',                        image: '' },
  { rank: 9, title: 'Mighty Wild Panther',     min: '0.20 CHF', max: "2'000.00 CHF",  href: 'https://www.jackpots.ch/de/spiel/supercharged-clovers-hold-and-win',  image: '' },
];


/* =========================================================================
 * Strapi fetch — identical contract to original
 * ========================================================================= */
async function fetchTop10FromStrapi() {
  const url = `${STRAPI_BASE_URL}/api/configurations?filters[name][$eq]=${encodeURIComponent(TOP10_CONFIG_NAME)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Strapi responded ${res.status}`);
  const json = await res.json();
  const entry = json?.data?.[0];
  const payload = entry?.attributes?.data ?? entry?.data;
  if (!Array.isArray(payload)) throw new Error('Malformed Strapi payload');
  return payload;
}


/* =========================================================================
 * <Top10Card />
 * -------------------------------------------------------------------------
 * Identical to the original size="lg" card. Width is driven by the CSS
 * custom property --t10-card-w set by the rail on its scroller element.
 * ========================================================================= */
function Top10Card({ rank, title, min, max, href, image, isDragging }) {
  const art = TOP10_ART[title] || { bg: 'linear-gradient(135deg, #6B0119, #C10230)', accent: '#F8CB3B', provider: '' };
  const hasImage = !!(image && image.trim());

  return (
    <a
      href={href || '#'}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => { if (isDragging && isDragging()) e.preventDefault(); }}
      style={{
        flex: '0 0 auto',
        width: 'var(--t10-card-w, 22%)',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Numeral + tile row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        aspectRatio: '4/3',
      }}>

        {/* Giant numeral */}
        <div aria-hidden style={{
          flex: '0 0 34%',
          ...displayItalicJP,
          fontSize: 'clamp(90px, 11vw, 150px)',
          lineHeight: 0.85,
          color: RED_JP,
          textShadow: '0 2px 0 rgba(255,255,255,0.7), 0 8px 20px rgba(193,2,48,0.18)',
          WebkitTextStroke: '0.5px rgba(255,255,255,0.4)',
          pointerEvents: 'none',
          userSelect: 'none',
          fontVariantNumeric: 'lining-nums',
          textAlign: 'center',
          marginRight: -4,
          whiteSpace: 'nowrap',
        }}>{rank}</div>

        {/* Game tile */}
        <div style={{
          flex: '1 1 auto',
          aspectRatio: '1/1',
          borderRadius: 8,
          overflow: 'hidden',
          background: hasImage ? '#1D1E1B' : art.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 18px rgba(29,30,27,0.22), 0 2px 4px rgba(29,30,27,0.12)',
          position: 'relative',
          transition: 'transform 200ms cubic-bezier(0.2,0,0,1), box-shadow 200ms cubic-bezier(0.2,0,0,1)',
        }}>

          {hasImage && (
            <img src={image} alt={title} style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              display: 'block',
            }} />
          )}

          {!hasImage && (
            <div style={{
              ...displayItalicJP,
              color: art.accent,
              fontSize: 'clamp(14px, 1.5vw, 22px)',
              textAlign: 'center',
              textShadow: '0 2px 6px rgba(0,0,0,0.5)',
              padding: 8,
              lineHeight: 1,
              marginBottom: 46,
            }}>{title}</div>
          )}

          {!hasImage && art.provider && (
            <div style={{
              position: 'absolute', top: 8, right: 10,
              fontSize: 9, fontWeight: 500, letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase',
            }}>{art.provider}</div>
          )}

          {/* MIN / MAX scrim */}
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 0,
            padding: '10px 12px',
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.82) 100%)',
            color: '#fff',
            fontSize: 11,
            fontWeight: 400,
            lineHeight: 1.35,
            display: 'flex', flexDirection: 'column', gap: 1,
            fontVariantNumeric: 'tabular-nums',
            letterSpacing: '0.01em',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, whiteSpace: 'nowrap' }}>
              <span style={{ fontWeight: 700, letterSpacing: '0.06em' }}>MIN</span>
              <span>{min.replace(/\s*CHF\s*$/i, '')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, whiteSpace: 'nowrap' }}>
              <span style={{ fontWeight: 700, letterSpacing: '0.06em' }}>MAX</span>
              <span>{max.replace(/\s*CHF\s*$/i, '')}</span>
            </div>
          </div>

        </div>
      </div>
    </a>
  );
}


/* =========================================================================
 * <Top10Rail_1Row />
 * -------------------------------------------------------------------------
 * Single horizontally scrollable row. Shows 4.3 cards at a time so the
 * partial fifth card signals scrollability. Card widths are recalculated
 * on mount and on container resize via ResizeObserver.
 * ========================================================================= */
function Top10Rail_1Row({ heading = 'TOP 10 MOST POPULAR GAMES' }) {
  const [games, setGames] = React.useState(TOP10_GAMES_FALLBACK);
  const [progress, setProgress] = React.useState(0); // 0..1
  const scrollerRef = React.useRef(null);

  // Mouse drag-to-scroll state.
  const dragRef = React.useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });

  const onMouseDown = React.useCallback((e) => {
    const el = scrollerRef.current;
    if (!el) return;
    dragRef.current = { active: true, startX: e.pageX, scrollLeft: el.scrollLeft, moved: false };
    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';
  }, []);

  const onMouseMove = React.useCallback((e) => {
    const drag = dragRef.current;
    if (!drag.active) return;
    const dx = e.pageX - drag.startX;
    if (Math.abs(dx) > 4) drag.moved = true;
    scrollerRef.current.scrollLeft = drag.scrollLeft - dx;
  }, []);

  const onMouseUp = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    dragRef.current.active = false;
    el.style.cursor = 'grab';
    el.style.userSelect = '';
    // Reset moved AFTER the click event has fired on the card anchor,
    // otherwise the guard always sees moved=false and lets the click through.
    setTimeout(() => { dragRef.current.moved = false; }, 0);
  }, []);

  // Cancel drag if mouse leaves the scroller entirely.
  const onMouseLeave = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el || !dragRef.current.active) return;
    dragRef.current.active = false;
    el.style.cursor = 'grab';
    el.style.userSelect = '';
    setTimeout(() => { dragRef.current.moved = false; }, 0);
  }, []);

  // Fetch live data from Strapi on mount.
  React.useEffect(() => {
    let cancelled = false;
    fetchTop10FromStrapi()
      .then(data => { if (!cancelled) setGames(data); })
      .catch(err => {
        console.warn('[Top10Rail_1Row] Strapi fetch failed, using fallback:', err);
      });
    return () => { cancelled = true; };
  }, []);

  // Keep --t10-card-w in sync with the scroller's measured width so we
  // always show exactly 4.3 cards regardless of container width.
  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      // 3 gaps of 20px between the first 4 visible cards.
      const cardW = Math.floor((el.clientWidth - 3 * 20) / 4.3);
      el.style.setProperty('--t10-card-w', cardW + 'px');
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => { ro.disconnect(); window.removeEventListener('resize', update); };
  }, []);

  // Update progress bar as the user scrolls.
  const onScroll = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  const sorted = [...games].sort((a, b) => a.rank - b.rank).slice(0, 9);

  return (
    <section className="GameSection Home">
      <div className="wrapper-games wrapper-game-section with-title">
        <div className="wrapper-games-inner">

          {/* Heading — same wrapper as original for consistent site styling. */}
          <div className="section-header">
            <h2 style={{ margin: 0, color: INK_JP }}>{heading}</h2>
          </div>

          {/* Horizontal scroller */}
          <div
            ref={scrollerRef}
            onScroll={onScroll}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            style={{
              display: 'flex',
              gap: 20,
              overflowX: 'auto',
              overflowY: 'visible',
              scrollbarWidth: 'none',        // Firefox
              msOverflowStyle: 'none',       // IE/Edge legacy
              WebkitOverflowScrolling: 'touch',
              padding: '4px 0 8px',
              cursor: 'grab',
            }}
          >
            {sorted.map(g => (
              <Top10Card key={g.rank} {...g} isDragging={() => dragRef.current.moved} />
            ))}
            {/* Trailing spacer so the last card isn't flush against the edge */}
            <div aria-hidden style={{ flex: '0 0 4px' }} />
          </div>

          {/* Progress bar */}
          <div style={{
            marginTop: 10,
            height: 3,
            borderRadius: 2,
            background: 'rgba(29,30,27,0.10)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0, bottom: 0,
              width: '44%',
              left: `${progress * 56}%`, // (100 - thumbWidth) so right edge stops at 100%
              background: RED_JP,
              borderRadius: 2,
              transition: 'left 80ms linear',
            }} />
          </div>

        </div>
      </div>
    </section>
  );
}


/* ---- Hide native scrollbar on WebKit browsers --------------------------- */
(function injectScrollerStyles() {
  if (document.getElementById('t10-1row-styles')) return;
  const s = document.createElement('style');
  s.id = 't10-1row-styles';
  s.textContent = `
    [data-t10-scroller]::-webkit-scrollbar { display: none; }
  `;
  document.head.appendChild(s);
})();


/* ---- Expose ------------------------------------------------------------- */
Object.assign(window, {
  Top10Rail_1Row,
  Top10Card,
  TOP10_GAMES_FALLBACK,
  TOP10_ART,
  fetchTop10FromStrapi,
});
