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

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ (() => {

eval("//\tRevenant Formal by NMVX\n//\tShoen1x.github.io | @Shoenixstudios\n//  under the CCA 3.0 License | Credit to HTML5 UP for template\n(function ($) {\n  //  Disable Mobile Experiences\n  function isMobile() {\n    return /(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));\n  }\n  var $window = $(window),\n    $body = $('body'),\n    $header = $('#header'),\n    $all = $body.add($header);\n\n  // Breakpoints.\n  breakpoints({\n    xxlarge: ['1681px', '1920px'],\n    xlarge: ['1281px', '1680px'],\n    large: ['1001px', '1280px'],\n    medium: ['737px', '1000px'],\n    small: ['481px', '736px'],\n    xsmall: [null, '480px']\n  });\n\n  // Play initial animations on page load.\n  $window.on('load', function () {\n    setTimeout(function () {\n      $body.removeClass('hidden');\n      $('#preloader').remove();\n    }, 600);\n  });\n\n  // Touch mode.\n  if (browser.mobile) $body.addClass('is-touch');else {\n    breakpoints.on('<=small', function () {\n      $body.addClass('is-touch');\n    });\n    breakpoints.on('>small', function () {\n      $body.removeClass('is-touch');\n    });\n  }\n\n  // Fix: IE flexbox fix.\n  if (browser.name == 'ie') {\n    var $main = $('.main.fullscreen'),\n      IEResizeTimeout;\n    $window.on('resize.ie-flexbox-fix', function () {\n      clearTimeout(IEResizeTimeout);\n      IEResizeTimeout = setTimeout(function () {\n        var wh = $window.height();\n        $main.each(function () {\n          var $this = $(this);\n          $this.css('height', '');\n          if ($this.height() <= wh) $this.css('height', wh - 50 + 'px');\n        });\n      });\n    }).triggerHandler('resize.ie-flexbox-fix');\n  }\n\n  // Gallery.\n  $window.on('load', function () {\n    var $gallery = $('.gallery');\n    $gallery.poptrox({\n      baseZIndex: 10001,\n      useBodyOverflow: false,\n      usePopupEasyClose: false,\n      overlayColor: '#1f2328',\n      overlayOpacity: 0.65,\n      usePopupDefaultStyling: false,\n      usePopupCaption: true,\n      popupLoaderText: '',\n      windowMargin: 50,\n      usePopupNav: true\n    });\n\n    // Hack: Adjust margins when 'small' activates.\n    breakpoints.on('>small', function () {\n      $gallery.each(function () {\n        $(this)[0]._poptrox.windowMargin = 50;\n      });\n    });\n    breakpoints.on('<=small', function () {\n      $gallery.each(function () {\n        $(this)[0]._poptrox.windowMargin = 5;\n      });\n    });\n  });\n\n  // Section transitions.\n  if (browser.canUse('transition')) {\n    var on = function on() {\n      // Galleries.\n      $('.gallery').scrollex({\n        top: '30vh',\n        bottom: '30vh',\n        delay: 50,\n        initialize: function initialize() {\n          $(this).addClass('inactive');\n        },\n        terminate: function terminate() {\n          $(this).removeClass('inactive');\n        },\n        enter: function enter() {\n          $(this).removeClass('inactive');\n        },\n        leave: function leave() {\n          $(this).addClass('inactive');\n        }\n      });\n\n      // Generic sections.\n      $('.main.style1').scrollex({\n        mode: 'middle',\n        delay: 100,\n        initialize: function initialize() {\n          $(this).addClass('inactive');\n        },\n        terminate: function terminate() {\n          $(this).removeClass('inactive');\n        },\n        enter: function enter() {\n          $(this).removeClass('inactive');\n        },\n        leave: function leave() {\n          $(this).addClass('inactive');\n        }\n      });\n      $('.main.style2').scrollex({\n        mode: 'middle',\n        delay: 100,\n        initialize: function initialize() {\n          $(this).addClass('inactive');\n        },\n        terminate: function terminate() {\n          $(this).removeClass('inactive');\n        },\n        enter: function enter() {\n          $(this).removeClass('inactive');\n        },\n        leave: function leave() {\n          $(this).addClass('inactive');\n        }\n      });\n\n      // Product Info.\n      $('.infocontent').scrollex({\n        top: '50%',\n        delay: 50,\n        initialize: function initialize() {\n          $(this).addClass('inactive');\n        },\n        terminate: function terminate() {\n          $(this).removeClass('inactive');\n        },\n        enter: function enter() {\n          $(this).removeClass('inactive');\n        },\n        leave: function leave() {\n          $(this).addClass('inactive');\n        }\n      });\n\n      // Project Preview.\n      $('#multiproject').scrollex({\n        top: '50%',\n        delay: 50,\n        initialize: function initialize() {\n          $(this).addClass('inactive');\n        },\n        terminate: function terminate() {\n          $(this).removeClass('inactive');\n        },\n        enter: function enter() {\n          $(this).removeClass('inactive');\n        },\n        leave: function leave() {\n          $(this).addClass('inactive');\n        }\n      });\n\n      // Blog.\n      $('#blog').scrollex({\n        top: '50%',\n        delay: 50,\n        initialize: function initialize() {\n          $(this).addClass('inactive');\n        },\n        terminate: function terminate() {\n          $(this).removeClass('inactive');\n        },\n        enter: function enter() {\n          $(this).removeClass('inactive');\n        },\n        leave: function leave() {\n          $(this).addClass('inactive');\n        }\n      });\n    };\n    var off = function off() {\n      // Galleries.\n      $('.gallery').unscrollex();\n\n      // Generic sections.\n      $('.main.style1').unscrollex();\n      $('.main.style2').unscrollex();\n\n      // Product Info.\n      $('.infocontent').unscrollex();\n\n      // Project Preview.\n      $('#multiproject').unscrollex();\n\n      // Blog.\n      $('#blog').unscrollex();\n    };\n    breakpoints.on('<=small', off);\n    breakpoints.on('>small', on);\n  }\n\n  // Events.\n  var resizeTimeout, resizeScrollTimeout;\n  $window.on('resize', function () {\n    // Disable animations/transitions.\n    $body.addClass('is-resizing');\n    clearTimeout(resizeTimeout);\n    resizeTimeout = setTimeout(function () {\n      // Update scrolly links.\n      $('a[href^=\"#\"]').scrolly({\n        speed: 1500,\n        offset: $header.outerHeight() - 1\n      });\n\n      // Re-enable animations/transitions.\n      setTimeout(function () {\n        $body.removeClass('is-resizing');\n        $window.trigger('scroll');\n      }, 0);\n    }, 100);\n  }).on('load', function () {\n    $window.trigger('resize');\n  });\n\n  // Model Viewer Open\n  $('#button-load1').on('click', function () {\n    document.querySelector('#lazy-load1').dismissPoster();\n  });\n  $('#button-load2').on('click', function () {\n    document.querySelector('#lazy-load2').dismissPoster();\n  });\n  $('.firsttext, .secondtext').on('click', function () {\n    if (isMobile()) {\n      alert('Your current display not large enough to display content');\n    } else {\n      return;\n    }\n  });\n  var slideShow = function slideShow(container) {\n    this.images = []; //public var\n    this.curImage = 0;\n    for (i = 0; i < container.childElementCount; i++) {\n      this.images.push(container.children[i]);\n      this.images[i].style.display = \"none\";\n    }\n\n    // Handle going to to the next slide\n    var nextSlide = function nextSlide() {\n      for (var i = 0; i < this.images.length; i++) {\n        this.images[i].style.display = \"none\";\n      }\n      this.images[this.curImage].style.display = \"block\";\n      this.curImage++;\n      if (this.curImage >= this.images.length) {\n        this.curImage = 0;\n      }\n      window.setTimeout(nextSlide.bind(this), 5000);\n    };\n    nextSlide.call(this);\n  };\n  var slike = document.getElementById(\"slideshow\");\n  slideShow(slike);\n\n  // \tvar procollection = $(this).data('whichproduct');\n  // \tlocalStorage.setItem(\"product_number\", \"4\");\n  // \twindow.open(\"product?\" + localStorage.getItem('product_number'), \"_self\");\n\n  // var btndownload = document.querySelectorAll('#btn-download');\n  // $(btndownload).on('click', function (event) {\n  // \tevent.preventDefault();\n  // \t$(this).addClass(\"downloaded\");\n  // \tvar dwbutton = $(this).data('dwbutton');\n  // \tsetTimeout(function () {\n  // \t\tif (dwbutton == 1) {\n  // \t\t\tDownloadFile('images/downloadfile/NeuroKit-Wallpaper.png', 'Neuro Kit Wallpaper - Shoenix Studios');\n  // \t\t} else if (dwbutton == 2) {\n  // \t\t\tDownloadFile('images/downloadfile/TigerLeap-Wallpaper.jpg', 'Tiger Leap Wallpaper - Shoenix Studios');\n  // \t\t} else {\n  // \t\t\talert(\"Don't know how you get here!\");\n  // \t\t}\n  // \t\t$(btndownload).removeClass('downloaded');\n  // \t}, 2000);\n  // });\n\n  // function DownloadFile(fileloc, filename) {\n  // \tfetch(fileloc)\n  // \t\t.then(resp => resp.blob())\n  // \t\t.then(blob => {\n  // \t\t\tconst url = window.URL.createObjectURL(blob);\n  // \t\t\tconst a = document.createElement('a');\n  // \t\t\ta.style.display = 'none';\n  // \t\t\ta.href = url;\n  // \t\t\t// the filename you want\n  // \t\t\ta.download = filename;\n  // \t\t\tdocument.body.appendChild(a);\n  // \t\t\ta.click();\n  // \t\t\twindow.URL.revokeObjectURL(url);\n  // \t\t})\n  // \t\t.catch(() => alert('Error! Contact Admin on shoenixstudios@gmail.com'));\n  // }\n\n  // Hanya Allah yang tahu\n})(jQuery);\n\n// jQuery.event.special.touchstart = {\n// \tsetup: function (_, ns, handle) {\n// \t\tthis.addEventListener(\"touchstart\", handle, { passive: !ns.includes(\"noPreventDefault\") });\n// \t}\n// };\n// jQuery.event.special.touchmove = {\n// \tsetup: function (_, ns, handle) {\n// \t\tthis.addEventListener(\"touchmove\", handle, { passive: !ns.includes(\"noPreventDefault\") });\n// \t}\n// };\n// jQuery.event.special.wheel = {\n// \tsetup: function (_, ns, handle) {\n// \t\tthis.addEventListener(\"wheel\", handle, { passive: true });\n// \t}\n// };\n// jQuery.event.special.mousewheel = {\n// \tsetup: function (_, ns, handle) {\n// \t\tthis.addEventListener(\"mousewheel\", handle, { passive: true });\n// \t}\n// };\n\n//# sourceURL=webpack://revenant-formal/./src/assets/js/main.js?");

/***/ }),

/***/ "./src/assets/css/main.css":
/*!*********************************!*\
  !*** ./src/assets/css/main.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://revenant-formal/./src/assets/css/main.css?");

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
/******/ 	__webpack_modules__["./src/assets/js/main.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/css/main.css"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;