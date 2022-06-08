5 важных JavaScript методов для веб-разработчиков

Как веб-разработчику, вам часто приходится манипулировать DOM’ом — объектной моделью, которая используется браузерами для указания логической структуры веб-страницы и уже основываясь на этой структуре, браузер рендерит HTML элементы на вашем экране.

HTML представляет собой основу DOM структуры. Однако, во многих случаях, вам надо манипулировать ей с помощью JavaScript, обычно это нужно для добавления дополнительного функционала на сайт или других интерактивных плюшек.

В этом посте вы узнаете 15 основных JavaScript методов, которые помогут вам с манипуляцией DOM. Вы вероятно будете часто использовать эти методы в вашем коде и также столкнетесь с ними во многих JavaScript руководствах.

Перевод статьи 15 JavaScript Methods For DOM Manipulation for Web Developers

👉Мой Твиттер — там много из мира фронтенда, да и вообще поговорим🖖. Подписывайтесь, будет интересно: ) ✈️
1. querySelector()

Метод querySelector() возвращает первый элемент, который соответствует одному или более CSS селекторам. Если совпадения не будет, то он вернет null.

Перед тем как был представлен querySelector(), разработчики широко использовали getElementById() метод, который подтягивал элемент с указанным значением id.

Хоть сам по себе getElementById() до сих пор и полезный метод, но с новым querySelector() и querySelectorAll() методами, мы можем спокойно брать любые элементы, основываясь на любом CSS селекторе. Следовательно — у нас появляется больше гибкости.
Синтаксис:

var ele = document.querySelector(selector);

ele — сначала ищет совпадения элементов и если нет, то он выдает null.

selector — один или больше селекторов, такие как “#fooId”, “.fooClassName”, “.class1.class2” или “.class1, .class2”
Пример кода:

В этом примере, первый <div> выбирается querySelector() методом и его цвет меняется на красный.

<p>paragraph one</p><p>paragraph two</p><div>div one</div><p>paragraph three</p><div>div two</div>JavaScript
var firstDiv = document.querySelector('div');firstDiv.style.color = 'red';

2. querySelectorAll()

В отличие от querySelector(), который возвращает только первый пример всех совпадающих элементов, querySelectorAll() возвращает все элементы, которые подходят под указанный CSS селектор.

Подходящие элементы возвращаются в виде NodeList объекта, который будет пустым в случае того, если не будет найдено совпадений.
Синтаксис

var eles = document.querySelectorAll(selector);

eles — NodeList объект со всеми совпадающими элементами, как свойствами значений. Объект само собой будет пустым, если не будет найдено совпадений.

selector — один или два CSS селектора, такие как “#fooId”, “.fooClassName”, “.class1.class2” или “.class1, .class2”
Пример кода:

Пример ниже использует тот же HTML, что и до этого. Однако в этом примере, все параграфы выделены querySelectorAll() и разукрашены в синий цвет.

<p>paragraph one</p><p>paragraph two</p><div>div one</div><p>paragraph three</p><div>div two</div>JavaScriptvar paragraphs = document.querySelectorAll('p');for(var p of paragraphs)p.style.color = 'blue';

3. addEventListener()

События отображают то, что случается с HTML элементом, например клик, фокусировка или загрузка — то на что можно реагировать с JavaScript. Мы можем назначить JS функции, чтобы слушать эти события в элементах и соответственно делать какие-либо действия когда это событие происходит.

Есть три способа, с помощью которых вы можете назначить функцию к определенному событию.

Если foo() это кастомная функция, вы можете поставить её, как слушатель события клика, то есть вызвать её тогда, когда кто-то кликнул по кнопке. Вот три способа, как это сделать:

1 способ:
  <button onclick=foo>Alert</button>2 способ:
var btn = document.querySelector('button');
btn.onclick=foo;3 способ:
var btn = document.querySelector('button');
btn.addEventListener('click', foo);

Метод addEventListener() имеет некоторые плюсы. Это последний стандарт, позволяющий назначение более одной функции, как слушателей событий — к тому же он идет вместе с набором довольно полезных опций.
Синтаксис

ele.addEventListener(evt, listener, [options]);

ele — HTML элемент, который мы будем отслеживать.

evt — целевое событие.

listener — обычно это JavaScript функция.

options — объект с набором булевых значений, перечисленных ниже.

Что если выставить эти значения на true?

capture — останавливает событие, то есть препятствует вызову любого слушателя событий для того же типа события у предков элементов. Чтобы этим воспользоваться, рассмотрите два синтаксиса:

ele.addEventListener(evt, listener, true)ele.addEventListener(evt, listener, {capture:true});

once — слушатель вызывается в первый раз при совершении события, далее он автоматически отделяется от события и больше не будет срабатывать.

passive — дефлотное действие события не может быть остановлено preventDefault() методом.
Пример кода:

