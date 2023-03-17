# 1  - selected

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
        editor.inline(
            table.cells(this.parentNode, '*').nodes(),
            {
                cancelHtml: '<i class="fa fa-times"></i>',
                cancelTrigger: 'span.cancel',
                submitHtml: '<i class="fa fa-floppy-o"></i>',
                submitTrigger: 'span.edit',
            }
        );
    } );
 
    // Delete row
    $('#example').on( 'click', 'tbody span.remove', function (e) {
        editor.remove( this.parentNode, {
            title: 'Delete record',
            message: 'Are you sure you wish to delete this record?',
            buttons: 'Delete'
        } );
    } );
 
    var table = $('#example').DataTable( {
        dom: "Bfrtip",
        ajax: "../php/staff.php",
        order: [[ 1, 'asc' ]],
        columns: [
            {
                data: null,
                defaultContent: '',
                className: 'select-checkbox',
                orderable: false
            },
            { data: "first_name" },
            { data: "last_name" },
            { data: "position" },
            { data: "office" },
            { data: "start_date" },
            { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
            {
                data: null,
                defaultContent: '<div class="action-buttons">' +
                    '<span class="edit"><i class="fa fa-pencil"></i></span> ' +
                    '<span class="remove"><i class="fa fa-trash"></i></span> ' +
                    '<span class="cancel"></span>' +
                    '</div>',
                className: 'row-edit dt-center',
                orderable: false
            }
        ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ]
    } );
} );
```

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
                label: "Show options:",
                name: "options",
                type: "select",
                options: [ "Simple", "All" ],
                def: "Simple"
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
 
    editor.dependent( 'options', function ( val ) {
        return val === 'Simple' ?
            { hide: ['position', 'office', 'extn', 'start_date', 'salary'] } :
            { show: ['position', 'office', 'extn', 'start_date', 'salary'] };
    } );
 
    $('#example').DataTable( {
        dom: "Bfrtip",
        ajax: "../php/staff.php",
        columns: [
            { data: null, render: function ( data, type, row ) {
                // Combine the first and last names into a single table field
                return data.first_name+' '+data.last_name;
            } },
            { data: "position" },
            { data: "office" },
            { data: "extn" },
            { data: "start_date" },
            { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) }
        ],
        select: true,
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ]
    } );
} );
```

# 2

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
