/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/product.js":
/*!**********************************!*\
  !*** ./src/assets/js/product.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//\tRevenant Formal by NMVX\n//\tShoen1x.github.io | @Shoenixstudios\n//  under the CCA 3.0 License | Credit to HTML5 UP for template\n\n(function ($) {\n  // Importer\n  var importAll = function importAll(require) {\n    return require.keys().reduce(function (acc, next) {\n      acc[next.replace(\"../../\", \"\")] = require(next);\n      return acc;\n    }, {});\n  };\n  importAll(__webpack_require__(\"./src/images/products sync recursive \\\\.(svg%7Cwebp)$\"));\n  addEventListener(\"DOMContentLoaded\", function (e) {\n    e.preventDefault;\n    var pronum = localStorage.getItem('product_num');\n\n    // var url_selection = window.location.href.match(/\\d+$/);\n    var jcount = 4;\n    var col2 = {\n      'colname': [\"Monarch\", \"Bos Gaurus\", \"Nightmare\", \"Legion\"],\n      'colprice': [\"RM???\", \"RM???\", \"RM???\", \"RM???\"]\n    };\n    var col3 = {\n      'colname': [\"Nexus\", \"Plexus\", \"Scar\", \"Nemesis\"],\n      'colprice': [\"RM???\", \"RM???\", \"RM???\", \"RM???\"]\n    };\n    var col4 = {\n      'colname': [\"San Mirage\", \"Avarice\", \"Chaos\", \"Wrath\"],\n      'colprice': [\"RM???\", \"RM???\", \"RM???\", \"RM???\"]\n    };\n    var col5 = {\n      'colname': [\"Alpha\", \"Beta\", \"Charlie\", \"Delta\"],\n      'colprice': [\"RM???\", \"RM???\", \"RM???\", \"RM???\"]\n    };\n    var sname = [\"PowerWear™\", \"UrbanWear™\", \"GameOn\"];\n    var sdesc = [\"Athleisure and active wear\", \"Streetwear and leisure wear\", \"Electronic game and competitive wear\"];\n    var cname = parseInt(pronum);\n    if (cname == 1 || cname > 5) {\n      alert(\"Error\");\n      location.href = '/';\n    } else {\n      (function () {\n        document.querySelector('.home__img').src = \"images/\" + \"c\" + cname + \"-1.webp\";\n        var rotator = document.querySelector('.home__img');\n        var imageDir = 'images/';\n        var delayInSeconds = 5;\n        var images = ['c' + cname + '-1.webp', 'c' + cname + '-2.webp', 'c' + cname + '-3.webp', 'c' + cname + '-4.webp'];\n        var num = 0;\n        var changeImage = function changeImage() {\n          var len = images.length;\n          rotator.src = imageDir + images[num++];\n          if (num == len) {\n            num = 0;\n          }\n        };\n        setInterval(changeImage, delayInSeconds * 1000);\n      })();\n\n      // Neat Page changes information\n      switch (cname) {\n        case 2:\n          document.querySelector('#product-type').innerHTML = \"Collection\";\n          document.querySelector('.home__subtitle').innerHTML = \"In The Name of Tsar\";\n          document.querySelector('.discount__description').innerHTML = \"Get In The Name of Tsar now, up to 15% off.\";\n          document.querySelector('.home__description').innerHTML = \"Introducing the In the Name of Tsar Collection: a unique, modern take on streetwear. stylish and custom-made just for you. Suitable for athleisure and sports wear\";\n          document.querySelector('.discount__img').src = 'images/svg/Bundle' + cname + '.svg';\n          break;\n        case 3:\n          document.querySelector('#product-type').innerHTML = \"Collection\";\n          document.querySelector('.home__subtitle').innerHTML = \"Black Steel Eagle\";\n          document.querySelector('.discount__description').innerHTML = \"Get Black Steel Eagle now, up to 15% off.\";\n          document.querySelector('.home__description').innerHTML = \"Introducing the Black Steel Eagle Collection: a mainstream sports inspired design. Unique and custom-made just for you. Suitable for sport usage\";\n          document.querySelector('.discount__img').src = 'images/svg/Bundle' + cname + '.svg';\n          break;\n        case 4:\n          document.querySelector('#product-type').innerHTML = \"Collection\";\n          document.querySelector('.home__subtitle').innerHTML = \"The World\";\n          document.querySelector('.discount__description').innerHTML = \"Get The World now, up to 15% off.\";\n          document.querySelector('.home__description').innerHTML = \"Introducing The World Collection: a robust design for stylish everyday clothing. custom-made just for you. Suitable for streetwear and athleisure\";\n          document.querySelector('.discount__img').src = 'images/svg/Bundle' + cname + '.svg';\n          break;\n        case 5:\n          document.querySelector('#product-type').innerHTML = \"Collection\";\n          document.querySelector('.home__subtitle').innerHTML = \"The Unity\";\n          document.querySelector('.discount__description').innerHTML = \"Get The Unity now, up to 15% off.\";\n          document.querySelector('.home__description').innerHTML = \"Introducing The Unity Collection: a minimalist, clean and modern design. stylish and custom-made just for you. Suitable for e-sport and electronic sport organization\";\n          document.querySelector('.discount__img').src = 'images/svg/Bundle' + cname + '.svg';\n          break;\n      }\n\n      // For Loop catch image query, name, and prices\n      switch (cname) {\n        case 2:\n          for (var i = 0; i < jcount; i++) {\n            document.querySelectorAll('.products__img')[i].src = \"images/c\" + cname + \"-\" + (i + 1) + \".webp\";\n            document.querySelectorAll('.products__title')[i].innerHTML = col2['colname'][i];\n            document.querySelectorAll('.products__price')[i].innerHTML = col2['colprice'][i];\n          }\n          break;\n        case 3:\n          for (var _i = 0; _i < jcount; _i++) {\n            document.querySelectorAll('.products__img')[_i].src = \"images/c\" + cname + \"-\" + (_i + 1) + \".webp\";\n            document.querySelectorAll('.products__title')[_i].innerHTML = col3['colname'][_i];\n            document.querySelectorAll('.products__price')[_i].innerHTML = col3['colprice'][_i];\n          }\n          break;\n        case 4:\n          for (var _i2 = 0; _i2 < jcount; _i2++) {\n            document.querySelectorAll('.products__img')[_i2].src = \"images/c\" + cname + \"-\" + (_i2 + 1) + \".webp\";\n            document.querySelectorAll('.products__title')[_i2].innerHTML = col4['colname'][_i2];\n            document.querySelectorAll('.products__price')[_i2].innerHTML = col4['colprice'][_i2];\n          }\n          break;\n        case 5:\n          for (var _i3 = 0; _i3 < jcount; _i3++) {\n            document.querySelectorAll('.products__img')[_i3].src = \"images/c\" + cname + \"-\" + (_i3 + 1) + \".webp\";\n            document.querySelectorAll('.products__title')[_i3].innerHTML = col5['colname'][_i3];\n            document.querySelectorAll('.products__price')[_i3].innerHTML = col5['colprice'][_i3];\n          }\n          break;\n      }\n    }\n    var slcpk = document.querySelectorAll('.products__content button');\n    $(slcpk).on('click', function () {\n      var slcpkdata = $(this).data(\"slcpkdata\");\n      document.querySelector('.tag').innerHTML = document.querySelectorAll('.products__title')[slcpkdata].innerHTML;\n      var checktag = document.querySelector('.tag').innerHTML;\n      document.querySelector('#pdmtitle').innerHTML = checktag;\n      document.querySelector('#pdminfo').innerHTML = \"This \" + checktag + \" is availabe with:\";\n      document.querySelector('#pdrtitle').innerHTML = \"What included in \" + checktag + \"'s Packages?\";\n      document.querySelector('#pdprice').innerHTML = document.querySelectorAll('.products__price')[slcpkdata].innerHTML;\n      if (checktag == 'Monarch' || checktag == 'Nightmare' || checktag == 'Nexus' || checktag == \"San Mirage\" || checktag == \"Avarice\" || checktag == \"Chaos\" || checktag == \"Wrath\") {\n        document.querySelector('#pdltitle').innerHTML = sname[0] + \" Series\";\n        document.querySelector('#pdlinfo').innerHTML = 'This is ' + checktag + ', ' + sname[0] + ' Series for ' + sdesc[0] + '.';\n        document.querySelector('#pdlsvg').src = 'images/svg/powerwear.svg';\n      } else if (checktag == 'Bos Gaurus' || checktag == 'Legion' || checktag == \"Plexus\" || checktag == \"Scar\" || checktag == \"Nemesis\") {\n        document.querySelector('#pdltitle').innerHTML = sname[1] + \" Series\";\n        document.querySelector('#pdlinfo').innerHTML = 'This is ' + checktag + ', ' + sname[1] + ' Series for ' + sdesc[1] + '.';\n        document.querySelector('#pdlsvg').src = 'images/svg/urbanwear.svg';\n      } else {\n        document.querySelector('#pdltitle').innerHTML = sname[2] + \" Series\";\n        document.querySelector('#pdlinfo').innerHTML = 'This is ' + checktag + ', ' + sname[2] + ' Series for ' + sdesc[2] + '.';\n        document.querySelector('#pdlsvg').src = 'images/svg/gameon.svg';\n      }\n    });\n  }, {\n    passive: true\n  });\n})(jQuery);\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/product.js?");

/***/ }),

