## 👉 Переходим с jQuery на чистый JavaScript

Конечно, уже давно пора переходить с jQuery на чистый JavaScript. В этой статье рассказывается о том, как просто и без боли отказаться от этой библиотеки, перейдя на ванильный JS.



jQuery до сих пор остается полезной и довольно практичной библиотекой, но становится всё больше вероятностей того, что вам не обязательно быть зависимыми от её применения в ваших проектах, для того, чтобы сделать простые задачи, такие как выборка элементов, их стилизация, анимация и получение данных от сервера — в этом jQuery был прекрасен. Учитывая широкую поддержку браузерами ES6 (более 96% на время написания), возможно настало удачное время для того, чтобы уйти от jQuery.

Я недавно решил отказаться от jQuery в этом блоге и оказался в бесконечном потоке поиска того, как реализуются различные паттерны на чистом JS. Чтобы сэкономить ваше время, я собрал это практическое руководство по самым распространенным паттернам в jQuery и тому, как имплементировать их на чистом JavaScript. В этой статье мы узнаем как перейти на ванилу в плане этих концепций и функционала.
Выборка элементов

Выборка одного или нескольких элементов DOM для каких-либо манипуляций с ними это одна из самых простых функций jQuery. Эквивалентом $() или jQuery() в JavaScript являются querySelector() или querySelectorAll(), в которых вы можете задавать параметры как и в jQuery — с помощью CSS селектора.

// Выбираем все элементы .box
$(".box");

// Вместо этого, мы можем выбрать первый элемент с .box
document.querySelector(".box");

// …или же выбрать все элементы .box  
document.querySelectorAll(".box");

Запускаем функцию на всех элементах выборки

querySelectorAll() отдаёт, как и jQuery, массив элементов, с которым вы уже в последствии можете работать. Но там, где вам нужно просто запустить функцию с jQuery на всей выборке, просто вызвав её, на чистом JavaScript вам нужно будет пройтись по всему массиву элементов:

// C jQuery
//  Скрываем все .box
$(".box").hide();

