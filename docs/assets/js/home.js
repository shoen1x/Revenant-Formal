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

/***/ "./src/assets/js/home.js":
/*!*******************************!*\
  !*** ./src/assets/js/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n//\tRevenant Formal by NMVX\n//\tShoen1x.github.io | @Shoenixstudios\n//  under the CCA 3.0 License | Credit to HTML5 UP for template\n(function ($) {\n  // Importer\n  var importAll = function importAll(require) {\n    return require.keys().reduce(function (acc, next) {\n      acc[next.replace(\"../../\", \"\")] = require(next);\n      return acc;\n    }, {});\n  };\n  importAll(__webpack_require__(\"./src/images/fulls sync recursive \\\\.webp$\"), __webpack_require__(\"./src/images/3D sync recursive \\\\.(glb%7Cwebp)$\"), __webpack_require__(\"./src/images/og-images sync recursive (og-image).*\\\\.jpg$\"));\n\n  //  Disable Mobile Experiences\n  function isMobile() {\n    return /(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));\n  }\n  var $window = $(window),\n    $body = $('body'),\n    $header = $('#header'),\n    $all = $body.add($header);\n\n  // Breakpoints.\n  breakpoints({\n    xxlarge: ['1681px', '1920px'],\n    xlarge: ['1281px', '1680px'],\n    large: ['1001px', '1280px'],\n    medium: ['737px', '1000px'],\n    small: ['481px', '736px'],\n    xsmall: [null, '480px']\n  });\n\n  // Play initial animations on page load.\n  $window.on('load', function () {\n    setTimeout(function () {\n      $body.removeClass('is-preload');\n    }, 100);\n  });\n\n  // Touch mode.\n  if (browser.mobile) $body.addClass('is-touch');else {\n    breakpoints.on('<=small', function () {\n      $body.addClass('is-touch');\n    });\n    breakpoints.on('>small', function () {\n      $body.removeClass('is-touch');\n    });\n  }\n\n  // Fix: IE flexbox fix.\n  if (browser.name == 'ie') {\n    var $main = $('.main.fullscreen'),\n      IEResizeTimeout;\n    $window.on('resize.ie-flexbox-fix', function () {\n      clearTimeout(IEResizeTimeout);\n      IEResizeTimeout = setTimeout(function () {\n        var wh = $window.height();\n        $main.each(function () {\n          var $this = $(this);\n          $this.css('height', '');\n          if ($this.height() <= wh) $this.css('height', wh - 50 + 'px');\n        });\n      });\n    }).triggerHandler('resize.ie-flexbox-fix');\n  }\n\n  // Gallery.\n  $window.on('load', function () {\n    var $gallery = $('.gallery');\n    $gallery.poptrox({\n      baseZIndex: 10001,\n      useBodyOverflow: false,\n      usePopupEasyClose: false,\n      overlayColor: '#1f2328',\n      overlayOpacity: 0.65,\n      usePopupDefaultStyling: false,\n      usePopupCaption: true,\n      popupLoaderText: '',\n      windowMargin: 50,\n      usePopupNav: true\n    });\n\n    // Hack: Adjust margins when 'small' activates.\n    breakpoints.on('>small', function () {\n      $gallery.each(function () {\n        $(this)[0]._poptrox.windowMargin = 50;\n      });\n    });\n    breakpoints.on('<=small', function () {\n      $gallery.each(function () {\n        $(this)[0]._poptrox.windowMargin = 5;\n      });\n    });\n  });\n\n  // Section transitions.\n  if (browser.canUse('transition')) {\n    var on = function on() {\n      // Galleries.\n      $('.gallery').scrollex({\n        top: '30vh',\n        bottom: '30vh',\n        delay: 50,\n        initialize: function initialize() {\n          $(this).addClass('inactive');\n        },\n        terminate: function terminate() {\n          $(this).removeClass('inactive');\n        },\n        enter: function enter() {\n          $(this).removeClass('inactive');\n        },\n        leave: function leave() {\n          $(this).addClass('inactive');\n        }\n      });\n\n      // Generic sections.\n      $('.main.style1').scrollex({\n        mode: 'middle',\n        delay: 100,\n        initialize: function initialize() {\n          $(this).addClass('inactive');\n        },\n        terminate: function terminate() {\n          $(this).removeClass('inactive');\n        },\n        enter: function enter() {\n          $(this).removeClass('inactive');\n        },\n        leave: function leave() {\n          $(this).addClass('inactive');\n        }\n      });\n      $('.main.style2').scrollex({\n        mode: 'middle',\n        delay: 100,\n        initialize: function initialize() {\n          $(this).addClass('inactive');\n        },\n        terminate: function terminate() {\n          $(this).removeClass('inactive');\n        },\n        enter: function enter() {\n          $(this).removeClass('inactive');\n        },\n        leave: function leave() {\n          $(this).addClass('inactive');\n        }\n      });\n      $('.main.style3').scrollex({\n        mode: 'middle',\n        delay: 100,\n        initialize: function initialize() {\n          $(this).addClass('inactive');\n        },\n        terminate: function terminate() {\n          $(this).removeClass('inactive');\n        },\n        enter: function enter() {\n          $(this).removeClass('inactive');\n        },\n        leave: function leave() {\n          $(this).addClass('inactive');\n        }\n      });\n      $('.main.style4').scrollex({\n        mode: 'middle',\n        delay: 100,\n        initialize: function initialize() {\n          $(this).addClass('inactive');\n        },\n        terminate: function terminate() {\n          $(this).removeClass('inactive');\n        },\n        enter: function enter() {\n          $(this).removeClass('inactive');\n        },\n        leave: function leave() {\n          $(this).addClass('inactive');\n        }\n      });\n\n      // Product Info.\n      $('.infocontent').scrollex({\n        top: '50%',\n        delay: 50,\n        initialize: function initialize() {\n          $(this).addClass('inactive');\n        },\n        terminate: function terminate() {\n          $(this).removeClass('inactive');\n        },\n        enter: function enter() {\n          $(this).removeClass('inactive');\n        },\n        leave: function leave() {\n          $(this).addClass('inactive');\n        }\n      });\n\n      // Project Preview.\n      $('#multiproject').scrollex({\n        top: '50%',\n        delay: 50,\n        initialize: function initialize() {\n          $(this).addClass('inactive');\n        },\n        terminate: function terminate() {\n          $(this).removeClass('inactive');\n        },\n        enter: function enter() {\n          $(this).removeClass('inactive');\n        },\n        leave: function leave() {\n          $(this).addClass('inactive');\n        }\n      });\n\n      // Blog.\n      $('#blog').scrollex({\n        top: '50%',\n        delay: 50,\n        initialize: function initialize() {\n          $(this).addClass('inactive');\n        },\n        terminate: function terminate() {\n          $(this).removeClass('inactive');\n        },\n        enter: function enter() {\n          $(this).removeClass('inactive');\n        },\n        leave: function leave() {\n          $(this).addClass('inactive');\n        }\n      });\n    };\n    var off = function off() {\n      // Galleries.\n      $('.gallery').unscrollex();\n\n      // Generic sections.\n      $('.main.style1').unscrollex();\n      $('.main.style2').unscrollex();\n      $('.main.style3').unscrollex();\n      $('.main.style4').unscrollex();\n\n      // Product Info.\n      $('.infocontent').unscrollex();\n\n      // Project Preview.\n      $('#multiproject').unscrollex();\n\n      // Blog.\n      $('#blog').unscrollex();\n    };\n    breakpoints.on('<=small', off);\n    breakpoints.on('>small', on);\n  }\n\n  // Events.\n  var resizeTimeout, resizeScrollTimeout;\n  $window.on('resize', function () {\n    // Disable animations/transitions.\n    $body.addClass('is-resizing');\n    clearTimeout(resizeTimeout);\n    resizeTimeout = setTimeout(function () {\n      // Update scrolly links.\n      $('a[href^=\"#\"]').scrolly({\n        speed: 1500,\n        offset: $header.outerHeight() - 1\n      });\n\n      // Re-enable animations/transitions.\n      setTimeout(function () {\n        $body.removeClass('is-resizing');\n        $window.trigger('scroll');\n      }, 0);\n    }, 100);\n  }).on('load', function () {\n    $window.trigger('resize');\n  });\n  var slideShow = function slideShow(container) {\n    this.images = []; //public var\n    this.curImage = 0;\n    for (i = 0; i < container.childElementCount; i++) {\n      this.images.push(container.children[i]);\n      this.images[i].style.display = \"none\";\n    }\n\n    // Handle going to to the next slide\n    var nextSlide = function nextSlide() {\n      for (var i = 0; i < this.images.length; i++) {\n        this.images[i].style.display = \"none\";\n      }\n      this.images[this.curImage].style.display = \"block\";\n      this.curImage++;\n      if (this.curImage >= this.images.length) {\n        this.curImage = 0;\n      }\n      window.setTimeout(nextSlide.bind(this), 5000);\n    };\n    nextSlide.call(this);\n  };\n  var slike = document.getElementById(\"slideshow\");\n  slideShow(slike);\n  $('.card a').on('click', function () {\n    var procollection = $(this).data('pronum');\n    localStorage.setItem(\"product_num\", procollection);\n  });\n\n  // Carousel\n  $(document).ready(function () {\n    $('.client-slider').slick({\n      slidesToShow: 6,\n      slidesToScroll: 1,\n      autoplay: true,\n      autoplaySpeed: 2100,\n      arrows: false,\n      dots: false,\n      pauseOnHover: false,\n      responsive: [{\n        breakpoint: 768,\n        settings: {\n          slidesToShow: 4\n        }\n      }, {\n        breakpoint: 520,\n        settings: {\n          slidesToShow: 3\n        }\n      }]\n    });\n    $('.ads-slider').slick({\n      slidesToShow: 1,\n      slidesToScroll: 1,\n      autoplay: true,\n      autoplaySpeed: 12000,\n      arrows: false,\n      dots: false,\n      pauseOnHover: false,\n      centerMode: true\n    });\n  });\n\n  // Model Viewer\n  var modelViewerVariants = document.querySelector(\"model-viewer#playcard\");\n  var select = document.querySelector('#variant');\n  modelViewerVariants.addEventListener('load', function () {\n    var names = modelViewerVariants.availableVariants;\n    var _iterator = _createForOfIteratorHelper(names),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var name = _step.value;\n        var option = document.createElement('option');\n        option.value = name;\n        switch (option.value) {\n          case 'JDT':\n            option.textContent = 'Johor Darul Ta`zim Jersey Concept';\n            break;\n          case 'HM':\n            option.textContent = 'Harimau Malaya Jersey Concept';\n            break;\n        }\n        select.appendChild(option);\n      }\n      // Adds a default option.\n      //   const option = document.createElement('option');\n      // \toption.value = 'HM';\n      // \toption.textContent = 'Harimau Malaya Concept';\n      // select.appendChild(option);\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  });\n  select.addEventListener('input', function (event) {\n    modelViewerVariants.variantName = event.target.value === 'default' ? null : event.target.value;\n    switch (modelViewerVariants.variantName) {\n      case 'JDT':\n        document.querySelector('#behancerd').href = \"https://www.behance.net/gallery/143669887/JDT-CONCEPT-Shoenix-Studios\";\n        document.querySelector('.secondtext').innerHTML = DOMPurify.sanitize(\"JOHOR DARUL TA'ZIM<br>JERSEY CONCEPT\");\n        $('#second-1').attr(\"id\", \"second\");\n        break;\n      case 'HM':\n        document.querySelector('#behancerd').href = \"https://www.behance.net/gallery/145829475/Harimau-Malaya-Concept-Shoenix-Studios\";\n        document.querySelector('.secondtext').innerHTML = DOMPurify.sanitize(\"HARIMAU MALAYA HOME<br>JERSEY CONCEPT\");\n        $('#second').attr(\"id\", \"second-1\");\n        break;\n    }\n  });\n\n  // var btndownload = document.querySelectorAll('#btn-download');\n  // $(btndownload).on('click', function (event) {\n  // \tevent.preventDefault();\n  // \t$(this).addClass(\"downloaded\");\n  // \tvar dwbutton = $(this).data('dwbutton');\n  // \tsetTimeout(function () {\n  // \t\tif (dwbutton == 1) {\n  // \t\t\tDownloadFile('images/downloadfile/NeuroKit-Wallpaper.png', 'Neuro Kit Wallpaper - Shoenix Studios');\n  // \t\t} else if (dwbutton == 2) {\n  // \t\t\tDownloadFile('images/downloadfile/TigerLeap-Wallpaper.jpg', 'Tiger Leap Wallpaper - Shoenix Studios');\n  // \t\t} else {\n  // \t\t\talert(\"Don't know how you get here!\");\n  // \t\t}\n  // \t\t$(btndownload).removeClass('downloaded');\n  // \t}, 2000);\n  // });\n\n  // function DownloadFile(fileloc, filename) {\n  // \tfetch(fileloc)\n  // \t\t.then(resp => resp.blob())\n  // \t\t.then(blob => {\n  // \t\t\tconst url = window.URL.createObjectURL(blob);\n  // \t\t\tconst a = document.createElement('a');\n  // \t\t\ta.style.display = 'none';\n  // \t\t\ta.href = url;\n  // \t\t\t// the filename you want\n  // \t\t\ta.download = filename;\n  // \t\t\tdocument.body.appendChild(a);\n  // \t\t\ta.click();\n  // \t\t\twindow.URL.revokeObjectURL(url);\n  // \t\t})\n  // \t\t.catch(() => alert('Error! Contact Admin on shoenixstudios@gmail.com'));\n  // }\n\n  // Hanya Allah yang tahu\n})(jQuery);\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/home.js?");

/***/ }),

