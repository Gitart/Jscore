
<html xmlns:IE>
<head>
 <meta http-equiv="imagetoolbar" content="no">
 <META HTTP-EQUIV="EXPIRES" CONTENT="-1000">
 <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
 <META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script language="JavaScript" src="/includes/localConfig.js" type="text/javascript"></script>
<script language="JavaScript" src="/includes/languageMapping.js" type="text/javascript"></script>
<script src="/utils/javascript/detectSilverlight.js" type="text/javascript"></script>
<script type="text/javascript" src="/utils/javascript/cdnUtil.js"></script>	
<style type="text/css">
A {
color : #0000EE;
text-decoration:none;
}


A:hover         {
    color: #FFFFFF;
    background-color: #000000;
    text-decoration:underline;
}

BODY, TD {
font-family : Arial, sans-serif;
font-size : 12px;
fontsize : 13px;
color : #000000;
}

@media all {
     IE\:clientCaps {behavior:url(#default#clientcaps)}
}
</style>
<script language="javascript">
window.onerror=handleError;
function handleError(msg, URL, lineNum){
    //alert(lineNum+":"+msg)
    return true;
}
</script>
<script language="javascript">
var paramObj=new Object();
if(location.search.length>1) {
    var tmpPairs=location.search.substring(1).split("&");
    for (var i in tmpPairs) {
        var pairsplit=tmpPairs[i].split("=")
        if (pairsplit[0].length>0) paramObj[pairsplit[0]]=pairsplit[1];
    }
}

if(paramObj.text_language_id+""=="undefined") paramObj.text_language_id="E"; //default language: English
else if(paramObj.text_language_id.length>1){
    paramObj.text_language_id = languageMapnewToOld[paramObj.text_language_id];
}

if(paramObj.flashtype+""=="undefined") paramObj.flashtype="flv";

var minHighBW=300;
if(paramObj.minhighbw) minHighBW = paramObj.minhighbw;

var isSilverlightEnabled = location.search.indexOf("isSilverlightEnabled=true") > -1
var isNextGenConsole = location.search.indexOf("ngwebcast=true") > -1
var isFlashConsole = location.search.indexOf("flashconsole=true") > -1
var checkforflash=location.search.indexOf("checkflash=true")>-1 || isNextGenConsole || isNextGenConsole;
var hasWin = location.search.indexOf("hasWin=true") > -1
var hasFlashStream = location.search.indexOf("hasFlashStream=true") > -1
var isP10 = isNextGenConsole;
var isApollo = isNextGenConsole;
var isMVC = (hasFlashStream && !hasWin && !isNextGenConsole);
var isHTMLPure = (hasWin && !hasFlashStream && !isNextGenConsole);
var isHTMLHybrid = (hasWin && hasFlashStream && !isNextGenConsole);

document.writeln('<script type="text/javascript" language=JavaScript src="/utilApp/CdnAssignmentServlet?mode=getstaticprefix'+(paramObj.eventid &&paramObj.sessionid? '&eventid='+paramObj.eventid+'&sessionid='+paramObj.sessionid:'')+'"><\/script>');
</script>
<script language="javascript">
function setCookie(cookieName,cookieValue)
{
    var now = new Date();
    var expiration = new Date(
        now.getFullYear() + 1
        , now.getMonth()
        , now.getDate()
        , now.getHours()
        , now.getMinutes()
        , now.getSeconds()
        );

    var escapedCookieName = cookieName;
    if (
        (escapedCookieName.indexOf("=") != -1)
        || (escapedCookieName.indexOf("%") != -1)
        || (escapedCookieName.indexOf(";") != -1) )
    {
        escapedCookieName = escape(escapedCookieName);
    }

    var escapedCookieValue = cookieValue;
    if (
        (escapedCookieValue.indexOf("%") != -1)
        || (escapedCookieValue.indexOf(";") != -1) )
    {
        escapedCookieValue = escape(escapedCookieValue);
    }
    var domain = ".on24.com";
    if(document.domain){
        domain=document.domain;
        domain=domain.substring(domain.indexOf("."));
    }

    document.cookie =
        escapedCookieName + "=" + escapedCookieValue
        + ";expires=" + expiration.toGMTString()
        + ";path=/"
        + ";domain="+domain
        + ";" ;
}
setCookie("testCookie","test");

function replaceTag(str,tag,val){
    if(str==null) return "";
    var re=new RegExp(tag, "g");
    str=str.replace(re,val);
    return str;
}

var bandwithImageLanguage="";
/*
var now = new Date();
var ms = now.getTime();
var cacheinterval=(Math.round(ms/1000));

var strEventURL="http://"+eventHost+"/eventManager/includes/event.jsp?eventid="+paramObj.eventid+"&filter=event&sessionid="+paramObj.sessionid+"&key="+paramObj.key+"&language="+paramObj.text_language_id+"&cacheinterval="+cacheinterval;

if(paramObj.eventid && paramObj.sessionid && paramObj.key) document.write('<script type="text/javascript" language=JavaScript src="'+strEventURL+'"><\/script>');
*/
</script>
<script language="JavaScript" src="messages.txt" type="text/javascript"></script>

<script language="JavaScript" src="messages_G.txt" type="text/javascript"></script>
<script language="JavaScript" src="messages_S.txt" type="text/javascript"></script>
<script language="JavaScript" src="messages_F.txt" type="text/javascript"></script>
<script language="JavaScript" src="messages_P.txt" type="text/javascript"></script>
<script language="JavaScript" src="messages_I.txt" type="text/javascript"></script>

<script language="JavaScript" src="messages_G_utf8.txt" type="text/javascript"></script>
<script language="JavaScript" src="messages_S_utf8.txt" type="text/javascript"></script>
<script language="JavaScript" src="messages_F_utf8.txt" type="text/javascript"></script>
<script language="JavaScript" src="messages_P_utf8.txt" type="text/javascript"></script>
<script language="JavaScript" src="messages_I_utf8.txt" type="text/javascript"></script>

<script language="JavaScript" src="messages_C_utf8.txt" type="text/javascript"></script>
<script language="JavaScript" src="messages_J_utf8.txt" type="text/javascript"></script>
<script language="JavaScript" src="messages_K_utf8.txt" type="text/javascript"></script>
<script language="JavaScript" src="messages_T_utf8.txt" type="text/javascript"></script>
<script language="JavaScript" src="messages_R_utf8.txt" type="text/javascript"></script>

<script language="javascript">
if(paramObj.continueurl) {
	document.write("<title>"+objLang.SystemTest+"</title>");
} else {
	document.write("<title>"+objLang.TestYourSystem+"</title>");	
}	
</script>

<script language="javascript">

// Ultimate client-side JavaScript client sniff. Version 3.03
// (C) Netscape Communications 1999-2001.  Permission granted to reuse and distribute.
// Revised 17 May 99 to add is_nav5up and is_ie5up (see below).
// Revised 20 Dec 00 to add is_gecko and change is_nav5up to is_nav6up
//                      also added support for IE5.5 Opera4&5 HotJava3 AOLTV
// Revised 22 Feb 01 to correct Javascript Detection for IE 5.x, Opera 4,
//                      correct Opera 5 detection
//                      add support for winME and win2k
//                      synch with browser-type-oo.js
// Revised 26 Mar 01 to correct Opera detection
// Revised 02 Oct 01 to add IE6 detection

// Everything you always wanted to know about your JavaScript client
// but were afraid to ask. Creates "is_" variables indicating:
// (1) browser vendor:
//     is_nav, is_ie, is_opera, is_hotjava, is_webtv, is_TVNavigator, is_AOLTV
// (2) browser version number:
//     is_major (integer indicating major version number: 2, 3, 4 ...)
//     is_minor (float   indicating full  version number: 2.02, 3.01, 4.04 ...)
// (3) browser vendor AND major version number
//     is_nav2, is_nav3, is_nav4, is_nav4up, is_nav6, is_nav6up, is_gecko, is_ie3,
//     is_ie4, is_ie4up, is_ie5, is_ie5up, is_ie5_5, is_ie5_5up, is_ie6, is_ie6up, is_ie7, is_ie7up, is_hotjava3, is_hotjava3up,
//     is_opera2, is_opera3, is_opera4, is_opera5, is_opera5up
// (4) JavaScript version number:
//     is_js (float indicating full JavaScript version number: 1, 1.1, 1.2 ...)
// (5) OS platform and version:
//     is_win, is_win16, is_win32, is_win31, is_win95, is_winnt, is_win98, is_winme, is_win2k,winxp, winvista
//     is_os2
//     is_mac, is_mac68k, is_macppc
//     is_unix
//     is_sun, is_sun4, is_sun5, is_suni86
//     is_irix, is_irix5, is_irix6
//     is_hpux, is_hpux9, is_hpux10
//     is_aix, is_aix1, is_aix2, is_aix3, is_aix4
//     is_linux, is_sco, is_unixware, is_mpras, is_reliant
//     is_dec, is_sinix, is_freebsd, is_bsd
//     is_vms
//
// See http://www.it97.de/JavaScript/JS_tutorial/bstat/navobj.html and
// http://www.it97.de/JavaScript/JS_tutorial/bstat/Browseraol.html
// for detailed lists of userAgent strings.
//
// Note: you don't want your Nav4 or IE4 code to "turn off" or
// stop working when new versions of browsers are released, so
// in conditional code forks, use is_ie5up ("IE 5.0 or greater")
// is_opera5up ("Opera 5.0 or greater") instead of is_ie5 or is_opera5
// to check version in code which you want to work on future
// versions.

  var headersURL="http://"+location.host+"/utils/test/messages.txt";
  var xmlhttpbody="";

  function GetUrlResponse(){}//needed for backward compatibility with Netscape 4.7x
  function checkXMLParser1(){
    xmlhttpbody=(GetUrlResponse(headersURL));
    if (xmlhttpbody!=null && (""+xmlhttpbody!="undefined") && xmlhttpbody.length>10){
        return true;
    }
    return false;
  }

    function checkXMLParser()
    {
        var oXMLDocument = null;
        var oXMLStylesheet = null;
        var oXMLResult = null;
        var oResultNode = null;

        if (null == (oXMLDocument = m_oParserCheckXML.XMLDocument))
            return false;

        if (null == (oXMLStylesheet = m_oParserCheckXSL.XMLDocument))
            return false;

        if (null == (oXMLResult = m_oParserCheckResult.XMLDocument))
            return false;

        oXMLDocument.transformNodeToObject(oXMLStylesheet, oXMLResult);
        if ((null != (oResultNode = oXMLResult.selectSingleNode("//ParserCheck/Result"))) ){// && ("XML Parser" == oResultNode.text)){
            return true;
        }else{
            return  false;
        }

        return false;
    }

    // convert all characters to lowercase to simplify testing
    var agt=navigator.userAgent.toLowerCase();    
    var appVer = navigator.appVersion.toLowerCase();

    // *** BROWSER VERSION ***

    var is_minor = parseFloat(appVer);
    var is_major = parseInt(is_minor);

    var is_opera = (agt.indexOf("opera") != -1);
    var is_opera2 = (agt.indexOf("opera 2") != -1 || agt.indexOf("opera/2") != -1);
    var is_opera3 = (agt.indexOf("opera 3") != -1 || agt.indexOf("opera/3") != -1);
    var is_opera4 = (agt.indexOf("opera 4") != -1 || agt.indexOf("opera/4") != -1);
    var is_opera5 = (agt.indexOf("opera 5") != -1 || agt.indexOf("opera/5") != -1);
    var is_opera6 = (agt.indexOf("opera 6") != -1 || agt.indexOf("opera/6") != -1); // new 020128- abk
    var is_opera7 = (agt.indexOf("opera 7") != -1 || agt.indexOf("opera/7") != -1); // new 021205- dmr
    var is_opera5up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4);
    var is_opera6up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4 && !is_opera5); // new020128
    var is_opera7up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4 && !is_opera5 && !is_opera6); // new021205 -- dmr

    // Note: On IE, start of appVersion return 3 or 4
    // which supposedly is the version of Netscape it is compatible with.
    // So we look for the real version further on in the string

    var iePos  = appVer.indexOf('msie');
    if (iePos !=-1) {
       is_minor = parseFloat(appVer.substring(iePos+5,appVer.indexOf(';',iePos)))
       is_major = parseInt(is_minor);
    }

    // ditto Konqueror

    var is_konq = false;
    var kqPos   = agt.indexOf('konqueror');
    if (kqPos !=-1) {
       is_konq  = true;
       is_minor = parseFloat(agt.substring(kqPos+10,agt.indexOf(';',kqPos)));
       is_major = parseInt(is_minor);
    }

    var is_getElementById   = (document.getElementById) ? "true" : "false"; // 001121-abk
    var is_getElementsByTagName = (document.getElementsByTagName) ? "true" : "false"; // 001127-abk
    var is_documentElement = (document.documentElement) ? "true" : "false"; // 001121-abk

    var is_safari = ((agt.indexOf('safari')!=-1)&&(agt.indexOf('mac')!=-1))?true:false;
    var is_khtml  = (is_safari || is_konq);
	var safari_ver = is_safari ? parseInt(((new RegExp(/version\/([0-9]+)/g).exec(agt)) ? RegExp.$1:"0"), 10) : "0";
    var is_gecko = ((!is_khtml)&&(navigator.product)&&(navigator.product.toLowerCase()=="gecko"))?true:false;
    var is_gver  = 0;
    if (is_gecko) is_gver=navigator.productSub;

    var is_moz   = ((agt.indexOf('mozilla/5')!=-1) && (agt.indexOf('spoofer')==-1) &&
                    (agt.indexOf('compatible')==-1) && (agt.indexOf('opera')==-1)  &&
                    (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)     &&
                    (is_gecko) &&
                    ((navigator.vendor=="")||(navigator.vendor=="Mozilla")||(navigator.vendor=="Debian")));
    var is_fb = ((agt.indexOf('mozilla/5')!=-1) && (agt.indexOf('spoofer')==-1) &&
                 (agt.indexOf('compatible')==-1) && (agt.indexOf('opera')==-1)  &&
                 (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)     &&
                 (is_gecko) && (navigator.vendor=="Firebird"));
    var is_fx = ((agt.indexOf('mozilla/5')!=-1) && (agt.indexOf('spoofer')==-1) &&
                 (agt.indexOf('compatible')==-1) && (agt.indexOf('opera')==-1)  &&
                 (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)     &&
                 (is_gecko) && (agt.indexOf('firefox')!=-1 || navigator.vendor=="Firefox"));
    if ((is_moz)||(is_fb)||(is_fx)) {  // 032504 - dmr
       var is_moz_ver = (navigator.vendorSub)?navigator.vendorSub:0;
       if(!(is_moz_ver)) {
           is_moz_ver = agt.indexOf('rv:');
           is_moz_ver = agt.substring(is_moz_ver+3);
           is_paren   = is_moz_ver.indexOf(')');
           is_moz_ver = is_moz_ver.substring(0,is_paren);
       }
       is_minor = is_moz_ver;
       is_major = parseInt(is_moz_ver);
    }
   var is_fb_ver = is_moz_ver;
   var is_fx_ver = is_moz_ver;
   var firefox_ver = is_fx_ver;
   var is_supported_fx_ver = parseInt(is_fx_ver,10) >= 10;

    var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
                && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
                && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)
                && (!is_khtml) && (!(is_moz)) && (!is_fb) && (!is_fx));

    // Netscape6 is mozilla/5 + Netscape6/6.0!!!
    // Mozilla/5.0 (Windows; U; Win98; en-US; m18) Gecko/20001108 Netscape6/6.0
    // Changed this to use navigator.vendor/vendorSub - dmr 060502
    // var nav6Pos = agt.indexOf('netscape6');
    // if (nav6Pos !=-1) {
    if ((navigator.vendor)&&
        ((navigator.vendor=="Netscape6")||(navigator.vendor=="Netscape"))&&
        (is_nav)) {
       is_major = parseInt(navigator.vendorSub);
       // here we need is_minor as a valid float for testing. We'll
       // revert to the actual content before printing the result.
       is_minor = parseFloat(navigator.vendorSub);
    }

    var is_nav2 = (is_nav && (is_major == 2));
    var is_nav3 = (is_nav && (is_major == 3));
    var is_nav4 = (is_nav && (is_major == 4));
    var is_nav4up = (is_nav && is_minor >= 4);  // changed to is_minor for
                                                // consistency - dmr, 011001
    var is_navonly      = (is_nav && ((agt.indexOf(";nav") != -1) ||
                          (agt.indexOf("; nav") != -1)) );

    var is_nav6   = (is_nav && is_major==6);    // new 010118 mhp
    var is_nav6up = (is_nav && is_minor >= 6) // new 010118 mhp

    var is_nav5   = (is_nav && is_major == 5 && !is_nav6); // checked for ns6
    var is_nav5up = (is_nav && is_minor >= 5);

    var is_nav7   = (is_nav && is_major == 7);
    var is_nav7up = (is_nav && is_minor >= 7);
    var is_nav71up = (is_nav && is_minor >= 7.1);
    var is_nav47 = (is_nav && (agt.indexOf('4.7')!=-1));

    var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
    var is_ie3    = (is_ie && (is_major < 4));
    var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 4")!=-1) );
    var is_ie4up  = (is_ie && (is_major >= 4));
    var is_ie5    = (is_ie && (is_major == 5) && (agt.indexOf("msie 5.0")!=-1) );
    var is_ie5_5  = (is_ie && (is_major == 5) && (agt.indexOf("msie 5.5") !=-1));
    var is_ie5up  = (is_ie && !is_ie3 && !is_ie4);
    var is_ie5_5up =(is_ie && !is_ie3 && !is_ie4 && !is_ie5);
    var is_ie6    = (is_ie && (is_major == 6) && (agt.indexOf("msie 6.")!=-1) );
    var is_ie6up  = (is_ie && !is_ie3 && !is_ie4 && !is_ie5 && !is_ie5_5);
    var is_ie7    = (is_ie && (is_major >= 7) && (agt.indexOf("msie 7.")!=-1) );
    var is_ie7up  = (is_ie && !is_ie3 && !is_ie4 && !is_ie5 && !is_ie5_5 && !is_ie6);
    var is_ie8    = (is_ie && (is_major >= 8) && (agt.indexOf("msie 8.")!=-1) );
    var is_ie8up  = (is_ie && !is_ie3 && !is_ie4 && !is_ie5 && !is_ie5_5 && !is_ie6 && !is_ie7);
    var is_ie11 = agt.indexOf('trident/7') != -1 && agt.indexOf('rv:11.0') != -1;
	var is_edge = agt.indexOf('edge') != -1;
	var edge_ver = is_edge ? parseInt(((new  RegExp(/edge\/([0-9]+)/g).exec(agt)) ? RegExp.$1:"0"), 10) : "0";
    if (is_ie11) {
    	is_ie = true;
    	is_ie8up = true;
    }
