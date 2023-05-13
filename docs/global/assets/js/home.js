/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7091:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 2171:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./playcard.glb": 4874,
	"./poster-1.webp": 9277,
	"./poster.webp": 5161,
	"./valhalla.glb": 971
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2171;

/***/ }),

/***/ 1720:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./01-full.webp": 4567,
	"./02-full.webp": 5995,
	"./03-full.webp": 9229,
	"./04-full.webp": 8026,
	"./05-full.webp": 1917,
	"./06-full.webp": 9387,
	"./ads/ms/web-ad1-ms.webp": 4262,
	"./ads/ms/web-ad2-ms.webp": 2684,
	"./ads/ms/web-ad3-ms.webp": 4170,
	"./ads/ms/web-ad4-ms.webp": 8036,
	"./ads/ms/web-ad5-ms.webp": 9653,
	"./ads/web-ad1.webp": 7578,
	"./ads/web-ad2.webp": 5168,
	"./ads/web-ad3.webp": 8666,
	"./ads/web-ad4.webp": 9749,
	"./ads/web-ad5.webp": 7196,
	"./full/ae/ae1.webp": 7927,
	"./full/ae/ae2.webp": 267,
	"./full/ae/ae3.webp": 5378,
	"./full/ae/ae4.webp": 7896,
	"./full/bp1.webp": 6286,
	"./full/bp10.webp": 7281,
	"./full/bp11.webp": 7340,
	"./full/bp12.webp": 6036,
	"./full/bp2.webp": 535,
	"./full/bp3.webp": 2476,
	"./full/bp4.webp": 3035,
	"./full/bp5.webp": 4833,
	"./full/bp6.webp": 2574,
	"./full/bp7.webp": 1872,
	"./full/bp8.webp": 7816,
	"./full/bp9.webp": 7903,
	"./full/cs/cs1.webp": 2686,
	"./full/cs/cs2.webp": 872,
	"./full/cs/cs3.webp": 1309,
	"./full/cs/cs4.webp": 9677,
	"./full/cs/cs5.webp": 7954,
	"./full/cs/cs6.webp": 2955,
	"./full/cs/cs7.webp": 5823,
	"./full/cs/cs8.webp": 7985,
	"./full/cs/cs9.webp": 1616,
	"./full/csa/csa1.webp": 3747,
	"./full/csa/csa2.webp": 9262,
	"./full/csa/csa3.webp": 3314,
	"./full/csa/csa4.webp": 839,
	"./full/csa/csa5.webp": 5147,
	"./full/csa/csa6.webp": 1498,
	"./full/csa/csa7.webp": 1119,
	"./full/csa/csa8.webp": 9365,
	"./full/csa/csa9.webp": 3451,
	"./full/hm/hm1.webp": 1937,
	"./full/hm/hm2.webp": 1391,
	"./full/hm/hm3.webp": 4135,
	"./full/hm/hm4.webp": 8400,
	"./full/hm/hm5.webp": 7877,
	"./full/hm/hm6.webp": 9147,
	"./full/hm/hm7.webp": 7843,
	"./full/ic/ic1.webp": 8248,
	"./full/ic/ic2.webp": 8271,
	"./full/ic/ic3.webp": 7598,
	"./full/ic/ic4.webp": 9835,
	"./full/ic/ic5.webp": 2800,
	"./full/ic/ic6.webp": 9734,
	"./full/ic/ic7.webp": 659,
	"./full/na/na1.webp": 2008,
	"./full/na/na2.webp": 4786,
	"./full/na/na3.webp": 6050,
	"./full/na/na4.webp": 8126,
	"./full/na/na5.webp": 453,
	"./full/na/na6.webp": 9789,
	"./full/nc/nc1.webp": 265,
	"./full/nc/nc2.webp": 8874,
	"./full/nc/nc3.webp": 7277,
	"./full/nc/nc4.webp": 285,
	"./full/nc/nc5.webp": 932,
	"./full/nc/nc6.webp": 5403,
	"./full/nc/nc7.webp": 8338,
	"./full/nr/nr1.webp": 61,
	"./full/nr/nr2.webp": 6730,
	"./full/nr/nr3.webp": 1766,
	"./full/ri/ri1.webp": 8365,
	"./full/ri/ri2.webp": 3467,
	"./full/ri/ri3.webp": 7769,
	"./full/rn/rn1.webp": 1154,
	"./full/rn/rn2.webp": 7457,
	"./full/rn/rn3.webp": 1038,
	"./full/rn/rn4.webp": 6246,
	"./full/rn/rn5.webp": 3846,
	"./full/st/st1.webp": 7042,
	"./full/st/st2.webp": 8533,
	"./full/st/st3.webp": 1318,
	"./full/st/st4.webp": 6081,
	"./full/st/st5.webp": 3508,
	"./full/st/st6.webp": 4447,
	"./full/st/st7.webp": 9906,
	"./full/st/st8.webp": 6833,
	"./full/st/st9.webp": 1832,
	"./full/th/th1.webp": 8466,
	"./full/th/th2.webp": 9103,
	"./full/th/th3.webp": 2892,
	"./full/th/th4.webp": 7439
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1720;

/***/ }),

/***/ 9228:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./android-chrome-192x192.png": 6158,
	"./android-chrome-512x512.png": 3028,
	"./apple-touch-icon-114x114.png": 2668,
	"./apple-touch-icon-120x120.png": 5393,
	"./apple-touch-icon-144x144.png": 8320,
	"./apple-touch-icon-152x152.png": 3404,
	"./apple-touch-icon-180x180.png": 382,
	"./apple-touch-icon-57x57.png": 4468,
	"./apple-touch-icon-60x60.png": 2744,
	"./apple-touch-icon-72x72.png": 3493,
	"./apple-touch-icon-76x76.png": 6820,
	"./apple-touch-icon.png": 6368,
	"./browserconfig.xml": 7758,
	"./favicon-16x16.png": 8750,
	"./favicon-32x32.png": 5344,
	"./favicon.ico": 1194,
	"./mstile-150x150.png": 7967,
	"./safari-pinned-tab.svg": 5861,
	"./shoenix.svg": 9411,
	"./site.webmanifest": 60
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9228;

/***/ }),

/***/ 7661:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./og-image-blog.jpg": 9051,
	"./og-image-error.jpg": 8496,
	"./og-image-home.jpg": 856,
	"./og-image-maintenance.jpg": 5190,
	"./og-image-product.jpg": 3051,
	"./og-image-produk.jpg": 5789,
	"./og-image-project.jpg": 3703,
	"./og-image-projek.jpg": 1734,
	"./og-image-ralat.jpg": 1901,
	"./og-image-rerumah.jpg": 1225
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 7661;

/***/ }),

/***/ 9570:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Bundle1.svg": 5297,
	"./Bundle2.svg": 5756,
	"./Bundle3.svg": 246,
	"./Bundle4.svg": 7008,
	"./cadjust.webp": 1229,
	"./collection1/c1-1.webp": 4405,
	"./collection1/c1-2.webp": 1389,
	"./collection1/c1-3.webp": 1019,
	"./collection1/c1-4.webp": 8848,
	"./collection2/c2-1.webp": 8351,
	"./collection2/c2-2.webp": 9025,
	"./collection2/c2-3.webp": 5613,
	"./collection2/c2-4.webp": 8704,
	"./collection3/c3-1.webp": 3355,
	"./collection3/c3-2.webp": 3819,
	"./collection3/c3-3.webp": 6848,
	"./collection3/c3-4.webp": 4956,
	"./collection4/c4-1.webp": 3202,
	"./collection4/c4-2.webp": 3914,
	"./collection4/c4-3.webp": 6099,
	"./collection4/c4-4.webp": 5621,
	"./ctype/gameon-ms.svg": 6609,
	"./ctype/gameon.svg": 4359,
	"./ctype/powerwear-ms.svg": 972,
	"./ctype/powerwear.svg": 7090,
	"./ctype/urbanwear-ms.svg": 5066,
	"./ctype/urbanwear.svg": 7079,
	"./icn_bundle_symbols_spr.svg": 1662
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9570;

/***/ }),

/***/ 8286:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./robots.txt": 8497,
	"./sitemap.xml": 2753
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 8286;

/***/ }),

/***/ 2691:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/portal/breakpoints.min.js?v=b568ff2b48239a8b2976";

/***/ }),

/***/ 2666:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/portal/browser.min.js?v=baf6931601944992b286";

/***/ }),

/***/ 5697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/portal/firebase.js?v=a3f170d8b063abd6a386";

/***/ }),

/***/ 9977:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/portal/jquery.min.js?v=c21f3ac6141264bc18ad";

/***/ }),

/***/ 6961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/portal/jquery.poptrox.min.js?v=5484ce8d739fe5e26097";

/***/ }),

/***/ 707:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/portal/jquery.scrollex.min.js?v=96d91821481488162df9";

/***/ }),

/***/ 9737:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/portal/jquery.scrolly.min.js?v=6929292720cadd047e5f";

/***/ }),

/***/ 6697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/portal/util.js?v=1c8670e8674d8dd72db4";

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/portal/network.js?v=4c2d75e32c570881587f";

/***/ }),

/***/ 8046:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/portal/purify.min.js?v=6b996bf860e92edec9b6";

/***/ }),

/***/ 2635:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/portal/focus-visible.min.js?v=d1860f814e7cdd80c60a";

/***/ }),

/***/ 7356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/Pioneercli.svg?v=70d9607699c8526eaa1c";

/***/ }),

/***/ 9759:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/atmaxcli.svg?v=b4924655b7b7c20433da";

/***/ }),

/***/ 2347:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/ftslr.svg?v=6e6f90e67bedf36cbedf";

/***/ }),

/***/ 3241:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/grvcli.svg?v=7d505c640c8a3fa75802";

/***/ }),

/***/ 1910:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/nmvxcli.svg?v=df94af18f0bd0d225408";

/***/ }),

/***/ 2049:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/temorcli.svg?v=e2e1ec11a9b8f8d35303";

/***/ }),

/***/ 6318:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/usultimur.svg?v=04a6c597689ffb60f5bc";

/***/ }),

/***/ 3767:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/nmvxshx.svg?v=a384defcdd84df80dbf8";

/***/ }),