В этом примере, мы добавляем слушатель события по клику для <button>.

<button>Click Me</button>JavaScript
var btn = document.querySelector('button');
btn.addEventListener('click',foo);
function foo() { alert('hello'); }

4. removeEventListener()

Метод removeEventListener() отделяет слушатель события, предварительно добавленного с addEventListener() методом из события, которое он слушает.
Синтаксис

ele.removeEventListener(evt, listener, [options]);

Использует тот же синтаксис, что и вышеупомянутый addEventListener() метод, кроме опции once, которая тут исключена. Эти опции используются, чтобы быть очень точным в идентификации слушателя, который будет устранен.
Пример кода

На примере кода для addEventListener(), мы удалим слушатель события по клику по имени foo из элемента <button>.

btn.removeEventListener('click',foo);

5. createElement()

Метод createElement() создаёт HTML элемент, используя имя HTML тега, такое как ‘p’ или ‘div’.

Вы позже можете добавить этот элемент на веб-страницу, используя разные методы вставки в DOM, такие как AppendChild() и т.п, про них вы узнаете дальше в статье.
Синтаксис

document.createElement(tagName);

tagName — имя HTML тега, который вы хотите создать.
Пример кода:

В следующем примере, вы можете создать новый параграф:

var pEle = document.createElement('p')

6. appendChild()

Метод appendChild() добавляет элемент, как последний потомок HTML элементу, который включен в этот метод.

Потомок может быть вставлен как заново созданный элемент или как уже существующий. В последнем случае, он будет перемещен со своей предыдущей позиции на позицию последнего потомка.
Синтаксис

ele.appendChild(childEle)

ele — HTML элемент которому будет добавлен childEle как последний потомок.

childEle — HTML элемент который будет добавлен как последний потомок ele.
Пример кода:

В этом примере, мы вставим <strong> элемент, как потомка <div> элемента, используя appendChild() и вышеупомянутый createElement().

<div></div>JavaScript
var div = document.querySelector('div');var strong = document.createElement('strong');strong.textContent = 'Hello';div.appendChild(strong);

7. removeChild()

Метод removeChild() удаляет указанный элемент потомок из HTML элемента, который вызывает этот метод.
Синтаксис

ele.removeChild(childEle)

ele — родительский элемент childEle.

childEle — потомок ele.
Пример кода:

В этом примере, мы удалим <strong> элемент, который мы добавили как потомка тегу <div> в предыдущем примере.

div.removeChild(strong);

8. replaceChild()

Метод replaceChild() заменяет элемент потомок другим элементом, принадлежащим родительскому элементу, который вызывает этот метод.
Синтаксис

ele.replaceChild(newChildEle, oldChileEle)

ele — родительский элемент, потомки которого будут поменяны местами.

newChildEle — элемент потомок ele, который заменит oldChildEle.

oldChildEle — элемент потомок ele, которым будет заменен newChildEle.
Пример кода:

В этом примере, элемент потомок <strong> принадлежит родителю <div> и заменяется заново созданным тегом <em>.

HTML:
<div>
  <strong>hello</strong>
</div>JavaScript:
var em = document.createElement('em');
var strong = document.querySelector('strong');
var div = document.querySelector('div');
em.textContent = 'hi';
div.replaceChild(em, strong);

9. cloneNode()

Когда вы создаете новый элемент, которому нужно быть таким же, как и уже созданному элементу на странице, вы можете просто создать его копию используя метод cloneNode().
Синтаксис

var dupeEle = ele.cloneNode([deep])

dupeEle — копия ele элемента.

ele — HTML элемент, который скопируют.

deep — Булево значение. Если оно выставлено на true, тоdupeEle будет с теми же потомками, что и ele, а если же стоит false, то оно будет клонировано без потомков.
Пример кода:

В этом примере мы создадим копию элемента <strong> с cloneNode(), а затем мы добавим его тегу <div>, как элемент потомок с помощью упомянутого выше метода appendChild().

Как результат, <div> будет состоять из двух <strong> элементов, оба из которых будут с текстом hello.

HTML:
<div>
  <strong>hello</strong>
</div>JavaScript:
var strong = document.querySelector('strong');
var copy = strong.cloneNode(true);
var div = document.querySelector('div');
div.appendChild(copy);

10. insertBefore()

Метод insertBefore() добавляет указанный элемент потомок перед другим элементом потомком. Этот метод вызывается родительским элементом.

Если упомянутого потомка не существует или вы передали null, потомок, который должен быть добавлен, будет добавлен, как последний потомок родителя, схоже с appendChild().
Синтаксис

ele.insertBefore(newEle, refEle);

ele — родительский элемент.

newEle — новый HTML элемент, который вставится.

refEle — элемент потомок ele, перед которым будет вставлен newEle.
Пример кода:

