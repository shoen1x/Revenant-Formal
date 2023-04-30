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

/***/ "./src/assets/js/project.js":
/*!**********************************!*\
  !*** ./src/assets/js/project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n(function ($) {\n  // Importer\n  var importAll = function importAll(require) {\n    return require.keys().reduce(function (acc, next) {\n      acc[next.replace(\"../../\", \"\")] = require(next);\n      return acc;\n    }, {});\n  };\n  var pro_images = importAll(__webpack_require__(\"./src/images/fulls/full sync recursive \\\\.webp$\"));\n\n  //  Disable Mobile Experiences\n  function isMobile() {\n    return /(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));\n  }\n\n  // -----------------------------------------\n\n  // Draw new canvas and images\n  function canvasfpro(gic, gifn) {\n    for (var _i = 0; _i < gic; _i++) {\n      var pfigure = document.createElement(\"figure\");\n      var pimg = document.createElement(\"img\");\n      var pfigc = document.createElement(\"figcaption\");\n      document.querySelector('.gallery').appendChild(pfigure);\n      pfigure.className = \"gallery-image\";\n      pfigure.appendChild(pimg);\n      pfigure.appendChild(pfigc);\n      pimg.src = \"images/\" + gifn + (_i + 1) + \".webp\";\n      pfigc.innerHTML = DOMPurify.sanitize(_i + 1);\n      document.getElementById('app').scrollIntoView();\n    }\n  }\n\n  // Remove Child and reset canvas\n  function removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n      parent.removeChild(parent.firstChild);\n    }\n  }\n\n  // Replace carousel to grid images\n  $('.Card__link').on('click', function () {\n    var caroldata = $(this).data(\"pcarou\");\n    var gal = document.querySelector('.gallery');\n    removeAllChildNodes(gal);\n    switch (caroldata) {\n      case 1:\n        document.querySelector('#p-title').innerHTML = DOMPurify.sanitize(\"Johor Darul Ta'zim Concept Jersey\");\n        canvasfpro(9, \"st\");\n        break;\n      case 2:\n        document.querySelector('#p-title').innerHTML = DOMPurify.sanitize(\"Istinggar\");\n        canvasfpro(7, \"ic\");\n        break;\n      case 3:\n        document.querySelector('#p-title').innerHTML = DOMPurify.sanitize(\"Aerophantom Earbud\");\n        canvasfpro(4, \"ae\");\n        break;\n      case 4:\n        document.querySelector('#p-title').innerHTML = DOMPurify.sanitize(\"Nordic Axe\");\n        canvasfpro(6, \"na\");\n        break;\n      case 5:\n        document.querySelector('#p-title').innerHTML = DOMPurify.sanitize(\"Harimau Malaya Jersey Concept\");\n        canvasfpro(7, \"hm\");\n        break;\n      case 6:\n        document.querySelector('#p-title').innerHTML = DOMPurify.sanitize(\"Kelantan Home Jersey Concept\");\n        canvasfpro(9, \"cs\");\n        break;\n      case 7:\n        document.querySelector('#p-title').innerHTML = DOMPurify.sanitize(\"Kelantan Away Jersey Concept\");\n        canvasfpro(9, \"csa\");\n        break;\n      case 8:\n        document.querySelector('#p-title').innerHTML = DOMPurify.sanitize(\"Twin Fangs Sword\");\n        canvasfpro(5, \"rn\");\n        break;\n      case 9:\n        document.querySelector('#p-title').innerHTML = DOMPurify.sanitize(\"Genesis Phantom Skateboard Concept\");\n        canvasfpro(7, \"nc\");\n        break;\n      case 10:\n        document.querySelector('#p-title').innerHTML = DOMPurify.sanitize(\"Isometric Room\");\n        canvasfpro(3, \"ri\");\n        break;\n      case 11:\n        document.querySelector('#p-title').innerHTML = DOMPurify.sanitize(\"Hausboom X Shoenix Studios\");\n        canvasfpro(4, \"th\");\n        break;\n      case 12:\n        document.querySelector('#p-title').innerHTML = DOMPurify.sanitize(\"NeoRonin Techwear Concept\");\n        canvasfpro(3, \"nr\");\n        break;\n    }\n    startcanvas();\n    $('#app').removeClass(\"Hidden\");\n  });\n\n  //Image Grid\n  function startcanvas() {\n    var elApp = document.querySelector(\"#app\");\n    var elImages = Array.from(document.querySelectorAll(\".gallery-image\"));\n    var elDetail = document.querySelector(\".detail\");\n    function flipImages(firstEl, lastEl, change) {\n      var firstRect = firstEl.getBoundingClientRect();\n      var lastRect = lastEl.getBoundingClientRect();\n      var deltaX = firstRect.left - lastRect.left;\n      var deltaY = firstRect.top - lastRect.top;\n      var deltaW = firstRect.width / lastRect.width;\n      var deltaH = firstRect.height / lastRect.height;\n      change();\n      lastEl.parentElement.dataset.flipping = true;\n      var animation = lastEl.animate([{\n        transform: \"translateX(\".concat(deltaX, \"px) translateY(\").concat(deltaY, \"px) scaleX(\").concat(deltaW, \") scaleY(\").concat(deltaH, \")\")\n      }, {\n        transform: 'none'\n      }], {\n        duration: 600,\n        // milliseconds\n        easing: 'cubic-bezier(.2, 0, .3, 1)'\n      });\n      animation.onfinish = function () {\n        delete lastEl.parentElement.dataset.flipping;\n      };\n    }\n    elImages.forEach(function (figure) {\n      figure.addEventListener(\"click\", function () {\n        var elImage = figure.querySelector('img');\n        elDetail.innerHTML = DOMPurify.sanitize(\"\");\n        var elClone = figure.cloneNode(true);\n        elDetail.appendChild(elClone);\n        var elCloneImage = elClone.querySelector('img');\n        flipImages(elImage, elCloneImage, function () {\n          elApp.dataset.state = \"detail\";\n        });\n        function revert() {\n          flipImages(elCloneImage, elImage, function () {\n            elApp.dataset.state = \"gallery\";\n            elDetail.removeEventListener('click', revert);\n          });\n        }\n        elDetail.addEventListener('click', revert);\n      });\n    });\n  }\n  ;\n\n  // Header news like hero\n  var mainPosts = document.querySelectorAll(\".main-post\");\n  var posts = document.querySelectorAll(\".post\");\n  var i = 0;\n  var postIndex = 0;\n  var currentPost = posts[postIndex];\n  var currentMainPost = mainPosts[postIndex];\n  var progressInterval = setInterval(progress, 100); // 180\n\n  function progress() {\n    if (i === 100) {\n      i = -5;\n      // reset progress bar\n      currentPost.querySelector(\".progress-bar__fill\").style.width = 0;\n      document.querySelector(\".progress-bar--primary .progress-bar__fill\").style.width = 0;\n      currentPost.classList.remove(\"post--active\");\n      postIndex++;\n      currentMainPost.classList.add(\"main-post--not-active\");\n      currentMainPost.classList.remove(\"main-post--active\");\n\n      // reset postIndex to loop over the slides again\n      if (postIndex === posts.length) {\n        postIndex = 0;\n      }\n      currentPost = posts[postIndex];\n      currentMainPost = mainPosts[postIndex];\n    } else {\n      i++;\n      currentPost.querySelector(\".progress-bar__fill\").style.width = \"\".concat(i, \"%\");\n      document.querySelector(\".progress-bar--primary .progress-bar__fill\").style.width = \"\".concat(i, \"%\");\n      currentPost.classList.add(\"post--active\");\n      currentMainPost.classList.add(\"main-post--active\");\n      currentMainPost.classList.remove(\"main-post--not-active\");\n    }\n  }\n\n  // Carousel Bottom Select Project\n  (function () {\n    // Respect user perference\n    var isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\n\n    // Helper to apply inline CSS\n    var setStyleProps = function setStyleProps($el, styles) {\n      for (var _i2 = 0, _Object$entries = Object.entries(styles); _i2 < _Object$entries.length; _i2++) {\n        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),\n          key = _Object$entries$_i[0],\n          value = _Object$entries$_i[1];\n        if (value === false) {\n          $el.style.removeProperty(key);\n        } else {\n          $el.style.setProperty(key, value);\n        }\n      }\n    };\n    document.querySelectorAll('.Carousel').forEach(function ($carousel) {\n      $carousel.scrollLeft = 0;\n      var $cards = Array.from($carousel.querySelectorAll('.Card'));\n      var $pagination = $carousel.nextElementSibling;\n      var _$pagination$querySel = $pagination.querySelectorAll('.Arrow'),\n        _$pagination$querySel2 = _slicedToArray(_$pagination$querySel, 2),\n        $previous = _$pagination$querySel2[0],\n        $next = _$pagination$querySel2[1];\n      $pagination.querySelector('.Dot').classList.add('Dot--active');\n      var $start = document.createElement('div');\n      var $end = document.createElement('div');\n      $carousel.prepend($start);\n      $carousel.append($end);\n      var observer = new IntersectionObserver(function (entries) {\n        entries.forEach(function (entry) {\n          if (entry.target === $start) {\n            if ($previous) {\n              $previous.disabled = entry.isIntersecting;\n            }\n          }\n          if (entry.target === $end) {\n            if ($next) {\n              $next.disabled = entry.isIntersecting;\n            }\n          }\n        });\n      });\n      observer.observe($start);\n      observer.observe($end);\n      var scrollTo = function scrollTo($card) {\n        var offset = getOffset($card);\n        var left = document.dir === 'rtl' ? -offset : offset;\n        var behavior = isReducedMotion ? 'auto' : 'smooth';\n        $carousel.scrollTo({\n          left: left,\n          behavior: behavior\n        });\n      };\n      var getOffset = function getOffset($el) {\n        var offset = $el.offsetLeft;\n        if (document.dir === 'rtl') {\n          offset = $carousel.offsetWidth - (offset + $el.offsetWidth);\n        }\n        return offset;\n      };\n      $previous.addEventListener('click', function (ev) {\n        ev.preventDefault();\n        var $card = $cards[0];\n        var scroll = Math.abs($carousel.scrollLeft);\n        $cards.forEach(function ($item) {\n          var offset = getOffset($item);\n          if (offset - scroll < -1 && offset > getOffset($card)) {\n            $card = $item;\n          }\n        });\n        scrollTo($card);\n      });\n      $next.addEventListener('click', function (ev) {\n        ev.preventDefault();\n        var $card = $cards[$cards.length - 1];\n        var scroll = Math.abs($carousel.scrollLeft);\n        $cards.forEach(function ($item) {\n          var offset = getOffset($item);\n          if (offset - scroll > 1 && offset < getOffset($card)) {\n            $card = $item;\n          }\n        });\n        scrollTo($card);\n      });\n      $pagination.addEventListener('click', function (ev) {\n        if (ev.target.classList.contains('Dot')) {\n          ev.preventDefault();\n          var _$card = document.querySelector(new URL(ev.target.href).hash);\n          if (_$card) scrollTo(_$card);\n        }\n      });\n\n      // Highlight nearest \"Dot\" in pagination\n      var scrollTimeout;\n      $carousel.addEventListener('scroll', function () {\n        clearTimeout(scrollTimeout);\n        scrollTimeout = setTimeout(function () {\n          var _$active;\n          var $dot = $pagination.querySelector('.Dot--active');\n          if ($dot) $dot.classList.remove('Dot--active');\n          var $active;\n          var scroll = Math.abs($carousel.scrollLeft);\n          if (scroll <= 0) {\n            $active = $cards[0];\n          }\n          if (scroll >= $carousel.scrollWidth - $carousel.offsetWidth) {\n            $active = $cards[$cards.length - 1];\n          }\n          if (!$active) {\n            var oldDiff;\n            $cards.forEach(function ($card) {\n              var newDiff = Math.abs(scroll - getOffset($card));\n              if (!$active || newDiff < oldDiff) {\n                $active = $card;\n                oldDiff = newDiff;\n              }\n            });\n          }\n          $dot = $pagination.querySelector(\"[href=\\\"#\".concat(((_$active = $active) !== null && _$active !== void 0 ? _$active : $card[0]).id, \"\\\"]\"));\n          if ($dot) $dot.classList.add('Dot--active');\n        }, 50);\n      }, {\n        passive: true\n      });\n\n      // Improve arrow key navigation\n      $carousel.addEventListener('keydown', function (ev) {\n        if (/^(Arrow)?Left$/.test(ev.key)) {\n          ev.preventDefault();\n          (document.dir === 'rtl' ? $next : $previous).click();\n        } else if (/(Arrow)?Right$/.test(ev.key)) {\n          ev.preventDefault();\n          (document.dir === 'rtl' ? $previous : $next).click();\n        }\n      });\n\n      // Improve transition when tabbing focus\n\n      // let scrollLeft = 0;\n      // $carousel.addEventListener(\n      //   'blur',\n      //   (ev) => {\n      //     scrollLeft = $carousel.scrollLeft;\n      //   },\n      //   { capture: true }\n      // );\n      // $carousel.addEventListener(\n      //   'focus',\n      //   (ev) => {\n      //     $carousel.scrollLeft = scrollLeft;\n      //     const $card = ev.target.closest('.Card');\n      //     if ($card) scrollTo($card);\n      //   },\n      //   { capture: true }\n      // );\n    });\n  })();\n\n  // Video Carousel | Owl\n  var videoSlider = $('.owl-carousel');\n  videoSlider.owlCarousel({\n    loop: true,\n    video: true,\n    merge: true,\n    margin: 10,\n    lazyLoad: true,\n    nav: true,\n    dots: true,\n    items: 1,\n    center: true\n  });\n\n  // // Optional polyfill for Safari 14\n  // if (!isReducedMotion && !window.CSS.supports('scroll-behavior: smooth')) {\n  //   import('https://cdn.skypack.dev/smoothscroll-polyfill').then((module) => {\n  //     module.polyfill();\n  //   });\n  // }\n})(jQuery);\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/project.js?");

/***/ }),

