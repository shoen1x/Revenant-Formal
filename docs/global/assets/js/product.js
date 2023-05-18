/******/ (() => { // webpackBootstrap
/******/ 	/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//	Revenant Formal by NMVX
//	shoenix-studios.web.app | @Shoenixstudios
//  under the CCA 3.0 License | Credit to HTML5 UP for template

(function ($) {
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

  //Gambar tukar2
  var slideShow = function slideShow(container) {
    this.images = []; //public var
    this.curImage = 0;
    for (i = 0; i < container.childElementCount; i++) {
      this.images.push(container.children[i]);
      this.images[i].style.display = "none";
    }
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
  var modelViewerVariants = document.querySelector("model-viewer#product_disp3d");
  var select = document.querySelector('#variant');
  if (modelViewerVariants !== null) {
    modelViewerVariants.addEventListener('load', function () {
      var names = modelViewerVariants.availableVariants;
      var _iterator = _createForOfIteratorHelper(names),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var name = _step.value;
          var option = document.createElement('option');
          option.value = name;
          option.textContent = name;
          select.appendChild(option);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    select.addEventListener('input', function (event) {
      modelViewerVariants.variantName = event.target.value === 'default' ? null : event.target.value;
    });
  }
  addEventListener("DOMContentLoaded", function (e) {
    e.preventDefault;
    var lang_injection = getCookie("firebase-language-override");
    // var url_selection = window.location.href.match(/\d+$/);

    (function () {
      var slike = document.getElementById('col-slidershow');
      if (slike != null) {
        slideShow(slike);
      }

      // Dio ule2 sapa siap. 
      $('.products__content button').on('click', function () {
        document.querySelector("#productsdetails").scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
        var productname = $(this).data("product-name");
        var productprice = $(this).data("product-price");
        document.querySelector('#pdmtitle').innerHTML = DOMPurify.sanitize(productname);
        document.querySelector('#pdprice').innerHTML = DOMPurify.sanitize(productprice);
      });
    })();
  }, {
    passive: true
  });
})(jQuery);
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// extracted by mini-css-extract-plugin

})();

/******/ })()
;