
# Usefull function


### Get Selected index, value

### Variant 1
```js
function LoadIndx(){

       // var opt = ["02.Винницкая", "06.Житомирская", "03.Киевская", "04.Кировоградская", "05.Полтавская","06.Сумская","07.Черкасская","08.Черниговская"];
        //alert(opt);

         var data = [
                 {"id": "1", "name": "Полтавская"},
                 {"id": "2", "name": "Киевская"},
                 {"id": "3", "name": "Испанская"},
                 {"id": "4", "name": "Ровненская"},
                 {"id": "5", "name": "Львовская"}
               ];

    $.each(data, function(i, option) {
        $('#Ts1').append($('<option/>').attr("value", option.id).text(option.name));
    });

//        var tt= document.getElementById('Area').options=opt;

}       
```


#### Variant 2
```js
function ChangeCyti(data){
	   alert("Value:" + data.value);
           alert("Selected index  :" + data.selectedIndex);
//         alert("Selected value  :" + data.selectedValue);   // No worked !!!!!!
            alert(data.options[data.selectedIndex].text);
            alert(data.options[data.selectedIndex].value);
            alert("Text content "+data.options[data.selectedIndex].textContent);
            alert("Label        "+data.options[data.selectedIndex].label);
            alert("innerHTML    "+data.options[data.selectedIndex].innerHTML);

            alert("Text content "+data.textContent);           // Получить чистый список
            alert("innerHTML    "+data.innerHTML);             // Получить список в виде HTML
            alert("innerHTML    "+data.options);               // Получить список в виде HTML

           // var index=data.selectedIndex;
           // alert(data.options[index].innerHTML);
           // alert("area = "+  $("#Area option:selected").text());

          //
          //  var tt= document.getElementById('Area').selectedIndex;

          var tt= document.getElementById('Area').options[1].text;
          alert("Seleted value ! : " + tt);

          // Устнаовить в первое пыоложение
          // document.getElementById('Area').selectedIndex = "-1";

         ss=document.getElementById('Ts1');
         ss.innerHTML="";
         ss.innerHTML += "<option value=1>ssss</option>"
         ss.innerHTML += "<option value=3>ssss2</option>"
}  

```
#### Variant 3
```js
 var cuisines = ["Chinese","Indian"];     
 var sel = document.getElementById('CuisineList');
 for(var i = 0; i < cuisines.length; i++) {
     var opt       = document.createElement('option');
     opt.innerHTML = cuisines[i];
     opt.value     = cuisines[i];
     sel.appendChild(opt);
 }
``` 
 

### Populate select
```js
function Changeregion(data){

	   alert(data.value);
	  alert(data.selectedIndex);



	  var select  = document.getElementById("Area");
	  var idx     = data.selectedIndex;
	  var options = ["02.Винницкая", "06.Житомирская", "03.Киевская", "04.Кировоградская", "05.Полтавская","06.Сумская","07.Черкасская","08.Черниговская"];
              options = ["00.Область выбирите"];
					  
			// Центр
			if (idx==1) {
			   var options = ["02.Винницкая", "06.Житомирская", "10.Киевская", "12.Кировоградская", "17.Полтавская",  "19.Сумская", "24.Черкасская", "25.Черниговская"]; 
			}

			// Южный					  
			if (idx==2) {
			   options = ["01.АР Крым", "08.Запорожская", "15.Николаевская", "16.Одесская", "22.Херсонская", "27.Севастопольская"]; 
			}
					  
			// Bосточный
			if (idx==3) {
				options = ["04.Днепропетровськая", "05.Донецкая", "13.Луганськая", "21.Харківськая"]; 
			}
					  
			// Западный      
			if (idx==4) {
				options = ["03.Волынскую", "07.Закарпатскую", "09.Ивано-Франковскую", "14.Львовскую", "18.Ровенскую", "20.Тернопольскую", "23.Хмельницкую", "26.Черновицкую"]; 
	        }
				
	  // Optional: Clear all existing options first:
	  select.innerHTML = "";
					  
	  // Populate list with options:
	  for(var i = 0; i < options.length; i++) {
		  var opt     = options[i].split(".");
		  var codereg = opt[0];  
		  var namereg = opt[1];
		  select.innerHTML += "<option value=\"" + codereg + "\">" + namereg + "</option>";
		  }
	  }
              
```              

