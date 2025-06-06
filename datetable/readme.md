# 💡 DATATABLE

![image](https://user-images.githubusercontent.com/3950155/225936221-bdfd4430-1218-402f-92ac-70fc187efee2.png)


### Based Setting array

load first page.html
```js
    $(document).ready(function() {
       var dat = {{.Data}};
    })
```

used in JS
```js
 var table = $('#liststock').DataTable({
        "data"     : dat,
        rowId      : "id",
        pageLength : 10,
        deferRender: true,
        info       : false,
        select     : true,
        stateSave  : true,
        rowReorder : true,
        scrollCollapse : true,
        paging     : true,
        processing : false,
        serverSide : false,

        "columns": [
            {"data"      : "id",
                "title"     :  "#",
                "width"     : "50px",
                "className" : "tabcentered",
                "render"    : function (data, type, row) {
                    return `<a style="text-decoration:none; 
                                font-weight: bold;color: #27293d;" 
                                href="contract/detail/${row.id}">${data}
                            </a>`
                }
            },

            {"data"      : "title",
                "title"     :  "Name car",
                "width"     : "auto",
                "className" : "tabcentered",
                "render"    : function (data, type, row) {
                    return `<a style="text-decoration:none; 
                                font-weight: bold;color: #27293d;" 
                                href="contract/detail/${row.id}">${data}
                            </a>`
                }
            },

            {
             "data"      : "city",
             "title"     : "Город",
             "width"     : "auto"
            },

            {
             "data"      : "location",
             "title"     : "Location",
             "width"     : "auto"
            },

            {
                "data"      : "status",
                "title"     : "status",
                "width"     : "50px",
                "render"    : function (data, type, row) {
                               return StatusCange(data)
                      }
          }
        ]
    });
```

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

## AJAX
```js
var table = $('#example').DataTable( {
    ajax: "data.json"
} );
 
table.ajax.url( 'newData.json' ).load();
```

## Get Count Recs in the table
```js
var rowCount = $('#products_table').DataTable().rows().count();
console.log(rowCount);
```

## Replace current url in AJAX
[load](https://datatables.net/reference/api/ajax.url().load())
```js
table_doc_items.ajax.url( '/items/order/222' ).load();
```

## Set CSV AJAX
```js
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
## Get data 
```js
var uu = table.data()
console.log(uu)
```

## Get Data by Id record in table
```js
function getDataById(id) {
    var table = $('#list_stock').DataTable();
    var rowData = table.row(function (idx, data, node) {
        // Assuming 'id' is the property name for the ID field in your data
        return data.id === id;
    }).data();
    return rowData;
}
```

### Use
```js
 var info=getDataById(id)
    console.log(info)
    console.log(info.title)
```

## Data current record to from localstorage 
```js
// Save id order to cash
    $('#listproducts').on('click','tr', function () {
        var id  = table.row(this).id();
        var dat = table.row(this).data();

        var ds =JSON.stringify(dat)

        localStorage.setItem('nomenclature_dat',     ds);
        localStorage.setItem('nomenclature_id',     id);
        localStorage.setItem('nomenclature_title',  dat.title);
        localStorage.setItem('nomenclature_cat',    dat.model);

        var dd = localStorage.getItem('nomenclature_dat');
        var ss = JSON.parse(dd)
        console.log(ss)
    });
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


# Format cell 

### Number format
```
DataTable.render.number()                                                // Locale aware number display (since 1.12)
DataTable.render.number(null, null, precision, prefix, postfix)          // Locale aware display with decimal places, prefix and postfix (since 1.12)
DataTable.render.number(thousands, decimal, precision, prefix, postfix) // Thousands and decimal specified
```

Other way
```
{
    data: 'price',
    render: DataTable.render.number( null, null, 2, '$' )
}
```

### Text Format  
```
{
    data: 'product',
    render: DataTable.render.text()
}
````

**Example**
```
DataTable.render.ellipsis = function ( cutoff ) {
    return function ( data, type, row ) {
        if ( type === 'display' ) {
            var str = data.toString(); // cast numbers
 
            return str.length < cutoff ?
                str :
                str.substr(0, cutoff-1) +'&#8230;';
        }
 
        // Search, order and type can use the original data
        return data;
    };
};


{
    data: 'description',
    render: DataTable.render.ellipsis( 10 )
}
```



### Example format 
```

    var table = $('#liststock').DataTable({
        ajax: {
            url: `/liststock/list`,
            dataSrc    : "",
            type       : "GET",
            rowId      : "id",
            pageLength : 10,
            deferRender: true,
            info       : false,
            select     : true,
            stateSave  : true,
            rowReorder : true,
            scrollCollapse : true,
            paging     : true,
            processing : false,
            serverSide : false,
        },
        "columns": [
            {data: "id",         title: "Num",                  width: "50px"},
            {data: "title",      title: "Name stock",           width: "auto",
                render    : function (data, type, row) {
                    return `<b id= "itm_${row.id}">${data}</b>`
                }},
            {data: "city",       title: "City Name",              width: "auto"},
            {data: "year_need",  title: "Need (M3)",              width: "auto", render: $.fn.dataTable.render.number( ' ', '.', 3, '', '' )},
            {data: "vol",        title: "Volume (M3)",            width: "auto", render: $.fn.dataTable.render.number( ' ', '.', 3, '' )},
            {data: "total",      title: "Total get (M3)",         width: "auto", render: $.fn.dataTable.render.number( ' ', '.', 3, '' )},
            {data: "remain",     title: "Current Remain  (M3)",   width: "auto", render: $.fn.dataTable.render.number( ' ', '.', 3, '' )},
            {data: "user_name",  title: "ВEД",                    width: "auto", render: $.fn.dataTable.render.number( ' ', '.', 3, '' )}
        ]
    });
```



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

## Manipulate column
After insert rows or reform row need refresh column head

```js
function redrawcolumns(){
			setTimeout(function(){table.columns.adjust().draw();}, 250);
		}
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

## Get Data Row
```js
$('#tableboilerrooms tbody').on('click', 'td', function () {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Get the table cell and row information
    var cell = table.cell(this);           // Cell
    var cellIndex = cell.index();          // Get the index of the clicked cell
    var columnIndex = cellIndex.column;    // Get the column number
    var row = table.row(this);             // Get the row object
    var rowId = row.id();                  // Get the row ID

    // Retrieve data from local storage
    var dat = localStorage.getItem("dateburn");
    var vedrep = localStorage.getItem("vedrep");

    // Retrieve data from the row (assuming the data contains a 'ved_id' property)
    var rowData = row.data();              // Retrieve the entire row data object
    var vedid = rowData ? rowData.ved_id : null;  // Access 'ved_id' from the row data

    console.log(vedid);

    // Redirect to the report page with the necessary parameters
    window.location = `/daily/report/card?id=${rowId}&ved=${vedrep}&dat=${dat}`;
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
```
 rowId: function(a) {return 'id_empl_'+a.id;},
```

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
## Events
```js
 table.on( 'xhr', function ( e, settings, json ) {
        console.log( 'Ajax event occurred. Returned data: ', e );
    } );
```

# ADD ROW
```js

function addNewRow() {
    
    var selectedText = $('#product_id option:selected').text();
    var selectedId   = $('#product_id option:selected').val();
    var price        = $('#price').val();
    var qty          = $('#qty').val();
    var summ         = $('#account').val();

    // const table = new DataTable('#example');
    var table = $('#products_table').DataTable()
    
    table.row.add([selectedText,qty,price,summ,'❌']).node().id=counter;
    table.draw(false);

    // RefreshTab()
    
 
    counter++;
    console.log(table.data())

}
```

# ROWS
```js
 "createdRow": function( row, data, dataIndex ) {
           $(row).css("background-color", data.color);

            // if (data.approve=="R") {
            //     $(row).css("background-color", "#FFDFD2");
            // }
           },
```

## Autamatically reload
Reload the table data every 30 seconds (paging reset):
```js
setInterval( function () {
    table.ajax.reload();
}, 30000 );
```

```js
setInterval( function () {
    table.ajax.reload( null, false ); // user paging is not reset on reload
}, 30000 );
```
### Use the callback to update an external elements:
```js
table.ajax.reload( function ( json ) {
    $('#myInput').val( json.lastInput );
} );
```

### ROW COLOR
```js

        "rowCallback": function (row, data) {

            console.log(data.status_id)

            // Your condition to make the row green
            if (data.status_id==100) { // Example condition: Salary > 50000

                //$('td', row).eq(3).css('background-color','red');
                //$('td', row).css('background-color','red');
                $('td', row).addClass('deldocument');
            }

    },
```

### ROW CSS
```js

    "createdRow": function( row, data, dataIndex ) {
         if (data.status_id==100) {
             $(row).css("background-color", "#FFDFD2");
         }
    },
```

### Sorted by date

```js
{   data: "date_pay",title: "Дата",width: "80px",className: "tabcentered",
                render: function (data, type, row) {
                    if (type === 'display' || type === 'filter') {
                        return '<span data-order="' + data + '">' + ConvertDate(data) + '</span>';
                    }
                        return data; 
                    }
            },


// Convert to date
function ConvertDate(dateStr) {
    const  date    = new Date(dateStr);
    const  options = {day:'2-digit',month:'2-digit',year:'numeric'};
    const  frmDate = date.toLocaleDateString('ru-RU', options);
    return frmDate
}

```


## Full code set by date Sorted
```js
// Transaction
    var table = $('#list_transactions').DataTable({
        ajax:  {url:`/list/${idcontarct}`, dataSrc:'', type:'GET'},
        dom:   'Bfrtip', 
        buttons: [
            {
                extend: 'excelHtml5',
                text:   'Экспорт в Excel',        
                title:  'transactions_id_'+idcontarct, // Название файла
                exportOptions: {columns: ':visible'} // Экспорт только видимых колонок
            }
        ],

        rowId:         "id", 
        pageLength:     50,
        deferRender:    true,
        info:           true, 
        select:         true, 
        stateSave:      true, 
        rowReorder:     true, 
        scrollCollapse: true, 
        paging:         true,
        processing:     false, 
        serverSide:     false,
        language:       {lengthMenu:"_MENU_", zeroRecords:"Оплати вiдсутнi",info:"Сторінок _PAGE_ із _PAGES_",infoEmpty:"Данні відсутні", infoFiltered: "Знайдено _MAX_ записів",search:"🔎 "},
        columns: [
            {data: "id",         title: "#",          width: "50px"},
            // {data: "date_pay",   title: "Дата",       width: "80px",   className: "tabcentered",render: function(data, type, row) {return ConvertDate(data)}},
            {   data: "date_pay",title: "Дата",width: "80px",className: "tabcentered",
                render: function (data, type, row) {
                    if (type === 'display' || type === 'filter') {
                        return '<span data-order="' + data + '">' + ConvertDate(data) + '</span>';
                    }
                        return data; 
                    }
            },
            {data: "code",       title: "Документ",   width: "100px",  className: "rigthcol" },
            {data: "description",title: "Примiтка",   width: "auto"},
            {data: "amount",     title: "Сума з ПДВ", width: "150px",  className: "rigthcol", render: $.fn.dataTable.render.number( ' ', '.', 2, '', '' )},
            {data: "type",       title: "Тип",        width: "50px",   render: function(data, type, row) {return IcoShow(data)}},
            {data: "id",         title: "❌",         width: "50px",   className: "tabcentered deletetransact", render: function(data, type, row) {return `❌`}},
            // {data: "id",           title: "Дел",        width: "50px",  className: "tabcentered deletetransact",
            //     render: function(data, type, row) {
            //         return `<button id="btn_${row.id}" type="button" class="btn btn-secondary btn-sm " onclick="deletetrans(${row.id})">❌</button>`
            //     }
            // },
        ]
    });
```

### Format row
```js
 var table = $('#list_contracts').DataTable({
        ajax: {url:'list?close=a',dataSrc: 'data',type:'POST'},        
        rowId:"id", pageLength:10, deferRender:true, info:false, select:true, stateSave:true, rowReorder:true,
        scrollCollapse:true, paging:true, processing:false, serverSide: false,scrollX: true,
        language: {lengthMenu: "Записів : _MENU_",zeroRecords: "Записів немає",
                   info: "Сторінок _PAGE_ із _PAGES_",infoEmpty: "Данні відсутні",
                   infoFiltered: "Знайдено _MAX_ записів",search: "Пошук : "},
        
        createdRow : function(row, data, dataIndex) {
            if (data.status=='c') {
                $('td', row).eq(2).css("color", "#dc0b0b");
                $('td', row).eq(1).html("🚫");
            }else{
                $('td', row).eq(1).html("✅");
            }

            if (data.monitor=='critical') {
                $('td', row).eq(2).css("color", "#dc0b0b");
                $('td', row).eq(1).html("🚩");
                $('td', row).eq(1).addClass("expired");
                $(row).addClass("expired"); 
                $(row).attr('title', 'Date control'); 

            }else if(data.monitor=='warning'){
                $('td', row).eq(2).css("color", "#dc0b0b");
                $('td', row).eq(1).html("⚠️");
                $(row).addClass("expired"); 
                $(row).attr('title', 'Remain stock!'); 
            }
        },
        
        columns: [
            {data: "id",           title: "#",      width:"50px", className: "tabcentered"},
            {data: "status",       title: "Статус", width:"50px", className: "tabcentered"},
            {data: "num_contract", title: "Номер",  width:"auto", className: "tableft",
                render: function(data, type, row) {return `<b onclick="ShowModal(${row.id})">${data}</b>`}
            },
            // {data: "date_contract",title: "Початок",width: "80px",className: "tabcentered",render: function(data, type, row) {return ConvertDate(data)}},
            {   data: "date_contract",title: "Початок",width: "80px",className: "classDateDoc",
                render: function (data, type, row) {
                  if (type === 'display' || type === 'filter') {
                    return '<span data-order="' + data + '">' + ConvertDate(data) + '</span>';
                  }
                    return data; 
                }
              },

              { data: "date_end", title: "Кiнець",width: "80px",className: "classDateDoc",
                render: function (data, type, row) {
                  if (type === 'display' || type === 'filter') {
                    return '<span data-order="' + data + '">' + ConvertDate(data) + '</span>';
                  }
                    return data; 
                }
              },

            // {data: "date_end",title: "Кiнець",width: "80px",className: "tabcentered",render: function(data, type, row) {return ConvertDate(data)}},
            // {data: "date_control",title: "Контрол",width: "80px", className: "tabcentered",
            //     render: function(data, type, row) {
            //         return ConvertDate(data)
            //     }
            // },

            {data: "company_name",title: "Контрагент",   width: "auto"},
            {data: "prepaid",     title: "Баланс, грн.", width: "auto",className: "tabright", render: rdn}, //"render": function (data, type, row) {return data.toFixed(2)
            {data: "summ",        title: "Сума, грн.",   width: "auto",className: "tabright", cellType: "th",render: rdn},
            {data: "valume",      title: "Oб`ем",        width: "auto",className: "tabright", render: rdn},
            {data: "weight",      title: "Отримано",     width: "auto",className: "tabright", ariaTitle: 'Screenreader title',render: rdn},
            {data: "remain",      title: "Залишок",      width: "auto",className: "tabright", render: rdn},

            /*{data: 'status',title : 'Статус',width : "100px",class : "tabcentered",render: function (data, type, row) {return StatusCange(data)}            },
            // {data: 'buy_sales',title  : 'Тiп', width  : "100px", class  : "tabcentered",
            //  visible: false,
            //  render : function (data, type, row) {
            //           return function (){
            //             return (data==1)?'Продаж':'Купiвля'
            //         }
            //     }
            // },
            */

            {data: "id",title: "Забов`язання",width: "50px",className: "tabcentered",
                render: function(data, type, row) {
                     return `<a style="text-decoration:none; font-weight: bold;color: #27293d;" 
                            target="_blank" href="contract/detail/${row.id}"  >📂</a>`
                }
            },
        ]

        // drawCallback: function(settings) {
        // Обновление счётчика контрактов
        //     var count = table.data().count();
        //     $('#cnt_contracts').text(`Кiлькiсть контрактiв: ${count}`);
        // }

    });

```


## Localization
[lang](https://cdn.datatables.net/plug-ins/1.10.22/i18n/)

```js
language: {
            url:"https://cdn.datatables.net/plug-ins/1.10.22/i18n/Ukrainian.json",
        },
```

## Plugins
https://cdn.datatables.net/plug-ins/1.10.22/ 


## Row Selector
https://datatables.net/reference/type/row-selector  

## Link to format 
https://github.com/DataTables/Plugins/blob/master/dataRender/numberTo.js  
