/***/ "./src/en-MY/project.html":
/*!********************************!*\
  !*** ./src/en-MY/project.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css */ \"./node_modules/owl.carousel/dist/assets/owl.carousel.min.css\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/apple-touch-icon.png */ \"./src/images/ico/apple-touch-icon.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/favicon.ico */ \"./src/images/ico/favicon.ico\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/favicon-32x32.png */ \"./src/images/ico/favicon-32x32.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/favicon-16x16.png */ \"./src/images/ico/favicon-16x16.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/site.webmanifest */ \"./src/images/ico/site.webmanifest\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/safari-pinned-tab.svg */ \"./src/images/ico/safari-pinned-tab.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/noscript.css */ \"./src/assets/css/noscript.css\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/shoenix.svg */ \"./src/images/ico/shoenix.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/full/rn/rn2.webp */ \"./src/images/fulls/full/rn/rn2.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/kemaskini.webp */ \"./src/images/thumbs/kemaskini.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/full/ic/ic3.webp */ \"./src/images/fulls/full/ic/ic3.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/full/bp1.webp */ \"./src/images/fulls/full/bp1.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/full/bp2.webp */ \"./src/images/fulls/full/bp2.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/full/bp3.webp */ \"./src/images/fulls/full/bp3.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/full/bp4.webp */ \"./src/images/fulls/full/bp4.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/full/bp5.webp */ \"./src/images/fulls/full/bp5.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/full/bp6.webp */ \"./src/images/fulls/full/bp6.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/full/bp7.webp */ \"./src/images/fulls/full/bp7.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/full/bp8.webp */ \"./src/images/fulls/full/bp8.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/full/bp9.webp */ \"./src/images/fulls/full/bp9.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/full/bp10.webp */ \"./src/images/fulls/full/bp10.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/full/bp11.webp */ \"./src/images/fulls/full/bp11.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fulls/full/bp12.webp */ \"./src/images/fulls/full/bp12.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../images/video/vm_comp-1c.webp */ \"./src/images/video/vm_comp-1c.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../images/video/vm_comp-1.webm */ \"./src/images/video/vm_comp-1.webm\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../images/video/vm_comp-2c.webp */ \"./src/images/video/vm_comp-2c.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../images/video/vm_comp-2.webm */ \"./src/images/video/vm_comp-2.webm\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../images/video/vm_comp-3c.webp */ \"./src/images/video/vm_comp-3c.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../images/video/vm_comp-3.webm */ \"./src/images/video/vm_comp-3.webm\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../images/video/vm_comp-4c.webp */ \"./src/images/video/vm_comp-4c.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ../images/video/vm_comp-4.webm */ \"./src/images/video/vm_comp-4.webm\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.min.js */ \"./src/assets/js/jquery.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.poptrox.min.js */ \"./src/assets/js/jquery.poptrox.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.scrolly.min.js */ \"./src/assets/js/jquery.scrolly.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.scrollex.min.js */ \"./src/assets/js/jquery.scrollex.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/browser.min.js */ \"./src/assets/js/browser.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/breakpoints.min.js */ \"./src/assets/js/breakpoints.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ../../../node_modules/owl.carousel/dist/owl.carousel.min.js */ \"./node_modules/owl.carousel/dist/owl.carousel.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/util.js */ \"./src/assets/js/util.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/language.js */ \"./src/assets/js/language.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_41___ = new URL(/* asset import */ __webpack_require__(/*! ../../../node_modules/dompurify/dist/purify.min.js */ \"./node_modules/dompurify/dist/purify.min.js\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);\nvar ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);\nvar ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);\nvar ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);\nvar ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);\nvar ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);\nvar ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);\nvar ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);\nvar ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);\nvar ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);\nvar ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);\nvar ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);\nvar ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);\nvar ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);\nvar ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);\nvar ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);\nvar ___HTML_LOADER_REPLACEMENT_34___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_34___);\nvar ___HTML_LOADER_REPLACEMENT_35___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_35___);\nvar ___HTML_LOADER_REPLACEMENT_36___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_36___);\nvar ___HTML_LOADER_REPLACEMENT_37___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_37___);\nvar ___HTML_LOADER_REPLACEMENT_38___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_38___);\nvar ___HTML_LOADER_REPLACEMENT_39___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_39___);\nvar ___HTML_LOADER_REPLACEMENT_40___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_40___);\nvar ___HTML_LOADER_REPLACEMENT_41___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_41___);\nvar code = \"<!DOCTYPE HTML>\\r\\n<!--\\r\\n\\tRevenant Formal by NMVX\\r\\n\\tShoen1x.github.io | @Shoenixstudios\\r\\n\\tunder the CCA 3.0 License | Credit to HTML5 UP for template\\r\\n-->\\r\\n\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <!--Title-->\\r\\n  <title>Projects | Shoenix Studios</title>\\r\\n\\r\\n  <!--Meta and linker-->\\r\\n  <meta http-equiv=Content-Type content=text/html; charset=utf-8 />\\r\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\" />\\r\\n  <meta name=\\\"viewport\\\" user-scalable=\\\"yes\\\" content=\\\"width=device-width, initial-scale=1.0, minimum-scale=1.0\\\" />\\r\\n  <meta name=\\\"theme-color\\\" media=\\\"(prefers-color-scheme: dark)\\\" content=\\\"black\\\" />\\r\\n  <meta name=\\\"keywords\\\" content=\\\"Shoenix, Shoenix Studios, NMVX, Revenant's Formal, Revenant Formal, NemesisV\\\">\\r\\n  <meta name=\\\"description\\\" content=\\\"Collection of experimental projects by NMVX | Shoenix Studios.\\\">\\r\\n  <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\\\" />\\r\\n  <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" />\\r\\n  <link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/x-icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\">\\r\\n  <link rel=\\\"manifest\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\">\\r\\n  <link rel=\\\"mask-icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" color=\\\"#5bbad5\\\">\\r\\n  <meta name=\\\"msapplication-TileColor\\\" content=\\\"../images/ico/browserconfig.xml\\\">\\r\\n  <meta name=\\\"format-detection\\\" content=\\\"telephone=no\\\">\\r\\n\\r\\n  <!-- Social Media metadata -->\\r\\n  <meta property=\\\"og:type\\\" content=\\\"website\\\">\\r\\n  <meta property=\\\"og:image:type\\\" content=\\\"image/png\\\">\\r\\n  <meta property=\\\"og:image:width\\\" content=\\\"1563\\\">\\r\\n  <meta property=\\\"og:image:height\\\" content=\\\"818\\\">\\r\\n  <meta property=\\\"og:description\\\" content=\\\"Collection of arts made by Shoenix Studios\\\">\\r\\n  <meta property=\\\"og:title\\\" content=\\\"Project | Shoenix Studios\\\">\\r\\n  <meta property=\\\"og:url\\\" content=\\\"https://shoenix-studios.web.app/project\\\">\\r\\n  <meta property=\\\"og:image\\\" content=\\\"https://shoenix-studios.web.app/images/og-image/og-image-project.jpg\\\">\\r\\n  <meta property=\\\"og:locale\\\" content=\\\"en_MY\\\">\\r\\n  <meta property=\\\"og:site_name\\\" content=\\\"Project\\\">\\r\\n\\r\\n  <meta name=\\\"twitter:card\\\" content=\\\"summary_large_image\\\">\\r\\n  <meta property=\\\"twitter:domain\\\" content=\\\"shoenix-studios.web.app\\\">\\r\\n  <meta property=\\\"twitter:url\\\" content=\\\"https://shoenix-studios.web.app/project\\\">\\r\\n  <meta name=\\\"twitter:title\\\" content=\\\"Project | Shoenix Studios\\\">\\r\\n  <meta name=\\\"twitter:description\\\" content=\\\"Collection of arts made by Shoenix Studios\\\">\\r\\n  <meta name=\\\"twitter:image\\\" content=\\\"https://shoenix-studios.web.app/images/og-image/og-image-project.jpg\\\">\\r\\n\\r\\n  <!--No script-->\\r\\n  <noscript>\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" />\\r\\n  </noscript>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n\\r\\n  <!-- Header -->\\r\\n  <header class=\\\"header\\\" id=\\\"header\\\">\\r\\n    <nav class=\\\"nav container\\\">\\r\\n      <a title=\\\"Home\\\" href=\\\"home\\\" target=\\\"_self\\\" aria-label=\\\"Home\\\" class=\\\"nav__logo\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" height=\\\"32\\\" width=\\\"32\\\" alt=\\\"\\\">\\r\\n      </a>\\r\\n      <span>Project | <strong>Shoenix Studios</strong></span>\\r\\n    </nav>\\r\\n  </header>\\r\\n\\r\\n  <div class=\\\"carousel-news\\\">\\r\\n    <div class=\\\"progress-bar progress-bar--primary hide-on-desktop\\\">\\r\\n      <div class=\\\"progress-bar__fill\\\"></div>\\r\\n    </div>\\r\\n\\r\\n    <header class=\\\"main-post-wrapper\\\">\\r\\n\\r\\n      <div class=\\\"slides\\\">\\r\\n        <article class=\\\"main-post main-post--active\\\">\\r\\n          <div class=\\\"main-post__image\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" width=\\\"2048\\\" height=\\\"1080\\\" alt=\\\"Double sword in cinematic shots\\\" />\\r\\n          </div>\\r\\n          <div class=\\\"main-post__content\\\">\\r\\n            <div class=\\\"main-post__tag-wrapper\\\">\\r\\n              <span class=\\\"main-post__tag\\\">New Project</span>\\r\\n            </div>\\r\\n            <h1 class=\\\"main-post__title\\\">Twin Fangs Sword - Concept Art</h1>\\r\\n            <a class=\\\"main-post__link\\\" href=\\\"https://www.artstation.com/artwork/w08zg5\\\" target=\\\"_blank\\\">\\r\\n              <span class=\\\"main-post__link-text\\\">View in artstation</span>\\r\\n              <svg class=\\\"main-post__link-icon main-post__link-icon--arrow\\\" width=\\\"37\\\" height=\\\"12\\\" viewBox=\\\"0 0 37 12\\\"\\r\\n                fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n                <path d=\\\"M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11\\\" stroke=\\\"white\\\" />\\r\\n              </svg>\\r\\n            </a>\\r\\n          </div>\\r\\n        </article>\\r\\n        <article class=\\\"main-post main-post--not-active\\\">\\r\\n          <div class=\\\"main-post__image\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" width=\\\"2048\\\" height=\\\"1080\\\"\\r\\n              alt=\\\"AeroPhantom Earbuds conceptual design\\\" />\\r\\n          </div>\\r\\n          <div class=\\\"main-post__content\\\">\\r\\n            <div class=\\\"main-post__tag-wrapper\\\">\\r\\n              <span class=\\\"main-post__tag\\\">Projects</span>\\r\\n            </div>\\r\\n            <h1 class=\\\"main-post__title\\\">New Projects Added</h1>\\r\\n            <a class=\\\"main-post__link\\\" href=\\\"#card-3\\\">\\r\\n              <!-- <svg class=\\\"main-post__link-icon main-post__link-icon--play-btn\\\" width=\\\"30\\\" height=\\\"30\\\"\\r\\n                viewBox=\\\"0 0 20 20\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n                <circle cx=\\\"10\\\" cy=\\\"10\\\" r=\\\"9\\\" stroke=\\\"#C20000\\\" stroke-width=\\\"2\\\" />\\r\\n                <path d=\\\"M14 10L8 6V14L14 10Z\\\" fill=\\\"white\\\" />\\r\\n              </svg> -->\\r\\n              <span class=\\\"main-post__link-text\\\">Find out more</span>\\r\\n              <svg class=\\\"main-post__link-icon main-post__link-icon--arrow\\\" width=\\\"37\\\" height=\\\"12\\\" viewBox=\\\"0 0 37 12\\\"\\r\\n                fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n                <path d=\\\"M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11\\\" stroke=\\\"white\\\" />\\r\\n              </svg>\\r\\n            </a>\\r\\n          </div>\\r\\n        </article>\\r\\n        <article class=\\\"main-post main-post--not-active\\\">\\r\\n          <div class=\\\"main-post__image\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" width=\\\"2048\\\" height=\\\"1280\\\" alt=\\\"Istinggar malay musket rifle\\\" />\\r\\n          </div>\\r\\n          <div class=\\\"main-post__content\\\">\\r\\n            <div class=\\\"main-post__tag-wrapper\\\">\\r\\n              <span class=\\\"main-post__tag\\\">Update</span>\\r\\n            </div>\\r\\n            <h1 class=\\\"main-post__title\\\">Updated 'Istinggar' design and textures.\\r\\n            </h1>\\r\\n            <a class=\\\"main-post__link\\\" href=\\\"#card-3\\\">\\r\\n              <span class=\\\"main-post__link-text\\\">find out more</span>\\r\\n              <svg class=\\\"main-post__link-icon main-post__link-icon--arrow\\\" width=\\\"37\\\" height=\\\"12\\\" viewBox=\\\"0 0 37 12\\\"\\r\\n                fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n                <path d=\\\"M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11\\\" stroke=\\\"white\\\" />\\r\\n              </svg>\\r\\n            </a>\\r\\n          </div>\\r\\n        </article>\\r\\n      </div>\\r\\n    </header>\\r\\n\\r\\n    <div class=\\\"posts-wrapper hide-on-mobile\\\">\\r\\n      <article class=\\\"post post--active\\\">\\r\\n        <div class=\\\"progress-bar\\\">\\r\\n          <div class=\\\"progress-bar__fill\\\"></div>\\r\\n        </div>\\r\\n        <header class=\\\"post__header\\\">\\r\\n          <span class=\\\"post__tag\\\"><strong>New Project</strong></span>\\r\\n          <p class=\\\"post__published\\\">28 February 2023</p>\\r\\n        </header>\\r\\n        <h2 class=\\\"post__title\\\">New project | Twin Fangs Sword concept art - Based on shinku old design, remade and\\r\\n          adjusted in more proper shapes.\\r\\n        </h2>\\r\\n      </article>\\r\\n      <article class=\\\"post\\\">\\r\\n        <div class=\\\"progress-bar\\\">\\r\\n          <div class=\\\"progress-bar__fill\\\"></div>\\r\\n        </div>\\r\\n        <header class=\\\"post__header\\\">\\r\\n          <span class=\\\"post__tag\\\"><strong>Existing Projects added</strong></span>\\r\\n          <p class=\\\"post__published\\\">31 Mac 2023</p>\\r\\n        </header>\\r\\n        <h2 class=\\\"post__title\\\">Added new projects (<strong>GenesisPhantom Skateboard | Isometric Room | Hausboom\\r\\n            Beverages | NeoRonin Garments</strong>).</h2>\\r\\n      </article>\\r\\n      <article class=\\\"post\\\">\\r\\n        <div class=\\\"progress-bar\\\">\\r\\n          <div class=\\\"progress-bar__fill\\\"></div>\\r\\n        </div>\\r\\n        <header class=\\\"post__header\\\">\\r\\n          <span class=\\\"post__tag\\\"><strong>Update</strong></span>\\r\\n          <p class=\\\"post__published\\\">04 Mac 2023</p>\\r\\n        </header>\\r\\n        <h2 class=\\\"post__title\\\">Updated version of Istinggar, re-rendered in cycles X and retouch in photoshop.\\r\\n        </h2>\\r\\n      </article>\\r\\n    </div>\\r\\n  </div>\\r\\n  <main class=\\\"Main\\\">\\r\\n    <h1>All New Projects</h1>\\r\\n\\r\\n    <!-- <div class=\\\"breadcrumb-container\\\">\\r\\n      <ul class=\\\"breadcrumb\\\">\\r\\n        <li class=\\\"breadcrumb__item breadcrumb__item-firstChild\\\">\\r\\n          <span class=\\\"breadcrumb__inner\\\">\\r\\n            <span class=\\\"breadcrumb__title\\\">1</span>\\r\\n          </span>\\r\\n        </li>\\r\\n        <li class=\\\"breadcrumb__item breadcrumb__item-lastChild\\\">\\r\\n          <span class=\\\"breadcrumb__inner\\\">\\r\\n            <span class=\\\"breadcrumb__title\\\">2</span>\\r\\n          </span>\\r\\n        </li>\\r\\n      </ul>\\r\\n    </div> -->\\r\\n\\r\\n    <section class=\\\"Carousel\\\" id=\\\"carousel\\\" tabindex=\\\"-1\\\">\\r\\n      <h2 class=\\\"Hidden\\\">Carousel</h2>\\r\\n      <article class=\\\"Card Card--overlay Card--square\\\" id=\\\"card-1\\\">\\r\\n        <div class=\\\"Card__media\\\">\\r\\n          <img class=\\\"Card__image\\\" alt=\\\"Card 1\\\" width=\\\"512\\\" height=\\\"448\\\" loading=\\\"lazy\\\"\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\">\\r\\n        </div>\\r\\n        <div class=\\\"Card__main\\\">\\r\\n          <h2 class=\\\"Card__heading\\\"><a class=\\\"Card__link\\\" data-pcarou=\\\"1\\\">JDT Concept</a></h2>\\r\\n          <p class=\\\"Card__desc\\\">Johor Darul Ta'zim Jersey Concept.</p>\\r\\n        </div>\\r\\n      </article>\\r\\n      <article class=\\\"Card Card--overlay Card--square\\\" id=\\\"card-2\\\">\\r\\n        <div class=\\\"Card__media\\\">\\r\\n          <img class=\\\"Card__image\\\" alt=\\\"Card 2\\\" width=\\\"512\\\" height=\\\"448\\\" loading=\\\"lazy\\\"\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\">\\r\\n        </div>\\r\\n        <div class=\\\"Card__main\\\">\\r\\n          <h2 class=\\\"Card__heading\\\"><a class=\\\"Card__link\\\" data-pcarou=\\\"2\\\">Istinggar</a></h2>\\r\\n          <p class=\\\"Card__desc\\\">Istinggar | Musket - Malay's old age rifle.</p>\\r\\n        </div>\\r\\n      </article>\\r\\n      <article class=\\\"Card Card--overlay Card--square\\\" id=\\\"card-3\\\">\\r\\n        <div class=\\\"Card__media\\\">\\r\\n          <img class=\\\"Card__image\\\" alt=\\\"Card 3\\\" width=\\\"512\\\" height=\\\"448\\\" loading=\\\"lazy\\\"\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\">\\r\\n        </div>\\r\\n        <div class=\\\"Card__main\\\">\\r\\n          <h2 class=\\\"Card__heading\\\"><a class=\\\"Card__link\\\" data-pcarou=\\\"3\\\">Aerophantom Earbuds</a></h2>\\r\\n          <p class=\\\"Card__desc\\\">AeroPhantom Earbuds concept design.</p>\\r\\n        </div>\\r\\n      </article>\\r\\n      <article class=\\\"Card Card--overlay Card--square\\\" id=\\\"card-4\\\">\\r\\n        <div class=\\\"Card__media\\\">\\r\\n          <img class=\\\"Card__image\\\" alt=\\\"Card 4\\\" width=\\\"512\\\" height=\\\"448\\\" loading=\\\"lazy\\\"\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\">\\r\\n        </div>\\r\\n        <div class=\\\"Card__main\\\">\\r\\n          <h2 class=\\\"Card__heading\\\"><a class=\\\"Card__link\\\" data-pcarou=\\\"4\\\">Nordic Axe</a></h2>\\r\\n          <p class=\\\"Card__desc\\\">Nordic axe game art concept.</p>\\r\\n        </div>\\r\\n      </article>\\r\\n      <article class=\\\"Card Card--overlay Card--square\\\" id=\\\"card-5\\\">\\r\\n        <div class=\\\"Card__media\\\">\\r\\n          <img class=\\\"Card__image\\\" alt=\\\"Card 5\\\" width=\\\"512\\\" height=\\\"448\\\" loading=\\\"lazy\\\"\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\">\\r\\n        </div>\\r\\n        <div class=\\\"Card__main\\\">\\r\\n          <h2 class=\\\"Card__heading\\\"><a class=\\\"Card__link\\\" data-pcarou=\\\"5\\\">Harimau Malaya</a></h2>\\r\\n          <p class=\\\"Card__desc\\\">Harimau Malaya jersey concept.</p>\\r\\n        </div>\\r\\n      </article>\\r\\n      <article class=\\\"Card Card--overlay Card--square\\\" id=\\\"card-6\\\">\\r\\n        <div class=\\\"Card__media\\\">\\r\\n          <img class=\\\"Card__image\\\" alt=\\\"Card 6\\\" width=\\\"512\\\" height=\\\"448\\\" loading=\\\"lazy\\\"\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\">\\r\\n        </div>\\r\\n        <div class=\\\"Card__main\\\">\\r\\n          <h2 class=\\\"Card__heading\\\"><a class=\\\"Card__link\\\" data-pcarou=\\\"6\\\">Kelantan Home</a></h2>\\r\\n          <p class=\\\"Card__desc\\\">Conceptual home design jersey for Kelantan FC - 2022.</p>\\r\\n        </div>\\r\\n      </article>\\r\\n      <article class=\\\"Card Card--overlay Card--square\\\" id=\\\"card-7\\\">\\r\\n        <div class=\\\"Card__media\\\">\\r\\n          <img class=\\\"Card__image\\\" alt=\\\"Card 7\\\" width=\\\"512\\\" height=\\\"448\\\" loading=\\\"lazy\\\"\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\">\\r\\n        </div>\\r\\n        <div class=\\\"Card__main\\\">\\r\\n          <h2 class=\\\"Card__heading\\\"><a class=\\\"Card__link\\\" data-pcarou=\\\"7\\\">Kelantan Away</a></h2>\\r\\n          <p class=\\\"Card__desc\\\">Conceptual away design jersey for Kelantan FC - 2022.</p>\\r\\n        </div>\\r\\n      </article>\\r\\n      <article class=\\\"Card Card--overlay Card--square\\\" id=\\\"card-8\\\">\\r\\n        <div class=\\\"Card__media\\\">\\r\\n          <img class=\\\"Card__image\\\" alt=\\\"Card 8\\\" width=\\\"512\\\" height=\\\"448\\\" loading=\\\"lazy\\\"\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\">\\r\\n        </div>\\r\\n        <div class=\\\"Card__main\\\">\\r\\n          <h2 class=\\\"Card__heading\\\"><a class=\\\"Card__link\\\" data-pcarou=\\\"8\\\">Twin Fangs Sword</a></h2>\\r\\n          <p class=\\\"Card__desc\\\">Futuristic Sword 3d concept design.</p>\\r\\n        </div>\\r\\n      </article>\\r\\n      <article class=\\\"Card Card--overlay Card--square\\\" id=\\\"card-9\\\">\\r\\n        <div class=\\\"Card__media\\\">\\r\\n          <img class=\\\"Card__image\\\" alt=\\\"Card 9\\\" width=\\\"512\\\" height=\\\"448\\\" loading=\\\"lazy\\\"\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\">\\r\\n        </div>\\r\\n        <div class=\\\"Card__main\\\">\\r\\n          <h2 class=\\\"Card__heading\\\"><a class=\\\"Card__link\\\" data-pcarou=\\\"9\\\">GenesisPhantom</a></h2>\\r\\n          <p class=\\\"Card__desc\\\">GenesisPhantom Skateboard Concept.</p>\\r\\n        </div>\\r\\n      </article>\\r\\n      <article class=\\\"Card Card--overlay Card--square\\\" id=\\\"card-10\\\">\\r\\n        <div class=\\\"Card__media\\\">\\r\\n          <img class=\\\"Card__image\\\" alt=\\\"Card 10\\\" width=\\\"512\\\" height=\\\"448\\\" loading=\\\"lazy\\\"\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_21___ + \"\\\">\\r\\n        </div>\\r\\n        <div class=\\\"Card__main\\\">\\r\\n          <h2 class=\\\"Card__heading\\\"><a class=\\\"Card__link\\\" data-pcarou=\\\"10\\\">Isometric Room</a></h2>\\r\\n          <p class=\\\"Card__desc\\\">Revamped Isometric Room 2022.</p>\\r\\n        </div>\\r\\n      </article>\\r\\n      <article class=\\\"Card Card--overlay Card--square\\\" id=\\\"card-11\\\">\\r\\n        <div class=\\\"Card__media\\\">\\r\\n          <img class=\\\"Card__image\\\" alt=\\\"Card 11\\\" width=\\\"512\\\" height=\\\"448\\\" loading=\\\"lazy\\\"\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_22___ + \"\\\">\\r\\n        </div>\\r\\n        <div class=\\\"Card__main\\\">\\r\\n          <h2 class=\\\"Card__heading\\\"><a class=\\\"Card__link\\\" data-pcarou=\\\"11\\\">Hausboom Beverages</a></h2>\\r\\n          <p class=\\\"Card__desc\\\">Hausboom X Shoenix Studios Concept.</p>\\r\\n        </div>\\r\\n      </article>\\r\\n      <article class=\\\"Card Card--overlay Card--square\\\" id=\\\"card-12\\\">\\r\\n        <div class=\\\"Card__media\\\">\\r\\n          <img class=\\\"Card__image\\\" alt=\\\"Card 12\\\" width=\\\"512\\\" height=\\\"448\\\" loading=\\\"lazy\\\"\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_23___ + \"\\\">\\r\\n        </div>\\r\\n        <div class=\\\"Card__main\\\">\\r\\n          <h2 class=\\\"Card__heading\\\"><a class=\\\"Card__link\\\" data-pcarou=\\\"12\\\">NeoRonin</a></h2>\\r\\n          <p class=\\\"Card__desc\\\">NeoRonin Techwear Concept.</p>\\r\\n        </div>\\r\\n      </article>\\r\\n    </section>\\r\\n    <!--/Carousel-->\\r\\n\\r\\n    <nav class=\\\"Pagination\\\">\\r\\n      <!-- <h2 class=\\\"Hidden\\\">Carousel Navigation</h2> -->\\r\\n      <button class=\\\"Arrow\\\" type=\\\"button\\\" aria-controls=\\\"carousel\\\" disabled>\\r\\n        <svg width=\\\"16\\\" height=\\\"16\\\" viewBox=\\\"0 0 16 16\\\" role=\\\"presentation\\\">\\r\\n          <path fill-rule=\\\"evenodd\\\"\\r\\n            d=\\\"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z\\\" />\\r\\n        </svg>\\r\\n        <span class=\\\"Hidden\\\">Previous slide</span>\\r\\n      </button>\\r\\n      <button class=\\\"Arrow\\\" type=\\\"button\\\" aria-controls=\\\"carousel\\\" disabled>\\r\\n        <svg width=\\\"16\\\" height=\\\"16\\\" viewBox=\\\"0 0 16 16\\\" role=\\\"presentation\\\">\\r\\n          <path fill-rule=\\\"evenodd\\\"\\r\\n            d=\\\"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z\\\" />\\r\\n        </svg>\\r\\n        <span class=\\\"Hidden\\\">Next slide</span>\\r\\n      </button>\\r\\n      <div class=\\\"Dots\\\">\\r\\n        <a href=\\\"#card-1\\\" class=\\\"Dot\\\" tabindex=\\\"-1\\\"><span class=\\\"Hidden\\\">Slide 1</span></a>\\r\\n        <a href=\\\"#card-2\\\" class=\\\"Dot\\\" tabindex=\\\"-1\\\"><span class=\\\"Hidden\\\">Slide 2</span></a>\\r\\n        <a href=\\\"#card-3\\\" class=\\\"Dot\\\" tabindex=\\\"-1\\\"><span class=\\\"Hidden\\\">Slide 3</span></a>\\r\\n        <a href=\\\"#card-4\\\" class=\\\"Dot\\\" tabindex=\\\"-1\\\"><span class=\\\"Hidden\\\">Slide 4</span></a>\\r\\n        <a href=\\\"#card-5\\\" class=\\\"Dot\\\" tabindex=\\\"-1\\\"><span class=\\\"Hidden\\\">Slide 5</span></a>\\r\\n        <a href=\\\"#card-6\\\" class=\\\"Dot\\\" tabindex=\\\"-1\\\"><span class=\\\"Hidden\\\">Slide 6</span></a>\\r\\n        <a href=\\\"#card-7\\\" class=\\\"Dot\\\" tabindex=\\\"-1\\\"><span class=\\\"Hidden\\\">Slide 7</span></a>\\r\\n        <a href=\\\"#card-8\\\" class=\\\"Dot\\\" tabindex=\\\"-1\\\"><span class=\\\"Hidden\\\">Slide 8</span></a>\\r\\n        <a href=\\\"#card-9\\\" class=\\\"Dot\\\" tabindex=\\\"-1\\\"><span class=\\\"Hidden\\\">Slide 9</span></a>\\r\\n        <a href=\\\"#card-10\\\" class=\\\"Dot\\\" tabindex=\\\"-1\\\"><span class=\\\"Hidden\\\">Slide 10</span></a>\\r\\n        <a href=\\\"#card-11\\\" class=\\\"Dot\\\" tabindex=\\\"-1\\\"><span class=\\\"Hidden\\\">Slide 11</span></a>\\r\\n        <a href=\\\"#card-12\\\" class=\\\"Dot\\\" tabindex=\\\"-1\\\"><span class=\\\"Hidden\\\">Slide 12</span></a>\\r\\n      </div>\\r\\n    </nav>\\r\\n    <!--/Pagination-->\\r\\n\\r\\n    <h1 id=\\\"p-title\\\"><!-- Project title will be here --></h1>\\r\\n    <div id=\\\"app\\\" class=\\\"Hidden\\\" data-state=\\\"gallery\\\">\\r\\n      <div class=\\\"gallery\\\">\\r\\n        <!-- new elements nodes will be created here -->\\r\\n      </div>\\r\\n      <div class=\\\"detail\\\">\\r\\n        <!--   cloned figure/image goes here!   -->\\r\\n      </div>\\r\\n    </div>\\r\\n\\r\\n    <footer style=\\\"margin-top: 8px; text-align: center;\\\">\\r\\n      <hr>\\r\\n      <p style=\\\"margin-top: 8px;\\\"><small>Revenant's Formal | © 2023 <a href=\\\"https://shoenix-studios.web.app/home\\\"\\r\\n            target=\\\"_blank\\\">Shoenix Studios</a> | <a href=\\\"https://behance.com/nmvx\\\" target=\\\"_blank\\\">NMVX</a>\\r\\n          <br>SVG from <a href=\\\"https://icons.getbootstrap.com\\\" target=\\\"_blank\\\">Bootstrap Icons</a></small></p>\\r\\n          <br>\\r\\n    </footer>\\r\\n\\r\\n    <hr>\\r\\n    <h1>Videos Gallery</h1>\\r\\n    <main class=\\\"video-wrapper\\\">\\r\\n      <div class=\\\"video-slider-mask\\\"></div>\\r\\n      <div class=\\\"owl-carousel owl-theme manual\\\" id=\\\"videos\\\">\\r\\n        <div class=\\\"item\\\" data-merge=\\\"2\\\">\\r\\n          <video class=\\\"video-item\\\" preload=\\\"auto\\\" controls width=\\\"100%\\\" height=\\\"1080\\\" poster=\\\"\" + ___HTML_LOADER_REPLACEMENT_24___ + \"\\\" data-description=\\\"Lorem ipsum dolor amet\\\" loop>\\r\\n            <source\\r\\n              src=\\\"\" + ___HTML_LOADER_REPLACEMENT_25___ + \"\\\"\\r\\n              type=\\\"video/webm\\\">\\r\\n          </video>\\r\\n        </div>\\r\\n        <div class=\\\"item\\\" data-merge=\\\"2\\\">\\r\\n          <video class=\\\"video-item\\\" preload=\\\"auto\\\" controls width=\\\"100%\\\" height=\\\"1080\\\" poster=\\\"\" + ___HTML_LOADER_REPLACEMENT_26___ + \"\\\" data-description=\\\"Lorem ipsum dolor amet\\\" loop>\\r\\n            <source\\r\\n              src=\\\"\" + ___HTML_LOADER_REPLACEMENT_27___ + \"\\\"\\r\\n              type=\\\"video/webm\\\">\\r\\n          </video>\\r\\n        </div>\\r\\n        <div class=\\\"item\\\" data-merge=\\\"2\\\">\\r\\n          <video class=\\\"video-item\\\" preload=\\\"auto\\\" controls width=\\\"100%\\\" height=\\\"1080\\\" poster=\\\"\" + ___HTML_LOADER_REPLACEMENT_28___ + \"\\\" data-description=\\\"Lorem ipsum dolor amet\\\" loop>\\r\\n            <source\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_29___ + \"\\\"\\r\\n            type=\\\"video/webm\\\">\\r\\n          </video>\\r\\n        </div>\\r\\n        <div class=\\\"item\\\" data-merge=\\\"2\\\">\\r\\n          <video class=\\\"video-item\\\" preload=\\\"auto\\\" controls width=\\\"100%\\\" height=\\\"1080\\\" poster=\\\"\" + ___HTML_LOADER_REPLACEMENT_30___ + \"\\\" data-description=\\\"Lorem ipsum dolor amet\\\" loop>\\r\\n            <source\\r\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_31___ + \"\\\"\\r\\n            type=\\\"video/webm\\\">\\r\\n          </video>\\r\\n        </div>\\r\\n      </div>\\r\\n    </main>\\r\\n\\r\\n  </main>\\r\\n\\r\\n  <footer class=\\\"footer section\\\">\\r\\n    <div class=\\\"footer__container container grid\\\">\\r\\n      <span class=\\\"footer__logo\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" width=\\\"32\\\" height=\\\"32\\\" alt=\\\"Shoenix Studios's Logo\\\">\\r\\n      </span>\\r\\n\\r\\n      <!-- Icons -->\\r\\n      <div class=\\\"footer__content\\\">\\r\\n        <h2 class=\\\"footer__title\\\">Socials</h2>\\r\\n        <ul class=\\\"footer__links\\\">\\r\\n          <li><a href=\\\"https://www.facebook.com/shoenixstudios\\\" target=\\\"_blank\\\" aria-label=\\\"Facebook\\\"\\r\\n              class=\\\"footer__link\\\">Facebook</a></li>\\r\\n          <li><a href=\\\"https://www.instagram.com/shoenix_studios/\\\" target=\\\"_blank\\\" aria-label=\\\"Instagram\\\"\\r\\n              class=\\\"footer__link\\\">Instagram</a></li>\\r\\n          <li><a href=\\\"https://www.youtube.com/@shoenixstudios\\\" target=\\\"_blank\\\" aria-label=\\\"Youtube\\\"\\r\\n              class=\\\"footer__link\\\">Youtube</a></li>\\r\\n          <li><a href=\\\"https://github.com/shoen1x\\\" target=\\\"_blank\\\" aria-label=\\\"Github\\\" class=\\\"footer__link\\\">Github</a>\\r\\n          </li>\\r\\n        </ul>\\r\\n      </div>\\r\\n\\r\\n      <div class=\\\"footer__content\\\">\\r\\n        <h2 class=\\\"footer__title\\\">Navigation</h2>\\r\\n\\r\\n        <ul class=\\\"footer__links\\\">\\r\\n          <li>\\r\\n            <a href=\\\"home\\\" target=\\\"_self\\\" aria-label=\\\"Home\\\" class=\\\"footer__link\\\">Home</a>\\r\\n          </li>\\r\\n          <li>\\r\\n            <a href=\\\"home#productcard\\\" target=\\\"_self\\\" aria-label=\\\"product\\\" class=\\\"footer__link\\\">Products</a>\\r\\n          </li>\\r\\n          <li>\\r\\n            <a href=\\\"blog\\\" target=\\\"_self\\\" aria-label=\\\"Blog\\\" class=\\\"footer__link\\\">Blog</a>\\r\\n          </li>\\r\\n        </ul>\\r\\n\\r\\n        <ul class=\\\"footer__copy\\\">\\r\\n          <li>\\r\\n            <span class=\\\"footer__copy-link\\\">&copy; 2023 <strong>Shoenix Studios</strong> All Rights\\r\\n              Reserved</span>\\r\\n            <span class=\\\"footer__copy-link\\\"><span id=\\\"versioning\\\"></span></br><span id=\\\"revisioning\\\"></span></span>\\r\\n          </li>\\r\\n        </ul>\\r\\n\\r\\n        <ul class=\\\"footer__links\\\">\\r\\n          <li>\\r\\n            <label class=\\\"select-language\\\" for=\\\"langslct\\\">\\r\\n              <select id=\\\"langslct\\\" required=\\\"required\\\">\\r\\n                <option value=\\\"\\\" disabled=\\\"disabled\\\" selected=\\\"selected\\\">Select option</option>\\r\\n                <option value=\\\"en\\\">English</option>\\r\\n                <option value=\\\"my\\\">Malay</option>\\r\\n              </select>\\r\\n              <svg>\\r\\n                <use xlink:href=\\\"#select-arrow-down\\\"></use>\\r\\n              </svg>\\r\\n            </label>\\r\\n            <svg class=\\\"sprites-language\\\">\\r\\n              <symbol id=\\\"select-arrow-down\\\" viewbox=\\\"0 0 10 6\\\">\\r\\n                <polyline points=\\\"1 1 5 5 9 1\\\"></polyline>\\r\\n              </symbol>\\r\\n            </svg>\\r\\n          </li>\\r\\n        </ul>\\r\\n        </div>\\r\\n        </div>\\r\\n\\r\\n  </footer>\\r\\n\\r\\n  <!-- Scripts -->\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_32___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_33___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_34___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_35___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_36___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_37___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_38___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_39___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_40___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script type=\\\"text/javascript\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_41___ + \"\\\"><\" + \"/script>\\r\\n\\r\\n  <\" + \"script>\\r\\n    fetch('webpack-assets.json')\\r\\n      .then(function (response) {\\r\\n        return response.json();\\r\\n      })\\r\\n      .then(function (data) {\\r\\n        appendData(data);\\r\\n      })\\r\\n      .catch(function (err) {\\r\\n        document.getElementById(\\\"versioning\\\").innerHTML = DOMPurify.sanitize('</br></br>Versioning data missing');\\r\\n        document.getElementById(\\\"revisioning\\\").innerHTML = DOMPurify.sanitize('Revisioning data missing');\\r\\n      });\\r\\n    function appendData(data) {\\r\\n      document.getElementById(\\\"versioning\\\").innerHTML = DOMPurify.sanitize('</br></br>Build: <strong>' + data.metadata.version + '<strong>');\\r\\n      document.getElementById(\\\"revisioning\\\").innerHTML = DOMPurify.sanitize('Revision: <strong>' + data.metadata.revision + '<strong>');\\r\\n    }\\r\\n  <\" + \"/script>\\r\\n\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://revenant-formal/./src/en-MY/project.html?");