### Parse URL
```js
function ParseUrl(){
  var url=window.location;
  //alert(url.search.split("&")[1].split("=")[1]);
  alert(getParameterByName("ID",url));
  alert(getParameterByName("id",url));
  alert(getParameterByName("er",url));
  alert(getParameterByName("key",url));
  alert(getParameterByName("mode",url));
  alert(getParameterByName("type",url));
  alert(getParameterByName("region",url));
  alert(getParameterByName("ern",url));
  var select = document.getElementById("Region"); 
  select.selectedIndex=2;
  select.onchange();
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
```


### Open form in centeret screen
```js
    function openCenteredWindow(url) {
        var width  = 400;
        var height = 300;
        var left   = parseInt((screen.availWidth/2) - (width/2));
        var top    = parseInt((screen.availHeight/2) - (height/2));
        var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
        myWindow   = window.open(url, "subWind", windowFeatures);
    }
    
	function PopupCenter(url, title, w, h) {
        // Fixes dual-screen position                         Most browsers      Firefox
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop  = window.screenTop  != undefined ? window.screenTop  : screen.top;

        width  = window.innerWidth  ? window.innerWidth  : document.documentElement.clientWidth  ? document.documentElement.clientWidth  : screen.width;
        height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
	}                 
```  

## Checked 

```js
/*****************************************************************************
	 	 Обработка выбранных позиций 
*****************************************************************************/
function cll() {
	
	// Initialization value
	var chks    = document.getElementById("aplanner").getElementsByTagName("input");
	var inp     = document.getElementById("controls");
	var uslstr  = "";
	
    // Checks	
	for (var i=0; i<chks.length; i++) 
		{
			if (chks[i].type == "checkbox" &  chks[i].checked==true)
			   {
					// alert(chks[i].id);
					uslstr = uslstr + chks[i].id + ",";	
			   }
		}
		
	// Формирование условия
	uslstr    = uslstr.substr(0,uslstr.length-1);
	inp.value = uslstr ;
		
	// Снятие всех галочек
	for (var i=0; i<chks.length; i++) 
	   {
		if (chks[i].type == "checkbox" &  chks[i].checked==true)
	        {
			 chks[i].checked=false;
			}
		}
}                    
```


### Notification by save
```js

function Onnsubmit(){
	$("#notifyfooter").show(1000);
}
```


### Обновить форму
```
function Updateinfo(){
         document.location.reload();
}
```

## Set cookie
```js
function Cookset(){
    document.cookie = "username=aass; expires=Thu, 01 Jan 2020 00:00:00 UTC";
}
```

## Обновить форму
```js
function Cook(){
         aa=document.cookie;
         ss=getCookie("username");
         dd=getCookie("service");

         // alert(dd);	
          if (ss==undefined) {
              //alert("Нет таких кукочек на текущем сервисе");	
              //document.cookie = "service=hdoffice22";
              document.location="/templates/registration.htm"
          }
}
```

## Delete cookies
```js
function DelCook(){
   deleteCookie("username");
}
```

## Get Cookie
```js
// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
```


