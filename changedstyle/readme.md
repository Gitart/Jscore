### Change leter size dinamycalli
https://codepen.io/sergiks/pen/PoabBjY


```html
<h2>QnA Habr com</h2>
```


```css
span {
  font-family: Helvetica, Arial, sans-serif;
  color: #096;
  font-size: 36pt;
  transition: color 0.2s ease-out;
}
span.leader {
  color: #F93;
  font-style: italic;
}
```

Js
```js
const container = document.querySelector('h2');
container.innerHTML = container.textContent.split('').map(c => c === ' ' ? c : `<span>${c}</span>`).join('');
const spanArr = Array.from(container.querySelectorAll('span')); // массив со span'ами
const className = 'leader';
const letterStep = async (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    if (i > 0) arr[i - 1].classList.remove(className);
    if (i < arr.length) arr[i].classList.add(className);
    await new Promise(r => setTimeout(r, 1000)); // подождать пол-секунды
  }
  // убрать класс у последнего
  setTimeout(() => letterStep(arr), 3000);
};

letterStep(spanArr); // поехали!
```