/***/ }),

/***/ "./src/my-MY/product.html":
/*!********************************!*\
  !*** ./src/my-MY/product.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/apple-touch-icon.png */ \"./src/images/ico/apple-touch-icon.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/favicon.ico */ \"./src/images/ico/favicon.ico\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/favicon-32x32.png */ \"./src/images/ico/favicon-32x32.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/favicon-16x16.png */ \"./src/images/ico/favicon-16x16.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/site.webmanifest */ \"./src/images/ico/site.webmanifest\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/safari-pinned-tab.svg */ \"./src/images/ico/safari-pinned-tab.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/noscript.css */ \"./src/assets/css/noscript.css\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ico/shoenix.svg */ \"./src/images/ico/shoenix.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/Photoshop.svg */ \"./src/assets/css/images/Photoshop.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/Illustrator.svg */ \"./src/assets/css/images/Illustrator.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/Pioneer.svg */ \"./src/assets/css/images/Pioneer.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/css/images/ctailored.svg */ \"./src/assets/css/images/ctailored.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/techspec.webp */ \"./src/images/thumbs/techspec.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/dummy.webp */ \"./src/images/thumbs/dummy.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../images/products/cadjust.webp */ \"./src/images/products/cadjust.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../images/thumbs/mockup.webp */ \"./src/images/thumbs/mockup.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.min.js */ \"./src/assets/js/jquery.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.poptrox.min.js */ \"./src/assets/js/jquery.poptrox.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.scrolly.min.js */ \"./src/assets/js/jquery.scrolly.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/jquery.scrollex.min.js */ \"./src/assets/js/jquery.scrollex.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/browser.min.js */ \"./src/assets/js/browser.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/breakpoints.min.js */ \"./src/assets/js/breakpoints.min.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/util.js */ \"./src/assets/js/util.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/language.js */ \"./src/assets/js/language.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/js/firebase.js */ \"./src/assets/js/firebase.js\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../../../node_modules/dompurify/dist/purify.min.js */ \"./node_modules/dompurify/dist/purify.min.js\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);\nvar ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);\nvar ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);\nvar ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);\nvar ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);\nvar ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);\nvar ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);\nvar ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);\nvar code = \"<!DOCTYPE HTML>\\r\\n<!--\\r\\n\\tRevenant Formal by NMVX\\r\\n\\tShoen1x.github.io | @Shoenixstudios\\r\\n\\tunder the CCA 3.0 License | Credit to HTML5 UP for template\\r\\n-->\\r\\n\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <!--Title-->\\r\\n  <title>Produk | Shoenix Studios</title>\\r\\n\\r\\n  <!--Meta and linker-->\\r\\n  <meta http-equiv=Content-Type content=text/html; charset=utf-8 />\\r\\n  <meta name=\\\"viewport\\\" user-scalable=\\\"yes\\\" content=\\\"width=device-width, initial-scale=1.0, minimum-scale=1.0\\\" />\\r\\n  <meta name=\\\"theme-color\\\" media=\\\"(prefers-color-scheme: dark)\\\" content=\\\"black\\\" />\\r\\n  <meta name=\\\"keywords\\\" content=\\\"Shoenix, Shoenix Studios, NMVX, Revenant's Formal, Revenant Formal, NemesisV\\\">\\r\\n  <meta name=\\\"description\\\" content=\\\"Koleksi produk oleh NMVX | Shoenix Studios.\\\">\\r\\n  <link href=\\\"https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css\\\" rel=\\\"stylesheet\\\">\\r\\n\\t<link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/x-icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n\\t<link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\r\\n\\t<link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\">\\r\\n\\t<link rel=\\\"manifest\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\">\\r\\n\\t<link rel=\\\"mask-icon\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" color=\\\"#5bbad5\\\">\\r\\n\\t<meta name=\\\"msapplication-TileColor\\\" content=\\\"../images/ico/browserconfig.xml\\\">\\r\\n  <meta name=\\\"format-detection\\\" content=\\\"telephone=no\\\">\\r\\n\\r\\n\\t<!-- Social Media metadata -->\\r\\n\\t<meta property=\\\"og:type\\\" content=\\\"website\\\">\\r\\n\\t<meta property=\\\"og:image:type\\\" content=\\\"image/png\\\">\\r\\n\\t<meta property=\\\"og:image:width\\\" content=\\\"1563\\\">\\r\\n\\t<meta property=\\\"og:image:height\\\" content=\\\"818\\\">\\r\\n\\t<meta property=\\\"og:description\\\" content=\\\"Koleksi produk oleh NMVX\\\">\\r\\n\\t<meta property=\\\"og:title\\\" content=\\\"Produk | Shoenix Studios\\\">\\r\\n\\t<meta property=\\\"og:url\\\" content=\\\"https://shoenix-studios.web.app/product\\\">\\r\\n\\t<meta property=\\\"og:image\\\" content=\\\"https://shoenix-studios.web.app/images/og-image/og-image-product.jpg\\\">\\r\\n\\t<meta property=\\\"og:locale\\\" content=\\\"en_MY\\\">\\r\\n\\t<meta property=\\\"og:site_name\\\" content=\\\"Product\\\">\\r\\n  \\r\\n  <meta name=\\\"twitter:card\\\" content=\\\"summary_large_image\\\">\\r\\n\\t<meta property=\\\"twitter:domain\\\" content=\\\"shoenix-studios.web.app\\\">\\r\\n\\t<meta property=\\\"twitter:url\\\" content=\\\"https://shoenix-studios.web.app/product\\\">\\r\\n\\t<meta name=\\\"twitter:title\\\" content=\\\"Produk | Shoenix Studios\\\">\\r\\n\\t<meta name=\\\"twitter:description\\\" content=\\\"Koleksi produk oleh NMVX\\\">\\r\\n\\t<meta name=\\\"twitter:image\\\" content=\\\"https://shoenix-studios.web.app/images/og-image/og-image-product.jpg\\\">\\r\\n\\r\\n  <!--No script-->\\r\\n  <noscript>\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" />\\r\\n  </noscript>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n\\r\\n  <header class=\\\"header\\\" id=\\\"header\\\">\\r\\n    <nav class=\\\"nav container\\\">\\r\\n\\t\\t  <a title=\\\"Home\\\" href=\\\"home\\\" target=\\\"_self\\\" aria-label=\\\"Home\\\" class=\\\"nav__logo\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" height=\\\"32\\\" width=\\\"32\\\" alt=\\\"\\\">\\r\\n      </a>\\r\\n      <span>produk | <strong>Shoenix Studios</strong></span>\\r\\n    </nav>\\r\\n  </header>\\r\\n\\r\\n    <section class=\\\"home section\\\" id=\\\"home\\\">\\r\\n      <div class=\\\"home__container container grid\\\">\\r\\n        <div>\\r\\n          <img src=\\\"#\\\" alt=\\\"\\\" class=\\\"home__img\\\">\\r\\n          <!-- <img src=\\\"https://assets.codepen.io/7773162/home.png\\\" alt=\\\"\\\" class=\\\"home__img\\\"> -->\\r\\n        </div>\\r\\n\\r\\n        <div class=\\\"home__data\\\">\\r\\n          <div class=\\\"home__header\\\">\\r\\n            <!-- <h1 class=\\\"home__title\\\">Collection</h1> -->\\r\\n            <h1 id=\\\"product__type\\\">Koleksi</h1>\\r\\n            <h2 class=\\\"home__subtitle\\\">Kosong</h2>\\r\\n          </div>\\r\\n\\r\\n          <div class=\\\"home__footer\\\">\\r\\n            <h3 class=\\\"home__title-description\\\">Gambaran Keseluruhan</h3>\\r\\n            <p class=\\\"home__description\\\">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate vitae excepturi saepe amet eveniet repudiandae. Reiciendis harum rem quae numquam quas consequatur quis ratione, esse repellendus assumenda deleniti ex?\\r\\n            </p>\\r\\n            <a href=\\\"#products\\\" class=\\\"button button--flex\\\">\\r\\n              <span id=\\\"bflex__id\\\" class=\\\"button--flex\\\">\\r\\n                <i class=\\\"ri-shopping-bag-line button__icon\\\"></i></i> Beli Sekarang!\\r\\n              </span>\\r\\n            </a>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n    <section class=\\\"sponsor section\\\">\\r\\n      <div class=\\\"sponsor__container container grid\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" height=\\\"41\\\" width=\\\"130\\\" alt=\\\"\\\" class=\\\"sponsor__img\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" height=\\\"44\\\" width=\\\"130\\\" alt=\\\"\\\" class=\\\"sponsor__img\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" height=\\\"59\\\" width=\\\"130\\\" alt=\\\"\\\" class=\\\"sponsor__img\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" height=\\\"31\\\" width=\\\"130\\\" alt=\\\"\\\" class=\\\"sponsor__img\\\">\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n    <section class=\\\"specs section grid\\\" id=\\\"specs\\\">\\r\\n      <h2 class=\\\"section__title section__title-gradient\\\">Spesifikasi </br> Teknikal</h2>\\r\\n\\r\\n      <div class=\\\"specs__container container grid\\\">\\r\\n        <div class=\\\"specs__content grid\\\">\\r\\n          <div class=\\\"specs__data\\\">\\r\\n            <i class=\\\"ri-font-size-2 specs__icon\\\"></i>\\r\\n            <h3 class=\\\"specs__title\\\">Dimensi</h3>\\r\\n            <span class=\\\"specs__subtitle\\\">Resolusi tinggi, CMYK, <br>Divektorkan Sepenuhnya</span>\\r\\n          </div>\\r\\n\\r\\n          <div class=\\\"specs__data\\\">\\r\\n            <i class=\\\"ri-folder-3-fill specs__icon\\\"></i>\\r\\n            <h3 class=\\\"specs__title\\\">Saiz Fail</h3>\\r\\n            <span class=\\\"specs__subtitle\\\">Purata 10~100 megabait</span>\\r\\n          </div>\\r\\n\\r\\n          <div class=\\\"specs__data\\\">\\r\\n            <i class=\\\"ri-information-line specs__icon\\\"></i>\\r\\n            <h3 class=\\\"specs__title\\\">Format Templat</h3>\\r\\n            <span class=\\\"specs__subtitle\\\">.AI .EPS .PDF</span>\\r\\n          </div>\\r\\n\\r\\n          <div class=\\\"specs__data\\\">\\r\\n            <i class=\\\"ri-pantone-fill specs__icon\\\"></i>\\r\\n            <h3 class=\\\"specs__title\\\">Fleksibel</h3>\\r\\n            <span class=\\\"specs__subtitle\\\">Format mudah <br> dan perubahan warna</span>\\r\\n          </div>\\r\\n        </div>\\r\\n\\r\\n        <div>\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" height=\\\"503\\\" width=\\\"465\\\" alt=\\\"\\\" class=\\\"specs__img\\\">\\r\\n        </div>\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n    <section class=\\\"products section\\\" id=\\\"products\\\">\\r\\n      <h2 class=\\\"section__title section__title-gradient products__line\\\">\\r\\n        pilih <br> Gaya Anda\\r\\n      </h2>\\r\\n\\r\\n      <div class=\\\"products__container container grid\\\">\\r\\n        <article class=\\\"products__card\\\">\\r\\n          <div class=\\\"products__content\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" height=\\\"500\\\" width=\\\"500\\\" alt=\\\"\\\" class=\\\"products__img\\\">\\r\\n\\r\\n            <h3 class=\\\"products__title\\\">kosong</h3>\\r\\n            <span class=\\\"products__price\\\">RM???</span>\\r\\n\\r\\n            <button class=\\\"button button--flex products__button\\\" data-slcpkdata=\\\"0\\\">\\r\\n              <span href=\\\"#productsdetails\\\" aria-hidden=\\\"true\\\" class=\\\"ri-shopping-bag-line button__icon\\\"></span>\\r\\n            </button>\\r\\n          </div>\\r\\n        </article>\\r\\n        <article class=\\\"products__card\\\">\\r\\n          <div class=\\\"products__content\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" height=\\\"500\\\" width=\\\"500\\\" alt=\\\"\\\" class=\\\"products__img\\\">\\r\\n\\r\\n            <h3 class=\\\"products__title\\\">kosong</h3>\\r\\n            <span class=\\\"products__price\\\">RM???</span>\\r\\n\\r\\n            <button class=\\\"button button--flex products__button\\\" data-slcpkdata=\\\"1\\\">\\r\\n              <span href=\\\"#productsdetails\\\" aria-hidden=\\\"true\\\" class=\\\"ri-shopping-bag-line button__icon\\\"></span>\\r\\n            </button>\\r\\n          </div>\\r\\n        </article>\\r\\n        <article class=\\\"products__card\\\">\\r\\n          <div class=\\\"products__content\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" height=\\\"500\\\" width=\\\"500\\\" alt=\\\"\\\" class=\\\"products__img\\\">\\r\\n\\r\\n            <h3 class=\\\"products__title\\\">kosong</h3>\\r\\n            <span class=\\\"products__price\\\">RM???</span>\\r\\n\\r\\n            <button class=\\\"button button--flex products__button\\\" data-slcpkdata=\\\"2\\\">\\r\\n              <span href=\\\"#productsdetails\\\" aria-hidden=\\\"true\\\" class=\\\"ri-shopping-bag-line button__icon\\\"></span>\\r\\n            </button>\\r\\n          </div>\\r\\n        </article>\\r\\n        <article class=\\\"products__card\\\">\\r\\n          <div class=\\\"products__content\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" height=\\\"500\\\" width=\\\"500\\\" alt=\\\"\\\" class=\\\"products__img\\\">\\r\\n\\r\\n            <h3 class=\\\"products__title\\\">kosong</h3>\\r\\n            <span class=\\\"products__price\\\">RM???</span>\\r\\n\\r\\n            <button class=\\\"button button--flex products__button\\\" data-slcpkdata=\\\"3\\\">\\r\\n              <span href=\\\"#productsdetails\\\" aria-hidden=\\\"true\\\" class=\\\"ri-shopping-bag-line button__icon\\\"></span>\\r\\n            </button>\\r\\n          </div>\\r\\n        </article>\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n    <section class=\\\"products section\\\" id=\\\"productsdetails\\\">\\r\\n      <div class=\\\"cards\\\">\\r\\n        <article class=\\\"information [ card ]\\\">\\r\\n          <span class=\\\"tag\\\">Tiada yang Dipilih</span>\\r\\n          <h2 id=\\\"pdltitle\\\" class=\\\"title\\\">Tiada yang Dipilih</h2>\\r\\n          <p id=\\\"pdlinfo\\\" class=\\\"info\\\">Tiada yang Dipilih</p>\\r\\n          <img id=\\\"pdlsvg\\\" src=\\\"#\\\" style=\\\"margin-bottom: 20px;\\\" alt=\\\"\\\">\\r\\n          <button class=\\\"button\\\" style=\\\"margin-top: 12px;\\\" onclick=\\\"location.href='#discount'\\\" type=\\\"button\\\">\\r\\n            <span>Beli Bundle</span>\\r\\n            <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" height=\\\"24px\\\" viewBox=\\\"0 0 24 24\\\" width=\\\"24px\\\" fill=\\\"none\\\">\\r\\n              <path d=\\\"M0 0h24v24H0V0z\\\" fill=\\\"none\\\" />\\r\\n              <path d=\\\"M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z\\\" fill=\\\"currentColor\\\" />\\r\\n            </svg>\\r\\n          </button>\\r\\n        </article>\\r\\n        <article class=\\\"plan [ card ]\\\">\\r\\n          <div class=\\\"inner\\\">\\r\\n      \\r\\n            <span class=\\\"pricing\\\">\\r\\n              <span id=\\\"pdprice\\\">\\r\\n                RM??\\r\\n              </span>\\r\\n            </span>\\r\\n            <h2 id=\\\"pdmtitle\\\" class=\\\"title\\\">Tiada yang Dipilih</h2>\\r\\n            <p id=\\\"pdminfo\\\" class=\\\"info\\\">'Tiada yang Dipilih' ini tersedia dengan:</p>\\r\\n            <ul class=\\\"features\\\">\\r\\n              <li>\\r\\n                <span class=\\\"icon\\\">\\r\\n                  <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\" width=\\\"24\\\" height=\\\"24\\\">\\r\\n                    <path fill=\\\"none\\\" d=\\\"M0 0h24v24H0z\\\" />\\r\\n                    <path d=\\\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\\\" fill=\\\"currentColor\\\" />\\r\\n                  </svg>\\r\\n                </span>\\r\\n                <span><strong>PRO</strong> Pembelian lesen</span>\\r\\n              </li>\\r\\n              <li>\\r\\n                <span class=\\\"icon\\\">\\r\\n                  <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\" width=\\\"24\\\" height=\\\"24\\\">\\r\\n                    <path fill=\\\"none\\\" d=\\\"M0 0h24v24H0z\\\" />\\r\\n                    <path d=\\\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\\\" fill=\\\"currentColor\\\" />\\r\\n                  </svg>\\r\\n                </span>\\r\\n                <span>Poster <strong>tersuai</strong></span>\\r\\n              </li>\\r\\n              <li>\\r\\n                <span class=\\\"icon\\\">\\r\\n                  <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\" width=\\\"24\\\" height=\\\"24\\\">\\r\\n                    <path fill=\\\"none\\\" d=\\\"M0 0h24v24H0z\\\" />\\r\\n                    <path d=\\\"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z\\\" fill=\\\"currentColor\\\" />\\r\\n                  </svg>\\r\\n                </span>\\r\\n                <span>Pembelian Sekali</span>\\r\\n              </li>\\r\\n            </ul>\\r\\n            <button class=\\\"button\\\" style=\\\"cursor: pointer;\\\" onclick=\\\"alert('Payment system not yet available!')\\\">\\r\\n              Beli sekarang!\\r\\n            </button>\\r\\n          </div>\\r\\n        </article>\\r\\n        <article class=\\\"information [ card ]\\\">\\r\\n          <h2 id=\\\"pdrtitle\\\" class=\\\"title\\\">Apa yang termasuk dalam Pakej 'Tiada Pilihan'?</h2>\\r\\n          <p class=\\\"info\\\">Perkara standard yang disertakan dalam pakej selepas pembelian ialah..</p>\\r\\n          <dl class=\\\"details\\\">\\r\\n            <div>\\r\\n              <dt>Templat lengan panjang & pendek</dt>\\r\\n              <dd>Templat</dd>\\r\\n            </div>\\r\\n            <div>\\r\\n              <dt>Bentuk Vektor Penuh</dt>\\r\\n              <dd>Vektor</dd>\\r\\n            </div>\\r\\n          </dl>\\r\\n        </article>\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n    <section class=\\\"case section grid\\\" id=\\\"case\\\">\\r\\n      <h2 class=\\\"section__title section__title-gradient\\\">Fleksibel</h2>\\r\\n\\r\\n      <div class=\\\"image-indicators\\\">\\r\\n        <input type=\\\"checkbox\\\" class=\\\"point\\\" id=\\\"point-1\\\" name=\\\"point\\\" value=\\\"1\\\">\\r\\n        <input type=\\\"checkbox\\\" class=\\\"point\\\" id=\\\"point-2\\\" name=\\\"point\\\" value=\\\"2\\\">\\r\\n        <input type=\\\"checkbox\\\" class=\\\"point\\\" id=\\\"point-3\\\" name=\\\"point\\\" value=\\\"3\\\">\\r\\n        <input type=\\\"checkbox\\\" class=\\\"point\\\" id=\\\"point-4\\\" name=\\\"point\\\" value=\\\"4\\\">\\r\\n        <label for=\\\"point-1\\\" id=\\\"label-1\\\" >\\r\\n            <span>\\r\\n                <span></span>\\r\\n            </span>\\r\\n        </label>\\r\\n        <label for=\\\"point-2\\\" id=\\\"label-2\\\" >\\r\\n            <span>\\r\\n                <span></span>\\r\\n            </span>\\r\\n        </label>\\r\\n        <label for=\\\"point-3\\\" id=\\\"label-3\\\">\\r\\n            <span>\\r\\n                <span></span>\\r\\n            </span>\\r\\n        </label>\\r\\n        <label for=\\\"point-4\\\" id=\\\"label-4\\\">\\r\\n            <span>\\r\\n                <span></span>\\r\\n            </span>\\r\\n        </label>\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" title=\\\"Custom Adjust Jersey Template\\\" height=\\\"400\\\" width=\\\"400\\\" alt=\\\"Custom Adjust Template\\\" loading=\\\"lazy\\\">\\r\\n        <div class=\\\"description\\\">\\r\\n            <div>\\r\\n                <p>Produk ini fleksibel, reka bentuknya tersuai mengikut pelbagai jenis corak pakaian.</p>\\r\\n            </div>\\r\\n            <div>\\r\\n                <p>Sesuaikan panel sisi dengan reben tersuai untuk mendapatkan lebih banyak lagi </p>\\r\\n                <p>pengudaraan udara dan regangan</p>\\r\\n            </div>\\r\\n            <div>\\r\\n                <p>Tukar reka bentuk kolar, dengan pelbagai jenis bentuk kolar</p>\\r\\n            </div>\\r\\n            <div>\\r\\n                <p>Pilih pelbagai jenis corak lengan. Daripada lalai, </p>\\r\\n                <p>raglan dan lengan potongan tersuai!</p>\\r\\n            </div>\\r\\n            <div>\\r\\n                <p>Reka reka bentuk cuff lengan anda sendiri, dengan getah, jersi atau</p>\\r\\n                <p>jenis benam dengan pelbagai kombinasi</p>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n\\r\\n      <div class=\\\"case__container container grid\\\">\\r\\n        <div>\\r\\n          <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" width=\\\"494\\\" height=\\\"599\\\" alt=\\\"\\\" class=\\\"case__img\\\">\\r\\n        </div>\\r\\n\\r\\n        <div class=\\\"case__data\\\">\\r\\n          <p class=\\\"case__description\\\">\\r\\n            Dengan reka bentuk yang mudah dan fleksibel supaya anda boleh menukarnya bila-bila masa anda mahu, dan terus mencuba dengan pelbagai kombinasi.\\r\\n          </p>\\r\\n          <a style=\\\"cursor: pointer;\\\" onclick=\\\"alert('Will be available soon!')\\\" class=\\\"button button--flex\\\">\\r\\n            <i class=\\\"ri-information-line button__icon\\\"></i> Muat Turun Panduan\\r\\n          </a>\\r\\n        </div>\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n    <section id=\\\"discount\\\" class=\\\"discount section\\\">\\r\\n      <div class=\\\"discount__container container grid\\\">\\r\\n        <div class=\\\"discount__animate\\\">\\r\\n          <h2 class=\\\"discount__title\\\">Beli keseluruhan<br>pelan pakej</h2>\\r\\n          <p class=\\\"discount__description\\\">Tiada yang Dipilih</p>\\r\\n          <a class=\\\"button button--flex\\\" style=\\\"cursor: pointer;\\\" onclick=\\\"alert('Payment system not yet available!')\\\">\\r\\n            <i class=\\\"ri-shopping-bag-line button__icon\\\"></i> Beli pakej sekarang!\\r\\n          </a>\\r\\n        </div>\\r\\n\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" width=\\\"250\\\" height=\\\"241\\\" title=\\\"Bundle Types\\\" alt=\\\"\\\" class=\\\"discount__img\\\" loading=\\\"lazy\\\">\\r\\n      </div>\\r\\n    </section>\\r\\n\\r\\n  <!-- Footer -->\\r\\n  <footer class=\\\"footer section\\\">\\r\\n    <div class=\\\"footer__container container grid\\\">\\r\\n      <span class=\\\"footer__logo\\\">\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" width=\\\"32\\\" height=\\\"32\\\" alt=\\\"Shoenix Studios's Logo\\\">\\r\\n      </span>\\r\\n\\r\\n      <!-- Icons -->\\r\\n      <div class=\\\"footer__content\\\">\\r\\n        <h3 class=\\\"footer__title\\\">Sosial</h3>\\r\\n        <ul class=\\\"footer__links\\\">\\r\\n          <li><a href=\\\"https://www.facebook.com/shoenixstudios\\\" target=\\\"_blank\\\" aria-label=\\\"Facebook\\\"\\r\\n              class=\\\"footer__link\\\">Facebook</a></li>\\r\\n          <li><a href=\\\"https://www.instagram.com/shoenix_studios/\\\" target=\\\"_blank\\\" aria-label=\\\"Instagram\\\"\\r\\n              class=\\\"footer__link\\\">Instagram</a></li>\\r\\n          <li><a href=\\\"https://www.youtube.com/@shoenixstudios\\\" target=\\\"_blank\\\" aria-label=\\\"Youtube\\\"\\r\\n              class=\\\"footer__link\\\">Youtube</a></li>\\r\\n          <li><a href=\\\"https://github.com/shoen1x\\\" target=\\\"_blank\\\" aria-label=\\\"Github\\\" class=\\\"footer__link\\\">Github</a>\\r\\n          </li>\\r\\n        </ul>\\r\\n      </div>\\r\\n\\r\\n      <div class=\\\"footer__content\\\">\\r\\n        <h3 class=\\\"footer__title\\\">Navigasi</h3>\\r\\n\\r\\n        <ul class=\\\"footer__links\\\">\\r\\n          <li>\\r\\n            <a href=\\\"home\\\" target=\\\"_self\\\" aria-label=\\\"Home\\\" class=\\\"footer__link\\\">Rerumah</a>\\r\\n          </li>\\r\\n          <li>\\r\\n            <a href=\\\"project\\\" target=\\\"_self\\\" aria-label=\\\"Project\\\" class=\\\"footer__link\\\">Projek</a>\\r\\n          </li>\\r\\n          <li>\\r\\n            <a href=\\\"blog\\\" target=\\\"_self\\\" aria-label=\\\"Blog\\\" class=\\\"footer__link\\\">Blog</a>\\r\\n          </li>\\r\\n        </ul>\\r\\n\\r\\n        <ul class=\\\"footer__copy\\\">\\r\\n          <li>\\r\\n            <span class=\\\"footer__copy-link\\\">&copy; 2023 <strong>Shoenix Studios</strong> Hak Cipta Terpelihara</span>\\r\\n            <span class=\\\"footer__copy-link\\\"><span id=\\\"versioning\\\"></span></br><span id=\\\"revisioning\\\"></span></span>\\r\\n          </li> \\r\\n        </ul>\\r\\n\\r\\n\\t\\t\\t\\t<ul class=\\\"footer__links\\\">\\r\\n\\t\\t\\t\\t\\t<li>\\r\\n\\t\\t\\t\\t\\t\\t<label class=\\\"select-language\\\" for=\\\"langslct\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<select id=\\\"langslct\\\" required=\\\"required\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\\"\\\" disabled=\\\"disabled\\\" selected=\\\"selected\\\">Pilihan Bahasa</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\\"en\\\">Bahasa Inggeris</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<option value=\\\"my\\\">Bahasa Melayu</option>\\r\\n\\t\\t\\t\\t\\t\\t\\t</select>\\r\\n\\t\\t\\t\\t\\t\\t\\t<svg>\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<use xlink:href=\\\"#select-arrow-down\\\"></use>\\r\\n\\t\\t\\t\\t\\t\\t\\t</svg>\\r\\n\\t\\t\\t\\t\\t\\t</label>\\r\\n\\t\\t\\t\\t\\t\\t<svg class=\\\"sprites-language\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t<symbol id=\\\"select-arrow-down\\\" viewbox=\\\"0 0 10 6\\\">\\r\\n\\t\\t\\t\\t\\t\\t\\t\\t<polyline points=\\\"1 1 5 5 9 1\\\"></polyline>\\r\\n\\t\\t\\t\\t\\t\\t\\t</symbol>\\r\\n\\t\\t\\t\\t\\t\\t</svg>\\r\\n\\t\\t\\t\\t\\t</li>\\r\\n\\t\\t\\t\\t</ul>\\r\\n      </div>\\r\\n\\r\\n    </div>\\r\\n\\r\\n  </footer>\\r\\n\\r\\n  <!-- Scripts -->\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_21___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_22___ + \"\\\"><\" + \"/script>\\r\\n\\t<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_23___ + \"\\\"><\" + \"/script>\\r\\n  <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_24___ + \"\\\" type=\\\"module\\\"><\" + \"/script>\\r\\n  <\" + \"script type=\\\"text/javascript\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_25___ + \"\\\"><\" + \"/script>\\r\\n\\r\\n\\t<\" + \"script>\\r\\n    fetch('webpack-assets.json')\\r\\n        .then(function (response) {\\r\\n            return response.json();\\r\\n        })\\r\\n        .then(function (data) {\\r\\n            appendData(data);\\r\\n        })\\r\\n        .catch(function (err) {\\r\\n            document.getElementById(\\\"versioning\\\").innerHTML = DOMPurify.sanitize('</br></br>Data versi hilang');\\r\\n            document.getElementById(\\\"revisioning\\\").innerHTML = DOMPurify.sanitize('Data Semakan semula hilang');\\r\\n        });\\r\\n          function appendData(data) {\\r\\n            document.getElementById(\\\"versioning\\\").innerHTML = DOMPurify.sanitize('</br></br>Binaan: <strong>' + data.metadata.version + '<strong>');\\r\\n\\t\\t\\t      document.getElementById(\\\"revisioning\\\").innerHTML = DOMPurify.sanitize('Semakan: <strong>' + data.metadata.revision + '<strong>');\\r\\n          }\\r\\n<\" + \"/script>\\r\\n\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://revenant-formal/./src/my-MY/product.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://revenant-formal/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/assets/css/project.css":
