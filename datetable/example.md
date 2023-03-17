```js
var editor; // use a global for the submit and return data rendering in the examples
 
$(document).ready(function() {
    editor = new $.fn.dataTable.Editor( {
        ajax: "../php/staff.php",
        table: "#example",
        fields: [ {
                label: "First name:",
                name: "first_name"
            }, {
                label: "Last name:",
                name: "last_name"
            }, {
                label: "Position:",
                name: "position"
            }, {
                label: "Office:",
                name: "office"
            }, {
                label: "Extension:",
                name: "extn"
            }, {
                label: "Start date:",
                name: "start_date",
                type: "datetime"
            }, {
                label: "Salary:",
                name: "salary"
            }
        ]
    } );
 
    // Activate an inline edit on click of a table cell
    $('#example').on( 'click', 'tbody td.row-edit', function (e) {
        editor.inline( table.cells(this.parentNode, '*').nodes(), {
            submitTrigger: -2,
            submitHtml: '<i class="fa fa-play"/>'
        } );
    } );
 
    // Delete row
    $('#example').on( 'click', 'tbody td.row-remove', function (e) {
        editor.remove( this.parentNode, {
            title: 'Delete record',
            message: 'Are you sure you wish to delete this record?',
            buttons: 'Delete'
        } );
    } );
 
    var table = $('#example').DataTable( {
        dom: "Bfrtip",
        ajax: "../php/staff.php",
        columns: [
            { data: "first_name" },
            { data: "last_name" },
            { data: "position" },
            { data: "office" },
            { data: "start_date" },
            { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
            {
                data: null,
                defaultContent: '<i class="fa fa-pencil"/>',
                className: 'row-edit dt-center',
                orderable: false
            },
            {
                data: null,
                defaultContent: '<i class="fa fa-trash"/>',
                className: 'row-remove dt-center',
                orderable: false
            },
        ],
        select: {
            style: 'os',
            selector: 'td:first-child'
        },
        buttons: [ {
            extend: "createInline",
            editor: editor,
            formOptions: {
                submitTrigger: -2,
                submitHtml: '<i class="fa fa-play"/>'
            }
        } ]
    } );
} );

```
