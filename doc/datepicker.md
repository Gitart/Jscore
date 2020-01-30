
# Datepicker

## Library

```html
<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker.min.css" />
<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker3.min.css" />
<script src="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.min.js"></script>
```

## Binding
```js
<script>

		   $(function($){
					  $("#Busscode").mask("99/99/9999",{placeholder:"99/99/9999"});
					  $("#Code").mask("?999999999999", {placeholder:"XXXXXXXXXXXX"});
					  $("#Country").mask("(999) 999-9999? x99999",{placeholder:"XXXXXXXXX"});
					  $("#Email").mask("(999) 999-9999? x99999",{placeholder:"XXXXXXXXX"});
					  $("#Street").mask("99/99/9999",{completed:function(){alert("You typed the following: "+this.val());}});
					});  

		   $(function() {
    				$("#datepickerss").datepicker();
			  });
</script>                        
```

## HTML
```html
			   
					         <div>
							  <label class="frm_label">Дата</label>
							  <input type="text" id="datepickerss" name="datetime"/>
						 </div>           
```


	                                                                                                                                   
