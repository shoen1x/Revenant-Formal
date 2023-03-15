//	Revenant Formal by NMVX
//	Shoen1x.github.io | @Shoenixstudios
//  under the CCA 3.0 License | Credit to HTML5 UP for template

(function ($) {
  addEventListener("DOMContentLoaded", function (e) {
    e.preventDefault;
    var url_selection = window.location.href.match(/\d+$/);
    var jcount = 4;
    var col2 = {
      'colname': ["Monarch", "Bos Gaurus", "Nightmare", "Legion"],
      'colprice': ["RM???", "RM???", "RM???", "RM???"]
    };
    var col3 = {
      'colname': ["Nexus", "Plexus", "Scar", "Nemesis"],
      'colprice': ["RM???", "RM???", "RM???", "RM???"]
    };
    var col4 = {
      'colname': ["San Mirage", "Avarice", "Chaos", "Wrath"],
      'colprice': ["RM???", "RM???", "RM???", "RM???"]
    };
    var col5 = {
      'colname': ["Alpha", "Beta", "Charlie", "Delta"],
      'colprice': ["RM???", "RM???", "RM???", "RM???"]
    };
    var sname = ["PowerWear™", "UrbanWear™", "GameOn"];
    var sdesc = ["Athleisure and active wear", "Streetwear and leisure wear", "Electronic game and competitive wear"];
    if (url_selection == "" || url_selection == null) {
      alert("Error");
      location.href = '/';
    } else {
      var cname = parseInt(url_selection);
      if (cname == 1) {
        alert("Don't force selection through url, it will not works.");
        location.href = '/';
      } else {
        (function () {
          document.querySelector('.home__img').src = "images/products/collection" + cname + "/1.webp";
          var rotator = document.querySelector('.home__img');
          var imageDir = 'images/products/collection' + cname + "/";
          var delayInSeconds = 5;
          var images = ['1.webp', '2.webp', '3.webp', '4.webp'];
          var num = 0;
          var changeImage = function changeImage() {
            var len = images.length;
            rotator.src = imageDir + images[num++];
            if (num == len) {
              num = 0;
            }
          };
          setInterval(changeImage, delayInSeconds * 1000);
        })();

        // Neat Page changes information
        switch (cname) {
          case 2:
            document.querySelector('#product-type').innerHTML = "Collection";
            document.querySelector('.home__subtitle').innerHTML = "In The Name of Tsar";
            document.querySelector('.discount__description').innerHTML = "Get In The Name of Tsar now, up to 15% off.";
            document.querySelector('.home__description').innerHTML = "Introducing the In the Name of Tsar Collection: a unique, modern take on streetwear. stylish and custom-made just for you. Suitable for athleisure and sports wear";
            document.querySelector('.discount__img').src = 'images/products/Bundle' + cname + '.svg';
            break;
          case 3:
            document.querySelector('#product-type').innerHTML = "Collection";
            document.querySelector('.home__subtitle').innerHTML = "Black Steel Eagle";
            document.querySelector('.discount__description').innerHTML = "Get Black Steel Eagle now, up to 15% off.";
            document.querySelector('.home__description').innerHTML = "Introducing the Black Steel Eagle Collection: a mainstream sports inspired design. Unique and custom-made just for you. Suitable for sport usage";
            document.querySelector('.discount__img').src = 'images/products/Bundle' + cname + '.svg';
            break;
          case 4:
            document.querySelector('#product-type').innerHTML = "Collection";
            document.querySelector('.home__subtitle').innerHTML = "The World";
            document.querySelector('.discount__description').innerHTML = "Get The World now, up to 15% off.";
            document.querySelector('.home__description').innerHTML = "Introducing The World Collection: a robust design for stylish everyday clothing. custom-made just for you. Suitable for streetwear and athleisure";
            document.querySelector('.discount__img').src = 'images/products/Bundle' + cname + '.svg';
            break;
          case 5:
            document.querySelector('#product-type').innerHTML = "Collection";
            document.querySelector('.home__subtitle').innerHTML = "The Unity";
            document.querySelector('.discount__description').innerHTML = "Get The Unity now, up to 15% off.";
            document.querySelector('.home__description').innerHTML = "Introducing The Unity Collection: a minimalist, clean and modern design. stylish and custom-made just for you. Suitable for e-sport and electronic sport organization";
            document.querySelector('.discount__img').src = 'images/products/Bundle' + cname + '.svg';
            break;
        }

        // For Loop catch image query, name, and prices
        switch (cname) {
          case 2:
            for (var i = 0; i < jcount; i++) {
              document.querySelectorAll('.products__img')[i].src = "images/products/collection" + cname + "/" + (i + 1) + ".webp";
              document.querySelectorAll('.products__title')[i].innerHTML = col2['colname'][i];
              document.querySelectorAll('.products__price')[i].innerHTML = col2['colprice'][i];
            }
            break;
          case 3:
            for (var _i = 0; _i < jcount; _i++) {
              document.querySelectorAll('.products__img')[_i].src = "images/products/collection" + cname + "/" + (_i + 1) + ".webp";
              document.querySelectorAll('.products__title')[_i].innerHTML = col3['colname'][_i];
              document.querySelectorAll('.products__price')[_i].innerHTML = col3['colprice'][_i];
            }
            break;
          case 4:
            for (var _i2 = 0; _i2 < jcount; _i2++) {
              document.querySelectorAll('.products__img')[_i2].src = "images/products/collection" + cname + "/" + (_i2 + 1) + ".webp";
              document.querySelectorAll('.products__title')[_i2].innerHTML = col4['colname'][_i2];
              document.querySelectorAll('.products__price')[_i2].innerHTML = col4['colprice'][_i2];
            }
            break;
          case 5:
            for (var _i3 = 0; _i3 < jcount; _i3++) {
              document.querySelectorAll('.products__img')[_i3].src = "images/products/collection" + cname + "/" + (_i3 + 1) + ".webp";
              document.querySelectorAll('.products__title')[_i3].innerHTML = col5['colname'][_i3];
              document.querySelectorAll('.products__price')[_i3].innerHTML = col5['colprice'][_i3];
            }
            break;
        }
      }
    }
    var slcpk = document.querySelectorAll('.products__content button');
    $(slcpk).on('click', function () {
      var slcpkdata = $(this).data("slcpkdata");
      document.querySelector('.tag').innerHTML = document.querySelectorAll('.products__title')[slcpkdata].innerHTML;
      var checktag = document.querySelector('.tag').innerHTML;
      document.querySelector('#pdmtitle').innerHTML = checktag;
      document.querySelector('#pdminfo').innerHTML = "This " + checktag + " is availabe with:";
      document.querySelector('#pdrtitle').innerHTML = "What included in " + checktag + "'s Packages?";
      document.querySelector('#pdprice').innerHTML = document.querySelectorAll('.products__price')[slcpkdata].innerHTML;
      if (checktag == 'Monarch' || checktag == 'Nightmare' || checktag == 'Nexus' || checktag == "San Mirage" || checktag == "Avarice" || checktag == "Chaos" || checktag == "Wrath") {
        document.querySelector('#pdltitle').innerHTML = sname[0] + " Series";
        document.querySelector('#pdlinfo').innerHTML = 'This is ' + checktag + ', ' + sname[0] + ' Series for ' + sdesc[0] + '.';
        document.querySelector('#pdlsvg').src = 'images/products/ctype/powerwear.svg';
      } else if (checktag == 'Bos Gaurus' || checktag == 'Legion' || checktag == "Plexus" || checktag == "Scar" || checktag == "Nemesis") {
        document.querySelector('#pdltitle').innerHTML = sname[1] + " Series";
        document.querySelector('#pdlinfo').innerHTML = 'This is ' + checktag + ', ' + sname[1] + ' Series for ' + sdesc[1] + '.';
        document.querySelector('#pdlsvg').src = 'images/products/ctype/urbanwear.svg';
      } else {
        document.querySelector('#pdltitle').innerHTML = sname[2] + " Series";
        document.querySelector('#pdlinfo').innerHTML = 'This is ' + checktag + ', ' + sname[2] + ' Series for ' + sdesc[2] + '.';
        document.querySelector('#pdlsvg').src = 'images/products/ctype/gameon.svg';
      }
    });
  }, {
    passive: true
  });
})(jQuery);