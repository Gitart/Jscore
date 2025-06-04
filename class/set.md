# The ES6 JavaScript Sets

## Getting Started

Much like Maps, JavaScript Sets are a new data structure introduced in ES6. They give us a flexible approach to storing unique values of any type and have several intriguing use cases. Unlike arrays, sets don't have indices, but their values can still be accessed and manipulated using various methods and properties.

### The Difference between Sets and Maps

In contrast to Maps, which have keyed values, a Set is a special type of collection – a "set of values" (without keys) – where each value can occur only once. That's exactly why the usual definitions stress the importance of "unique".

## Creating and Using Sets in JavaScript

Initially, we can create a Set object with the `new Set()` constructor. Then, we can leverage numerous methods to change the contents inside its collection. For instance, we can add and remove elements, check if they are present in the collection, and iterate over them in a similar manner to other iterable objects in JavaScript.

| Methods    | Description                                                                         |
| ---------- | ----------------------------------------------------------------------------------- |
| `add()`    | Add a specified value into the Set                                                  |
| `clear()`  | Removes all elements from the Set object                                            |
| `delete()` | Deletes an element specified by the value                                           |
| `has()`    | Returns `true` if an element with a given value is in the Set, `false` if otherwise |

| Property   | Description                  |
| ---------- | ---------------------------- |
| `set.size` | The element count in the Set |
|            |                              |

To demonstrate, let's create a new Set and pass an array of values to it. We can play around with the methods and use them on the same array to thoroughly understand how they function.

```js
let set = new Set([1, 2, 3, 4, 5]);

set.add(6); // adds the value 6 to the set
console.log(set); // Set {1, 2, 3, 4, 5, 6}

set.clear(); // removes all elements from the set
console.log(set); // Set {} {size: 0}

set.add(1);
set.add(2);
set.add(3);
set.delete(2); // deletes the element with the value 2
console.log(set); // Set(2) {1, 3}

console.log(set.has(1)); // true
console.log(set.has(2)); // false
```

## JavaScript Sets and Iteration

Iteration over Sets is similar to Maps, and the same in terms of the insertion order. Basically, it keeps track of the elements in the order that they're added.

We can loop over a Set with the traditional `for...of` loop or use the built-in `set.forEach()` method to gain access to the values we need.

```js
let set = new Set(["red", "green", "blue"]);

for (let value of set) {
  console.log(value);
  //Output:
  // red
  // green
  // blue
}

// the same with forEach:
set.forEach((value) => {
  console.log(value);
});
```

Do `set.keys()`, `set.values()`, and `set.entries()` have any resemblance to us? You might remember them as we covered the exact same syntax in Maps.

These methods have been included for compatibility with the Map object. In other words, these methods allow developers to use the same syntax and logic for accessing values in both Sets and Maps and easily switch between the two data structures as demanded.

We should also note that the `set.keys()` method is practically the same as `set.values()` method, as Sets don't have keys. Also, `set.entries()` returns an iterable object for the entries (a combination of value and value) in a Set, but the entries don't have a specific key or index.

## The Unique Value of Sets

The foremost quality of Sets is their ability to store only unique values. If we try to add the same value to a Set multiple times, it will only appear once. Naturally, this can be incredibly useful when we want to keep track of unique items in a collection, such as distinct voters in a community poll.

Let's illustrate the example:

```js
let voters = new Set();

// Adding voters to the set
voters.add("Jane");
voters.add("John");
voters.add("Jim");
voters.add("Jane");
voters.add("Jim");

// The size property returns the number of unique values in the set
console.log(voters.size); // 3

// Using the for...of loop to access each voter in the set
for (let voter of voters) {
  console.log(voter); // Jane (then John and Jim)
}
```

In this example, we create a new Set object named `voters` and add several voters to it. We then add the same voters multiple times, but the Set only keeps the unique values. The size property returns the number of unique values in the set, which is 3 in this case.

With Sets, we ensured that we're keeping track of unique voters in the community poll, without having to manually check for duplicates.