/***/ "./src/product.html":
/*!**************************!*\
  !*** ./src/product.html ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ico/apple-touch-icon.png */ \"./src/images/ico/apple-touch-icon.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ico/favicon.ico */ \"./src/images/ico/favicon.ico\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ico/favicon-32x32.png */ \"./src/images/ico/favicon-32x32.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ico/favicon-16x16.png */ \"./src/images/ico/favicon-16x16.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ico/site.webmanifest */ \"./src/images/ico/site.webmanifest\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ico/safari-pinned-tab.svg */ \"./src/images/ico/safari-pinned-tab.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/css/noscript.css */ \"./src/assets/css/noscript.css\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/ico/shoenix.svg */ \"./src/images/ico/shoenix.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/css/images/Photoshop.svg */ \"./src/assets/css/images/Photoshop.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/css/images/Illustrator.svg */ \"./src/assets/css/images/Illustrator.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/css/images/Pioneer.svg */ \"./src/assets/css/images/Pioneer.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/css/images/ctailored.svg */ \"./src/assets/css/images/ctailored.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/thumbs/techspec.webp */ \"./src/images/thumbs/techspec.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/thumbs/dummy.webp */ \"./src/images/thumbs/dummy.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./images/products/cadjust.webp */ \"./src/images/products/cadjust.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./images/thumbs/mockup.webp */ \"./src/images/thumbs/mockup.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/js/jquery.min.js */ \"./src/assets/js/jquery.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/js/jquery.poptrox.min.js */ \"./src/assets/js/jquery.poptrox.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/js/jquery.scrolly.min.js */ \"./src/assets/js/jquery.scrolly.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/js/jquery.scrollex.min.js */ \"./src/assets/js/jquery.scrollex.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/js/browser.min.js */ \"./src/assets/js/browser.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/js/breakpoints.min.js */ \"./src/assets/js/breakpoints.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/js/util.js */ \"./src/assets/js/util.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/js/firebase.js */ \"./src/assets/js/firebase.js\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);\nvar ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);\nvar ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);\nvar ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);\nvar ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);\nvar ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);\nvar code = \"<!DOCTYPE HTML>\\r\\n<!--\\r\\n\\tRevenant Formal by NMVX\\r\\n\\tShoen1x.github.io | @Shoenixstudios\\r\\n\\tunder the CCA 3.0 License | Credit to HTML5 UP for template\\r\\n-->\\r\\n\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <!--Title-->\\r\\n  <title>Products | Shoenix Studios</title>\\r\\n\\r\\n  <!--Meta and linker-->\\r\\n  <meta http-equiv=Content-Type content=text/html; charset=utf-8 />\\r\\n  <meta name=\\\"viewport\\\" user-scalable=\\\"yes\\\" content=\\\"width=device-width, initial-scale=1.0, minimum-scale=1.0\\\" />\\r\\n  <meta name=\\\"theme-color\\\" media=\\\"(prefers-color-scheme: dark)\\\" content=\\\"black\\\" />\\r\\n  <meta name=\\\"keywords\\\" content=\\\"Shoenix, Shoenix Studios, NMVX, Revenant's Formal, Revenant Formal, NemesisV\\\">\\r\\n  <meta name=\\\"description\\\" content=\\\"Collection of products by NMVX | Shoenix Studios.\\\">\\r\\n  <link href=\\\"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css\\\" rel=\\\"stylesheet\\\">\\r\\n\\t<link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/x-icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n\\t<link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\r\\n\\t<link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\">\\r\\n\\t<link rel=\\\"manifest\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\">\\r\\n\\t<link rel=\\\"mask-icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" color=\\\"#5bbad5\\\">\\r\\n\\t<meta name=\\\"msapplication-TileColor\\\" content=\\\"images/ico/browserconfig.xml\\\">\\r\\n  <meta name=\\\"format-detection\\\" content=\\\"telephone=no\\\">\\r\\n\\r\\n\\t<!-- Social Media metadata -->\\r\\n\\t<meta property=\\\"og:type\\\" content=\\\"website\\\">\\r\\n\\t<meta property=\\\"og:image:type\\\" content=\\\"image/png\\\">\\r\\n\\t<meta property=\\\"og:image:width\\\" content=\\\"1563\\\">\\r\\n\\t<meta property=\\\"og:image:height\\\" content=\\\"818\\\">\\r\\n\\t<meta property=\\\"og:description\\\" content=\\\"Collection of product made by Shoenix Studios\\\">\\r\\n\\t<meta property=\\\"og:title\\\" content=\\\"Product | Shoenix Studios\\\">\\r\\n\\t<meta property=\\\"og:url\\\" content=\\\"https://shoenix-studios.web.app/product\\\">\\r\\n\\t<meta property=\\\"og:image\\\" content=\\\"https://shoenix-studios.web.app/images/og-image.jpg\\\">\\r\\n\\t<meta property=\\\"og:locale\\\" content=\\\"en_MY\\\">\\r\\n\\t<meta property=\\\"og:site_name\\\" content=\\\"Product\\\">\\r\\n  \\r\\n  <meta name=\\\"twitter:card\\\" content=\\\"summary_large_image\\\">\\r\\n\\t<meta property=\\\"twitter:domain\\\" content=\\\"shoenix-studios.web.app\\\">\\r\\n\\t<meta property=\\\"twitter:url\\\" content=\\\"https://shoenix-studios.web.app/product\\\">\\r\\n\\t<meta name=\\\"twitter:title\\\" content=\\\"Product | Shoenix Studios\\\">\\r\\n\\t<meta name=\\\"twitter:description\\\" content=\\\"Collection of product made by Shoenix Studios\\\">\\r\\n\\t<meta name=\\\"twitter:image\\\" content=\\\"https://shoenix-studios.web.app/images/og-image.jpg\\\">\\r\\n\\r\\n  <!--No script-->\\r\\n  <noscript>\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" />\\r\\n  </noscript>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n\\r\\n  <header class=\\\"header\\\" id=\\\"header\\\">\\r\\n    <nav class=\\\"nav container\\\">\\r\\n\\t\\t  <a title=\\\"Home\\\" href=\\\"home\\\" target=\\\"_self\\\" aria-label=\\\"Home\\\" class=\\\"nav__logo\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" height=\\\"32\\\" width=\\\"32\\\" alt=\\\"\\\">\\r\\n      </a>\\r\\n      <span>Products | <strong>Shoenix Studios</strong></span>\\r\\n    </nav>\\r\\n  </header>\\r\\n\\r\\n    <section class=\\\"home section\\\" id=\\\"home\\\">\\r\\n      <div class=\\\"home__container container grid\\\">\\r\\n        <div>\\r\\n          <img src=\\\"#\\\" alt=\\\"\\\" class=\\\"home__img\\\">\\r\\n          <!-- <img src=\\\"https://assets.codepen.io/7773162/home.png\\\" alt=\\\"\\\" class=\\\"home__img\\\"> -->\\r\\n        </div>\\r\\n\\r\\n        <div class=\\\"home__data\\\">\\r\\n          <div class=\\\"home__header\\\">\\r\\n            <!-- <h1 class=\\\"home__title\\\">Collection</h1> -->\\r\\n            <h1 id=\\\"product-type\\\">Null</h1>\\r\\n            <h2 class=\\\"home__subtitle\\\">Null</h2>\\r\\n          </div>\\r\\n\\r\\n          <div class=\\\"home__footer\\\">\\r\\n            <h3 class=\\\"home__title-description\\\">Overview</h3>\\r\\n            <p class=\\\"home__description\\\">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate vitae excepturi saepe amet eveniet repudiandae. Reiciendis harum rem quae numquam quas consequatur quis ratione, esse repellendus assumenda deleniti ex?\\r\\n            </p>\\r\\n            <a href=\\\"#products\\\" class=\\\"button button--flex\\\">\\r\\n              <span class=\\\"button--flex\\\">\\r\\n                <i class=\\\"ri-shopping-bag-line button__icon\\\"></i></i> Purchase now!\\r\\n              </span>\\r\\n            </a>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n    <section class=\\\"sponsor section\\\">\\r\\n      <div class=\\\"sponsor__container container grid\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" height=\\\"41\\\" width=\\\"130\\\" alt=\\\"\\\" class=\\\"sponsor__img\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" height=\\\"44\\\" width=\\\"130\\\" alt=\\\"\\\" class=\\\"sponsor__img\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" height=\\\"59\\\" width=\\\"130\\\" alt=\\\"\\\" class=\\\"sponsor__img\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" height=\\\"31\\\" width=\\\"130\\\" alt=\\\"\\\" class=\\\"sponsor__img\\\">\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n    <section class=\\\"specs section grid\\\" id=\\\"specs\\\">\\r\\n      <h2 class=\\\"section__title section__title-gradient\\\">Technical </br> Specs</h2>\\r\\n\\r\\n      <div class=\\\"specs__container container grid\\\">\\r\\n        <div class=\\\"specs__content grid\\\">\\r\\n          <div class=\\\"specs__data\\\">\\r\\n            <i class=\\\"ri-font-size-2 specs__icon\\\"></i>\\r\\n            <h3 class=\\\"specs__title\\\">Dimensions</h3>\\r\\n            <span class=\\\"specs__subtitle\\\">High Resolution, CMYK, <br>Fully Vectorized</span>\\r\\n          </div>\\r\\n\\r\\n          <div class=\\\"specs__data\\\">\\r\\n            <i class=\\\"ri-folder-3-fill specs__icon\\\"></i>\\r\\n            <h3 class=\\\"specs__title\\\">File Sizes</h3>\\r\\n            <span class=\\\"specs__subtitle\\\">Average 10~100 megabytes</span>\\r\\n          </div>\\r\\n\\r\\n          <div class=\\\"specs__data\\\">\\r\\n            <i class=\\\"ri-information-line specs__icon\\\"></i>\\r\\n            <h3 class=\\\"specs__title\\\">Template Format</h3>\\r\\n            <span class=\\\"specs__subtitle\\\">.AI .EPS .PDF</span>\\r\\n          </div>\\r\\n\\r\\n          <div class=\\\"specs__data\\\">\\r\\n            <i class=\\\"ri-pantone-fill specs__icon\\\"></i>\\r\\n            <h3 class=\\\"specs__title\\\">Flexible</h3>\\r\\n            <span class=\\\"specs__subtitle\\\">Easy format <br> and colour changes</span>\\r\\n          </div>\\r\\n        </div>\\r\\n\\r\\n        <div>\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" height=\\\"503\\\" width=\\\"465\\\" alt=\\\"\\\" class=\\\"specs__img\\\">\\r\\n        </div>\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n    <section class=\\\"products section\\\" id=\\\"products\\\">\\r\\n      <h2 class=\\\"section__title section__title-gradient products__line\\\">\\r\\n        Choose <br> Your Style\\r\\n      </h2>\\r\\n\\r\\n      <div class=\\\"products__container container grid\\\">\\r\\n        <article class=\\\"products__card\\\">\\r\\n          <div class=\\\"products__content\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" height=\\\"500\\\" width=\\\"500\\\" alt=\\\"\\\" class=\\\"products__img\\\">\\r\\n\\r\\n            <h3 class=\\\"products__title\\\">null</h3>\\r\\n            <span class=\\\"products__price\\\">RM???</span>\\r\\n\\r\\n            <button class=\\\"button button--flex products__button\\\" data-slcpkdata=\\\"0\\\">\\r\\n              <span href=\\\"#productsdetails\\\" aria-hidden=\\\"true\\\" class=\\\"ri-shopping-bag-line button__icon\\\"></span>\\r\\n            </button>\\r\\n          </div>\\r\\n        </article>\\r\\n        <article class=\\\"products__card\\\">\\r\\n          <div class=\\\"products__content\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" height=\\\"500\\\" width=\\\"500\\\" alt=\\\"\\\" class=\\\"products__img\\\">\\r\\n\\r\\n            <h3 class=\\\"products__title\\\">null</h3>\\r\\n            <span class=\\\"products__price\\\">RM???</span>\\r\\n\\r\\n            <button class=\\\"button button--flex products__button\\\" data-slcpkdata=\\\"1\\\">\\r\\n              <span href=\\\"#productsdetails\\\" aria-hidden=\\\"true\\\" class=\\\"ri-shopping-bag-line button__icon\\\"></span>\\r\\n            </button>\\r\\n          </div>\\r\\n        </article>\\r\\n        <article class=\\\"products__card\\\">\\r\\n          <div class=\\\"products__content\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" height=\\\"500\\\" width=\\\"500\\\" alt=\\\"\\\" class=\\\"products__img\\\">\\r\\n\\r\\n            <h3 class=\\\"products__title\\\">null</h3>\\r\\n            <span class=\\\"products__price\\\">RM???</span>\\r\\n\\r\\n            <button class=\\\"button button--flex products__button\\\" data-slcpkdata=\\\"2\\\">\\r\\n              <span href=\\\"#productsdetails\\\" aria-hidden=\\\"true\\\" class=\\\"ri-shopping-bag-line button__icon\\\"></span>\\r\\n            </button>\\r\\n          </div>\\r\\n        </article>\\r\\n        <article class=\\\"products__card\\\">\\r\\n          <div class=\\\"products__content\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" height=\\\"500\\\" width=\\\"500\\\" alt=\\\"\\\" class=\\\"products__img\\\">\\r\\n\\r\\n            <h3 class=\\\"products__title\\\">null</h3>\\r\\n            <span class=\\\"products__price\\\">RM???</span>\\r\\n\\r\\n            <button class=\\\"button button--flex products__button\\\" data-slcpkdata=\\\"3\\\">\\r\\n              <span href=\\\"#productsdetails\\\" aria-hidden=\\\"true\\\" class=\\\"ri-shopping-bag-line button__icon\\\"></span>\\r\\n            </button>\\r\\n          </div>\\r\\n        </article>\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n    <section class=\\\"products section\\\" id=\\\"productsdetails\\\">\\r\\n      <div class=\\\"cards\\\">\\r\\n        <article class=\\\"information [ card ]\\\">\\r\\n          <span class=\\\"tag\\\">None Selected</span>\\r\\n          <h2 id=\\\"pdltitle\\\" class=\\\"title\\\">None Selected</h2>\\r\\n          <p id=\\\"pdlinfo\\\" class=\\\"info\\\">None Selected</p>\\r\\n          <img id=\\\"pdlsvg\\\" src=\\\"#\\\" style=\\\"margin-bottom: 20px;\\\" alt=\\\"\\\">\\r\\n          <button class=\\\"button\\\" style=\\\"margin-top: 12px;\\\" onclick=\\\"location.href='#discount'\\\" type=\\\"button\\\">\\r\\n            <span>Buy Bundle</span>\\r\\n            <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" height=\\\"24px\\\" viewBox=\\\"0 0 24 24\\\" width=\\\"24px\\\" fill=\\\"none\\\">\\r\\n              <path d=\\\"M0 0h24v24H0V0z\\\" fill=\\\"none\\\" />\\r\\n              <path d=\\\"M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z\\\" fill=\\\"currentColor\\\" />\\r\\n            </svg>\\r\\n          </button>\\r\\n        </article>\\r\\n        <article class=\\\"plan [ card ]\\\">\\r\\n          <div class=\\\"inner\\\">\\r\\n      \\r\\n            <span class=\\\"pricing\\\">\\r\\n              <span id=\\\"pdprice\\\">\\r\\n                RM??\\r\\n              </span>\\r\\n            </span>\\r\\n            <h2 id=\\\"pdmtitle\\\" class=\\\"title\\\">None Selected</h2>\\r\\n            <p id=\\\"pdminfo\\\" class=\\\"info\\\">This None Selected is availabe with:</p>\\r\\n            <ul class=\\\"features\\\">\\r\\n              <li>\\r\\n                <span class=\\\"icon\\\">\\r\\n                  <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\" width=\\\"24\\\" height=\\\"24\\\">\\r\\n                    <path fill=\\\"none\\\" d=\\\"M0 0h24v24H0z\\\" />\\r\\n                    <path d=\\\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\\\" fill=\\\"currentColor\\\" />\\r\\n                  </svg>\\r\\n                </span>\\r\\n                <span><strong>PRO</strong> License purchase</span>\\r\\n              </li>\\r\\n              <li>\\r\\n                <span class=\\\"icon\\\">\\r\\n                  <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\" width=\\\"24\\\" height=\\\"24\\\">\\r\\n                    <path fill=\\\"none\\\" d=\\\"M0 0h24v24H0z\\\" />\\r\\n                    <path d=\\\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\\\" fill=\\\"currentColor\\\" />\\r\\n                  </svg>\\r\\n                </span>\\r\\n                <span>Custom <strong>poster</strong></span>\\r\\n              </li>\\r\\n              <li>\\r\\n                <span class=\\\"icon\\\">\\r\\n                  <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\" width=\\\"24\\\" height=\\\"24\\\">\\r\\n                    <path fill=\\\"none\\\" d=\\\"M0 0h24v24H0z\\\" />\\r\\n                    <path d=\\\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\\\" fill=\\\"currentColor\\\" />\\r\\n                  </svg>\\r\\n                </span>\\r\\n                <span>One-Time Purchase</span>\\r\\n              </li>\\r\\n            </ul>\\r\\n            <button class=\\\"button\\\" style=\\\"cursor: pointer;\\\" onclick=\\\"alert('Payment system not yet available!')\\\">\\r\\n              Purchase Now!\\r\\n            </button>\\r\\n          </div>\\r\\n        </article>\\r\\n        <article class=\\\"information [ card ]\\\">\\r\\n          <h2 id=\\\"pdrtitle\\\" class=\\\"title\\\">What included in None Selected's Packages?</h2>\\r\\n          <p class=\\\"info\\\">The standard things included in packages after purchases are..</p>\\r\\n          <dl class=\\\"details\\\">\\r\\n            <div>\\r\\n              <dt>Long & Short sleeve template</dt>\\r\\n              <dd>Template</dd>\\r\\n            </div>\\r\\n            <div>\\r\\n              <dt>Full Vectorized Form</dt>\\r\\n              <dd>Vector</dd>\\r\\n            </div>\\r\\n          </dl>\\r\\n        </article>\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n    <section class=\\\"case section grid\\\" id=\\\"case\\\">\\r\\n      <h2 class=\\\"section__title section__title-gradient\\\">Flexible</h2>\\r\\n\\r\\n      <div class=\\\"image-indicators\\\">\\r\\n        <input type=\\\"checkbox\\\" class=\\\"point\\\" id=\\\"point-1\\\" name=\\\"point\\\" value=\\\"1\\\">\\r\\n        <input type=\\\"checkbox\\\" class=\\\"point\\\" id=\\\"point-2\\\" name=\\\"point\\\" value=\\\"2\\\">\\r\\n        <input type=\\\"checkbox\\\" class=\\\"point\\\" id=\\\"point-3\\\" name=\\\"point\\\" value=\\\"3\\\">\\r\\n        <input type=\\\"checkbox\\\" class=\\\"point\\\" id=\\\"point-4\\\" name=\\\"point\\\" value=\\\"4\\\">\\r\\n        <label for=\\\"point-1\\\" id=\\\"label-1\\\" >\\r\\n            <span>\\r\\n                <span></span>\\r\\n            </span>\\r\\n        </label>\\r\\n        <label for=\\\"point-2\\\" id=\\\"label-2\\\" >\\r\\n            <span>\\r\\n                <span></span>\\r\\n            </span>\\r\\n        </label>\\r\\n        <label for=\\\"point-3\\\" id=\\\"label-3\\\">\\r\\n            <span>\\r\\n                <span></span>\\r\\n            </span>\\r\\n        </label>\\r\\n        <label for=\\\"point-4\\\" id=\\\"label-4\\\">\\r\\n            <span>\\r\\n                <span></span>\\r\\n            </span>\\r\\n        </label>\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" title=\\\"Custom Adjust Jersey Template\\\" height=\\\"400\\\" width=\\\"400\\\" alt=\\\"Custom Adjust Template\\\" loading=\\\"lazy\\\">\\r\\n        <div class=\\\"description\\\">\\r\\n            <div>\\r\\n                <p>The product was flexible, the design was react to the different types of garment pattern.</p>\\r\\n            </div>\\r\\n            <div>\\r\\n                <p>Customize the side panel with custom ribbon for more </p>\\r\\n                <p>air ventilation and stretchiness</p>\\r\\n            </div>\\r\\n            <div>\\r\\n                <p>Change collar design, with different types of collars shapes</p>\\r\\n            </div>\\r\\n            <div>\\r\\n                <p>Choose different types of sleeves pattern. From default, </p>\\r\\n                <p>raglan and custom cut sleeve!</p>\\r\\n            </div>\\r\\n            <div>\\r\\n                <p>Design your own sleeves cuff design, with rubber, jersey or</p>\\r\\n                <p>embed types with various combinations</p>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n      <div class=\\\"case__container container grid\\\">\\r\\n        <div>\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" width=\\\"494\\\" height=\\\"599\\\" alt=\\\"\\\" class=\\\"case__img\\\">\\r\\n        </div>\\r\\n\\r\\n        <div class=\\\"case__data\\\">\\r\\n          <p class=\\\"case__description\\\">\\r\\n            With a easy and flexible made design so that you can change it whenever you want, and keep experimenting with various combinations. \\r\\n            <a style=\\\"cursor: pointer;\\\" onclick=\\\"alert('Will be available soon!')\\\" class=\\\"button button--flex\\\">\\r\\n            <i class=\\\"ri-information-line button__icon\\\"></i> Download Guides\\r\\n          </a>\\r\\n        </div>\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n    <section id=\\\"discount\\\" class=\\\"discount section\\\">\\r\\n      <div class=\\\"discount__container container grid\\\">\\r\\n        <div class=\\\"discount__animate\\\">\\r\\n          <h2 class=\\\"discount__title\\\">Buy the whole <br>package plan</h2>\\r\\n          <p class=\\\"discount__description\\\">None Selected</p>\\r\\n          <a class=\\\"button button--flex\\\" style=\\\"cursor: pointer;\\\" onclick=\\\"alert('Payment system not yet available!')\\\">\\r\\n            <i class=\\\"ri-shopping-bag-line button__icon\\\"></i> Buy package now!\\r\\n          </a>\\r\\n        </div>\\r\\n\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" width=\\\"250\\\" height=\\\"241\\\" title=\\\"Bundle Types\\\" alt=\\\"\\\" class=\\\"discount__img\\\" loading=\\\"lazy\\\">\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n  <!-- Footer -->\\r\\n  <footer class=\\\"footer section\\\">\\r\\n    <div class=\\\"footer__container container grid\\\">\\r\\n      <span class=\\\"footer__logo\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" width=\\\"32\\\" height=\\\"32\\\" alt=\\\"Shoenix Studios's Logo\\\">\\r\\n      </span>\\r\\n\\r\\n      <!-- Icons -->\\r\\n      <div class=\\\"footer__content\\\">\\r\\n        <h3 class=\\\"footer__title\\\">Socials</h3>\\r\\n        <ul class=\\\"footer__links\\\">\\r\\n          <li><a href=\\\"https://www.facebook.com/shoenixstudios\\\" target=\\\"_blank\\\" aria-label=\\\"Facebook\\\"\\r\\n              class=\\\"footer__link\\\">Facebook</a></li>\\r\\n          <li><a href=\\\"https://www.instagram.com/shoenix_studios/\\\" target=\\\"_blank\\\" aria-label=\\\"Instagram\\\"\\r\\n              class=\\\"footer__link\\\">Instagram</a></li>\\r\\n          <li><a href=\\\"https://www.youtube.com/@shoenixstudios\\\" target=\\\"_blank\\\" aria-label=\\\"Youtube\\\"\\r\\n              class=\\\"footer__link\\\">Youtube</a></li>\\r\\n          <li><a href=\\\"https://github.com/shoen1x\\\" target=\\\"_blank\\\" aria-label=\\\"Github\\\" class=\\\"footer__link\\\">Github</a>\\r\\n          </li>\\r\\n        </ul>\\r\\n      </div>\\r\\n\\r\\n      <div class=\\\"footer__content\\\">\\r\\n        <h3 class=\\\"footer__title\\\">News</h3>\\r\\n\\r\\n        <ul class=\\\"footer__links\\\">\\r\\n          <li>\\r\\n            <a href=\\\"home\\\" target=\\\"_self\\\" aria-label=\\\"Home\\\" class=\\\"footer__link\\\">Home</a>\\r\\n          </li>\\r\\n          <li>\\r\\n            <a href=\\\"project\\\" target=\\\"_self\\\" aria-label=\\\"Project\\\" class=\\\"footer__link\\\">Projects</a>\\r\\n          </li>\\r\\n          <li>\\r\\n            <a href=\\\"blog\\\" target=\\\"_self\\\" aria-label=\\\"Blog\\\" class=\\\"footer__link\\\">Blog</a>\\r\\n          </li>\\r\\n        </ul>\\r\\n\\r\\n        <ul class=\\\"footer__copy\\\">\\r\\n          <li>\\r\\n            <span class=\\\"footer__copy-link\\\">&copy; 2023 <strong>Shoenix Studios</strong> All Rights Reserved</span>\\r\\n            <span class=\\\"footer__copy-link\\\"><span id=\\\"versioning\\\"></span></br><span id=\\\"revisioning\\\"></span></span>\\r\\n          </li>\\r\\n        </ul>\\r\\n      </div>\\r\\n\\r\\n      <p id=\\\"versioning\\\"></p>\\r\\n\\r\\n    </div>\\r\\n\\r\\n  </footer>\\r\\n\\r\\n  <!-- Scripts -->\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_21___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_22___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_23___ + \"\\\" type=\\\"module\\\"><\" + \"/script>\\r\\n\\r\\n\\t<\" + \"script>\\r\\n    fetch('webpack-assets.json')\\r\\n        .then(function (response) {\\r\\n            return response.json();\\r\\n        })\\r\\n        .then(function (data) {\\r\\n            appendData(data);\\r\\n        })\\r\\n        .catch(function (err) {\\r\\n            document.getElementById(\\\"versioning\\\").innerHTML = '</br></br>Versioning data missing';\\r\\n            document.getElementById(\\\"revisioning\\\").innerHTML = 'Revisioning data missing';\\r\\n        });\\r\\n          function appendData(data) {\\r\\n            document.getElementById(\\\"versioning\\\").innerHTML = '</br></br>Build: <strong>' + data.metadata.version + '<strong>';\\r\\n            document.getElementById(\\\"revisioning\\\").innerHTML = 'Revision: <strong>' + data.metadata.revision + '<strong>';\\r\\n          }\\r\\n<\" + \"/script>\\r\\n\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://revenant-formal/./src/product.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://revenant-formal/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/assets/css/product.css":
