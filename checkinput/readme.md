## Ban input number  with coma

```js
 
	    // Replace coma to point
	    $(".fildsheck").keypress(function(event){
		    event = event || window.event;
		    if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
				return false;
	    });
```
