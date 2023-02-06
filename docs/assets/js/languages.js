
(function ($) {

    const { querySelector, addEventListener } = document;
    const getEl = el => { return document.querySelector(el) }

    var languagebutton = document.querySelectorAll('#language-button');
    $(languagebutton).on('click', function () {
        let given_lang = $(this).html().toLowerCase();
        console.log(given_lang);
        if (given_lang == 'malay') {
            setCookie("Language", "Malay", 12);
            alert('Bahasa Melayu masih tidak lengkap | ' + given_lang + ' Language was still incomplete');
        } else{
            setCookie("Language", "English", 12);
            checkCookie();
            load_translation(given_lang);
        }
    });

    function load_translation(language) {
        // Make sure the object matches the exact name
        getEl('#headline').innerHTML = languages[language].headline
        getEl('#sub_line').innerHTML = languages[language].sub_line
    }

    // Cookies
    function setCookie(cookiename, cookievalue, cookieexdays) {
        var d = new Date();
        d.setTime(d.getTime() + (cookieexdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cookiename + "=" + cookievalue + "; " + expires;
    }

    function getCookie(cookiename) {
        var name = cookiename + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }

    function checkCookie() {
        var language_cookie = getCookie("Language");
        if (language_cookie != "") {
            //redirect to user to link
            return;
        } else {
            user = prompt("Please choose your name:", "");
            if (language_cookie != "" && language_cookie != null) {
                setCookie("Language", language_cookie, 365);
            }
        }
    }

    addEventListener("DOMContentLoaded", e => {
        load_translation("english")
    });

    const languages = {
        "malay": {
            headline: "2023",
            sub_line: "projek percubaan oleh <strong>NMVX<strong>"
        },
        "english": {
            headline: "2023",
            sub_line: "Experimental project by <strong>NMVX<strong>"
        }
    }

})(jQuery);