/***/ 5980:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/shoenixlab.svg?v=791af3afb5d99149044c";

/***/ }),

/***/ 4874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/3D/playcard.glb?v=4e20d97b99664ddca81e";

/***/ }),

/***/ 9277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/poster-1.webp?v=0e3ef4636bd7c3c42957";

/***/ }),

/***/ 5161:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/poster.webp?v=88a5f270696d5521b3d4";

/***/ }),

/***/ 971:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/3D/valhalla.glb?v=01d4a6893d9d9d14f48b";

/***/ }),

/***/ 4567:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/01-full.webp?v=016ed6a796685c0b2ca3";

/***/ }),

/***/ 5995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/02-full.webp?v=c26648e962939d6532e7";

/***/ }),

/***/ 9229:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/03-full.webp?v=03b4b8cc7632bb06a9c5";

/***/ }),

/***/ 8026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/04-full.webp?v=c042153c4463bab963f4";

/***/ }),

/***/ 1917:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/05-full.webp?v=8ed89c4359705dbe438e";

/***/ }),

/***/ 9387:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/06-full.webp?v=477fcfa333399012bb80";

/***/ }),

/***/ 4262:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/web-ad1-ms.webp?v=76a222e5046eab7fd91d";

/***/ }),

/***/ 2684:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/web-ad2-ms.webp?v=5c6f760e695ae3cb1b55";

/***/ }),

/***/ 4170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/web-ad3-ms.webp?v=ad0132b84008730190a2";

/***/ }),

/***/ 8036:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/web-ad4-ms.webp?v=e6f4ef139bafe46d8d51";

/***/ }),

/***/ 9653:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/web-ad5-ms.webp?v=2126e14d9eb0fa18dd6c";

/***/ }),

/***/ 7578:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/web-ad1.webp?v=dbf40673d867165ddf2d";

/***/ }),

/***/ 5168:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/web-ad2.webp?v=5c6f760e695ae3cb1b55";

/***/ }),

/***/ 8666:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/web-ad3.webp?v=0ee2ee21a4e410cebf11";

/***/ }),

/***/ 9749:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/web-ad4.webp?v=c1e6fb96d49b7131ec16";

/***/ }),

/***/ 7196:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/web-ad5.webp?v=55f37b15c8f0ac958984";

/***/ }),

/***/ 7927:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/ae1.webp?v=aa58f9832d1b3e74b8f8";

/***/ }),

/***/ 267:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/ae2.webp?v=fbae883651824cc9cb9f";

/***/ }),

/***/ 5378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/ae3.webp?v=f88c26856024d10b68d8";

/***/ }),

/***/ 7896:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/ae4.webp?v=97ae3cbc901fc3d3ca27";

/***/ }),

/***/ 6286:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/bp1.webp?v=efcab9fb387967eaaa60";

/***/ }),

/***/ 7281:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/bp10.webp?v=76ba1ee817fed630753f";

/***/ }),

/***/ 7340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/bp11.webp?v=df8d19cd17e5250554ca";

/***/ }),

/***/ 6036:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/bp12.webp?v=7ec91bc71c95aa6dfeef";

/***/ }),

/***/ 535:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/bp2.webp?v=71646cf0fdb45e83eb4b";

/***/ }),

/***/ 2476:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/bp3.webp?v=1701c8bf2ba88cd611bb";

/***/ }),

/***/ 3035:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/bp4.webp?v=ad86c54fdbbef30f6319";

/***/ }),

/***/ 4833:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/bp5.webp?v=5f05e12413ad95b7ac49";

/***/ }),

/***/ 2574:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/bp6.webp?v=9f6f55a2807c067523b7";

/***/ }),

/***/ 1872:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/bp7.webp?v=cd5ac87ab8fb16e91e33";

/***/ }),

/***/ 7816:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/bp8.webp?v=80739376a03ed52fb18b";

/***/ }),

/***/ 7903:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/bp9.webp?v=3221053c7fae9148982b";

/***/ }),

/***/ 2686:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/cs1.webp?v=c5c2e6aa081e1c754e28";

/***/ }),

/***/ 872:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/cs2.webp?v=7862dbd50b452927fc6c";

/***/ }),

/***/ 1309:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/cs3.webp?v=6927c2766e1fcbf82bae";

/***/ }),

/***/ 9677:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/cs4.webp?v=880b967e92b6fb9e7bde";

/***/ }),

/***/ 7954:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/cs5.webp?v=949c2c13730a8c450ca4";

/***/ }),

/***/ 2955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/cs6.webp?v=c7477e4aa91f5ac75f61";

/***/ }),

/***/ 5823:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/cs7.webp?v=f74e64a497b0a9c72d76";

/***/ }),

/***/ 7985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/cs8.webp?v=c7dd92811014c5816652";

/***/ }),

/***/ 1616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/cs9.webp?v=cdf58d2ef7f4371babd3";

/***/ }),

/***/ 3747:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/csa1.webp?v=b99cf647ed761b48bd19";

/***/ }),

/***/ 9262:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/csa2.webp?v=8bc8031c6bc27f577b73";

/***/ }),

/***/ 3314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/csa3.webp?v=0c129de38f92ab8dcbee";

/***/ }),

/***/ 839:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/csa4.webp?v=760851deba16f3a052e8";

/***/ }),

/***/ 5147:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/csa5.webp?v=664e6ca22f316f87a10e";

/***/ }),

/***/ 1498:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/csa6.webp?v=3549cd07f480aa21b635";

/***/ }),

/***/ 1119:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/csa7.webp?v=a67c65832fb8f752f1e4";

/***/ }),

/***/ 9365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/csa8.webp?v=f31c3e266f23bacb6cec";

/***/ }),

/***/ 3451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/csa9.webp?v=bc4d84d8664da2c16ac3";

/***/ }),

/***/ 1937:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/hm1.webp?v=3fc4310533ec427a8876";

/***/ }),

/***/ 1391:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/hm2.webp?v=0d2a5ad484698d1d3ff8";

/***/ }),

/***/ 4135:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/hm3.webp?v=b8bbb423e8ba1cdbf1cb";

/***/ }),

/***/ 8400:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/hm4.webp?v=916787cfb52b2a5b805e";

/***/ }),

/***/ 7877:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/hm5.webp?v=9295c39149c57b803ce8";

/***/ }),

/***/ 9147:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/hm6.webp?v=b6fe0cddbac9be7c4b8b";

/***/ }),

/***/ 7843:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/hm7.webp?v=156aea32169e820a8138";

/***/ }),

/***/ 8248:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/ic1.webp?v=baebf18c98fe3da46634";

/***/ }),

/***/ 8271:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/ic2.webp?v=8b2cb883ba0a5426d068";

/***/ }),

/***/ 7598:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/ic3.webp?v=f76bc3bfef1d65483e22";

/***/ }),

/***/ 9835:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/ic4.webp?v=f0a7b2ae454361bae281";

/***/ }),

/***/ 2800:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/ic5.webp?v=8f209e8cc273bb4ab80f";

/***/ }),

/***/ 9734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/ic6.webp?v=2e7ea4d5ab9088c73fc0";

/***/ }),

/***/ 659:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/ic7.webp?v=4d88672b478f67c2a747";

/***/ }),

/***/ 2008:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/na1.webp?v=7f5df79c8b9a5fce7984";

/***/ }),

/***/ 4786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/na2.webp?v=400e427fc42fba9dc2ac";

/***/ }),

/***/ 6050:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/na3.webp?v=bdb03f99584e2e536509";

/***/ }),

/***/ 8126:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/na4.webp?v=b099bb70180233366eb6";

/***/ }),

/***/ 453:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/na5.webp?v=91af8b746a9582361505";

/***/ }),

/***/ 9789:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/na6.webp?v=514b7a791370e31626d3";

/***/ }),

/***/ 265:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/nc1.webp?v=2ea0e5460da972ef6b6e";

/***/ }),

/***/ 8874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/nc2.webp?v=dcc2e2ea9a247b40eb93";

/***/ }),

/***/ 7277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/nc3.webp?v=3e22dcd33b9ac166054e";

/***/ }),

/***/ 285:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/nc4.webp?v=d8f358652b0841c9563d";

/***/ }),

/***/ 932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/nc5.webp?v=c7fad2356078c16625ae";

/***/ }),

/***/ 5403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/nc6.webp?v=3fa3134b44a9568c4db0";

/***/ }),

/***/ 8338:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/nc7.webp?v=cae37d3d44613fa13c51";

/***/ }),

/***/ 61:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/nr1.webp?v=3f05407760e639b86611";

/***/ }),

/***/ 6730:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/nr2.webp?v=318d5db7cee090fce431";

/***/ }),

/***/ 1766:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/nr3.webp?v=75d547cfa94f4a948859";

/***/ }),

/***/ 8365:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/ri1.webp?v=cbac2664fdb852632309";

/***/ }),

/***/ 3467:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/ri2.webp?v=b514aa4a892eb3eb33e6";

/***/ }),

/***/ 7769:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/ri3.webp?v=8116e19b3f81a68fbd84";

/***/ }),

/***/ 1154:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/rn1.webp?v=ea35eed8376a16f29d57";

/***/ }),

/***/ 7457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/rn2.webp?v=f61cf398e3d4b720b36a";

/***/ }),

/***/ 1038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/rn3.webp?v=daed748d456aec5a899e";

/***/ }),

/***/ 6246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/rn4.webp?v=c6a7ae62b332c110baee";

/***/ }),

/***/ 3846:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/rn5.webp?v=0b043f754b6f0ac33cc7";

/***/ }),

/***/ 7042:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/st1.webp?v=6149e5cc14e95e69be9f";

/***/ }),

/***/ 8533:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/st2.webp?v=8c92233c31b77cf3a929";

/***/ }),

/***/ 1318:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/st3.webp?v=1c71debdf16add29348c";

/***/ }),

/***/ 6081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/st4.webp?v=e208414bfdbbcd8828aa";

/***/ }),

/***/ 3508:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/st5.webp?v=b2544b4c8b44bbaac30e";

/***/ }),

/***/ 4447:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/st6.webp?v=4f8f43e792d48c7cf7f0";

/***/ }),

/***/ 9906:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/st7.webp?v=be9e2dd8fc4d07275bc3";

