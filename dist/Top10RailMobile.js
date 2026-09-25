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
var STRAPI_BASE_URL_M = 'https://strapi.jp.gamingenius.com';
var TOP10_CONFIG_NAME_M = 'top10-games';

/* ---- Brand tokens ------------------------------------------------------- */
var RED_JP_M = '#C10230';
var INK_JP_M = '#1D1E1B';

/* ---- Display headline style (Roboto Black Italic) ----------------------- */
var displayItalicJP_M = {
  fontFamily: 'Roboto',
  fontWeight: 900,
  fontStyle: 'italic',
  textTransform: 'uppercase',
  letterSpacing: '-0.01em',
  lineHeight: 1
};

/* ---- Fallback artwork map (mirrors desktop) ----------------------------- */
var TOP10_ART_M = {
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

/* ---- Fallback list (mirrors desktop) ------------------------------------ */
var TOP10_GAMES_FALLBACK_M = [{
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
 * Strapi fetch — identical contract to desktop
 * ========================================================================= */
function fetchTop10FromStrapiMobile() {
  return _fetchTop10FromStrapiMobile.apply(this, arguments);
}
/* =========================================================================
 * <Top10CardMobile />
 * -------------------------------------------------------------------------
 * Square tile with the giant red numeral overlaid on the bottom-left,
 * partially bleeding out of the tile so it reads as a "stamp" on the
 * artwork (same visual signature as desktop, but space-efficient).
 * ========================================================================= */
function _fetchTop10FromStrapiMobile() {
  _fetchTop10FromStrapiMobile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var _json$data, _entry$attributes$dat, _entry$attributes;
    var url, res, json, entry, payload;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          url = "".concat(STRAPI_BASE_URL_M, "/api/configurations?filters[name][$eq]=").concat(encodeURIComponent(TOP10_CONFIG_NAME_M));
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
  return _fetchTop10FromStrapiMobile.apply(this, arguments);
}
function Top10CardMobile(_ref) {
  var rank = _ref.rank,
    title = _ref.title,
    min = _ref.min,
    max = _ref.max,
    href = _ref.href,
    image = _ref.image;
  var art = TOP10_ART_M[title] || {
    bg: 'linear-gradient(135deg, #6B0119, #C10230)',
    accent: '#F8CB3B',
    provider: ''
  };
  var hasImage = !!(image && image.trim());
  return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    className: "t10m-card",
    onClick: function onClick() {
      return window.Kameleoon && window.Kameleoon.API.Goals.processConversion('top10-click-rank-' + rank);
    },
    style: {
      position: 'relative',
      flex: '0 0 auto',
      // Width is driven by --t10m-card-w which the rail sets based on
      // its measured client width (so we get ~2.3 cards visible no
      // matter the container — phone, tablet, device frame).
      width: 'var(--t10m-card-w, 150px)',
      scrollSnapAlign: 'start',
      textDecoration: 'none',
      color: 'inherit',
      paddingBottom: 18,
      // breathing room for the bleed-out numeral
      paddingLeft: 14,
      // breathing room for the bleed-out numeral
      WebkitTapHighlightColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '1 / 1',
      borderRadius: 10,
      overflow: 'hidden',
      background: hasImage ? '#1D1E1B' : art.bg,
      boxShadow: '0 6px 16px rgba(29,30,27,0.22), 0 2px 4px rgba(29,30,27,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
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
    style: _objectSpread(_objectSpread({}, displayItalicJP_M), {}, {
      color: art.accent,
      fontSize: 'clamp(13px, 3.6vw, 17px)',
      textAlign: 'center',
      textShadow: '0 2px 6px rgba(0,0,0,0.5)',
      padding: 8,
      lineHeight: 1,
      marginBottom: 30
    })
  }, title), !hasImage && art.provider && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 6,
      right: 8,
      fontSize: 8,
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
      padding: '8px 10px 8px 38%',
      // leave room for numeral overlap
      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.85) 100%)',
      color: '#fff',
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 1.3,
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
      gap: 6,
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
      gap: 6,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      letterSpacing: '0.06em'
    }
  }, "MAX"), /*#__PURE__*/React.createElement("span", null, max.replace(/\s*CHF\s*$/i, ''))))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: _objectSpread(_objectSpread({
      position: 'absolute',
      left: 0,
      bottom: 0
    }, displayItalicJP_M), {}, {
      fontSize: 'clamp(72px, 22vw, 110px)',
      lineHeight: 0.85,
      color: RED_JP_M,
      textShadow: '0 2px 0 rgba(255,255,255,0.85), 0 8px 22px rgba(193,2,48,0.28)',
      WebkitTextStroke: '0.5px rgba(255,255,255,0.5)',
      pointerEvents: 'none',
      userSelect: 'none',
      fontVariantNumeric: 'lining-nums'
    })
  }, rank));
}

