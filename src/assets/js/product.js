//	Revenant Formal by NMVX
//	shoenix-studios.web.app | @Shoenixstudios
//  under the CCA 3.0 License | Credit to HTML5 UP for template

(function ($) {

  // Ambik sekut ikut 'home'
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
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
  var slideShow = function (container) {
		this.images = [];//public var
		this.curImage = 0;
		for (i = 0; i < container.childElementCount; i++) {
			this.images.push(container.children[i]);
			this.images[i].style.display = "none";
		}

		var nextSlide = function () {
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

  addEventListener("DOMContentLoaded", e => {
    e.preventDefault;
    const lang_injection = getCookie("firebase-language-override");
    // var url_selection = window.location.href.match(/\d+$/);

    (function () {
      var slike = document.getElementById('col-slidershow');
      slideShow(slike);

        // Dio ule2 sapa siap. 
        $('.products__content button').on('click', function () {
          document.querySelector("#productsdetails").scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
          var productname = $(this).data("product-name");
          var productprice = $(this).data("product-price");

          document.querySelector('#pdmtitle').innerHTML = DOMPurify.sanitize(productname);
          document.querySelector('#pdprice').innerHTML = DOMPurify.sanitize(productprice);
        });

    })()

  }, { passive: true });
})(jQuery);