/***/ }),

/***/ 6833:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/st8.webp?v=fb98fb2b47a3512d91a2";

/***/ }),

/***/ 1832:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/st9.webp?v=45f04ae43a0168b87c47";

/***/ }),

/***/ 8466:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/th1.webp?v=9dcab3be6e238f389867";

/***/ }),

/***/ 9103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/th2.webp?v=44f57f66ee4f7fa0e77b";

/***/ }),

/***/ 2892:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/th3.webp?v=5d8be30f5cfa41c64688";

/***/ }),

/***/ 7439:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/th4.webp?v=bb3065a13139d6bf24f5";

/***/ }),

/***/ 6158:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/android-chrome-192x192.png?v=3c062b5634fe0398db9e";

/***/ }),

/***/ 3028:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/android-chrome-512x512.png?v=df73dc055c8a5522169a";

/***/ }),

/***/ 2668:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/apple-touch-icon-114x114.png?v=53d61dc70c47aae35d30";

/***/ }),

/***/ 5393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/apple-touch-icon-120x120.png?v=029f821fba2ae919357e";

/***/ }),

/***/ 8320:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/apple-touch-icon-144x144.png?v=7437bc13c06b480df0ad";

/***/ }),

/***/ 3404:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/apple-touch-icon-152x152.png?v=3172b083320bfa8a5d4a";

/***/ }),

/***/ 382:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/apple-touch-icon-180x180.png?v=336a9829c16727197b61";

/***/ }),

/***/ 4468:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/apple-touch-icon-57x57.png?v=d2f2c494b219412ff977";

/***/ }),

/***/ 2744:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/apple-touch-icon-60x60.png?v=1127acfa277831232c3d";

/***/ }),

/***/ 3493:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/apple-touch-icon-72x72.png?v=0618311fac562aac3cb4";

/***/ }),

/***/ 6820:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/apple-touch-icon-76x76.png?v=32932f751eb38726665f";

/***/ }),

/***/ 6368:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/apple-touch-icon.png?v=336a9829c16727197b61";

/***/ }),

/***/ 7758:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "browserconfig.xml?v=675b204985d16e2913a9";

/***/ }),

/***/ 8750:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/favicon-16x16.png?v=9e660931c9a30a14116c";

/***/ }),

/***/ 5344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/favicon-32x32.png?v=4a72b4b93f7346c7032b";

/***/ }),

/***/ 1194:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "favicon.ico?v=22c6c9a2a58d5e618791";

/***/ }),

/***/ 7967:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/mstile-150x150.png?v=75df6e8733464a7de231";

/***/ }),

/***/ 5861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/safari-pinned-tab.svg?v=aefb2ac60f294aa7500f";

/***/ }),

/***/ 9411:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/shoenix.svg?v=adf033868d0e6b46c250";

/***/ }),

/***/ 60:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "site.webmanifest?v=2a829643d6100005abd7";

/***/ }),

/***/ 9051:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/og-image/og-image-blog.jpg?v=3f6efcc985b92b7ca904";

/***/ }),

/***/ 8496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/og-image/og-image-error.jpg?v=c4eb49e4732671ee92c5";

/***/ }),

/***/ 856:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/og-image/og-image-home.jpg?v=4e11110a8b9fbb9b58c0";

/***/ }),

/***/ 5190:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/og-image/og-image-maintenance.jpg?v=11d72ff81c841bc6485e";

/***/ }),

/***/ 3051:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/og-image/og-image-product.jpg?v=d9d5e184c4b590c7ecb6";

/***/ }),

/***/ 5789:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/og-image/og-image-produk.jpg?v=8b64e7bc23ef30e12198";

/***/ }),

/***/ 3703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/og-image/og-image-project.jpg?v=99594af8600f55ee4a19";

/***/ }),

/***/ 1734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/og-image/og-image-projek.jpg?v=2e4f7dd7d3dc8ed201f7";

/***/ }),

/***/ 1901:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/og-image/og-image-ralat.jpg?v=4348480dc1def6199eef";

/***/ }),

/***/ 1225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/og-image/og-image-rerumah.jpg?v=4e11110a8b9fbb9b58c0";

/***/ }),

/***/ 5297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/Bundle1.svg?v=63ae1f2d2977b13813ad";

/***/ }),

/***/ 5756:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/Bundle2.svg?v=9d87a6ea0ce7f59ad8ff";

/***/ }),

/***/ 246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/Bundle3.svg?v=8e052f194490ac8c1608";

/***/ }),

/***/ 7008:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/Bundle4.svg?v=c5bc2eeba14db3172bd5";

/***/ }),

/***/ 1229:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/cadjust.webp?v=b7967ee70a5c8f5d7274";

/***/ }),

/***/ 4405:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c1-1.webp?v=82f42ad157250c51fade";

/***/ }),

/***/ 1389:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c1-2.webp?v=2a88d0c0346a33ac6458";

/***/ }),

/***/ 1019:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c1-3.webp?v=89b0d0449e9c272d2513";

/***/ }),

/***/ 8848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c1-4.webp?v=212d37381588db59bb52";

/***/ }),

/***/ 8351:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c2-1.webp?v=1bb132b8ad6847e0fed8";

/***/ }),

/***/ 9025:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c2-2.webp?v=7b56ad258e7861faaa93";

/***/ }),

/***/ 5613:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c2-3.webp?v=a6f7b8cc37a6c96a2104";

/***/ }),

/***/ 8704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c2-4.webp?v=7b05667ed8dfe312a772";

/***/ }),

/***/ 3355:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c3-1.webp?v=0797e5683b1b50e3d757";

/***/ }),

/***/ 3819:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c3-2.webp?v=c0620ccb3a8106c7e839";

/***/ }),

/***/ 6848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c3-3.webp?v=9fa2093f7f821376324f";

/***/ }),

/***/ 4956:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c3-4.webp?v=33ace33105d42be4ad39";

/***/ }),

/***/ 3202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c4-1.webp?v=7ffb4654de7586989341";

/***/ }),

/***/ 3914:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c4-2.webp?v=107b72abc1eada746f1b";

/***/ }),

/***/ 6099:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c4-3.webp?v=dbeeaa78724a0d28da3b";

/***/ }),

/***/ 5621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/c4-4.webp?v=e0b89be6ee7421100eb6";

/***/ }),

/***/ 6609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/gameon-ms.svg?v=cf74f4e97188c8145d0a";

/***/ }),

/***/ 4359:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/gameon.svg?v=eb9197407a631d8c609f";

/***/ }),

/***/ 972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/powerwear-ms.svg?v=1dd0bb337353c6bd2822";

/***/ }),

/***/ 7090:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/powerwear.svg?v=14e756e287ee9634a44b";

/***/ }),

/***/ 5066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/urbanwear-ms.svg?v=7d3fededd5dd01368cee";

/***/ }),

/***/ 7079:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/urbanwear.svg?v=6ed120f2daf2683fa2d6";

/***/ }),

/***/ 1662:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/icn_bundle_symbols_spr.svg?v=d0f6b066892a4813da34";

/***/ }),

/***/ 3583:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/svg/revenant-typeform.svg?v=59d0bc32b8124c0fde14";

/***/ }),

/***/ 5514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/01.webp?v=7a177460252ad36b2892";

/***/ }),

/***/ 5666:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/02.webp?v=73e188bfd8181b16aa3c";

/***/ }),

/***/ 7958:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/03.webp?v=020e7c726724d22e314b";

/***/ }),

/***/ 5653:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/04.webp?v=d2322f9fba54abfaa03b";

/***/ }),

/***/ 348:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/05.webp?v=fc92c98d689c5bf695b2";

/***/ }),

/***/ 7971:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/06.webp?v=f2e2aa321f5d34f1691d";

/***/ }),

/***/ 1836:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "global/assets/images/blog_wp_small.webp?v=85b0ddd3edda612a3c66";

/***/ }),

/***/ 8497:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "robots.txt?v=b7d20b86f991a84ead98";

/***/ }),