//alert(is_ie8up);
//alert(is_major);

    // KNOWN BUG: On AOL4, returns false if IE3 is embedded browser
    // or if this is the first browser window opened.  Thus the
    // variables is_aol, is_aol3, and is_aol4 aren't 100% reliable.
    var is_aol   = (agt.indexOf("aol") != -1);
    var is_aol3  = (is_aol && is_ie3);
    var is_aol4  = (is_aol && is_ie4);
    var is_aol5  = (agt.indexOf("aol 5") != -1);
    var is_aol6  = (agt.indexOf("aol 6") != -1);

    var is_opera = (agt.indexOf("opera") != -1);
    var is_opera2 = (agt.indexOf("opera 2") != -1 || agt.indexOf("opera/2") != -1);
    var is_opera3 = (agt.indexOf("opera 3") != -1 || agt.indexOf("opera/3") != -1);
    var is_opera4 = (agt.indexOf("opera 4") != -1 || agt.indexOf("opera/4") != -1);
    var is_opera5 = (agt.indexOf("opera 5") != -1 || agt.indexOf("opera/5") != -1);
    var is_opera5up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4);

    var is_webtv = (agt.indexOf("webtv") != -1);

    var is_TVNavigator = ((agt.indexOf("navio") != -1) || (agt.indexOf("navio_aoltv") != -1));
    var is_AOLTV = is_TVNavigator;

    var is_hotjava = (agt.indexOf("hotjava") != -1);
    var is_hotjava3 = (is_hotjava && (is_major == 3));
    var is_hotjava3up = (is_hotjava && (is_major >= 3));

    // *** JAVASCRIPT VERSION CHECK ***
    var is_js;
    if (is_nav2 || is_ie3) is_js = 1.0;
    else if (is_nav3) is_js = 1.1;
    else if (is_opera5up) is_js = 1.3;
    else if (is_opera) is_js = 1.1;
    else if ((is_nav4 && (is_minor <= 4.05)) || is_ie4) is_js = 1.2;
    else if ((is_nav4 && (is_minor > 4.05)) || is_ie5) is_js = 1.3;
    else if (is_hotjava3up) is_js = 1.4;
    else if (is_nav6 || is_gecko) is_js = 1.5;
    // NOTE: In the future, update this code when newer versions of JS
    // are released. For now, we try to provide some upward compatibility
    // so that future versions of Nav and IE will show they are at
    // *least* JS 1.x capable. Always check for JS version compatibility
    // with > or >=.
    else if (is_nav6up) is_js = 1.5;
    // NOTE: ie5up on mac is 1.4
    else if (is_ie5up) is_js = 1.3

    // HACK: no idea for other browsers; always check for JS version with > or >=
    else is_js = 0.0;


    // *** PLATFORM ***
    var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );
    // NOTE: On Opera 3.0, the userAgent string includes "Windows 95/NT4" on all
    //        Win32, so you can't distinguish between Win95 and WinNT.
    var is_win95 = ((agt.indexOf("win95")!=-1) || (agt.indexOf("windows 95")!=-1));

    // is this a 16 bit compiled version?
    var is_win16 = ((agt.indexOf("win16")!=-1) ||
               (agt.indexOf("16bit")!=-1) || (agt.indexOf("windows 3.1")!=-1) ||
               (agt.indexOf("windows 16-bit")!=-1) );

    var is_win31 = ((agt.indexOf("windows 3.1")!=-1) || (agt.indexOf("win16")!=-1) ||
                    (agt.indexOf("windows 16-bit")!=-1));

    var is_winme = ((agt.indexOf("win 9x 4.90")!=-1));
    var is_win2k = ((agt.indexOf("windows nt 5.0")!=-1));
    var is_winxp = ((agt.indexOf("windows nt 5.1")!=-1));
    var is_winvista = ((agt.indexOf("windows nt 6.0")!=-1));
    var is_win7 = ((agt.indexOf("windows nt 6.1")!=-1));
    var is_win8 = ((agt.indexOf("windows nt 6.2")!=-1) || (agt.indexOf("windows nt 6.3")!=-1));
    var is_win10 = ((agt.indexOf("windows nt 6.4")!=-1) || (agt.indexOf("windows nt 10.0")!=-1));

    // NOTE: Reliable detection of Win98 may not be possible. It appears that:
    //       - On Nav 4.x and before you'll get plain "Windows" in userAgent.
    //       - On Mercury client, the 32-bit version will return "Win98", but
    //         the 16-bit version running on Win98 will still return "Win95".
    var is_win98 = ((agt.indexOf("win98")!=-1) || (agt.indexOf("windows 98")!=-1));
    var is_winnt = ((agt.indexOf("winnt")!=-1) || (agt.indexOf("windows nt")!=-1));
    var is_win32 = (is_win95 || is_winnt || is_win98 ||
                    ((is_major >= 4) && (navigator.platform == "Win32")) ||
                    (agt.indexOf("win32")!=-1) || (agt.indexOf("32bit")!=-1));

    var is_os2   = ((agt.indexOf("os/2")!=-1) ||
                    (navigator.appVersion.indexOf("OS/2")!=-1) ||
                    (agt.indexOf("ibm-webexplorer")!=-1));

    var is_mac    = (agt.indexOf("mac")!=-1);
    var is_ipad = (agt.indexOf("mobile") > -1) && (agt.indexOf("safari") > -1);
    // hack ie5 js version for mac
    if (is_mac && is_ie5up) is_js = 1.4;
    var is_macosx = (is_mac && (agt.indexOf("mac os x")!=-1));
     var is_macosx9 = is_macosx;//(is_macosx && (agt.indexOf("10.9")!=-1));  //ONLY Mac OSX 10.3 version is supported

    var is_mac68k = (is_mac && ((agt.indexOf("68k")!=-1) ||
                               (agt.indexOf("68000")!=-1)));
    var is_macppc = (is_mac && ((agt.indexOf("ppc")!=-1) ||
                                (agt.indexOf("powerpc")!=-1)));

    var is_sun   = (agt.indexOf("sunos")!=-1);
    var is_sun4  = (agt.indexOf("sunos 4")!=-1);
    var is_sun5  = (agt.indexOf("sunos 5")!=-1);
    var is_suni86= (is_sun && (agt.indexOf("i86")!=-1));
    var is_irix  = (agt.indexOf("irix") !=-1);    // SGI
    var is_irix5 = (agt.indexOf("irix 5") !=-1);
    var is_irix6 = ((agt.indexOf("irix 6") !=-1) || (agt.indexOf("irix6") !=-1));
    var is_hpux  = (agt.indexOf("hp-ux")!=-1);
    var is_hpux9 = (is_hpux && (agt.indexOf("09.")!=-1));
    var is_hpux10= (is_hpux && (agt.indexOf("10.")!=-1));
    var is_aix   = (agt.indexOf("aix") !=-1);      // IBM
    var is_aix1  = (agt.indexOf("aix 1") !=-1);
    var is_aix2  = (agt.indexOf("aix 2") !=-1);
    var is_aix3  = (agt.indexOf("aix 3") !=-1);
    var is_aix4  = (agt.indexOf("aix 4") !=-1);
    var is_linux = (agt.indexOf("inux")!=-1);
    var is_linuxredhat9 = (agt.indexOf("redhat-linux-9")!=-1);

    var is_sco   = (agt.indexOf("sco")!=-1) || (agt.indexOf("unix_sv")!=-1);
    var is_unixware = (agt.indexOf("unix_system_v")!=-1);
    var is_mpras    = (agt.indexOf("ncr")!=-1);
    var is_reliant  = (agt.indexOf("reliantunix")!=-1);
    var is_dec   = ((agt.indexOf("dec")!=-1) || (agt.indexOf("osf1")!=-1) ||
           (agt.indexOf("dec_alpha")!=-1) || (agt.indexOf("alphaserver")!=-1) ||
           (agt.indexOf("ultrix")!=-1) || (agt.indexOf("alphastation")!=-1));
    var is_sinix = (agt.indexOf("sinix")!=-1);
    var is_freebsd = (agt.indexOf("freebsd")!=-1);
    var is_bsd = (agt.indexOf("bsd")!=-1);
    var is_unix  = ((agt.indexOf("x11")!=-1) || is_sun || is_irix || is_hpux ||
                 is_sco ||is_unixware || is_mpras || is_reliant ||
                 is_dec || is_sinix || is_aix || is_linux || is_bsd || is_freebsd);
    var is_vms   = ((agt.indexOf("vax")!=-1) || (agt.indexOf("openvms")!=-1));

    var chrome_ver = parseInt(((new  RegExp(/chrome\/([0-9]+)/g).exec(agt)) ? RegExp.$1:"0"), 10);
    var is_chrome8up = chrome_ver >= 8;
	var isChrome49up = chrome_ver >= 49;
