# Filter

```js
function isBigEnough(value) {
  return value >= 10;
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// массив filtered теперь содержит [12, 130, 44]
```

```js
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
```

# Поиск в массиве
В следующем примере filter() используется для фильтрации содержимого массива на основе входных данных.

```js
var fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Элементы массива фильтруется на основе критериев поиска (query)
 */
function filterItems(query) {
  return fruits.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

console.log(filterItems("ap")); // ['apple', 'grapes']
console.log(filterItems("an")); // ['banana', 'mango', 'orange']
```

# Реализация с использованием ES2015

```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Элементы массива фильтруется на основе критериев поиска (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(
    (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1,
  );
};

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
```

Модификация изначального массива (изменение, добавление и удаление)
В следующих примерах проверяется поведение метода filter при изменении массива.


# Изменение всех элементов
```js
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 6;
});

console.log(modifiedWords);
// Обратите внимание, что есть три слова длиной менее 6, но так как они были изменены,
// возвращается одно слово ['spray']
```

# Добавление новых элементов
```js
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words.filter((word, index, arr) => {
  arr.push("new");
  return word.length < 6;
});

console.log(appendedWords);
// Только три слова удовлетворяют условию, хотя `words` теперь имеет куда больше слов,
// длинной меньше 6 символов: ['spray', 'limit', 'elite']

// Удаление элементов
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

console.log(deleteWords);
// Заметьте, что 'elite' не получено, так как удалено из `words` до того,
// как filter смог получить его: ['spray', 'limit']
```