/*!************************************!*\
  !*** ./src/assets/css/product.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/product.css?");

/***/ }),

/***/ "./src/images/products sync recursive \\.(svg%7Cwebp)$":
/*!***************************************************!*\
  !*** ./src/images/products/ sync \.(svg%7Cwebp)$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./Bundle2.svg\": \"./src/images/products/Bundle2.svg\",\n\t\"./Bundle3.svg\": \"./src/images/products/Bundle3.svg\",\n\t\"./Bundle4.svg\": \"./src/images/products/Bundle4.svg\",\n\t\"./Bundle5.svg\": \"./src/images/products/Bundle5.svg\",\n\t\"./cadjust.webp\": \"./src/images/products/cadjust.webp\",\n\t\"./collection2/c2-1.webp\": \"./src/images/products/collection2/c2-1.webp\",\n\t\"./collection2/c2-2.webp\": \"./src/images/products/collection2/c2-2.webp\",\n\t\"./collection2/c2-3.webp\": \"./src/images/products/collection2/c2-3.webp\",\n\t\"./collection2/c2-4.webp\": \"./src/images/products/collection2/c2-4.webp\",\n\t\"./collection3/c3-1.webp\": \"./src/images/products/collection3/c3-1.webp\",\n\t\"./collection3/c3-2.webp\": \"./src/images/products/collection3/c3-2.webp\",\n\t\"./collection3/c3-3.webp\": \"./src/images/products/collection3/c3-3.webp\",\n\t\"./collection3/c3-4.webp\": \"./src/images/products/collection3/c3-4.webp\",\n\t\"./collection4/c4-1.webp\": \"./src/images/products/collection4/c4-1.webp\",\n\t\"./collection4/c4-2.webp\": \"./src/images/products/collection4/c4-2.webp\",\n\t\"./collection4/c4-3.webp\": \"./src/images/products/collection4/c4-3.webp\",\n\t\"./collection4/c4-4.webp\": \"./src/images/products/collection4/c4-4.webp\",\n\t\"./collection5/c5-1.webp\": \"./src/images/products/collection5/c5-1.webp\",\n\t\"./collection5/c5-2.webp\": \"./src/images/products/collection5/c5-2.webp\",\n\t\"./collection5/c5-3.webp\": \"./src/images/products/collection5/c5-3.webp\",\n\t\"./collection5/c5-4.webp\": \"./src/images/products/collection5/c5-4.webp\",\n\t\"./ctype/gameon.svg\": \"./src/images/products/ctype/gameon.svg\",\n\t\"./ctype/powerwear.svg\": \"./src/images/products/ctype/powerwear.svg\",\n\t\"./ctype/urbanwear.svg\": \"./src/images/products/ctype/urbanwear.svg\",\n\t\"./icn_bundle_symbols_spr.svg\": \"./src/images/products/icn_bundle_symbols_spr.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images/products sync recursive \\\\.(svg%7Cwebp)$\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/_sync_\\.(svg%257Cwebp)$?");

/***/ }),

