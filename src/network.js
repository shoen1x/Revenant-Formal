const net_path = 'https://shoenix-studios.web.app/';

(function () {
    var current_lang = (bodyLangCode || 'en-us').toLowerCase();
    var current_lang_sm = (bodyCountryCode || 'default').toLowerCase();

    var CookieDate = new Date, tmp;
    CookieDate.setDate(CookieDate.getDate() +30);

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

    var langStr;
    var net_path_slicer  = net_path + getCookie('firebase-language-override') + "/" + location.pathname.split("/").slice(-1);
    if (document.cookie.indexOf("firebase-language-override=") >= 0) {
        langStr = getCookie('firebase-language-override');
        countryStr = getCookie('firebase-country-override');
        // langck = document.cookie.indexOf("firebase-language-override=");
        // langStr = document.cookie.substring(langStr + 5);
        $('#langslct option')
            .removeAttr('selected')
            .filter('[value=' + langStr + ']')
            // .filter('[value=' + document.cookie.substring(langck + 5) + ']')
            .attr('selected', true);
        langStr = '[firebase-language-override="' + langStr + '"]';
        $( document ).ready(function(){
            console.log(window.location.href);
            if(getCookie('firebase-language-override') == 'ms' && window.location.href != net_path_slicer){
                window.location.href = net_path + getCookie('firebase-language-override') + "/" + location.pathname.split("/").slice(-1);
            }else if(getCookie('firebase-language-override') == 'en' && window.location.href != net_path_slicer){
                window.location.href = net_path + location.pathname.split("/").slice(-1);
            }
         });
        // Utk debug jah
    } else {
        // No cookie - tunjuk inggeris
        $('#langslct option')
            .removeAttr('selected')
            .filter('[value='+bodyLangCode+']')
            .attr('selected', true);
        document.cookie = "firebase-language-override="+bodyLangCode+"; expires=" + CookieDate.toUTCString() + "; path=/";
        document.cookie = "firebase-country-override="+bodyCountryCode+"; expires=" + CookieDate.toUTCString() + "; path=/";
    }

    $('#langslct').on('change',function () {
        var lang = $(this).val();
        switch (lang) {
            case 'en':
                // document.cookie = "lang=en-US; expires=" + CookieDate.toUTCString() + ";path=/";
                document.cookie = "firebase-country-override=US; expires=" + CookieDate.toUTCString() + "; path=/";
                document.cookie = "firebase-language-override=en; expires=" + CookieDate.toUTCString() + "; path=/";
                window.location.href = net_path + location.pathname.split("/").slice(-1);
                break;
            case 'ms':
                // document.cookie = "lang=ms-MY; expires=" + CookieDate.toUTCString() + "; path=/";
                document.cookie = "firebase-country-override=MY; expires=" + CookieDate.toUTCString() + "; path=/";
                document.cookie = "firebase-language-override=ms; expires=" + CookieDate.toUTCString() + "; path=/";
                window.location.href = net_path + "ms/" + location.pathname.split("/").slice(-1);
                break;
        }
    });
})();