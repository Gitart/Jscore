Таймер и задержка в JS
19.09.2020
29169
2 комментария
В закладки	
1
1
Таймер и задержка в JS
Содержание

    Метод setInterval
    Метод setTimeout

В JS для работы с «планированием вызова» существуют два метода:
1
Метод setInterval

Позволяет вызывать функцию много раз, через определённый интервал времени:
Схема работы setInterval

setInterval(func, delay)

Где:

    func – функция или строка кода для выполнения,
    delay – интервал в миллисекундах (1000 = 1 секунда).

Стоит заметить, что вызываемая функция будет работать асинхронно.
Выполнение кода:

setInterval("alert('Прошла одна секунда');"}, 1000);

JS
Выполнение анонимной функции:

setInterval(function(){
	alert('Прошла одна секунда');

}, 1000);

JS
Вызов функции:

setInterval('showmessage', 1000);
 
function showmessage(){
	alert('Прошла одна секунда');

}

JS
Отмены выполнения

Чтобы остановить setInterval применяется метод clearInterval(id).

var interval_id = setInterval({
	alert('Прошла одна секунда');
}, 1000);
 
...
 

clearInterval(interval_id);

JS
2
Метод setTimeout

Выполняет заданный код асинхронно только один раз, через заданный интервал времени.
Схема работы setTimeout
Синтаксис:

setTimeout(func, delay)

Где:

    func – функция или строка кода для выполнения,
    delay – интервал в миллисекундах (1000 = 1 секунда).

Выполнение кода:

setTimeout("alert('1-секундная задержка прошла');", 1000);

JS
Выполнение анонимной функции:

setTimeout(function(){
	alert('1-секундная задержка прошла');

}, 1000);

JS
Вызов функции:

setTimeout(showmessage, 1000);
 
function showmessage(){
	alert('1-секундная задержка прошла');

}

JS

Также, метод setTimeout можно отменить с помощью метода clearTimeout(id).

var timeout_id = setTimeout({
	alert('1-секундная задержка прошла');
}, 1000);
 
...
 
clearTimeout(timeout_id);
