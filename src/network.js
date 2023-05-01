(function () {
    var current_lang = (bodyLangCode || 'en-us').toLowerCase();
    var current_lang_sm = (bodyCountryCode || 'default').toLowerCase();

    var langStr;
    if (document.cookie.indexOf("lang=") >= 0) {
        langStr = document.cookie.indexOf("lang=");
        langStr = document.cookie.substring(langStr + 5, langStr + 7);
        $('#langslct option')
            .removeAttr('selected')
            .filter('[value=' + langStr + ']')
            .attr('selected', true);
        langStr = '[lang="' + langStr + '"]';
        console.log(langStr);
        $(langStr).show();
    } else {
        // No cookie - show default language
        $("[lang='en-US']").show();
    }

    $('#langslct').change(function () {
        var CookieDate = new Date, tmp;
        CookieDate.setFullYear(CookieDate.getFullYear() +10);
        var lang = $(this).val();
        switch (lang) {
            case 'ms-MY':
                console.log("ms-MY");
                document.cookie = "lang=ms-MY; expires=" + CookieDate.toUTCString() + "; path=/";
                break;
            default:
                console.log("en-US");
                document.cookie = "lang=en-US; expires=" + CookieDate.toUTCString() + ";path=/";
        }
    });

})();