В этом примере, мы создали новый <em> элемент с новым текстом внутри и добавили его перед элементом <strong> внутри родительского элемента <div>.

HTML:
<div>
  <strong>hello</strong>
</div>JavaScript:
var em = document.createElement('em');
var strong = document.querySelector('strong');
var div = document.querySelector('div');
em.textContent = 'hi';
div.insertBefore(em, strong);

11. createDocumentFragment()

Метод createDocumentFragment() может быть и не хорошо известен другим, как все из этого списка, однако он не менее важен, особенно если вам надо вставить несколько элементов разом, как например добавить несколько строк в таблицу.

Метод создает объект DocumentFragment, который по сути является узлом DOM, который не является частью DOM древа. Это будто бы буфер, в который мы можем класть другие элементы, перед тем как добавлять их в желаемый узел DOM’а.

Но почему бы нам просто не добавить элементы напрямую? Потому что вставка в DOM влечет за собой изменение шаблона и это сам по себе тяжелый процесс для браузера, так как вставка нескольких последовательных элементов повлечет за собой еще больше изменений в шаблоне.

С другой стороны, добавление элементов в DocumentFragment объект не вызывает каких-либо изменений в шаблоне, так что вы можете добавлять в него столько элементов, сколько захотите перед тем как передать их DOM древу, вызывая смену шаблона только в нужный момент.
Синтаксис

document.createDocumentFragment()

Пример кода:

В этом примере мы создадим несколько строк таблиц и ячеек с помощью createElement(), затем добавим их объекту DocumentFragment и под конец добавим этот элемент HTML таблице, используя метод appendChild().

Как результат, пять строк для каждой из них будут содержать одну ячейку с числом от одного до 5, в виде контента.

HTML:
<table></table>JavaScript:
var table = document.querySelector("table");
var df = document.createDocumentFragment();
 
for(var i=0; i<5; i++) {
  var td = document.createElement("td");
  var tr = document.createElement("tr");
  td.textContent = i;
  tr.appendChild(td)
  df.appendChild(tr);
}
 
table.appendChild(df);

12. getComputedStyle()

Иногда вам надо проверить значения CSS свойств каждого элемента перед внесением изменений. Вы можете использовать свойство ele.style для этого, однако getComputedStyle() метод был сделан конкретно для этой цели, он возвращает read-only вычисленные значения всех CSS свойств указанного HTML элемента.
Синтаксис

var style = getComputedStyle(ele, [pseudoEle])

style — CSSStyleDeclaration объект возвращаемый этим методом. Он содержит все CSS свойства и их значения для элемента ele.

ele — это HTML элемент, CSS значения которого будут подтянуты.

pseudoEle — (опциональный параметр) это строка, которая представляет собой псевдоэлемент. Если он упомянут, то CSS свойства указанного псеводоэлемента ассоциированные с ele будут возвращены.
Пример кода:

В этом примере, мы получаем и показываем вычисленное свойство width элемента <div>, используя метод getComputedStyle().

HTML:
<div></div>JavaScript:
var style = getComputedStyle(document.querySelector('div'));
alert(style.width);

13. setAttribute()

Метод setAttribute() добавляет новый атрибут HTML элементу, так и меняет его значение для уже существующих.
Синтаксис

ele.setAttribute(name, value);

ele — это HTML элемент, к которому будет добавлен атрибут или чей атрибут будет изменен.

name — имя атрибута

value — значение атрибута
Пример кода:

В этом примере мы добавим атрибут contenteditable для <div>, используя setAttribute(), который сделает этот контент редактируемым.

HTML:
<div>hello</div>JavaScript:
var div = document.querySelector('div');
div.setAttribute('contenteditable', '')

14. getAttribute()

Метод getAttribute() возвращает значение указанного атрибута, принадлежащего к определенному HTML элементу.
Синтаксис

ele.getAttribute(name);

ele — HTML элемент, чей атрибут запрашивается.

name — имя атрибута.
Пример кода:

В этом примере, мы показываем значение атрибута contenteditable, принадлежащего элементу <div> с помощью метода getAttribute()

HTML:
<div contenteditable=true>hello</div>JavaScript:
var div = document.querySelector('div');
alert(div.getAttribute('contenteditable')) 

15. removeAttribute()

Метод removeAttribute() удаляет заданное значение конкретного элемента HTML.
Синтаксис

ele.removeAttribute(name);

ele — HTML элемент чей атрибут будет удален.

name — имя атрибута.
Пример кода:

В этом примере мы удаляем contenteditable атрибут из элемента <div>. Как результат, <div> больше не будет редактируемым.

HTML:
  <div contenteditable=true>hello</div>JavaScript:
var div = document.querySelector('div');
div.removeAttribute('contenteditable');

More from Stas Bagretsov

Н
