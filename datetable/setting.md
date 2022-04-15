```js
$(document).ready(function() {

  var table = $('#list_md').DataTable({
          ajax: {
              url:     "/docs",
              dataSrc: "data",
          },
         "pageLength": 10,
         "processing": true,
         "serverSide": false,
         "language": {
                         "lengthMenu":   "Записів : _MENU_",
                         "zeroRecords":  "Записів немає",
                         "info":         "Сторінок _PAGE_ із _PAGES_",
                         "infoEmpty":    "Нет данных ",
                         "infoFiltered": "(Знайдено _MAX_ всього записів)",
                         "search":       "Пошук : "
                     },
      "columns": [
         {"data": "id"},
         {"data": "num"},
         {"data": "company"},
         {"data": "typ_name"}
      ]
  });


$('#list_md').on( 'dblclick', 'tr', function () {
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
