# Databale 

![image](https://user-images.githubusercontent.com/3950155/225936221-bdfd4430-1218-402f-92ac-70fc187efee2.png)

### Based Setting

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

    // Dblcklic for open window
    $('#btnselect').on('dblclick', 'tr', function () {
        var rowData = table.row(this).data();
        alert(rowData.num);
    });
});
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



