# A Guide to JavaScript Object Methods

## Getting Started

> Before diving in, we recommend refreshing your memory on Objects in our ["Objects in JavaScript"](./../objects) overview.

As a multi-paradigm language, JavaScript can add object-oriented flavor to our code bases. In that sense, objects are a foundational aspect and represent a basal data structure in the language. Essentially, they are collections of properties, where a property holds a key/value pair.

These properties can have numerous data types, including functions, referred to as methods when they belong to an object.

### When a Property Becomes a Method

Methods define the behavior of an object and are used to interact with the properties stored within the object.

```js
const car = {
  make: 'Mercedes-Benz',  // property
  model: 'GLS',  // property
  fullDescription: function() {  // method
    return this.make + ' ' + this.model;
  }
};

console.log(car.fullDescription()); // Output: Mercedes-Benz GLS
```

We illustrated a simple example where the `make` and `model` properties are string values, while the `fullDescription` property is a method that combines both properties to create a detailed description of the brand.

## Built-in Object Methods

In Javascript, we have several, helpful built-in methods available to us. We can leverage them to interact with the object properties and introduce some flexibility to our code creation needs.

Let's explore some of the most commonly used ones.

### The `Object.create()` Method

Below, we create the `addInfo` object with the `Object.create()` method, where the `greetingPrototype` object is its prototype. The person object also has a name property with the value 'John Doe'.

```js
const greetingPrototype = {
  greeting: function() {
    return 'Welcome to ' + this.name;
  }
};

const addInfo = Object.create(greetingPrototype, {
  name: {
    value: 'Web Reference!'
  }
});

console.log(addInfo.greeting()); // Output: Welcome to Web Reference!
```

### The `Object.assign()` Method

We utilize this method to merge two or more objects into one. Of course, this can come in handy when we have different objects and properties and we want that we want to combine.

For instance, consider the following scenario: we have an object that represents a person's basic information, such as their name and age. Then, we introduce another object that contains their address information. We can use the `Object.assign()` method to merge these two objects into a single object that contains all of their information.

```js
const basicInfo = {
  name: 'Jermaine',
  age: 38
};

const addressInfo = {
  street: '123 Main St',
  city: 'Fayetteville',
  state: 'NC'
};

const fullInfo = Object.assign({}, basicInfo, addressInfo);

console.log(fullInfo); 
// Output: { name: 'Jermaine', age: 38, street: '123 Main St', city: 'Fayetteville', state: 'NC' }
```

### The `Object.keys()` Method

The `Object.keys()` method returns an array of the object's enumerable properties. Consequently, it's a valuable method to retrieve the keys of an object, and iterate through the properties depending on our needs.

```js
const movie = {
    title: "The Matrix",
    director: "Lana Wachowski",
    releaseYear: 1999
};

const movieKeys = Object.keys(movie);

console.log(movieKeys); // Output: [ "title", "director", "releaseYear" ]
```

In this use case, we have an object that contains properties for the title, director, and release year of a movie. By passing the object to the method, we can retrieve an array of its properties, which we then store in the `movieKeys` variable.

### The `Object.entries()` Method

At first glance, this method is similar to `Object.keys()`. However, `Object.entries()` returns both the keys and values of the object in the form of arrays.

```js
const movie = {
    title: "The Matrix",
    director: "Lana Wachowski",
    releaseYear: 1999
};

const movieEntries = Object.entries(movie);

console.log(movieEntries);
// Output: [ [ "title", "The Matrix" ], [ "director", "Lana Wachowski" ], [ "releaseYear", 1999 ] ]
```

### The `Object.values()` Method

Let's observe an example where we access the values of an object.

We have a `student` object with several properties. To get an array of the values of these properties, we can use the `Object.values()` method like so:

```js
let student = {
  name: "Heidi Kennedy",
  age: 21,
  grade: "A",
  subjects: ["Math", "Science", "English"]
};

let studentValues = Object.values(student);
console.log(studentValues);
// Output: [ "Heidi Kennedy", 21, "A", [ "Math", "Science", "English" ] ]
```

We created the object with 4 properties and assigned it to the `student` variable. Next, we used the `Object.values()` method to get an array of the values of the properties in the object and assigned the result to the `studentValues` variable. Finally, we log the array to the console to see the output.

## Final Thoughts

Object methods offer a wealth of possibilities for manipulating objects and their properties. Moreover, we should note that these methods are just the tip of the iceberg. JavaScript allows you to create your custom methods, which opens up a whole new world of possibilities. Whether you're working with basic data structures like objects and arrays, or more complex ones like classes and prototypes, object methods are the key to unlocking the potential of the language.

Explore more [code snippets](https://javascriptsource.com/check-if-an-object-is-empty/) and find out how we can check if an object is empty.

### Expanded Table with Object Methods

| Method                                              | Description                                                                                                                                                                                                     |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Object.defineProperties()`                         | Adds the named properties and values to an object. Returns the object                                                                                                                                           |
| `Object.defineProperty()`                           | Adds a new property to an object, or modifies an existing property. Returns the object                                                                                                                          |
| `Object.freeze()`                                   | Prevents new properties from being added to an object, and prevents existing properties from being removed or modified. Returns the object                                                                      |
| `Object.getOwnPropertyDescriptor()`                 | Returns a property descriptor for an own property (that is, one directly present on an object, not present by dint of being along an object's prototype chain) of a given object                                |
| `Object.getOwnPropertyDescriptors()`                | Returns all own property descriptors of a given object                                                                                                                                                          |
| `Object.getOwnPropertyNames()`                      | Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.                                                                                                |
| `Object.getOwnPropertySymbols()`                    | Returns an array of all symbol properties found directly upon a given object                                                                                                                                    |
| `Object.getPrototypeOf()`                           | Returns the prototype (i.e. the value of the internal \[\[Prototype]] property) of the specified object                                                                                                         |
| `Object.is()`                                       | Compares if two values are the same value. It is used for equality comparisons, like the equality operator (==) does, but without type coercion                                                                 |
| `Object.isExtensible()`                             | Determines if extending of an object is allowed                                                                                                                                                                 |
| `Object.isFrozen()`                                 | Determines if an object was frozen                                                                                                                                                                              |
| `Object.isSealed()`                                 | Determines if an object is sealed                                                                                                                                                                               |
| `setHours(hours[, minutes, seconds, milliseconds])` | Sets the hour for a specified date according to local time                                                                                                                                                      |
| `Object.preventExtensions()`                        | Prevents new properties from being added to an object. Returns the object                                                                                                                                       |
| `Object.seal()`                                     | Prevents new properties from being added to an object and marks all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable. Returns the object |
| `Object.prototype.toString()`                       | Returns a string representation of the object                                                                                                                                                                   |
| `Object.prototype.valueOf()`                        | Returns the primitive value of the object                                                                                                                                                                       |
| `Object.prototype.hasOwnProperty()`                 | Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it)                                                                                    |
| `Object.prototype.isPrototypeOf()`                  | Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object                                                                                    |
| `Object.prototype.propertyIsEnumerable()`           | Returns a boolean indicating if the specified property is enumerable                                                                                                                                            |
| `Object.setPrototypeOf()`                           | Sets the prototype (i.e., the internal \[\[Prototype]] property) of a specified object to another object or null. Returns the object                                                                            |

### Additional Resources
