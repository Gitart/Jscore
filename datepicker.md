# Calendar
[Link to js calendar](https://bootstrap-datepicker.readthedocs.io/en/latest/options.html)

```js
 $(function() {
            var now = new Date();
            //var ds = now.format("yyyy-mm-dd");
            var today = new Date();
            var ds=today.toLocaleDateString();
            ds=Getdate();
            $('#datereg').val(ds);

            $( "#expires" ).datepicker({minDate: -100, 
                      	                maxDate: "+0D", 
                      	                dateFormat: 'yy.mm.dd ',  
                      	                changeMonth: true,
                                        changeYear: true,
                                        showButtonPanel: true,
                      	                 onSelect: function(datetext){ 
                      	                          	          $(this).val(datetext);
                      	                          	      },
                      	                          	  });

                      $( "#datereg" ).datepicker({minDate: -100, maxDate: "+0D", dateFormat: 'yy.dd.mm hh:mm',  onSelect: function(datetext){ $(this).val(datetext);}});
             });
```


sample page html
```html
<!DOCTYPE html>
<html>
<head>
    {{template "libs"}}
    {{template "calendarlib"}}

    <script type="text/javascript">
			$(document).ready(function() {

          
			  $('#cr').datepicker({
			    format:        'dd-mm-yyyy',
			    endDate:       '+100d',
			    minDate:        -100, 
			    autoclose:      true,
			    todayBtn:       true,
			    todayHighlight: true,
			    weekStart:      1,
			    changeMonth:    true,
			    title:          "Календар",
			    language:       "ru"
			  });
			});
    </script>
</head>
<body>
    <div class="container-fluid">
      {{template "mainmenu"}}
    <div/>

   <div class="container"> 
	   	<h1>{{.Title}}</h1>

	    <form id="documentform" action="/info/save" method="POST">
	           <input  type="hidden"  name="id" id="id">

	            <div class=" row">
	              <label  class="col-sm-3 col-form-label">Назва </label>
	              <div class="col-sm-9">
	                 <input type="text" class="form-control" name="title" id="title" placeholder="Назва товару" autofocus required>
	              </div>
	            </div>
	          
	            <div class=" row">
	                  <label  class="col-sm-3 col-form-label">Дата</label>
	                  <div class="col-sm-9">
	                       <input type="text" class="form-control" name="cr" id="cr" autocomplete="off" >
	                        
	                  </div>
	            </div>
	      </div>

	      <div class="modal-footer">
	        <button type="submit" class="btn btn-secondary btn-sm" >Отправить</button>
	      </div>
	    </form>
   </div>
</body>
</html>
```


## Library
```js
<!-- Calendar -->
{{define "calendarlib"}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker.css" rel="stylesheet" type="text/css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/locales/bootstrap-datepicker.ru.min.js"></script>
{{end}}
```

## Localization calendar
```js
!function(a){a.fn.datepicker.dates.ru={days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вск","Пнд","Втр","Срд","Чтв","Птн","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",format:"dd.mm.yyyy",weekStart:1,monthsTitle:"Месяцы"}}(jQuery);
```
