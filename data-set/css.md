# Почему вы должны использовать атрибуты данных в CSS

Ваша первая мысль из этого заголовка, вероятно, заключается в том, что вы думаете, что я говорю вам использовать атрибуты данных в качестве селекторов в вашем CSS [data-attribute] { color: white }, но на самом деле я говорю об использовании значения атрибутов данных в качестве контента для вашего CSS. Вы можете сделать это, используя attr()функцию в CSS. Эта функция вернет значение любого атрибута данных, который затем можно будет использовать в CSS. Чтобы объяснить это дальше, давайте воспользуемся примером ниже.

Представьте, что в вашем приложении есть кнопка уведомления, которая будет отображать количество непрочитанных сообщений в пузыре.
![image](https://user-images.githubusercontent.com/3950155/224502574-46a72d9e-3cdd-4527-9aa2-6d4aae0e9b8d.png)


Это довольно распространенная проблема, и ее можно решить, написав HTML-код, который выглядит так:

```html
<div class="container">
  <button>Bell Icon</button>
  <span class="badge">5</span>
</div>
```

и немного CSS вроде этого:

```css
.container {
  position: relative;
}
.badge {
  position: absolute;
  top: -0.75em;
  right: -0.75em;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: red;
  color: white;
}
```

Это дало бы правильный результат, но это довольно громоздко, так как вокруг нашей кнопки есть обертка и дополнительный диапазон, содержащий счетчик значков. К счастью, с помощью attr()функции мы можем сделать это намного проще. Вместо каких-либо оберток наш HTML будет просто одной кнопкой.

<button data-notification-count="5">Bell Icon</button>
Вместо того, чтобы иметь весь дополнительный код для значка уведомления, мы просто используем атрибут данных, который содержит количество. Теперь в CSS мы можем использовать attr()функцию для получения этого количества.

```css
[data-notification-count] {
  position: relative;
}

[data-notification-count]::before {
  content: attr(data-notification-count);
  position: absolute;
  top: -0.75em;
  right: -0.75em;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: red;
  color: white;
}
```

Единственная реальная разница между предыдущим CSS и новым CSS заключается в том, что элемент кнопки действует как оболочка для счетчика, поэтому он позиционируется относительно. Затем элемент «до» кнопки используется в качестве диапазона значков из предыдущего примера, а количество значков задается с помощью свойства содержимого элемента «до». Если вы не знакомы со свойством содержимого, то, по сути, оно просто устанавливает содержимое внутри элемента в любой текст, на который вы установили свойство. В этом случае содержимое динамически изменяется с помощью атрибута данных HTML. Это удивительно, поскольку значительно упрощает HTML-код, но также облегчает динамическое изменение счетчика с помощью JavaScript, поскольку необходимо обновить только атрибут данных, а счетчик изменится автоматически.

Теперь я уверен, что у вас в голове крутятся классные вещи, которые вы можете сделать с этой attr()функцией, такие как динамическая установка размера элемента, подобного этому:
```css
<div data-length="10%"></div>
[data-length] {
  width: attr(data-length)
}
```

К сожалению, это еще не поддерживается в CSS. В настоящее время с помощью функции можно установить только свойство содержимого attr(), но этот тип функциональности запланирован на будущее CSS. В будущем attr()можно будет принимать тип, чтобы вместо строки возвращать единицу измерения определенного типа attr(data-background color). Это предполагает, что data-backgroundатрибут будет установлен, а затем преобразовано это значение в цвет. Это, конечно, только экспериментальная функция CSS, и ни один браузер пока не поддерживает ее. Если вы хотите узнать больше об экспериментальных вариантах использования, вы можете ознакомиться с документацией MDN .

Из-за ограничений этой функции ее использование ограничено, но она по-прежнему хороша в таких случаях, как значок уведомления или простая подсказка.