/* =========================================================================
 * <Top10RailMobile />
 * ========================================================================= */
function Top10RailMobile(_ref2) {
  var _ref2$heading = _ref2.heading,
    heading = _ref2$heading === void 0 ? 'TOP 10 MOST POPULAR GAMES' : _ref2$heading;
  var _React$useState = React.useState(TOP10_GAMES_FALLBACK_M),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    games = _React$useState2[0],
    setGames = _React$useState2[1];
  var _React$useState3 = React.useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    progress = _React$useState4[0],
    setProgress = _React$useState4[1]; // 0..1
  var scrollerRef = React.useRef(null);
  React.useEffect(function () {
    var cancelled = false;
    fetchTop10FromStrapiMobile().then(function (data) {
      if (!cancelled) setGames(data);
    })["catch"](function (err) {
      console.warn('[Top10RailMobile] Strapi fetch failed, using fallback:', err);
    });
    return function () {
      cancelled = true;
    };
  }, []);

  // Keep --t10m-card-w in sync with the rail's measured width so we always
  // show ~2.3 cards, regardless of viewport / wrapper / device frame.
  React.useEffect(function () {
    var el = scrollerRef.current;
    if (!el) return;
    var update = function update() {
      // Subtract horizontal padding (16 + 16) so the math reflects the
      // visible track width.
      var w = el.clientWidth - 32;
      var cardW = Math.max(110, Math.min(180, Math.floor(w / 2.3)));
      el.style.setProperty('--t10m-card-w', cardW + 'px');
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

  // Update the progress bar as the user swipes.
  var onScroll = React.useCallback(function () {
    var el = scrollerRef.current;
    if (!el) return;
    var max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);
  var sorted = _toConsumableArray(games).sort(function (a, b) {
    return a.rank - b.rank;
  }).slice(0, 10);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 0 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'italic normal 900 22px/27px Roboto, sans-serif',
      textTransform: 'uppercase',
      color: '#000',
      margin: '0 0 10px 0',
      letterSpacing: 0
    }
  }, heading)), /*#__PURE__*/React.createElement("div", {
    ref: scrollerRef,
    onScroll: onScroll,
    className: "t10m-scroller",
    style: {
      display: 'flex',
      gap: 4,
      overflowX: 'auto',
      overflowY: 'visible',
      scrollSnapType: 'x mandatory',
      WebkitOverflowScrolling: 'touch',
      padding: '4px 16px 24px',
      scrollPaddingLeft: 16
    }
  }, sorted.map(function (g) {
    return /*#__PURE__*/React.createElement(Top10CardMobile, _extends({
      key: g.rank
    }, g));
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      flex: '0 0 8px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '6px 16px 0',
      height: 3,
      borderRadius: 2,
      background: 'rgba(29,30,27,0.10)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '32%',
      left: "".concat(progress * 68, "%"),
      // (100 - thumbWidth) so right edge stops at 100%
      background: RED_JP_M,
      borderRadius: 2,
      transition: 'left 120ms linear'
    }
  })));
}

/* ---- Hide native scrollbar on the rail (kept clean on desktop preview) -- */
(function injectScrollerStyles() {
  if (document.getElementById('t10m-styles')) return;
  var s = document.createElement('style');
  s.id = 't10m-styles';
  s.textContent = "\n    .t10m-scroller { scrollbar-width: none; }\n    .t10m-scroller::-webkit-scrollbar { display: none; }\n    .t10m-card { transition: transform 200ms cubic-bezier(0.2,0,0,1); }\n    .t10m-card:active { transform: scale(0.98); }\n  ";
  document.head.appendChild(s);
})();

/* ---- Expose ------------------------------------------------------------- */
Object.assign(window, {
  Top10RailMobile: Top10RailMobile,
  Top10CardMobile: Top10CardMobile,
  TOP10_GAMES_FALLBACK_M: TOP10_GAMES_FALLBACK_M,
  TOP10_ART_M: TOP10_ART_M,
  fetchTop10FromStrapiMobile: fetchTop10FromStrapiMobile
});