/***/ "./src/en-MY/home.html":
/*!*****************************!*\
  !*** ./src/en-MY/home.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/apple-touch-icon.png */ \"./src/images/ico/apple-touch-icon.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/favicon.ico */ \"./src/images/ico/favicon.ico\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/favicon-32x32.png */ \"./src/images/ico/favicon-32x32.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/favicon-16x16.png */ \"./src/images/ico/favicon-16x16.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/site.webmanifest */ \"./src/images/ico/site.webmanifest\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/safari-pinned-tab.svg */ \"./src/images/ico/safari-pinned-tab.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/noscript.css */ \"./src/assets/css/noscript.css\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/shoenix.svg */ \"./src/images/ico/shoenix.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/nmvxshx.svg */ \"./src/assets/css/images/nmvxshx.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/shoenixlab.svg */ \"./src/assets/css/images/shoenixlab.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/ads/web-ad1.webp */ \"./src/images/fulls/ads/web-ad1.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/ads/web-ad2.webp */ \"./src/images/fulls/ads/web-ad2.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/ads/web-ad3.webp */ \"./src/images/fulls/ads/web-ad3.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/ads/web-ad4.webp */ \"./src/images/fulls/ads/web-ad4.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/ads/web-ad5.webp */ \"./src/images/fulls/ads/web-ad5.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/01.webp */ \"./src/images/thumbs/01.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/02.webp */ \"./src/images/thumbs/02.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/03.webp */ \"./src/images/thumbs/03.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/04.webp */ \"./src/images/thumbs/04.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/05.webp */ \"./src/images/thumbs/05.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/06.webp */ \"./src/images/thumbs/06.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/blog_wp_small.webp */ \"./src/images/thumbs/blog_wp_small.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../images/revenant-typeform.svg */ \"./src/images/revenant-typeform.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/Pioneercli.svg */ \"./src/assets/css/images/Pioneercli.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/client/nmvxcli.svg */ \"./src/assets/css/images/client/nmvxcli.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/client/atmaxcli.svg */ \"./src/assets/css/images/client/atmaxcli.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/client/usultimur.svg */ \"./src/assets/css/images/client/usultimur.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/client/ftslr.svg */ \"./src/assets/css/images/client/ftslr.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/client/temorcli.svg */ \"./src/assets/css/images/client/temorcli.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/client/grvcli.svg */ \"./src/assets/css/images/client/grvcli.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.min.js */ \"./src/assets/js/jquery.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.poptrox.min.js */ \"./src/assets/js/jquery.poptrox.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.scrolly.min.js */ \"./src/assets/js/jquery.scrolly.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.scrollex.min.js */ \"./src/assets/js/jquery.scrollex.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/browser.min.js */ \"./src/assets/js/browser.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/breakpoints.min.js */ \"./src/assets/js/breakpoints.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/util.js */ \"./src/assets/js/util.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/firebase.js */ \"./src/assets/js/firebase.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ../../../node_modules/focus-visible/dist/focus-visible.min.js */ \"./node_modules/focus-visible/dist/focus-visible.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/language.js */ \"./src/assets/js/language.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ../../../node_modules/dompurify/dist/purify.min.js */ \"./node_modules/dompurify/dist/purify.min.js\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);\nvar ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);\nvar ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);\nvar ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);\nvar ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);\nvar ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);\nvar ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);\nvar ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);\nvar ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);\nvar ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);\nvar ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);\nvar ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);\nvar ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);\nvar ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);\nvar ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);\nvar ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);\nvar ___HTML_LOADER_REPLACEMENT_34___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_34___);\nvar ___HTML_LOADER_REPLACEMENT_35___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_35___);\nvar ___HTML_LOADER_REPLACEMENT_36___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_36___);\nvar ___HTML_LOADER_REPLACEMENT_37___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_37___);\nvar ___HTML_LOADER_REPLACEMENT_38___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_38___);\nvar ___HTML_LOADER_REPLACEMENT_39___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_39___);\nvar ___HTML_LOADER_REPLACEMENT_40___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_40___);\nvar code = \"<!DOCTYPE HTML>\\r\\n<!--\\r\\n\\tRevenant Formal by NMVX\\r\\n\\tShoen1x.github.io | @Shoenixstudios\\r\\n\\tunder the CCA 3.0 License | Credit to HTML5 UP for template\\r\\n-->\\r\\n\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n\\t<!--Title-->\\r\\n\\t<title>Home | Shoenix Studios</title>\\r\\n\\r\\n\\t<!--Meta and linker-->\\r\\n\\t<meta http-equiv=Content-Type content=text/html; charset=utf-8 />\\r\\n\\t<meta name=\\\"viewport\\\" user-scalable=\\\"yes\\\" content=\\\"width=device-width, initial-scale=1.0, minimum-scale=1.0\\\" />\\r\\n\\t<meta name=\\\"theme-color\\\" media=\\\"(prefers-color-scheme: dark)\\\" content=\\\"#000000\\\" />\\r\\n\\t<meta name=\\\"keywords\\\" content=\\\"Shoenix, Shoenix Studios, NMVX, Revenant's Formal, Revenant Formal, NemesisV\\\">\\r\\n\\t<meta name=\\\"description\\\" content=\\\"Welcome to Shoenix Studios | Experimental project by NMVX.\\\">\\r\\n\\t<link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\\\" />\\r\\n\\t<link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/slick/slick-theme.min.css\\\" />\\r\\n\\t<link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/slick/slick.css\\\" />\\r\\n\\t<link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n\\t<link rel=\\\"icon\\\" type=\\\"image/x-icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n\\t<link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\r\\n\\t<link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\">\\r\\n\\t<link rel=\\\"manifest\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\">\\r\\n\\t<link rel=\\\"mask-icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" color=\\\"#5bbad5\\\">\\r\\n\\t<meta name=\\\"msapplication-TileColor\\\" content=\\\"../images/ico/browserconfig.xml\\\">\\r\\n\\t<meta name=\\\"format-detection\\\" content=\\\"telephone=no\\\">\\r\\n\\r\\n\\t<!-- Social Media metadata -->\\r\\n\\t<meta property=\\\"og:type\\\" content=\\\"website\\\">\\r\\n\\t<meta property=\\\"og:image:type\\\" content=\\\"image/png\\\">\\r\\n\\t<meta property=\\\"og:image:width\\\" content=\\\"1563\\\">\\r\\n\\t<meta property=\\\"og:image:height\\\" content=\\\"818\\\">\\r\\n\\t<meta property=\\\"og:description\\\" content=\\\"Experimental project by NMVX.\\\">\\r\\n\\t<meta property=\\\"og:title\\\" content=\\\"Home | Shoenix Studios\\\">\\r\\n\\t<meta property=\\\"og:url\\\" content=\\\"https://shoenix-studios.web.app/home\\\">\\r\\n\\t<meta property=\\\"og:image\\\" content=\\\"https://shoenix-studios.web.app/images/og-image/og-image-home.jpg\\\">\\r\\n\\t<meta property=\\\"og:locale\\\" content=\\\"en_MY\\\">\\r\\n\\t<meta property=\\\"og:site_name\\\" content=\\\"Home\\\">\\r\\n\\r\\n\\t<meta name=\\\"twitter:card\\\" content=\\\"summary_large_image\\\">\\r\\n\\t<meta property=\\\"twitter:domain\\\" content=\\\"shoenix-studios.web.app\\\">\\r\\n\\t<meta property=\\\"twitter:url\\\" content=\\\"https://shoenix-studios.web.app/home\\\">\\r\\n\\t<meta name=\\\"twitter:title\\\" content=\\\"Home | Shoenix Studios\\\">\\r\\n\\t<meta name=\\\"twitter:description\\\" content=\\\"Experimental project by NMVX.\\\">\\r\\n\\t<meta name=\\\"twitter:image\\\" content=\\\"https://shoenix-studios.web.app/images/og-image/og-image-home.jpg\\\">\\r\\n\\r\\n\\t<!--No script-->\\r\\n\\t<noscript> \\r\\n\\t\\t<link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" />\\r\\n\\t</noscript>\\r\\n</head>\\r\\n\\r\\n<body class=\\\"is-preload\\\">\\r\\n\\t<header class=\\\"header\\\" id=\\\"header\\\">\\r\\n\\t\\t<nav class=\\\"nav container\\\">\\r\\n\\t\\t\\t<a title=\\\"Home\\\" href=\\\"home\\\" target=\\\"_self\\\" aria-label=\\\"Home\\\" class=\\\"nav__logo\\\">\\r\\n\\t\\t\\t\\t<img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" height=\\\"32\\\" width=\\\"32\\\" alt=\\\"\\\">\\r\\n\\t\\t\\t</a>\\r\\n\\t\\t\\t<span>Home | <strong>Shoenix Studios</strong></span>\\r\\n\\t\\t</nav>\\r\\n\\t</header>\\r\\n\\r\\n\\t<!-- Intro -->\\r\\n\\t<section id=\\\"intro\\\" class=\\\"main style1 dark fullscreen\\\">\\r\\n\\t\\t<div class=\\\"content\\\">\\r\\n\\t\\t\\t<header>\\r\\n\\t\\t\\t\\t<div id=\\\"slideshow\\\">\\r\\n\\t\\t\\t\\t\\t<!-- <h2 id=\\\"headline\\\">2023</h2> -->\\r\\n\\t\\t\\t\\t\\t<img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" width=\\\"320\\\" height=\\\"320\\\" alt=\\\"NemesisV\\\" loading=\\\"eager\\\">\\r\\n\\t\\t\\t\\t\\t<img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" width=\\\"720\\\" height=\\\"120.667\\\" alt=\\\"NemesisV\\\" loading=\\\"eager\\\">\\r\\n\\t\\t\\t\\t\\t<img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" width=\\\"720\\\" height=\\\"120.667\\\" alt=\\\"Shoenix Lab Logo\\\" loading=\\\"eager\\\">\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</header>\\r\\n\\t\\t\\t<p>Experimental project by <strong>NMVX</strong></p>\\r\\n\\t\\t\\t<!-- <footer>\\r\\n\\t\\t\\t\\t<a href=\\\"#first\\\" class=\\\"button style2 down\\\" title=\\\"More\\\">More</a>\\r\\n\\t\\t\\t</footer> -->\\r\\n\\t\\t</div>\\r\\n\\t</section>\\r\\n\\r\\n\\t<!-- first -->\\r\\n\\t<section id=\\\"first\\\" class=\\\"main style2 right dark fullscreen\\\">\\r\\n\\t\\t<span class=\\\"firsttext\\\">VALHALLA AXE<br>CONCEPT</span>\\r\\n\\r\\n\\t\\t<model-viewer src=\\\"../images/3D/valhalla.glb\\\" disable-zoom touch-action=\\\"pan-y\\\" data-js-focus-visible \\r\\n\\t\\t\\talt=\\\"Valhalla Axes by Shoenix Studios\\\" poster=\\\"../images/3D/poster-1.webp\\\" shadow-intensity=\\\"1\\\" \\r\\n\\t\\t\\tdisable-tap auto-rotate>\\r\\n\\t\\t\\r\\n\\t\\t\\t<div class=\\\"model-viewer-poster\\\" slot=\\\"poster\\\" style=\\\"background-image: url(../images/poster-1.webp);\\\"></div>\\r\\n\\t\\t  \\r\\n\\t\\t\\t<div class=\\\"progress-bar hide\\\" slot=\\\"progress-bar\\\">\\r\\n\\t\\t\\t  <div class=\\\"update-bar\\\" style=\\\"width: 100%;\\\"></div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t\\r\\n\\t\\t</model-viewer>\\r\\n\\r\\n\\t\\t<ul class=\\\"actions bottom-special\\\">\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a href=\\\"https://www.artstation.com/artwork/o2OV4L\\\" target=\\\"_blank\\\" class=\\\"button\\\"\\r\\n\\t\\t\\t\\t\\taria-label=\\\"Artstation\\\">Artstation Documentation</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t</ul>\\r\\n\\t</section>\\r\\n\\r\\n\\r\\n\\t<!-- second -->\\r\\n\\t<section id=\\\"second\\\" class=\\\"main style2 left dark fullscreen\\\">\\r\\n\\t\\t<span class=\\\"secondtext\\\">JOHOR DARUL TA'ZIM<br>JERSEY CONCEPT</span>\\r\\n\\r\\n\\t\\t<model-viewer id=\\\"playcard\\\" src=\\\"../images/3D/playcard.glb\\\" disable-zoom touch-action=\\\"pan-y\\\" data-js-focus-visible\\r\\n\\t\\t\\talt=\\\"Johor Concept by Shoenix Studios\\\" poster=\\\"../images/3D/poster.webp\\\" shadow-intensity=\\\"1\\\"\\r\\n\\t\\t\\tdisable-tap auto-rotate>\\r\\n\\r\\n\\t\\t\\t<div class=\\\"model-viewer-poster\\\" slot=\\\"poster\\\" style=\\\"background-image: url(../images/poster.webp);\\\"></div>\\r\\n\\t\\t  \\r\\n\\t\\t\\t<div class=\\\"progress-bar hide\\\" slot=\\\"progress-bar\\\">\\r\\n\\t\\t\\t  <div class=\\\"update-bar\\\" style=\\\"width: 100%;\\\"></div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</model-viewer>\\r\\n\\r\\n\\t\\t<ul class=\\\"actions bottom-special\\\">\\r\\n\\t\\t\\t<div class=\\\"controls\\\">\\r\\n\\t\\t\\t\\t<div><select id=\\\"variant\\\"></select></div>\\r\\n\\t\\t\\t  </div>\\r\\n\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a id=\\\"behancerd\\\" href=\\\"https://www.behance.net/gallery/143669887/JDT-CONCEPT-Shoenix-Studios\\\" target=\\\"_blank\\\"\\r\\n\\t\\t\\t\\t\\tclass=\\\"button\\\" aria-label=\\\"Behance\\\">Behance Documentation</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t</ul>\\r\\n\\t</section>\\r\\n\\r\\n\\t<!-- Advertisment -->\\r\\n\\t<section>\\r\\n\\t\\t<div class=\\\"adsslider\\\">\\r\\n\\t\\t\\t<div class=\\\"ads-slider\\\">\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\">\\r\\n\\t\\t\\t\\t\\t<a aria-label=\\\"Revenant Formal\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" title=\\\"Revenant Formal\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\twidth=\\\"1920\\\" height=\\\"300\\\" alt=\\\"Revenant Formal\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"https://www.behance.net/gallery/141503291/Karnival-FYPro-Com-20192020-UMP\\\"\\r\\n\\t\\t\\t\\t\\t\\taria-label=\\\"Karnival FYPro-com\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" title=\\\"Revenant Formal\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\twidth=\\\"1920\\\" height=\\\"300\\\" alt=\\\"Revenant Formal\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"#productcard\\\"\\r\\n\\t\\t\\t\\t\\t\\taria-label=\\\"ITNOT Collection\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" title=\\\"ITNOT Collection\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\twidth=\\\"1920\\\" height=\\\"300\\\" alt=\\\"In The Name of Tsar Collection\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"#productcard\\\"\\r\\n\\t\\t\\t\\t\\t\\taria-label=\\\"World Collection\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" title=\\\"World Collection\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\twidth=\\\"1920\\\" height=\\\"300\\\" alt=\\\"The World Collection\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\">\\r\\n\\t\\t\\t\\t\\t<a aria-label=\\\"HM Concept\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" title=\\\"Harimau Malaya | AC Milan Concept\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\twidth=\\\"1920\\\" height=\\\"300\\\" alt=\\\"Harimau Malaya | AC Milan Concept\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</section>\\r\\n\\r\\n\\t<!-- Work -->\\r\\n\\t<section id=\\\"work\\\" class=\\\"main style3 primary\\\">\\r\\n\\t\\t<div class=\\\"content\\\">\\r\\n\\t\\t\\t<header>\\r\\n\\t\\t\\t\\t<h2 class=\\\"label\\\">Latest Works</h2>\\r\\n\\t\\t\\t</header>\\r\\n\\t\\t\\t<!-- Gallery  -->\\r\\n\\t\\t\\t<div class=\\\"gallery\\\">\\r\\n\\t\\t\\t\\t<article class=\\\"from-left\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"../images/01-full.webp\\\" class=\\\"image fit\\\"><img class=\\\"hidden\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\\"Cover Album Arts\\\" height=\\\"225.817\\\" width=\\\"360\\\" alt=\\\"Cover Album Arts\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tloading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</article>\\r\\n\\t\\t\\t\\t<article class=\\\"from-right\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"../images/02-full.webp\\\" class=\\\"image fit\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\\"Arus Kelajuan\\\" height=\\\"225.817\\\" width=\\\"360\\\" alt=\\\"Arus Kelajuan\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tloading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</article>\\r\\n\\t\\t\\t\\t<article class=\\\"from-left\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"../images/03-full.webp\\\" class=\\\"image fit\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\\"The Phantom Cries\\\" height=\\\"225.817\\\" width=\\\"360\\\" alt=\\\"The Phantom Cries\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tloading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</article>\\r\\n\\t\\t\\t\\t<article class=\\\"from-right\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"../images/04-full.webp\\\" class=\\\"image fit\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\\"GenesisPhantom | Hyper Concept Skateboard\\\" height=\\\"225.817\\\" width=\\\"360\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\talt=\\\"Hyper Concept Skateboard\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</article>\\r\\n\\t\\t\\t\\t<article class=\\\"from-left\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"../images/05-full.webp\\\" class=\\\"image fit\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\\"Hausboom X Shoenix Studios\\\" height=\\\"225.817\\\" width=\\\"360\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\talt=\\\"Hausboom X Shoenix Studios\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</article>\\r\\n\\t\\t\\t\\t<article class=\\\"from-right\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"../images/06-full.webp\\\" class=\\\"image fit\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\" title=\\\"Zulmat\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\theight=\\\"225.817\\\" width=\\\"360\\\" alt=\\\"Zulmat\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</article>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</section>\\r\\n\\r\\n\\t\\t<!-- project -->\\r\\n\\t\\t<section id=\\\"multiproject\\\" class=\\\"main style4 primary\\\">\\r\\n\\t\\t\\t<div class=\\\"mphero\\\">\\r\\n\\t\\t\\t\\t<div class=\\\"mptext\\\">\\r\\n\\t\\t\\t\\t\\t<p id=\\\"projectup\\\" class=\\\"mptext__short\\\">Latest Update: </p>\\r\\n\\t\\t\\t\\t\\t<h1 class=\\\"mptext__title\\\">Projects Collection</h1>\\r\\n\\t\\t\\t\\t\\t<p class=\\\"mptext__description\\\"></br>All project visualization & documentation from planning, texturing and rendering phase,\\r\\n\\t\\t\\t\\t\\t\\t all projects is subject to change. + Included video gallery from previous project.\\r\\n\\t\\t\\t\\t\\t</p>\\r\\n\\t\\t\\t\\t\\t<a href=\\\"project\\\" target=\\\"_self\\\" class=\\\"button\\\" aria-label=\\\"Project\\\">View all projects</a>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"mpgrid__container\\\">\\r\\n\\t\\t\\t\\t\\t<div class=\\\"mpgrid__item mpone\\\"></div>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"mpgrid__item mptwo\\\"></div>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"mpgrid__item mpthree\\\"></div>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"mpgrid__item mpfour\\\"></div>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"mpgrid__item mpfive\\\"></div>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"mpgrid__item mpsix\\\"></div>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"mpgrid__item mpseven\\\"></div>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"mpgrid__item mpeight\\\"></div>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"mpgrid__item mpnine\\\"></div>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"mpgrid__item mpten\\\"></div>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"mpgrid__item mpeleven\\\"></div>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"mpgrid__item mptwelve\\\"></div>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</section>\\r\\n\\r\\n\\t<!-- Product -->\\r\\n\\t<section id=\\\"productcard\\\" class=\\\"main style3 primary\\\">\\r\\n\\t\\t<div class=\\\"infocontent\\\">\\r\\n\\t\\t\\t<header>\\r\\n\\t\\t\\t\\t<h2 class=\\\"label\\\">Latest Collections</h2>\\r\\n\\t\\t\\t</header>\\r\\n\\t\\t\\t<div class=\\\"info-container\\\">\\r\\n\\t\\t\\t\\t<div class=\\\"card\\\">\\r\\n\\t\\t\\t\\t\\t<h2>Collection 1</h2>\\r\\n\\t\\t\\t\\t\\t<a type=\\\"button\\\" href=\\\"product\\\" data-pronum=\\\"2\\\" target=\\\"_self\\\" aria-label=\\\"ITNOT\\\">\\r\\n\\t\\t\\t\\t\\t\\t<i class=\\\"fas fa-arrow-right\\\"></i></a>\\r\\n\\t\\t\\t\\t\\t<p>in the name of Tsar</p>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"pic\\\"></div>\\r\\n\\t\\t\\t\\t\\t<span>\\r\\n\\t\\t\\t\\t\\t</span>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"card\\\">\\r\\n\\t\\t\\t\\t\\t<h2>Collection 2</h2>\\r\\n\\t\\t\\t\\t\\t<a type=\\\"button\\\" href=\\\"product\\\" data-pronum=\\\"3\\\" target=\\\"_self\\\" aria-label=\\\"BSE\\\">\\r\\n\\t\\t\\t\\t\\t\\t<i class=\\\"fas fa-arrow-right\\\"></i></a>\\r\\n\\t\\t\\t\\t\\t<p>Black Steel Eagle</p>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"pic\\\"></div>\\r\\n\\t\\t\\t\\t\\t<span>\\r\\n\\t\\t\\t\\t\\t</span>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"card\\\">\\r\\n\\t\\t\\t\\t\\t<h2>Collection 3</h2>\\r\\n\\t\\t\\t\\t\\t<a type=\\\"button\\\" href=\\\"product\\\" data-pronum=\\\"4\\\" target=\\\"_self\\\" aria-label=\\\"WORLD\\\">\\r\\n\\t\\t\\t\\t\\t\\t<i class=\\\"fas fa-arrow-right\\\"></i></a>\\r\\n\\t\\t\\t\\t\\t<p>The World</p>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"pic\\\"></div>\\r\\n\\t\\t\\t\\t\\t<span>\\r\\n\\t\\t\\t\\t\\t</span>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"card\\\">\\r\\n\\t\\t\\t\\t\\t<h2>Collection 4</h2>\\r\\n\\t\\t\\t\\t\\t<a type=\\\"button\\\" href=\\\"product\\\" data-pronum=\\\"5\\\" target=\\\"_self\\\" aria-label=\\\"UNITY\\\">\\r\\n\\t\\t\\t\\t\\t\\t<i class=\\\"fas fa-arrow-right\\\"></i></a>\\r\\n\\t\\t\\t\\t\\t<p>Unity</p>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"pic\\\"></div>\\r\\n\\t\\t\\t\\t\\t<span>\\r\\n\\t\\t\\t\\t\\t</span>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\r\\n\\t</section>\\r\\n\\r\\n\\t<!-- blog -->\\r\\n\\t<section id=\\\"blog\\\" class=\\\"main style4 blog\\\">\\r\\n\\t\\t<div class=\\\"blog-relative__container\\\">\\r\\n\\t\\t\\t<div class=\\\"blog-full__width blog-object__fit\\\">\\r\\n\\t\\t\\t\\t<img class=\\\"blog-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_21___ + \"\\\" alt=\\\"Blog background picture\\\"\\r\\n\\t\\t\\t\\t\\tloading=\\\"lazy\\\">\\r\\n\\t\\t\\t\\t<div class=\\\"blog-absolute\\\">\\r\\n\\t\\t\\t\\t\\t<img class=\\\"blog-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_22___ + \"\\\" width=\\\"128\\\" height=\\\"31.3\\\"\\r\\n\\t\\t\\t\\t\\t\\tstyle=\\\"margin-bottom: 12px;\\\" alt=\\\"Shoenix Logo\\\" loading=\\\"lazy\\\">\\r\\n\\t\\t\\t\\t\\t<h1 class=\\\"blog-text\\\">Developer Logs</h1>\\r\\n\\t\\t\\t\\t\\t<p class=\\\"blog-paragraph\\\">Complete compilations of developer updated logs for the website, from\\r\\n\\t\\t\\t\\t\\t\\tfrontend to backend.\\r\\n\\t\\t\\t\\t\\t\\t<span id=\\\"dateup\\\"><br> Latest Update: </span>\\r\\n\\t\\t\\t\\t\\t</p>\\r\\n\\t\\t\\t\\t\\t<a id=\\\"blogbtn\\\" href=\\\"blog\\\" target=\\\"_self\\\" class=\\\"button\\\" aria-label=\\\"Blog\\\">Read Now!</a>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</section>\\r\\n\\r\\n\\t<section>\\r\\n\\t\\t<div class=\\\"clientslider\\\">\\r\\n\\t\\t\\t <section class=\\\"client-slider\\\">\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_23___ + \"\\\" width=\\\"149\\\" height=\\\"97\\\" alt=\\\"Pioneer CLI\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_24___ + \"\\\" width=\\\"149\\\" height=\\\"97\\\" alt=\\\"NMVX CLI\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_25___ + \"\\\" width=\\\"149\\\" height=\\\"97\\\" alt=\\\"Atmax CLI\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_26___ + \"\\\" width=\\\"149\\\" height=\\\"97\\\" alt=\\\"Usul Timur CLI\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_27___ + \"\\\" width=\\\"149\\\" height=\\\"97\\\" alt=\\\"FTSLR CLI\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_28___ + \"\\\" width=\\\"149\\\" height=\\\"97\\\" alt=\\\"Temor CLI\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_29___ + \"\\\" width=\\\"149\\\" height=\\\"97\\\" alt=\\\"Granova CLI\\\"></div>\\r\\n\\t\\t\\t </section>\\r\\n\\t\\t  </div>\\r\\n\\t</section>\\r\\n\\r\\n\\t<!-- Footer -->\\r\\n\\t<footer class=\\\"footer section\\\">\\r\\n\\t\\t<div class=\\\"footer__container container grid\\\">\\r\\n\\t\\t\\t<span class=\\\"footer__logo\\\">\\r\\n\\t\\t\\t\\t<img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" width=\\\"32\\\" height=\\\"32\\\" alt=\\\"Shoenix Studios's Logo\\\">\\r\\n\\t\\t\\t</span>\\r\\n\\r\\n\\t\\t\\t<!-- Icons -->\\r\\n\\t\\t\\t<div class=\\\"footer__content\\\">\\r\\n\\t\\t\\t\\t<h2 class=\\\"footer__title\\\">Socials</h2>\\r\\n\\t\\t\\t\\t<ul class=\\\"footer__links\\\">\\r\\n\\t\\t\\t\\t\\t<li><a href=\\\"https://www.facebook.com/shoenixstudios\\\" target=\\\"_blank\\\" aria-label=\\\"Facebook\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\\"footer__link\\\">Facebook</a></li>\\r\\n\\t\\t\\t\\t\\t<li><a href=\\\"https://www.instagram.com/shoenix_studios/\\\" target=\\\"_blank\\\" aria-label=\\\"Instagram\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\\"footer__link\\\">Instagram</a></li>\\r\\n\\t\\t\\t\\t\\t<li><a href=\\\"https://www.youtube.com/@shoenixstudios\\\" target=\\\"_blank\\\" aria-label=\\\"Youtube\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\\"footer__link\\\">Youtube</a></li>\\r\\n\\t\\t\\t\\t\\t<li><a href=\\\"https://github.com/shoen1x\\\" target=\\\"_blank\\\" aria-label=\\\"Github\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\\"footer__link\\\">Github</a>\\r\\n\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t<div class=\\\"footer__content\\\">\\r\\n\\t\\t\\t\\t<h2 class=\\\"footer__title\\\">Navigation</h2>\\r\\n\\r\\n\\t\\t\\t\\t<ul class=\\\"footer__links\\\">\\r\\n\\t\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\t\\t<a href=\\\"project\\\" target=\\\"_self\\\" aria-label=\\\"Project\\\" class=\\\"footer__link\\\">Projects</a>\\r\\n\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\t\\t<a href=\\\"#productcard\\\" target=\\\"_self\\\" aria-label=\\\"Products\\\" class=\\\"footer__link\\\">Products</a>\\r\\n\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\t\\t<a href=\\\"blog\\\" target=\\\"_self\\\" aria-label=\\\"Blog\\\" class=\\\"footer__link\\\">Blog</a>\\r\\n\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\r\\n\\t\\t\\t\\t<ul class=\\\"footer__copy\\\">\\r\\n\\t\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\t\\t<span class=\\\"footer__copy-link\\\">&copy; 2023 <strong>Shoenix Studios</strong> All Rights\\r\\n\\t\\t\\t\\t\\t\\t\\tReserved</span>\\r\\n\\t\\t\\t\\t\\t\\t<span class=\\\"footer__copy-link\\\"><span id=\\\"versioning\\\"></span></br><span id=\\\"revisioning\\\"></span></span>\\r\\n\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\r\\n\\t\\t\\t\\t<ul class=\\\"footer__links\\\">\\r\\n\\t\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\t\\t<label class=\\\"select-language\\\" for=\\\"langslct\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<select id=\\\"langslct\\\" required=\\\"required\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\\"\\\" disabled=\\\"disabled\\\" selected=\\\"selected\\\">Language Options</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\\"en\\\">English</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\\"my\\\">Malay</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t</select>\\r\\n\\t\\t\\t\\t\\t\\t\\t<svg>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<use xlink:href=\\\"#select-arrow-down\\\"></use>\\r\\n\\t\\t\\t\\t\\t\\t\\t</svg>\\r\\n\\t\\t\\t\\t\\t\\t</label>\\r\\n\\t\\t\\t\\t\\t\\t<svg class=\\\"sprites-language\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<symbol id=\\\"select-arrow-down\\\" viewbox=\\\"0 0 10 6\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<polyline points=\\\"1 1 5 5 9 1\\\"></polyline>\\r\\n\\t\\t\\t\\t\\t\\t\\t</symbol>\\r\\n\\t\\t\\t\\t\\t\\t</svg>\\r\\n\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\r\\n\\t</footer>\\r\\n\\r\\n\\t<!-- Scripts -->\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_30___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_31___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_32___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_33___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_34___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_35___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_36___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js\\\"><\" + \"/script>\\r\\n\\t<\" + \"script type=\\\"module\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_37___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script type=\\\"module\\\" src=\\\"https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_38___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_39___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script type=\\\"text/javascript\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_40___ + \"\\\"><\" + \"/script>\\r\\n\\r\\n\\t<\" + \"script>\\r\\n\\t\\tfetch('webpack-assets.json')\\r\\n\\t\\t\\t.then(function (response) {\\r\\n\\t\\t\\t\\treturn response.json();\\r\\n\\t\\t\\t})\\r\\n\\t\\t\\t.then(function (data) {\\r\\n\\t\\t\\t\\tappendData(data);\\r\\n\\t\\t\\t})\\r\\n\\t\\t\\t.catch(function (err) {\\r\\n\\t\\t\\t\\tdocument.getElementById(\\\"versioning\\\").innerHTML = DOMPurify.sanitize('</br></br>Versioning data missing');\\r\\n\\t\\t\\t\\tdocument.getElementById(\\\"revisioning\\\").innerHTML = DOMPurify.sanitize('Revisioning data missing');\\r\\n\\t\\t\\t\\tdocument.getElementById(\\\"dateup\\\").innerHTML = DOMPurify.sanitize('<br> Latest update: Failed to load.');\\r\\n\\t\\t\\t\\tdocument.getElementById(\\\"projectup\\\").innerHTML = DOMPurify.sanitize('<br> Latest update: Failed to load.');\\r\\n\\t\\t\\t});\\r\\n\\t\\tfunction appendData(data) {\\r\\n\\t\\t\\tdocument.getElementById(\\\"versioning\\\").innerHTML = DOMPurify.sanitize('</br></br>Build: <strong>' + data.metadata.version + '<strong>');\\r\\n\\t\\t\\tdocument.getElementById(\\\"revisioning\\\").innerHTML = DOMPurify.sanitize('Revision: <strong>' + data.metadata.revision + '<strong>');\\r\\n\\t\\t\\tdocument.getElementById(\\\"dateup\\\").innerHTML = DOMPurify.sanitize('<br> Latest update: <strong>' + data.metadata.date + '<strong>');\\r\\n\\t\\t\\tdocument.getElementById(\\\"projectup\\\").innerHTML = DOMPurify.sanitize('<br> Latest update: <strong>' + data.metadata.date + '<strong>');\\r\\n\\t\\t}\\r\\n\\t<\" + \"/script>\\r\\n\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://revenant-formal/./src/en-MY/home.html?");

