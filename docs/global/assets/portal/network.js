var net_path="https://shoenix-studios.web.app/";!function(){(bodyLangCode||"en-us").toLowerCase(),(bodyCountryCode||"default").toLowerCase();var e,o=new Date;function t(e){for(var o=e+"=",t=decodeURIComponent(document.cookie).split(";"),r=0;r<t.length;r++){for(var n=t[r];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return""}o.setDate(o.getDate()+30),document.cookie.indexOf("firebase-language-override=")>=0?(e=t("firebase-language-override"),countryStr=t("firebase-country-override"),$("#langslct option").removeAttr("selected").filter("[value="+e+"]").attr("selected",!0),e='[firebase-language-override="'+e+'"]',$(document).ready((function(){"ms"==t("firebase-language-override")&&window.location.href!=net_path+t("firebase-language-override")+"/"+location.pathname.split("/").slice(-1)?console.log("debug1"):"en"==t("firebase-language-override")&&window.location.href!=net_path+location.pathname.split("/").slice(-1)&&console.log("debug2")}))):($("#langslct option").removeAttr("selected").filter("[value="+bodyLangCode+"]").attr("selected",!0),document.cookie="firebase-language-override="+bodyLangCode+"; expires="+o.toUTCString()+"; path=/",document.cookie="firebase-country-override="+bodyCountryCode+"; expires="+o.toUTCString()+"; path=/"),$("#langslct").on("change",(function(){switch($(this).val()){case"en":document.cookie="firebase-country-override=US; expires="+o.toUTCString()+"; path=/",document.cookie="firebase-language-override=en; expires="+o.toUTCString()+"; path=/";break;case"ms":document.cookie="firebase-country-override=MY; expires="+o.toUTCString()+"; path=/",document.cookie="firebase-language-override=ms; expires="+o.toUTCString()+"; path=/"}}))}();