/***/ "./src/assets/js/breakpoints.min.js":
/*!******************************************!*\
  !*** ./src/assets/js/breakpoints.min.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/breakpoints.min.js?v=b568ff2b48239a8b2976\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/breakpoints.min.js?");

/***/ }),

/***/ "./src/assets/js/browser.min.js":
/*!**************************************!*\
  !*** ./src/assets/js/browser.min.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/browser.min.js?v=baf6931601944992b286\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/browser.min.js?");

/***/ }),

/***/ "./src/assets/js/firebase.js":
/*!***********************************!*\
  !*** ./src/assets/js/firebase.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/firebase.js?v=4798087c9e97abcbd67d\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/firebase.js?");

/***/ }),

/***/ "./src/assets/js/jquery.min.js":
/*!*************************************!*\
  !*** ./src/assets/js/jquery.min.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/jquery.min.js?v=c21f3ac6141264bc18ad\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/jquery.min.js?");

/***/ }),

/***/ "./src/assets/js/jquery.poptrox.min.js":
/*!*********************************************!*\
  !*** ./src/assets/js/jquery.poptrox.min.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/jquery.poptrox.min.js?v=5484ce8d739fe5e26097\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/jquery.poptrox.min.js?");

/***/ }),

/***/ "./src/assets/js/jquery.scrollex.min.js":
/*!**********************************************!*\
  !*** ./src/assets/js/jquery.scrollex.min.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/jquery.scrollex.min.js?v=96d91821481488162df9\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/jquery.scrollex.min.js?");

/***/ }),