/***/ }),

/***/ "./src/my-MY/home.html":
/*!*****************************!*\
  !*** ./src/my-MY/home.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/apple-touch-icon.png */ \"./src/images/ico/apple-touch-icon.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/favicon.ico */ \"./src/images/ico/favicon.ico\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/favicon-32x32.png */ \"./src/images/ico/favicon-32x32.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/favicon-16x16.png */ \"./src/images/ico/favicon-16x16.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/site.webmanifest */ \"./src/images/ico/site.webmanifest\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/safari-pinned-tab.svg */ \"./src/images/ico/safari-pinned-tab.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/noscript.css */ \"./src/assets/css/noscript.css\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/shoenix.svg */ \"./src/images/ico/shoenix.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/nmvxshx.svg */ \"./src/assets/css/images/nmvxshx.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/shoenixlab.svg */ \"./src/assets/css/images/shoenixlab.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/ads/web-ad1.webp */ \"./src/images/fulls/ads/web-ad1.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/ads/web-ad2.webp */ \"./src/images/fulls/ads/web-ad2.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/ads/web-ad3.webp */ \"./src/images/fulls/ads/web-ad3.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/ads/web-ad4.webp */ \"./src/images/fulls/ads/web-ad4.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/ads/web-ad5.webp */ \"./src/images/fulls/ads/web-ad5.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/01.webp */ \"./src/images/thumbs/01.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/02.webp */ \"./src/images/thumbs/02.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/03.webp */ \"./src/images/thumbs/03.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/04.webp */ \"./src/images/thumbs/04.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/05.webp */ \"./src/images/thumbs/05.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/06.webp */ \"./src/images/thumbs/06.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/blog_wp_small.webp */ \"./src/images/thumbs/blog_wp_small.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../images/revenant-typeform.svg */ \"./src/images/revenant-typeform.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/Pioneercli.svg */ \"./src/assets/css/images/Pioneercli.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/client/nmvxcli.svg */ \"./src/assets/css/images/client/nmvxcli.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/client/atmaxcli.svg */ \"./src/assets/css/images/client/atmaxcli.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/client/usultimur.svg */ \"./src/assets/css/images/client/usultimur.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/client/ftslr.svg */ \"./src/assets/css/images/client/ftslr.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/client/temorcli.svg */ \"./src/assets/css/images/client/temorcli.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/client/grvcli.svg */ \"./src/assets/css/images/client/grvcli.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.min.js */ \"./src/assets/js/jquery.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.poptrox.min.js */ \"./src/assets/js/jquery.poptrox.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.scrolly.min.js */ \"./src/assets/js/jquery.scrolly.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.scrollex.min.js */ \"./src/assets/js/jquery.scrollex.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/browser.min.js */ \"./src/assets/js/browser.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/breakpoints.min.js */ \"./src/assets/js/breakpoints.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/util.js */ \"./src/assets/js/util.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/firebase.js */ \"./src/assets/js/firebase.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ../../../node_modules/focus-visible/dist/focus-visible.min.js */ \"./node_modules/focus-visible/dist/focus-visible.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/language.js */ \"./src/assets/js/language.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ../../../node_modules/dompurify/dist/purify.min.js */ \"./node_modules/dompurify/dist/purify.min.js\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);\nvar ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);\nvar ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);\nvar ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);\nvar ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);\nvar ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);\nvar ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);\nvar ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);\nvar ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);\nvar ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);\nvar ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);\nvar ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);\nvar ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);\nvar ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);\nvar ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);\nvar ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);\nvar ___HTML_LOADER_REPLACEMENT_34___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_34___);\nvar ___HTML_LOADER_REPLACEMENT_35___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_35___);\nvar ___HTML_LOADER_REPLACEMENT_36___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_36___);\nvar ___HTML_LOADER_REPLACEMENT_37___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_37___);\nvar ___HTML_LOADER_REPLACEMENT_38___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_38___);\nvar ___HTML_LOADER_REPLACEMENT_39___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_39___);\nvar ___HTML_LOADER_REPLACEMENT_40___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_40___);\nvar code = \"<!DOCTYPE HTML>\\r\\n<!--\\r\\n\\tRevenant Formal by NMVX\\r\\n\\tShoen1x.github.io | @Shoenixstudios\\r\\n\\tunder the CCA 3.0 License | Credit to HTML5 UP for template\\r\\n-->\\r\\n\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n\\t<!--Title-->\\r\\n\\t<title>Rerumah | Shoenix Studios</title>\\r\\n\\r\\n\\t<!--Meta and linker-->\\r\\n\\t<meta http-equiv=Content-Type content=text/html; charset=utf-8 />\\r\\n\\t<meta name=\\\"viewport\\\" user-scalable=\\\"yes\\\" content=\\\"width=device-width, initial-scale=1.0, minimum-scale=1.0\\\" />\\r\\n\\t<meta name=\\\"theme-color\\\" media=\\\"(prefers-color-scheme: dark)\\\" content=\\\"#000000\\\" />\\r\\n\\t<meta name=\\\"keywords\\\" content=\\\"Shoenix, Shoenix Studios, NMVX, Revenant's Formal, Revenant Formal, NemesisV\\\">\\r\\n\\t<meta name=\\\"description\\\" content=\\\"Selamat Datang ke Shoenix Studios | Projek Eksperimen Oleh NMVX.\\\">\\r\\n\\t<link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\\\" />\\r\\n\\t<link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/slick/slick-theme.min.css\\\" />\\r\\n\\t<link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/slick/slick.css\\\" />\\r\\n\\t<link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n\\t<link rel=\\\"icon\\\" type=\\\"image/x-icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n\\t<link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\r\\n\\t<link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\">\\r\\n\\t<link rel=\\\"manifest\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\">\\r\\n\\t<link rel=\\\"mask-icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" color=\\\"#5bbad5\\\">\\r\\n\\t<meta name=\\\"msapplication-TileColor\\\" content=\\\"../images/ico/browserconfig.xml\\\">\\r\\n\\t<meta name=\\\"format-detection\\\" content=\\\"telephone=no\\\">\\r\\n\\r\\n\\t<!-- Social Media metadata -->\\r\\n\\t<meta property=\\\"og:type\\\" content=\\\"website\\\">\\r\\n\\t<meta property=\\\"og:image:type\\\" content=\\\"image/png\\\">\\r\\n\\t<meta property=\\\"og:image:width\\\" content=\\\"1563\\\">\\r\\n\\t<meta property=\\\"og:image:height\\\" content=\\\"818\\\">\\r\\n\\t<meta property=\\\"og:description\\\" content=\\\"Projek Eksperimen Oleh NMVX.\\\">\\r\\n\\t<meta property=\\\"og:title\\\" content=\\\"Rerumah | Shoenix Studios\\\">\\r\\n\\t<meta property=\\\"og:url\\\" content=\\\"https://shoenix-studios.web.app/home\\\">\\r\\n\\t<meta property=\\\"og:image\\\" content=\\\"https://shoenix-studios.web.app/images/og-image/og-image-home.jpg\\\">\\r\\n\\t<meta property=\\\"og:locale\\\" content=\\\"en_MY\\\">\\r\\n\\t<meta property=\\\"og:site_name\\\" content=\\\"Home\\\">\\r\\n\\r\\n\\t<meta name=\\\"twitter:card\\\" content=\\\"summary_large_image\\\">\\r\\n\\t<meta property=\\\"twitter:domain\\\" content=\\\"shoenix-studios.web.app\\\">\\r\\n\\t<meta property=\\\"twitter:url\\\" content=\\\"https://shoenix-studios.web.app/home\\\">\\r\\n\\t<meta name=\\\"twitter:title\\\" content=\\\"Rerumah | Shoenix Studios\\\">\\r\\n\\t<meta name=\\\"twitter:description\\\" content=\\\"Projek Eksperimen Oleh NMVX.\\\">\\r\\n\\t<meta name=\\\"twitter:image\\\" content=\\\"https://shoenix-studios.web.app/images/og-image/og-image-home.jpg\\\">\\r\\n\\r\\n\\t<!--No script-->\\r\\n\\t<noscript>\\r\\n\\t\\t<link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" />\\r\\n\\t</noscript>\\r\\n</head>\\r\\n\\r\\n<body class=\\\"is-preload\\\">\\r\\n\\t<header class=\\\"header\\\" id=\\\"header\\\">\\r\\n\\t\\t<nav class=\\\"nav container\\\">\\r\\n\\t\\t\\t<a title=\\\"Home\\\" href=\\\"home\\\" target=\\\"_self\\\" aria-label=\\\"Home\\\" class=\\\"nav__logo\\\">\\r\\n\\t\\t\\t\\t<img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" height=\\\"32\\\" width=\\\"32\\\" alt=\\\"\\\">\\r\\n\\t\\t\\t</a>\\r\\n\\t\\t\\t<span>Rerumah | <strong>Shoenix Studios</strong></span>\\r\\n\\t\\t</nav>\\r\\n\\t</header>\\r\\n\\r\\n\\t<!-- Intro -->\\r\\n\\t<section id=\\\"intro\\\" class=\\\"main style1 dark fullscreen\\\">\\r\\n\\t\\t<div class=\\\"content\\\">\\r\\n\\t\\t\\t<header>\\r\\n\\t\\t\\t\\t<div id=\\\"slideshow\\\">\\r\\n\\t\\t\\t\\t\\t<!-- <h2 id=\\\"headline\\\">2023</h2> -->\\r\\n\\t\\t\\t\\t\\t<img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" width=\\\"320\\\" height=\\\"320\\\" alt=\\\"NemesisV\\\" loading=\\\"eager\\\">\\r\\n\\t\\t\\t\\t\\t<img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" width=\\\"720\\\" height=\\\"120.667\\\" alt=\\\"NemesisV\\\"\\r\\n\\t\\t\\t\\t\\t\\tloading=\\\"eager\\\">\\r\\n\\t\\t\\t\\t\\t<img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" width=\\\"720\\\" height=\\\"120.667\\\" alt=\\\"Shoenix Lab Logo\\\"\\r\\n\\t\\t\\t\\t\\t\\tloading=\\\"eager\\\">\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</header>\\r\\n\\t\\t\\t<p>Projek Eksperimen Oleh <strong>NMVX</strong></p>\\r\\n\\t\\t\\t<!-- <footer>\\r\\n\\t\\t\\t\\t<a href=\\\"#first\\\" class=\\\"button style2 down\\\" title=\\\"More\\\">More</a>\\r\\n\\t\\t\\t</footer> -->\\r\\n\\t\\t</div>\\r\\n\\t</section>\\r\\n\\r\\n\\t<!-- first -->\\r\\n\\t<section id=\\\"first\\\" class=\\\"main style2 right dark fullscreen\\\">\\r\\n\\t\\t<span class=\\\"firsttext\\\">KONSEP KAPAK</br>VALHALLA</span>\\r\\n\\r\\n\\t\\t<model-viewer src=\\\"../images/3D/valhalla.glb\\\" disable-zoom touch-action=\\\"pan-y\\\" data-js-focus-visible\\r\\n\\t\\t\\talt=\\\"Valhalla Axes by Shoenix Studios\\\" poster=\\\"../images/3D/poster-1.webp\\\" shadow-intensity=\\\"1\\\" disable-tap\\r\\n\\t\\t\\tauto-rotate>\\r\\n\\r\\n\\t\\t\\t<div class=\\\"model-viewer-poster\\\" slot=\\\"poster\\\" style=\\\"background-image: url(./images/poster-1.webp);\\\"></div>\\r\\n\\r\\n\\t\\t\\t<div class=\\\"progress-bar hide\\\" slot=\\\"progress-bar\\\">\\r\\n\\t\\t\\t\\t<div class=\\\"update-bar\\\" style=\\\"width: 100%;\\\"></div>\\r\\n\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t</model-viewer>\\r\\n\\r\\n\\t\\t<ul class=\\\"actions bottom-special\\\">\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a href=\\\"https://www.artstation.com/artwork/o2OV4L\\\" target=\\\"_blank\\\" class=\\\"button\\\"\\r\\n\\t\\t\\t\\t\\taria-label=\\\"Artstation\\\">Dokumentasi 'Artstation'</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t</ul>\\r\\n\\t</section>\\r\\n\\r\\n\\r\\n\\t<!-- second -->\\r\\n\\t<section id=\\\"second\\\" class=\\\"main style2 left dark fullscreen\\\">\\r\\n\\t\\t<span class=\\\"secondtext\\\">JERSI KONSEP<br>JOHOR DARUL TA'ZIM</span>\\r\\n\\r\\n\\t\\t<model-viewer id=\\\"playcard\\\" src=\\\"../images/3D/playcard.glb\\\" disable-zoom touch-action=\\\"pan-y\\\"\\r\\n\\t\\t\\tdata-js-focus-visible alt=\\\"Johor Concept by Shoenix Studios\\\" poster=\\\"../images/3D/poster.webp\\\"\\r\\n\\t\\t\\tshadow-intensity=\\\"1\\\" disable-tap auto-rotate>\\r\\n\\r\\n\\t\\t\\t<div class=\\\"model-viewer-poster\\\" slot=\\\"poster\\\" style=\\\"background-image: url(./images/poster.webp);\\\"></div>\\r\\n\\r\\n\\t\\t\\t<div class=\\\"progress-bar hide\\\" slot=\\\"progress-bar\\\">\\r\\n\\t\\t\\t\\t<div class=\\\"update-bar\\\" style=\\\"width: 100%;\\\"></div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</model-viewer>\\r\\n\\r\\n\\t\\t<ul class=\\\"actions bottom-special\\\">\\r\\n\\t\\t\\t<div class=\\\"controls\\\">\\r\\n\\t\\t\\t\\t<div><select id=\\\"variant\\\"></select></div>\\r\\n\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t<a id=\\\"behancerd\\\" href=\\\"https://www.behance.net/gallery/143669887/JDT-CONCEPT-Shoenix-Studios\\\" target=\\\"_blank\\\"\\r\\n\\t\\t\\t\\t\\tclass=\\\"button\\\" aria-label=\\\"Behance\\\">Dokumentasi 'Behance'</a>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t</ul>\\r\\n\\t</section>\\r\\n\\r\\n\\t<!-- Advertisment -->\\r\\n\\t<section>\\r\\n\\t\\t<div class=\\\"adsslider\\\">\\r\\n\\t\\t\\t<div class=\\\"ads-slider\\\">\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\">\\r\\n\\t\\t\\t\\t\\t<a aria-label=\\\"Revenant Formal\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" title=\\\"Revenant Formal\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\twidth=\\\"1920\\\" height=\\\"300\\\" alt=\\\"Revenant Formal\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"https://www.behance.net/gallery/141503291/Karnival-FYPro-Com-20192020-UMP\\\"\\r\\n\\t\\t\\t\\t\\t\\taria-label=\\\"Karnival FYPro-com\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\\"Revenant Formal\\\" width=\\\"1920\\\" height=\\\"300\\\" alt=\\\"Revenant Formal\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tloading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"#productcard\\\" aria-label=\\\"ITNOT Koleksi\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\\"Koleksi 'ITNOT'\\\" width=\\\"1920\\\" height=\\\"300\\\" alt=\\\"Koleksi 'In The Name of Tsar'\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tloading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"#productcard\\\" aria-label=\\\"World Koleksi\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\\"Koleksi 'Dunia'\\\" width=\\\"1920\\\" height=\\\"300\\\" alt=\\\"Koleksi 'Dunia'\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tloading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\">\\r\\n\\t\\t\\t\\t\\t<a aria-label=\\\"HM Concept\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\\"Konsep Harimau Malaya | AC Milan\\\" width=\\\"1920\\\" height=\\\"300\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\talt=\\\"Konsep Harimau Malaya | AC Milan\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</section>\\r\\n\\r\\n\\t<!-- Work -->\\r\\n\\t<section id=\\\"work\\\" class=\\\"main style3 primary\\\">\\r\\n\\t\\t<div class=\\\"content\\\">\\r\\n\\t\\t\\t<header>\\r\\n\\t\\t\\t\\t<h2 class=\\\"label\\\">Karya Baharu</h2>\\r\\n\\t\\t\\t</header>\\r\\n\\t\\t\\t<!-- Gallery  -->\\r\\n\\t\\t\\t<div class=\\\"gallery\\\">\\r\\n\\t\\t\\t\\t<article class=\\\"from-left\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"../images/01-full.webp\\\" class=\\\"image fit\\\"><img class=\\\"hidden\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tsrc=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" title=\\\"Seni Album Muka Depan\\\" height=\\\"225.817\\\" width=\\\"360\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\talt=\\\"Seni Album Muka Depan\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</article>\\r\\n\\t\\t\\t\\t<article class=\\\"from-right\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"../images/02-full.webp\\\" class=\\\"image fit\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\\"Arus Kelajuan\\\" height=\\\"225.817\\\" width=\\\"360\\\" alt=\\\"Arus Kelajuan\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</article>\\r\\n\\t\\t\\t\\t<article class=\\\"from-left\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"../images/03-full.webp\\\" class=\\\"image fit\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\\"The Phantom Cries\\\" height=\\\"225.817\\\" width=\\\"360\\\" alt=\\\"The Phantom Cries\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tloading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</article>\\r\\n\\t\\t\\t\\t<article class=\\\"from-right\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"../images/04-full.webp\\\" class=\\\"image fit\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\\"GenesisPhantom | Papan Luncur Konsep Hiper\\\" height=\\\"225.817\\\" width=\\\"360\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\talt=\\\"Papan Luncur Konsep Hiper\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</article>\\r\\n\\t\\t\\t\\t<article class=\\\"from-left\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"../images/05-full.webp\\\" class=\\\"image fit\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\\"Hausboom X Shoenix Studios\\\" height=\\\"225.817\\\" width=\\\"360\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\talt=\\\"Hausboom X Shoenix Studios\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</article>\\r\\n\\t\\t\\t\\t<article class=\\\"from-right\\\">\\r\\n\\t\\t\\t\\t\\t<a href=\\\"../images/06-full.webp\\\" class=\\\"image fit\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\\"Zulmat\\\" height=\\\"225.817\\\" width=\\\"360\\\" alt=\\\"Zulmat\\\" loading=\\\"lazy\\\" /></a>\\r\\n\\t\\t\\t\\t</article>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</section>\\r\\n\\r\\n\\t<!-- project -->\\r\\n\\t<section id=\\\"multiproject\\\" class=\\\"main style4 primary\\\">\\r\\n\\t\\t<div class=\\\"mphero\\\">\\r\\n\\t\\t\\t<div class=\\\"mptext\\\">\\r\\n\\t\\t\\t\\t<p id=\\\"projectup\\\" class=\\\"mptext__short\\\">kemaskini Terbaharu: </p>\\r\\n\\t\\t\\t\\t<h1 class=\\\"mptext__title\\\">Koleksi Projek</h1>\\r\\n\\t\\t\\t\\t<p class=\\\"mptext__description\\\"></br>Semua penvisualan & dokumentasi dari perancangan, penteksturan dan\\r\\n\\t\\t\\t\\t\\tfasa kemas gabung. Semua projek adalah tertakluk kepada perubahan. + Termasuk galeri video dari\\r\\n\\t\\t\\t\\t\\tprojek terdahulu.\\r\\n\\t\\t\\t\\t</p>\\r\\n\\t\\t\\t\\t<a href=\\\"project\\\" target=\\\"_self\\\" class=\\\"button\\\" aria-label=\\\"Project\\\">Lihat semua projek</a>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<div class=\\\"mpgrid__container\\\">\\r\\n\\t\\t\\t\\t<div class=\\\"mpgrid__item mpone\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"mpgrid__item mptwo\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"mpgrid__item mpthree\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"mpgrid__item mpfour\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"mpgrid__item mpfive\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"mpgrid__item mpsix\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"mpgrid__item mpseven\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"mpgrid__item mpeight\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"mpgrid__item mpnine\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"mpgrid__item mpten\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"mpgrid__item mpeleven\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"mpgrid__item mptwelve\\\"></div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</section>\\r\\n\\r\\n\\t<!-- Product -->\\r\\n\\t<section id=\\\"productcard\\\" class=\\\"main style3 primary\\\">\\r\\n\\t\\t<div class=\\\"infocontent\\\">\\r\\n\\t\\t\\t<header>\\r\\n\\t\\t\\t\\t<h2 class=\\\"label\\\">Koleksi Terbaharu</h2>\\r\\n\\t\\t\\t</header>\\r\\n\\t\\t\\t<div class=\\\"info-container\\\">\\r\\n\\t\\t\\t\\t<div class=\\\"card\\\">\\r\\n\\t\\t\\t\\t\\t<h2>Koleksi 1</h2>\\r\\n\\t\\t\\t\\t\\t<a type=\\\"button\\\" href=\\\"product\\\" data-pronum=\\\"2\\\" target=\\\"_self\\\" aria-label=\\\"ITNOT\\\">\\r\\n\\t\\t\\t\\t\\t\\t<i class=\\\"fas fa-arrow-right\\\"></i></a>\\r\\n\\t\\t\\t\\t\\t<p>Di atas nama Tsar</p>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"pic\\\"></div>\\r\\n\\t\\t\\t\\t\\t<span>\\r\\n\\t\\t\\t\\t\\t</span>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"card\\\">\\r\\n\\t\\t\\t\\t\\t<h2>Koleksi 2</h2>\\r\\n\\t\\t\\t\\t\\t<a type=\\\"button\\\" href=\\\"product\\\" data-pronum=\\\"3\\\" target=\\\"_self\\\" aria-label=\\\"BSE\\\">\\r\\n\\t\\t\\t\\t\\t\\t<i class=\\\"fas fa-arrow-right\\\"></i></a>\\r\\n\\t\\t\\t\\t\\t<p>Helang Keluli Hitam</p>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"pic\\\"></div>\\r\\n\\t\\t\\t\\t\\t<span>\\r\\n\\t\\t\\t\\t\\t</span>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"card\\\">\\r\\n\\t\\t\\t\\t\\t<h2>Koleksi 3</h2>\\r\\n\\t\\t\\t\\t\\t<a type=\\\"button\\\" href=\\\"product\\\" data-pronum=\\\"4\\\" target=\\\"_self\\\" aria-label=\\\"WORLD\\\">\\r\\n\\t\\t\\t\\t\\t\\t<i class=\\\"fas fa-arrow-right\\\"></i></a>\\r\\n\\t\\t\\t\\t\\t<p>Dunia</p>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"pic\\\"></div>\\r\\n\\t\\t\\t\\t\\t<span>\\r\\n\\t\\t\\t\\t\\t</span>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div class=\\\"card\\\">\\r\\n\\t\\t\\t\\t\\t<h2>Koleksi 4</h2>\\r\\n\\t\\t\\t\\t\\t<a type=\\\"button\\\" href=\\\"product\\\" data-pronum=\\\"5\\\" target=\\\"_self\\\" aria-label=\\\"UNITY\\\">\\r\\n\\t\\t\\t\\t\\t\\t<i class=\\\"fas fa-arrow-right\\\"></i></a>\\r\\n\\t\\t\\t\\t\\t<p>kesatuan</p>\\r\\n\\t\\t\\t\\t\\t<div class=\\\"pic\\\"></div>\\r\\n\\t\\t\\t\\t\\t<span>\\r\\n\\t\\t\\t\\t\\t</span>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\r\\n\\t</section>\\r\\n\\r\\n\\t<!-- blog -->\\r\\n\\t<section id=\\\"blog\\\" class=\\\"main style4 blog\\\">\\r\\n\\t\\t<div class=\\\"blog-relative__container\\\">\\r\\n\\t\\t\\t<div class=\\\"blog-full__width blog-object__fit\\\">\\r\\n\\t\\t\\t\\t<img class=\\\"blog-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_21___ + \"\\\" alt=\\\"Blog background picture\\\"\\r\\n\\t\\t\\t\\t\\tloading=\\\"lazy\\\">\\r\\n\\t\\t\\t\\t<div class=\\\"blog-absolute\\\">\\r\\n\\t\\t\\t\\t\\t<img class=\\\"blog-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_22___ + \"\\\" width=\\\"128\\\" height=\\\"31.3\\\"\\r\\n\\t\\t\\t\\t\\t\\tstyle=\\\"margin-bottom: 12px;\\\" alt=\\\"Shoenix Logo\\\" loading=\\\"lazy\\\">\\r\\n\\t\\t\\t\\t\\t<h1 class=\\\"blog-text\\\">Log Pembangun</h1>\\r\\n\\t\\t\\t\\t\\t<p class=\\\"blog-paragraph\\\">kompilasi penuh log pembangun untuk laman sesawang, dari bahagian hadapan hingga belakang.\\r\\n\\t\\t\\t\\t\\t\\t<span id=\\\"dateup\\\"><br> Kemaskini Terbaharu: </span>\\r\\n\\t\\t\\t\\t\\t</p>\\r\\n\\t\\t\\t\\t\\t<a id=\\\"blogbtn\\\" href=\\\"blog\\\" target=\\\"_self\\\" class=\\\"button\\\" aria-label=\\\"Blog\\\">Baca Sekarang!</a>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</section>\\r\\n\\r\\n\\t<section>\\r\\n\\t\\t<div class=\\\"clientslider\\\">\\r\\n\\t\\t\\t<section class=\\\"client-slider\\\">\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_23___ + \"\\\" width=\\\"149\\\" height=\\\"97\\\"\\r\\n\\t\\t\\t\\t\\t\\talt=\\\"Pioneer CLI\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_24___ + \"\\\" width=\\\"149\\\" height=\\\"97\\\"\\r\\n\\t\\t\\t\\t\\t\\talt=\\\"NMVX CLI\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_25___ + \"\\\" width=\\\"149\\\" height=\\\"97\\\"\\r\\n\\t\\t\\t\\t\\t\\talt=\\\"Atmax CLI\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_26___ + \"\\\" width=\\\"149\\\" height=\\\"97\\\"\\r\\n\\t\\t\\t\\t\\t\\talt=\\\"Usul Timur CLI\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_27___ + \"\\\" width=\\\"149\\\" height=\\\"97\\\"\\r\\n\\t\\t\\t\\t\\t\\talt=\\\"FTSLR CLI\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_28___ + \"\\\" width=\\\"149\\\" height=\\\"97\\\"\\r\\n\\t\\t\\t\\t\\t\\talt=\\\"Temor CLI\\\"></div>\\r\\n\\t\\t\\t\\t<div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_29___ + \"\\\" width=\\\"149\\\" height=\\\"97\\\"\\r\\n\\t\\t\\t\\t\\t\\talt=\\\"Granova CLI\\\"></div>\\r\\n\\t\\t\\t</section>\\r\\n\\t\\t</div>\\r\\n\\t</section>\\r\\n\\r\\n\\t<!-- Footer -->\\r\\n\\t<footer class=\\\"footer section\\\">\\r\\n\\t\\t<div class=\\\"footer__container container grid\\\">\\r\\n\\t\\t\\t<span class=\\\"footer__logo\\\">\\r\\n\\t\\t\\t\\t<img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" width=\\\"32\\\" height=\\\"32\\\" alt=\\\"Shoenix Studios's Logo\\\">\\r\\n\\t\\t\\t</span>\\r\\n\\r\\n\\t\\t\\t<!-- Icons -->\\r\\n\\t\\t\\t<div class=\\\"footer__content\\\">\\r\\n\\t\\t\\t\\t<h2 class=\\\"footer__title\\\">Sosial</h2>\\r\\n\\t\\t\\t\\t<ul class=\\\"footer__links\\\">\\r\\n\\t\\t\\t\\t\\t<li><a href=\\\"https://www.facebook.com/shoenixstudios\\\" target=\\\"_blank\\\" aria-label=\\\"Facebook\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\\"footer__link\\\">Facebook</a></li>\\r\\n\\t\\t\\t\\t\\t<li><a href=\\\"https://www.instagram.com/shoenix_studios/\\\" target=\\\"_blank\\\" aria-label=\\\"Instagram\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\\"footer__link\\\">Instagram</a></li>\\r\\n\\t\\t\\t\\t\\t<li><a href=\\\"https://www.youtube.com/@shoenixstudios\\\" target=\\\"_blank\\\" aria-label=\\\"Youtube\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\\"footer__link\\\">Youtube</a></li>\\r\\n\\t\\t\\t\\t\\t<li><a href=\\\"https://github.com/shoen1x\\\" target=\\\"_blank\\\" aria-label=\\\"Github\\\"\\r\\n\\t\\t\\t\\t\\t\\t\\tclass=\\\"footer__link\\\">Github</a>\\r\\n\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</div>\\r\\n\\r\\n\\t\\t\\t<div class=\\\"footer__content\\\">\\r\\n\\t\\t\\t\\t<h2 class=\\\"footer__title\\\">Navigasi</h2>\\r\\n\\r\\n\\t\\t\\t\\t<ul class=\\\"footer__links\\\">\\r\\n\\t\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\t\\t<a href=\\\"project\\\" target=\\\"_self\\\" aria-label=\\\"Project\\\" class=\\\"footer__link\\\">Projek</a>\\r\\n\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\t\\t<a href=\\\"#productcard\\\" target=\\\"_self\\\" aria-label=\\\"Products\\\" class=\\\"footer__link\\\">produk</a>\\r\\n\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\t\\t<a href=\\\"blog\\\" target=\\\"_self\\\" aria-label=\\\"Blog\\\" class=\\\"footer__link\\\">Blog</a>\\r\\n\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\r\\n\\t\\t\\t\\t<ul class=\\\"footer__copy\\\">\\r\\n\\t\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\t\\t<span class=\\\"footer__copy-link\\\">&copy; 2023 <strong>Shoenix Studios</strong> Hak Cipta Terpelihara</span>\\r\\n\\t\\t\\t\\t\\t\\t<span class=\\\"footer__copy-link\\\"><span id=\\\"versioning\\\"></span></br><span\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tid=\\\"revisioning\\\"></span></span>\\r\\n\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\r\\n\\t\\t\\t\\t<ul class=\\\"footer__links\\\">\\r\\n\\t\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\t\\t<label class=\\\"select-language\\\" for=\\\"langslct\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<select id=\\\"langslct\\\" required=\\\"required\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\\"\\\" disabled=\\\"disabled\\\" selected=\\\"selected\\\">Pilihan Bahasa</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\\"en\\\">Bahasa Inggeris</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\\"my\\\">Bahasa Melayu</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t</select>\\r\\n\\t\\t\\t\\t\\t\\t\\t<svg>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<use xlink:href=\\\"#select-arrow-down\\\"></use>\\r\\n\\t\\t\\t\\t\\t\\t\\t</svg>\\r\\n\\t\\t\\t\\t\\t\\t</label>\\r\\n\\t\\t\\t\\t\\t\\t<svg class=\\\"sprites-language\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<symbol id=\\\"select-arrow-down\\\" viewbox=\\\"0 0 10 6\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<polyline points=\\\"1 1 5 5 9 1\\\"></polyline>\\r\\n\\t\\t\\t\\t\\t\\t\\t</symbol>\\r\\n\\t\\t\\t\\t\\t\\t</svg>\\r\\n\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t</ul>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\r\\n\\t</footer>\\r\\n\\r\\n\\t<!-- Scripts -->\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_30___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_31___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_32___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_33___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_34___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_35___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_36___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js\\\"><\" + \"/script>\\r\\n\\t<\" + \"script type=\\\"module\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_37___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script type=\\\"module\\\" src=\\\"https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_38___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_39___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script type=\\\"text/javascript\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_40___ + \"\\\"><\" + \"/script>\\r\\n\\r\\n\\t<\" + \"script>\\r\\n\\t\\tfetch('webpack-assets.json')\\r\\n\\t\\t\\t.then(function (response) {\\r\\n\\t\\t\\t\\treturn response.json();\\r\\n\\t\\t\\t})\\r\\n\\t\\t\\t.then(function (data) {\\r\\n\\t\\t\\t\\tappendData(data);\\r\\n\\t\\t\\t})\\r\\n\\t\\t\\t.catch(function (err) {\\r\\n\\t\\t\\t\\tdocument.getElementById(\\\"versioning\\\").innerHTML = DOMPurify.sanitize('</br></br>Data versi hilang');\\r\\n\\t\\t\\t\\tdocument.getElementById(\\\"revisioning\\\").innerHTML = DOMPurify.sanitize('Data Semakan semula hilang');\\r\\n\\t\\t\\t\\tdocument.getElementById(\\\"dateup\\\").innerHTML = DOMPurify.sanitize('<br> Kemaskini Terbaharu: Gagal dimuatkan.');\\r\\n\\t\\t\\t\\tdocument.getElementById(\\\"projectup\\\").innerHTML = DOMPurify.sanitize('<br> Kemaskini Terbaharu: Gagal dimuatkan.');\\r\\n\\t\\t\\t});\\r\\n\\t\\tfunction appendData(data) {\\r\\n\\t\\t\\tdocument.getElementById(\\\"versioning\\\").innerHTML = DOMPurify.sanitize('</br></br>Binaan: <strong>' + data.metadata.version + '<strong>');\\r\\n\\t\\t\\tdocument.getElementById(\\\"revisioning\\\").innerHTML = DOMPurify.sanitize('Semakan: <strong>' + data.metadata.revision + '<strong>');\\r\\n\\t\\t\\tdocument.getElementById(\\\"dateup\\\").innerHTML = DOMPurify.sanitize('<br> Kemaskini Terbaharu: <strong>' + data.metadata.date + '<strong>');\\r\\n\\t\\t\\tdocument.getElementById(\\\"projectup\\\").innerHTML = DOMPurify.sanitize('<br> Kemaskini Terbaharu: <strong>' + data.metadata.date + '<strong>');\\r\\n\\t\\t}\\r\\n\\t<\" + \"/script>\\r\\n\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://revenant-formal/./src/my-MY/home.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://revenant-formal/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/assets/css/home.css":
