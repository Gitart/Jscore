## Setting table

```js
$(document).ready(function() {

  var table = $('#list_md').DataTable({
          ajax: {
              url:     "/docs",
              dataSrc: "data",
              type:    "POST",
          },
         "pageLength": 10,
         "processing": true,
         "serverSide": false,
         "language": {
                         "lengthMenu":   "Записів : _MENU_",
                         "zeroRecords":  "Записів немає",
                         "info":         "Сторінок _PAGE_ із _PAGES_",
                         "infoEmpty":    "Данні відсутні ",
                         "infoFiltered": "Знайдено _MAX_ записів",
                         "search":       "Пошук : "
                     },
      "columns": [
         {"data": "id"},
         {"data": "num"},
         {"data": "company"},
         {"data": "typ_name"}
      ]
  });

// table.ajax.url( 'newData.json' ).load();

// Dblcklic for open window
$('#list_md').on('dblclick', 'tr', function () {
       var rowData = table.row(this).data();
       SetNumber(rowData.num);
       CloseWindow();
    });
});

// Data 
function SetNumber(num){
   window.opener.document.getElementById('td_num').value=num;
}

// close
function CloseWindow(){
   window.close();
}

// Add new records
function AddingRow(){
  var table = $('#list_md').DataTable();
  
table.rows.add( [ {
        "id":       "Tiger Nixon",
        "company":   "System Architect",
        "num":     "$3,120"
    }, {
        "id": "Garrett Winters",
        "company": "Director",
        "num": "$5,300"
    } ] )
    .draw();
}
```

## Form

```html
<!DOCTYPE html>
<html>
<head>
      {{template "libs"}}
       <script type="text/javascript" language="javascript" src="/static/js/documents.js"></script>
</head>

<body>
  <div class="container">
    
    <!-- 
     <button onclick="SetNumber()">Установка значения</button> 
     -->

    <h3>{{.Title}}</h3>
    
    <!-- Modal window-->
    <div id="MmodalwindowTwo"  >
         <table id="list_md" class="display">
            <thead>
                <tr ondblclick="SetNumber()">
                    <th>#</th>
                    <th>Номер</th>
                    <th>Підприємство</th>
                    <th>Код</th>
                </tr>
            </thead>
        </table>
    </div>

   </div>
</body>
</html>
```




## Js core
```js
var myWindow;

function openCenteredWindow(url) {
    var width  = 800;
    var height = 400;
    var left   = parseInt((screen.availWidth/2)  - (width/2));
    var top    = parseInt((screen.availHeight/2) - (height/2));
    // var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
    var windowFeatures = "width=" + width + ",height=" + height + ",resizable,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
    myWindow = window.open(url, "subWind", windowFeatures);
}

// Change 
function LoadDatType(){
	id = $("#typ").val();

	// alert(id);
	$('#typeget').html("");

	if (id=="0"){
    	var data = [
                  {"id": "0", "name": "-- Оберить підставу для отримання -- "}
                ];
    }      

	if (id=="1"){
    	var data = [
                    {"id": "1", "name": "Митна декларація"},
                    {"id": "2", "name": "Рахунок-фактура"}
                 ];
    }      

	if (id=="2"){
    	var data = [
                    {"id": "3", "name": "Лист звернення"},
                  ];
        $("#num").focus();       
    }      

    $.each(data, function(i, option) {
        $('#typeget').append($('<option/>').attr("value", option.id).text(option.name));
    });
}

//  Hidden fields before change
function FrmHidden(){

id = $("#typeget").val();

if (id=="1") {
	console.log("ed");
	$("#div_company").hide();
  $("#div_recipient").hide();
	$("#div_tag").hide();
	$("#div_td_num").hide();
	$("#div_num").hide();
 
  } else if (id=="2") {
  	console.log("dva");
	$("#div_company").show();
	$("#div_recipient").show();
	$("#div_tag").show();
	$("#div_td_num").show();
	$("#div_num").show();
	
  } else if (id=="3") {
  	console.log("tri");
	$("#div_company").hide();
	$("#div_tag").hide();
	$("#div_td_num").show();
	$("#div_num").show();
	$("#div_recipient").show();
  }
}
```
