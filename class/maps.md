The ES6 JavaScript Maps
Getting Started
JavaScript Maps were introduced in ECMAScript 6 (ES6) as a new data structure for storing key-value pairs. Maps provide a way to store keys of any data type, making them incredibly flexible and useful in a wide range of applications.

Creating and Using Maps in JavaScript
Before we dive into examples that showcase how we can create and manipulate Maps, let's take a look at some of the common methods we'll be using as shown in the table below.

Method	Description
get()	Returns a specific element in reference to the key. If the key isn't present in the Map it outputs undefined
set()	Stores the value for keys in a Map
has()	Returns a boolean value true if the key exists in the Map
delete()	Removes an element of a Map specified by the key
clear()	Removes all of the existing contents from a Map
Property	Description
map.size	The size property returns the current number of elements in a Map
Now, let's create a new instance of the Map constructor and see how it works practically.

```js
const myMap = new Map();
Then, we can add key-value pairs to our newly created Map using the set() method:

myMap.set("key1", "value1");
myMap.set("key2", "value2");
If we want to retrieve specific values from the Map we can leverage the get() method, like so:

myMap.get("key1"); // returns "value1"
Or, we can check if a key exists in the Map, using the has() method:

myMap.has("key1"); // returns true
Since "key1" is present in the Map a boolean value of true is returned.

Additionally, let's observe the use of the delete() and clear() methods and showcase the map.size property.

Our current Map size is as follows:

myMap.size //Output 2
If we removed one of the elements, in this case "key1", the output will logically be the following:

myMap.delete("key1");

myMap.size //Output 1
But, if we wanted to remove all existing elements and used the clear() method, myMap size will have no contents left inside:

myMap.clear()
myMap.size //Output 0
JavaScript Maps and Iteration
Much like other iterable objects in JavaScript, maps provide built-in methods to loop through the encapsulated data. In contrast to а plain JavaScript Object, Maps preserve the order in which the elements were added.

Let's look at an iteration of a Map that stores information about a group of people:

let people = new Map([
  ['John', ['developer', 30]],
  ['Jane', ['designer', 25]],
  ['Bob', ['manager', 40]]
]);

// Iterating over keys (names) using map.keys()
for (let name of people.keys()) {
  console.log(name); // Output: John, Jane, Bob
}

// Iterating over values (job and age) with map.values()
for (let [job, age] of people.values()) {
  console.log(job, age); // Output: developer 30, designer 25, manager 40
}

// Iterating with map.entries() over the [key, value] entries
for (let [name, [job, age]] of people.entries()) {
  console.log(`${name} is a ${job} and is ${age} years old.`); // Output: John is a developer and is 30 years old., Jane is a designer and is 25 years old., Bob is a manager and is 40 years old.
}
In the example above, we have a Map that stores information about a group of people. Each value inside is an array that contains the person's job and age. We can use the .keys() method to iterate over the names of the people, .values() to iterate over the person's job and age, and lastly, the .entries() method to iterate over both the names and the person's job and age.

Using Map.forEach()
Maps also have a built-in forEach() method, which allows us to execute a function for each key-value pair in the Map. We can demonstrate its use on the same example and neatly structure it with some template literals:

people.forEach(([job, age], name) => {
  console.log(`${name} is a ${job} and is ${age} years old.`); 
  // Output:
  // John is a developer and is 30 years old.
  // Jane is a designer and is 25 years old.
  // Bob is a manager and is 40 years old.
});
```

Here, we pass a callback function to the forEach() method that takes the person's job, age and name as arguments. The callback function then logs the name, job, and age of each person in the Map.

Advantages of Using Maps Over Objects
One of the main advantages of using Maps over plain objects is their performance when it comes to adding and removing keys. While the delete operator on objects is relatively poor performing, Maps are optimized for this exact use case and can give us faster results.

In addition to performance, Maps also solve several issues that exist with objects. For instance, objects can be polluted with tons of built-in keys, which can lead to strange bugs later on. With Maps, we always know that if we didn't provide a key, we won't get a value as a result of the iteration.