/*!*********************************!*\
  !*** ./src/assets/css/home.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/home.css?");

/***/ }),

/***/ "./src/images/3D sync recursive \\.(glb%7Cwebp)$":
/*!*********************************************!*\
  !*** ./src/images/3D/ sync \.(glb%7Cwebp)$ ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./playcard.glb\": \"./src/images/3D/playcard.glb\",\n\t\"./poster-1.webp\": \"./src/images/3D/poster-1.webp\",\n\t\"./poster.webp\": \"./src/images/3D/poster.webp\",\n\t\"./valhalla.glb\": \"./src/images/3D/valhalla.glb\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images/3D sync recursive \\\\.(glb%7Cwebp)$\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/3D/_sync_\\.(glb%257Cwebp)$?");

/***/ }),

/***/ "./src/images/fulls sync recursive \\.webp$":
/*!****************************************!*\
  !*** ./src/images/fulls/ sync \.webp$ ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./01-full.webp\": \"./src/images/fulls/01-full.webp\",\n\t\"./02-full.webp\": \"./src/images/fulls/02-full.webp\",\n\t\"./03-full.webp\": \"./src/images/fulls/03-full.webp\",\n\t\"./04-full.webp\": \"./src/images/fulls/04-full.webp\",\n\t\"./05-full.webp\": \"./src/images/fulls/05-full.webp\",\n\t\"./06-full.webp\": \"./src/images/fulls/06-full.webp\",\n\t\"./ads/web-ad1.webp\": \"./src/images/fulls/ads/web-ad1.webp\",\n\t\"./ads/web-ad2.webp\": \"./src/images/fulls/ads/web-ad2.webp\",\n\t\"./ads/web-ad3.webp\": \"./src/images/fulls/ads/web-ad3.webp\",\n\t\"./ads/web-ad4.webp\": \"./src/images/fulls/ads/web-ad4.webp\",\n\t\"./ads/web-ad5.webp\": \"./src/images/fulls/ads/web-ad5.webp\",\n\t\"./full/ae/ae1.webp\": \"./src/images/fulls/full/ae/ae1.webp\",\n\t\"./full/ae/ae2.webp\": \"./src/images/fulls/full/ae/ae2.webp\",\n\t\"./full/ae/ae3.webp\": \"./src/images/fulls/full/ae/ae3.webp\",\n\t\"./full/ae/ae4.webp\": \"./src/images/fulls/full/ae/ae4.webp\",\n\t\"./full/bp1.webp\": \"./src/images/fulls/full/bp1.webp\",\n\t\"./full/bp10.webp\": \"./src/images/fulls/full/bp10.webp\",\n\t\"./full/bp11.webp\": \"./src/images/fulls/full/bp11.webp\",\n\t\"./full/bp12.webp\": \"./src/images/fulls/full/bp12.webp\",\n\t\"./full/bp2.webp\": \"./src/images/fulls/full/bp2.webp\",\n\t\"./full/bp3.webp\": \"./src/images/fulls/full/bp3.webp\",\n\t\"./full/bp4.webp\": \"./src/images/fulls/full/bp4.webp\",\n\t\"./full/bp5.webp\": \"./src/images/fulls/full/bp5.webp\",\n\t\"./full/bp6.webp\": \"./src/images/fulls/full/bp6.webp\",\n\t\"./full/bp7.webp\": \"./src/images/fulls/full/bp7.webp\",\n\t\"./full/bp8.webp\": \"./src/images/fulls/full/bp8.webp\",\n\t\"./full/bp9.webp\": \"./src/images/fulls/full/bp9.webp\",\n\t\"./full/cs/cs1.webp\": \"./src/images/fulls/full/cs/cs1.webp\",\n\t\"./full/cs/cs2.webp\": \"./src/images/fulls/full/cs/cs2.webp\",\n\t\"./full/cs/cs3.webp\": \"./src/images/fulls/full/cs/cs3.webp\",\n\t\"./full/cs/cs4.webp\": \"./src/images/fulls/full/cs/cs4.webp\",\n\t\"./full/cs/cs5.webp\": \"./src/images/fulls/full/cs/cs5.webp\",\n\t\"./full/cs/cs6.webp\": \"./src/images/fulls/full/cs/cs6.webp\",\n\t\"./full/cs/cs7.webp\": \"./src/images/fulls/full/cs/cs7.webp\",\n\t\"./full/cs/cs8.webp\": \"./src/images/fulls/full/cs/cs8.webp\",\n\t\"./full/cs/cs9.webp\": \"./src/images/fulls/full/cs/cs9.webp\",\n\t\"./full/csa/csa1.webp\": \"./src/images/fulls/full/csa/csa1.webp\",\n\t\"./full/csa/csa2.webp\": \"./src/images/fulls/full/csa/csa2.webp\",\n\t\"./full/csa/csa3.webp\": \"./src/images/fulls/full/csa/csa3.webp\",\n\t\"./full/csa/csa4.webp\": \"./src/images/fulls/full/csa/csa4.webp\",\n\t\"./full/csa/csa5.webp\": \"./src/images/fulls/full/csa/csa5.webp\",\n\t\"./full/csa/csa6.webp\": \"./src/images/fulls/full/csa/csa6.webp\",\n\t\"./full/csa/csa7.webp\": \"./src/images/fulls/full/csa/csa7.webp\",\n\t\"./full/csa/csa8.webp\": \"./src/images/fulls/full/csa/csa8.webp\",\n\t\"./full/csa/csa9.webp\": \"./src/images/fulls/full/csa/csa9.webp\",\n\t\"./full/hm/hm1.webp\": \"./src/images/fulls/full/hm/hm1.webp\",\n\t\"./full/hm/hm2.webp\": \"./src/images/fulls/full/hm/hm2.webp\",\n\t\"./full/hm/hm3.webp\": \"./src/images/fulls/full/hm/hm3.webp\",\n\t\"./full/hm/hm4.webp\": \"./src/images/fulls/full/hm/hm4.webp\",\n\t\"./full/hm/hm5.webp\": \"./src/images/fulls/full/hm/hm5.webp\",\n\t\"./full/hm/hm6.webp\": \"./src/images/fulls/full/hm/hm6.webp\",\n\t\"./full/hm/hm7.webp\": \"./src/images/fulls/full/hm/hm7.webp\",\n\t\"./full/ic/ic1.webp\": \"./src/images/fulls/full/ic/ic1.webp\",\n\t\"./full/ic/ic2.webp\": \"./src/images/fulls/full/ic/ic2.webp\",\n\t\"./full/ic/ic3.webp\": \"./src/images/fulls/full/ic/ic3.webp\",\n\t\"./full/ic/ic4.webp\": \"./src/images/fulls/full/ic/ic4.webp\",\n\t\"./full/ic/ic5.webp\": \"./src/images/fulls/full/ic/ic5.webp\",\n\t\"./full/ic/ic6.webp\": \"./src/images/fulls/full/ic/ic6.webp\",\n\t\"./full/ic/ic7.webp\": \"./src/images/fulls/full/ic/ic7.webp\",\n\t\"./full/na/na1.webp\": \"./src/images/fulls/full/na/na1.webp\",\n\t\"./full/na/na2.webp\": \"./src/images/fulls/full/na/na2.webp\",\n\t\"./full/na/na3.webp\": \"./src/images/fulls/full/na/na3.webp\",\n\t\"./full/na/na4.webp\": \"./src/images/fulls/full/na/na4.webp\",\n\t\"./full/na/na5.webp\": \"./src/images/fulls/full/na/na5.webp\",\n\t\"./full/na/na6.webp\": \"./src/images/fulls/full/na/na6.webp\",\n\t\"./full/nc/nc1.webp\": \"./src/images/fulls/full/nc/nc1.webp\",\n\t\"./full/nc/nc2.webp\": \"./src/images/fulls/full/nc/nc2.webp\",\n\t\"./full/nc/nc3.webp\": \"./src/images/fulls/full/nc/nc3.webp\",\n\t\"./full/nc/nc4.webp\": \"./src/images/fulls/full/nc/nc4.webp\",\n\t\"./full/nc/nc5.webp\": \"./src/images/fulls/full/nc/nc5.webp\",\n\t\"./full/nc/nc6.webp\": \"./src/images/fulls/full/nc/nc6.webp\",\n\t\"./full/nc/nc7.webp\": \"./src/images/fulls/full/nc/nc7.webp\",\n\t\"./full/nr/nr1.webp\": \"./src/images/fulls/full/nr/nr1.webp\",\n\t\"./full/nr/nr2.webp\": \"./src/images/fulls/full/nr/nr2.webp\",\n\t\"./full/nr/nr3.webp\": \"./src/images/fulls/full/nr/nr3.webp\",\n\t\"./full/ri/ri1.webp\": \"./src/images/fulls/full/ri/ri1.webp\",\n\t\"./full/ri/ri2.webp\": \"./src/images/fulls/full/ri/ri2.webp\",\n\t\"./full/ri/ri3.webp\": \"./src/images/fulls/full/ri/ri3.webp\",\n\t\"./full/rn/rn1.webp\": \"./src/images/fulls/full/rn/rn1.webp\",\n\t\"./full/rn/rn2.webp\": \"./src/images/fulls/full/rn/rn2.webp\",\n\t\"./full/rn/rn3.webp\": \"./src/images/fulls/full/rn/rn3.webp\",\n\t\"./full/rn/rn4.webp\": \"./src/images/fulls/full/rn/rn4.webp\",\n\t\"./full/rn/rn5.webp\": \"./src/images/fulls/full/rn/rn5.webp\",\n\t\"./full/st/st1.webp\": \"./src/images/fulls/full/st/st1.webp\",\n\t\"./full/st/st2.webp\": \"./src/images/fulls/full/st/st2.webp\",\n\t\"./full/st/st3.webp\": \"./src/images/fulls/full/st/st3.webp\",\n\t\"./full/st/st4.webp\": \"./src/images/fulls/full/st/st4.webp\",\n\t\"./full/st/st5.webp\": \"./src/images/fulls/full/st/st5.webp\",\n\t\"./full/st/st6.webp\": \"./src/images/fulls/full/st/st6.webp\",\n\t\"./full/st/st7.webp\": \"./src/images/fulls/full/st/st7.webp\",\n\t\"./full/st/st8.webp\": \"./src/images/fulls/full/st/st8.webp\",\n\t\"./full/st/st9.webp\": \"./src/images/fulls/full/st/st9.webp\",\n\t\"./full/th/th1.webp\": \"./src/images/fulls/full/th/th1.webp\",\n\t\"./full/th/th2.webp\": \"./src/images/fulls/full/th/th2.webp\",\n\t\"./full/th/th3.webp\": \"./src/images/fulls/full/th/th3.webp\",\n\t\"./full/th/th4.webp\": \"./src/images/fulls/full/th/th4.webp\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images/fulls sync recursive \\\\.webp$\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/_sync_\\.webp$?");

/***/ }),

