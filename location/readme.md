# Location – URL текущей страницы

Содержание

    Location.href
    Location.protocol
    Location.port
    Location.host
    Location.hostname
    Location.pathname
    Location.search
    Location.hash

Объект Location связан с адресной строкой браузера, в его свойствах содержатся все компоненты URL доступные для чтения и записи.

Доступ к Location обычно осуществляется через объекты Document.location или Window.location. Если скрипт запускается из iframe (в одном домене), доступ к родительскому окну доступен через window.parent.location.

Рассмотрим какие будут значения при следующим URL:

http://www.example.com/pages/contats?page=1&sort=2#marker
1
Location.href

Вернет полный URL страницы.

console.log(window.location.href);

Результат:

http://www.example.com/pages/contats?page=1&sort=2#marker

Объекту location можно присвоить новый URL, браузер сразу перейдет на новую страницу.

window.location.href = 'https//snipp.ru';

JS

Так же для редиректа можно использовать методы location.assign() и location.replace(). Отличие последнего в том, что пользователь не сможет использовать кнопку «назад».

window.location.assign('https//snipp.ru');

JS

window.location.replace('https//snipp.ru');

JS
2
Location.protocol

Возвращает используемый протокол, включая :.

console.log(window.location.protocol);

JS
Результат:

http:

3
Location.port

Номер порта, если его нет в URL, то ни чего не выведется.

console.log(window.location.port);

JS
4
Location.host

Содержит домен и порт (если есть).

console.log(window.location.host);

JS
Результат:

www.example.com

5
Location.hostname

Содержит только домен.

console.log(window.location.hostname);

JS
Результат:

www.example.com

6
Location.pathname

Строка пути текущий страницы, начинается с /.

console.log(window.location.pathname);

JS
Результат:

/pages/contats

7
Location.search

GET-параметры, начинается с ?.

console.log(window.location.search);

JS
Результат:

?page=1&sort=2

8
Location.hash
Хеш страницы, начинается с #.

console.log(window.location.hash);

JS
Результат:

#marker

Для изменения хеша не обязательно указывать решетку:

window.location.hash = '123';
