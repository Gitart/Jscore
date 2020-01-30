# MASKED




### Binding
```js
<!--https://github.com/digitalBush/jquery.maskedinput-->
<script>
		   $(function($){
					  $("#Busscode").mask("99/99/9999",{placeholder:"99/99/9999"});
					  $("#Code").mask("?999999999999", {placeholder:"XXXXXXXXXXXX"});
					  $("#Country").mask("(999) 999-9999? x99999",{placeholder:"XXXXXXXXX"});
					  $("#Email").mask("(999) 999-9999? x99999",{placeholder:"XXXXXXXXX"});
					  $("#Street").mask("99/99/9999",{completed:function(){alert("You typed the following: "+this.val());}});
					});  
</script>                
```

### Html
```html

						 <div>
							  <label class="frm_label">Город</label>
							  <input type="text" id="City" name="City"/>
						 </div>

						 <div>
							  <label class="frm_label">Улица дом</label>
							  <input type="text" name="Street" id="Street"/>
						 </div>

						 <div>
							  <label class="frm_label">E_mail</label>
							  <input type="text" id="Email" name="Email"/>
						 </div>
				   
						 <div >
							  <label class="frm_label">Телефон</label>
							  <input type="text" id="Telephone" name="Note"/>
						 </div>
					   
					         <div>
							  <label class="frm_label">Дата</label>
							  <input type="text" id="datepickerss" name="datetime"/>
						 </div>
```


     