/***/ "./src/images/og-images sync recursive (og-image).*\\.jpg$":
/*!*******************************************************!*\
  !*** ./src/images/og-images/ sync (og-image).*\.jpg$ ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./og-image-blog.jpg\": \"./src/images/og-images/og-image-blog.jpg\",\n\t\"./og-image-error.jpg\": \"./src/images/og-images/og-image-error.jpg\",\n\t\"./og-image-home.jpg\": \"./src/images/og-images/og-image-home.jpg\",\n\t\"./og-image-product.jpg\": \"./src/images/og-images/og-image-product.jpg\",\n\t\"./og-image-project.jpg\": \"./src/images/og-images/og-image-project.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images/og-images sync recursive (og-image).*\\\\.jpg$\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/og-images/_sync_(og-image).*\\.jpg$?");

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

/***/ "./src/assets/js/language.js":
/*!***********************************!*\
  !*** ./src/assets/js/language.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/language.js?v=cf56f96c16ea79b10ccf\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/language.js?");

/***/ }),

/***/ "./src/assets/js/util.js":
/*!*******************************!*\
  !*** ./src/assets/js/util.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/util.js?v=1c8670e8674d8dd72db4\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/util.js?");

/***/ }),

/***/ "./node_modules/dompurify/dist/purify.min.js":
/*!***************************************************!*\
  !*** ./node_modules/dompurify/dist/purify.min.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/purify.min.js?v=6b996bf860e92edec9b6\";\n\n//# sourceURL=webpack://revenant-formal/./node_modules/dompurify/dist/purify.min.js?");

/***/ }),

