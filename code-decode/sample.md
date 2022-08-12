## В JavaScript есть две функции для декодирования и кодирования строк base64:

btoa() – кодирует строку в Base64:
```
var value = window.btoa('Encode a string');
console.log(value);
```

atob() – декодирует:
```
var value = window.atob('RW5jb2RlIGEgc3RyaW5n');
console.log(value);
```


Но в большинстве браузеров они не работают с кириллицей в UTF-8 и символами эмодзи.
В консоле браузера будет ошибка:

Uncaught DOMException: Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.

Исправить это можно несколькими способами:
Метод 1

Метод предложенный Johan Sundström:
Кодирование
```
function utf8_to_b64(str) {
	return window.btoa(unescape(encodeURIComponent(str)));
}
var value = utf8_to_b64('Текст с эмодзи 😀😃😄');
console.log(value);
```

## Декодирование
```
function b64_to_utf8(str) {
	return decodeURIComponent(escape(window.atob(str)));
}
var value = b64_to_utf8('0KLQtdC60YHRgiDRgSDRjdC80L7QtNC30Lgg8J+YgPCfmIPwn5iE');
console.log(value);
```

## Метод 2

Мини-библиотека base64.js (5kb), которая предварительно конвертирует строку в UTF-8.
Кодирование

```
var value = Base64.encode('Текст с эмодзи 😀😃😄');
console.log(value);
```

## Декодирование

```
var value = Base64.decode('0KLQtdC60YHRgiDRgSDRjdC80L7QtNC30Lgg8J+YgPCfmIPwn5iE');
console.log(value);
```
