//	Revenant Formal by NMVX
//	Shoen1x.github.io | @Shoenixstudios
//  under the CCA 3.0 License | Credit to HTML5 UP for template

(function ($) {

    // Importer
    const importAll = require =>
    require.keys().reduce((acc, next) => {
      acc[next.replace("../../", "")] = require(next);
      return acc;
    }, {});
  
    importAll(require.context('../../images/products/', true, /\.(svg|webp)$/));

  addEventListener("DOMContentLoaded", e => {
    e.preventDefault;
    var pronum = localStorage.getItem('product_num');

    // var url_selection = window.location.href.match(/\d+$/);
    const jcount = 4;
    const col2 = { 'colname': ["Monarch", "Bos Gaurus", "Nightmare", "Legion"], 'colprice': ["RM???", "RM???", "RM???", "RM???"] };
    const col3 = { 'colname': ["Nexus", "Plexus", "Scar", "Nemesis"], 'colprice': ["RM???", "RM???", "RM???", "RM???"] };
    const col4 = { 'colname': ["San Mirage", "Avarice", "Chaos", "Wrath"], 'colprice': ["RM???", "RM???", "RM???", "RM???"] };
    const col5 = { 'colname': ["Alpha", "Beta", "Charlie", "Delta"], 'colprice': ["RM???", "RM???", "RM???", "RM???"] };
    const sname = ["PowerWear™", "UrbanWear™", "GameOn"];
    const sdesc = ["Athleisure and active wear", "Streetwear and leisure wear", "Electronic game and competitive wear"]

    let cname = parseInt(pronum);
    if (cname == 1 || cname > 5) {

      alert("Error");
      location.href = '/';

    }else {

      (function () {
        document.querySelector('.home__img').src = "images/" + "c" + cname + "-1.webp";
        var rotator = document.querySelector('.home__img');
        var imageDir = 'images/';
        var delayInSeconds = 5;

        var images = ['c' + cname + '-1.webp', 'c' + cname + '-2.webp', 'c' + cname + '-3.webp', 'c' + cname + '-4.webp'];

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
          document.querySelector('.home__subtitle').innerHTML = DOMPurify.sanitize("In The Name of Tsar");
          document.querySelector('.discount__description').innerHTML = DOMPurify.sanitize("Get In The Name of Tsar now, up to 15% off.");
          document.querySelector('.home__description').innerHTML = DOMPurify.sanitize("Introducing the In the Name of Tsar Collection: a unique, modern take on streetwear. stylish and custom-made just for you. Suitable for athleisure and sports wear");
          document.querySelector('.discount__img').src = 'images/svg/Bundle' + cname + '.svg';
          break;
        case 3:
          document.querySelector('.home__subtitle').innerHTML = DOMPurify.sanitize("Black Steel Eagle");
          document.querySelector('.discount__description').innerHTML = DOMPurify.sanitize("Get Black Steel Eagle now, up to 15% off.");
          document.querySelector('.home__description').innerHTML = DOMPurify.sanitize("Introducing the Black Steel Eagle Collection: a mainstream sports inspired design. Unique and custom-made just for you. Suitable for sport usage");

          document.querySelector('.discount__img').src = 'images/svg/Bundle' + cname + '.svg';
          break;
        case 4:
          document.querySelector('.home__subtitle').innerHTML = DOMPurify.sanitize("The World");
          document.querySelector('.discount__description').innerHTML = DOMPurify.sanitize("Get The World now, up to 15% off.");
          document.querySelector('.home__description').innerHTML = DOMPurify.sanitize("Introducing The World Collection: a robust design for stylish everyday clothing. custom-made just for you. Suitable for streetwear and athleisure");

          document.querySelector('.discount__img').src = 'images/svg/Bundle' + cname + '.svg';
          break;
        case 5:
          document.querySelector('.home__subtitle').innerHTML = DOMPurify.sanitize("The Unity");
          document.querySelector('.discount__description').innerHTML = DOMPurify.sanitize("Get The Unity now, up to 15% off.");
          document.querySelector('.home__description').innerHTML = DOMPurify.sanitize("Introducing The Unity Collection: a minimalist, clean and modern design. stylish and custom-made just for you. Suitable for e-sport and electronic sport organization");

          document.querySelector('.discount__img').src = 'images/svg/Bundle' + cname + '.svg';
          break;
      }

      // For Loop catch image query, name, and prices
      switch (cname) {
        case 2:
          for (let i = 0; i < jcount; i++) {
            document.querySelectorAll('.products__img')[i].src = "images/c" + cname + "-" + (i + 1) + ".webp";
            document.querySelectorAll('.products__title')[i].innerHTML = DOMPurify.sanitize(col2['colname'][i]);
            document.querySelectorAll('.products__price')[i].innerHTML = DOMPurify.sanitize(col2['colprice'][i]);
          }
          break;
        case 3:
          for (let i = 0; i < jcount; i++) {
            document.querySelectorAll('.products__img')[i].src = "images/c" + cname + "-" + (i + 1) + ".webp";
            document.querySelectorAll('.products__title')[i].innerHTML = DOMPurify.sanitize(col3['colname'][i]);
            document.querySelectorAll('.products__price')[i].innerHTML = DOMPurify.sanitize(col3['colprice'][i]);
          }
          break;
        case 4:
          for (let i = 0; i < jcount; i++) {
            document.querySelectorAll('.products__img')[i].src = "images/c" + cname + "-" + (i + 1) + ".webp";
            document.querySelectorAll('.products__title')[i].innerHTML = DOMPurify.sanitize(col4['colname'][i]);
            document.querySelectorAll('.products__price')[i].innerHTML = DOMPurify.sanitize(col4['colprice'][i]);
          }
          break;
        case 5:
          for (let i = 0; i < jcount; i++) {
            document.querySelectorAll('.products__img')[i].src = "images/c" + cname + "-" + (i + 1) + ".webp";
            document.querySelectorAll('.products__title')[i].innerHTML = DOMPurify.sanitize(col5['colname'][i]);
            document.querySelectorAll('.products__price')[i].innerHTML = DOMPurify.sanitize(col5['colprice'][i]);
          }
          break;
      }
    }

    const slcpk = document.querySelectorAll('.products__content button');
    $(slcpk).on('click', function () {
      var slcpkdata = $(this).data("slcpkdata");

      document.querySelector('.tag').innerHTML = document.querySelectorAll('.products__title')[slcpkdata].innerHTML;
      var checktag = document.querySelector('.tag').innerHTML;
      document.querySelector('#pdmtitle').innerHTML = DOMPurify.sanitize(checktag);
      document.querySelector('#pdminfo').innerHTML = DOMPurify.sanitize("This " + checktag + " is availabe with:");
      document.querySelector('#pdrtitle').innerHTML = DOMPurify.sanitize("What included in " + checktag + "'s Packages?");
      document.querySelector('#pdprice').innerHTML = document.querySelectorAll('.products__price')[slcpkdata].innerHTML

      if (checktag == 'Monarch' || checktag == 'Nightmare' || checktag == 'Nexus' || checktag == "San Mirage" || checktag == "Avarice" || checktag == "Chaos" || checktag == "Wrath") {
        document.querySelector('#pdltitle').innerHTML = DOMPurify.sanitize(sname[0] + " Series");
        document.querySelector('#pdlinfo').innerHTML = DOMPurify.sanitize('This is ' + checktag + ', ' + sname[0] + ' Series for ' + sdesc[0] + '.');
        document.querySelector('#pdlsvg').src = 'images/svg/powerwear.svg'
      } else if (checktag == 'Bos Gaurus' || checktag == 'Legion' || checktag == "Plexus" || checktag == "Scar" || checktag == "Nemesis") {
        document.querySelector('#pdltitle').innerHTML = DOMPurify.sanitize(sname[1] + " Series");
        document.querySelector('#pdlinfo').innerHTML = DOMPurify.sanitize('This is ' + checktag + ', ' + sname[1] + ' Series for ' + sdesc[1] + '.');
        document.querySelector('#pdlsvg').src = 'images/svg/urbanwear.svg'
      } else {
        document.querySelector('#pdltitle').innerHTML = DOMPurify.sanitize(sname[2] + " Series");
        document.querySelector('#pdlinfo').innerHTML = DOMPurify.sanitize('This is ' + checktag + ', ' + sname[2] + ' Series for ' + sdesc[2] + '.');
        document.querySelector('#pdlsvg').src = 'images/svg/gameon.svg'
      }

    });

  }, { passive: true });

})(jQuery);

