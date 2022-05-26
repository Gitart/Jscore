const getUrlParams = url => `${url}?`.split('?')[1]
     .split('&').reduce((params, pair) =>
    ((key, val) => key ? {...params, [key]: val} : params)
    (...`${pair}=`.split('=').map(decodeURIComponent)), {});
	
    console.log(getUrlParams('https://google.com/foo?a=1&b=2&c')); // Will log {a: '1', b: '2', c: ''}
    console.log(getUrlParams('/foo?a=1&b=2&c')); // Will log {a: '1', b: '2', c: ''}
    console.log(getUrlParams('?a=1&b=2&c')); // Will log {a: '1', b: '2', c: ''}
    console.log(getUrlParams('https://google.com/')); // Will log {}
    console.log(getUrlParams('a=1&b=2&c')); // Will log {}
    console.log(getUrlParams(location)); 
 
function getURLParameters(paramName)
{
    var sURL = window.document.URL.toString();
    if (sURL.indexOf("?") > 0)
    {
        var arrParams = sURL.split("?");
        var arrURLParams = arrParams[1].split("&");
        var arrParamNames = new Array(arrURLParams.length);
        var arrParamValues = new Array(arrURLParams.length);

        var i = 0;
        for (i = 0; i<arrURLParams.length; i++)
        {
            var sParam =  arrURLParams[i].split("=");
            arrParamNames[i] = sParam[0];
            if (sParam[1] != "")
                arrParamValues[i] = unescape(sParam[1]);
            else
                arrParamValues[i] = "No Value";
        }

        for (i=0; i<arrURLParams.length; i++)
        {
            if (arrParamNames[i] == paramName)
            {
                //alert("Parameter:" + arrParamValues[i]);
                return arrParamValues[i];
            }
        }
        return "No Parameters Found";
    }
}