/*!************************************!*\
  !*** ./src/assets/css/project.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/project.css?");

/***/ }),

/***/ "./src/images/fulls/full sync recursive \\.webp$":
/*!*********************************************!*\
  !*** ./src/images/fulls/full/ sync \.webp$ ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./ae/ae1.webp\": \"./src/images/fulls/full/ae/ae1.webp\",\n\t\"./ae/ae2.webp\": \"./src/images/fulls/full/ae/ae2.webp\",\n\t\"./ae/ae3.webp\": \"./src/images/fulls/full/ae/ae3.webp\",\n\t\"./ae/ae4.webp\": \"./src/images/fulls/full/ae/ae4.webp\",\n\t\"./bp1.webp\": \"./src/images/fulls/full/bp1.webp\",\n\t\"./bp10.webp\": \"./src/images/fulls/full/bp10.webp\",\n\t\"./bp11.webp\": \"./src/images/fulls/full/bp11.webp\",\n\t\"./bp12.webp\": \"./src/images/fulls/full/bp12.webp\",\n\t\"./bp2.webp\": \"./src/images/fulls/full/bp2.webp\",\n\t\"./bp3.webp\": \"./src/images/fulls/full/bp3.webp\",\n\t\"./bp4.webp\": \"./src/images/fulls/full/bp4.webp\",\n\t\"./bp5.webp\": \"./src/images/fulls/full/bp5.webp\",\n\t\"./bp6.webp\": \"./src/images/fulls/full/bp6.webp\",\n\t\"./bp7.webp\": \"./src/images/fulls/full/bp7.webp\",\n\t\"./bp8.webp\": \"./src/images/fulls/full/bp8.webp\",\n\t\"./bp9.webp\": \"./src/images/fulls/full/bp9.webp\",\n\t\"./cs/cs1.webp\": \"./src/images/fulls/full/cs/cs1.webp\",\n\t\"./cs/cs2.webp\": \"./src/images/fulls/full/cs/cs2.webp\",\n\t\"./cs/cs3.webp\": \"./src/images/fulls/full/cs/cs3.webp\",\n\t\"./cs/cs4.webp\": \"./src/images/fulls/full/cs/cs4.webp\",\n\t\"./cs/cs5.webp\": \"./src/images/fulls/full/cs/cs5.webp\",\n\t\"./cs/cs6.webp\": \"./src/images/fulls/full/cs/cs6.webp\",\n\t\"./cs/cs7.webp\": \"./src/images/fulls/full/cs/cs7.webp\",\n\t\"./cs/cs8.webp\": \"./src/images/fulls/full/cs/cs8.webp\",\n\t\"./cs/cs9.webp\": \"./src/images/fulls/full/cs/cs9.webp\",\n\t\"./csa/csa1.webp\": \"./src/images/fulls/full/csa/csa1.webp\",\n\t\"./csa/csa2.webp\": \"./src/images/fulls/full/csa/csa2.webp\",\n\t\"./csa/csa3.webp\": \"./src/images/fulls/full/csa/csa3.webp\",\n\t\"./csa/csa4.webp\": \"./src/images/fulls/full/csa/csa4.webp\",\n\t\"./csa/csa5.webp\": \"./src/images/fulls/full/csa/csa5.webp\",\n\t\"./csa/csa6.webp\": \"./src/images/fulls/full/csa/csa6.webp\",\n\t\"./csa/csa7.webp\": \"./src/images/fulls/full/csa/csa7.webp\",\n\t\"./csa/csa8.webp\": \"./src/images/fulls/full/csa/csa8.webp\",\n\t\"./csa/csa9.webp\": \"./src/images/fulls/full/csa/csa9.webp\",\n\t\"./hm/hm1.webp\": \"./src/images/fulls/full/hm/hm1.webp\",\n\t\"./hm/hm2.webp\": \"./src/images/fulls/full/hm/hm2.webp\",\n\t\"./hm/hm3.webp\": \"./src/images/fulls/full/hm/hm3.webp\",\n\t\"./hm/hm4.webp\": \"./src/images/fulls/full/hm/hm4.webp\",\n\t\"./hm/hm5.webp\": \"./src/images/fulls/full/hm/hm5.webp\",\n\t\"./hm/hm6.webp\": \"./src/images/fulls/full/hm/hm6.webp\",\n\t\"./hm/hm7.webp\": \"./src/images/fulls/full/hm/hm7.webp\",\n\t\"./ic/ic1.webp\": \"./src/images/fulls/full/ic/ic1.webp\",\n\t\"./ic/ic2.webp\": \"./src/images/fulls/full/ic/ic2.webp\",\n\t\"./ic/ic3.webp\": \"./src/images/fulls/full/ic/ic3.webp\",\n\t\"./ic/ic4.webp\": \"./src/images/fulls/full/ic/ic4.webp\",\n\t\"./ic/ic5.webp\": \"./src/images/fulls/full/ic/ic5.webp\",\n\t\"./ic/ic6.webp\": \"./src/images/fulls/full/ic/ic6.webp\",\n\t\"./ic/ic7.webp\": \"./src/images/fulls/full/ic/ic7.webp\",\n\t\"./na/na1.webp\": \"./src/images/fulls/full/na/na1.webp\",\n\t\"./na/na2.webp\": \"./src/images/fulls/full/na/na2.webp\",\n\t\"./na/na3.webp\": \"./src/images/fulls/full/na/na3.webp\",\n\t\"./na/na4.webp\": \"./src/images/fulls/full/na/na4.webp\",\n\t\"./na/na5.webp\": \"./src/images/fulls/full/na/na5.webp\",\n\t\"./na/na6.webp\": \"./src/images/fulls/full/na/na6.webp\",\n\t\"./nc/nc1.webp\": \"./src/images/fulls/full/nc/nc1.webp\",\n\t\"./nc/nc2.webp\": \"./src/images/fulls/full/nc/nc2.webp\",\n\t\"./nc/nc3.webp\": \"./src/images/fulls/full/nc/nc3.webp\",\n\t\"./nc/nc4.webp\": \"./src/images/fulls/full/nc/nc4.webp\",\n\t\"./nc/nc5.webp\": \"./src/images/fulls/full/nc/nc5.webp\",\n\t\"./nc/nc6.webp\": \"./src/images/fulls/full/nc/nc6.webp\",\n\t\"./nc/nc7.webp\": \"./src/images/fulls/full/nc/nc7.webp\",\n\t\"./nr/nr1.webp\": \"./src/images/fulls/full/nr/nr1.webp\",\n\t\"./nr/nr2.webp\": \"./src/images/fulls/full/nr/nr2.webp\",\n\t\"./nr/nr3.webp\": \"./src/images/fulls/full/nr/nr3.webp\",\n\t\"./ri/ri1.webp\": \"./src/images/fulls/full/ri/ri1.webp\",\n\t\"./ri/ri2.webp\": \"./src/images/fulls/full/ri/ri2.webp\",\n\t\"./ri/ri3.webp\": \"./src/images/fulls/full/ri/ri3.webp\",\n\t\"./rn/rn1.webp\": \"./src/images/fulls/full/rn/rn1.webp\",\n\t\"./rn/rn2.webp\": \"./src/images/fulls/full/rn/rn2.webp\",\n\t\"./rn/rn3.webp\": \"./src/images/fulls/full/rn/rn3.webp\",\n\t\"./rn/rn4.webp\": \"./src/images/fulls/full/rn/rn4.webp\",\n\t\"./rn/rn5.webp\": \"./src/images/fulls/full/rn/rn5.webp\",\n\t\"./st/st1.webp\": \"./src/images/fulls/full/st/st1.webp\",\n\t\"./st/st2.webp\": \"./src/images/fulls/full/st/st2.webp\",\n\t\"./st/st3.webp\": \"./src/images/fulls/full/st/st3.webp\",\n\t\"./st/st4.webp\": \"./src/images/fulls/full/st/st4.webp\",\n\t\"./st/st5.webp\": \"./src/images/fulls/full/st/st5.webp\",\n\t\"./st/st6.webp\": \"./src/images/fulls/full/st/st6.webp\",\n\t\"./st/st7.webp\": \"./src/images/fulls/full/st/st7.webp\",\n\t\"./st/st8.webp\": \"./src/images/fulls/full/st/st8.webp\",\n\t\"./st/st9.webp\": \"./src/images/fulls/full/st/st9.webp\",\n\t\"./th/th1.webp\": \"./src/images/fulls/full/th/th1.webp\",\n\t\"./th/th2.webp\": \"./src/images/fulls/full/th/th2.webp\",\n\t\"./th/th3.webp\": \"./src/images/fulls/full/th/th3.webp\",\n\t\"./th/th4.webp\": \"./src/images/fulls/full/th/th4.webp\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images/fulls/full sync recursive \\\\.webp$\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/fulls/full/_sync_\\.webp$?");

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

/***/ "./src/assets/css/noscript.css":
/*!*************************************!*\
  !*** ./src/assets/css/noscript.css ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/noscript.css?v=b88d04fba731603756b1\";\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/noscript.css?");

/***/ }),

