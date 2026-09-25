function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* =========================================================================
 * jackpots.ch — TOP 10 MOST POPULAR GAMES — annotated export for handoff
 * -------------------------------------------------------------------------
 * Documented copy of `Top10Rail.jsx`. Behaviour is identical; every
 * non-obvious line has an explanatory comment. Repetitive patterns are
 * explained once and referred to in subsequent occurrences.
 *
 * Integration:
 *   1. Ship this alongside React 18 + Babel Standalone (JSX is transpiled
 *      in-browser; see the production index.html for the <script> tags).
 *   2. Link the jackpots.ch tokens file `colors_and_type.css` so Roboto
 *      Black Italic (900) is available.
 *   3. Render <Top10Rail /> anywhere in your page tree.
 *
 * ─────────────────────────────────────────────────────────────
 *  DATA SOURCE — Strapi CMS
 * ─────────────────────────────────────────────────────────────
 *  The list of games is fetched at runtime from a Strapi
 *  `configuration` entry named `top10-games`. Its `data` field is a
 *  JSON array of: { rank, title, min, max, href, image }.
 *  Editors update the Top 10 by editing that entry in Strapi and
 *  clicking Publish. No code deploy required.
 *
 *  End-users cannot upload images — thumbnails are CMS-controlled.
 *
 *  If the Strapi fetch fails (network error, CMS down, etc.) the
 *  component falls back to the hardcoded TOP10_GAMES_FALLBACK list
 *  defined below so the rail never renders empty.
 * ─────────────────────────────────────────────────────────────
 *
 * Data contract: each entry in the JSON array is
 *   { rank, title, min, max, href, image }
 *     rank  1..9
 *     href  → deep link to the game detail page on jackpots.ch
 *     image → remote URL to the thumbnail, or '' for the fallback
 * ========================================================================= */

/* ---- Strapi endpoint ----------------------------------------------------
 * The Strapi instance lives at STRAPI_BASE_URL. We query the
 * `configurations` collection, filtered by the entry name. The Public
 * role in Strapi must have the `configuration: find` permission enabled.
 * -------------------------------------------------------------------------- */
var STRAPI_BASE_URL = 'https://strapi.jp.gamingenius.com';
var TOP10_CONFIG_NAME = 'top10-games';

/* ---- Brand tokens (hard-coded here so this file is self-contained) ------ */
var RED_JP = '#C10230'; // brand red — used for the giant numerals
var INK_JP = '#1D1E1B'; // primary text colour (near-black)

/* ---- Shared display-headline style --------------------------------------
 * Roboto Black Italic is the jackpots.ch display face. Centralising the
 * style keeps the heading, numerals and tile-fallback titles visually
 * consistent. Spread it with ...displayItalicJP.
 * -------------------------------------------------------------------------- */
var displayItalicJP = {
  fontFamily: 'Roboto',
  fontWeight: 900,
  // "Roboto Black" == "Roboto Bk" in the brand doc
  fontStyle: 'italic',
  textTransform: 'uppercase',
  letterSpacing: '-0.01em',
  // slightly tight tracking at large sizes
  lineHeight: 1 // display-tight leading
};

/* ---- Placeholder artwork per game ---------------------------------------
 * Used ONLY when `image` is empty. Each entry maps a game title to a
 * gradient + an accent colour for the fallback wordmark, plus the game
 * provider (shown top-right).
 * -------------------------------------------------------------------------- */
