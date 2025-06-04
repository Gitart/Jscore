# JavaScript Arrays

An array is a data structure that allows you to store and manipulate a collection of values. In JavaScript, arrays are a type of object that can hold any type of data, including numbers, strings, booleans, and even other objects.

## Creating Arrays

There are two ways to create an array in JavaScript:

1. Using the Array constructor:

```js
	var numbers = new Array(1, 2, 3, 4, 5);
```

1. Using square brackets and separating the values with commas:

```js
	var names = ["John", "Jane", "Bob"];
```

### Accessing Array Elements

Once you have created an array, you can access its elements using the array index. In JavaScript, array indices start at 0, so the first element of an array is at index 0, the second element is at index 1, and so on.

To access an element of an array, you use square brackets and the index of the element you want to access, like this:

```js
var numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1
console.log(numbers[1]); // Output: 2
```

### Modifying Array Elements

You can modify the elements of an array by assigning new values to the array indices. For example, to change the value of the first element of the numbers array from 1 to 10, you can use the following code:

```js
var numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
console.log(numbers[0]); // Output: 10
```

### Adding and Removing Array Elements

In addition to modifying existing array elements, you can also add new elements to an array or remove existing elements.

#### Adding Elements

To add an element to the end of an array, you can use the `push` method:

```js
var numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
```

To add an element to the beginning of an array, you can use the `unshift` method:

```js
var numbers = [1, 2, 3, 4, 5];
numbers.unshift(0);
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5]
```

#### Removing Elements

To remove the last element of an array, you can use the `pop` method:

```js
var numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4]
```

To remove the first element of an array, you can use the `shift` method:

```js
var numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers); // Output: [2, 3, 4, 5]
```

## Further Learning
