/*
	ChkBrowser 0.0.1
	a function which returns specified data depending on a user's browser
	written by Savchenko Arthur, 2012
	is free to use for everyone in condition of saving the author's name
*/
function ifBrowser (obj) {
	var none = obj["none"] || "none";
	function cBrowser() {
		var ua = navigator.userAgent;
		var bName = function () {
			if (ua.search(/MSIE/) > -1) return "ie";
			if (ua.search(/Firefox/) > -1) return "firefox";
			if (ua.search(/Opera/) > -1) return "opera";
			if (ua.search(/Chrome/) > -1) return "chrome";
			if (ua.search(/Safari/) > -1) return "safari";
			if (ua.search(/Konqueror/) > -1) return "konqueror";
			if (ua.search(/Iceweasel/) > -1) return "iceweasel";
			if (ua.search(/SeaMonkey/) > -1) return "seamonkey";}();
		var version = function (bName) {
			switch (bName) {
				case "ie" : return (ua.split("MSIE ")[1]).split(";")[0];break;
				case "firefox" : return ua.split("Firefox/")[1];break;
				case "opera" : return ua.split("Version/")[1];break;
				case "chrome" : return (ua.split("Chrome/")[1]).split(" ")[0];break;
				case "safari" : return (ua.split("Version/")[1]).split(" ")[0];break;
				case "konqueror" : return (ua.split("KHTML/")[1]).split(" ")[0];break;
				case "iceweasel" : return (ua.split("Iceweasel/")[1]).split(" ")[0];break;
				case "seamonkey" : return ua.split("SeaMonkey/")[1];break;
			}}(bName);
		return [bName,bName + version.split(".")[0],bName + version];
	}
	var current_browser = cBrowser();
	for (var key in obj) {
		var trg = key.toLowerCase();
		if (trg.indexOf(current_browser[2]) > -1) return obj[key];
		else if (trg.indexOf(current_browser[1]) > -1) return obj[key];
		else {
			var nsymbol = trg.charAt(trg.indexOf(current_browser[0])+current_browser[0].length);
			if (trg.indexOf(current_browser[0]) > -1 && (nsymbol == " " || nsymbol == "")) return obj[key];
		};
	}
	return none;
}




$( ".box" ).animate({
height: 20
}, "slow" ).queue(function() {
$( "#title" ).html( "We're in the animation, baby!" );
});






$( ".box" ).animate({
height: 20
}, "slow" ).queue(function() {
$( "#title" ).html( "We're in the animation, baby!" );
$( this ).dequeue();
}).animate({
height: 150
});


$.fn.pause = function( n ) {
return this.queue(function() {
var el = this;
setTimeout(function() {
return $( el ).dequeue();
}, n );
});
};
$( ".box" ).animate({
height: 20
}, "slow" ).pause( 1000 ).animate({
height: 150
});





/*
*/


function removeClass
{
var link = $('#link');
link.addClass('current');
setTimeout(function() {
	link.removeClass('current');
}, 3000);
}