// Без jQuery
// Проходимся по всему массиву элементов, чтобы скрыть все элементы с .box
document.querySelectorAll(".box").forEach(box => { box.style.display = "none" }

Находим элемент внутри элемента

Обычно в jQuery это делается с помощью find(). Вы можете достичь такого же эффекта, сузив выборку до потомков элемента, просто вызвав querySelector или querySelectorAll на самом элементе:

// С jQuery
// Выбираем первый .box в .container
var container = $(".container");
// И потом...
container.find(".box");

// Без jQuery
// Выбираем первый .box в .container
var container = document.querySelector(".container");// И потом...
container.querySelector(".box");

Выбираем элементы в DOM-дереве с помощью parent(), next() и prev()

Если вы хотите пройтись по DOM-дереву для выборки родственных или родительских элементов, относительно какого-либо элемента, то вы можете это сделать с помощью методов nextElementSibling, previousElemenSibling и parentElemnt. Которые вам нужно применить на интересующем вас элементе:

// jQuery
// Отдаст следующий, предыдущий и родительский элемент для .box
$(".box").next();
$(".box").prev();
$(".box").parent();

// Без jQuery
// Отдаст следующий, предыдущий и родительский элемент для .box
var box = document.querySelector(".box");
box.nextElementSibling;
box.previousElementSibling;
box.parentElement;

Работа с событиями

В jQuery есть огромное множество способов для того, чтобы слушать события, вместо on(), bind(), live() или click(), вы могли бы сделать всё тоже самое с помощью их эквивалента addEventListener:

// С jQuery
$(".button").click(function(e) { /* handle click event */ });
$(".button").mouseenter(function(e) {  /* handle click event */ });
$(document).keyup(function(e) {  /* handle key up event */  });

// Без jQuery
document.querySelector(".button").addEventListener("click", (e) => { /* ... */ });
document.querySelector(".button").addEventListener("mouseenter", (e) => { /* ... */ });
document.addEventListener("keyup", (e) => { /* ... */ });

Слушаем события на динамически добавленных элементах

С помощью jQuery метода on(), вы можете работать с элементами “на живца”, слушая ещё и те, которые были динамически добавлены в структуру DOM. Чтобы сделать что-то подобное без jQuery, вы можете прикрепить обработчик события к элементу, как только вы добавите его в структуру DOM:

// С jQuery
// Обработка событий по клику на .search-result элементы,
// даже когда они динамически добавляются в DOM
$(".search-container").on("click", ".search-result", handleClick);

// Без jQuery
// Создаём элемент в структуре DOM
var searchElement = document.createElement("div");
document.querySelector(".search-container").appendChild(searchElement);// Слушаем событие на элементе
searchElement.addEventListener("click", handleClick);

Вызываем и создаем события

Вы можете вручную вызывать события с помощью trigger() в jQuery, а также в чистом JS при помощи dispatchEvent(). Метод dispatchEvent() может быть вызван совершенно на любом элементе и берёт Event, как первый аргумент:

// C jQuery
// Вызываем myEvent на документе и .box
$(document).trigger("myEvent");
$(".box").trigger("myEvent");

// Без jQuery
// Создаем и запускаем myEvent
document.dispatchEvent(new Event("myEvent"));
document.querySelector(".box").dispatchEvent(new Event("myEvent"));

Стилизация элементов

Если вы вызываете css() на элементе, чтобы поменять его CSS инлайново с помощью jQuery, то этого же эффекта вы можете добиться с помощью .style в чистом JavaScript.

// С jQuery
// Выбирает .box и меняет его цвет текста на #000
$(".box").css("color", "#000");

// Без jQuery
// Выбирает первый .box и меняет его цвет текста на #000
document.querySelector(".box").style.color = "#000";

С jQuery вы можете передать объект с парами ключ-значения, чтобы стилизовать уже большое количество свойств за раз. В JavaScript вы можете выставить только одно значение за раз или указать вcе стили одной строкой:

// С jQuery
// Передаем несколько стилей
$(".box").css({
  "color": "#000",
  "background-color": "red"
});

// Без jQuery
// Выставляем цвет на #000 и делаем фон красным
var box = document.querySelector(".box");
box.style.color = "#000";
box.style.backgroundColor = "red";

// Выставляем все стили разом, но перезаписываем уже существующие
box.style.cssText = "color: #000; background-color: red";

hide() и show()

Все удобства методов hide() и show() можно получить через свойство .style, выставив display на none или block:

// C jQuery
// Спрятать и показать элемент
$(".box").hide();
$(".box").show();

// Без jQuery
// Прячем и показываем элемент, изменяя display на block или none
document.querySelector(".box").style.display = "none";
document.querySelector(".box").style.display = "block";

Document ready

Если вам нужно подождать полной загрузки DOM, перед, к примеру, развешиванием ивентов на объекты в структуре документа, то в jQuery вы бы использовали $(document).ready() или его сокращение $(). Но на самом деле мы можем легко и просто сами создать похожую функцию, в которой будем слушать событие DOMContentLoaded:

// C jQuery
$(document).ready(function() { 
  /*  Начинаем работу после полной загрузки DOM */
});

// Без jQuery
// Пишем схожий метод и смело начинаем его использовать
var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  /*  Начинаем работу после полной загрузки DOM */ 
});

Работа с классами

Вы легко можете работать с классами через свойство classList, в котором есть возможности для переключения, замены, добавления и удаления классов любого элемента DOM.

// C jQuery
// Добавляем, удаляем и переключаем класс focus
$(".box").addClass("focus");
$(".box").removeClass("focus");
$(".box").toggleClass("focus");

// Без jQuery
// Добавляем, удаляем и переключаем класс focus
var box = document.querySelector(".box");
box.classList.add("focus");
box.classList.remove("focus");
box.classList.toggle("focus");

Если вам надо удалить или добавить несколько классов, то вы можете просто передать несколько аргументов в add() и remove():

// Добавляем "focus" и "highlighted" классы, а затем удаляем ихvar box = document.querySelector(".box");
box.classList.add("focus", "highlighted");
box.classList.remove("focus", "highlighted");