//alert(agt);
</script>

<script>
    //the include file contains a try-catch block; introduced in js1.5 (IE6+, NS6+)
    if (is_nav6up || is_ie5up || is_fx) {
        document.write('<script type="text/javascript" language=JavaScript src="/utils/requestUrl.inc"><\/script>');
    }
</script>


<script language="JavaScript">
<!--
// initialize a variable to test for JavaScript 1.1.
// which is necessary for the window.location.replace method
var javascriptVersion1_1 = false;
// -->
</script>


<script language="JavaScript1.1">
<!--
javascriptVersion1_1 = true;
// -->
</script>


<script language="JavaScript">
<!--

// initialize global variables
var detectableWithVB = false;
var pluginFound = false;


function goURL(daURL) {
    // if the browser can do it, use replace to preserve back button
    if(javascriptVersion1_1) {
    window.location.replace(daURL);
    } else {
    window.location = daURL;
    }
    return;
}

function redirectCheck(pluginFound, redirectURL, redirectIfFound) {
    // check for redirection
    if( redirectURL && ((pluginFound && redirectIfFound) ||
    (!pluginFound && !redirectIfFound)) ) {
    // go away
    goURL(redirectURL);
    return pluginFound;
    } else {
    // stay here and return result of plugin detection
    return pluginFound;
    }
}

function canDetectPlugins() {
    if( detectableWithVB || (navigator.plugins && navigator.plugins.length > 0) ) {
    return true;
    } else {
    return false;
    }
}

var requiredMajorVersion = 10;
var noFlashPlugin = false;
var invalidFlashPlugin = false;
// -->
</script>
<script language="VBScript" type="text/vbscript">
<!-- // Visual basic helper required to detect Flash Player ActiveX control version information
Function VBGetSwfVer(i)
  on error resume next
  Dim swControl, swVersion
  swVersion = 0

  set swControl = CreateObject("ShockwaveFlash.ShockwaveFlash." + CStr(i))
  if (IsObject(swControl)) then
    swVersion = swControl.GetVariable("$version")
  end if
  VBGetSwfVer = swVersion
End Function
// -->
</script>
<script language="JavaScript1.1" type="text/javascript">
<!-- // Detect Client Browser type
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
// JavaScript helper required to detect Flash Player PlugIn version information
function JSGetSwfVer(i){
    // NS/Opera version >= 3 check for Flash plugin in plugin array
    if (navigator.plugins != null && navigator.plugins.length > 0) {
        if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
            var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
            var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
            descArray = flashDescription.split(" ");
            tempArrayMajor = descArray[2].split(".");
            versionMajor = tempArrayMajor[0];
            versionMinor = tempArrayMajor[1];
            if ( descArray[3] != "" ) {
                tempArrayMinor = descArray[3].split("r");
            } else {
                tempArrayMinor = descArray[4].split("r");
            }
            versionRevision = tempArrayMinor[1] > 0 ? tempArrayMinor[1] : 0;
            flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
        } else {
            flashVer = -1;
        }
    }
    // MSN/WebTV 2.6 supports Flash 4
    else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
    // WebTV 2.5 supports Flash 3
    else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
    // older WebTV supports Flash 2
    else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
    // Can't detect in all other cases
    else {

        flashVer = -1;
    }
    return flashVer;
}
// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function DetectFlashVer(reqMajorVer)
{
    // loop backwards through the versions until we find the newest version
    for (i=25;i>0;i--) {
        if (isIE && isWin && !isOpera) {
            versionStr = VBGetSwfVer(i);
        } else {
            versionStr = JSGetSwfVer(i);
        }
        //alert(i+":"+versionStr);
        if (versionStr == -1 ) {
            noFlashPlugin=true;
            //alert("Non IE: plugin not found.");
            return false;
        } else if (versionStr != 0) {
            if(isIE && isWin && !isOpera) {
                tempArray         = versionStr.split(" ");
                tempString        = tempArray[1];
                versionArray      = tempString .split(",");
            } else {
                versionArray      = versionStr.split(".");
            }
            versionMajor      = versionArray[0];
            versionMinor      = versionArray[1];
            versionRevision   = versionArray[2];

            versionString     = versionMajor + "." + versionRevision;   // 7.0r24 == 7.24
            versionNum        = parseFloat(versionString);
            // is the major.revision >= requested major.revision AND the minor version >= requested minor
            if ( versionMajor >= reqMajorVer) {
                //alert("1: Valid plugin found.");
                return true;
            } else {
                invalidFlashPlugin=true;
                //alert("Valid plugin not found.");
                return false;
            }
        }
    }
    noFlashPlugin=true;
    //alert("IE: plugin not found.");
    return false;
}
function detectFlash(redirectURL, redirectIfFound) {
    hasRequestedVersion = DetectFlashVer(requiredMajorVersion);

    // check for redirection
    return redirectCheck(hasRequestedVersion, redirectURL, redirectIfFound);
}

function detectDirector(redirectURL, redirectIfFound) {
    pluginFound = detectPlugin('Shockwave','Director');
    // if not found, try to detect with VisualBasic
    if(!pluginFound && detectableWithVB) {
    pluginFound = detectActiveXControl('SWCtl.SWCtl.1');
    }
    // check for redirection
    return redirectCheck(pluginFound, redirectURL, redirectIfFound);
}

function detectQuickTime(redirectURL, redirectIfFound) {
    pluginFound = detectPlugin('QuickTime');
    // if not found, try to detect with VisualBasic
    if(!pluginFound && detectableWithVB) {
    pluginFound = detectQuickTimeActiveXControl();
    }
    return redirectCheck(pluginFound, redirectURL, redirectIfFound);
}

function detectReal(redirectURL, redirectIfFound) {
    pluginFound = detectPlugin('RealPlayer');
    // if not found, try to detect with VisualBasic
    if(!pluginFound && detectableWithVB) {
    pluginFound = (detectActiveXControl('rmocx.RealPlayer G2 Control') ||
               detectActiveXControl('RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)') ||
               detectActiveXControl('RealVideo.RealVideo(tm) ActiveX Control (32-bit)'));
    }
    return redirectCheck(pluginFound, redirectURL, redirectIfFound);
}

function detectWindowsMedia(redirectURL, redirectIfFound) {
    pluginFound = detectPlugin('Windows Media Player');
    // if not found, try to detect with VisualBasic
    if(!pluginFound && detectableWithVB) {
    pluginFound = detectActiveXControl('WMPlayer.OCX.7');
    }
    return redirectCheck(pluginFound, redirectURL, redirectIfFound);
}