/***/ "./node_modules/owl.carousel/dist/assets/owl.carousel.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/owl.carousel/dist/assets/owl.carousel.min.css ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/owl.carousel.min.css?v=a45481b91f27a63e6e0b\";\n\n//# sourceURL=webpack://revenant-formal/./node_modules/owl.carousel/dist/assets/owl.carousel.min.css?");

/***/ }),

/***/ "./node_modules/owl.carousel/dist/owl.carousel.min.js":
/*!************************************************************!*\
  !*** ./node_modules/owl.carousel/dist/owl.carousel.min.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/debug/owl.carousel.min.js?v=c4f8c1c5013bf3bb1faa\";\n\n//# sourceURL=webpack://revenant-formal/./node_modules/owl.carousel/dist/owl.carousel.min.js?");

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

/***/ "./src/images/products/cadjust.webp":
/*!******************************************!*\
  !*** ./src/images/products/cadjust.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cadjust.webp?v=b7967ee70a5c8f5d7274\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/products/cadjust.webp?");

/***/ }),

/***/ "./src/images/thumbs/dummy.webp":
/*!**************************************!*\
  !*** ./src/images/thumbs/dummy.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/dummy.webp?v=5fd7f5c1ad45d7387535\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/thumbs/dummy.webp?");

/***/ }),

