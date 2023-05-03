(function () {
    var current_lang = (bodyLangCode || 'en-us').toLowerCase();
    var current_lang_sm = (bodyCountryCode || 'default').toLowerCase();

    var CookieDate = new Date, tmp;
    CookieDate.setFullYear(CookieDate.getFullYear() +10);

    console.log(window.location.href);

    var langStr;
    if (document.cookie.indexOf("lang=") >= 0) {
        langStr = document.cookie.indexOf("lang=");
        langck = document.cookie.indexOf("lang=");
        langStr = document.cookie.substring(langStr + 5, langStr + 7);
        $('#langslct option')
            .removeAttr('selected')
            .filter('[value=' + document.cookie.substring(langck + 5) + ']')
            .attr('selected', true);
        langStr = '[lang="' + langStr + '"]';
        // console.log(langStr);
        // console.log(document.cookie.indexOf("lang="));
        // window.location.href = '../' + document.cookie.substring(langck + 5) +'/';
        // Utk debug jah
    } else {
        // No cookie - tunjuk inggeris
        $('#langslct option')
            .removeAttr('selected')
            .filter('[value='+bodyLangCode+']')
            .attr('selected', true);
        document.cookie = "lang="+bodyLangCode+"; expires=" + CookieDate.toUTCString() + "; path=/";
        // window.location.href = './en-US/';
    }

    $('#langslct').on('change',function () {
        var lang = $(this).val();
        switch (lang) {
            case 'ms-MY':
                document.cookie = "lang=ms-MY; expires=" + CookieDate.toUTCString() + "; path=/";
                break;
            default:
                document.cookie = "lang=en-US; expires=" + CookieDate.toUTCString() + ";path=/";
                // window.location.href = './en-US/';
        }
    });

})();