function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
 *   • Thin red progress bar below the rail tracks scroll position.
 *   • Progress bar thumb is draggable — click or drag it to scroll the rail.
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
var STRAPI_BASE_URL = 'https://strapi.jp.gamingenius.com';
var TOP10_CONFIG_NAME = 'top10-games';

/* ---- Brand tokens ------------------------------------------------------- */
var RED_JP = '#C10230';
var INK_JP = '#1D1E1B';

/* ---- Display headline style (Roboto Black Italic) ----------------------- */
var displayItalicJP = {
  fontFamily: 'Roboto',
  fontWeight: 900,
  fontStyle: 'italic',
  textTransform: 'uppercase',
  letterSpacing: '-0.01em',
  lineHeight: 1
};

/* ---- Fallback artwork map ----------------------------------------------- */
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

/* ---- Fallback list ------------------------------------------------------ */
var TOP10_GAMES_FALLBACK = [{
  rank: 1,
  title: 'King of Olympus',
  min: '0.10 CHF',
  max: "30'000.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/gates-of-olympus-super-scatter',
  image: ''
}, {
  rank: 2,
  title: 'Queens of Ra',
  min: '0.10 CHF',
  max: "12'500.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/big-bass-splash-1000',
  image: ''
}, {
  rank: 3,
  title: 'Oink Oink Astronauts',
  min: '0.20 CHF',
  max: "8'000.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/thunder-coins-xxl-hold-and-win',
  image: ''
}, {
  rank: 4,
  title: '4 Supercharged Clovers',
  min: '0.10 CHF',
  max: "6'250.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/gold-blitz',
  image: ''
}, {
  rank: 5,
  title: 'Book of Ra Jewel',
  min: '0.10 CHF',
  max: "5'000.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/queens-of-ra-coin-collect',
  image: ''
}, {
  rank: 6,
  title: 'Golden Crown',
  min: '0.20 CHF',
  max: "4'000.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/lil-demon-mega-cash-collect',
  image: ''
}, {
  rank: 7,
  title: 'Mummy Full of Wilds',
  min: '0.10 CHF',
  max: "3'500.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/333-fat-frogs',
  image: ''
}, {
  rank: 8,
  title: 'Joker 81',
  min: '0.10 CHF',
  max: "2'500.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/baa-baa-baa',
  image: ''
}, {
  rank: 9,
  title: 'Mighty Wild Panther',
  min: '0.20 CHF',
  max: "2'000.00 CHF",
  href: 'https://www.jackpots.ch/de/spiel/supercharged-clovers-hold-and-win',
  image: ''
}];

/* =========================================================================
 * Strapi fetch — identical contract to original
 * ========================================================================= */
function fetchTop10FromStrapi() {
  return _fetchTop10FromStrapi.apply(this, arguments);
}
/* =========================================================================
 * <Top10Card />
 * -------------------------------------------------------------------------
 * Identical to the original size="lg" card. Width is driven by the CSS
 * custom property --t10-card-w set by the rail on its scroller element.
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
          entry = json === null || json === void 0 || (_json$data = json.data) === null || _json$data === void 0 ? void 0 : _json$data[0];
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
function Top10Card(_ref) {
  var rank = _ref.rank,
    title = _ref.title,
    min = _ref.min,
    max = _ref.max,
    href = _ref.href,
    image = _ref.image;
  var art = TOP10_ART[title] || {
    bg: 'linear-gradient(135deg, #6B0119, #C10230)',
    accent: '#F8CB3B',
    provider: ''
  };
  var hasImage = !!(image && image.trim());
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: function onClick() {
      return window.Kameleoon && window.Kameleoon.API.Goals.processConversion('top10-click-rank-' + rank);
    },
    style: {
      flex: '0 0 auto',
      width: 'var(--t10-card-w, 22%)',
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      color: 'inherit',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      aspectRatio: '4/3'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: _objectSpread(_objectSpread({
      flex: '0 0 34%'
    }, displayItalicJP), {}, {
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
      whiteSpace: 'nowrap'
    })
  }, rank), /*#__PURE__*/React.createElement("div", {
    style: {
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
      fontSize: 'clamp(14px, 1.5vw, 22px)',
      textAlign: 'center',
      textShadow: '0 2px 6px rgba(0,0,0,0.5)',
      padding: 8,
      lineHeight: 1,
      marginBottom: 46
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
      padding: '10px 12px',
      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.82) 100%)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 400,
      lineHeight: 1.35,
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      fontVariantNumeric: 'tabular-nums',
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
  }, "MAX"), /*#__PURE__*/React.createElement("span", null, max.replace(/\s*CHF\s*$/i, '')))))));
}

/* =========================================================================
 * <Top10Rail_1Row />
 * -------------------------------------------------------------------------
 * Single horizontally scrollable row. Shows 4.3 cards at a time so the
 * partial fifth card signals scrollability. Card widths are recalculated
 * on mount and on container resize via ResizeObserver.
 * ========================================================================= */