function detectPlugin() {
    // allow for multiple checks in a single pass
    var daPlugins = detectPlugin.arguments;
    // consider pluginFound to be false until proven true
    var pluginFound = false;
    // if plugins array is there and not fake
    if (navigator.plugins && navigator.plugins.length > 0) {
    var pluginsArrayLength = navigator.plugins.length;
    // for each plugin...
    for (pluginsArrayCounter=0; pluginsArrayCounter < pluginsArrayLength; pluginsArrayCounter++ ) {
        // loop through all desired names and check each against the current plugin name
        var numFound = 0;
        for(namesCounter=0; namesCounter < daPlugins.length; namesCounter++) {
        // if desired plugin name is found in either plugin name or description
        if( (navigator.plugins[pluginsArrayCounter].name.indexOf(daPlugins[namesCounter]) >= 0) ||
            (navigator.plugins[pluginsArrayCounter].description.indexOf(daPlugins[namesCounter]) >= 0) ) {
            // this name was found
            numFound++;
        }
        }
        // now that we have checked all the required names against this one plugin,
        // if the number we found matches the total number provided then we were successful
        if(numFound == daPlugins.length) {
        pluginFound = true;
        // if we've found the plugin, we can stop looking through at the rest of the plugins
        break;
        }
    }
    }
    return pluginFound;
} // detectPlugin
function hasWMPIE11() {
		if (!window.ActiveXObject.prototype) return false;
	  	try {if(new ActiveXObject('WMPlayer.OCX')) return true;}
		catch (e) { return false;}
	}
function hasRealPlayerIE11() {
		if (!window.ActiveXObject.prototype) return false;
	    	var definedControls = [
			'rmocx.RealPlayer G2 Control',
			'rmocx.RealPlayer G2 Control.1',
			'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
			'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
			'RealPlayer'
		];
		for (var i = 0; i < definedControls.length; i++) {
			try {if(new ActiveXObject(definedControls[i])) return true;}
			catch (e) {continue;}
		}
		return false;
	}
// Here we write out the VBScript block for MSIE Windows
if ((navigator.userAgent.indexOf('MSIE') != -1) && (navigator.userAgent.indexOf('Win') != -1)) {
    document.writeln('<script language="VBscript">');

    document.writeln('\'do a one-time test for a version of VBScript that can handle this code');
    document.writeln('detectableWithVB = False');
    document.writeln('If ScriptEngineMajorVersion >= 2 then');
    document.writeln('  detectableWithVB = True');
    document.writeln('End If');

    document.writeln('\'this next function will detect most plugins');
    document.writeln('Function detectActiveXControl(activeXControlName)');
    document.writeln('  on error resume next');
    document.writeln('  detectActiveXControl = False');
    document.writeln('  If detectableWithVB Then');
    document.writeln('     detectActiveXControl = IsObject(CreateObject(activeXControlName))');
    document.writeln('  End If');
    document.writeln('End Function');

    document.writeln('\'and the following function handles QuickTime');
    document.writeln('Function detectQuickTimeActiveXControl()');
    document.writeln('  on error resume next');
    document.writeln('  detectQuickTimeActiveXControl = False');
    document.writeln('  If detectableWithVB Then');
    document.writeln('    detectQuickTimeActiveXControl = False');
    document.writeln('    hasQuickTimeChecker = false');
    document.writeln('    Set hasQuickTimeChecker = CreateObject("QuickTimeCheckObject.QuickTimeCheck.1")');
    document.writeln('    If IsObject(hasQuickTimeChecker) Then');
    document.writeln('      If hasQuickTimeChecker.IsQuickTimeAvailable(0) Then ');
    document.writeln('        detectQuickTimeActiveXControl = True');
    document.writeln('      End If');
    document.writeln('    End If');
    document.writeln('  End If');
    document.writeln('End Function');

    document.writeln('</scr' + 'ipt>');
}
// -->
</script>

<script language="JavaScript" type="text/javascript">
<!--
//extended information
if (false){
    //document.write('<!--');
    document.write('<br><b>objLang.ShockwaveDirecter.msg1</b> ' + canDetectPlugins() + '<br><br>');

    if(canDetectPlugins()) {
            document.write('<b>objLang.ShockwaveDirecter.msg2</b> ' + detectDirector() + '<br>' +
           '<b>objLang.ShockwaveDirecter.msg3</b> ' + detectFlash() + '<br>' +
           '<b>objLang.ShockwaveDirecter.msg4</b> ' + detectQuickTime() + '<br>' +
           '<b>objLang.ShockwaveDirecter.msg5</b> ' + detectReal() + '<br>' +
           '<b>objLang.ShockwaveDirecter.msg6</b> ' + detectWindowsMedia());
    }

    document.write("<B>"+objLang.BasicData+"</B><HR>");
    document.write("navigator.appName " + navigator.appName + "<BR>");
    document.write("navigator.userAgent " + navigator.userAgent + "<BR>");
    document.write("navigator.appVersion " + navigator.appVersion + "<BR>");

    document.write("<B>"+objLang.BrowserVersion+"</B><HR>");
    document.write("major:" + is_major + "<BR>");
    document.write("minor:" + is_minor + "<BR><BR>");
    document.write("nav:" + is_nav + "<BR>");
    document.write("nav2:" + is_nav2 + "<BR>");
    document.write("nav3:" + is_nav3 + "<BR>");
    document.write("nav4:" + is_nav4 + "<BR>");
    document.write("nav4up:" + is_nav4up + "<BR>");
    document.write("nav6:" + is_nav6 + "<BR>");
    document.write("nav6up:" + is_nav6up + "<BR>");
    document.write("gecko:" + is_gecko + "<BR>");
    document.write("navonly:" + is_navonly + "<BR>");
    document.write("<P>" + "ie:" + is_ie + "<BR>");
    document.write("ie3:" + is_ie3 + "<BR>");
    document.write("ie4:" + is_ie4 + "<BR>");
    document.write("ie4up:" + is_ie4up + "<BR>");
    document.write("ie5:" + is_ie5 + "<BR>");
    document.write("ie5up:" + is_ie5up + "<BR>");
    document.write("ie5_5:" + is_ie5_5 + "<BR>");
    document.write("ie5_5up:" + is_ie5_5up + "<BR>");
    document.write("ie6:" + is_ie6 + "<BR>");
    document.write("ie6up:" + is_ie6up + "<BR>");
    document.write("ie7:" + is_ie7 + "<BR>");
    document.write("ie7up:" + is_ie7up + "<BR>");
    document.write("ie8:" + is_ie8 + "<BR>");
    document.write("ie8up:" + is_ie8up + "<BR>");
	document.write("ie11:" + is_ie11 + "<BR>");
	document.write("edge:" + is_edge + "<BR>");
	document.write("chrome49:" + isChrome49up + "<BR>");
    document.write("<P>" + "aol:" + is_aol + "<BR>");
    document.write("aol3:" + is_aol3 + "<BR>");
    document.write("aol4:" + is_aol4 + "<BR>");
    document.write("aol5:" + is_aol5 + "<BR>");
    document.write("aol6:" + is_aol6 + "<BR>");
    document.write("<P>" + "opera:" + is_opera + "<BR>");
    document.write("opera2:" + is_opera2 + "<BR>");
    document.write("opera3:" + is_opera3 + "<BR>");
    document.write("opera4:" + is_opera4 + "<BR>");
    document.write("opera5:" + is_opera5 + "<BR>");
    document.write("opera5up:" + is_opera5up + "<BR>");
    document.write("<P>" + "webtv:" + is_webtv + "<BR>");
    document.write("<P>" + "hotjava:" + is_hotjava + "<BR>");
    document.write("hotjava3:" + is_hotjava3 + "<BR>");
    document.write("hotjava3up:" + is_hotjava3up + "<BR>");
    document.write("<P>" + "AOL TV(TVNavigator):" + is_TVNavigator + "<BR>");


    document.write("javascript version:" + is_js + "<HR>");


    document.write("<B>OS</B><HR>");
    document.write("win:" + is_win + "<BR>");
    document.write("win16:" + is_win16 + "<BR>");
    document.write("win31:" + is_win31 + "<BR>");
    document.write("win32:" + is_win32 + "<BR>");
    document.write("win95:" + is_win95 + "<BR>");
    document.write("win98:" + is_win98 + "<BR>");
    document.write("winme:" + is_winme + "<BR>");
    document.write("winnt:" + is_winnt + "<BR>");
    document.write("win2k:" + is_win2k + "<BR>");

    document.write("<P>" + "os2:" + is_os2 + "<BR>");

    document.write("<P>" + "mac:" + is_mac + "<BR>");
    document.write("mac68k:" + is_mac68k + "<BR>");
    document.write("macppc:" + is_macppc + "<BR>");

    document.write("<P>" + "unix:" + is_unix + "<BR>");
    document.write("sun:" + is_sun + "<BR>");
    document.write("sun4:" + is_sun4 + "<BR>");
    document.write("sun5:" + is_sun5 + "<BR>");
    document.write("suni86:" + is_suni86 + "<BR>");
    document.write("irix:" + is_irix + "<BR>");
    document.write("irix5:" + is_irix5 + "<BR>");
    document.write("irix6:" + is_irix6 + "<BR>");
    document.write("hpux:" + is_hpux + "<BR>");
    document.write("hpux9:" + is_hpux9 + "<BR>");
    document.write("hpux10:" + is_hpux10 + "<BR>");
    document.write("aix:" + is_aix + "<BR>");
    document.write("aix1:" + is_aix1 + "<BR>");
    document.write("aix2:" + is_aix2 + "<BR>");
    document.write("aix3:" + is_aix3 + "<BR>");
    document.write("aix4:" + is_aix4 + "<BR>");
    document.write("linux:" + is_linux + "<BR>");
    document.write("sco:" + is_sco + "<BR>");
    document.write("unixware:" + is_unixware + "<BR>");
    document.write("mpras:" + is_mpras + "<BR>");
    document.write("reliant:" + is_reliant + "<BR>");
    document.write("dec:" + is_dec + "<BR>");
    document.write("sinix:" + is_sinix + "<BR>");
    document.write("bsd:" + is_bsd + "<BR>");
    document.write("freebsd:" + is_freebsd + "<BR>");

    document.write("<P>" + "vms:" + is_vms + "<BR><BR><BR>");
    //document.write('-->');

}

function TestCookies() {
    if (document.cookie.indexOf("testCookie")!=-1) {
        return true;
    }
    else{
        return false;
    }
}
function openRealTestWindow() {
    window.open("/utils/test/testReal.htm?text_language_id="+paramObj.text_language_id+(paramObj.download && paramObj.download=="n"?"&download=n":"")+(isSilverlightEnabled ? "&isSilverlightEnabled=true" :""),"ON24_Player_Test","status=no,width=400,height=540,directories=no,location=no,toolbar=no,scrollbars=no,resizable=no");
    return false;
}

function openWMPTestWindow() {
    window.open("/utils/test/testWMP.htm?text_language_id="+paramObj.text_language_id+(paramObj.download && paramObj.download=="n"?"&download=n":"")+(isSilverlightEnabled ? "&isSilverlightEnabled=true" :"")+(silverlight_ok ? "&silverlight=true" :""),"ON24_Player_Test","status=no,width=400,height=540,directories=no,location=no,toolbar=no,scrollbars=no,resizable=no");
    return false;
}

