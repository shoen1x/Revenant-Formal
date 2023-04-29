//	Revenant Formal by NMVX
//	Shoen1x.github.io | @Shoenixstudios
//  under the CCA 3.0 License | Credit to HTML5 UP for template
(function ($) {
  var switchLanguage = (code) => {
    const languages = {
      my: {
        sub_line: "projek eksperimen oleh <strong>NMVX</strong>",
        firstid: "KONSEP KAPAK<br>VALHALLA",
        artstationrd: "Dokumentasi Artstation",
        secondid: "JERSI KONSEP<br>JOHOR DARUL TA'ZIM",
        behancerd: "Dokumentasi Artstation",
        workid: "Karya Terbaharu",
        label__id: "Koleksi Terbaharu",
        mptext__title__id: "Koleksi Projek",
        mptext__description__id: "Semua penvisualan & dokumentasi dari perancangan, penteksturan dan fasa kemas gabung. Semua projek adalah tertakluk kepada perubahan. + Termasuk galeri video dari projek terdahulu.",
        project__id: "Lihat semua projek",
        collection_id1: "Koleksi 1", collection_id2: "Koleksi 2", collection_id3: "Koleksi 3", collection_id4: "Koleksi 4",
        cname_id1: "Di atas nama Tsar", cname_id2: "Helang Keluli Hitam", cname_id3: "Dunia", cname_id4: "Kesatuan",
        blog__text__id: "Log Pembangun",
        blog__paragraph__id: "kompilasi penuh log pembangun untuk laman sesawang, dari bahagian hadapan hingga belakang.",
        blogbtn: "Baca Sekarang!",
        Card__link: ["Konsep JDT", "Istinggar", "fon telinga AeroPhantom", "Kapak Nordic"
          , "Harimau Malaya", "Kelantan Home", "Kelantan Away", "Pedang Taring Kembar"
          , "GenesisPhantom", "Bilik Isometrik", "Minuman Hausboom", "NeoRonin",],
        Card__desc: ["Jersi Konsep Johor Darul Ta'zim .", "Istinggar | Musket - Senapang lama orang melayu.", "Reka bentuk konsep fon telinga AeroPhantom.", "Konsep seni permainan kapak Nordic."
          , "Jersi Konsep Harimau Malaya.", "Reka bentuk konseptual kandang untuk Kelantan FC - 2022.", "Reka bentuk konseptual tandang untuk Kelantan FC - 2022.", "Reka bentuk konsep 3D Pedang Futuristik."
          , "Konsep Papan Luncur GenesisPhantom.", "Bilik Isometrik yang Diubahsuai 2022.", "Konsep Hausboom X Shoenix Studios.", "Konsep NeoRonin Techwear."],

        // Project new updates and banner
        mpost__tag_id: ["Projek Baharu", "Projek", "Kemaskini"],
        mpost__title_id: ["Pedang Taring Berkembar - Seni Konsep", "Projek Baharu Ditambah", "Pembaikan reka bentuk dan tekstur 'Istinggar'"],
        mpost__link_txt_id: ["Lihat di Artstation", "Ketahui lebih lanjut", "Ketahui lebih lanjut"],

        ptag__id: ["projek baharu", "Projek Sedia Ada ditambah", "Kemaskini"],
        ppub__id: ["28 Februari 2023", "31 Mac 2023", "04 Mac 2023"],
        ptitle__id: ["Projek baharu | Seni konsep Pedang Taring Berkembar - Berdasarkan reka bentuk lama shinku, dibuat semula dan dilaraskan dalam bentuk yang lebih sesuai.",
          "Menambahkan projek baharu (<strong> Papan Luncur GenesisPhantom | Bilik Isometrik | Minuman Hausboom | Pakaian NeoRonin </strong>).",
          "Versi Istinggar yang dikemas kini, dikemas gabung semula dalam 'Cycles X' dan 'retouch' dalam photoshop."],
        //

        nproject_id: "Semua Projek Baharu",
        v_id: "Galeri Video",
        ftitle_id_sns: "Sosial",
        ftitle_id_nav: "Navigasi",
        flink_id_home: "Rerumah",
        flink_id_project: "Projek",
        flink_id_product: "Produk",
        strademark_id: "&copy; 2023 <strong>Shoenix Studios</strong> Hak Cipta Terpelihara",
      },
      en: {
        sub_line: "Experimental project by <strong>NMVX</strong>",
        firstid: "VALHALLA AXE<br>CONCEPT",
        artstationrd: "Artstation Documentation",
        secondid: "JOHOR DARUL TA'ZIM<br>JERSEY CONCEPT",
        behancerd: "Artstation Documentation",
        workid: "Latest Works",
        label__id: "Latest Collections",
        mptext__title__id: "Projects Collection",
        mptext__description__id: "All project visualization & documentation from planning, texturing and rendering phase, all projects is subject to change. + Included video gallery from previous project.",
        project__id: "View all projects",
        collection_id1: "Collection 1", collection_id2: "Collection 2", collection_id3: "Collection 3", collection_id4: "Collection 4",
        cname_id1: "in the name of Tsar", cname_id2: "Black Steel Eagle", cname_id3: "The World", cname_id4: "Unity",
        blog__text__id: "Developer Logs",
        blog__paragraph__id: "Complete compilations of developer updated logs for the website, from frontend to backend.",
        blogbtn: "Read Now!",
        Card__link: ["JDT Concept", "Istinggar", "Aerophantom Earbuds", "Nordic Axe"
          , "Harimau Malaya", "Kelantan Home", "Kelantan Away", "Twin Fangs Sword"
          , "GenesisPhantom", "Isometric Room", "Hausboom Beverages", "NeoRonin"],
        Card__desc: ["Johor Darul Ta'zim Jersey Concept.", "Istinggar | Musket - Malay's old age rifle.", "AeroPhantom Earbuds concept design.", "Nordic axe game art concept."
          , "Harimau Malaya jersey concept.", "Conceptual home design jersey for Kelantan FC - 2022.", "Conceptual away design jersey for Kelantan FC - 2022.", "Futuristic Sword 3d concept design."
          , "GenesisPhantom Skateboard Concept", "Revamped Isometric Room 2022.", "Hausboom X Shoenix Studios Concept.", "NeoRonin Techwear Concept."],

        // Project new updates and banner
        mpost__tag_id: ["Projek Baharu", "Projek", "Kemaskini"],
        mpost__title_id: ["Twin Fangs Sword - Concept Art", "New Projects Added", "Updated 'Istinggar' design and textures."],
        mpost__link_txt_id: ["View in artstation", "Find out more", "Find out more"],

        ptag__id: ["New Project", "Existing Projects added", "Update"],
        ppub__id: ["28 February 2023", "31 Mac 2023", "04 Mac 2023"],
        ptitle__id: ["New project | Twin Fangs Sword concept art - Based on shinku old design, remade and adjusted in more proper shapes.",
          "Added new projects (<strong> GenesisPhantom Skateboard | Isometric Room | Hausboom Beverages | NeoRonin Garments </strong>).",
          "Updated version of Istinggar, re-rendered in cycles X and retouch in photoshop."],
        //

        nproject_id: "All New Projects",
        v_id: "Video Gallery",
        ftitle_id_sns: "Socials",
        ftitle_id_nav: "Navigation",
        flink_id_home: "Home",
        flink_id_project: "Projects",
        flink_id_product: "Products",
        strademark_id: `&copy; 2023 <strong>Shoenix Studios</strong> All Rights Reserved`,
      }
    };

    for (let lang of Object.keys(languages['my'])) {
      if (document.querySelector(`#${lang}`) !== null) {
        document.querySelector(`#${lang}`).innerHTML = DOMPurify.sanitize(languages[code][lang]);
      }

      if (document.querySelector(".Card__link") && document.querySelector(".Card__desc") !== null) {
        for (i = 0; i < 12; i++) {
          document.querySelectorAll(".Card__link")[i].innerText = languages[code].Card__link[i];
          document.querySelectorAll(".Card__desc")[i].innerText = languages[code].Card__desc[i];
        }
      }

      if (document.querySelector("#mpost__tag_id") !== null) {
        for (i = 0; i < 3; i++) {
          document.querySelectorAll("#mpost__tag_id")[i].innerHTML = DOMPurify.sanitize(languages[code].mpost__tag_id[i]);
          document.querySelectorAll("#mpost__title_id")[i].innerHTML = DOMPurify.sanitize(languages[code].mpost__title_id[i]);
          document.querySelectorAll("#mpost__link_txt_id")[i].innerHTML = DOMPurify.sanitize(languages[code].mpost__link_txt_id[i]);

          document.querySelectorAll("#ptag__id")[i].innerHTML = DOMPurify.sanitize(languages[code].ptag__id[i]);
          document.querySelectorAll("#ppub__id")[i].innerHTML = DOMPurify.sanitize(languages[code].ppub__id[i]);
          document.querySelectorAll("#ptitle__id")[i].innerHTML = DOMPurify.sanitize(languages[code].ptitle__id[i]);
        }
      }
    }
  }

  $('#langslct').on('change', function () {
    switchLanguage(this.value);
  });

})(jQuery);