Если вам надо поменять два класса, которые взаимозаменяют друг друга, то вы можете вызывать replace() на classList и заменить один класс другим:

// Удаляем класс "focus" и добавляем "blurred"
document.querySelector(".box").classList.replace("focus", "blurred");

Проверяем есть ли класс у элемента

Если вы хотите запустить функцию на элементе только в том случае, если у него есть определенный класс, то вы можете заменить hasClass() на classList.contains():

// С jQuery
// Проверяем есть ли у .box класс focus и потом запускаем на нем функцию
if ($(".box").hasClass("focus")) {
  //  Понеслась...
}

// Без jQuery
// Проверяем есть ли у .box класс focus и потом запускаем на нем функцию
if (document.querySelector(".box").classList.contains("focus")) {
  //  Понеслась...
}

Сетевые запросы с get() или ajax()

Метод fetch() позволяет вам создавать сетевые запросы схожим образом с ajax() и get() методами от jQuery. fetch() берёт ссылку, как аргумент и отдаёт промис, который вы уже можете использовать для обработки данных.

// С jQuery
$.ajax({
    url: "data.json"
  }).done(function(data) {
    // ...
  }).fail(function() {
    // Handle error
  });

// Без jQuery
fetch("data.json")
  .then(data => {
    // Handle data
  }).catch(error => {
    // Handle error
  });

Создание элементов

Если вы хотите динамически создать элемент в JavaScript, чтобы добавить его в DOM, то вы можете вызывать createElement() на document и передать ему имя тега, как аргумент, чтобы указать какой именно элемент вы хотите создать:

// Создаем div и span
$("<div/>");
$("<span/>");

// Создаем div и span
document.createElement("div");
document.createElement("span");

Если вы хотите добавить какой-либо контент этим элементам, то вы можете просто использовать свойство textContent или создать текстовой узел с помощью createTextNode и добавить его созданному элементу:

var element = document.createElement("div");
element.textContent = "Text"
// или создайте textNode и добавьте его элементу
var text = document.createTextNode("Text");
element.appendChild(text);

Обновление DOM

Если вам нужно изменить текст элемента или добавить новые элементы в DOM, то скорее всего вы будете использовать innerHTML, но его использование довольно рисковое дело, связанное с XSS атаками.

Если вам надо только “прочесть” или обновить текст элемента, то вы можете применить свойство textContent на нужном объекте, чтобы получить текст в элементе или обновить его:

// C jQuery
// Меняем текст в .button
$(".button").text("New text");// Считываем текст в .button
$(".button").text(); // Отдаёт"New text"

// Без jQuery
// Меняем текст в .button
document.querySelector(".button").textContent = "New text";// Считываем текст в .button
document.querySelector(".button").textContent; // Отдаёт"New text"

Если вы создаёте элемент, то вам надо добавить его уже другому элементу, используя на родительском элементе метод appendChild():

// Создаём div и вставляем его в .container
$(".container").append($("<div/>"));

// Создаём div и вставляем его в .container
var element = document.createElement("div");
document.querySelector(".container").appendChild(element);

А теперь всё вместе, как мы можем обновить текст и класс и добавить это всё в DOM:

// Создаём div
var element = document.createElement("div");

// Добавляем ему класс
element.classList.add("box");

// Указываем текст
element.textContent = "Text inside box";

// Вставляем его в .container
document.querySelector(".container").appendChild(element);

## Резюмируем

Это никак не полное руководство по нативным JavaScript методам, упомянутым в статье, но я надеюсь, что эта статья была полезным гайдом для тех, кто хочет уйти с jQuery. В общем, вот несколько методом, которые мы тут обсудили:

Выбор элементов с querySelector и querySelectorAll

Прослушиваем события с помощью addEventListener

Обновляем CSS и стили через свойство style

Работаем с классами, через свойство classList

AJAX запросы с fetch

Вызываем события с помощью dispatchEvent

Создаем элементы с createElement

Обновляем текст с помощью свойства textContent

Добавляем элементы в DOM с appendChild