function openCookieHelp() {
    window.open("/view/help/sysreq.html?text_language_id="+paramObj.text_language_id+"#cookies_and_javascript","ON24_Help","status=no,width=890,height=540,directories=no,location=no,toolbar=no,scrollbars=no,resizable=no");
    return false;
}
function ns(i) {
    if (i == -1)
        return "Not available...";
    else
        return i;
}
function local_init()
{
//	if (typeof(document.jvm) != "undefined")
//	{
//		var j= document.JVMform;
//		if ((typeof(document.jvm.Support) != "undefined") && document.jvm.Support())
//		{
//			j.Support.value = "JVM support true";
//			j.MajorVersion.value = ns(document.jvm.MajorVersion());
//			j.MinorVersion.value = ns(document.jvm.MinorVersion());
//			j.BuildNumber.value = ns(document.jvm.BuildNumber());
//			j.BuildInc.value = ns(document.jvm.BuildIncrement());
//			j.Description.value = ns(document.jvm.Description());
//		}
//		else
//		{
//			j.Support.value = "Your browser does NOT support JVM!";
///			j.MajorVersion.value = "Not supported...";
//			j.MinorVersion.value = "Not supported...";
//	/		j.BuildNumber.value = "Not supported...";
//	/		j.BuildInc.value = "Not supported...";
//	/		j.Description.value = "Not supported...";
//		}
//	}
}
var kbits;
var bwcheck=true;
var strBits="";
var bandwidthStr="";
function RightNow()
{
    time = new Date();
    return time.getTime();
}
function CalSp(timeStart)
{
    timeEnd = RightNow();
    timeElapsed = (timeEnd - timeStart)/1000;
    kbytes = 200/timeElapsed;
    kbits = Math.round((kbytes * 1024 * 8)/1000);
    //alert(kbits)
    if(bwcheck) startTYSFLV(kbits);
    if (location.href.indexOf("target=")==-1)
        swapImage(kbits);
    else
        redirectToTarget();
}
function swapImage(kbits)
{	var randomNumber=Math.random();
    if(bwcheck)
    {
        logTYSResult();

        document.images.bwtest.src="images/bandwidth_is"+(bandwithImageLanguage!=""?"_":"")+bandwithImageLanguage+".gif";

        if(kbits>=minHighBW)
        {
            document.images.testimage.src="images/high"+(bandwithImageLanguage!=""?"_":"")+bandwithImageLanguage+".gif?"+randomNumber;
            if(bandwithImageLanguage=="T") document.images.testimage.width="43";
            else if(bandwithImageLanguage=="R") document.images.testimage.width="49";
            else if(bandwithImageLanguage!="") document.images.testimage.width="40";
            else document.images.testimage.width="30";
            document.images.testimage.height="18";
            document.images.testimage.alt='final result';
            bwcheck=false;
            bandwidthStr="high";
        }
        else if(kbits<minHighBW && kbits>=56)
        {
            document.images.testimage.src="images/medium"+(bandwithImageLanguage!=""?"_":"")+bandwithImageLanguage+".gif?"+randomNumber;
            if(bandwithImageLanguage=="F") document.images.testimage.width="62";
            else if (bandwithImageLanguage=="T") document.images.testimage.width="30";
            else document.images.testimage.width="49";
            document.images.testimage.height="18";
            bwcheck=false;
            bandwidthStr="medium";
            showLowbandwidthVideoMessage();
        }
        else
        {
            document.images.testimage.src="images/low"+(bandwithImageLanguage!=""?"_":"")+bandwithImageLanguage+".gif?"+randomNumber;
            if(bandwithImageLanguage!="") document.images.testimage.width="55";
            else document.images.testimage.width="27";
            document.images.testimage.height="18";
            bwcheck=false;
            bandwidthStr="low";
            showLowbandwidthVideoMessage();
        }
        bwcheck=false;
    }
}
function returnBits()
{
    var randomNumber=Math.random();
    timeStart = RightNow();
    var testImageURL = "http://" + location.host +"/utils/test/images/testImage.jpg?"+randomNumber
    if(window["usecdn"] && window["cdnprefix"]) testImageURL = CdnUtil.getCdnUrl(window["cdnprefix"], testImageURL);
    if (location.href.indexOf("target=")==-1)
        document.write( "<tr><td  valign='top' align='left'><img src='images/testing_bandwidth"+(bandwithImageLanguage!=""?"_":"")+bandwithImageLanguage+".gif' name ='bwtest' alt =testing </font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top' colspan='3' align='left'><img src='"+testImageURL+"' name ='testimage' alt='result' width=30 heught=18 onload='CalSp(timeStart)'><div id='videomessage' name='videomessage'></div></td></tr>");
    else
        document.write("<img src='"+testImageURL+"' name ='testimage' alt='result' width=30 heught=18 onload='CalSp(timeStart)'><div id='videomessage' name='videomessage'></div></td></tr>");
}

 function checkjava(){
    if ((typeof document.javaInfo)+''!='undefined')
        testjvm(document.javaInfo.version,document.javaInfo.vendor);
    else
        writeCheckForJava(true);
}

//-->
</script>


</head>

<body bgcolor="#FFFFFF" font size='2' face='Arial,Hevetica'>
<IE:clientCaps ID="oClientCaps" />

<script language="JavaScript">
<!--


var passColor="#0EBB0E";
var warnColor="#FE9E5E";
var infoColor="#000000";
var failColor="#BB0505";


var testForVmFailed=false;
function checkForJava(is_js,checkjvm)
{
    var javaEnabled = false;
    if(is_js >= 1.1)
    {
        if(navigator.javaEnabled())
        {
            javaEnabled = true;
            if(checkjvm){
                var curver = "5,0,3805,0";
                var curverArr=curver.split(",");
                if ( "Microsoft Internet Explorer" == navigator.appName )
                {
                    var sMSvmVersion = oClientCaps.getComponentVersion("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}", "ComponentID");
                    var sMSvmVersionArr=sMSvmVersion.split(",");
                    if (compareArray(curverArr,sMSvmVersionArr )<=0) {
                        javaEnabled = false;
                        testForVmFailed=true;
                    }
                    else testForVmFailed=false;
                }
            }
        }
    }
    return javaEnabled;
}

function compareArray(paramArray1,paramArray2){
    if(paramArray1.length!=paramArray1.length) return 0;
    for(var i=0;i<paramArray1.length;i++){
        if(paramArray1[i]>paramArray2[i]){
            return -1;
        }
    }
    return 1;
}

    function testjvm(ver,vendor){
        var curver = "5,0,3805,0";
        var relver = " "+objLang.testjvm.msg1;
        var versionok=false
        var msg="";
        var arrver=null;
        var arrmin=curver.split(",");


        if ( "Microsoft Internet Explorer" == navigator.appName && vendor.indexOf("Microsoft")>-1)
        {	//Running in Internet Explorer.

            if ( (sMSvmVersion = oClientCaps.getComponentVersion("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}", "ComponentID") ) )
            {	//Microsoft VM is present.
                arrver=sMSvmVersion.split(",");
                versionok=(arrmin[0]<=arrver[0]) && (arrmin[1]<=arrver[1]) && (arrmin[2]<=arrver[2]) && (arrmin[3]<=arrver[3]);


                objLang.testjvm.msg2=replaceTag(objLang.testjvm.msg2,"<version>","<b>"+curver+"</b>");

                ver+=", build "+sMSvmVersion
                ver+= (" ("+objLang.testjvm.msg2+ ")");

            } else
            {	//Microsoft VM is not present.

                msg+=(" "+objLang.testjvm.msg3+"<BR>");
                //msg+=versionText();
                objLang.testjvm.msg4=replaceTag(objLang.testjvm.msg4,"<url>","<a href='http://www.java.com'>www.java.com</a>");
                msg+="<br>"+objLang.testjvm.msg4;

            }
        } else if (vendor.indexOf("Sun")>-1){
            if (ver.indexOf("1.3")==0 || ver.indexOf("1.4")==0 || ver.indexOf("1.5")==0 || ver.indexOf("1.5")==0)
                versionok=true;
        }else{
            //Not running in Internet Explorer.
            objLang.testjvm.msg5=replaceTag(objLang.testjvm.msg5,"<browsername>",window.navigator.appName);
            msg+=(objLang.testjvm.msg5 + "<BR>" );
            msg+=(objLang.testjvm.msg6);
        }

        objLang.testjvm.msg7=replaceTag(objLang.testjvm.msg7,"<version>",ver);
        objLang.testjvm.msg7=replaceTag(objLang.testjvm.msg7,"<vendor>",vendor);

        if (versionok)
            msg+="<tr><td  valign='top'><font size='2'><b>"+objLang.JavaEnabled+"</b></font></td>"+
                "<td>&nbsp;&nbsp;&nbsp;</td>"+
                "<td valign='top' colspan='3'><font color='"+passColor+"'>"+
                "<b>"+objLang.Passed+"</b></font>"+
                "<br><font size=1><i>("+objLang.testjvm.msg7+")</i></font>"+
                "</td></tr>";
        else
            msg+="<tr><td  valign='top'><font size='2'><b>"+objLang.JavaEnabled+"</b></font></td>"+
                "<td>&nbsp;&nbsp;&nbsp;</td>"+
                "<td valign='top' colspan='3'><font color='"+passColor+"'>"+
                "<b>"+objLang.Passed+"</b></font>"+
                "<br><font size=1><i>("+objLang.testjvm.msg7+")</i></font>"+
                "</td></tr>";


        document.write( msg);
    }


function writeCheckForJava(javaEnabled)
{
    if(javaEnabled)
    {
        java_ok=true;
        document.write("<tr><td  valign='top'><font size='2'><b>"+objLang.JavaEnabled+"</b></font></td>"+
        "<td>&nbsp;&nbsp;&nbsp;</td>"+
        "<td valign='top' colspan='3'><font color='"+passColor+"'>"+
        "<b>"+objLang.Passed+"</b></font></td>"+
        "</tr>");
    }
    else if(!(is_mac && is_fx))
    {
        if(testForVmFailed==false){
            document.write("<tr><td  valign='top'><font size='2'><b>"+objLang.JavaEnabled+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top'><font color='"+failColor+"'>"+
            "<b>"+objLang.Failed+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td><font color='"+failColor+"'>"+
            objLang.writeCheckForJava.msg1+" "+
            "</font></td></tr>");
        }
        else{
            objLang.writeCheckForJava.msg2=replaceTag(objLang.writeCheckForJava.msg2,"<linkstart>","<A HREF='http://www.java.com/' target=_blank>");
            objLang.writeCheckForJava.msg2=replaceTag(objLang.writeCheckForJava.msg2,"<linkend>","</A>");
            document.write("<tr><td  valign='top'><font size='2'><b>"+objLang.JavaEnabled+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top'><font color='"+warnColor+"'>"+
            "<b>"+objLang.Warning+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td><font color='"+warnColor+"'>"+
            objLang.writeCheckForJava.msg2 +
            "</font></td></tr>");
        }
    }

}

var os_ok=false;
var os_value="";
var os_warning=false;
var browser_ok=false;
var browser_value="";
var xmlparser_ok=false;
var cookie_ok=false;
var realplayer_ok=false;
var windowsplayer_ok=false;
var silverlight_ok = Silverlight.isInstalled("2.0");
var flash_ok=false;

