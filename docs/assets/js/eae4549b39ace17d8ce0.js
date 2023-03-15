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
/***/ (() => {

eval("//\tRevenant Formal by NMVX\n//\tShoen1x.github.io | @Shoenixstudios\n//  under the CCA 3.0 License | Credit to HTML5 UP for template\n\n(function ($) {\n  addEventListener(\"DOMContentLoaded\", function (e) {\n    e.preventDefault;\n    var url_selection = window.location.href.match(/\\d+$/);\n    var jcount = 4;\n    var col2 = {\n      'colname': [\"Monarch\", \"Bos Gaurus\", \"Nightmare\", \"Legion\"],\n      'colprice': [\"RM???\", \"RM???\", \"RM???\", \"RM???\"]\n    };\n    var col3 = {\n      'colname': [\"Nexus\", \"Plexus\", \"Scar\", \"Nemesis\"],\n      'colprice': [\"RM???\", \"RM???\", \"RM???\", \"RM???\"]\n    };\n    var col4 = {\n      'colname': [\"San Mirage\", \"Avarice\", \"Chaos\", \"Wrath\"],\n      'colprice': [\"RM???\", \"RM???\", \"RM???\", \"RM???\"]\n    };\n    var col5 = {\n      'colname': [\"Alpha\", \"Beta\", \"Charlie\", \"Delta\"],\n      'colprice': [\"RM???\", \"RM???\", \"RM???\", \"RM???\"]\n    };\n    var sname = [\"PowerWear™\", \"UrbanWear™\", \"GameOn\"];\n    var sdesc = [\"Athleisure and active wear\", \"Streetwear and leisure wear\", \"Electronic game and competitive wear\"];\n    if (url_selection == \"\" || url_selection == null) {\n      alert(\"Error\");\n      location.href = '/';\n    } else {\n      var cname = parseInt(url_selection);\n      if (cname == 1) {\n        alert(\"Don't force selection through url, it will not works.\");\n        location.href = '/';\n      } else {\n        (function () {\n          document.querySelector('.home__img').src = \"images/products/collection\" + cname + \"/1.webp\";\n          var rotator = document.querySelector('.home__img');\n          var imageDir = 'images/products/collection' + cname + \"/\";\n          var delayInSeconds = 5;\n          var images = ['1.webp', '2.webp', '3.webp', '4.webp'];\n          var num = 0;\n          var changeImage = function changeImage() {\n            var len = images.length;\n            rotator.src = imageDir + images[num++];\n            if (num == len) {\n              num = 0;\n            }\n          };\n          setInterval(changeImage, delayInSeconds * 1000);\n        })();\n\n        // Neat Page changes information\n        switch (cname) {\n          case 2:\n            document.querySelector('#product-type').innerHTML = \"Collection\";\n            document.querySelector('.home__subtitle').innerHTML = \"In The Name of Tsar\";\n            document.querySelector('.discount__description').innerHTML = \"Get In The Name of Tsar now, up to 15% off.\";\n            document.querySelector('.home__description').innerHTML = \"Introducing the In the Name of Tsar Collection: a unique, modern take on streetwear. stylish and custom-made just for you. Suitable for athleisure and sports wear\";\n            document.querySelector('.discount__img').src = 'images/products/Bundle' + cname + '.svg';\n            break;\n          case 3:\n            document.querySelector('#product-type').innerHTML = \"Collection\";\n            document.querySelector('.home__subtitle').innerHTML = \"Black Steel Eagle\";\n            document.querySelector('.discount__description').innerHTML = \"Get Black Steel Eagle now, up to 15% off.\";\n            document.querySelector('.home__description').innerHTML = \"Introducing the Black Steel Eagle Collection: a mainstream sports inspired design. Unique and custom-made just for you. Suitable for sport usage\";\n            document.querySelector('.discount__img').src = 'images/products/Bundle' + cname + '.svg';\n            break;\n          case 4:\n            document.querySelector('#product-type').innerHTML = \"Collection\";\n            document.querySelector('.home__subtitle').innerHTML = \"The World\";\n            document.querySelector('.discount__description').innerHTML = \"Get The World now, up to 15% off.\";\n            document.querySelector('.home__description').innerHTML = \"Introducing The World Collection: a robust design for stylish everyday clothing. custom-made just for you. Suitable for streetwear and athleisure\";\n            document.querySelector('.discount__img').src = 'images/products/Bundle' + cname + '.svg';\n            break;\n          case 5:\n            document.querySelector('#product-type').innerHTML = \"Collection\";\n            document.querySelector('.home__subtitle').innerHTML = \"The Unity\";\n            document.querySelector('.discount__description').innerHTML = \"Get The Unity now, up to 15% off.\";\n            document.querySelector('.home__description').innerHTML = \"Introducing The Unity Collection: a minimalist, clean and modern design. stylish and custom-made just for you. Suitable for e-sport and electronic sport organization\";\n            document.querySelector('.discount__img').src = 'images/products/Bundle' + cname + '.svg';\n            break;\n        }\n\n        // For Loop catch image query, name, and prices\n        switch (cname) {\n          case 2:\n            for (var i = 0; i < jcount; i++) {\n              document.querySelectorAll('.products__img')[i].src = \"images/products/collection\" + cname + \"/\" + (i + 1) + \".webp\";\n              document.querySelectorAll('.products__title')[i].innerHTML = col2['colname'][i];\n              document.querySelectorAll('.products__price')[i].innerHTML = col2['colprice'][i];\n            }\n            break;\n          case 3:\n            for (var _i = 0; _i < jcount; _i++) {\n              document.querySelectorAll('.products__img')[_i].src = \"images/products/collection\" + cname + \"/\" + (_i + 1) + \".webp\";\n              document.querySelectorAll('.products__title')[_i].innerHTML = col3['colname'][_i];\n              document.querySelectorAll('.products__price')[_i].innerHTML = col3['colprice'][_i];\n            }\n            break;\n          case 4:\n            for (var _i2 = 0; _i2 < jcount; _i2++) {\n              document.querySelectorAll('.products__img')[_i2].src = \"images/products/collection\" + cname + \"/\" + (_i2 + 1) + \".webp\";\n              document.querySelectorAll('.products__title')[_i2].innerHTML = col4['colname'][_i2];\n              document.querySelectorAll('.products__price')[_i2].innerHTML = col4['colprice'][_i2];\n            }\n            break;\n          case 5:\n            for (var _i3 = 0; _i3 < jcount; _i3++) {\n              document.querySelectorAll('.products__img')[_i3].src = \"images/products/collection\" + cname + \"/\" + (_i3 + 1) + \".webp\";\n              document.querySelectorAll('.products__title')[_i3].innerHTML = col5['colname'][_i3];\n              document.querySelectorAll('.products__price')[_i3].innerHTML = col5['colprice'][_i3];\n            }\n            break;\n        }\n      }\n    }\n    var slcpk = document.querySelectorAll('.products__content button');\n    $(slcpk).on('click', function () {\n      var slcpkdata = $(this).data(\"slcpkdata\");\n      document.querySelector('.tag').innerHTML = document.querySelectorAll('.products__title')[slcpkdata].innerHTML;\n      var checktag = document.querySelector('.tag').innerHTML;\n      document.querySelector('#pdmtitle').innerHTML = checktag;\n      document.querySelector('#pdminfo').innerHTML = \"This \" + checktag + \" is availabe with:\";\n      document.querySelector('#pdrtitle').innerHTML = \"What included in \" + checktag + \"'s Packages?\";\n      document.querySelector('#pdprice').innerHTML = document.querySelectorAll('.products__price')[slcpkdata].innerHTML;\n      if (checktag == 'Monarch' || checktag == 'Nightmare' || checktag == 'Nexus' || checktag == \"San Mirage\" || checktag == \"Avarice\" || checktag == \"Chaos\" || checktag == \"Wrath\") {\n        document.querySelector('#pdltitle').innerHTML = sname[0] + \" Series\";\n        document.querySelector('#pdlinfo').innerHTML = 'This is ' + checktag + ', ' + sname[0] + ' Series for ' + sdesc[0] + '.';\n        document.querySelector('#pdlsvg').src = 'images/products/ctype/powerwear.svg';\n      } else if (checktag == 'Bos Gaurus' || checktag == 'Legion' || checktag == \"Plexus\" || checktag == \"Scar\" || checktag == \"Nemesis\") {\n        document.querySelector('#pdltitle').innerHTML = sname[1] + \" Series\";\n        document.querySelector('#pdlinfo').innerHTML = 'This is ' + checktag + ', ' + sname[1] + ' Series for ' + sdesc[1] + '.';\n        document.querySelector('#pdlsvg').src = 'images/products/ctype/urbanwear.svg';\n      } else {\n        document.querySelector('#pdltitle').innerHTML = sname[2] + \" Series\";\n        document.querySelector('#pdlinfo').innerHTML = 'This is ' + checktag + ', ' + sname[2] + ' Series for ' + sdesc[2] + '.';\n        document.querySelector('#pdlsvg').src = 'images/products/ctype/gameon.svg';\n      }\n    });\n  }, {\n    passive: true\n  });\n})(jQuery);\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/product.js?");

/***/ }),

/***/ "./src/assets/css/product.css":
/*!************************************!*\
  !*** ./src/assets/css/product.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/product.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/product.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/css/product.css"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;