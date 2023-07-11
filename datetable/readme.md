# 💡 DATATABLE

![image](https://user-images.githubusercontent.com/3950155/225936221-bdfd4430-1218-402f-92ac-70fc187efee2.png)

### Based Setting with AJAX
```js
$(document).ready(function() {

    var idorder     = localStorage.getItem('Iddoc');
    var idcontract  = localStorage.getItem('co_id');
    var contractnum = localStorage.getItem('con_num');
    var numcontract = `Doc № ${idcontract} # ${contractnum} ORDERID ${idorder}`

    $("#head_title_prodcuts").html(numcontract)
    $("#head_title_prodcuts2").html(idcontract)

    iddoc = location.href.split('/items/')[1];

    // Products in order
    var table_doc_items = $('#listdocuments').DataTable({
            ajax           : `/items/order/${iddoc}`,
            rowId          : 'id',
            dataSrc        : 'data',
            type           : 'GET',
            scrollCollapse : true,
            paging         : true,
            deferRender    : true,
            info           : false,
            dom            : 'rti',

        "columns": [
            {
                "title" : "Products",
                "data"  : "product",
                "width" : "auto",
                "render": function (data, type, row) {
                    return `<b id = "nam_${row.id}" 
                               data-num-product = "${row.product_id}" 
                               onclick="ShowModal(${row.id})"
                               title = "ID:${row.id}">${data}</b>`
                }
            },


            { data: "price", render: $.fn.dataTable.render.number( ',', '.', 0, '' ) },


            {
                "title" : "Price",
                "data"  : "price",
                "width" : "100px",
                "render": function (data, type, row) {
                    return `<b id = "pr_${row.id}" 
                               data-num-product = "${row.product_id}" 
                               title = "ID:${row.id}">${data}</b>`
                }
            },
            {
                "title" : "Qty",
                "data"  : "qty",
                "width" : "100px",
                "render": function (data, type, row) {
                    return `<b id = "qty_${row.id}" 
                               data-num-product = "${row.product_id}" 
                               title = "ID:${row.id}">${data}</b>`
                }
            },

            { "title" : "Unit",
              "data"  : "ei",
              "width" : "80px"
            },

            { "title" : "Вартicть",
              "data"  : "summ",
              "width" : "100px",
              "render": function (data, type, row) {
                    return `<b id = "sm_${row.id}" 
                               data-num-product = "${row.product_id}" 
                               title = "ID:${row.id}">${data}</b>`
                }
            },

            { "title" : "❌",
              "data"  : "id",
              "width" : "50px",
              "render": function (data, type, row) {
                    return `<b id      = "del_${row.id}" 
                               onclick = "DelProduct(${row.id}, ${row.id})"
                               title   = "ID:${row.id}">
                               <button type="button" class="btn btn-outline-danger btn-sm">❌</button>
                            </b>`
                }
            },

            {
                "title"  : "Act",
                "data"   : "id",
                "render" : function(data, type, row){
                    return `<div class="action-buttons">
                                      <span class="edit"   id="$ed_${data}">   <i class="fa fa-pencil"></i></span> 
                                      <span class="remove" id="$rem_${data}">  <i class="fa fa-trash"></i></span> 
                                      <span class="cancel"> </span>
                                 </div>`
                },
                className: 'row-edit dt-center',
                orderable: false
            },
        ]
    });

```

## Without AJAX
```js
$(document).ready( function () {


  var table=  $('#logstab').DataTable({
      'headers': ["Name", "Cognome"],
      rowId: 'id',
      "scrollY":         "600px",
      "scrollCollapse":  true, // fixed head
      "paging":          false,
      "stateSave":       true,
      select: true,
      rowReorder: true,
        ajax:              "log/data",
        columns: [
            { data: 'id',     title:"#", width:"50px"},
            { data: 'title',  title: "Название", width:"500px"  },
            { data: 'result', title: "Результат", width:"100px"  },
            { data: 'module', title: "Модуль", width:"70px" },
            { data: 'ip',     title: "Ip", width:"100px"  },
            { data: 'type',   title: "Тип", width:"50px"  },
            { data: 'create_at', title: "Cоздание", width:"auto" },
            { "defaultContent":   '<input class="btn btn-sm" type="button" value="❌">', "width":"10%" ,  title: "❌", width:"50px" }
        ]
    });

    $('#logstab tbody').on( 'click', 'td', function () {
         var idx = table.cell(this).index().row;

         var idxs = table.row(idx).data().id;
         console.log("ID: ", idxs);

        // // var idx = table.cell( this ).index().column;
        // var title = table.column( idx ).header();
        // alert( 'Column title clicked on: '+$(title).html() );
        var title = table.row(idx).data();
        localStorage.setItem("idlog",title.id)
        SetNumber(title.id)
        console.log(title);
    } );

    // После перегенерации таблицы
    $('#logstab').on('draw.dt', function () {
        console.log( 'Table redrawn' );
    } );

    table.on( 'pre-row-reorder', function ( e, node, index ) {
        console.log( 'Row reorder started: ', node, index );
    } );

    //
    // // Setup - add a text input to each footer cell
    // $('#logstab tfoot th').each(function () {
    //     var title = $(this).text();
    //     $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    // });


    // Reload table
    $('#btnreload').click(function (){
        table.ajax.reload( null, false );
    } )

    // Dblcklic for open window
    $('#btnselect').on('dblclick', 'tr', function () {
        var rowData = table.row(this).data();
        alert(rowData.num);
    });
});
```

## Replace current url
[load](https://datatables.net/reference/api/ajax.url().load())
```
table_doc_items.ajax.url( '/items/order/222' ).load();
```

## Set CSV AJAX
```
ajax: {
    url: "data.csv",
    dataType: "text",
    dataSrc: function (csvdata) {
    return $.csv.toObjects(csvdata);
}
```

## Dom settings 
https://datatables.net/reference/option/dom

|code|description|
|---|------------------|
|**l**| length changing input control|
|**f**| filtering input
|**t**| The table!
|**i**| Table information summary
|**p**| pagination control
|**r**| processing display element

The following extensions can be initialised through the dom option:
|code|description|
|---|------------------|
|**B**| Buttons|
|**R**| ColReorder|
|**S**| Scroller |
|**P**|SearchPanes|
|**Q**| SearchBuilder|

## Example
```
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="datatables.min.css"/>
<script type="text/javascript" src="jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="datatables.min.js"></script>
<script>
$(document).ready( function () {
  $('#example').dataTable( {
    "dom": 'rtip'
  } );
} );
</script>
</head>
```

## Example Data for Ajax
```json
{
  "data": [
    {
      "id": 1,
      "tn": "11",
      "created_at": "0001-01-01T00:00:00Z",
      "location_id": 1,
      "teem_id": 1,
      "department_id": 2,
      "position_id": 3,
      "first_name": "Степаненко",
      "middle_name": "Иван",
      "last_name": "Петрович",
      "koef": 1,
      "salary": 1233,
      "remark": ""
    },
    {
      "id": 3,
      "tn": "333",
      "created_at": "0001-01-01T00:00:00Z",
      "location_id": 1,
      "teem_id": 1,
      "department_id": 1,
      "position_id": 1,
      "first_name": "Прокопенко",
      "middle_name": "Ирина",
      "last_name": "Степановна",
      "koef": 1,
      "salary": 100,
      "remark": ""
    }
  ]
}
````

## Get ID
[☝ Get Data](https://datatables.net/reference/type/row-selector)

```js
var table = $('#example').DataTable();
var row = table.row('#row-42');
```

## Get ID
```js
var appListTable = $(".app-list__table").DataTable({
  dom: "",
  // Load json with list of applicants
  ajax: "https://api.myjson.com/bins/391gc",
  columns: [{
    "data": "uid"
  }, {
    "data": "location"
  }, {
    "data": "date"
  }],
  // Set rows IDs
  rowId: function(a) {
    return 'id_' + a.uid;
  },
});
```

## Select multiple rows by id:
```js
var table = $('#example').DataTable();
var rows = table.rows( [ '#row-42', '#row-51' ] );
```

## Select rows by class name:
```js
var table = $('#example').DataTable();
var rows = table.rows('.priority');
```

## Select rows by two class name selectors:
```js
var table = $('#example').DataTable();
var rows = table.rows('.important, .intermediate');
```

## Get the data for a row that was clicked upon:
```js
var table = $('#example').DataTable();
 
$('#example tbody').on( 'click', 'tr', function () {
  var rowData = table.row( this ).data();
  // ... do something with `rowData`
} );
```


## Get All Data in array
```js
$("#btn_search").click( function (){
  var allData = table.rows().data();
  console.log(allData)
});
```

## Get Data by ID
```js

    $("#btn_search").click( function (){
        var row = table.row('#190').data();
        console.log(row)
     });
```

## Get Data few records in array By Index
```js
$("#btn_search").click( function (){
var allData = table.rows([2,4]).data();
       
console.log(allData)
console.log(allData[0].id)
console.log(allData[0].num)
console.log(allData.selector.rows)
});
```

## Get Data few records in array By ID
```js

$("#btn_search").click( function (){
        var row = table.row('#190').data();
        console.log(row)


        var rows = table.rows(['#190','#200']).data();
        console.log(rows)
        
        console.log(allData)
        console.log(rows[0].id)
        console.log(rows[0].num)
        console.log(rows.selector.rows)
});
```






## JS function
```js
var table = $('#example').DataTable();
 
var names = table
    .rows( function ( idx, data, node ) {
        return data.first_name.charAt(0) === 'A' ?
            true : false;
    } )
    .data();
```


# Bind data to table
```js
$(document).ready( function () {
        // Set table
        var table = $('#tablegroup').DataTable({
            "scrollY":         "500px",
            rowId:             'group_id',
            deferRender        : true,
            "scrollCollapse":  true, // fixed head
            "paging":          false,
            "stateSave":       true,
            "language": {
                "lengthMenu":   "Recs : _MENU_",
                "zeroRecords":  "No records",
                "info":         "Сторінок _PAGE_ із _PAGES_",
                "infoEmpty":    "Data is empty",
                "infoFiltered": "Find _MAX_ recs",
                "search":       "Search 🔎  "
            }
        });

        // Open window
        table.on('click', 'tr', function() {

            var tr = $(this).closest('tr');
            var pos = $(this).text();
            var row = table.row(tr);

            console.log(" array fields  " + row.data());
            console.log(" id    " + row.data()[0]);
            console.log(" name  " + row.data()[1]);
            console.log(" cnt   " + row.data()[2]);

            console.log("pos " + pos);
            alert(pos);

            var ids = $(this).attr('id');
            GetGroupData(ids);
        });
});
```


## Bind with button 
```js
 // Delete calls
    table.on('click', 'input', function() {
        var ids = $(this).parents('tr').attr('id');

        DeleteCallId(ids);
          // var idx = table.cell(this).index().row;
          // var idss = table.row($(this).parents('tr')).data();
          // console.log(ids);
           data1 = $(this).parent().index();
           
           console.log(data1)
          // console.log(ids)
     });
```


# JGuery
## Get data from rows in a jQuery instance:

```js
var rows = $('tr.immediate');
var table = $('#example').DataTable();
var rowData = table.rows( rows ).data();
```

## Use jQuery selectors to get the data in the fifth row of the table:

```js
var rowData1 = table.rows( ':nth-child(5)' ).data();
var rowData2 = table.rows( ':eq(4)' ).data();
```


# Array
## Get the data for two rows, based on id:

```js
var table = $('#example').DataTable();
var data = table.rows( ['#row-42', '#row-91'] ).data();
```

## Mix row-selector types - id and class selector
```js
var table = $('#example').DataTable();
var data = table.rows( ['#row-42', '.important'] ).data();
```


## Refresh table
```js
function  RefreshTableCall(){
    var table = $('#usercalls').DataTable()
    table.ajax.reload( null, false );
}
```

## Binded button
![image](https://user-images.githubusercontent.com/3950155/225937522-d6128df0-8016-425b-ac93-8e171c96f6ae.png)


## Get ID
![image](https://user-images.githubusercontent.com/3950155/225938370-1ebc6a1c-feec-4c90-a889-82f616d2f609.png)

## Based setting 
```js
$(document).ready( function () {

  var table=  $('#logstab').DataTable({
      'headers': ["Name", "Cognome"],
      rowId: 'id',
      "scrollY":         "600px",
      "scrollCollapse":  true, // fixed head
      "paging":          false,
      "stateSave":       true,
      select: true,
      rowReorder: true,
        ajax:              "log/data",
        columns: [
            { data: 'id',     title:"#",            width:"50px"},
            { data: 'title',  title: "Название",    width:"500px"  },
            { data: 'result', title: "Результат",   width:"100px"  },
            { data: 'module', title: "Модуль",      width:"70px" },
            { data: 'ip',     title: "Ip",          width:"100px"  },
            { data: 'type',   title: "Тип",         width:"50px"  },
            { data: 'create_at', title: "Cоздание", width:"auto" },
            { "defaultContent":   '<input class="btn btn-sm" type="button" value="❌">', "width":"10%" ,  title: "❌", width:"50px" }
        ]
    });

    $('#logstab tbody').on( 'click', 'td', function () {
         var idx = table.cell(this).index().row;

         var idxs = table.row(idx).data().id;
         console.log("ID: ", idxs);

        // // var idx = table.cell( this ).index().column;
        // var title = table.column( idx ).header();
        // alert( 'Column title clicked on: '+$(title).html() );
        var title = table.row(idx).data();
        localStorage.setItem("idlog",title.id)
        SetNumber(title.id)
        console.log(title);
    } );

    // После перегенерации таблицы
    $('#logstab').on( 'draw.dt', function () {
        console.log( 'Table redrawn' );
    } );

    table.on( 'pre-row-reorder', function ( e, node, index ) {
        console.log( 'Row reorder started: ', node, index );
    } );


    //
    // // Setup - add a text input to each footer cell
    // $('#logstab tfoot th').each(function () {
    //     var title = $(this).text();
    //     $(this).html('<input type="text" placeholder="Search ' + title + '" />');
    // });


    // Reload table
    $('#btnreload').click(function (){
        table.ajax.reload( null, false );
    } )

    // Double_click for open window
    $('#btnselect').on('dblclick', 'tr', function () {
        var rowData = table.row(this).data();
        alert(rowData.num);
    });
});


// Data
function SetNumber(numid){
    //document.getElementById("tdnum").value=numid;
    document.getElementById("tdnum").innerHTML=numid;
    // $("#tdnum").html(numid);
}

// Refresh table
function  RefreshTable(){
    var table = $('#logstab').DataTable()
    table.ajax.reload( null, false );
}
```

# RowID
Присвоение каждой записи ID в атрибутах TR

![image](https://user-images.githubusercontent.com/3950155/225939018-bf37fcab-6330-4158-a645-796d32a6946c.png)

В форме выглядит так   

![image](https://user-images.githubusercontent.com/3950155/225939699-5a62ac91-04cd-4c6b-8c7f-108d076bef0b.png)

## Get Row ID

```js
var table = $('#myTable').DataTable();
 
$('#myTable').on( 'click', 'tr', function () {
    var id = table.row( this ).id();
 
    alert( 'Clicked row id '+id );
} );
```

![image](https://user-images.githubusercontent.com/3950155/225951451-d4bb1b73-65b6-4785-bbec-c2a4e5387fbc.png)



# FIND ID

### Html 
![image](https://user-images.githubusercontent.com/3950155/229362064-fe0ea19a-8f4d-417d-ab02-cfc7d5290f17.png)

#### Binding for each records <tr>

```js

    $("#tableorders tr").click(function (){
        var trid = $(this).closest('tr').attr('id')
        var id=trid.split(":")[1];

        var triddata = $(this).closest('tr')
        var textdata = triddata.find("td:eq(1)").text()

        localStorage.setItem("iddocument",id)

        console.log(textdata);
        console.log(id);
    });
   ```
    

## Get source two filed 
![image](https://user-images.githubusercontent.com/3950155/229362283-05329dc9-3b41-4bd7-bf00-a9f51d52a3b8.png)

## Geting this field value  
![image](https://user-images.githubusercontent.com/3950155/229362389-8b5b5692-2f8c-4602-882d-7b02de37cd8f.png)

## Advanced variant 
  ![image](https://user-images.githubusercontent.com/3950155/229363121-514d7856-07c5-4800-9347-e0ef0937ca3e.png)

  
# Deferred rendering:

```js
$('#example').dataTable( {
  "ajax": "sources/arrays.txt",
  "deferRender": true
} );
```

## Events with deferred rendering:
```js
$('#example tbody').on( 'click', 'td', function () {
    alert( 'Clicked on: '+this.innerHTML );
} );
 
$('#example').dataTable( {
  "ajax": "sources/arrays.txt",
  "deferRender": true
} );
```

## Delete draw
```js
table.row( selector ).remove().draw();.
```

## Search in table 
```js
function Search(){
    var table = $('#logstab').DataTable()
    table.search( 'Fiona' );
    table.draw();
}
```

## Clear conditional Search in table 
```js
function SearchClear(){
    var table = $('#logstab').DataTable()
    table.search( '' ).draw();
}
```

## Hide field
```js
function HideField(){
    var dt = $('#logstab').DataTable()
    dt.column(1).visible(true);
}
```

## Hide columns dynamically
The previous answers are using legacy DataTables syntax. In v 1.10+, you can use column().visible():

```js
var dt = $('#example').DataTable();
//hide the first column
dt.column(0).visible(false);
To hide multiple columns, columns().visible() can be used:

var dt = $('#example').DataTable();
//hide the second and third columns
dt.columns([1,2]).visible(false);
```

## Here is a Fiddle Demo.

Hide columns when the table is initialized
To hide columns when the table is initialized, you can use the columns option:
```js
$('#example').DataTable( {
    'columns' : [
        null,
        //hide the second column
        {'visible' : false },
        null,
        //hide the fourth column
        {'visible' : false }
    ]
});
```

For the above method, you need to specify null for columns that should remain visible and have no other column options specified. Or, you can use columnDefs to target a specific column:

```js
$('#example').DataTable( {
    'columnDefs' : [
        //hide the second & fourth column
        { 'visible': false, 'targets': [1,3] }
    ]
});
```

```js
"aoColumnDefs": [{ "bVisible": false, "aTargets": [0] }]
```

## Hide but serchible
```js
$(document).ready(function() {
     $('#example').dataTable( {

        columns= [
          { 
           "data": "name_data",
           "visible": false
           }
        ]
  });
});

var example = $('#exampleTable').DataTable({
    "columnDefs": [
        {
            "targets": [0],
            "visible": false,
            "searchable": false
        }
    ]
});
```


## Hide fileds
```js
var dt = $('#example').DataTable();
//hide the second and third columns
dt.columns([1,2]).visible(false);
```





## Row Selector
https://datatables.net/reference/type/row-selector  