/***/ 2753:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sitemap.xml?v=efdc4278d82aa7de8878";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "https://shoenix-studios.web.app/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			177: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7091);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(6368), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(1194), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(5344), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(8750), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(9411), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(3767), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(5980), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(7578), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(5168), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(8666), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(9749), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(7196), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(5514), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(5666), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(7958), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(5653), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(348), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(7971), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(1836), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(3583), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(7356), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(1910), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(9759), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(6318), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(2347), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(2049), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(3241), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(9977), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(6961), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(9737), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(707), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(2666), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(2691), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(6697), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(565), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(5697), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(2635), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(8046), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);
var ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);
var ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);
var ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);
var ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);
var ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);
var ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);
var ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);
var ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);
var ___HTML_LOADER_REPLACEMENT_34___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_34___);
var ___HTML_LOADER_REPLACEMENT_35___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_35___);
var ___HTML_LOADER_REPLACEMENT_36___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_36___);
var ___HTML_LOADER_REPLACEMENT_37___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_37___);
var code = "<!DOCTYPE HTML> <!--[if lt IE 7]> <html class=\"lt-ie9 lt-ie8 lt-ie7\" lang=\"en-US\" xmlns:fb=\"http://ogp.me/ns/fb#\"> <![endif]--> <!--[if IE 7]> <html class=\"lt-ie9 lt-ie8\" lang=\"en-US\" xmlns:fb=\"http://ogp.me/ns/fb#\"> <![endif]--> <!--[if IE 8]> <html class=\"lt-ie9\" lang=\"en-US\" xmlns:fb=\"http://ogp.me/ns/fb#\"> <![endif]--> <!--[if gt IE 8]><!--> <html lang=\"en\" xmlns:fb=\"http://ogp.me/ns/fb#\"> <head prefix=\"og: http://ogp.me/ns# object: http://ogp.me/ns/object#\"> <title>Home | Shoenix Studios</title> <meta http-equiv=\"Content-Type\" content=\"text/html;\" charset=\"utf-8\"/> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/> <meta http-equiv=\"content-language\" content=\"en\"/> <meta name=\"viewport\" user-scalable=\"yes\" content=\"width=device-width,initial-scale=1,minimum-scale=1\"/> <meta name=\"theme-color\" media=\"(prefers-color-scheme: dark)\" content=\"#000000\"/> <meta name=\"keywords\" content=\"Shoenix, Shoenix Studios, NMVX, Revenant's Formal, Revenant Formal, NemesisV\"> <meta name=\"description\" content=\"Welcome to Shoenix Studios | Experimental project by NMVX.\"> <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\"/> <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"> <link rel=\"icon\" type=\"image/x-icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"> <link rel=\"manifest\" href=\"https://shoenix-studios.web.app/site.webmanifest\"> <link rel=\"mask-icon\" href=\"https://shoenix-studios.web.app/global/assets/images/svg/safari-pinned-tab.svg\" color=\"#5bbad5\"> <meta name=\"msapplication-TileColor\" content=\"https://shoenix-studios.web.app/browserconfig.xml\"> <meta name=\"format-detection\" content=\"telephone=no\"> <link rel=\"canonical\" href=\"https://shoenix-studios.web.app/home\"/> <link rel=\"alternate\" hreflang=\"x-default\" href=\"https://shoenix-studios.web.app/\"> <link rel=\"alternate\" hreflang=\"ms\" href=\"https://shoenix-studios.web.app/ms/home\"> <link rel=\"alternate\" hreflang=\"en\" href=\"https://shoenix-studios.web.app/home\"> <meta property=\"og:type\" content=\"website\"> <meta property=\"og:image:type\" content=\"image/png\"> <meta property=\"og:image:width\" content=\"1563\"> <meta property=\"og:image:height\" content=\"818\"> <meta property=\"og:description\" content=\"Experimental project by NMVX.\"> <meta property=\"og:title\" content=\"Home | Shoenix Studios\"> <meta property=\"og:url\" content=\"https://shoenix-studios.web.app/home\"> <meta property=\"og:image\" content=\"https://shoenix-studios.web.app/global/assets/images/og-image/og-image-home.jpg\"> <meta property=\"og:locale\" content=\"en\"> <meta property=\"og:site_name\" content=\"Home\"> <meta name=\"twitter:card\" content=\"summary_large_image\"> <meta property=\"twitter:domain\" content=\"shoenix-studios.web.app\"> <meta property=\"twitter:url\" content=\"https://shoenix-studios.web.app/home\"> <meta name=\"twitter:title\" content=\"Home | Shoenix Studios\"> <meta name=\"twitter:description\" content=\"Experimental project by NMVX.\"> <meta name=\"twitter:image\" content=\"https://shoenix-studios.web.app/global/assets/images/og-image/og-image-home.jpg\"> <noscript> <style>body:after,body:before{display:none}</style> <noscript>Sorry, your browser does not have/support JavaScript!</noscript> </noscript> </head> <body class=\"is-preload\"> <header class=\"header\" id=\"header\"> <nav class=\"nav container\"> <a title=\"Home\" href=\"home\" target=\"_self\" aria-label=\"Home\" class=\"nav__logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" height=\"32\" width=\"32\" alt=\"\"> </a> <span>Home | <strong>Shoenix Studios</strong></span> </nav> </header> <section id=\"intro\" class=\"main style1 dark fullscreen\"> <div class=\"content\"> <header> <div id=\"slideshow\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" width=\"320\" height=\"320\" alt=\"NemesisV\" loading=\"eager\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" width=\"720\" height=\"120.667\" alt=\"NemesisV\" loading=\"eager\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" width=\"720\" height=\"120.667\" alt=\"Shoenix Lab Logo\" loading=\"eager\"> </div> </header> <p>Experimental project by <strong>NMVX</strong></p> </div> </section> <section id=\"first\" class=\"main style2 right dark fullscreen\"> <span class=\"firsttext\">VALHALLA AXE<br>CONCEPT</span> <model-viewer src=\"https://shoenix-studios.web.app/global/assets/images/3D/valhalla.glb\" disable-zoom touch-action=\"pan-y\" data-js-focus-visible alt=\"Valhalla Axes by Shoenix Studios\" poster=\"https://shoenix-studios.web.app/global/assets/images/poster-1.webp\" shadow-intensity=\"1\" disable-tap auto-rotate> <div class=\"model-viewer-poster\" slot=\"poster\" style=\"background-image:url(https://shoenix-studios.web.app/global/assets/images/poster-1.webp)\"></div> <div class=\"progress-bar hide\" slot=\"progress-bar\"> <div class=\"update-bar\" style=\"width:100%\"></div> </div> </model-viewer> <ul class=\"actions bottom-special\"> <li> <a href=\"https://www.artstation.com/artwork/o2OV4L\" target=\"_blank\" class=\"button\" aria-label=\"Artstation\">Artstation Documentation</a> </li> </ul> </section> <section id=\"second\" class=\"main style2 left dark fullscreen\"> <span class=\"secondtext\">JOHOR DARUL TA'ZIM<br>JERSEY CONCEPT</span> <model-viewer id=\"playcard\" src=\"https://shoenix-studios.web.app/global/assets/images/3D/playcard.glb\" disable-zoom touch-action=\"pan-y\" data-js-focus-visible alt=\"Johor Concept by Shoenix Studios\" poster=\"https://shoenix-studios.web.app/global/assets/images/poster.webp\" shadow-intensity=\"1\" disable-tap auto-rotate> <div class=\"model-viewer-poster\" slot=\"poster\" style=\"background-image:url(https://shoenix-studios.web.app/global/assets/images/poster.webp)\"></div> <div class=\"progress-bar hide\" slot=\"progress-bar\"> <div class=\"update-bar\" style=\"width:100%\"></div> </div> </model-viewer> <ul class=\"actions bottom-special\"> <div class=\"controls\"> <div><select id=\"variant\"></select></div> </div> <li> <a id=\"behancerd\" href=\"https://www.behance.net/gallery/143669887/JDT-CONCEPT-Shoenix-Studios\" target=\"_blank\" class=\"button\" aria-label=\"Behance\">Behance Documentation</a> </li> </ul> </section> <section> <div class=\"adsslider\"> <div class=\"ads-slider\"> <div class=\"slide\"> <a aria-label=\"Revenant Formal\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" title=\"Revenant Formal\" width=\"1920\" height=\"300\" alt=\"Revenant Formal\" loading=\"lazy\"/></a> </div> <div class=\"slide\"> <a href=\"https://www.behance.net/gallery/141503291/Karnival-FYPro-Com-20192020-UMP\" aria-label=\"Karnival FYPro-com\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" title=\"Revenant Formal\" width=\"1920\" height=\"300\" alt=\"Revenant Formal\" loading=\"lazy\"/></a> </div> <div class=\"slide\"> <a href=\"#productcard\" aria-label=\"ITNOT Collection\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" title=\"ITNOT Collection\" width=\"1920\" height=\"300\" alt=\"In The Name of Tsar Collection\" loading=\"lazy\"/></a> </div> <div class=\"slide\"> <a href=\"#productcard\" aria-label=\"World Collection\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" title=\"World Collection\" width=\"1920\" height=\"300\" alt=\"The World Collection\" loading=\"lazy\"/></a> </div> <div class=\"slide\"> <a aria-label=\"HM Concept\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" title=\"Harimau Malaya | AC Milan Concept\" width=\"1920\" height=\"300\" alt=\"Harimau Malaya | AC Milan Concept\" loading=\"lazy\"/></a> </div> </div> </div> </section> <section id=\"work\" class=\"main style3 primary\"> <div class=\"content\"> <header> <h2 class=\"label\">Latest Works</h2> </header> <div class=\"gallery\"> <article class=\"from-left\"> <a href=\"https://shoenix-studios.web.app/global/assets/images/01-full.webp\" class=\"image fit\"><img class=\"hidden\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" title=\"Cover Album Arts\" height=\"225.817\" width=\"360\" alt=\"Cover Album Arts\" loading=\"lazy\"/></a> </article> <article class=\"from-right\"> <a href=\"https://shoenix-studios.web.app/global/assets/images/02-full.webp\" class=\"image fit\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" title=\"Arus Kelajuan\" height=\"225.817\" width=\"360\" alt=\"Arus Kelajuan\" loading=\"lazy\"/></a> </article> <article class=\"from-left\"> <a href=\"https://shoenix-studios.web.app/global/assets/images/03-full.webp\" class=\"image fit\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" title=\"The Phantom Cries\" height=\"225.817\" width=\"360\" alt=\"The Phantom Cries\" loading=\"lazy\"/></a> </article> <article class=\"from-right\"> <a href=\"https://shoenix-studios.web.app/global/assets/images/04-full.webp\" class=\"image fit\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" title=\"GenesisPhantom | Hyper Concept Skateboard\" height=\"225.817\" width=\"360\" alt=\"Hyper Concept Skateboard\" loading=\"lazy\"/></a> </article> <article class=\"from-left\"> <a href=\"https://shoenix-studios.web.app/global/assets/images/05-full.webp\" class=\"image fit\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" title=\"Hausboom X Shoenix Studios\" height=\"225.817\" width=\"360\" alt=\"Hausboom X Shoenix Studios\" loading=\"lazy\"/></a> </article> <article class=\"from-right\"> <a href=\"https://shoenix-studios.web.app/global/assets/images/06-full.webp\" class=\"image fit\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" title=\"Zulmat\" height=\"225.817\" width=\"360\" alt=\"Zulmat\" loading=\"lazy\"/></a> </article> </div> </div> </section> <section id=\"multiproject\" class=\"main style4 primary\"> <div class=\"mphero\"> <div class=\"mptext\"> <p id=\"projectup\" class=\"mptext__short\">Latest Update: </p> <h1 class=\"mptext__title\">Projects Collection</h1> <p class=\"mptext__description\"><br>All project visualization & documentation from planning, texturing and rendering phase, all projects is subject to change. + Included video gallery from previous project. </p> <a href=\"project\" target=\"_self\" class=\"button\" aria-label=\"Project\">View all projects</a> </div> <div class=\"mpgrid__container\"> <div class=\"mpgrid__item mpone\"></div> <div class=\"mpgrid__item mptwo\"></div> <div class=\"mpgrid__item mpthree\"></div> <div class=\"mpgrid__item mpfour\"></div> <div class=\"mpgrid__item mpfive\"></div> <div class=\"mpgrid__item mpsix\"></div> <div class=\"mpgrid__item mpseven\"></div> <div class=\"mpgrid__item mpeight\"></div> <div class=\"mpgrid__item mpnine\"></div> <div class=\"mpgrid__item mpten\"></div> <div class=\"mpgrid__item mpeleven\"></div> <div class=\"mpgrid__item mptwelve\"></div> </div> </div> </section> <section id=\"productcard\" class=\"main style3 primary\"> <div class=\"infocontent\"> <header> <h2 class=\"label\">Latest Collections</h2> </header> <div class=\"info-container\"> <div class=\"card\"> <h2>Collection 1</h2> <a href=\"product\" data-proj-col=\"1\" type=\"button\" target=\"_self\" aria-label=\"ITNOT\"> <i class=\"fas fa-arrow-right\"></i></a> <p>in the name of Tsar</p> <div class=\"pic\"></div> <span> </span> </div> <div class=\"card\"> <h2>Collection 2</h2> <a href=\"product\" data-proj-col=\"2\" type=\"button\" target=\"_self\" aria-label=\"BSE\"> <i class=\"fas fa-arrow-right\"></i></a> <p>Black Steel Eagle</p> <div class=\"pic\"></div> <span> </span> </div> <div class=\"card\"> <h2>Collection 3</h2> <a href=\"product\" data-proj-col=\"3\" type=\"button\" target=\"_self\" aria-label=\"WORLD\"> <i class=\"fas fa-arrow-right\"></i></a> <p>The World</p> <div class=\"pic\"></div> <span> </span> </div> <div class=\"card\"> <h2>Collection 4</h2> <a href=\"product\" data-proj-col=\"4\" type=\"button\" target=\"_self\" aria-label=\"UNITY\"> <i class=\"fas fa-arrow-right\"></i></a> <p>Unity</p> <div class=\"pic\"></div> <span> </span> </div> </div> </div> </section> <section id=\"blog\" class=\"main style4 blog\"> <div class=\"blog-relative__container\"> <div class=\"blog-full__width blog-object__fit\"> <img class=\"blog-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"Blog background picture\" loading=\"lazy\"> <div class=\"blog-absolute\"> <img class=\"blog-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" width=\"128\" height=\"31.3\" style=\"margin-bottom:12px\" alt=\"Shoenix Logo\" loading=\"lazy\"> <h1 class=\"blog-text\">Developer Logs</h1> <p class=\"blog-paragraph\">Complete compilations of developer updated logs for the website, from frontend to backend. <span id=\"dateup\"><br> Latest Update: </span> </p> <a id=\"blogbtn\" href=\"blog\" target=\"_self\" class=\"button\" aria-label=\"Blog\">Read Now!</a> </div> </div> </div> </section> <section> <div class=\"clientslider\"> <section class=\"client-slider\"> <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" width=\"149\" height=\"97\" alt=\"Pioneer CLI\"></div> <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" width=\"149\" height=\"97\" alt=\"NMVX CLI\"></div> <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" width=\"149\" height=\"97\" alt=\"Atmax CLI\"></div> <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" width=\"149\" height=\"97\" alt=\"Usul Timur CLI\"></div> <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" width=\"149\" height=\"97\" alt=\"FTSLR CLI\"></div> <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" width=\"149\" height=\"97\" alt=\"Temor CLI\"></div> <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" width=\"149\" height=\"97\" alt=\"Granova CLI\"></div> </section> </div> </section> <footer class=\"footer section\"> <div class=\"footer__container container grid\"> <span class=\"footer__logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" width=\"32\" height=\"32\" alt=\"Shoenix Studios's Logo\"> </span> <div class=\"footer__content\"> <h2 class=\"footer__title\">Socials</h2> <ul class=\"footer__links\"> <li><a href=\"https://www.facebook.com/shoenixstudios\" target=\"_blank\" aria-label=\"Facebook\" class=\"footer__link\">Facebook</a></li> <li><a href=\"https://www.instagram.com/shoenix_studios/\" target=\"_blank\" aria-label=\"Instagram\" class=\"footer__link\">Instagram</a></li> <li><a href=\"https://www.youtube.com/@shoenixstudios\" target=\"_blank\" aria-label=\"Youtube\" class=\"footer__link\">Youtube</a></li> <li><a href=\"https://github.com/shoen1x\" target=\"_blank\" aria-label=\"Github\" class=\"footer__link\">Github</a> </li> </ul> </div> <div class=\"footer__content\"> <h2 class=\"footer__title\">Navigation</h2> <ul class=\"footer__links\"> <li> <a href=\"project\" target=\"_self\" aria-label=\"Project\" class=\"footer__link\">Projects</a> </li> <li> <a href=\"#productcard\" target=\"_self\" aria-label=\"Products\" class=\"footer__link\">Products</a> </li> <li> <a href=\"blog\" target=\"_self\" aria-label=\"Blog\" class=\"footer__link\">Blog</a> </li> </ul> <ul class=\"footer__copy\"> <li> <span class=\"footer__copy-link\">&copy; 2023 <strong>Shoenix Studios</strong> All Rights Reserved</span> <span class=\"footer__copy-link\"><span id=\"versioning\"></span><br><span id=\"revisioning\"></span></span> </li> </ul> <ul class=\"footer__links\"> <li> <label class=\"select-language\" for=\"langslct\"> <select id=\"langslct\" required=\"required\"> <option value=\"\" disabled=\"disabled\" selected=\"selected\">Language Options</option> <option value=\"en\">English</option> <option value=\"ms\">Malay</option> </select> <svg> <use xlink:href=\"#select-arrow-down\"></use> </svg> </label> <svg class=\"sprites-language\"> <symbol id=\"select-arrow-down\" viewbox=\"0 0 10 6\"> <polyline points=\"1 1 5 5 9 1\"></polyline> </symbol> </svg> </li> </ul> </div> </div> </footer> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_32___ + "\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\"><" + "/script> <" + "script>var Revf_format=\"MMM d, yyyy\",bodyLangCode=\"en\",bodyCountryCode=\"my\"<" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_34___ + "\"><" + "/script> <" + "script src=\"https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js\"><" + "/script> <" + "script type=\"module\" src=\"" + ___HTML_LOADER_REPLACEMENT_35___ + "\"><" + "/script> <" + "script type=\"module\" src=\"https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_36___ + "\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_37___ + "\"><" + "/script> <" + "script>function appendData(e){document.getElementById(\"versioning\").innerHTML=DOMPurify.sanitize(\"</br></br>Build: <strong>\"+e.metadata.version+\"<strong>\"),document.getElementById(\"revisioning\").innerHTML=DOMPurify.sanitize(\"Revision: <strong>\"+e.metadata.revision+\"<strong>\"),document.getElementById(\"dateup\").innerHTML=DOMPurify.sanitize(\"<br> Latest update: <strong>\"+e.metadata.date+\"<strong>\"),document.getElementById(\"projectup\").innerHTML=DOMPurify.sanitize(\"<br> Latest update: <strong>\"+e.metadata.date+\"<strong>\")}fetch(\"assets-terminal.json\").then((function(e){return e.json()})).then((function(e){appendData(e)})).catch((function(e){document.getElementById(\"versioning\").innerHTML=DOMPurify.sanitize(\"</br></br>Versioning data missing\"),document.getElementById(\"revisioning\").innerHTML=DOMPurify.sanitize(\"Revisioning data missing\"),document.getElementById(\"dateup\").innerHTML=DOMPurify.sanitize(\"<br> Latest update: Failed to load.\"),document.getElementById(\"projectup\").innerHTML=DOMPurify.sanitize(\"<br> Latest update: Failed to load.\")}))<" + "/script> </body> </html>";
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (code)));
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7091);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(6368), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(1194), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(5344), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(8750), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(9411), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(3767), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(5980), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(4262), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(2684), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(4170), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(8036), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(9653), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(5514), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(5666), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(7958), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(5653), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(348), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(7971), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(1836), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(3583), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(7356), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(1910), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(9759), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(6318), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(2347), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(2049), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(3241), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(9977), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(6961), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(9737), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(707), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(2666), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(2691), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(6697), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(565), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(5697), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(2635), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(8046), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);
var ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);
var ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);
var ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);
var ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);
var ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);
var ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);
var ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);
var ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);
var ___HTML_LOADER_REPLACEMENT_34___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_34___);
var ___HTML_LOADER_REPLACEMENT_35___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_35___);
var ___HTML_LOADER_REPLACEMENT_36___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_36___);
var ___HTML_LOADER_REPLACEMENT_37___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_37___);
var code = "<!DOCTYPE HTML> <!--[if lt IE 7]> <html class=\"lt-ie9 lt-ie8 lt-ie7\" lang=\"ms-MY\" xmlns:fb=\"http://ogp.me/ns/fb#\"> <![endif]--> <!--[if IE 7]> <html class=\"lt-ie9 lt-ie8\" lang=\"ms-MY\" xmlns:fb=\"http://ogp.me/ns/fb#\"> <![endif]--> <!--[if IE 8]> <html class=\"lt-ie9\" lang=\"ms-MY\" xmlns:fb=\"http://ogp.me/ns/fb#\"> <![endif]--> <!--[if gt IE 8]><!--> <html lang=\"ms\" xmlns:fb=\"http://ogp.me/ns/fb#\"> <head prefix=\"og: http://ogp.me/ns# object: http://ogp.me/ns/object#\"> <title>Rerumah | Shoenix Studios</title> <meta http-equiv=\"Content-Type\" content=\"text/html;\" charset=\"utf-8\"/> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/> <meta http-equiv=\"content-language\" content=\"ms\"/> <meta name=\"viewport\" user-scalable=\"yes\" content=\"width=device-width,initial-scale=1,minimum-scale=1\"/> <meta name=\"theme-color\" media=\"(prefers-color-scheme: dark)\" content=\"#000000\"/> <meta name=\"keywords\" content=\"Shoenix, Shoenix Studios, NMVX, Revenant's Formal, Revenant Formal, NemesisV\"> <meta name=\"description\" content=\"Selamat Datang ke Shoenix Studios | Projek Eksperimen Oleh NMVX.\"> <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\"/> <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"> <link rel=\"icon\" type=\"image/x-icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"> <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"> <link rel=\"manifest\" href=\"https://shoenix-studios.web.app/site.webmanifest\"> <link rel=\"mask-icon\" href=\"https://shoenix-studios.web.app/global/assets/images/svg/safari-pinned-tab.svg\" color=\"#5bbad5\"> <meta name=\"msapplication-TileColor\" content=\"https://shoenix-studios.web.app/browserconfig.xml\"> <meta name=\"format-detection\" content=\"telephone=no\"> <link rel=\"canonical\" href=\"https://shoenix-studios.web.app/ms/home\"/> <link rel=\"alternate\" hreflang=\"en\" href=\"https://shoenix-studios.web.app/home\"/> <link rel=\"alternate\" hreflang=\"ms\" href=\"https://shoenix-studios.web.app/ms/home\"/> <link rel=\"alternate\" hreflang=\"x-default\" href=\"https://shoenix-studios.web.app/\"/> <meta property=\"og:type\" content=\"website\"> <meta property=\"og:image:type\" content=\"image/png\"> <meta property=\"og:image:width\" content=\"1563\"> <meta property=\"og:image:height\" content=\"818\"> <meta property=\"og:description\" content=\"Projek Eksperimen Oleh NMVX.\"> <meta property=\"og:title\" content=\"Rerumah | Shoenix Studios\"> <meta property=\"og:url\" content=\"https://shoenix-studios.web.app/home\"> <meta property=\"og:image\" content=\"https://shoenix-studios.web.app/global/assets/images/og-image/og-image-rerumah.jpg\"> <meta property=\"og:locale\" content=\"ms\"> <meta property=\"og:site_name\" content=\"Home\"> <meta name=\"twitter:card\" content=\"summary_large_image\"> <meta property=\"twitter:domain\" content=\"shoenix-studios.web.app\"> <meta property=\"twitter:url\" content=\"https://shoenix-studios.web.app/home\"> <meta name=\"twitter:title\" content=\"Rerumah | Shoenix Studios\"> <meta name=\"twitter:description\" content=\"Projek Eksperimen Oleh NMVX.\"> <meta name=\"twitter:image\" content=\"https://shoenix-studios.web.app/global/assets/images/og-image/og-image-rerumah.jpg\"> <noscript> <style>body:after,body:before{display:none}</style> <noscript>Sorry, your browser does not have/support JavaScript!</noscript> </noscript> </head> <body class=\"is-preload\"> <header class=\"header\" id=\"header\"> <nav class=\"nav container\"> <a title=\"Home\" href=\"home\" target=\"_self\" aria-label=\"Home\" class=\"nav__logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" height=\"32\" width=\"32\" alt=\"\"> </a> <span>Rerumah | <strong>Shoenix Studios</strong></span> </nav> </header> <section id=\"intro\" class=\"main style1 dark fullscreen\"> <div class=\"content\"> <header> <div id=\"slideshow\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" width=\"320\" height=\"320\" alt=\"NemesisV\" loading=\"eager\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" width=\"720\" height=\"120.667\" alt=\"NemesisV\" loading=\"eager\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" width=\"720\" height=\"120.667\" alt=\"Shoenix Lab Logo\" loading=\"eager\"> </div> </header> <p>Projek Eksperimen Oleh <strong>NMVX</strong></p> </div> </section> <section id=\"first\" class=\"main style2 right dark fullscreen\"> <span class=\"firsttext\">KONSEP KAPAK<br>VALHALLA</span> <model-viewer src=\"https://shoenix-studios.web.app/global/assets/images/3D/valhalla.glb\" disable-zoom touch-action=\"pan-y\" data-js-focus-visible alt=\"Valhalla Axes by Shoenix Studios\" poster=\"https://shoenix-studios.web.app/global/assets/images/poster-1.webp\" shadow-intensity=\"1\" disable-tap auto-rotate> <div class=\"model-viewer-poster\" slot=\"poster\" style=\"background-image:url(https://shoenix-studios.web.app/global/assets/images/poster-1.webp)\"></div> <div class=\"progress-bar hide\" slot=\"progress-bar\"> <div class=\"update-bar\" style=\"width:100%\"></div> </div> </model-viewer> <ul class=\"actions bottom-special\"> <li> <a href=\"https://www.artstation.com/artwork/o2OV4L\" target=\"_blank\" class=\"button\" aria-label=\"Artstation\">Dokumentasi 'Artstation'</a> </li> </ul> </section> <section id=\"second\" class=\"main style2 left dark fullscreen\"> <span class=\"secondtext\">JERSI KONSEP<br>JOHOR DARUL TA'ZIM</span> <model-viewer id=\"playcard\" src=\"https://shoenix-studios.web.app/global/assets/images/3D/playcard.glb\" disable-zoom touch-action=\"pan-y\" data-js-focus-visible alt=\"Johor Concept by Shoenix Studios\" poster=\"https://shoenix-studios.web.app/global/assets/images/poster-1.webp\" shadow-intensity=\"1\" disable-tap auto-rotate> <div class=\"model-viewer-poster\" slot=\"poster\" style=\"background-image:url(https://shoenix-studios.web.app/global/assets/images/poster.webp)\"></div> <div class=\"progress-bar hide\" slot=\"progress-bar\"> <div class=\"update-bar\" style=\"width:100%\"></div> </div> </model-viewer> <ul class=\"actions bottom-special\"> <div class=\"controls\"> <div><select id=\"variant\"></select></div> </div> <li> <a id=\"behancerd\" href=\"https://www.behance.net/gallery/143669887/JDT-CONCEPT-Shoenix-Studios\" target=\"_blank\" class=\"button\" aria-label=\"Behance\">Dokumentasi 'Behance'</a> </li> </ul> </section> <section> <div class=\"adsslider\"> <div class=\"ads-slider\"> <div class=\"slide\"> <a aria-label=\"Revenant Formal\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" title=\"Revenant Formal\" width=\"1920\" height=\"300\" alt=\"Revenant Formal\" loading=\"lazy\"/></a> </div> <div class=\"slide\"> <a href=\"https://www.behance.net/gallery/141503291/Karnival-FYPro-Com-20192020-UMP\" aria-label=\"Karnival FYPro-com\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" title=\"Revenant Formal\" width=\"1920\" height=\"300\" alt=\"Revenant Formal\" loading=\"lazy\"/></a> </div> <div class=\"slide\"> <a href=\"#productcard\" aria-label=\"ITNOT Koleksi\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" title=\"Koleksi 'ITNOT'\" width=\"1920\" height=\"300\" alt=\"Koleksi 'In The Name of Tsar'\" loading=\"lazy\"/></a> </div> <div class=\"slide\"> <a href=\"#productcard\" aria-label=\"World Koleksi\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" title=\"Koleksi 'Dunia'\" width=\"1920\" height=\"300\" alt=\"Koleksi 'Dunia'\" loading=\"lazy\"/></a> </div> <div class=\"slide\"> <a aria-label=\"HM Concept\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" title=\"Konsep Harimau Malaya | AC Milan\" width=\"1920\" height=\"300\" alt=\"Konsep Harimau Malaya | AC Milan\" loading=\"lazy\"/></a> </div> </div> </div> </section> <section id=\"work\" class=\"main style3 primary\"> <div class=\"content\"> <header> <h2 class=\"label\">Karya Baharu</h2> </header> <div class=\"gallery\"> <article class=\"from-left\"> <a href=\"https://shoenix-studios.web.app/global/assets/images/01-full.webp\" class=\"image fit\"><img class=\"hidden\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" title=\"Seni Album Muka Depan\" height=\"225.817\" width=\"360\" alt=\"Seni Album Muka Depan\" loading=\"lazy\"/></a> </article> <article class=\"from-right\"> <a href=\"https://shoenix-studios.web.app/global/assets/images/02-full.webp\" class=\"image fit\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" title=\"Arus Kelajuan\" height=\"225.817\" width=\"360\" alt=\"Arus Kelajuan\" loading=\"lazy\"/></a> </article> <article class=\"from-left\"> <a href=\"https://shoenix-studios.web.app/global/assets/images/03-full.webp\" class=\"image fit\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" title=\"The Phantom Cries\" height=\"225.817\" width=\"360\" alt=\"The Phantom Cries\" loading=\"lazy\"/></a> </article> <article class=\"from-right\"> <a href=\"https://shoenix-studios.web.app/global/assets/images/04-full.webp\" class=\"image fit\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" title=\"GenesisPhantom | Papan Luncur Konsep Hiper\" height=\"225.817\" width=\"360\" alt=\"Papan Luncur Konsep Hiper\" loading=\"lazy\"/></a> </article> <article class=\"from-left\"> <a href=\"https://shoenix-studios.web.app/global/assets/images/05-full.webp\" class=\"image fit\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" title=\"Hausboom X Shoenix Studios\" height=\"225.817\" width=\"360\" alt=\"Hausboom X Shoenix Studios\" loading=\"lazy\"/></a> </article> <article class=\"from-right\"> <a href=\"https://shoenix-studios.web.app/global/assets/images/06-full.webp\" class=\"image fit\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" title=\"Zulmat\" height=\"225.817\" width=\"360\" alt=\"Zulmat\" loading=\"lazy\"/></a> </article> </div> </div> </section> <section id=\"multiproject\" class=\"main style4 primary\"> <div class=\"mphero\"> <div class=\"mptext\"> <p id=\"projectup\" class=\"mptext__short\">kemaskini Terbaharu: </p> <h1 class=\"mptext__title\">Koleksi Projek</h1> <p class=\"mptext__description\"><br>Semua penvisualan & dokumentasi dari perancangan, penteksturan dan fasa kemas gabung. Semua projek adalah tertakluk kepada perubahan. + Termasuk galeri video dari projek terdahulu. </p> <a href=\"project\" target=\"_self\" class=\"button\" aria-label=\"Project\">Lihat semua projek</a> </div> <div class=\"mpgrid__container\"> <div class=\"mpgrid__item mpone\"></div> <div class=\"mpgrid__item mptwo\"></div> <div class=\"mpgrid__item mpthree\"></div> <div class=\"mpgrid__item mpfour\"></div> <div class=\"mpgrid__item mpfive\"></div> <div class=\"mpgrid__item mpsix\"></div> <div class=\"mpgrid__item mpseven\"></div> <div class=\"mpgrid__item mpeight\"></div> <div class=\"mpgrid__item mpnine\"></div> <div class=\"mpgrid__item mpten\"></div> <div class=\"mpgrid__item mpeleven\"></div> <div class=\"mpgrid__item mptwelve\"></div> </div> </div> </section> <section id=\"productcard\" class=\"main style3 primary\"> <div class=\"infocontent\"> <header> <h2 class=\"label\">Koleksi Terbaharu</h2> </header> <div class=\"info-container\"> <div class=\"card\"> <h2>Koleksi 1</h2> <a href=\"product\" type=\"button\" data-proj-col=\"1\" target=\"_self\" aria-label=\"ITNOT\"> <i class=\"fas fa-arrow-right\"></i></a> <p>Di atas nama Tsar</p> <div class=\"pic\"></div> <span> </span> </div> <div class=\"card\"> <h2>Koleksi 2</h2> <a href=\"product\" type=\"button\" data-proj-col=\"2\" target=\"_self\" aria-label=\"BSE\"> <i class=\"fas fa-arrow-right\"></i></a> <p>Helang Keluli Hitam</p> <div class=\"pic\"></div> <span> </span> </div> <div class=\"card\"> <h2>Koleksi 3</h2> <a href=\"product\" type=\"button\" data-proj-col=\"3\" target=\"_self\" aria-label=\"WORLD\"> <i class=\"fas fa-arrow-right\"></i></a> <p>Dunia</p> <div class=\"pic\"></div> <span> </span> </div> <div class=\"card\"> <h2>Koleksi 4</h2> <a href=\"product\" type=\"button\" data-proj-col=\"4\" target=\"_self\" aria-label=\"UNITY\"> <i class=\"fas fa-arrow-right\"></i></a> <p>kesatuan</p> <div class=\"pic\"></div> <span> </span> </div> </div> </div> </section> <section id=\"blog\" class=\"main style4 blog\"> <div class=\"blog-relative__container\"> <div class=\"blog-full__width blog-object__fit\"> <img class=\"blog-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"Blog background picture\" loading=\"lazy\"> <div class=\"blog-absolute\"> <img class=\"blog-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" width=\"128\" height=\"31.3\" style=\"margin-bottom:12px\" alt=\"Shoenix Logo\" loading=\"lazy\"> <h1 class=\"blog-text\">Log Pembangun</h1> <p class=\"blog-paragraph\">kompilasi penuh log pembangun untuk laman sesawang, dari bahagian hadapan hingga belakang. <span id=\"dateup\"><br> Kemaskini Terbaharu: </span> </p> <a id=\"blogbtn\" href=\"blog\" target=\"_self\" class=\"button\" aria-label=\"Blog\">Baca Sekarang!</a> </div> </div> </div> </section> <section> <div class=\"clientslider\"> <section class=\"client-slider\"> <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" width=\"149\" height=\"97\" alt=\"Pioneer CLI\"></div> <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" width=\"149\" height=\"97\" alt=\"NMVX CLI\"></div> <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" width=\"149\" height=\"97\" alt=\"Atmax CLI\"></div> <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\" width=\"149\" height=\"97\" alt=\"Usul Timur CLI\"></div> <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\" width=\"149\" height=\"97\" alt=\"FTSLR CLI\"></div> <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_25___ + "\" width=\"149\" height=\"97\" alt=\"Temor CLI\"></div> <div class=\"slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_26___ + "\" width=\"149\" height=\"97\" alt=\"Granova CLI\"></div> </section> </div> </section> <footer class=\"footer section\"> <div class=\"footer__container container grid\"> <span class=\"footer__logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" width=\"32\" height=\"32\" alt=\"Shoenix Studios's Logo\"> </span> <div class=\"footer__content\"> <h2 class=\"footer__title\">Sosial</h2> <ul class=\"footer__links\"> <li><a href=\"https://www.facebook.com/shoenixstudios\" target=\"_blank\" aria-label=\"Facebook\" class=\"footer__link\">Facebook</a></li> <li><a href=\"https://www.instagram.com/shoenix_studios/\" target=\"_blank\" aria-label=\"Instagram\" class=\"footer__link\">Instagram</a></li> <li><a href=\"https://www.youtube.com/@shoenixstudios\" target=\"_blank\" aria-label=\"Youtube\" class=\"footer__link\">Youtube</a></li> <li><a href=\"https://github.com/shoen1x\" target=\"_blank\" aria-label=\"Github\" class=\"footer__link\">Github</a> </li> </ul> </div> <div class=\"footer__content\"> <h2 class=\"footer__title\">Navigasi</h2> <ul class=\"footer__links\"> <li> <a href=\"project\" target=\"_self\" aria-label=\"Project\" class=\"footer__link\">Projek</a> </li> <li> <a href=\"#productcard\" target=\"_self\" aria-label=\"Products\" class=\"footer__link\">produk</a> </li> <li> <a href=\"blog\" target=\"_self\" aria-label=\"Blog\" class=\"footer__link\">Blog</a> </li> </ul> <ul class=\"footer__copy\"> <li> <span class=\"footer__copy-link\">&copy; 2023 <strong>Shoenix Studios</strong> Hak Cipta Terpelihara</span> <span class=\"footer__copy-link\"><span id=\"versioning\"></span><br><span id=\"revisioning\"></span></span> </li> </ul> <ul class=\"footer__links\"> <li> <label class=\"select-language\" for=\"langslct\"> <select id=\"langslct\" required=\"required\"> <option value=\"\" disabled=\"disabled\" selected=\"selected\">Pilihan Bahasa</option> <option value=\"en\">Bahasa Inggeris</option> <option value=\"ms\">Bahasa Melayu</option> </select> <svg> <use xlink:href=\"#select-arrow-down\"></use> </svg> </label> <svg class=\"sprites-language\"> <symbol id=\"select-arrow-down\" viewbox=\"0 0 10 6\"> <polyline points=\"1 1 5 5 9 1\"></polyline> </symbol> </svg> </li> </ul> </div> </div> </footer> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_27___ + "\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_28___ + "\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_29___ + "\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_30___ + "\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_31___ + "\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_32___ + "\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_33___ + "\"><" + "/script> <" + "script>var Revf_format=\"MMM d, yyyy\",bodyLangCode=\"ms\",bodyCountryCode=\"my\"<" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_34___ + "\"><" + "/script> <" + "script src=\"https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js\"><" + "/script> <" + "script type=\"module\" src=\"" + ___HTML_LOADER_REPLACEMENT_35___ + "\"><" + "/script> <" + "script type=\"module\" src=\"https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_36___ + "\"><" + "/script> <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_37___ + "\"><" + "/script> <" + "script>function appendData(n){document.getElementById(\"versioning\").innerHTML=DOMPurify.sanitize(\"</br></br>Binaan: <strong>\"+n.metadata.version+\"<strong>\"),document.getElementById(\"revisioning\").innerHTML=DOMPurify.sanitize(\"Semakan: <strong>\"+n.metadata.revision+\"<strong>\"),document.getElementById(\"dateup\").innerHTML=DOMPurify.sanitize(\"<br> Kemaskini Terbaharu: <strong>\"+n.metadata.date+\"<strong>\"),document.getElementById(\"projectup\").innerHTML=DOMPurify.sanitize(\"<br> Kemaskini Terbaharu: <strong>\"+n.metadata.date+\"<strong>\")}fetch(net_path+\"assets-terminal.json\").then((function(n){return n.json()})).then((function(n){appendData(n)})).catch((function(n){document.getElementById(\"versioning\").innerHTML=DOMPurify.sanitize(\"</br></br>Data versi hilang\"),document.getElementById(\"revisioning\").innerHTML=DOMPurify.sanitize(\"Data Semakan semula hilang\"),document.getElementById(\"dateup\").innerHTML=DOMPurify.sanitize(\"<br> Kemaskini Terbaharu: Gagal dimuatkan.\"),document.getElementById(\"projectup\").innerHTML=DOMPurify.sanitize(\"<br> Kemaskini Terbaharu: Gagal dimuatkan.\")}))<" + "/script> </body> </html>";
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (code)));
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//	Revenant Formal by NMVX
//	shoenix-studios.web.app | @Shoenixstudios
//  under the CCA 3.0 License | Credit to HTML5 UP for template

