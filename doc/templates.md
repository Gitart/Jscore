
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