/***/ "./src/assets/js/jquery.scrolly.min.js":
/*!*********************************************!*\
  !*** ./src/assets/js/jquery.scrolly.min.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/jquery.scrolly.min.js?v=6929292720cadd047e5f\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/jquery.scrolly.min.js?");

/***/ }),

/***/ "./src/assets/js/util.js":
/*!*******************************!*\
  !*** ./src/assets/js/util.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/util.js?v=1c8670e8674d8dd72db4\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/util.js?");

/***/ }),

/***/ "./src/assets/css/noscript.css":
/*!*************************************!*\
  !*** ./src/assets/css/noscript.css ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/noscript.css?v=b88d04fba731603756b1\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/noscript.css?");

/***/ }),

/***/ "./src/assets/css/images/Illustrator.svg":
/*!***********************************************!*\
  !*** ./src/assets/css/images/Illustrator.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/Illustrator.svg?v=a511cff9513c55b8c19f\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/images/Illustrator.svg?");

/***/ }),

/***/ "./src/assets/css/images/Photoshop.svg":
/*!*********************************************!*\
  !*** ./src/assets/css/images/Photoshop.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/Photoshop.svg?v=c0562151d930d450ec32\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/images/Photoshop.svg?");

/***/ }),

/***/ "./src/assets/css/images/Pioneer.svg":
/*!*******************************************!*\
  !*** ./src/assets/css/images/Pioneer.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/Pioneer.svg?v=4ac346fbccb65cc42950\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/images/Pioneer.svg?");

/***/ }),