var TOP10_ART = {
  'King of Olympus': {
    bg: 'linear-gradient(135deg, #001E4A 0%, #00478A 50%, #8BCBFF 100%)',
    accent: '#FFD97A',
    provider: 'Playtech'
  },
  'Queens of Ra': {
    bg: 'linear-gradient(135deg, #3A1E07 0%, #8A5A1B 55%, #E2B25A 100%)',
    accent: '#F8CB3B',
    provider: 'Games Global'
  },
  'Oink Oink Astronauts': {
    bg: 'linear-gradient(135deg, #2A0052 0%, #7228D5 50%, #F26B43 100%)',
    accent: '#F8CB3B',
    provider: 'Playtech'
  },
  '4 Supercharged Clovers': {
    bg: 'linear-gradient(135deg, #0B3A1C 0%, #1F7A3D 55%, #F59500 100%)',
    accent: '#FFD97A',
    provider: 'Playson'
  },
  'Book of Ra Jewel': {
    bg: 'linear-gradient(135deg, #1F1000 0%, #664011 50%, #E5A300 100%)',
    accent: '#FFD97A',
    provider: 'Playtech'
  },
  'Golden Crown': {
    bg: 'linear-gradient(135deg, #4A1010 0%, #A60028 55%, #F59500 100%)',
    accent: '#F8CB3B',
    provider: 'Fazi'
  },
  'Mummy Full of Wilds': {
    bg: 'linear-gradient(135deg, #1B3D0F 0%, #3B8A1F 55%, #CBE88A 100%)',
    accent: '#FFD97A',
    provider: 'Greentube'
  },
  'Joker 81': {
    bg: 'linear-gradient(135deg, #0A0A2E 0%, #2B1B66 50%, #C10230 100%)',
    accent: '#F8CB3B',
    provider: 'Synot'
  },
  'Mighty Wild Panther': {
    bg: 'linear-gradient(135deg, #1A1A1A 0%, #3E2E5B 55%, #6C3B9A 100%)',
    accent: '#F8CB3B',
    provider: 'Wazdan'
  }
};

/* ---- Fallback list ------------------------------------------------------
 * Used only if the Strapi fetch fails. Keeps the rail functional when the
 * CMS is unreachable. Same shape as the live data contract.
 *   rank  : 1..9 — rendered as the giant italic numeral on the left.
 *   title : display name (shown only when `image` is empty).
 *   min   : minimum stake, e.g. '0.10 CHF'. " CHF" is stripped at render.
 *   max   : maximum stake, same treatment.
 *   href  : deep link to the game detail page.
 *   image : thumbnail URL, or '' to show the coloured fallback tile.
 * -------------------------------------------------------------------------- */
var TOP10_GAMES_FALLBACK = [{
  rank: 1,
  title: 'King of Olympus',
  min: '0.10 CHF',
  max: "30'000.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/gates-of-olympus-super-scatter',
  image: '' /* Add link here for thumbnail 1 */
}, {
  rank: 2,
  title: 'Queens of Ra',
  min: '0.10 CHF',
  max: "12'500.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/big-bass-splash-1000',
  image: '' /* Add link here for thumbnail 2 */
}, {
  rank: 3,
  title: 'Oink Oink Astronauts',
  min: '0.20 CHF',
  max: "8'000.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/thunder-coins-xxl-hold-and-win',
  image: '' /* Add link here for thumbnail 3 */
}, {
  rank: 4,
  title: '4 Supercharged Clovers',
  min: '0.10 CHF',
  max: "6'250.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/gold-blitz',
  image: '' /* Add link here for thumbnail 4 */
}, {
  rank: 5,
  title: 'Book of Ra Jewel',
  min: '0.10 CHF',
  max: "5'000.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/queens-of-ra-coin-collect',
  image: '' /* Add link here for thumbnail 5 */
}, {
  rank: 6,
  title: 'Golden Crown',
  min: '0.20 CHF',
  max: "4'000.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/lil-demon-mega-cash-collect',
  image: '' /* Add link here for thumbnail 6 */
}, {
  rank: 7,
  title: 'Mummy Full of Wilds',
  min: '0.10 CHF',
  max: "3'500.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/333-fat-frogs',
  image: '' /* Add link here for thumbnail 7 */
}, {
  rank: 8,
  title: 'Joker 81',
  min: '0.10 CHF',
  max: "2'500.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/baa-baa-baa',
  image: '' /* Add link here for thumbnail 8 */
}, {
  rank: 9,
  title: 'Mighty Wild Panther',
  min: '0.20 CHF',
  max: "2'000.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/supercharged-clovers-hold-and-win',
  image: '' /* Add link here for thumbnail 9 */
}];

/* =========================================================================
 * <Top10Card /> — one rank tile
 * -------------------------------------------------------------------------
 * Layout: a flex row containing the giant numeral (left) and the game tile
 * (right). The whole card is an <a> that navigates to `href` in a new tab.
 *
 * Props:
 *   rank, title, min, max, href, image : see TOP10_GAMES contract above
 *   size                               : 'lg' (row 1, 4-up) or 'sm' (row 2, 5-up)
 * ========================================================================= */
