## setting 


```js
(document).ready(function()
    {
        var table = $('#LosUsuarios').dataTable(
        {
            "language":
            {
                "url": "//cdn.datatables.net/plug-ins/1.10.12/i18n/Spanish.json"
            },
            "ajax":
            {
                "url": "usuarios/listadoUsuarios.php",
                "type": "POST"
            },
            "columns": [
                { "data": "Nombres" },
                { "data": "Apellidos" },
                { "data": "Usuario" },
                { "data": "Email" },
                { "data": "NombreRol" },
                {'defaultContent': '<button id="AdminUser" class="btn btn-success btn-sm">Editar <span class="glyphicon glyphicon-pencil"></span></button>'}
            ]
        });
        $('#LosUsuarios tbody').on('click', '#AdminUser', function()
        {
            var data = table.row($(this).parents('tr')).data();
            alert(data[0]);
        });
    });
    ```