var str_os="";
var str_browser="";
var str_xmlparser="";
var str_flash="";
var qstring=location.search;
var str_cookie="";
var str_mediaPlayer="";
var java_ok=false;

flash_ok=detectFlash();
if (flash_ok){
    str_flash=(	"<tr><td  valign='top'><font size='2'><b>"+objLang.Flash+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top' colspan='3'><font color='"+passColor+"'>"+
            "<b>"+objLang.Passed+"</b></font></td>"+
            "</tr>");
}else if (!is_ipad) {
    objLang.detectFlash.msg1=replaceTag(objLang.detectFlash.msg1,"<linkstart>","<a href='http://www.macromedia.com/shockwave/download/triggerpages_mmcom/flash.html' target='_blank'>");
    objLang.detectFlash.msg1=replaceTag(objLang.detectFlash.msg1,"<linkend>","</a>");
    str_flash=(	"<tr><td  valign='top'><font size='2'><b>"+objLang.Flash+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top'><font color='"+failColor+"'>"+
            "<b>"+objLang.Failed+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td><font color='"+failColor+"'>"+
            (paramObj.flashtype+""=="both" || paramObj.flashtype+""=="flv"?"":objLang.detectFlash.msg1) +
            "</font></td></tr>");
}

if (  is_win7 || is_win8 || is_win10 || is_macosx9 || (is_linuxredhat9 && (paramObj["linux"]+""=="true"))){
    os_ok=true;
    if (is_win10) os_value="win10";
    if (is_win7) os_value="win7";
    if (is_win8) os_value="win8";
    if (is_linuxredhat9) os_value="linuxredhat9";
    if (is_macosx9) os_value="macosx9";

    str_os=(	"<tr><td  valign='top' nowrap><font size='2'><b>"+objLang.OperatingSystem+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top' colspan='3'><font color='"+passColor+"'>"+
            "<b>"+objLang.Passed+"</b></font></td>"+
            "</tr>");

}else if (is_mac){
    os_warning=true;
    str_os=(	"<tr><td  valign='top' nowrap><font size='2'><b>"+objLang.OperatingSystem+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top' width='20'><font color='"+warnColor+"'>"+
            "<b>"+objLang.Warning+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td><font color='"+warnColor+"'>"+
             objLang.OS.msg3  +
            "</font></td></tr>");
}else if (is_linux && (paramObj["linux"]+""=="true")){
    os_warning=true;
    str_os=(	"<tr><td  valign='top' nowrap><font size='2'><b>"+objLang.OperatingSystem+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top' width='20'><font color='"+warnColor+"'>"+
            "<b>"+objLang.Warning+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td><font color='"+warnColor+"'>"+
             objLang.OS.msg4  +
            "</font></td></tr>");
}else if (is_win2k || is_winxp || is_winvista || is_winnt  || is_win98 || is_winme){
    os_warning=true;
    objLang.OS.msg1=replaceTag(objLang.OS.msg1,"<linebreak>","<br>");
    str_os=(	"<tr><td  valign='top' nowrap><font size='2'><b>"+objLang.OperatingSystem+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top' width='20'><font color='"+warnColor+"'>"+
            "<b>"+objLang.Warning+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td><font color='"+warnColor+"'>"+
             objLang.OS.msg1  +
            "</font></td></tr>");
}else  if (is_win95  || is_unix || is_sun ){
    objLang.OS.msg2=replaceTag(objLang.OS.msg2,"<linebreak>","<br>");
    str_os=(	"<tr><td  valign='top' nowrap><font size='2'><b>"+objLang.OperatingSystem+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top'><font color='"+failColor+"'>"+
            "<b>"+objLang.Failed+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td><font color='"+failColor+"'>"+
             objLang.OS.msg2   +
            "</font></td></tr>");
}

if (firefox_ver >= 45 || is_ie11 || 
   ((isChrome49up || edge_ver == 13) && !(isMVC || isHTMLPure || isHTMLHybrid)) ||
   ((safari_ver == 9 || safari_ver == 10) && (isP10 || isMVC))){
	browser_ok=true;
	if(firefox_ver == 45) browser_value="firefox45";
	if(firefox_ver > 45) browser_value="firefoxup45";
	if(isChrome49up) browser_value="chrome49";
	if(is_ie11) browser_value="ie11";
	if(is_edge) browser_value="edge25";
	if(is_safari) browser_value="safari9";
	str_browser=(	"<tr><td valign='top'><font size='2'><b>"+objLang.Browser+"</b></font></td>"+
		"<td>&nbsp;&nbsp;&nbsp;</td>"+
		"<td valign='top' colspan='3'><font color='"+passColor+"'>"+
		"<b>"+objLang.Passed+"</b></font></td>"+
		"</tr>");
    }else if (is_linux || is_macosx){
        str_browser=	"<tr><td valign='top'><font size='2'><b>"+objLang.Browser+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top'><font color='"+failColor+"'>"+
            "<b>"+objLang.Failed+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td><font color='"+failColor+"'>"+
            objLang.msgBrowser.msg4+" ";
    }else{
    str_browser=	"<tr><td valign='top'><font size='2'><b>"+objLang.Browser+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top'><font color='"+failColor+"'>"+
            "<b>"+objLang.Failed+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td><font color='"+failColor+"'>"+
            objLang.msgBrowser.msg1+" ";
                if(isNextGenConsole || isFlashConsole) {
					objLang.msgBrowser.msg5=replaceTag(objLang.msgBrowser.msg5,"<link1start>","<a href='http://www.mozilla.com/firefox/' target='_blank'>");
					objLang.msgBrowser.msg5=replaceTag(objLang.msgBrowser.msg5,"<link2start>","<a href='http://www.google.com/chrome' target='_blank'>");
                    objLang.msgBrowser.msg5=replaceTag(objLang.msgBrowser.msg5,"<link3start>","<a href='http://www.microsoft.com/windows/ie/downloads/default.asp#latest' target='_blank'>");
                    objLang.msgBrowser.msg5=replaceTag(objLang.msgBrowser.msg5,"<link1end>","</a>");
                    objLang.msgBrowser.msg5=replaceTag(objLang.msgBrowser.msg5,"<link2end>","</a>");
                    objLang.msgBrowser.msg5=replaceTag(objLang.msgBrowser.msg5,"<link3end>","</a>");
                    str_browser+=objLang.msgBrowser.msg5;
				}else if (is_nav) {
                    objLang.msgBrowser.msg2=replaceTag(objLang.msgBrowser.msg2,"<link1start>","<a href='http://www.mozilla.com/firefox/' target='_blank'>");
                    objLang.msgBrowser.msg2=replaceTag(objLang.msgBrowser.msg2,"<link2start>","<a href='http://www.microsoft.com/windows/ie/downloads/default.asp#latest' target='_blank'>");
                    objLang.msgBrowser.msg2=replaceTag(objLang.msgBrowser.msg2,"<link1end>","</a>");
                    objLang.msgBrowser.msg2=replaceTag(objLang.msgBrowser.msg2,"<link2end>","</a>");
                    str_browser+=objLang.msgBrowser.msg2;
                }else{
                    objLang.msgBrowser.msg3=replaceTag(objLang.msgBrowser.msg3,"<link1start>","<a href='http://www.mozilla.com/firefox/' target='_blank'>");
                    objLang.msgBrowser.msg3=replaceTag(objLang.msgBrowser.msg3,"<link2start>","<a href='http://www.microsoft.com/windows/ie/downloads/default.asp#latest' target='_blank'>");
                    objLang.msgBrowser.msg3=replaceTag(objLang.msgBrowser.msg3,"<link1end>","</a>");
                    objLang.msgBrowser.msg3=replaceTag(objLang.msgBrowser.msg3,"<link2end>","</a>");
                    str_browser+=objLang.msgBrowser.msg3;
                }
                str_browser+="</font></td></tr>";
}


if (checkXMLParser1()){
    xmlparser_ok=true;
    str_xmlparser=(	"<tr><td valign='top'><font size='2'><b>"+objLang.XMLParser+"</b></font></td>"+
        "<td>&nbsp;&nbsp;&nbsp;</td>"+
        "<td valign='top' colspan='3'><font color='"+passColor+"'>"+
        "<b>"+objLang.Passed+"</b></font></td>"+
        "</tr>");
}else {
    objLang.msgXMLParser.msg1=replaceTag(objLang.msgXMLParser.msg1,"<link1start>","<a href=\"http://www.microsoft.com/windows/ie/downloads/default.asp#latest\">");
    objLang.msgXMLParser.msg1=replaceTag(objLang.msgXMLParser.msg1,"<link2start>","<a href=\"http://download.microsoft.com/download/d/9/8/d9886528-6438-4828-9094-697103203a32/msxml3usa.msi\">");
    objLang.msgXMLParser.msg1=replaceTag(objLang.msgXMLParser.msg1,"<link3start>","<a href=\"http://download.microsoft.com/download/WindowsInstaller/Install/2.0/NT45/EN-US/InstMsiW.exe\">");
    objLang.msgXMLParser.msg1=replaceTag(objLang.msgXMLParser.msg1,"<link4start>","<a href=\"http://download.microsoft.com/download/WindowsInstaller/Install/2.0/W9XMe/EN-US/InstMsiA.exe\">");
    objLang.msgXMLParser.msg1=replaceTag(objLang.msgXMLParser.msg1,"<link1end>","</a>");
    objLang.msgXMLParser.msg1=replaceTag(objLang.msgXMLParser.msg1,"<link2end>","</a>");
    objLang.msgXMLParser.msg1=replaceTag(objLang.msgXMLParser.msg1,"<link3end>","</a>");
    objLang.msgXMLParser.msg1=replaceTag(objLang.msgXMLParser.msg1,"<link4end>","</a>");
    objLang.msgXMLParser.msg1=replaceTag(objLang.msgXMLParser.msg1,"<doublequote>","\\\"");

    str_xmlparser=(	"<tr><td valign='top'><font size='2'><b>"+objLang.XMLParser+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top'><font color='"+failColor+"'>"+
            "<b>"+objLang.Failed+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td><font color='"+failColor+"'>"+
                "<font size=1>"+
                objLang.msgXMLParser.msg1 +
                "</i></font></td>"+
                "</tr>");

}

cookie_ok=TestCookies();
if (cookie_ok){
    str_cookie=("<tr><td valign='top'><font size='2'><b>"+objLang.Cookies+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top' colspan='3'><font color='"+passColor+"'>"+
            "<b>"+objLang.Passed+"</b></font></td>"+
            "</tr>");

}else{
    objLang.msgCookies.msg1=replaceTag(objLang.msgCookies.msg1,"<linkstart>","<a href='#' onclick='javascript:openCookieHelp();return false;'>");
    objLang.msgCookies.msg1=replaceTag(objLang.msgCookies.msg1,"</linkend>","</a>");
    str_cookie=(	"<tr><td valign='top'><font size='2'><b>"+objLang.Cookies+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top'><font color='"+failColor+"'>"+
            "<b>"+objLang.Failed+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td><font color='"+failColor+"'>"+
             objLang.msgCookies.msg1   +
            "</font></td></tr>");
}