/***/ "./src/assets/css/images/ctailored.svg":
/*!*********************************************!*\
  !*** ./src/assets/css/images/ctailored.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/ctailored.svg?v=3c1db6da690d0ea93196\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/images/ctailored.svg?");

/***/ }),

/***/ "./src/images/ico/apple-touch-icon.png":
/*!*********************************************!*\
  !*** ./src/images/ico/apple-touch-icon.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/apple-touch-icon.png?v=336a9829c16727197b61\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/ico/apple-touch-icon.png?");

/***/ }),

/***/ "./src/images/ico/favicon-16x16.png":
/*!******************************************!*\
  !*** ./src/images/ico/favicon-16x16.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/favicon-16x16.png?v=9e660931c9a30a14116c\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/ico/favicon-16x16.png?");

/***/ }),

/***/ "./src/images/ico/favicon-32x32.png":
/*!******************************************!*\
  !*** ./src/images/ico/favicon-32x32.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/favicon-32x32.png?v=4a72b4b93f7346c7032b\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/ico/favicon-32x32.png?");

/***/ }),

/***/ "./src/images/ico/favicon.ico":
/*!************************************!*\
  !*** ./src/images/ico/favicon.ico ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/ico/favicon.ico?v=22c6c9a2a58d5e618791\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/ico/favicon.ico?");

/***/ }),