/***/ "./node_modules/focus-visible/dist/focus-visible.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/focus-visible/dist/focus-visible.min.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/focus-visible.min.js?v=d1860f814e7cdd80c60a\";\n\n//# sourceURL=webpack://revenant-formal/./node_modules/focus-visible/dist/focus-visible.min.js?");

/***/ }),

/***/ "./src/assets/css/noscript.css":
/*!*************************************!*\
  !*** ./src/assets/css/noscript.css ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/noscript.css?v=b88d04fba731603756b1\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/noscript.css?");

/***/ }),

/***/ "./src/assets/css/images/Pioneercli.svg":
/*!**********************************************!*\
  !*** ./src/assets/css/images/Pioneercli.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/Pioneercli.svg?v=70d9607699c8526eaa1c\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/images/Pioneercli.svg?");

/***/ }),

/***/ "./src/assets/css/images/client/atmaxcli.svg":
/*!***************************************************!*\
  !*** ./src/assets/css/images/client/atmaxcli.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/atmaxcli.svg?v=b4924655b7b7c20433da\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/images/client/atmaxcli.svg?");

/***/ }),

/***/ "./src/assets/css/images/client/ftslr.svg":
/*!************************************************!*\
  !*** ./src/assets/css/images/client/ftslr.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/ftslr.svg?v=eb932c79fa1752deada4\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/images/client/ftslr.svg?");

/***/ }),

