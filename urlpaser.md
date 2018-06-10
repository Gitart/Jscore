## Parser URL


http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
http://www.sitepoint.com/url-parsing-isomorphic-javascript/

Заполнение дропдаун
http://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array

file:///C:/html/structure.html?id=345&er=566&ID=456786996


```javascript
function ParseUrl(){
  var url=window.location;

  //alert(url.search.split("&")[1].split("=")[1]);
  alert(getParameterByName("ID",url));=>456786996
  alert(getParameterByName("id",url));=>345
  alert(getParameterByName("er",url));=>566
  alert(getParameterByName("nm",url));=>null

}

// ****************************************************************
// Get url & parameters
// ****************************************************************
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var parser = document.createElement('a');
parser.href = "http://example.com:3000/pathname/?search=test#hash";

parser.protocol; // => "http:"
parser.hostname; // => "example.com"
parser.port;     // => "3000"
parser.pathname; // => "/pathname/"
parser.search;   // => "?search=test"
parser.hash;     // => "#hash"
parser.host;     // => "example.com:3000"

//using String.split to split and assign Object

function splitCurrentURL(){
  //query given index.html?this=true&that=good;
  var url = location.href.split("?")[1]; // this=true&that=good;
  params = {}; //init param obj
  url = url.split("&"); // ['this=true','that=good']
  for (var i = 0; i<url.length; i++){

    var split_cache = url[i].split("="); // ['this','true'], ...
     params[split_cache[0]] = split_cache[1]; // {this:true}, ...

  }
  return params; // {this:"true", that:"good"}
}

//alternative method using HTMLAnchorElement's basic API (https://gist.github.com/jlong/2428561)
function splitCurrentURL(){
  //query given index.html?this=true&that=good;
  var url = document.createElement('a');
  url.href = location.href; //assign current url into HTMLAnchorElement
  url = url.search.slice(1); //to cut "?" char
  params = {};
  url = url.split("&"); // ['this=true','that=good']
  for (var i = 0; i<url.length; i++){

    var split_cache = url[i].split("="); // ['this','true']
    params[split_cache[0]] = split_cache[1]; // {this:true}

  }
  return params;
}

```



http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
http://www.sitepoint.com/url-parsing-isomorphic-javascript/

Заполнение дропдаун
http://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array






file:///C:/ORION/html/structure.html?id=345&er=566&ID=456786996

function ParseUrl(){
  var url=window.location;

  //alert(url.search.split("&")[1].split("=")[1]);
  alert(getParameterByName("ID",url));=>456786996
  alert(getParameterByName("id",url));=>345
  alert(getParameterByName("er",url));=>566
  alert(getParameterByName("nm",url));=>null

}

// ****************************************************************
// Get url & parameters
// ****************************************************************
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}




var parser = document.createElement('a');
parser.href = "http://example.com:3000/pathname/?search=test#hash";

parser.protocol; // => "http:"
parser.hostname; // => "example.com"
parser.port;     // => "3000"
parser.pathname; // => "/pathname/"
parser.search;   // => "?search=test"
parser.hash;     // => "#hash"
parser.host;     // => "example.com:3000"


//using String.split to split and assign Object

function splitCurrentURL(){
  //query given index.html?this=true&that=good;
  var url = location.href.split("?")[1]; // this=true&that=good;
  params = {}; //init param obj
  url = url.split("&"); // ['this=true','that=good']
  for (var i = 0; i<url.length; i++){

    var split_cache = url[i].split("="); // ['this','true'], ...
     params[split_cache[0]] = split_cache[1]; // {this:true}, ...

  }
  return params; // {this:"true", that:"good"}
}

//alternative method using HTMLAnchorElement's basic API (https://gist.github.com/jlong/2428561)
function splitCurrentURL(){
  //query given index.html?this=true&that=good;
  var url = document.createElement('a');
  url.href = location.href; //assign current url into HTMLAnchorElement
  url = url.search.slice(1); //to cut "?" char
  params = {};
  url = url.split("&"); // ['this=true','that=good']
  for (var i = 0; i<url.length; i++){

    var split_cache = url[i].split("="); // ['this','true']
    params[split_cache[0]] = split_cache[1]; // {this:true}

  }
  return params;
}