/***/ "./src/images/ico/safari-pinned-tab.svg":
/*!**********************************************!*\
  !*** ./src/images/ico/safari-pinned-tab.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/safari-pinned-tab.svg?v=aefb2ac60f294aa7500f\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/ico/safari-pinned-tab.svg?");

/***/ }),

/***/ "./src/images/ico/shoenix.svg":
/*!************************************!*\
  !*** ./src/images/ico/shoenix.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/shoenix.svg?v=adf033868d0e6b46c250\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/ico/shoenix.svg?");

/***/ }),

/***/ "./src/images/ico/site.webmanifest":
/*!*****************************************!*\
  !*** ./src/images/ico/site.webmanifest ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/ico/site.webmanifest?v=9374aad54a45d57829e0\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/ico/site.webmanifest?");

/***/ }),

/***/ "./src/images/products/Bundle2.svg":
/*!*****************************************!*\
  !*** ./src/images/products/Bundle2.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/Bundle2.svg?v=63ae1f2d2977b13813ad\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/Bundle2.svg?");

/***/ }),

/***/ "./src/images/products/Bundle3.svg":
/*!*****************************************!*\
  !*** ./src/images/products/Bundle3.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/Bundle3.svg?v=9d87a6ea0ce7f59ad8ff\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/Bundle3.svg?");

/***/ }),

