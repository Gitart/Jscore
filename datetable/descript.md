## Обновление таблицы после вставки записи

'''javascript
  $("#rls").hide().load("/bank/qa/ #rls tbody").fadeIn('500');
```

## Page code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Довідка</title>
    {{template "libs"}}
    <script src="/static/js/notify.js"></script>
  <style>
          .form-group {margin-bottom: -20px;}
           /* Note: Try to remove the following lines to see the effect of CSS positioning */
           .affix { top: 0;   width: 100%;z-index: 9999 !important;}
           .affix + .container-fluid {padding-top: 70px;}
 </style>

 <script type="text/javascript">

// Table css
$(document).ready(function() {
  Showtab();
});


function Refreshtable(){
	// var table = $('#rls').DataTable();
	// table.destroy();
	$("#rls").hide().load("/bank/qa/ #rls tbody").fadeIn('500');
}

function Showtab(){
	  $('#rls').DataTable({
								          "language": {
														"decimal":      ",",
														"thousands":    ".",
														 "search":       "Поиск ",
														"lengthMenu":   "Display _MENU_ records per page",
                                                        "zeroRecords":  "По Вашим условиям записей нет.",
                                                        "info":         "Стр _PAGE_ из _PAGES_",
                                                        "infoEmpty":    "Нет доступных данных.",
                                                        "infoFiltered": "(filtered from _MAX_ total records)"
													},
								        "scrollY":        "600px",
								        "bProcessing":    true,
								        "stateSave":      false,
                                        "scrollCollapse": true,
								        "paging":         false,
								        "destroy":        true,
								        "ordering":       true,
								        "info":           false
								        // "order":          [[ 1, "desc" ]],
								       
								          });
}


    // *******************************************************
    // Save information 
    // *******************************************************
    function Saveform(){

       var Dt=$('#rls').DataTable();	
       var str = $("#Cform").serialize();
       // var id  = $("#number").text();
     
       $.ajax({type:"POST", url: '/bank/qa/add/', data:str, success: function(response) {
                $('#Descr').focus();
                $('#Cform')[0].reset();
                $.notify(response, "success");
                $('#frmsinput').hide();
                Refreshtable();
          }});
    }


 // Hiden form
 function hds(){
 	  $('#frmsinput').hide(500);
 }

 // Show windwo for input
 function shws(){
 	  $('#frmsinput').show(50);
 }


// Delete all records in table
function Dellall(){
	  $.ajax({type:"POST", url: '/bank/qa/dellall/', success: function(response) {
              
                $.notify(response, "success");
                // window.location.reload();
                Refreshtable();
          }});
}

// del One record
function Dellone(Id){
	  $.ajax({type:"DELETE", url: '/bank/qa/dellone/'+Id, data:Id, success: function(response) {
	  	        $("#T_"+Id).hide(100);
                $.notify(response+Id, "success");
          }});
}

// 
function RefreshTab(){
     //var Dt=$('#rls').DataTable();
      //Dt.draw(true);
     // $('#rls').empty();
     // setInterval( function () {Showtab();}, 30 );
      Showtab();
}

</script>		  
</head>

<body onloadss="Showtab()"  >
{{template "header"}}

<br>
<div id="cntrs" class="container">
     <h1 >Коротка довідка</h1>
     <input class="btn btn-success btn-sm" type="button" value="Новая" onclick="shws()"> 
     <input class="btn btn-danger btn-sm" type="button" value="Delete all" onclick="Dellall()"> 
     <input class="btn btn-warning btn-sm" type="button" value="Showtab" onclick="RefreshTab()"> 
     <input class="btn btn-warning btn-sm" type="button" value="Showtab" onclick="Showtab()"> 
            
  
  	 <table id="rls" class="table table-sm">
    	         <thead>
       	      	   <tr class="headerfortable" >
		  	       	    <th width="500">Описание</th>
		  	       	    <th width="100">Статус</th>
		  	       	    <th width="50">Act</th>
		  	       	</tr>
		  	     </thead> 

		  	     <tbody>
		  	     {{range .Dat}}
		   	       <tr  id="T_{{.id}}" ondblclick="Dellone({{.id}})">
		   	       	    <td style="width: 650px"> <b>{{.Descr}}</b> </td>
	                    <td style="width: 150px"> {{.Status}}       </td>
	                    <td style="width: 50px">  
	                    	<input class="btn btn-danger btn-sm" type="button" value="Del" onclick="Dellone({{.id}})">
	                    </td> 
		   	       	</tr> 
		   	  	{{end}}
		  	  	</tbody>
	</table>

    <!-- backolor #123455 -->
    <div id="frmsinput" style="display:none;border:1px solid #CCC; box-shadow: 10px -10px 20px #ccc; position: absolute; top:20%; background-color: #F8F9F9; width: 600px; left: -300px; margin-left:50%;  ">
        	    <div class="container-fluid" style="background-color:#F44336; color:#fff; padding: 20px;">
                      <h3>Запись в журнал</h3>
                      <p>Сохранеие информации о новостях и планах по программе.</p>
                </div>
                <br>

                <div style="margin: 20px;">
		                <!-- Form to dovidka -->
		                <form class="form-horizontal"  id="Cform" method="POST">
		                	 <div class="form-group row" >
		                            <label class="control-label col-sm-2" >Описание:</label>
		                            <div class="col-sm-8">
				                         <input class="form-control"  type="text" id="Descr"   name="Descr"> <br>
				                    </div>     
		                     </div>

		                    <div class="form-group row" >
		                            <label class="control-label col-sm-2" >Статус:</label>
		                            <div class="col-sm-8">
				                         <input class="form-control"  type="text" id="Status"  name="Status"> <br>
				                    </div>     
				             </div>
				           

				                
				                <hr>
				                <input class="btn btn-success" type="button" value="Сохранить" onclick="Saveform()">
		                </form>
               </div>
        </div>
</div>							         	  	  
{{template "footer"}}
</html>
```