(function ($) {
  // Webpack aset import
  var importAll = function importAll(require) {
    return require.keys().reduce(function (acc, next) {
      acc[next.replace("../../", "")] = require(next);
      return acc;
    }, {});
  };
  importAll(__webpack_require__(1720), __webpack_require__(2171), __webpack_require__(7661), __webpack_require__(9228), __webpack_require__(9570), __webpack_require__(8286));

  // Mobile ejah tene dlu
  function isMobile() {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
  }
  var $window = $(window),
    $body = $('body'),
    $header = $('#header'),
    $all = $body.add($header);

  // pecoh2 skrin
  breakpoints({
    xxlarge: ['1681px', '1920px'],
    xlarge: ['1281px', '1680px'],
    large: ['1001px', '1280px'],
    medium: ['737px', '1000px'],
    small: ['481px', '736px'],
    xsmall: [null, '480px']
  });

  // animasi putar2
  $window.on('load', function () {
    setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });

  // teke2
  if (browser.mobile) $body.addClass('is-touch');else {
    breakpoints.on('<=small', function () {
      $body.addClass('is-touch');
    });
    breakpoints.on('>small', function () {
      $body.removeClass('is-touch');
    });
  }

  // Fix: IE flexbox fix.
  if (browser.name == 'ie') {
    var $main = $('.main.fullscreen'),
      IEResizeTimeout;
    $window.on('resize.ie-flexbox-fix', function () {
      clearTimeout(IEResizeTimeout);
      IEResizeTimeout = setTimeout(function () {
        var wh = $window.height();
        $main.each(function () {
          var $this = $(this);
          $this.css('height', '');
          if ($this.height() <= wh) $this.css('height', wh - 50 + 'px');
        });
      });
    }).triggerHandler('resize.ie-flexbox-fix');
  }

  // Galeri
  $window.on('load', function () {
    var $gallery = $('.gallery');
    $gallery.poptrox({
      baseZIndex: 10001,
      useBodyOverflow: false,
      usePopupEasyClose: false,
      overlayColor: '#1f2328',
      overlayOpacity: 0.65,
      usePopupDefaultStyling: false,
      usePopupCaption: true,
      popupLoaderText: '',
      windowMargin: 50,
      usePopupNav: true
    });

    // Hack: Adjust margins when 'small' activates.
    breakpoints.on('>small', function () {
      $gallery.each(function () {
        $(this)[0]._poptrox.windowMargin = 50;
      });
    });
    breakpoints.on('<=small', function () {
      $gallery.each(function () {
        $(this)[0]._poptrox.windowMargin = 5;
      });
    });
  });

  // Section transitions.
  if (browser.canUse('transition')) {
    var on = function on() {
      // Galleries.
      $('.gallery').scrollex({
        top: '30vh',
        bottom: '30vh',
        delay: 50,
        initialize: function initialize() {
          $(this).addClass('inactive');
        },
        terminate: function terminate() {
          $(this).removeClass('inactive');
        },
        enter: function enter() {
          $(this).removeClass('inactive');
        },
        leave: function leave() {
          $(this).addClass('inactive');
        }
      });

      // Generic sections.
      $('.main.style1').scrollex({
        mode: 'middle',
        delay: 100,
        initialize: function initialize() {
          $(this).addClass('inactive');
        },
        terminate: function terminate() {
          $(this).removeClass('inactive');
        },
        enter: function enter() {
          $(this).removeClass('inactive');
        },
        leave: function leave() {
          $(this).addClass('inactive');
        }
      });
      $('.main.style2').scrollex({
        mode: 'middle',
        delay: 100,
        initialize: function initialize() {
          $(this).addClass('inactive');
        },
        terminate: function terminate() {
          $(this).removeClass('inactive');
        },
        enter: function enter() {
          $(this).removeClass('inactive');
        },
        leave: function leave() {
          $(this).addClass('inactive');
        }
      });
      $('.main.style3').scrollex({
        mode: 'middle',
        delay: 100,
        initialize: function initialize() {
          $(this).addClass('inactive');
        },
        terminate: function terminate() {
          $(this).removeClass('inactive');
        },
        enter: function enter() {
          $(this).removeClass('inactive');
        },
        leave: function leave() {
          $(this).addClass('inactive');
        }
      });
      $('.main.style4').scrollex({
        mode: 'middle',
        delay: 100,
        initialize: function initialize() {
          $(this).addClass('inactive');
        },
        terminate: function terminate() {
          $(this).removeClass('inactive');
        },
        enter: function enter() {
          $(this).removeClass('inactive');
        },
        leave: function leave() {
          $(this).addClass('inactive');
        }
      });

      // Product Info.
      $('.infocontent').scrollex({
        top: '50%',
        delay: 50,
        initialize: function initialize() {
          $(this).addClass('inactive');
        },
        terminate: function terminate() {
          $(this).removeClass('inactive');
        },
        enter: function enter() {
          $(this).removeClass('inactive');
        },
        leave: function leave() {
          $(this).addClass('inactive');
        }
      });

      // Project Preview.
      $('#multiproject').scrollex({
        top: '50%',
        delay: 50,
        initialize: function initialize() {
          $(this).addClass('inactive');
        },
        terminate: function terminate() {
          $(this).removeClass('inactive');
        },
        enter: function enter() {
          $(this).removeClass('inactive');
        },
        leave: function leave() {
          $(this).addClass('inactive');
        }
      });

      // Blog.
      $('#blog').scrollex({
        top: '50%',
        delay: 50,
        initialize: function initialize() {
          $(this).addClass('inactive');
        },
        terminate: function terminate() {
          $(this).removeClass('inactive');
        },
        enter: function enter() {
          $(this).removeClass('inactive');
        },
        leave: function leave() {
          $(this).addClass('inactive');
        }
      });
    };
    var off = function off() {
      // Galleries.
      $('.gallery').unscrollex();

      // Generic sections.
      $('.main.style1').unscrollex();
      $('.main.style2').unscrollex();
      $('.main.style3').unscrollex();
      $('.main.style4').unscrollex();

      // Product Info.
      $('.infocontent').unscrollex();

      // Project Preview.
      $('#multiproject').unscrollex();

      // Blog.
      $('#blog').unscrollex();
    };
    breakpoints.on('<=small', off);
    breakpoints.on('>small', on);
  }

  // Acara
  var resizeTimeout, resizeScrollTimeout;
  $window.on('resize', function () {
    // mati animasi
    $body.addClass('is-resizing');
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      // Update scrolly links.
      $('a[href^="#"]').scrolly({
        speed: 1500,
        offset: $header.outerHeight() - 1
      });

      // Re-enable animations/transitions.
      setTimeout(function () {
        $body.removeClass('is-resizing');
        $window.trigger('scroll');
      }, 0);
    }, 100);
  }).on('load', function () {
    $window.trigger('resize');
  });
  var slideShow = function slideShow(container) {
    this.images = []; //public var
    this.curImage = 0;
    for (i = 0; i < container.childElementCount; i++) {
      this.images.push(container.children[i]);
      this.images[i].style.display = "none";
    }

    // Handle going to to the next slide
    var nextSlide = function nextSlide() {
      for (var i = 0; i < this.images.length; i++) {
        this.images[i].style.display = "none";
      }
      this.images[this.curImage].style.display = "block";
      this.curImage++;
      if (this.curImage >= this.images.length) {
        this.curImage = 0;
      }
      window.setTimeout(nextSlide.bind(this), 5000);
    };
    nextSlide.call(this);
  };
  var slike = document.getElementById("slideshow");
  slideShow(slike);
  $('.card a').on('click', function () {
    var projcol = $(this).data("proj-col");
    var CookieDate = new Date(),
      tmp;
    CookieDate.setDate(CookieDate.getDate() + 3);
    document.cookie = "proj-col=" + projcol + "; expires=" + CookieDate.toUTCString() + "; path=/";
  });

  // putar2
  $(document).ready(function () {
    $('.client-slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2100,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }]
    });
    $('.ads-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 12000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      centerMode: true
    });
  });

  // Ambik sekut ikut 'home'
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var _i = 0; _i < ca.length; _i++) {
      var c = ca[_i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  var lang_injection = getCookie("firebase-language-override");

  // 3D
  var modelViewerVariants = document.querySelector("model-viewer#playcard");
  var select = document.querySelector('#variant');
  modelViewerVariants.addEventListener('load', function () {
    var names = modelViewerVariants.availableVariants;
    var _iterator = _createForOfIteratorHelper(names),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var name = _step.value;
        var option = document.createElement('option');
        option.value = name;
        switch (option.value) {
          case 'JDT':
            if (lang_injection == 'ms') {
              option.textContent = 'Jersi Konsep Johor Darul Ta`zim';
            } else {
              option.textContent = 'Johor Darul Ta`zim Jersey Concept';
            }
            break;
          case 'HM':
            if (lang_injection == 'ms') {
              option.textContent = 'Jersi Konsep Harimau Malaya';
            } else {
              option.textContent = 'Harimau Malaya Jersey Concept';
            }
            break;
        }
        select.appendChild(option);
      }
      // Adds a default option.
      //   const option = document.createElement('option');
      // 	option.value = 'HM';
      // 	option.textContent = 'Harimau Malaya Concept';
      // select.appendChild(option);
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  select.addEventListener('input', function (event) {
    modelViewerVariants.variantName = event.target.value === 'default' ? null : event.target.value;
    switch (modelViewerVariants.variantName) {
      case 'JDT':
        document.querySelector('#behancerd').href = "https://www.behance.net/gallery/143669887/JDT-CONCEPT-Shoenix-Studios";
        if (lang_injection == 'ms') {
          document.querySelector('.secondtext').innerHTML = DOMPurify.sanitize("JERSI KONSEP<br>JOHOR DARUL TA'ZIM");
        } else {
          document.querySelector('.secondtext').innerHTML = DOMPurify.sanitize("JOHOR DARUL TA'ZIM<br>JERSEY CONCEPT");
        }
        $('#second-1').attr("id", "second");
        break;
      case 'HM':
        document.querySelector('#behancerd').href = "https://www.behance.net/gallery/145829475/Harimau-Malaya-Concept-Shoenix-Studios";
        if (lang_injection == 'ms') {
          document.querySelector('.secondtext').innerHTML = DOMPurify.sanitize("JERSI KONSEP<br>HARIMAU MALAYA");
        } else {
          document.querySelector('.secondtext').innerHTML = DOMPurify.sanitize("HARIMAU MALAYA HOME<br>JERSEY CONCEPT");
        }
        $('#second').attr("id", "second-1");
        break;
    }
  });

  // var btndownload = document.querySelectorAll('#btn-download');
  // $(btndownload).on('click', function (event) {
  // 	event.preventDefault();
  // 	$(this).addClass("downloaded");
  // 	var dwbutton = $(this).data('dwbutton');
  // 	setTimeout(function () {
  // 		if (dwbutton == 1) {
  // 			DownloadFile('images/downloadfile/NeuroKit-Wallpaper.png', 'Neuro Kit Wallpaper - Shoenix Studios');
  // 		} else if (dwbutton == 2) {
  // 			DownloadFile('images/downloadfile/TigerLeap-Wallpaper.jpg', 'Tiger Leap Wallpaper - Shoenix Studios');
  // 		} else {
  // 			alert("Don't know how you get here!");
  // 		}
  // 		$(btndownload).removeClass('downloaded');
  // 	}, 2000);
  // });

  // function DownloadFile(fileloc, filename) {
  // 	fetch(fileloc)
  // 		.then(resp => resp.blob())
  // 		.then(blob => {
  // 			const url = window.URL.createObjectURL(blob);
  // 			const a = document.createElement('a');
  // 			a.style.display = 'none';
  // 			a.href = url;
  // 			// the filename you want
  // 			a.download = filename;
  // 			document.body.appendChild(a);
  // 			a.click();
  // 			window.URL.revokeObjectURL(url);
  // 		})
  // 		.catch(() => alert('Error! Contact Admin on shoenixstudios@gmail.com'));
  // }

  // Hanya Allah yang tahu
})(jQuery);
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// extracted by mini-css-extract-plugin

})();

/******/ })()
;