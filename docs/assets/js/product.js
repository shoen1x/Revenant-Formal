//	Revenant Formal by NMVX
//	Shoen1x.github.io | @Shoenixstudios
//  under the CCA 3.0 License | Credit to HTML5 UP for template

(function ($) {

  addEventListener("DOMContentLoaded", e => {
    e.preventDefault;
    var url_selection = window.location.href.match(/\d+$/);
    const jcount = 4;
    const col2 = {'colname':["Monarch", "Bos Gaurus", "Nightmare", "Legion"],'colprice':["RM???", "RM???", "RM???", "RM???"]};
    const col3 = {'colname':["Nexus", "Plexus", "Scar", "Nemesis"], 'colprice':["RM???", "RM???", "RM???", "RM???"]};
    const col4 = {'colname':["San Mirage", "Avarice", "Chaos", "Wrath"], 'colprice':["RM???", "RM???", "RM???", "RM???"]}; 
    const col5 = {'colname':["Alpha", "Beta", "Charlie", "Delta"], 'colprice':["RM???", "RM???", "RM???", "RM???"]};
    const sname = ["PowerWear™", "UrbanWear™", "GameOn"];
    const sdesc = ["Athleisure and active wear", "Streetwear and leisure wear", "Electronic game and competitive wear"]

    let cname = parseInt(url_selection);
    var ptitle, pprice;

    if (cname == null) {
      alert("Error");
      // location.href = '/';
    } else {
      if (cname == 1) {

        alert("Don't force selection through url, it will not works.");
        // location.href = '/';

      } else {

        (function () {
          console.log(cname);
          document.querySelector('.home__img').src = "images/products/collection" + cname + "/1.webp";
          var rotator = document.querySelector('.home__img');
          var imageDir = 'images/products/collection' + cname + "/";
          var delayInSeconds = 5;
          console.log(cname);

          var images = ['1.webp', '2.webp', '3.webp', '4.webp'];

          var num = 0;
          var changeImage = function () {
            var len = images.length;
            rotator.src = imageDir + images[num++];
            if (num == len) {
              num = 0;
            }
          };
          setInterval(changeImage, delayInSeconds * 1000);
        })()

        // Neat Page changes information
        switch (cname) {
          case 2:
            document.querySelector('#product-type').innerHTML = "Collection";
            document.querySelector('.home__subtitle').innerHTML = "In The Name of Tsar";
            document.querySelector('.discount__description').innerHTML = "Get In The Name of Tsar now, up to 15% off."
            document.querySelector('.discount__img').src = 'images/products/Bundle' + cname + '.svg';
            break;
          case 3:
            document.querySelector('#product-type').innerHTML = "Collection";
            document.querySelector('.home__subtitle').innerHTML = "Black Steel Eagle";
            document.querySelector('.discount__description').innerHTML = "Get Black Steel Eagle now, up to 15% off."
            document.querySelector('.discount__img').src = 'images/products/Bundle' + cname + '.svg';
            break;
          case 4:
            document.querySelector('#product-type').innerHTML = "Collection";
            document.querySelector('.home__subtitle').innerHTML = "The World";
            document.querySelector('.discount__description').innerHTML = "Get The World now, up to 15% off."
            document.querySelector('.discount__img').src = 'images/products/Bundle' + cname + '.svg';
            break;
          case 5:
            document.querySelector('#product-type').innerHTML = "Collection";
            document.querySelector('.home__subtitle').innerHTML = "The Unity";
            document.querySelector('.discount__description').innerHTML = "Get The Unity now, up to 15% off."
            document.querySelector('.discount__img').src = 'images/products/Bundle' + cname + '.svg';
            break;
        }

        // For Loop catch image query, name, and prices
        switch (cname) {
          case 2:
            for (let i = 0; i < jcount; i++) {
              document.querySelectorAll('.products__img')[i].src = "images/products/collection" + cname + "/" + (i + 1) + ".webp";
              document.querySelectorAll('.products__title')[i].innerHTML = col2['colname'][i];
              document.querySelectorAll('.products__price')[i].innerHTML = col2['colprice'][i];
            }
            break;
          case 3:
            for (let i = 0; i < jcount; i++) {
              document.querySelectorAll('.products__img')[i].src = "images/products/collection" + cname + "/" + (i + 1) + ".webp";
              document.querySelectorAll('.products__title')[i].innerHTML = col3['colname'][i];
              document.querySelectorAll('.products__price')[i].innerHTML = col3['colprice'][i];
            }
            break;
          case 4:
            for (let i = 0; i < jcount; i++) {
              document.querySelectorAll('.products__img')[i].src = "images/products/collection" + cname + "/" + (i + 1) + ".webp";
              document.querySelectorAll('.products__title')[i].innerHTML = col4['colname'][i];
              document.querySelectorAll('.products__price')[i].innerHTML = col4['colprice'][i];
            }
            break;
          case 5:
            for (let i = 0; i < jcount; i++) {
              document.querySelectorAll('.products__img')[i].src = "images/products/collection" + cname + "/" + (i + 1) + ".webp";
              document.querySelectorAll('.products__title')[i].innerHTML = col5['colname'][i];
              document.querySelectorAll('.products__price')[i].innerHTML = col5['colprice'][i];
            }
            break;
        }
      }
    }

    const slcpk = document.querySelectorAll('#slcpk');
    $(slcpk).on('click', function () {
      var slcpkdata = $(this).data("slcpkdata");

      document.querySelector('.tag').innerHTML = document.querySelectorAll('.products__title')[slcpkdata].innerHTML;
      var checktag = document.querySelector('.tag').innerHTML;
      document.querySelector('#pdmtitle').innerHTML = checktag;
      document.querySelector('#pdminfo').innerHTML = "This " + checktag + " is availabe with:";
      document.querySelector('#pdrtitle').innerHTML = "What included in " + checktag + "'s Packages?";
      document.querySelector('#pdprice').innerHTML = document.querySelectorAll('.products__price')[slcpkdata].innerHTML

      if (checktag == 'Monarch' || checktag == 'Nightmare' || checktag == 'Nexus' || checktag == "San Mirage" || checktag == "Avarice" || checktag == "Chaos" || checktag == "Wrath") {
        document.querySelector('#pdltitle').innerHTML = sname[0] + " Series";
        document.querySelector('#pdlinfo').innerHTML = 'This is ' + checktag + ', ' + sname[0] + ' Series for ' + sdesc[0] + '.';
        document.querySelector('#pdlsvg').src = 'assets/css/images/powerwear.svg'
      } else if (checktag == 'Bos Gaurus' || checktag == 'Legion' || checktag == "Plexus" || checktag == "Scar" || checktag == "Nemesis") {
        document.querySelector('#pdltitle').innerHTML = sname[1] + " Series";
        document.querySelector('#pdlinfo').innerHTML = 'This is ' + checktag + ', ' + sname[1] + ' Series for ' + sdesc[1] + '.';
        document.querySelector('#pdlsvg').src = 'assets/css/images/urbanwear.svg'
      } else {
        document.querySelector('#pdltitle').innerHTML = sname[2] + " Series";
        document.querySelector('#pdlinfo').innerHTML = 'This is ' + checktag + ', ' + sname[2] + ' Series for ' + sdesc[2] + '.';
        document.querySelector('#pdlsvg').src = 'assets/css/images/gameon.svg'
      }

    });

  });

})(jQuery);