realplayer_ok=detectReal() && location.search.indexOf("hasReal=true") > -1
windowsplayer_ok=detectWindowsMedia();
if(is_ie11){
	windowsplayer_ok = true;//hasWMPIE11(); //plugin detection in IE11 fails, so we'll always let it pass
	realplayer_ok = location.search.indexOf("hasReal=true") > -1 && hasRealPlayerIE11() ;
}
if(isSilverlightEnabled) {
    windowsplayer_ok = windowsplayer_ok && (is_win && is_ie);
    realplayer_ok = realplayer_ok && location.search.indexOf("hasReal=true") > -1
} else if(is_fx) {
    windowsplayer_ok=false; //for firefox, don't show windows media player link
}

if (realplayer_ok && (windowsplayer_ok || (isSilverlightEnabled && silverlight_ok))){
    objLang.msgMediaPlayer.msg1=replaceTag(objLang.msgMediaPlayer.msg1,"<link1start>","<a href='#' onclick='javascript: openRealTestWindow();'><u>");
    objLang.msgMediaPlayer.msg1=replaceTag(objLang.msgMediaPlayer.msg1,"<link2start>","<a href='#' onclick='javascript: openWMPTestWindow();'><u>");
    objLang.msgMediaPlayer.msg1=replaceTag(objLang.msgMediaPlayer.msg1,"<link1end>","</u></a>");
    objLang.msgMediaPlayer.msg1=replaceTag(objLang.msgMediaPlayer.msg1,"<link2end>","</u></a>");

    objLang.msgMediaPlayer.msg1Alt=replaceTag(objLang.msgMediaPlayer.msg1Alt,"<link1start>","<a href='#' onclick='javascript: openRealTestWindow();'><u>");
    objLang.msgMediaPlayer.msg1Alt=replaceTag(objLang.msgMediaPlayer.msg1Alt,"<link2start>","<a href='#' onclick='javascript: openWMPTestWindow();'><u>");
    objLang.msgMediaPlayer.msg1Alt=replaceTag(objLang.msgMediaPlayer.msg1Alt,"<link1end>","</u></a>");
    objLang.msgMediaPlayer.msg1Alt=replaceTag(objLang.msgMediaPlayer.msg1Alt,"<link2end>","</u></a>");

    str_mediaPlayer=(	"<tr>"+
            "<td colspan='5'><span style='font-size:14px;'><b>"+msgMediaPlayer.msg5+"</b></span><BR><font color='"+infoColor+"'>"+
            (isSilverlightEnabled && silverlight_ok ? objLang.msgMediaPlayer.msg1Alt : objLang.msgMediaPlayer.msg1) +
            "</font></td>"+
            "</tr>");

}else if (realplayer_ok){
    objLang.msgMediaPlayer.msg2=replaceTag(objLang.msgMediaPlayer.msg2,"<linkstart>","<a href='#' onclick='javascript: openRealTestWindow();'><u>");
    objLang.msgMediaPlayer.msg2=replaceTag(objLang.msgMediaPlayer.msg2,"<linkend>","</u></a>");
    str_mediaPlayer=(	"<tr>"+
            "<td colspan='5'><span style='font-size:14px;'><b>"+msgMediaPlayer.msg5+"</b></span><BR><font color='"+infoColor+"'>"+
            objLang.msgMediaPlayer.msg2 +
            "</font></td>"+
            "</tr>");
}else if (windowsplayer_ok || (isSilverlightEnabled && silverlight_ok)){
    objLang.msgMediaPlayer.msg3=replaceTag(objLang.msgMediaPlayer.msg3,"<linkstart>","<a href='#' onclick='javascript: openWMPTestWindow();'><u>");
    objLang.msgMediaPlayer.msg3=replaceTag(objLang.msgMediaPlayer.msg3,"<linkend>","</u></a>");

    objLang.msgMediaPlayer.msg3Alt=replaceTag(objLang.msgMediaPlayer.msg3Alt,"<linkstart>","<a href='#' onclick='javascript: openWMPTestWindow();'><u>");
    objLang.msgMediaPlayer.msg3Alt=replaceTag(objLang.msgMediaPlayer.msg3Alt,"<linkend>","</u></a>");

    str_mediaPlayer=(	"<tr><td colspan='5'><span style='font-size:14px;'><b>"+msgMediaPlayer.msg5+"</b></span><BR>"+
            "<font color='"+infoColor+"'>"+
            (isSilverlightEnabled && silverlight_ok ? objLang.msgMediaPlayer.msg3Alt : objLang.msgMediaPlayer.msg3) +
            "</font></td>"+
            "</tr>");
}else if (!is_ipad && !checkforflash) {
    objLang.msgMediaPlayer.msg4=replaceTag(objLang.msgMediaPlayer.msg4,"<linebreak>","<br>");
    objLang.msgMediaPlayer.msg4=replaceTag(objLang.msgMediaPlayer.msg4,"<listitemstart>","<li>");
    objLang.msgMediaPlayer.msg4=replaceTag(objLang.msgMediaPlayer.msg4,"<listitemend>","</li>");

    objLang.msgMediaPlayer.msg4Alt=replaceTag(objLang.msgMediaPlayer.msg4Alt,"<linebreak>","<br>");
    objLang.msgMediaPlayer.msg4Alt=replaceTag(objLang.msgMediaPlayer.msg4Alt,"<listitemstart>","<li>");
    objLang.msgMediaPlayer.msg4Alt=replaceTag(objLang.msgMediaPlayer.msg4Alt,"<listitemend>","</li>");

    str_mediaPlayer="<tr><td  valign='top'><font size='2'><b>"+objLang.MediaPlayer+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td valign='top'><font color='"+failColor+"'>"+
            "<b>"+objLang.Failed+"</b></font></td>"+
            "<td>&nbsp;&nbsp;&nbsp;</td>"+
            "<td><font color='"+failColor+"'>"+
            (isSilverlightEnabled ? objLang.msgMediaPlayer.msg4Alt : objLang.msgMediaPlayer.msg4) +
            "<br>"+
            "<A HREF='/utils/downloadwindowsmedia.html'  target=_new>"+
            "<img src='images/downloadwin.gif' alt='' border='0' align='absmiddle'> "+objLang.downloadwindowsmediaplayer+"</a>"+
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    /*if (isSilverlightEnabled) {
            str_mediaPlayer+="<br>&nbsp;<A HREF='/utils/downloadsilverlight.html' target=_new>"+
                                "<img src='images/downloadsilverlight.gif' alt='' border='0' align='absmiddle'> "+
                                objLang.downloadsilverlight+"</a>" +
                                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    } else if (!is_fx) {
        str_mediaPlayer+="<br><A HREF='/utils/downloadwindowsmedia.html' target=_new>"+
        "<img src='images/downloadwin.gif' alt='' border='0' align='absmiddle'> "+
        objLang.downloadwindowsmediaplayer+"</a>";

    }*/
    str_mediaPlayer+="</font></td></tr>";
}