/***/ "./src/images/products/Bundle4.svg":
/*!*****************************************!*\
  !*** ./src/images/products/Bundle4.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/Bundle4.svg?v=8e052f194490ac8c1608\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/Bundle4.svg?");

/***/ }),

/***/ "./src/images/products/Bundle5.svg":
/*!*****************************************!*\
  !*** ./src/images/products/Bundle5.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/Bundle5.svg?v=c5bc2eeba14db3172bd5\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/Bundle5.svg?");

/***/ }),

/***/ "./src/images/products/cadjust.webp":
/*!******************************************!*\
  !*** ./src/images/products/cadjust.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cadjust.webp?v=b7967ee70a5c8f5d7274\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/cadjust.webp?");

/***/ }),

/***/ "./src/images/products/collection2/c2-1.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection2/c2-1.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c2-1.webp?v=82f42ad157250c51fade\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection2/c2-1.webp?");

/***/ }),

/***/ "./src/images/products/collection2/c2-2.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection2/c2-2.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c2-2.webp?v=2a88d0c0346a33ac6458\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection2/c2-2.webp?");

/***/ }),

/***/ "./src/images/products/collection2/c2-3.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection2/c2-3.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c2-3.webp?v=89b0d0449e9c272d2513\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection2/c2-3.webp?");

/***/ }),

/***/ "./src/images/products/collection2/c2-4.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection2/c2-4.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c2-4.webp?v=212d37381588db59bb52\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection2/c2-4.webp?");

/***/ }),

/***/ "./src/images/products/collection3/c3-1.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection3/c3-1.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c3-1.webp?v=1bb132b8ad6847e0fed8\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection3/c3-1.webp?");

/***/ }),

/***/ "./src/images/products/collection3/c3-2.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection3/c3-2.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c3-2.webp?v=7b56ad258e7861faaa93\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection3/c3-2.webp?");

/***/ }),

/***/ "./src/images/products/collection3/c3-3.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection3/c3-3.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c3-3.webp?v=a6f7b8cc37a6c96a2104\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection3/c3-3.webp?");

/***/ }),

/***/ "./src/images/products/collection3/c3-4.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection3/c3-4.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c3-4.webp?v=7b05667ed8dfe312a772\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection3/c3-4.webp?");

/***/ }),

/***/ "./src/images/products/collection4/c4-1.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection4/c4-1.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c4-1.webp?v=0797e5683b1b50e3d757\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection4/c4-1.webp?");

/***/ }),

/***/ "./src/images/products/collection4/c4-2.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection4/c4-2.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c4-2.webp?v=c0620ccb3a8106c7e839\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection4/c4-2.webp?");

/***/ }),

/***/ "./src/images/products/collection4/c4-3.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection4/c4-3.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c4-3.webp?v=9fa2093f7f821376324f\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection4/c4-3.webp?");

/***/ }),

/***/ "./src/images/products/collection4/c4-4.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection4/c4-4.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c4-4.webp?v=33ace33105d42be4ad39\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection4/c4-4.webp?");

/***/ }),

/***/ "./src/images/products/collection5/c5-1.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection5/c5-1.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c5-1.webp?v=7ffb4654de7586989341\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection5/c5-1.webp?");

/***/ }),

/***/ "./src/images/products/collection5/c5-2.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection5/c5-2.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c5-2.webp?v=107b72abc1eada746f1b\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection5/c5-2.webp?");

/***/ }),

/***/ "./src/images/products/collection5/c5-3.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection5/c5-3.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c5-3.webp?v=dbeeaa78724a0d28da3b\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection5/c5-3.webp?");

/***/ }),

/***/ "./src/images/products/collection5/c5-4.webp":
/*!***************************************************!*\
  !*** ./src/images/products/collection5/c5-4.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c5-4.webp?v=e0b89be6ee7421100eb6\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/collection5/c5-4.webp?");

/***/ }),

/***/ "./src/images/products/ctype/gameon.svg":
/*!**********************************************!*\
  !*** ./src/images/products/ctype/gameon.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/gameon.svg?v=eb9197407a631d8c609f\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/ctype/gameon.svg?");

/***/ }),

/***/ "./src/images/products/ctype/powerwear.svg":
/*!*************************************************!*\
  !*** ./src/images/products/ctype/powerwear.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/powerwear.svg?v=14e756e287ee9634a44b\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/ctype/powerwear.svg?");

/***/ }),

/***/ "./src/images/products/ctype/urbanwear.svg":
/*!*************************************************!*\
  !*** ./src/images/products/ctype/urbanwear.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/urbanwear.svg?v=6ed120f2daf2683fa2d6\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/ctype/urbanwear.svg?");

/***/ }),

/***/ "./src/images/products/icn_bundle_symbols_spr.svg":
/*!********************************************************!*\
  !*** ./src/images/products/icn_bundle_symbols_spr.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/icn_bundle_symbols_spr.svg?v=d0f6b066892a4813da34\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/icn_bundle_symbols_spr.svg?");

/***/ }),

/***/ "./src/images/thumbs/dummy.webp":
/*!**************************************!*\
  !*** ./src/images/thumbs/dummy.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/dummy.webp?v=5fd7f5c1ad45d7387535\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/thumbs/dummy.webp?");

/***/ }),

/***/ "./src/images/thumbs/mockup.webp":
/*!***************************************!*\
  !*** ./src/images/thumbs/mockup.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/mockup.webp?v=479752ec16acdc0ddaca\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/thumbs/mockup.webp?");

/***/ }),

/***/ "./src/images/thumbs/techspec.webp":
/*!*****************************************!*\
  !*** ./src/images/thumbs/techspec.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/techspec.webp?v=9649c4e7f0ee7f7f6249\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/thumbs/techspec.webp?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
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
/******/ 			"product": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/product.html");
/******/ 	__webpack_require__("./src/assets/js/product.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/css/product.css");
/******/ 	
/******/ })()
;