## Set Cookies
```js 
// Аргументы:
// name      название cookie
// value     значение cookie (строка)
// options   Объект с дополнительными свойствами для установки cookie:
// expires   Время истечения cookie. Интерпретируется по-разному, в зависимости от типа:
//           Число — количество секунд до истечения. Например, expires: 3600 — кука на час.
//           Объект типа Date — дата истечения.
//           Если expires в прошлом, то cookie будет удалено.
//           Если expires отсутствует или 0, то cookie будет установлено как сессионное и исчезнет при закрытии браузера.
// path      Путь для cookie.
// domain    Домен для cookie.
// secure    Если true, то пересылать cookie только по защищенному соединению.
// 
function setCookie(name, value, options) {
  options = options || {};
  var expires = options.expires;

  if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
  }

  if (expires && expires.toUTCString) {options.expires = expires.toUTCString();}

  value = encodeURIComponent(value);
  var updatedCookie = name + "=" + value;

  for (var propName in options) {
           updatedCookie += "; " + propName;
           var propValue = options[propName];
           
           if (propValue !== true) {updatedCookie += "=" + propValue;}
  }

  document.cookie = updatedCookie;
}
```

### Delete cookies
```js 
function deleteCookie(name) {
  setCookie(name, "", {
    expires: -1
  })
}       
```

### Проверка параметров
```js
function Daycheck(Days,Cnt){

      //console.log(Number.isNaN(Days.value));

        
     if ($.isNumeric(Days.value)==false){
        alert("Не верный формат числа.");
        Onnsubmit();
        Days.focus();
        return false;
    }
     


	if (Days.value>Cnt){
		alert("Параметер не длжен быть больше " + Cnt);
		Days.value=Cnt;
		Days.focus();
		return false;
	}

    // Zero
    if (Days.value<=0) {
		alert("Параметер не длжен быть меньше или равно нулю!");

		Days.value=2;
		Days.focus();
		return false;
	}

	    return true;
}
```

## If Numerik
```js
function IsNumeric(input){
    var RE = /^-{0,1}\d*\.{0,1}\d+$/;
    return (RE.test(input));
}                         
```

### Добавление нового пользователя
```js
$("#Dbcreate").click(function(){

	$.post("/api/system/users/add/newuser", 
                               {Fname:  "Name", 
                                Lname:  "Lname", 
                                Mname:  "Mname", 
                                Passwor:"Pass000", 
                                Login:  "Nlogin001"},
                                function() {
                                           $("#summary").html("<h2>Добавлен новый пользователь.</h2>");
                                          })
 });
```			   

#### Delete Data
```js
$('#addclear').click(function(){
   
var corpname  = $('#corpname').val();
var tabname   = $('#tabname').val();
var this_href = "/api/system/pharmacy/clear/"+corpname+"*"+tabname;

$.ajax({url:     this_href,
		type:      'post',
		headers: { 'AccessKey':'KeySecret$',
                   'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
                   'Content-Type':'application/json'
                  },
		cache:      false,
		success:    function(data){  
		                        $('#notify').html(data);
								},
		error:      function()  { 
		                         $('#summary').html('Ошибка');
		                        },
		complete:   function()  { 
		                        
								  $('#summary').html('Данные по точке удалены # A_' + tabname  );  
								  $('#tabname').val("");
			                      $('#tabname').focus();
			                      $('#notifyfooter').html("<h4>Данные удалены по таблице"+ tabname +"</h4>").show(2000).delay(2000).hide(2000);
		                        }
	  });
            //return false;
});
```

### Count record
```js
$('#addscnt').click(function(){
   checkapteka()
   var corpname  = $('#corpname').val();
   var tabname   = $('#tabname').val();
   var this_href = "/api/system/countdoc/"+corpname+"*A_"+tabname;

  $.ajax({url:     this_href,
  		  type:      'post',
		  headers: { 'AccessKey':'KeySecret$',
                     'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
                     'Content-Type':'application/json'
                  },
		cache:      false,
		success:    function(data){  
		                          $('#notify').html(data);
								},
		error:      function()  { 
		                          $('#summary').html('Ошибка');
		                        },
		complete:   function()  { 
		                        
								  $('#summary').html('Данные по аптеке  A_' + tabname  );  
								  $('#tabname').val("");
		                        }
	  });
            //return false;
		   });
});        
```