function Top10Rail_1Row(_ref2) {
  var _ref2$heading = _ref2.heading,
    heading = _ref2$heading === void 0 ? 'TOP 10 MOST POPULAR GAMES' : _ref2$heading;
  var _React$useState = React.useState(TOP10_GAMES_FALLBACK),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    games = _React$useState2[0],
    setGames = _React$useState2[1];
  var _React$useState3 = React.useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    progress = _React$useState4[0],
    setProgress = _React$useState4[1]; // 0..1
  var scrollerRef = React.useRef(null);
  var trackRef = React.useRef(null);

  // Scrubber drag state — tracks whether the user is dragging the thumb.
  var scrubRef = React.useRef({
    active: false,
    startX: 0,
    startProgress: 0
  });

  // Fetch live data from Strapi on mount.
  React.useEffect(function () {
    var cancelled = false;
    fetchTop10FromStrapi().then(function (data) {
      if (!cancelled) setGames(data);
    })["catch"](function (err) {
      console.warn('[Top10Rail_1Row] Strapi fetch failed, using fallback:', err);
    });
    return function () {
      cancelled = true;
    };
  }, []);

  // Keep --t10-card-w in sync with the scroller's measured width so we
  // always show exactly 4.3 cards regardless of container width.
  React.useEffect(function () {
    var el = scrollerRef.current;
    if (!el) return;
    var update = function update() {
      var cardW = Math.floor((el.clientWidth - 3 * 20) / 4.3);
      el.style.setProperty('--t10-card-w', cardW + 'px');
    };
    update();
    var ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return function () {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  // Update progress state as the rail scrolls (driven by native scroll or
  // programmatic scrollLeft changes from the scrubber).
  var onScroll = React.useCallback(function () {
    var el = scrollerRef.current;
    if (!el) return;
    var max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  // ── Scrubber: click on track to jump, drag thumb to scrub ──────────────

  // Converts a pointer X position within the track into a 0..1 progress
  // value, accounting for the thumb width so the thumb never overruns the
  // track edges.
  var THUMB_PCT = 44; // thumb is 44% of track width (mirrors mobile)

  function progressFromPointer(pageX) {
    var track = trackRef.current;
    if (!track) return 0;
    var rect = track.getBoundingClientRect();
    var usable = rect.width * (1 - THUMB_PCT / 100);
    var x = Math.max(0, Math.min(pageX - rect.left, usable));
    return x / usable;
  }
  function applyProgress(p) {
    var el = scrollerRef.current;
    if (!el) return;
    var clamped = Math.max(0, Math.min(1, p));
    var max = el.scrollWidth - el.clientWidth;
    el.scrollLeft = clamped * max;
    // Progress state will update via the onScroll handler above.
  }
  var onTrackMouseDown = React.useCallback(function (e) {
    e.preventDefault();
    var p = progressFromPointer(e.pageX);
    applyProgress(p);
    scrubRef.current = {
      active: true,
      startX: e.pageX,
      startProgress: p
    };
    document.addEventListener('mousemove', onDocMouseMove);
    document.addEventListener('mouseup', onDocMouseUp);
  }, []);
  function onDocMouseMove(e) {
    if (!scrubRef.current.active) return;
    var track = trackRef.current;
    if (!track) return;
    var rect = track.getBoundingClientRect();
    var usable = rect.width * (1 - THUMB_PCT / 100);
    var dx = e.pageX - scrubRef.current.startX;
    applyProgress(scrubRef.current.startProgress + dx / usable);
  }
  function onDocMouseUp() {
    scrubRef.current.active = false;
    document.removeEventListener('mousemove', onDocMouseMove);
    document.removeEventListener('mouseup', onDocMouseUp);
  }
  var sorted = _toConsumableArray(games).sort(function (a, b) {
    return a.rank - b.rank;
  }).slice(0, 10);
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
    ref: scrollerRef,
    onScroll: onScroll,
    style: {
      display: 'flex',
      gap: 20,
      overflowX: 'auto',
      overflowY: 'visible',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      WebkitOverflowScrolling: 'touch',
      padding: '4px 0 8px'
    }
  }, sorted.map(function (g) {
    return /*#__PURE__*/React.createElement(Top10Card, _extends({
      key: g.rank
    }, g));
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      flex: '0 0 4px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onMouseDown: onTrackMouseDown,
    style: {
      marginTop: 10,
      height: 6,
      // slightly taller than before so it's easier to grab
      borderRadius: 3,
      background: 'rgba(29,30,27,0.10)',
      position: 'relative',
      cursor: 'pointer',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: "".concat(THUMB_PCT, "%"),
      left: "".concat(progress * (100 - THUMB_PCT), "%"),
      background: RED_JP,
      borderRadius: 3,
      transition: scrubRef.current.active ? 'none' : 'left 80ms linear',
      cursor: 'grab',
      pointerEvents: 'none' // track receives all pointer events
    }
  })))));
}

/* ---- Hide native scrollbar on WebKit browsers --------------------------- */
(function injectScrollerStyles() {
  if (document.getElementById('t10-1row-styles')) return;
  var s = document.createElement('style');
  s.id = 't10-1row-styles';
  s.textContent = "\n    [data-t10-scroller]::-webkit-scrollbar { display: none; }\n  ";
  document.head.appendChild(s);
})();

/* ---- Expose ------------------------------------------------------------- */
Object.assign(window, {
  Top10Rail_1Row: Top10Rail_1Row,
  Top10Card: Top10Card,
  TOP10_GAMES_FALLBACK: TOP10_GAMES_FALLBACK,
  TOP10_ART: TOP10_ART,
  fetchTop10FromStrapi: fetchTop10FromStrapi
});