/***/ "./src/assets/css/images/client/grvcli.svg":
/*!*************************************************!*\
  !*** ./src/assets/css/images/client/grvcli.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/grvcli.svg?v=7d505c640c8a3fa75802\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/images/client/grvcli.svg?");

/***/ }),

/***/ "./src/assets/css/images/client/nmvxcli.svg":
/*!**************************************************!*\
  !*** ./src/assets/css/images/client/nmvxcli.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/nmvxcli.svg?v=f042f78d35ea26be7280\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/images/client/nmvxcli.svg?");

/***/ }),

/***/ "./src/assets/css/images/client/temorcli.svg":
/*!***************************************************!*\
  !*** ./src/assets/css/images/client/temorcli.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/temorcli.svg?v=e2e1ec11a9b8f8d35303\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/images/client/temorcli.svg?");

/***/ }),

/***/ "./src/assets/css/images/client/usultimur.svg":
/*!****************************************************!*\
  !*** ./src/assets/css/images/client/usultimur.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/usultimur.svg?v=04a6c597689ffb60f5bc\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/images/client/usultimur.svg?");

/***/ }),

/***/ "./src/assets/css/images/nmvxshx.svg":
/*!*******************************************!*\
  !*** ./src/assets/css/images/nmvxshx.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/nmvxshx.svg?v=59116cec1bebbf23b19e\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/images/nmvxshx.svg?");

/***/ }),

/***/ "./src/assets/css/images/shoenixlab.svg":
/*!**********************************************!*\
  !*** ./src/assets/css/images/shoenixlab.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/shoenixlab.svg?v=791af3afb5d99149044c\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/images/shoenixlab.svg?");

/***/ }),

/***/ "./src/images/3D/playcard.glb":
/*!************************************!*\
  !*** ./src/images/3D/playcard.glb ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/3D/playcard.glb?v=4e20d97b99664ddca81e\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/3D/playcard.glb?");

/***/ }),

/***/ "./src/images/3D/poster-1.webp":
/*!*************************************!*\
  !*** ./src/images/3D/poster-1.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/poster-1.webp?v=0e3ef4636bd7c3c42957\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/3D/poster-1.webp?");

/***/ }),

/***/ "./src/images/3D/poster.webp":
/*!***********************************!*\
  !*** ./src/images/3D/poster.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/poster.webp?v=88a5f270696d5521b3d4\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/3D/poster.webp?");

/***/ }),

/***/ "./src/images/3D/valhalla.glb":
/*!************************************!*\
  !*** ./src/images/3D/valhalla.glb ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/3D/valhalla.glb?v=01d4a6893d9d9d14f48b\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/3D/valhalla.glb?");

/***/ }),

/***/ "./src/images/fulls/01-full.webp":
/*!***************************************!*\
  !*** ./src/images/fulls/01-full.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/01-full.webp?v=016ed6a796685c0b2ca3\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/01-full.webp?");

/***/ }),

/***/ "./src/images/fulls/02-full.webp":
/*!***************************************!*\
  !*** ./src/images/fulls/02-full.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/02-full.webp?v=c26648e962939d6532e7\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/02-full.webp?");

/***/ }),

/***/ "./src/images/fulls/03-full.webp":
/*!***************************************!*\
  !*** ./src/images/fulls/03-full.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/03-full.webp?v=03b4b8cc7632bb06a9c5\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/03-full.webp?");

/***/ }),

/***/ "./src/images/fulls/04-full.webp":
/*!***************************************!*\
  !*** ./src/images/fulls/04-full.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/04-full.webp?v=c042153c4463bab963f4\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/04-full.webp?");

/***/ }),

/***/ "./src/images/fulls/05-full.webp":
/*!***************************************!*\
  !*** ./src/images/fulls/05-full.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/05-full.webp?v=8ed89c4359705dbe438e\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/05-full.webp?");

/***/ }),

/***/ "./src/images/fulls/06-full.webp":
/*!***************************************!*\
  !*** ./src/images/fulls/06-full.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/06-full.webp?v=477fcfa333399012bb80\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/06-full.webp?");

/***/ }),

/***/ "./src/images/fulls/ads/web-ad1.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/ads/web-ad1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/web-ad1.webp?v=dbf40673d867165ddf2d\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/ads/web-ad1.webp?");

/***/ }),

/***/ "./src/images/fulls/ads/web-ad2.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/ads/web-ad2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/web-ad2.webp?v=5c6f760e695ae3cb1b55\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/ads/web-ad2.webp?");

/***/ }),

/***/ "./src/images/fulls/ads/web-ad3.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/ads/web-ad3.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/web-ad3.webp?v=1612f72398d0adf4c393\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/ads/web-ad3.webp?");

/***/ }),

/***/ "./src/images/fulls/ads/web-ad4.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/ads/web-ad4.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/web-ad4.webp?v=c1e6fb96d49b7131ec16\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/ads/web-ad4.webp?");

/***/ }),

/***/ "./src/images/fulls/ads/web-ad5.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/ads/web-ad5.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/web-ad5.webp?v=55f37b15c8f0ac958984\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/ads/web-ad5.webp?");

/***/ }),

/***/ "./src/images/fulls/full/ae/ae1.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/ae/ae1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ae1.webp?v=aa58f9832d1b3e74b8f8\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/ae/ae1.webp?");

/***/ }),

/***/ "./src/images/fulls/full/ae/ae2.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/ae/ae2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ae2.webp?v=fbae883651824cc9cb9f\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/ae/ae2.webp?");

/***/ }),

/***/ "./src/images/fulls/full/ae/ae3.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/ae/ae3.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ae3.webp?v=f88c26856024d10b68d8\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/ae/ae3.webp?");

/***/ }),

/***/ "./src/images/fulls/full/ae/ae4.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/ae/ae4.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ae4.webp?v=97ae3cbc901fc3d3ca27\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/ae/ae4.webp?");

/***/ }),

/***/ "./src/images/fulls/full/bp1.webp":
/*!****************************************!*\
  !*** ./src/images/fulls/full/bp1.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bp1.webp?v=efcab9fb387967eaaa60\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/bp1.webp?");

/***/ }),

/***/ "./src/images/fulls/full/bp10.webp":
/*!*****************************************!*\
  !*** ./src/images/fulls/full/bp10.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bp10.webp?v=76ba1ee817fed630753f\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/bp10.webp?");

/***/ }),

/***/ "./src/images/fulls/full/bp11.webp":
/*!*****************************************!*\
  !*** ./src/images/fulls/full/bp11.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bp11.webp?v=df8d19cd17e5250554ca\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/bp11.webp?");

/***/ }),

/***/ "./src/images/fulls/full/bp12.webp":
/*!*****************************************!*\
  !*** ./src/images/fulls/full/bp12.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bp12.webp?v=7ec91bc71c95aa6dfeef\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/bp12.webp?");

/***/ }),

/***/ "./src/images/fulls/full/bp2.webp":
/*!****************************************!*\
  !*** ./src/images/fulls/full/bp2.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bp2.webp?v=71646cf0fdb45e83eb4b\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/bp2.webp?");

/***/ }),

/***/ "./src/images/fulls/full/bp3.webp":
/*!****************************************!*\
  !*** ./src/images/fulls/full/bp3.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bp3.webp?v=1701c8bf2ba88cd611bb\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/bp3.webp?");

/***/ }),

/***/ "./src/images/fulls/full/bp4.webp":
/*!****************************************!*\
  !*** ./src/images/fulls/full/bp4.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bp4.webp?v=ad86c54fdbbef30f6319\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/bp4.webp?");

/***/ }),

/***/ "./src/images/fulls/full/bp5.webp":
/*!****************************************!*\
  !*** ./src/images/fulls/full/bp5.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bp5.webp?v=5f05e12413ad95b7ac49\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/bp5.webp?");

/***/ }),

/***/ "./src/images/fulls/full/bp6.webp":
/*!****************************************!*\
  !*** ./src/images/fulls/full/bp6.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bp6.webp?v=9f6f55a2807c067523b7\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/bp6.webp?");

/***/ }),

/***/ "./src/images/fulls/full/bp7.webp":
/*!****************************************!*\
  !*** ./src/images/fulls/full/bp7.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bp7.webp?v=cd5ac87ab8fb16e91e33\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/bp7.webp?");

/***/ }),

/***/ "./src/images/fulls/full/bp8.webp":
/*!****************************************!*\
  !*** ./src/images/fulls/full/bp8.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bp8.webp?v=80739376a03ed52fb18b\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/bp8.webp?");

/***/ }),

/***/ "./src/images/fulls/full/bp9.webp":
/*!****************************************!*\
  !*** ./src/images/fulls/full/bp9.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bp9.webp?v=3221053c7fae9148982b\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/bp9.webp?");

/***/ }),

/***/ "./src/images/fulls/full/cs/cs1.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/cs/cs1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cs1.webp?v=c5c2e6aa081e1c754e28\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/cs/cs1.webp?");

/***/ }),

/***/ "./src/images/fulls/full/cs/cs2.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/cs/cs2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cs2.webp?v=7862dbd50b452927fc6c\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/cs/cs2.webp?");

/***/ }),

/***/ "./src/images/fulls/full/cs/cs3.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/cs/cs3.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cs3.webp?v=6927c2766e1fcbf82bae\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/cs/cs3.webp?");

/***/ }),

/***/ "./src/images/fulls/full/cs/cs4.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/cs/cs4.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cs4.webp?v=880b967e92b6fb9e7bde\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/cs/cs4.webp?");

/***/ }),

/***/ "./src/images/fulls/full/cs/cs5.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/cs/cs5.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cs5.webp?v=949c2c13730a8c450ca4\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/cs/cs5.webp?");

/***/ }),

/***/ "./src/images/fulls/full/cs/cs6.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/cs/cs6.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cs6.webp?v=c7477e4aa91f5ac75f61\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/cs/cs6.webp?");

/***/ }),

/***/ "./src/images/fulls/full/cs/cs7.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/cs/cs7.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cs7.webp?v=f74e64a497b0a9c72d76\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/cs/cs7.webp?");

/***/ }),

/***/ "./src/images/fulls/full/cs/cs8.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/cs/cs8.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cs8.webp?v=c7dd92811014c5816652\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/cs/cs8.webp?");

/***/ }),

/***/ "./src/images/fulls/full/cs/cs9.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/cs/cs9.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cs9.webp?v=cdf58d2ef7f4371babd3\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/cs/cs9.webp?");

/***/ }),

/***/ "./src/images/fulls/full/csa/csa1.webp":
/*!*********************************************!*\
  !*** ./src/images/fulls/full/csa/csa1.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/csa1.webp?v=b99cf647ed761b48bd19\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/csa/csa1.webp?");

/***/ }),

/***/ "./src/images/fulls/full/csa/csa2.webp":
/*!*********************************************!*\
  !*** ./src/images/fulls/full/csa/csa2.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/csa2.webp?v=8bc8031c6bc27f577b73\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/csa/csa2.webp?");

/***/ }),

