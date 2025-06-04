


# class

## Understanding Classes in ES6 JavaScript

Getting Started
Classes in JavaScript are layout templates for creating objects with similar characteristics and behaviors. They are essentially a special type of function and serve as a wrapper around the prototype-based inheritance model of JavaScript. With the emergence of ES6, the syntax for classes became more intuitive and easier to read, making it a popular choice for creating objects in a more object-oriented manner.

The Syntax of Classes
To start with, let's look at the syntax of a class. Classes are declared using the class keyword, followed by a set of curly braces. Inside these braces, we declare properties and methods that belong to the class.

To create a class, you use the class keyword followed by the class name:
```js
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    console.log(`Driving my ${this.brand} car.`);
  }
}

const myCar = new Car('Tesla');
myCar.drive();
// Output: Driving my Tesla car.

```


So, we created a class called Car with a constructor method that takes a brand name and sets it as a property of the object. We also have a method called drive that logs a message with the brand name. Lastly, to create an instance of the Car class, we use new and call the constructor function.

## Extending Classes
You can extend a class to create a new class with additional features. The extends keyword is used to extend a class, and the super keyword is used to call the parent class's constructor. For example, let's extend the Person class to create a Student class:

```js
class Vehicle {
  // Constructor method that takes in a brand name
  constructor(brand) {
    // Set the brand property to the brand name passed in
    this.brand = brand;
  }
  // Method to log the brand name of the vehicle being driven
  drive() {
    console.log(`Driving my ${this.brand} vehicle.`);
  }
}

class Car extends Vehicle {
  // Constructor method that takes in a brand name and a model name
  constructor(brand, model) {
    // Call the constructor of the superclass and pass in the brand name
    super(brand);
    // Set the model property to the model name passed in
    this.model = model;
  }
  // Method to log the brand and model name of the car being driven
  showInfo() {
    console.log(`Driving my ${this.brand} ${this.model}.`);
  }
}

// Create a new instance of the Car class with the brand name "Tesla" and model name "Model S"
const myCar = new Car('Tesla', 'Model S');
// Call the showInfo method of the Car instance
myCar.showInfo();
// Output: Driving my Tesla Model S.
```


## Getters and Setters
In addition to regular class methods and properties, classes in JavaScript also support getters and setters. Getters are methods that are called when we attempt to access a property, while setters are methods that are called when we attempt to set a value to a property.

```js
class Person {
  // Constructor function to initialize the object properties
  constructor(name, age) {
    this._name = name; // private property to store the name
    this._age = age; // private property to store the age
  }
  
  // Getter function for the name property
  get name() {
    return this._name;
  }
  
  // Setter function for the name property
  set name(value) {
    this._name = value;
  }
  
  // Getter function for the age property
  get age() {
    return this._age;
  }
  
  // Setter function for the age property
  set age(value) {
    this._age = value;
  }
}
```

## Hoisting isn't Applicable in Classes
In JavaScript, variables and functions declared with the var keyword are hoisted to the top of their scope, meaning they are accessible even before they are declared. However, classes declared with the class keyword are not hoisted, and trying to access them before they are declared will result in a ReferenceError.


```js
const myCar = new Car('Tesla');
// Output: ReferenceError: Car is not defined

class Car {
  // Class definition goes here
}

```


### Final Thoughts
Classes in ES6 JavaScript offer a more organized and syntactically-pleasing way to create objects and implement inheritance. We should understand that classes are just syntactic sugar for prototypal inheritance and that the underlying concepts are still objects and prototypes. However, classes provide a robust way to create complex object-oriented structures and can be a difference-maker for JavaScript developers.




