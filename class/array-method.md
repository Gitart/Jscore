# JavaScript Array Methods

In JavaScript, arrays have a number of built-in methods that allow you to manipulate and operate on the elements of an array. These methods can be used to add, remove, and modify array elements, as well as to perform common operations such as sorting and filtering.

## Common Array Methods

Here are some of the most commonly used array methods in JavaScript:

### [`push`](/javascript/references/array-push)

Add one or more elements to the end of an array. It returns the new length of the array.

```js
var numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```

### `pop`

Remove the last element of an array. It returns the removed element.

```js
var numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4]
```

### `shift`

Remove the first element of an array. It returns the removed element.

```js
var numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers); // Output: [2, 3, 4, 5]
```

### `unshift`

Add one or more elements to the beginning of an array. It returns the new length of the array.

```
var numbers = [1, 2, 3];
numbers.unshift(0);
console.log(numbers); // Output: [0, 1, 2, 3]
```

### [`sort()`](/javascript/references/array-sort)

Sort the elements of an array in ascending or descending order. It returns the sorted array.

```js
var numbers = [4, 1, 3, 5, 2];
numbers.sort();
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```

You can also provide a custom sorting function to the sort method, which allows you to control the way the elements are sorted. For example, to sort the array in descending order, you can use the following code:

```js
var numbers = [4, 1, 3, 5, 2];
numbers.sort(function(a, b) {
  return b - a;
});
console.log(numbers); // Output: [5, 4, 3, 2, 1]
```

### `filter`

Create a new array with only the elements that satisfy a certain condition. It takes a callback function as an argument, which is called for each element of the array, and returns true if the element should be included in the new array, or false if it should be excluded.

```js
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function(num) {
  return num % 2 == 0;
});
console.log(evenNumbers); // Output: [2, 4]
```

## List of JavaScript array methods

| Method                                              | Description                                                                       |
| --------------------------------------------------- | --------------------------------------------------------------------------------- |
| `concat()`                                          | Joins two or more arrays and returns a new array                                  |
| `every()`                                           | Determines whether all elements in an array pass a test                           |
| `filter()`                                          | Creates a new array with all elements that pass a test                            |
| `find()`                                            | Returns the first element in an array that passes a test                          |
| [`forEach()`](/javascript/references/array-foreach) | Calls a function for each element in an array                                     |
| `map()`                                             | Creates a new array with the results of calling a function for each element       |
| `pop()`                                             | Removes the last element from an array and returns that element                   |
| [`push()`](/javascript/references/array-push)       | Adds one or more elements to the end of an array and returns the new length       |
| `reduce()`                                          | Reduces an array to a single value by applying a function to each element         |
| `shift()`                                           | Removes the first element from an array and returns that element                  |
| `unshift()`                                         | Adds one or more elements to the beginning of an array and returns the new length |
| `slice()`                                           | Extracts a section of an array and returns a new array                            |
| [`sort()`](/javascript/references/array-sort)       | Sorts the elements of an array                                                    |
| `splice()`                                          | Adds or removes elements from an array                                            |
| `toString()`                                        | Converts an array to a string and returns the result                              |
| `indexOf()`                                         | Returns the index of the first occurrence of a value in an array                  |
| `lastIndexOf()`                                     | Returns the index of the last occurrence of a value in an array                   |
| `join()`                                            | Joins all elements of an array into a string and returns the result               |
| `reverse()`                                         | Reverses the order of the elements in an array                                    |
