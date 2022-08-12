# Работа с cookie в JavaScript

![изображение](https://user-images.githubusercontent.com/3950155/184357035-4aa8a1af-d62d-4000-a758-5379f03724dc.png)

Содержание

1.  [Проверка включены ли cookies в браузере](https://snipp.ru/jquery/cookie-js#link-proverka-vklyucheny-li-cookies-v-brauzere)
2.  [Запись cookies](https://snipp.ru/jquery/cookie-js#link-zapis-cookies)
3.  [Чтение cookies](https://snipp.ru/jquery/cookie-js#link-chtenie-cookies)
4.  [Удаление cookies](https://snipp.ru/jquery/cookie-js#link-udalenie-cookies)
5.  [Отладка и просмотр cookies в браузерах](https://snipp.ru/jquery/cookie-js#link-otladka-i-prosmotr-cookies-v-brauzerah)
6.  [Пример использования cookies](https://snipp.ru/jquery/cookie-js#link-primer-ispolzovaniya-cookies)

Сookies или куки – это данные в виде пар ключ=значение, которые хранятся в файлах на компьютере пользователя.

Для хранимых данных существуют несколько ограничений:

*   Одна пара запись не должна занимать более 4Кб.
*   Общее количество кук на один домен ограничивается примерно 20.

*1*

## [Проверка включены ли cookies в браузере](https://snipp.ru/jquery/cookie-js#link-proverka-vklyucheny-li-cookies-v-brauzere)

Чтобы узнать, включены ли cookies в браузере пользователя до их использования, можно проверить свойство `navigator.cookieEnabled` (содержит `true` или `false`).

```javascript
if (navigator.cookieEnabled === false){	alert("Cookies отключены!");}
```

JS[](https://snipp.ru/download/code/16546 "Сохранить")[](https://snipp.ru/jquery/cookie-js# "Скопировать")

В старых браузерах `navigator.cookieEnabled` может быть неопределенным.

*2*

## [Запись cookies](https://snipp.ru/jquery/cookie-js#link-zapis-cookies)

Запись в `document.cookie` происходит особым образом, например следующий пример обновит только данные с ключом «name», но при этом не затронет все остальные.

```javascript
document.cookie = "name=user";
```

JS[](https://snipp.ru/download/code/16444 "Сохранить")[](https://snipp.ru/jquery/cookie-js# "Скопировать")

Такая установка будет хранится до закрытия браузера. Чтобы продлить время жизни cookies есть два типа параметров:

### Max-age и Expires

`max-age` устанавливает время жизни куки в секундах, а параметр `expires` задает непосредственно дату окончания в формате RFC-822 или RFC-1123 (`Mon, 03 Jul 2021 10:00:00 GMT`).

Следующие примеры устанавливают куки `name=user` сроком на один месяц:

```javascript
document.cookie = "name=user;max-age=2629743"; /* или */var cookie_date = new Date();cookie_date.setMonth(cookie_date.getMonth() + 1);document.cookie = "name=user;expires=" + cookie_date.toUTCString();
```

JS[](https://snipp.ru/download/code/16540 "Сохранить")[](https://snipp.ru/jquery/cookie-js# "Скопировать")

Куки сроком на год:

```javascript
document.cookie = "name=user;max-age=31556926"; /* или */var cookie_date = new Date();cookie_date.setYear(cookie_date.getFullYear() + 1);document.cookie = "name=user;expires=" + cookie_date.toUTCString();
```

JS[](https://snipp.ru/download/code/16532 "Сохранить")[](https://snipp.ru/jquery/cookie-js# "Скопировать")

Другие параметры:

### Path

Параметр указывает URL-префикс пути т.е. на каких страницах будут доступны установленные куки. Значение path должно быть относительным URL (без домена).

Например, установка кук для страницы `http://example.com/admin/` и всех её дочерних:

```javascript
document.cookie = "name=user;path=/admin";
```

JS[](https://snipp.ru/download/code/16476 "Сохранить")[](https://snipp.ru/jquery/cookie-js# "Скопировать")

Как правило, в качестве пути указывают корень сайта `path=/`, чтобы куки были доступны на всем сайте.

### Domain

Параметр указывает домен, на котором будут доступны куки, включая поддомены.

```javascript
document.cookie = "name=user;domain=example.com";
```

JS[](https://snipp.ru/download/code/16535 "Сохранить")[](https://snipp.ru/jquery/cookie-js# "Скопировать")

### Secure

Параметр позволяет делать установку куки только на страницах с HTTPS-протоколом. С этой настройкой, установленные куки не будут доступны на том же сайте с протоколом HTTP.

```javascript
document.cookie = "name=user;secure";
```

JS[](https://snipp.ru/download/code/16537 "Сохранить")[](https://snipp.ru/jquery/cookie-js# "Скопировать")

*3*

## [Чтение cookies](https://snipp.ru/jquery/cookie-js#link-chtenie-cookies)

Чтение кук не совсем удобное, в JS нет нативного метода, который получит значение по ключу. Объект `document.cookie` возвращает все установленные значения в виде строки, например:

```javascript
document.cookie = "name=user"; document.cookie = "fullname=Ivanov";document.cookie = "date=10.01.2021"; console.log(document.cookie); // name=user; date=10.01.2021; fullname=Ivanov
```

JS[](https://snipp.ru/download/code/16447 "Сохранить")[](https://snipp.ru/jquery/cookie-js# "Скопировать")

Как видно никаких дополнительный данных о куках (`expires`, `path`, `domain`, `secure`) в `document.cookie` не содержится.

Чтобы получить значение по ключу можно использовать регулярное выражение:

```javascript
var results = document.cookie.match(/name=(.+?)(;|$)/);console.log(results[1]); // user var results = document.cookie.match(/fullname=(.+?)(;|$)/);console.log(results[1]); // Ivanov var results = document.cookie.match(/date=(.+?)(;|$)/);console.log(results[1]); // 10.01.2021
```

JS[](https://snipp.ru/download/code/16538 "Сохранить")[](https://snipp.ru/jquery/cookie-js# "Скопировать")

Функция для получения значения cookie по ключу:

```javascript
function getCookie(name) {	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));	return matches ? decodeURIComponent(matches[1]) : undefined;} console.log(getCookie('name')); // user
```

JS[](https://snipp.ru/download/code/16730 "Сохранить")[](https://snipp.ru/jquery/cookie-js# "Скопировать")

Получить все значения cookies в виде объекта:

```javascript
var obj = {};var cookies = document.cookie.split(/;/);for (var i = 0, len = cookies.length; i < len; i++) {	var cookie = cookies[i].split(/=/);	obj[cookie[0]] = cookie[1];} console.dir(obj); // {date: "10.01.2021", fullname: "Ivanov", name: "user"}
```

JS[](https://snipp.ru/download/code/16543 "Сохранить")[](https://snipp.ru/jquery/cookie-js# "Скопировать")

*4*

## [Удаление cookies](https://snipp.ru/jquery/cookie-js#link-udalenie-cookies)

Удаление данных происходит путём установки новой куки с параметром `max-age=-1` или expires с прошедшей датой.

```javascript
document.cookie = "user=;max-age=-1"; /* или через expires */var cookie_date = new Date();cookie_date.setMonth(cookie_date.getMonth() - 1);document.cookie = "name=user;expires=" + cookie_date.toUTCString();
```

JS[](https://snipp.ru/download/code/16544 "Сохранить")[](https://snipp.ru/jquery/cookie-js# "Скопировать")

Удаление всех кук сайта:

```javascript
var cookies = document.cookie.split(/;/);for (var i = 0, len = cookies.length; i < len; i++) {	var cookie = cookies[i].split(/=/);	document.cookie = cookie[0] + "=;max-age=-1";}
```

JS[](https://snipp.ru/download/code/16545 "Сохранить")[](https://snipp.ru/jquery/cookie-js# "Скопировать")

*5*

## [Отладка и просмотр cookies в браузерах](https://snipp.ru/jquery/cookie-js#link-otladka-i-prosmotr-cookies-v-brauzerah)

Просмотр, редактирование и удаление кук доступно в браузерах, в панелях для разработчиков:

### Google Chrome

В DevTools (Windows: F12, MacOS: ⌘ + ⌥ + i), вкладка «Application», раздел «Storage» – «Cookies».

 [![Просмотр cookies в Google Chrome](https://snipp.ru/uploads/contents/2021-01-2214-56-15.png)](https://snipp.ru/uploads/contents/2021-01-2214-56-15.png)

### Mozilla Firefox

В веб-консоли (Windows: F12, MacOS: ⌘ + ⌥ + k), вкладка «Хранилище», раздел «Куки».

 [![Просмотр cookies в Mozilla Firefox](https://snipp.ru/uploads/contents/2021-01-2214-54-46.png)](https://snipp.ru/uploads/contents/2021-01-2214-54-46.png)

*6*

## [Пример использования cookies](https://snipp.ru/jquery/cookie-js#link-primer-ispolzovaniya-cookies)

В примере выполняется сохранение выбранного пункта селекта на нескольких страницах:

```xml
<h4>Страница №1</h4> <div class="form-group">	<label for="example">Выберите любой пункт:</label>	<select class="form-control" id="example">		<option>1</option>		<option>2</option>		<option>3</option>		<option>4</option>		<option>5</option>	</select></div> <script src="/jquery.min.js"></script><script>$(document).ready(function(){	var selected = document.cookie.match(/select=(.+?);/);	if (selected) {		$('#example').val(selected);	} 	$('#example').change(function(){		document.cookie = "select=" + $(this).val();	});});</script>
```
