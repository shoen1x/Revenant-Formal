//	Revenant Formal by NMVX
//	shoenix-studios.web.app | @Shoenixstudios
//  under the CCA 3.0 License | Credit to HTML5 UP for template

(function ($) {

  // 'Webpack import' aset
  const importAll = require =>
    require.keys().reduce((acc, next) => {
      acc[next.replace("../../", "")] = require(next);
      return acc;
    }, {});

  importAll(require.context('../../images/products/', true, /\.(svg|webp)$/));

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

  addEventListener("DOMContentLoaded", e => {
    e.preventDefault;
    const cname = parseInt(getCookie("proj-col"));
    const lang_injection = getCookie("lang");
    // var url_selection = window.location.href.match(/\d+$/);
    var project_index = (code) => {
      const sdesc = ["Athleisure and active wear", "Streetwear and leisure wear", "Electronic game and competitive wear"];
      const sdesc_ms = ["Pakaian sukan dan aktif", "Pakaian jalanan dan pakaian santai", "Permainan elektronik dan pakaian kompetitif"];

      var proj_index_p = { //databank utk inggeris, uboh sini
        1: {
          colname: ["Monarch", "Bos Gaurus", "Nightmare", "Legion"],
          series_cat: ["PowerWear™", "UrbanWear™", "PowerWear™", "UrbanWear™"],
          colprice: ["RM001", "RM002", "RM003", "RM004"],
          home__subtitle: "In The Name of Tsar",
          discount__description: "Get In The Name of Tsar now, up to 15% off.",
          home__description: "Introducing the In the Name of Tsar Collection: a unique, modern take on streetwear. stylish and custom-made just for you. Suitable for athleisure and sports wear",
        },
        2: {
          colname: ["Nexus", "Plexus", "Scar", "Nemesis"],
          series_cat: ["PowerWear™", "UrbanWear™", "UrbanWear™", "UrbanWear™"],
          colprice: ["RM005", "RM006", "RM007", "RM008"],
          home__subtitle: "Black Steel Eagle",
          discount__description: "Get Black Steel Eagle now, up to 15% off.",
          home__description: "Introducing the Black Steel Eagle Collection: a mainstream sports inspired design. Unique and custom-made just for you. Suitable for sport usage",
        },
        3: {
          colname: ["San Mirage", "Avarice", "Chaos", "Wrath"],
          series_cat: ["PowerWear™", "PowerWear™", "PowerWear™", "PowerWear™"],
          colprice: ["RM009", "RM010", "RM011", "RM012"],
          home__subtitle: "The World",
          discount__description: "Get The World now, up to 15% off.",
          home__description: "Introducing The World Collection: a robust design for stylish everyday clothing. custom-made just for you. Suitable for streetwear and athleisure",
        },
        4: {
          colname: ["Alpha", "Beta", "Charlie", "Delta"],
          series_cat: ["GameOn™", "GameOn™", "GameOn™", "GameOn™"],
          colprice: ["RM013", "RM014", "RM015", "RM016"],
          home__subtitle: "The Unity",
          discount__description: "Get The Unity now, up to 15% off.",
          home__description: "Introducing The Unity Collection: a minimalist, clean and modern design. stylish and custom-made just for you. Suitable for e-sport and electronic sport organization",
        },
      };

      var proj_index_p_MY = { //databank utk bahaso mlayu, uboh sini
        1: {
          colname: ["Monarch", "Bos Gaurus", "Nightmare", "Legion"],
          series_cat: ["PowerWear™", "UrbanWear™", "PowerWear™", "UrbanWear™"],
          colprice: ["RM001", "RM002", "RM003", "RM004"],
          home__subtitle: "Di Atas Nama Tsar",
          discount__description: "Dapatkan 'Di Atas Nama Tsar' sekarang, diskaun sehingga 15%.",
          home__description: "Memperkenalkan Koleksi 'Di Atas Nama Tsar': pakaian jalanan yang unik dan moden. bergaya dan dibuat khas untuk anda. Sesuai untuk pakaian sukan dan sukan",
        },
        2: {
          colname: ["Nexus", "Plexus", "Scar", "Nemesis"],
          series_cat: ["PowerWear™", "UrbanWear™", "UrbanWear™", "UrbanWear™"],
          colprice: ["RM005", "RM006", "RM007", "RM008"],
          home__subtitle: "Helang Keluli Hitam",
          discount__description: "Dapatkan 'Helang Keluli Hitam' sekarang, diskaun sehingga 15%.",
          home__description: "Memperkenalkan Koleksi 'Helang Keluli Hitam': reka bentuk inspirasi sukan arus perdana. Unik dan dibuat khas hanya untuk anda. Sesuai untuk kegunaan sukan",
        },
        3: {
          colname: ["San Mirage", "Avarice", "Chaos", "Wrath"],
          series_cat: ["PowerWear™", "PowerWear™", "PowerWear™", "PowerWear™"],
          colprice: ["RM009", "RM010", "RM011", "RM012"],
          home__subtitle: "Dunia",
          discount__description: "Dapatkan 'Dunia' sekarang, diskaun sehingga 15%.",
          home__description: "Memperkenalkan Koleksi 'Dunia': reka bentuk yang teguh untuk pakaian harian yang bergaya. dibuat khas hanya untuk anda. Sesuai untuk pakaian jalanan dan sukan",
        },
        4: {
          colname: ["Alpha", "Beta", "Charlie", "Delta"],
          series_cat: ["GameOn™", "GameOn™", "GameOn™", "GameOn™"],
          colprice: ["RM013", "RM014", "RM015", "RM016"],
          home__subtitle: "Kesatuan",
          discount__description: "Dapatkan 'Kesatuan' sekarang, diskaun sehingga 15%.",
          home__description: "Memperkenalkan Koleksi 'Kesatuan': reka bentuk minimalis, bersih dan moden. bergaya dan dibuat khas untuk anda. Sesuai untuk e-sukan dan organisasi sukan elektronik",
        },
      };
      var objkey_proj;
      if (lang_injection == 'en-US'){objkey_proj = proj_index_p}else if(lang_injection == 'ms-MY'){objkey_proj = proj_index_p_MY}
      for (let proj_selector of Object.keys(objkey_proj["1"])) {
        if (document.querySelector(`.${proj_selector}`) && document.querySelector('.discount__img') !== null) {
          document.querySelector(`.${proj_selector}`).innerHTML = DOMPurify.sanitize(objkey_proj[code][proj_selector]);
          document.querySelector('.discount__img').src = 'global/assets/images/svg/Bundle' + code + '.svg';
        }

        for (let i = 0; i < 4; i++) {  // sini semo brapo jumlah projek, tukar nombo sini kalu ado tukar2
          document.querySelectorAll('.products__img')[i].src = "global/assets/images/c" + code + "-" + (i + 1) + ".webp";
          document.querySelectorAll('.products__title')[i].innerHTML = DOMPurify.sanitize(objkey_proj[code].colname[i]);
          document.querySelectorAll('.products__price')[i].innerHTML = DOMPurify.sanitize(objkey_proj[code].colprice[i]);
        }
        // Dio ule2 sapa siap. 
        if(lang_injection == 'en-US'){ //inggeris
          $('.products__content button').on('click', function () {
            var slcpkdata = $(this).data("slcpkdata");
            var series_desc, series_svg;
            console.log(slcpkdata);
  
            if (proj_index_p[code].series_cat[slcpkdata] == 'PowerWear™') {
              series_desc = sdesc[0];
              series_svg = 'global/assets/images/svg/powerwear.svg';
            } else if (proj_index_p[code].series_cat[slcpkdata] == 'UrbanWear™') {
              series_desc = sdesc[1];
              series_svg = 'global/assets/images/svg/urbanwear.svg';
            } else {
              series_desc = sdesc[2];
              series_svg = 'global/assets/images/svg/gameon.svg';
            }
  
            var checktag = DOMPurify.sanitize(proj_index_p[code].colname[slcpkdata]);
            document.querySelector('.tag').innerHTML = checktag;
            document.querySelector('#pdmtitle').innerHTML = checktag;
            document.querySelector('#pdminfo').innerHTML = DOMPurify.sanitize("This " + checktag + " is availabe with:");
            document.querySelector('#pdrtitle').innerHTML = DOMPurify.sanitize("What included in " + checktag + "'s Packages?");
            document.querySelector('#pdprice').innerHTML = DOMPurify.sanitize(proj_index_p[code].colprice[slcpkdata]);
            document.querySelector('#pdltitle').innerHTML = DOMPurify.sanitize(proj_index_p[code].series_cat[slcpkdata] + " Series");
            document.querySelector('#pdlinfo').innerHTML = DOMPurify.sanitize('This is ' + checktag + ', ' + proj_index_p[code].series_cat[slcpkdata] + ' Series for ' + series_desc + '.');
            document.querySelector('#pdlsvg').src = series_svg;
          });
        }else if(lang_injection == 'ms-MY'){ //Bahaso mlayu
          $('.products__content button').on('click', function () {
            var slcpkdata = $(this).data("slcpkdata");
            var series_desc, series_svg;
            console.log(slcpkdata);
  
            if (proj_index_p[code].series_cat[slcpkdata] == 'PowerWear™') {
              series_desc = sdesc_ms[0];
              series_svg = 'global/assets/images/svg/powerwear-ms.svg';
            } else if (proj_index_p[code].series_cat[slcpkdata] == 'UrbanWear™') {
              series_desc = sdesc_ms[1];
              series_svg = 'global/assets/images/svg/urbanwear-ms.svg';
            } else {
              series_desc = sdesc_ms[2];
              series_svg = 'global/assets/images/svg/gameon-ms.svg';
            }
  
            var checktag = DOMPurify.sanitize(proj_index_p[code].colname[slcpkdata]);
            document.querySelector('.tag').innerHTML = checktag;
            document.querySelector('#pdmtitle').innerHTML = checktag;
            document.querySelector('#pdminfo').innerHTML = DOMPurify.sanitize(checktag + " ini tersedia dengan:");
            document.querySelector('#pdrtitle').innerHTML = DOMPurify.sanitize("Apa yang termasuk dalam pakej " + checktag + "?");
            document.querySelector('#pdprice').innerHTML = DOMPurify.sanitize(proj_index_p[code].colprice[slcpkdata]);
            document.querySelector('#pdltitle').innerHTML = DOMPurify.sanitize("Siri " + proj_index_p[code].series_cat[slcpkdata]);
            document.querySelector('#pdlinfo').innerHTML = DOMPurify.sanitize('Ini adalah ' + checktag + ', Siri ' + proj_index_p[code].series_cat[slcpkdata] + ' untuk ' + series_desc + '.');
            document.querySelector('#pdlsvg').src = series_svg;
          });
        }

      }
    };

    if (cname == 0 || cname > 4) {
      alert("Error");
      location.href = '/';

    } else {
      (function () {
        document.querySelector('.home__img').src = "global/assets/images/" + "c" + cname + "-1.webp";
        var rotator = document.querySelector('.home__img');
        var imageDir = 'global/assets/images/';
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

      // Tuka 'page' depe jadi comey skit
      project_index(cname);
    }
  }, { passive: true });
})(jQuery);

