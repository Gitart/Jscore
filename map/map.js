
// https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript
function norm(){
var s = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';

var obj = JSON.parse(s);

document.getElementById("user").innerHTML =
"Name: " + obj.first_name + " " + obj.last_name + "<br>" +
"Location: " + obj.location;
}



function norm9(){
	localStorage['storeObj']="Testtings" ;
	var getObject = localStorage['storeObj'];
	Prn(getObject)
}


function norm8(){
var myObj = {
    one: {
        title: 'first',
        id: 1,
        customKey : {
            first: "Новость городка",
            second: "Вторая часть марлизонского балета"
        }
    },
    two: {
        title: 'second',
        id: 2
    },
    three: {
        title: 'this is the third',
        id: 3
    }
};



localStorage.setItem('storeObj', JSON.stringify(myObj));
var getObject = JSON.parse(localStorage.getItem('storeObj'));
Prn(getObject.one.title)
Prn(getObject.one.id)
Prn(getObject.one.customKey.first)
Prn(getObject.one.customKey.second)
}


// https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript
function norm7(){
var user = {
    first_name: "Sammy",
    last_name : "Shark",
    online    : true,
    full_name : function() {
       return this.first_name + " " + this.last_name;
    }
};


   Prn(user.full_name());

	var sammy = {
	  "first_name"  :  "Sammy",
	  "last_name"   :  "Shark",
	  "online"      :  true
	}

    Prn(sammy.first_name);
}


function Prn(Txt){
     console.log(Txt)	
}

function norm5(){

const map = new Map([
  [1970, 'bell bottoms'],
  [1980, 'leg warmers'],
  [1990, 'flannel'],
]);

//Use the has() method to check for the existence of an item in a map. has() will return a Boolean.

// Check if a key exists in a Map
sf=map.has(1990) // false
sd=map.has('country') // true
//Use the get() method to retrieve a value by key.

// Get an item from a Map
s=map.get(1970) // "otter"
console.log(s);

console.info("Есть такой");
console.warn("Есть такой");
console.error("Есть такой"+sf);

sz=map.size
console.log("Size :" + sz);
}



function norm4(){
const map = new Map([
  [1970, 'bell bottoms'],
  [1980, 'leg warmers'],
  [1990, 'flannel'],
]);
console.log(map);
s=map.keys();

for (const [key, value] of map) {
     console.log(`${key}: ${value}`)
}
}


function norm3(){
	var app     = new Object();
	app.Name    = "Test application";
	app.Title   = "Тестовое приложение";
	app.Ids     = "Номер приложения";
    localStorage["set"] = app;
    var s=localStorage["set"];
    alert(s);
}

function norm2(){
	var app     = new Object();
	app.Name    = "Test application";
	app.Title   = "Тестовое приложение";
	app.Ids     = "Номер приложения";

    alert(app.Name);
    localStorage["set"] = JSON.stringify(app);
    var s=localStorage["set"];
    // user = JSON.parse(localStorage.getItem('set'))
    user = JSON.parse(s)

    alert(user.Name);
	$(".message-body").hide(1000);
}


function norm1(){
	//$("#navbarExampleTransparentExample div a:eq(1)").addClass("imp-ert");
	//$("#elem1").addClass("imp-ert");
	$(".message-body").addClass("imp-ert");
	//alert("Пример работает");
}
