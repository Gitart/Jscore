 /*
   <script src="https://cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js"></script>
   <link rel="stylesheet" href="https://cdn.datatables.net/1.10.7/css/jquery.dataTables.css">
   <script src="http://datatables.net/release-datatables/extensions/TableTools/js/dataTables.tableTools.js"></script>
 */
 
  $(document).ready(function(){$('#aplanner').DataTable();});
  

  
  
// Настройка таблицы
 $(document).ready(function() {
      
      // Setting tables
      $('#example').dataTable( {
      	   "scrollX": true,
      	   "order": [[ 3, "desc" ]],
           "scrollY":        "80%",
           "scrollCollapse": true,
           "paging":         true
       });

        // get record number    
        $('#example tbody').on('click', 'tr', function () {
           var name = $('td', this).eq(0).text();
           alert('Выбор '+name+'\'s запись' );
        });

  });