/***/ "./src/images/thumbs/kemaskini.webp":
/*!******************************************!*\
  !*** ./src/images/thumbs/kemaskini.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/kemaskini.webp?v=09fd68038ba3045523fe\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/thumbs/kemaskini.webp?");

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

/***/ }),

/***/ "./src/images/video/vm_comp-1.webm":
/*!*****************************************!*\
  !*** ./src/images/video/vm_comp-1.webm ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"videos/vm_comp-1.webm?v=f6db8705c58b9f9cded9\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/video/vm_comp-1.webm?");

/***/ }),

/***/ "./src/images/video/vm_comp-1c.webp":
/*!******************************************!*\
  !*** ./src/images/video/vm_comp-1c.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/vm_comp-1c.webp?v=adb7b602f1d9d5124efc\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/video/vm_comp-1c.webp?");

/***/ }),

/***/ "./src/images/video/vm_comp-2.webm":
/*!*****************************************!*\
  !*** ./src/images/video/vm_comp-2.webm ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"videos/vm_comp-2.webm?v=4b166ed9efe0e0776949\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/video/vm_comp-2.webm?");

/***/ }),

/***/ "./src/images/video/vm_comp-2c.webp":
/*!******************************************!*\
  !*** ./src/images/video/vm_comp-2c.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/vm_comp-2c.webp?v=d9944ef8ec7e09987fa7\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/video/vm_comp-2c.webp?");

/***/ }),

