var net_path = "https://shoenix-studios.web.app/";
// var net_path = "../../../";
// var net_path = 'http://127.0.0.1:5000/';

var current_lang = (bodyLangCode || 'en-us').toLowerCase();
var current_lang_sm = (bodyCountryCode || 'default').toLowerCase();
var newURL = location.protocol + '//' + location.host + "/ms" + location.pathname + location.search + location.hash;
(function () {
  var CookieDate = new Date(),
    tmp;
  CookieDate.setDate(CookieDate.getDate() + 30);
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  var langStr;
  if (document.cookie.indexOf("firebase-language-override=") >= 0) {
    document.cookie = "firebase-language-override=" + bodyLangCode + "; expires=" + CookieDate.toUTCString() + "; path=/";
    document.cookie = "firebase-country-override=" + bodyCountryCode + "; expires=" + CookieDate.toUTCString() + "; path=/";
    langStr = getCookie('firebase-language-override');
    countryStr = getCookie('firebase-country-override');
    // langck = document.cookie.indexOf("firebase-language-override=");
    // langStr = document.cookie.substring(langStr + 5);
    $('#langslct option').removeAttr('selected').filter('[value=' + langStr + ']')
    // .filter('[value=' + document.cookie.substring(langck + 5) + ']')
    .attr('selected', true);

    // if (getCookie('firebase-language-override') == 'ms') {
    //     if (!(location.pathname.split('/')[1] == 'ms')) {
    //         window.location.href = newURL;
    //     }
    // } else if (getCookie('firebase-language-override') == 'en') {
    //     if ((location.pathname.split('/')[1] == 'ms')) {
    //         window.location.href = location.pathname.replace("ms/", "");
    //     }
    // }
    // Utk debug jah
  } else {
    // No cookie - tunjuk inggeris
    $('#langslct option').removeAttr('selected').filter('[value=' + bodyLangCode + ']').attr('selected', true);
    document.cookie = "firebase-language-override=" + bodyLangCode + "; expires=" + CookieDate.toUTCString() + "; path=/";
    document.cookie = "firebase-country-override=" + bodyCountryCode + "; expires=" + CookieDate.toUTCString() + "; path=/";
  }
  $('#langslct').on('change', function () {
    var lang = $(this).val();
    switch (lang) {
      case 'en':
        document.cookie = "firebase-country-override=US; expires=" + CookieDate.toUTCString() + "; path=/";
        document.cookie = "firebase-language-override=en; expires=" + CookieDate.toUTCString() + "; path=/";
        if (location.pathname.split('/')[1] == 'ms') {
          window.location.href = location.pathname.replace("ms/", "");
        }
        break;
      case 'ms':
        // document.cookie = "lang=ms-MY; expires=" + CookieDate.toUTCString() + "; path=/";
        document.cookie = "firebase-country-override=MY; expires=" + CookieDate.toUTCString() + "; path=/";
        document.cookie = "firebase-language-override=ms; expires=" + CookieDate.toUTCString() + "; path=/";
        if (!(location.pathname.split('/')[1] == 'ms')) {
          window.location.href = newURL;
        }
        break;
    }
  });
})();