var targetURL=paramObj["target"];
if (targetURL+""=="undefined" || targetURL=="null" || targetURL==""){
    if(paramObj.continueurl){
        document.write(	"<span style='font-size:16px;'><b>"+objLang.SystemTest+"</b></span><hr><span style='font-size:11px;'>"+objLang.SystemTestMsg1+"</span><br><table border='0' width='100%'>");
    } else {
        document.write(	"<span style='font-size:16px;'><b>"+objLang.TestYourSystem+"</b></span><hr><table border='0' width='100%'>");
    }

    if (qstring.indexOf("checkOS=true")>-1){
            document.write("<tr height='10'><td colspan='2'></td><td colspan='3' width='90%'></td></tr>");
            document.write(str_os);
    }else{
            os_ok=true;
    }

    if (qstring.indexOf("checkBrowser=true")>-1){
            document.write("<tr height='10'><td colspan='2'></td><td colspan='3' width='90%'></td></tr>");
            document.write(str_browser);
    }	else {
            browser_ok=true;
    }
    if (qstring.indexOf("checkCookie=true")>-1){
            document.write("<tr height='10'><td colspan='2'></td><td colspan='3' width='90%'></td></tr>");
            document.write(str_cookie);
    }else {
            cookie_ok=true;
    }

    /*
    if (qstring.indexOf("checkJava=true")>-1){
            document.write("<tr height='10'><td colspan='2'></td><td colspan='3' width='90%'></td></tr>");
            if(is_js >= 1.1)
            {
                
//                if (checkForJava(is_js,true)){
  //                  document.write('<applet id="javaInfo" code="JavaInfoApplet.class" height=1 width=1 hspace=1 alt="Browser has Java disabled"></applet>');
                    //checkjava();

                    //setTimeout('checkjava()',2000);

    //            }else
                    writeCheckForJava(checkForJava(is_js,true));
            }
    }else {
            java_ok=true;
    }
    */

    if (qstring.indexOf("checkXMLParser=true")>-1){
            document.write("<tr height='10'><td colspan='2'></td><td colspan='3' width='90%'></td></tr>");
            document.write(str_xmlparser);

    }

    if (qstring.indexOf("checkBandwidth=true")>-1){
        document.write("<tr height='10'><td colspan='2'></td><td colspan='3' width='90%'></td></tr>");
        returnBits();
    }

    var flashVideoURL="";
    if (checkforflash && !is_ipad){
        //document.write("<tr height='10'><td colspan='2'></td><td colspan='3' width='90%'></td></tr>");
        //document.write(str_flash);
        if(noFlashPlugin || invalidFlashPlugin){
            var errorPageURL="http://"+eventHost+"/utils/flash/help.html?sourcepage=tys&errorcd="+(noFlashPlugin?"PluginNotFound":"InvalidPlugin");
            if(paramObj.eventid) errorPageURL+="&eventid="+paramObj.eventid
            if(paramObj.sessionid) errorPageURL+="&sessionid="+paramObj.sessionid
            if(paramObj.eventuserid) errorPageURL+="&eventuserid="+paramObj.eventuserid
            if(paramObj.key) errorPageURL+="&key="+paramObj.key
            if(paramObj.text_language_id) errorPageURL+="&text_language_id="+paramObj.text_language_id
            if(paramObj.localeCountryCode) errorPageURL+="&localeCountryCode="+paramObj.localeCountryCode
            //document.write("<tr height='1'><td colspan='2'></td><td colspan='3' width='90%'></td></tr>");
            document.write("<tr height='30'><td colspan='5'><font size='2'><b>"+testFlash.msg1+"</b> </font><font size='1' color='#999999'>("+testFlash.msg2+")</font><br><img src='/images/clear.gif' border='0' width='1' height='5'><br><iframe name='flashFrame' id='flashFrame' frameborder='0' scrolling='No' width='320' height='240' src='"+errorPageURL+"' marginheight='0' marginwidth='0'></iframe></td></tr>");
        }  else {
            if(paramObj.flashtype+""=="both" || paramObj.flashtype+""=="flv"){
                flashVideoURL="http://"+eventHost+"/utils/flash/flashplayer.html?id=test/testyoursystem&ctype=A&timer=false&align=left&sourcepage=tys";
                if(paramObj.eventid) flashVideoURL+="&eventid="+paramObj.eventid
                if(paramObj.sessionid) flashVideoURL+="&sessionid="+paramObj.sessionid
                if(paramObj.eventuserid) flashVideoURL+="&eventuserid="+paramObj.eventuserid
                if(paramObj.key) flashVideoURL+="&key="+paramObj.key
                if(paramObj.minhighbw) flashVideoURL+="&minhighbw="+paramObj.minhighbw
                if(paramObj.text_language_id) flashVideoURL+="&language="+paramObj.text_language_id
                if(paramObj.text_language_id) flashVideoURL+="&text_language_id="+paramObj.text_language_id
                //document.write("<tr height='1'><td colspan='2'></td><td colspan='3' width='90%'></td></tr>");
                document.write("<tr height='30'><td colspan='5'><font size='2'><b>"+testFlash.msg1+"</b> </font><font size='1' color='#999999'>("+testFlash.msg2+")</font><br><img src='/images/clear.gif' border='0' width='1' height='5'><br><iframe name='flashFrame' id='flashFrame' frameborder='0' scrolling='No' width='320' height='240'  marginheight='0' marginwidth='0'></iframe></td></tr>");
            } else {
                var SWFURL="http://"+eventHost+"/utils/flash/testyoursystem.swf";
                if(usecdn && cdnprefix) SWFURL=CdnUtil.getCdnUrl(cdnprefix+SWFURL)
                document.write("<tr height='30'><td colspan='5'><font size='2'><b>"+testFlash.msg1+"</b> </font><font size='1' color='#999999'>("+testFlash.msg2+")</font><br><img src='/images/clear.gif' border='0' width='1' height='5'><br><object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width='320' height='240' id='testyoursystem' align='middle'><param name='allowScriptAccess' value='sameDomain' /><param name='movie' value='"+SWFURL+"' /><param name='quality' value='high' /><param name='bgcolor' value='#ffffff' /><param name='loop' value='false' /><embed src='"+SWFURL+"' quality='high' bgcolor='#ffffff'  width='320' height='240' name='testyoursystem' align='middle' allowScriptAccess='sameDomain' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' loop='false'/></object></td></tr>");

            }
        }

    }



//	if (os_ok && browser_ok && cookie_ok){
        if (qstring.indexOf("checkMP=true")>-1){
                document.write("<tr height='10'><td colspan='5'></td>");
                document.writeln(str_mediaPlayer);
        }
//	}

    if(paramObj.continueurl){
        var retryButtonStr="<tr height='30'><td colspan='5'><form><input type='button' name='retry' value='"+objLang.RetryTest+"' onclick='window.location.reload(true);'></form></td></tr>";
        var retryAndVisibleContinuButtonStr="<tr height='30'><td colspan='5'><form><input type='button' name='retry' value='"+objLang.RetryTest+"' onclick='window.location.reload(true);'>&nbsp;&nbsp;&nbsp;&nbsp;<span name='divContinueButton' id='divContinueButton' style='visibility:visible;'><input type='button' name='redirect' value='Continue' onclick='location.href=\""+unescape(paramObj.continueurl)+"\"'></span></form></td></tr>";
        var retryAndHiddenContinuButtonStr="<tr height='30'><td colspan='5'><form><input type='button' name='retry' value='"+objLang.RetryTest+"' onclick='window.location.reload(true);'>&nbsp;&nbsp;&nbsp;&nbsp;<span name='divContinueButton' id='divContinueButton' style='visibility:hidden;'><input type='button' name='redirect' value='Continue' onclick='location.href=\""+unescape(paramObj.continueurl)+"\"'></span></form></td></tr>"
        var blankRowStr="<tr height='30'><td colspan='5'></td></tr>";

        var autocontinueonpass=qstring.indexOf("autocontinueonpass=true")>-1;
        var continueonfailure=qstring.indexOf("continueonfailure=true")>-1;
        
        var isflv=checkforflash && paramObj.flashtype+""!="swf" && !is_ipad;
        var allcheckpassed = allCheckPassed();
        //alert(autocontinueonpass+":"+continueonfailure+":"+checkforflash+":"+isflv+":"+allcheckpassed);
        if(autocontinueonpass){
            if(allcheckpassed) {
                if(isflv){
                    document.write(blankRowStr);
                    if(continueonfailure){ // always show continue button
                        document.write(retryAndVisibleContinuButtonStr);
                    } else { // show continue only when flv plays successfully
                        document.write(retryAndHiddenContinuButtonStr);
                    }
                    setTimeout("checkFlashStatus(true,true)",200);
                    document.write(blankRowStr);
                } else { // all passed, go to lobby
                    //location.href=unescape(paramObj.continueurl);
                    document.write(retryAndVisibleContinuButtonStr);
                    document.write(blankRowStr);
                    gotoLobbyAfterBWCheck(unescape(paramObj.continueurl));
                }
            } else { //  all check not passed
                document.write(blankRowStr);
                if(continueonfailure) document.write(retryAndVisibleContinuButtonStr);
                else document.write(retryButtonStr);
                document.write(blankRowStr);
            }
        } else { // no autocontinue
            if(allcheckpassed) {
                if(isflv){
                    document.write(blankRowStr);
                    if(continueonfailure){
                        document.write(retryAndVisibleContinuButtonStr);
                    } else { // showcontinue if flv plays successfully
                        document.write(retryAndHiddenContinuButtonStr);
                        setTimeout("checkFlashStatus(false,true)",200);
                    }
                    document.write(blankRowStr);
                } else{ // all check passed & not flv
                    document.write(blankRowStr);
                    document.write(retryAndVisibleContinuButtonStr);
                    document.write(blankRowStr);
                }
            } else {// not all check passed
                document.write(blankRowStr);
                if(continueonfailure) document.write(retryAndVisibleContinuButtonStr);
                else document.write(retryButtonStr);
                document.write(blankRowStr);
            }
        }
    } else if(checkforflash && !is_ipad){
        document.write("<tr height='30'><td colspan='5'></td></tr>");
        document.write("<tr height='30'><td colspan='5'><form><input type='button' name='retry' value='"+objLang.RetryTest+"' onclick='window.location.reload(true);'></form></td></tr>")
    }
    document.write(	"</table>");
}else{//targetURL is not null
    if (qstring.indexOf("checkBandwidth=true")>-1)
        returnBits();
    else
        redirectToTarget()

}


function redirectToTarget(){
    if (targetURL.indexOf("?")==-1) targetURL+="?";
    targetURL+="&os_ok="+os_ok+"&os="+os_value;
    targetURL+="&browser_ok="+browser_ok+"&browser="+browser_value;
    targetURL+="&cookie_ok="+cookie_ok;
    targetURL+="&flash_ok="+flash_ok;
    targetURL+="&realplayer_ok="+realplayer_ok;
    targetURL+="&windowsplayer_ok="+windowsplayer_ok;
    targetURL+="&bandwidth="+kbits;
    targetURL+="&xmlparser_ok="+xmlparser_ok;
    targetURL+="&java_ok="+java_ok;
    location.href=targetURL+(qstring!=""?"&"+qstring.substring(1):"");
}


function logTYSResult(){
    if(!paramObj.eventid || !paramObj.sessionid || !paramObj.eventuserid) return false;
    var resultStr="os_ok="+os_ok+",os="+os_value;
    resultStr+=",browser_ok="+browser_ok+",browser="+browser_value;
    resultStr+=",cookie_ok="+cookie_ok;
    resultStr+=",flash_ok="+flash_ok;
    resultStr+=",realplayer_ok="+realplayer_ok;
    resultStr+=",windowsplayer_ok="+windowsplayer_ok;
    resultStr+=",bandwidth="+kbits;
    resultStr+=",xmlparser_ok="+xmlparser_ok;
    resultStr+=",java_ok="+java_ok;

    var trackURL ="http://"+eventHost+"/utilApp/StreamTrackServlet?"
                +"eventid="+paramObj.eventid
                +"&sessionid="+paramObj.sessionid
                +"&eventuserid="+paramObj.eventuserid
                +"&contentname=TestYourSystem"
                +"&location=TYS"
                +"&mode=log&logdetails=true"
                +"&type=event"
                +"&action=TYSResult"
                +"&stat1=1"
                +"&details="+resultStr;
    //alert(trackURL);
    if(document.logImg) document.logImg.src = trackURL;
    else {
        var tmpimg = new Image();
        tmpimg.src=trackURL;
    }
}

function allCheckPassed(){
    if(qstring.indexOf("checkBrowser=true")>-1 && !browser_ok) return false;
    if(qstring.indexOf("checkOS=true")>-1 && !os_ok) return false;
    if(qstring.indexOf("checkCookie=true")>-1 && !cookie_ok) return false;
    if (!is_ipad) {
        if(checkforflash && !flash_ok) return false;
        if(qstring.indexOf("checkJava=true")>-1 && !java_ok) return false;
        if(qstring.indexOf("checkMP=true")>-1 && !(realplayer_ok || windowsplayer_ok)) return false;
    }
    return true;
}

function startTYSFLV(){
    if(flashVideoURL!=""){
        var flashFrame=document.flashFrame;
        if(!flashFrame && document.getElementById) flashFrame=document.getElementById("flashFrame");
        if(flashFrame.contentWindow) flashFrame=flashFrame.contentWindow;
        //alert(flashVideoURL);
        flashFrame.location.href=flashVideoURL+"&kbits="+kbits;
    }
}

function checkFlashStatus(autocontinueonpass,allpassed){
    if (is_ipad) {
        return;
    }
    var flashFrame=document.flashFrame;
    if(!flashFrame && document.getElementById) flashFrame=document.getElementById("flashFrame");
    if(flashFrame.contentWindow) flashFrame=flashFrame.contentWindow;
    if(flashFrame){
        if(flashFrame.flashStreamStarted){
            if(autocontinueonpass && allpassed){
                location.href=unescape(paramObj.continueurl);
            } else {
                var continueDiv=document.all["divContinueButton"];
                if(!continueDiv) continueDiv=document.getElementById("divContinueButton");
                if(continueDiv) continueDiv.style.visibility="visible";
            }
        } else setTimeout("checkFlashStatus("+autocontinueonpass+","+allpassed+")",200);
    } else setTimeout("checkFlashStatus("+autocontinueonpass+","+allpassed+")",200);
}

function gotoLobbyAfterBWCheck(url){
    if(qstring.indexOf("checkBandwidth=true")>-1 && bandwidthStr=="") setTimeout("gotoLobbyAfterBWCheck('"+url+"')",500);
    else if(qstring.indexOf("checkBandwidth=true")==-1 || bandwidthStr=="high" || !paramObj.mediatype || (paramObj.mediatype && paramObj.mediatype=="audio")){
        location.href=url;
    }
}

function showLowbandwidthVideoMessage(){
    if(paramObj.mediatype && paramObj.mediatype!="audio"){
        var videomessage=null;
        if(document.getElementById){
            videomessage = document.getElementById("videomessage");
        } else if(document.all){
            videomessage = document.all["videomessage"];
        } else if(document.videomessage){
            videomessage = document.videomessage;
        }
        if(videomessage){
            if(paramObj.mediatype=="both"){
                videomessage.innerHTML = msgMediaPlayer.msg6;
            } else if(paramObj.mediatype=="video"){
                videomessage.innerHTML = msgMediaPlayer.msg7;
            }
        }
    }
}
//-->
</script>

<noscript>
Your browser does not support JavaScript,
so we cannot perform the appropriate tests
on your system. Please enable javascript
in your browser and try again.
</noscript>



<script language="JavaScript">
<!--
    isLoaded = true;
    //-->
</script>


<img name='logImg' src='/images/clear.gif' border='0' width='1' height='1'>
</body>
</html>
