/******/ (() => { // webpackBootstrap
/******/ 	/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
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
  addEventListener("DOMContentLoaded", function (e) {
    e.preventDefault;
    var lang_injection = getCookie("firebase-language-override");
    // var url_selection = window.location.href.match(/\d+$/);

    (function () {
      var slike = document.getElementById('col-slidershow');
      slideShow(slike);

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