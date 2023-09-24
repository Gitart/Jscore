# Методы перебора массива (map, filter, reduce)

У вас есть массив со множеством объектов, каждый из которых представляет отдельного человека. 
Тут может быть очень много данных: имя, возраст, цвет волос и любимый персонаж из кинематографа, 
но в данный момент всё это не требуется – вы хотите получить только массив паспортных номеров этих людей,
чтобы выдать им всем пропуска на конференцию.

```js
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let passports = friends.map(friend => friend.passport + ' ')
  return passports
}
```

## отобразить массив объектов с выбранными ключами в виде строки :
```js
function learnJavaScript() {
  const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ]

  let result = users.map(({ id, age, group }) => `\n${id} ${age} ${group}`).join('')

  return result
}
```

## Пример с обработкой каждого элемента массива заданной формулой :
```js
function learnJavaScript() {
  let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]

  let fahrenheit = celsius.map(t => t * 1.8 + 32 + ' ')

  return fahrenheit
}
```


##  Отображение массива чисел с использованием функции, содержащей аргумент :

```js
function learnJavaScript() {
  const numbers = [1, 4, 9]

  const doubles = numbers.map(num => num * 2 + ' ')

  return doubles
```

# FILTER
Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции⚙️.

Результатом работы filter всегда является массив. Если функция⚙️ для элемента возвращает true (или любое "правдивое" значение), этот элемент попадает в результат, иначе – не попадает.


```js
let newArray = arr.filter(function callback(element[, index, [array]])[, thisArg])
```

Метод filter() вызывает переданную функцию⚙️ callback один раз для каждого элемента, присутствующего в массиве, и конструирует новый массив со всеми значениями, для которых функция⚙️ callback вернула true или значение, становящееся true при приведении в boolean. Функция⚙️ callback вызывается только для индексов массива, имеющих присвоенные значения; она не вызывается для индексов, которые были удалены или им значения никогда не присваивались. Элементы массива, не прошедшие проверку функцией⚙️ callback, просто пропускаются и не включаются в новый массив.

Функция⚙️ callback вызывается с тремя аргументами:

значение элемента;
индекс элемента;
массив, по которому осуществляется проход.
Если в метод filter() был передан параметр thisArg, при вызове функции⚙️ он будет использоваться в качестве значения this. В противном случае в качестве значения this будет использоваться значение undefined. В конечном итоге значение this, наблюдаемое из функции⚙️, определяется согласно обычным правилам определения this, видимого из функции⚙️.

Метод filter() не изменяет массив, для которого он был вызван.

Диапазон элементов, обрабатываемых методом filter(), устанавливается до первого вызова функции⚙️ callback. Элементы, добавленные в массив после начала выполнения метода filter(), не будут посещены функцией⚙️ callback. Если существующие элементы массива изменятся, значения, переданные в функцию⚙️ callback, будут значениями на тот момент времени, когда метод filter() посетит их. Удалённые элементы посещены не будут.

Пример
```js
function learnJavaScript() {
  const isBigEnough = value => value >= 10

  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough) + ' '

  return filtered
}
```

## REDUCE
Метод reduce также запускается в контексте массива и вызывает функцию⚙️ для каждого элемента, но помимо этого, он аккумулирует результаты всех вызовов в одно значение. Этим поведением можно управлять.

reduce предназначен не для того, чтобы изменять элементы коллекции, как map. Его задача – подсчитать "сумму" всех элементов тем или иным способом, и вернуть ее.

Результирующим значением может быть что угодно: число, строка, объект, массив – все зависит от задачи, которую решает JavaScript разработчик.

Метод reduce принимает 2 параметра:

функция, как и map, который будет вызван последовательно для каждого элемента коллекции;
начальное значение аккумулятора.
В функции⚙️ тоже 2 аргумента:

первый – это накопленное значение (аккумулятор);
непосредственно элемент массива.
Синтаксис
```js
array.reduce(function callback[, initialValue])
```

Метод reduce() выполняет функцию⚙️ callback один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента: начальное значение (или значение от предыдущего вызова callback), значение текущего элемента, текущий индекс и массив, по которому происходит итерация.

При первом вызове функции⚙️, параметры accumulator и currentValue могут принимать одно из двух значений. Если при вызове reduce() передан аргумент initialValue, то значение accumulator будет равным значению initialValue, а значение currentValue будет равным первому значению в массиве. Если аргумент initialValue не задан, то значение accumulator будет равным первому значению в массиве, а значение currentValue будет равным второму значению в массиве.

Если массив пустой и аргумент initialValue не указан, будет брошено исключение TypeError. Если массив состоит только из одного элемента (независимо от его положения в массиве) и аргумент initialValue не указан, или если аргумент initialValue указан, но массив пустой, то будет возвращено одно это значение, без вызова функции⚙️ callback.

Разберемся с начальным значением. В примере оно равно 0, так как мы считаем численное значение – сумму возрастов. На месте нуля может быть любое другое число/строка (пустая или нет)/объект/массив – любое значение, с которого вы начинаете аккумуляцию. Для примера объединим имена всех друзей в одну строчку :

```js

function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]

  const names = friends.reduce((accumulator, friend) => `${accumulator} ${friend.name}, `, 'Friends: ')

  return names
}
```

РЕЗУЛЬТАТ
```
Friends: Joseph Francis Tribbiani Jr, Chandler Muriel Bing, Ross Eustace Geller, Rachel Karen Green, Monica Geller, Phoebe Buffay,
```
Здесь исходным значением послужила строка "Friends:", к которой постепенно добавились имена всех друзей.

Если вы не указываете исходное значение явно, им неявно становится первый 1️⃣ элемент массива. В этом случае функция⚙️ для него уже не вызывается.

## Суммирование всех значений в массиве:
```js
function learnJavaScript() {
  const initialValue = 0

  const sum = [1, 2, 3].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, initialValue)

  return sum
}
```

## И тоже самое в одну строчку кода:

```js
function learnJavaScript() {
  const sum = [1, 2, 3].reduce((x, y) => x + y)

  return sum
}
```

# chaining

Программирование на JavaScript поддерживает удобный паттерн чейнинг (chaining) – объединение нескольких функций⚙️ в одну цепочку с последовательной передачей результата.

Все три разобранных метода вызываются в контексте массива, а два 2️⃣ из них еще и возвращают массив. Таким образом, их очень легко объединить.

Например, посчитаем общий возраст всех мальчиков :
```js
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let totalBoysYears = friends
    .filter(friend => friend.sex === 'm')
    .reduce((accumulator, friend) => accumulator + friend.age, 0)
  return totalBoysYears
}
```

## Или соберем номера паспортов девочек, чтобы купить им билеты на самолет до Лас-Вегаса :
```js
function learnJavaScript() {
  const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
  ]
  let girlsPassports = friends.filter(friend => friend.sex === 'f').map(friend => friend.passport) + ' '
  return girlsPassports
}
```
























































































































