
## Work variant
```js
 // Save only    
                function Saverep(Key){
                	var url="/admin/update/"+Key;
                	dts=$('#b_'+Key).val();
 
                     $.ajax({type:        'POST', 
                		     dataType:    'json',
                             contentType: 'application/json; charset=utf-8',
                	 	     url:          url,
                	 	     data:         JSON.stringify({'Otv':dts}),
                	 	     complete:     function(data){
                                              $.notify("Заявка № " + Key + " обновлена.", "success"); 
                	 	     	           },
                	 	     success:      function(data){alert("Ок");},
                	 	     done:         function(data){alert(data);}
                	 	 });
                } 
```


## Sample 1 Ajax

```js
$(document).ready(function() {
    $("form#regist").submit(function() {
        var str = $("#regist").serialize();
        $.ajax({
            type: 'POST',
            url: 'submit1.php',
            data: $("#regist").serialize(),
            dataType: 'json',
            success: function() {
                $("#loading").append("<h2>you are here</h2>");
            }        
        });
        return false;        
    });
});
```


## Sample 2

```js
 function callWebService(cartObject) {

    $.ajax({
      type: "POST",
      url: "http://localhost/AspNetWebService.asmx/YourMethodName",
      data: cartObject,
      contentType: "application/x-www-form-urlencoded",
      dataType: "html",
      success: function () {
        OnSuccess(cartObject.productID)
      },
      error: function () {
        OnError(cartObject.productID)
      },
      complete: function () {
        // Handle the complete event
        alert("ajax completed " + cartObject.productID);
      }
    });  // end Ajax        
    return false;
  }
  ```
  