function Top10Card(_ref) {
  var rank = _ref.rank,
    title = _ref.title,
    min = _ref.min,
    max = _ref.max,
    href = _ref.href,
    image = _ref.image,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'lg' : _ref$size;
  // Look up the fallback artwork; default to a brand-red gradient if the
  // title isn't registered in TOP10_ART.
  var art = TOP10_ART[title] || {
    bg: 'linear-gradient(135deg, #6B0119, #C10230)',
    accent: '#F8CB3B',
    provider: ''
  };

  // Treat whitespace-only strings as "no image". This keeps the fallback
  // tile showing until the editor actually pastes a URL in.
  var hasImage = !!(image && image.trim());

  // Size presets — row 1 tiles are larger (4 across), row 2 smaller (5 across).
  var preset = size === 'lg' ? {
    numeral: 'clamp(90px, 11vw, 150px)',
    title: 'clamp(14px, 1.5vw, 22px)',
    pad: 8
  } : {
    numeral: 'clamp(70px, 8.5vw, 120px)',
    title: 'clamp(12px, 1.1vw, 18px)',
    pad: 6
  };
  return (
    /*#__PURE__*/
    // target=_blank opens in a new tab; rel=noopener,noreferrer is the
    // standard security/performance best practice for external links.
    React.createElement("a", {
      href: href || '#',
      onClick: function onClick() {
        return window.Kameleoon && window.Kameleoon.API.Goals.processConversion('top10-click-rank-' + rank);
      },
      style: {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        // lets the tile shrink inside CSS grid cells
        textDecoration: 'none',
        color: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        aspectRatio: size === 'lg' ? '4/3' : '3/2.4'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": true,
      style: _objectSpread(_objectSpread({
        flex: '0 0 34%'
      }, displayItalicJP), {}, {
        fontSize: preset.numeral,
        lineHeight: 0.85,
        color: RED_JP,
        textShadow: '0 2px 0 rgba(255,255,255,0.7), 0 8px 20px rgba(193,2,48,0.18)',
        WebkitTextStroke: '0.5px rgba(255,255,255,0.4)',
        pointerEvents: 'none',
        userSelect: 'none',
        fontVariantNumeric: 'lining-nums',
        textAlign: 'center',
        marginRight: -4,
        // pulls italic edge toward the tile
        whiteSpace: 'nowrap'
      })
    }, rank), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 auto',
        aspectRatio: '1/1',
        // tiles are square
        borderRadius: 8,
        overflow: 'hidden',
        // Dark fill behind transparent artwork; otherwise fallback gradient.
        background: hasImage ? '#1D1E1B' : art.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 18px rgba(29,30,27,0.22), 0 2px 4px rgba(29,30,27,0.12)',
        position: 'relative',
        transition: 'transform 200ms cubic-bezier(0.2,0,0,1), box-shadow 200ms cubic-bezier(0.2,0,0,1)'
      }
    }, hasImage && /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: title,
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        display: 'block'
      }
    }), !hasImage && /*#__PURE__*/React.createElement("div", {
      style: _objectSpread(_objectSpread({}, displayItalicJP), {}, {
        color: art.accent,
        fontSize: preset.title,
        textAlign: 'center',
        textShadow: '0 2px 6px rgba(0,0,0,0.5)',
        padding: preset.pad,
        lineHeight: 1,
        marginBottom: size === 'lg' ? 46 : 36
      })
    }, title), !hasImage && art.provider && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 8,
        right: 10,
        fontSize: 9,
        fontWeight: 500,
        letterSpacing: '0.08em',
        color: 'rgba(255,255,255,0.75)',
        textTransform: 'uppercase'
      }
    }, art.provider), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: size === 'lg' ? '10px 12px' : '7px 9px',
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.82) 100%)',
        color: '#fff',
        fontSize: size === 'lg' ? 11 : 10,
        fontWeight: 400,
        lineHeight: 1.35,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        fontVariantNumeric: 'tabular-nums',
        // aligns digits across rows
        letterSpacing: '0.01em'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8,
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        letterSpacing: '0.06em'
      }
    }, "MIN"), /*#__PURE__*/React.createElement("span", null, min.replace(/\s*CHF\s*$/i, ''))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8,
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        letterSpacing: '0.06em'
      }
    }, "MAX"), /*#__PURE__*/React.createElement("span", null, max.replace(/\s*CHF\s*$/i, '')))))))
  );
}

/* =========================================================================
 * Strapi fetch
 * -------------------------------------------------------------------------
 * Strapi v4 response shape:
 *   { data: [ { id, attributes: { name, data: [...] } } ], meta: {...} }
 * Strapi v5 flattens `attributes` onto the entry — we handle both.
 * Any error (non-2xx, non-array payload, network) throws and the caller
 * falls back to TOP10_GAMES_FALLBACK.
 * ========================================================================= */
