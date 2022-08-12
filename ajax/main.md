# Примеры отправки AJAX JQuery


![изображение](https://user-images.githubusercontent.com/3950155/184350274-5f5f3259-6b42-4061-ae39-dd1bbdb38cd1.png)

Содержание

1.  [GET запрос](https://snipp.ru/jquery/ajax-jquery#link-get-zapros)
2.  [POST запросы](https://snipp.ru/jquery/ajax-jquery#link-post-zaprosy)
3.  [Отправка формы через AJAX](https://snipp.ru/jquery/ajax-jquery#link-otpravka-formy-cherez-ajax)
4.  [Работа с JSON](https://snipp.ru/jquery/ajax-jquery#link-rabota-s-json)
5.  [Выполнение JS загруженного через AJAX](https://snipp.ru/jquery/ajax-jquery#link-vypolnenie-js-zagruzhennogo-cherez-ajax)
6.  [Дождаться выполнения AJAX запроса](https://snipp.ru/jquery/ajax-jquery#link-dozhdatsya-vypolneniya-ajax-zaprosa)
7.  [Отправка HTTP заголовков](https://snipp.ru/jquery/ajax-jquery#link-otpravka-http-zagolovkov)
8.  [Обработка ошибок](https://snipp.ru/jquery/ajax-jquery#link-obrabotka-oshibok)

AJAX позволяет отправить и получить данные без перезагрузки страницы. Например, делать проверку форм, подгружать контент и т.д. А функции JQuery значительно упрощают работу.

Полное описание функции AJAX на [jquery.com](http://api.jquery.com/jquery.ajax/).

*1*

## [GET запрос](https://snipp.ru/jquery/ajax-jquery#link-get-zapros)

Запрос идет на index.php с параметром «`text`» и значением «`Текст`» через метод GET.
По сути это то же самое что перейти в браузере по адресу – `http://site.com/index.php?text=Текст`

В результате запроса index.php вернет строку «Данные приняты – Текст», которая будет выведена в сообщении [alert](https://snipp.ru/view/342).

```javascript
$.ajax({	url: '/index.php',         /* Куда пойдет запрос */	method: 'get',             /* Метод передачи (post или get) */	dataType: 'html',          /* Тип данных в ответе (xml, json, script, html). */	data: {text: 'Текст'},     /* Параметры передаваемые в запросе. */	success: function(data){   /* функция которая будет выполнена после успешного запроса.  */		alert(data);            /* В переменной data содержится ответ от index.php. */	}});
```

JS[](https://snipp.ru/download/code/10478 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

#### Код можно сократить используя функцию $.get

```javascript
$.get('/index.php', {text: 'Текст'}, function(data){	alert(data);});
```

JS[](https://snipp.ru/download/code/10480 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

#### Код файла index.php

```php
echo 'Данные приняты - ' . $_GET['text'];
```

PHP[](https://snipp.ru/download/code/10481 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

GET запросы могут кэшироваться браузером или сервером, чтобы этого избежать нужно добавить в функцию параметр – `cache: false`.

```javascript
$.ajax({	url: '/index.php',	method: 'get',	cache: false});
```

JS[](https://snipp.ru/download/code/10483 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

*2*

## [POST запросы](https://snipp.ru/jquery/ajax-jquery#link-post-zaprosy)

```javascript
$.ajax({	url: '/index.php',	method: 'post',	dataType: 'html',	data: {text: 'Текст'},	success: function(data){		alert(data);	}});
```

JS[](https://snipp.ru/download/code/10485 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

#### Или сокращенная версия – функция $.post

```javascript
$.post('/index.php', {text: 'Текст'}, function(data){	alert(data);});
```

JS[](https://snipp.ru/download/code/10487 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

#### Код файла index.php

```php
echo 'Данные приняты - ' . $_POST['text'];
```

PHP[](https://snipp.ru/download/code/10489 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

POST запросы ни когда не кэшироваться.

*3*

## [Отправка формы через AJAX](https://snipp.ru/jquery/ajax-jquery#link-otpravka-formy-cherez-ajax)

При отправке формы применяется функция `serialize()`, подробнее на [jquery.com](http://api.jquery.com/serialize/).

Она обходит форму и собирает названия и заполненные пользователем значения полей и возвращает в виде массива – `{login: 'ЗНАЧЕНИЯ_ПОЛЯ', password: 'ЗНАЧЕНИЯ_ПОЛЯ'}`.

Особенности `serialize()`:

*   Кнопки формы по которым был клик игнорируются, в результате функции их не будет.
*   serialize можно применить только к тегу form и полям формы, т.е. `$('div.form_container').serialize();` – вернет пустой результат.

Пример отправки и обработки формы:

```xml
<div class="form_container">	<div id="message"></div>	<form id="form">		<input type="text" name="login">		<input type="text" name="password">		<input type="submit" name="send" value="Отправить">	</form></div> <script>$("#form").on("submit", function(){	$.ajax({		url: '/handler.php',		method: 'post',		dataType: 'html',		data: $(this).serialize(),		success: function(data){			$('#message').html(data);		}	});});</script>
```

HTML[](https://snipp.ru/download/code/10492 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

#### Код файла handler.php

```php
if (empty($_POST['login'])) {	echo 'Укажите логин';} elseif (empty($_POST['password'])) {	echo 'Укажите пароль';} else {	echo 'Авторизация...';}
```

PHP[](https://snipp.ru/download/code/10493 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

*4*

## [Работа с JSON](https://snipp.ru/jquery/ajax-jquery#link-rabota-s-json)

Идеальный вариант когда нужно работать с массивами данных.

```javascript
$.ajax({	url: '/json.php',	method: 'get',	dataType: 'json',	success: function(data){		alert(data.text);    /* выведет "Текст" */		alert(data.error);   /* выведет "Ошибка" */	}});
```

JS[](https://snipp.ru/download/code/10497 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

#### Короткая версия

```javascript
$.getJSON('/json.php', function(data) {	alert(data.text);	alert(data.error);});
```

JS[](https://snipp.ru/download/code/10499 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

`$.getJSON` передает запрос только через GET.

#### Код файла json.php

```php
header('Content-Type: application/json'); $result = array(	'text'  => 'Текст',	'error' => 'Ошибка'); echo json_encode($result);
```

PHP[](https://snipp.ru/download/code/10501 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

### Возможные проблемы

При работе с JSON может всплыть одна ошибка – после запроса сервер отдал результат, все хорошо, но метод `success` не срабатывает. Причина кроется в серверной части (PHP) т.к. перед данными могут появится управляющие символы, например:

 [![Управляющие символы в ответе JSON](https://snipp.ru/uploads/contents/2020-09-1717-41-29.png)](https://snipp.ru/uploads/contents/2020-09-1717-41-29.png)

Из-за них ответ считается не валидным и считается как ошибочный запрос.

В таких случаях помогает очистка буфера вывода `ob_end_clean` (если он используется на сайте).

```php
... // Очистка буфераob_end_clean(); 		header('Content-Type: application/json');echo json_encode($result, JSON_UNESCAPED_UNICODE);exit();
```

PHP[](https://snipp.ru/download/code/15256 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

*5*

## [Выполнение JS загруженного через AJAX](https://snipp.ru/jquery/ajax-jquery#link-vypolnenie-js-zagruzhennogo-cherez-ajax)

В JQuery реализована функция подгруздки кода JS через AJAX, после успешного запроса он будет сразу выполнен.

```javascript
$.ajax({	method: 'get',	url: '/script.js',	dataType: "script"});
```

JS[](https://snipp.ru/download/code/10504 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

#### Или

```javascript
$.getScript('/script.js');
```

JS[](https://snipp.ru/download/code/10508 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

*6*

## [Дождаться выполнения AJAX запроса](https://snipp.ru/jquery/ajax-jquery#link-dozhdatsya-vypolneniya-ajax-zaprosa)

По умолчанию в JQuery AJAX запросы выполняются асинхронно. Т.е. запрос не задерживает выполнение программы пока ждет результатов, а работает параллельно.

Простой пример:

```javascript
var text = ''; $.ajax({	url: '/index.php',	method: 'get',	dataType: 'html',	success: function(data){		text = data;	}}); alert(text);  /* Переменная будет пустая. */
```

JS[](https://snipp.ru/download/code/10510 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

Переменная `text` будет пустая, а не как ожидается текст который вернул index.php

Чтобы включить синхронный режим нужно добавить параметр `async: false`.
Соответственно синхронный запрос будет вешать прогрузку страницы если код выполняется в `<head>` страницы.

```javascript
var text = ''; $.ajax({	url: '/index.php',	method: 'get',	dataType: 'html',	async: false,	success: function(data){		text = data;	}}); alert(text); /* В переменной будет результат из index.php. */
```

JS[](https://snipp.ru/download/code/10512 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

*7*

## [Отправка HTTP заголовков](https://snipp.ru/jquery/ajax-jquery#link-otpravka-http-zagolovkov)

Через AJAX можно отправить заголовки HEAD, они указываются в параметре `headers`.

```javascript
$.ajax({	url: '/index.php',	method: 'get',	dataType: 'html',	headers: {'Token_value': 123},	success: function(data){		console.dir(data);	}});
```

JS[](https://snipp.ru/download/code/13086 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

В PHP они будут доступны в массиве `$_SERVER`, ключ массива переводится в верхний регистр с приставкой `HTTP_`, например:

```php
<?phpecho $_SERVER['HTTP_TOKEN_VALUE']; // 123
```

PHP[](https://snipp.ru/download/code/13088 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

*8*

## [Обработка ошибок](https://snipp.ru/jquery/ajax-jquery#link-obrabotka-oshibok)

Через параметр `error` задается callback-функция, которая будет вызвана в случаи если запрашиваемый ресурс отдал 404, 500 или другой код.

```javascript
$.ajax({	url: '/index.php',	method: 'get',	dataType: 'json',	success: function(data){		console.dir(data);	},	error: function (jqXHR, exception) {		if (jqXHR.status === 0) {			alert('Not connect. Verify Network.');		} else if (jqXHR.status == 404) {			alert('Requested page not found (404).');		} else if (jqXHR.status == 500) {			alert('Internal Server Error (500).');		} else if (exception === 'parsererror') {			alert('Requested JSON parse failed.');		} else if (exception === 'timeout') {			alert('Time out error.');		} else if (exception === 'abort') {			alert('Ajax request aborted.');		} else {			alert('Uncaught Error. ' + jqXHR.responseText);		}	}});
```

JS[](https://snipp.ru/download/code/13110 "Сохранить")[](https://snipp.ru/jquery/ajax-jquery# "Скопировать")

Через `$.ajaxSetup` можно задать обработчик ошибок для всех AJAX-запросов на сайте.

```javascript
$.ajaxSetup({	error: function (jqXHR, exception) {		...	}});
```
