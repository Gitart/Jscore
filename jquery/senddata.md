

## Отправка всех полей формы на сервер с помощью ajax jQuery.

### Как отправить данные с формы без перезагрузки страницы, да легко с помощью ajax.

#### Создадим простенькую форму:

```html
<form method="POST" id="formx" action="javascript:void(null);" onsubmit="call()">
<legend>Test From</legend>
<label for="name">Name:</label><input id="name" name="name" value="" type="text">
<label for="email">Email:</label><input id="email" name="email" value="" type="text">
<input value="Send" type="submit">
</form>
```

#### Далее нам понадобится подключить jQuery

```js
<script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
```

И делаем непосредственно наш Javascript

```javascript
<script type="text/javascript" language="javascript">
 	function call() {
 	  var msg   = $('#formx').serialize();
        $.ajax({
          type: 'POST',
          url: 'res.php',
          data: msg,
          success: function(data) {
            $('#results').html(data);
          },
          error:  function(xhr, str){
	    alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
 
    }
</script>
```

Ну и непосредственно (res.php) файл который будет принимать наши данные и возвращать нам ответ:

```
echo "<pre>";
	print_r($_POST);
echo "</pre>";
```

#### Добавим на нашу страницу блок с атрибутом "results" куда будем выводить результат:

```
<div id="results">вывод</div>

ДЕМО

### Немного параметров:

url (строка). Страница сервера, к которой будет сделан запрос.  
type (строка: GET или POST). Тип запроса к серверу: GET или POS   
data (строка). Данные, отправляемые на сервер.   
cache (true или false). Включает или выключает кеширование браузером.   
async (true или false). По умолчанию true. Включает или выключает асинхронные запросы   
success вызывается, когда запрос завершился успешно. Ему передаются параметры: возвращаемые сервером данные, строка, содержащая код ответа сервера  
error вызывается, когда запрос завершился неудачей. Передаются: xmlHttpRequest и строка, указывающая тип ошибки   
complete вызывается, когда запрос завершился. Просто завершился, независимо от того, удачей или нет   

