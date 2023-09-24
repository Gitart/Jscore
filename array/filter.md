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