/***/ "./src/images/fulls/full/csa/csa3.webp":
/*!*********************************************!*\
  !*** ./src/images/fulls/full/csa/csa3.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/csa3.webp?v=0c129de38f92ab8dcbee\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/csa/csa3.webp?");

/***/ }),

/***/ "./src/images/fulls/full/csa/csa4.webp":
/*!*********************************************!*\
  !*** ./src/images/fulls/full/csa/csa4.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/csa4.webp?v=760851deba16f3a052e8\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/csa/csa4.webp?");

/***/ }),

/***/ "./src/images/fulls/full/csa/csa5.webp":
/*!*********************************************!*\
  !*** ./src/images/fulls/full/csa/csa5.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/csa5.webp?v=664e6ca22f316f87a10e\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/csa/csa5.webp?");

/***/ }),

/***/ "./src/images/fulls/full/csa/csa6.webp":
/*!*********************************************!*\
  !*** ./src/images/fulls/full/csa/csa6.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/csa6.webp?v=3549cd07f480aa21b635\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/csa/csa6.webp?");

/***/ }),

/***/ "./src/images/fulls/full/csa/csa7.webp":
/*!*********************************************!*\
  !*** ./src/images/fulls/full/csa/csa7.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/csa7.webp?v=a67c65832fb8f752f1e4\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/csa/csa7.webp?");

/***/ }),

/***/ "./src/images/fulls/full/csa/csa8.webp":
/*!*********************************************!*\
  !*** ./src/images/fulls/full/csa/csa8.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/csa8.webp?v=f31c3e266f23bacb6cec\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/csa/csa8.webp?");

/***/ }),

/***/ "./src/images/fulls/full/csa/csa9.webp":
/*!*********************************************!*\
  !*** ./src/images/fulls/full/csa/csa9.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/csa9.webp?v=bc4d84d8664da2c16ac3\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/csa/csa9.webp?");

/***/ }),

/***/ "./src/images/fulls/full/hm/hm1.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/hm/hm1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/hm1.webp?v=3fc4310533ec427a8876\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/hm/hm1.webp?");

/***/ }),

/***/ "./src/images/fulls/full/hm/hm2.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/hm/hm2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/hm2.webp?v=0d2a5ad484698d1d3ff8\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/hm/hm2.webp?");

/***/ }),

/***/ "./src/images/fulls/full/hm/hm3.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/hm/hm3.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/hm3.webp?v=b8bbb423e8ba1cdbf1cb\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/hm/hm3.webp?");

/***/ }),

/***/ "./src/images/fulls/full/hm/hm4.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/hm/hm4.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/hm4.webp?v=916787cfb52b2a5b805e\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/hm/hm4.webp?");

/***/ }),

/***/ "./src/images/fulls/full/hm/hm5.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/hm/hm5.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/hm5.webp?v=9295c39149c57b803ce8\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/hm/hm5.webp?");

/***/ }),

/***/ "./src/images/fulls/full/hm/hm6.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/hm/hm6.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/hm6.webp?v=b6fe0cddbac9be7c4b8b\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/hm/hm6.webp?");

/***/ }),

/***/ "./src/images/fulls/full/hm/hm7.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/hm/hm7.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/hm7.webp?v=156aea32169e820a8138\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/hm/hm7.webp?");

/***/ }),

/***/ "./src/images/fulls/full/ic/ic1.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/ic/ic1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ic1.webp?v=baebf18c98fe3da46634\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/ic/ic1.webp?");

/***/ }),

/***/ "./src/images/fulls/full/ic/ic2.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/ic/ic2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ic2.webp?v=8b2cb883ba0a5426d068\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/ic/ic2.webp?");

/***/ }),

/***/ "./src/images/fulls/full/ic/ic3.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/ic/ic3.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ic3.webp?v=f76bc3bfef1d65483e22\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/ic/ic3.webp?");

/***/ }),

/***/ "./src/images/fulls/full/ic/ic4.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/ic/ic4.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ic4.webp?v=f0a7b2ae454361bae281\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/ic/ic4.webp?");

/***/ }),

/***/ "./src/images/fulls/full/ic/ic5.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/ic/ic5.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ic5.webp?v=8f209e8cc273bb4ab80f\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/ic/ic5.webp?");

/***/ }),

/***/ "./src/images/fulls/full/ic/ic6.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/ic/ic6.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ic6.webp?v=2e7ea4d5ab9088c73fc0\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/ic/ic6.webp?");

/***/ }),

/***/ "./src/images/fulls/full/ic/ic7.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/ic/ic7.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ic7.webp?v=4d88672b478f67c2a747\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/ic/ic7.webp?");

/***/ }),

/***/ "./src/images/fulls/full/na/na1.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/na/na1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/na1.webp?v=7f5df79c8b9a5fce7984\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/na/na1.webp?");

/***/ }),

/***/ "./src/images/fulls/full/na/na2.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/na/na2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/na2.webp?v=400e427fc42fba9dc2ac\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/na/na2.webp?");

/***/ }),

/***/ "./src/images/fulls/full/na/na3.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/na/na3.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/na3.webp?v=bdb03f99584e2e536509\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/na/na3.webp?");

/***/ }),

/***/ "./src/images/fulls/full/na/na4.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/na/na4.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/na4.webp?v=b099bb70180233366eb6\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/na/na4.webp?");

/***/ }),

/***/ "./src/images/fulls/full/na/na5.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/na/na5.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/na5.webp?v=91af8b746a9582361505\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/na/na5.webp?");

/***/ }),

/***/ "./src/images/fulls/full/na/na6.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/na/na6.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/na6.webp?v=514b7a791370e31626d3\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/na/na6.webp?");

/***/ }),

/***/ "./src/images/fulls/full/nc/nc1.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/nc/nc1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/nc1.webp?v=2ea0e5460da972ef6b6e\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/nc/nc1.webp?");

/***/ }),

/***/ "./src/images/fulls/full/nc/nc2.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/nc/nc2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/nc2.webp?v=dcc2e2ea9a247b40eb93\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/nc/nc2.webp?");

/***/ }),

/***/ "./src/images/fulls/full/nc/nc3.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/nc/nc3.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/nc3.webp?v=3e22dcd33b9ac166054e\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/nc/nc3.webp?");

/***/ }),

/***/ "./src/images/fulls/full/nc/nc4.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/nc/nc4.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/nc4.webp?v=d8f358652b0841c9563d\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/nc/nc4.webp?");

/***/ }),

/***/ "./src/images/fulls/full/nc/nc5.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/nc/nc5.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/nc5.webp?v=c7fad2356078c16625ae\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/nc/nc5.webp?");

/***/ }),

/***/ "./src/images/fulls/full/nc/nc6.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/nc/nc6.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/nc6.webp?v=3fa3134b44a9568c4db0\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/nc/nc6.webp?");

/***/ }),

/***/ "./src/images/fulls/full/nc/nc7.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/nc/nc7.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/nc7.webp?v=cae37d3d44613fa13c51\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/nc/nc7.webp?");

/***/ }),

/***/ "./src/images/fulls/full/nr/nr1.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/nr/nr1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/nr1.webp?v=3f05407760e639b86611\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/nr/nr1.webp?");

/***/ }),

/***/ "./src/images/fulls/full/nr/nr2.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/nr/nr2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/nr2.webp?v=318d5db7cee090fce431\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/nr/nr2.webp?");

/***/ }),

/***/ "./src/images/fulls/full/nr/nr3.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/nr/nr3.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/nr3.webp?v=75d547cfa94f4a948859\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/nr/nr3.webp?");

/***/ }),

/***/ "./src/images/fulls/full/ri/ri1.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/ri/ri1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ri1.webp?v=cbac2664fdb852632309\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/ri/ri1.webp?");

/***/ }),

/***/ "./src/images/fulls/full/ri/ri2.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/ri/ri2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ri2.webp?v=b514aa4a892eb3eb33e6\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/ri/ri2.webp?");

/***/ }),

/***/ "./src/images/fulls/full/ri/ri3.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/ri/ri3.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ri3.webp?v=8116e19b3f81a68fbd84\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/ri/ri3.webp?");

/***/ }),

/***/ "./src/images/fulls/full/rn/rn1.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/rn/rn1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/rn1.webp?v=ea35eed8376a16f29d57\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/rn/rn1.webp?");

/***/ }),

/***/ "./src/images/fulls/full/rn/rn2.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/rn/rn2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/rn2.webp?v=f61cf398e3d4b720b36a\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/rn/rn2.webp?");

/***/ }),

/***/ "./src/images/fulls/full/rn/rn3.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/rn/rn3.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/rn3.webp?v=daed748d456aec5a899e\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/rn/rn3.webp?");

/***/ }),

/***/ "./src/images/fulls/full/rn/rn4.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/rn/rn4.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/rn4.webp?v=c6a7ae62b332c110baee\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/rn/rn4.webp?");

/***/ }),

/***/ "./src/images/fulls/full/rn/rn5.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/rn/rn5.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/rn5.webp?v=0b043f754b6f0ac33cc7\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/rn/rn5.webp?");

/***/ }),

/***/ "./src/images/fulls/full/st/st1.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/st/st1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/st1.webp?v=6149e5cc14e95e69be9f\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/st/st1.webp?");

/***/ }),

/***/ "./src/images/fulls/full/st/st2.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/st/st2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/st2.webp?v=8c92233c31b77cf3a929\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/st/st2.webp?");

/***/ }),

/***/ "./src/images/fulls/full/st/st3.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/st/st3.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/st3.webp?v=1c71debdf16add29348c\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/st/st3.webp?");

/***/ }),

/***/ "./src/images/fulls/full/st/st4.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/st/st4.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/st4.webp?v=e208414bfdbbcd8828aa\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/st/st4.webp?");

/***/ }),

/***/ "./src/images/fulls/full/st/st5.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/st/st5.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/st5.webp?v=b2544b4c8b44bbaac30e\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/st/st5.webp?");

/***/ }),

/***/ "./src/images/fulls/full/st/st6.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/st/st6.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/st6.webp?v=4f8f43e792d48c7cf7f0\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/st/st6.webp?");

/***/ }),

/***/ "./src/images/fulls/full/st/st7.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/st/st7.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/st7.webp?v=be9e2dd8fc4d07275bc3\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/st/st7.webp?");

/***/ }),

/***/ "./src/images/fulls/full/st/st8.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/st/st8.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/st8.webp?v=fb98fb2b47a3512d91a2\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/st/st8.webp?");

/***/ }),

/***/ "./src/images/fulls/full/st/st9.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/st/st9.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/st9.webp?v=45f04ae43a0168b87c47\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/st/st9.webp?");

/***/ }),

/***/ "./src/images/fulls/full/th/th1.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/th/th1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/th1.webp?v=9dcab3be6e238f389867\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/th/th1.webp?");

/***/ }),

/***/ "./src/images/fulls/full/th/th2.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/th/th2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/th2.webp?v=44f57f66ee4f7fa0e77b\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/th/th2.webp?");

/***/ }),

/***/ "./src/images/fulls/full/th/th3.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/th/th3.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/th3.webp?v=5d8be30f5cfa41c64688\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/th/th3.webp?");

/***/ }),

/***/ "./src/images/fulls/full/th/th4.webp":
/*!*******************************************!*\
  !*** ./src/images/fulls/full/th/th4.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/th4.webp?v=bb3065a13139d6bf24f5\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/th/th4.webp?");

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

/***/ "./src/images/og-images/og-image-blog.jpg":
/*!************************************************!*\
  !*** ./src/images/og-images/og-image-blog.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/og-image/og-image-blog.jpg?v=3f6efcc985b92b7ca904\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/og-images/og-image-blog.jpg?");

/***/ }),

/***/ "./src/images/og-images/og-image-error.jpg":
/*!*************************************************!*\
  !*** ./src/images/og-images/og-image-error.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/og-image/og-image-error.jpg?v=c4eb49e4732671ee92c5\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/og-images/og-image-error.jpg?");

/***/ }),

/***/ "./src/images/og-images/og-image-home.jpg":
/*!************************************************!*\
  !*** ./src/images/og-images/og-image-home.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/og-image/og-image-home.jpg?v=4e11110a8b9fbb9b58c0\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/og-images/og-image-home.jpg?");

/***/ }),

/***/ "./src/images/og-images/og-image-product.jpg":
/*!***************************************************!*\
  !*** ./src/images/og-images/og-image-product.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/og-image/og-image-product.jpg?v=d9d5e184c4b590c7ecb6\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/og-images/og-image-product.jpg?");

/***/ }),

/***/ "./src/images/og-images/og-image-project.jpg":
/*!***************************************************!*\
  !*** ./src/images/og-images/og-image-project.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/og-image/og-image-project.jpg?v=99594af8600f55ee4a19\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/og-images/og-image-project.jpg?");

/***/ }),

/***/ "./src/images/revenant-typeform.svg":
/*!******************************************!*\
  !*** ./src/images/revenant-typeform.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/svg/revenant-typeform.svg?v=59d0bc32b8124c0fde14\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/revenant-typeform.svg?");

/***/ }),

/***/ "./src/images/thumbs/01.webp":
/*!***********************************!*\
  !*** ./src/images/thumbs/01.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/01.webp?v=7a177460252ad36b2892\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/thumbs/01.webp?");

/***/ }),

/***/ "./src/images/thumbs/02.webp":
/*!***********************************!*\
  !*** ./src/images/thumbs/02.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/02.webp?v=73e188bfd8181b16aa3c\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/thumbs/02.webp?");

/***/ }),

/***/ "./src/images/thumbs/03.webp":
/*!***********************************!*\
  !*** ./src/images/thumbs/03.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/03.webp?v=020e7c726724d22e314b\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/thumbs/03.webp?");

/***/ }),

/***/ "./src/images/thumbs/04.webp":
/*!***********************************!*\
  !*** ./src/images/thumbs/04.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/04.webp?v=d2322f9fba54abfaa03b\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/thumbs/04.webp?");

/***/ }),

/***/ "./src/images/thumbs/05.webp":
/*!***********************************!*\
  !*** ./src/images/thumbs/05.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/05.webp?v=fc92c98d689c5bf695b2\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/thumbs/05.webp?");

/***/ }),

/***/ "./src/images/thumbs/06.webp":
/*!***********************************!*\
  !*** ./src/images/thumbs/06.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/06.webp?v=f2e2aa321f5d34f1691d\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/thumbs/06.webp?");

/***/ }),

/***/ "./src/images/thumbs/blog_wp_small.webp":
/*!**********************************************!*\
  !*** ./src/images/thumbs/blog_wp_small.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/blog_wp_small.webp?v=85b0ddd3edda612a3c66\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/thumbs/blog_wp_small.webp?");

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
/******/ 			"home": 0
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
/******/ 	__webpack_require__("./src/en-MY/home.html");
/******/ 	__webpack_require__("./src/my-MY/home.html");
/******/ 	__webpack_require__("./src/assets/js/home.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/css/home.css");
/******/ 	
/******/ })()
;