/***/ "./src/images/video/vm_comp-3.webm":
/*!*****************************************!*\
  !*** ./src/images/video/vm_comp-3.webm ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"videos/vm_comp-3.webm?v=47cee64b4530141cca2f\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/video/vm_comp-3.webm?");

/***/ }),

/***/ "./src/images/video/vm_comp-3c.webp":
/*!******************************************!*\
  !*** ./src/images/video/vm_comp-3c.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/vm_comp-3c.webp?v=8b52e230472a5729903f\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/video/vm_comp-3c.webp?");

/***/ }),

/***/ "./src/images/video/vm_comp-4.webm":
/*!*****************************************!*\
  !*** ./src/images/video/vm_comp-4.webm ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"videos/vm_comp-4.webm?v=6e56aa94a5d46341ea9b\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/video/vm_comp-4.webm?");

/***/ }),

/***/ "./src/images/video/vm_comp-4c.webp":
/*!******************************************!*\
  !*** ./src/images/video/vm_comp-4c.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/vm_comp-4c.webp?v=9e0401fdafe3146c4cd1\";\n\n//# sourceURL=webpack://revenant-formal/./src/images/video/vm_comp-4c.webp?");

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
/******/ 			"project": 0
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
/******/ 	__webpack_require__("./src/en-MY/project.html");
/******/ 	__webpack_require__("./src/my-MY/product.html");
/******/ 	__webpack_require__("./src/assets/js/project.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/css/project.css");
/******/ 	
/******/ })()
;