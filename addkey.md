## Пример добавления данных на сервис

```javascript
// *****************************************************************************
// Add New Key
// *****************************************************************************
function AddDocs(){
var msg = "Ок";
var SendInfo = [{ Project  : $("#inp_project").val(),  
  	          Codekey  : "Bars-S020", 
		  Names    : $("#datetime").val(),
		  Percent  : $("#summa").val(),
		  Title    : $("#inp_task").val(),
		  Descript : $("#description").val(),
		  Status   : "Input"}];
				
	 $.ajax({ url:     "/api/adddocs/",
		  type:      "POST",
		  headers: { "AccessKey":"KeySecret111", "X_CSRF_TOKEN":"xxxxxxxxxxxx"},
		  cache:      false,
		  data:       JSON.stringify(SendInfo),
		  success:    function(){   alert("Отлично");},
		  error:      function(){ alert("Error Insert");},
		  complete:   function(){ alert("Completed");}
	  });
}					  

// *****************************************************************************
// Add New Key
// *****************************************************************************
function Crat(){

	//var Ur="http://10.0.3.24:5555/need/updatemanual/C3*100634990";
        //var U=window.location.href.split('/');
        //var Corp=U[5].split('*')[0];
        //var St = U[5].split('*')[1];
        
	var U=window.location.href;
        $("#corporationcode").val(U);

                   // alert(U);

					var Data ={
                                "namesoft"        : $("#namesoft").val(),
                                "typesoft"        : $("#typesoft").val(),
                                "datesoft"        : $("#datesoft").val(),
                                "corporationcode" : $("#corporationcode").val(),
                                "email"           : $("#email").val(),
                                "scope"           : $("#rightsoft").val(),
                                "urlreturn"       : $("#urlreturn").val()  
                              };


					$.ajax({ url:      "/reg/",
							 type:      "POST",
							 headers: { "AccessKey":"KeySecret111", "X_CSRF_TOKEN":"xxxxxxxxxxxx"},
							 cache:      false,
							 data:       Data,
							 success:    function(){
							 	                     $("#notify").html("<h3>Key save saccessful.</h3>");
							 	                     $("#notify").delay(5000).hide(1000); 
							 	                     $("#summary").delay(5000).hide(1000); 
							 	                     $("#mainsform")[0].reset();
							 	                   },
							 error:      function(){ $('#summary').html("Error save key.");},
							 complete:   function(){ $('#summary').html("Key Ok.");}
                            });
					}
                   
```