function fetchTop10FromStrapi() {
  return _fetchTop10FromStrapi.apply(this, arguments);
}
/* =========================================================================
 * <Top10Rail /> — section wrapper
 * -------------------------------------------------------------------------
 * Renders the heading, then two CSS-grid rows: ranks 1–4 on top (4 columns)
 * and ranks 5–9 on bottom (5 columns). Each cell holds one <Top10Card />.
 *
 * On mount we fetch the live list from Strapi and replace the fallback.
 * The `cancelled` flag prevents a late response from updating state after
 * the component has unmounted (React 18 StrictMode re-mounts in dev).
 * Sorting by rank is defensive — editors may enter games out of order.
 * ========================================================================= */
function _fetchTop10FromStrapi() {
  _fetchTop10FromStrapi = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var _json$data, _entry$attributes$dat, _entry$attributes;
    var url, res, json, entry, payload;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          url = "".concat(STRAPI_BASE_URL, "/api/configurations?filters[name][$eq]=").concat(encodeURIComponent(TOP10_CONFIG_NAME));
          _context.n = 1;
          return fetch(url);
        case 1:
          res = _context.v;
          if (res.ok) {
            _context.n = 2;
            break;
          }
          throw new Error("Strapi responded ".concat(res.status));
        case 2:
          _context.n = 3;
          return res.json();
        case 3:
          json = _context.v;
          entry = json === null || json === void 0 || (_json$data = json.data) === null || _json$data === void 0 ? void 0 : _json$data[0]; // Strapi v4 wraps fields in `.attributes`; v5 exposes them at top level.
          payload = (_entry$attributes$dat = entry === null || entry === void 0 || (_entry$attributes = entry.attributes) === null || _entry$attributes === void 0 ? void 0 : _entry$attributes.data) !== null && _entry$attributes$dat !== void 0 ? _entry$attributes$dat : entry === null || entry === void 0 ? void 0 : entry.data;
          if (Array.isArray(payload)) {
            _context.n = 4;
            break;
          }
          throw new Error('Malformed Strapi payload');
        case 4:
          return _context.a(2, payload);
      }
    }, _callee);
  }));
  return _fetchTop10FromStrapi.apply(this, arguments);
}
function Top10Rail(_ref2) {
  var _ref2$heading = _ref2.heading,
    heading = _ref2$heading === void 0 ? 'TOP 9 MOST POPULAR GAMES' : _ref2$heading;
  var _React$useState = React.useState(TOP10_GAMES_FALLBACK),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    games = _React$useState2[0],
    setGames = _React$useState2[1];
  React.useEffect(function () {
    var cancelled = false;
    fetchTop10FromStrapi().then(function (data) {
      if (!cancelled) setGames(data);
    })["catch"](function (err) {
      // Non-fatal: state is already seeded with the fallback list.
      console.warn('[Top10Rail] Strapi fetch failed, using fallback:', err);
    });
    return function () {
      cancelled = true;
    };
  }, []);
  var sorted = _toConsumableArray(games).sort(function (a, b) {
    return a.rank - b.rank;
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "GameSection Home"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper-games wrapper-game-section with-title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper-games-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: INK_JP
    }
  }, heading)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20,
      marginBottom: 28
    }
  }, sorted.slice(0, 4).map(function (g) {
    return /*#__PURE__*/React.createElement(Top10Card, _extends({
      key: g.rank
    }, g, {
      size: "lg"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 16
    }
  }, sorted.slice(4, 10).map(function (g) {
    return /*#__PURE__*/React.createElement(Top10Card, _extends({
      key: g.rank
    }, g, {
      size: "sm"
    }));
  })))));
}

/* ---- Expose to other <script type="text/babel"> blocks -------------------
 * The index.html renders <Top10Rail /> from a separate inline script.
 * In a bundler (webpack/vite), replace with:
 *   export { Top10Rail, Top10Card, TOP10_GAMES, TOP10_ART };
 * -------------------------------------------------------------------------- */
Object.assign(window, {
  Top10Rail: Top10Rail,
  Top10Card: Top10Card,
  TOP10_GAMES_FALLBACK: TOP10_GAMES_FALLBACK,
  TOP10_ART: TOP10_ART,
  fetchTop10FromStrapi: fetchTop10FromStrapi
});
