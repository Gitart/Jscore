## Примеры для работы с JS

### Refresh table
```js
$("#corporations tbody").load("corporations.html #corporations tbody");
```   

### Insert
```js
function Activatecorp(Corp){
  var Usr  = window.location.href.split("/")[7];
	$("#Inf").html("<h3 style='color:#676869'>Идет активация корпорации !</h3>" + Corp);
	$("#Inf").fadeIn(1000);
								   
								   
	$.ajax({
	      method:"POST",
				url:"/api/system/corporation/activate/"+Corp+"*"+Usr
				})
				.done (function(data){
				      $("#star"+Corp).html(" Активная").css( "color", "green" );
 					    $("#Inf").html("<h3 style='color:#676869'>Внимание !</h3><hr>" + data);
              $("#Inf").fadeIn(2000).delay(1000).fadeOut(2000);
							}
			)
       .always(function() {
       });										
										
}                
```            
