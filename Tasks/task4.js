/*
This JavaScript file explains the differences between arrow functions and traditional functions.
It uses examples and comments to illustrate the key points.

Arrow functions and traditional functions in JavaScript have several key differences. These differences affect
how they are used and how they behave in various contexts.
*/

// Syntax
// Traditional Function:
function traditionalFunction(arg1, arg2) {
  // function body
}

// Arrow Function:
const arrowFunction = (arg1, arg2) => {
  // function body
};

// 'this' Binding

// Traditional Function:
// 'this' refers to the object that called the function.
function traditionalFunctionThis() {
  console.log(this);
}

const obj1 = {
  method: traditionalFunctionThis,
};

obj1.method(); // Logs 'obj1'
traditionalFunctionThis(); // Logs 'undefined' or 'window' in non-strict mode

// Arrow Function:
// 'this' is lexically bound, meaning it inherits 'this' from the enclosing scope at the time it is defined.
const arrowFunctionThis = () => {
  console.log(this);
};

const obj2 = {
  method: arrowFunctionThis,
};

obj2.method(); // Logs the value of 'this' from the enclosing scope where arrowFunction was defined
arrowFunctionThis(); // Logs the same value of 'this' from the enclosing scope

// 'arguments' Object

// Traditional Function:
// Has access to the 'arguments' object, which contains all the arguments passed to the function.
function traditionalFunctionArguments() {
  console.log(arguments);
}

traditionalFunctionArguments(1, 2, 3); // Logs [1, 2, 3]

// Arrow Function:
// Does not have its own 'arguments' object. You need to use rest parameters to access the arguments.
const arrowFunctionArguments = (...args) => {
  console.log(args);
};

arrowFunctionArguments(1, 2, 3); // Logs [1, 2, 3]

// 'new' Keyword

// Traditional Function:
// Can be used as a constructor with the 'new' keyword to create instances.
function TraditionalConstructor(name) {
  this.name = name;
}

const instance1 = new TraditionalConstructor("John");
console.log(instance1.name); // 'John'

// Arrow Function:
// Cannot be used as a constructor and will throw an error if used with 'new'.
const ArrowConstructor = (name) => {
  this.name = name;
};

// const instance2 = new ArrowConstructor('John'); // Uncommenting this line will throw an error

// Implicit Return

// Traditional Function:
// Always requires an explicit 'return' statement to return a value.
function traditionalFunctionReturn() {
  return "Hello";
}

// Arrow Function:
// Can implicitly return a value if the function body is a single expression without braces.
const arrowFunctionReturn = () => "Hello";

console.log(traditionalFunctionReturn()); // 'Hello'
console.log(arrowFunctionReturn()); // 'Hello'

// Methods

// Traditional Function:
// Suitable for defining methods within an object because of its 'this' binding.
const obj3 = {
  value: 42,
  traditionalMethod: function() {
    return this.value;
  },
};

console.log(obj3.traditionalMethod()); // 42

// Arrow Function:
// Not suitable for methods that need their own 'this' context.
const obj4 = {
  value: 42,
  arrowMethod: () => {
    return this.value;
  },
};

console.log(obj4.arrowMethod()); // undefined
