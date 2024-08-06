// Step 1: Create a variable named x outside of any function or block and set its value to 10.
var x = 10; // x is declared globally

// Step 2: Create a function named printX() that logs the value of x to the console.
function printX() {
  console.log(x); // Logs the value of x
}

// Step 3: Create a block using curly braces {} and declare a variable named y inside the block with a value of 20.
{
  let y = 20; // y is declared with block scope
  
  // Step 4: Call the printX() function inside the block.
  printX(); // Output: 10 (x is accessible globally)

  // Step 5: Log the value of y to the console inside the block.
  console.log(y); // Output: 20 (y is accessible within this block)
}

// Step 6: Log the value of y to the console outside the block.
console.log(y); // Output: ReferenceError: y is not defined (y is block-scoped and not accessible outside the block)

// Step 7: Try to log the value of x inside the block.
console.log(x); // Output: 10 (x is globally scoped and accessible inside the block)


// Scoping Practice: Write a function that declares a variable inside it, 
// then write a block of code outside the function that tries to access the variable. 
// Have the trainees explain why the block cannot access the variable, and what they would need to do to make it accessible.

function myFunction() {
  let insideFunction = "I am inside the function";
  // insideFunction is scoped within this function only
}

{
  // Trying to access insideFunction outside the function
  console.log(insideFunction); // Output: ReferenceError: insideFunction is not defined
  // Explanation: The variable insideFunction is declared inside myFunction() and is not accessible outside of it.
  // To make it accessible, the variable would need to be declared outside the function or passed out via return or a global variable.
}


// Block Scope: Write a function that takes an array of numbers and returns the sum of all even numbers in the array. 
// Use block scope to declare a variable inside the function to hold the sum, and only add the even numbers to the sum.

function sumEvenNumbers(numbers) {
  let sum = 0; // Block-scoped variable to hold the sum

  for (const number of numbers) {
    if (number % 2 === 0) {
      sum += number; // Only add even numbers to sum
    }
  }
  
  return sum; // Return the sum of even numbers
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // Output: 6 (2 + 4)


// Function Scope: Write a function that declares a variable inside it, 
// then calls another function that also declares a variable with the same name. 
// Have the trainees explain what happens to the variable inside the first function, and why.

function firstFunction() {
  var x = 10; // Variable x inside firstFunction

  function secondFunction() {
    var x = 20; // This x is local to secondFunction
    console.log(x); // Output: 20 (x from secondFunction)
  }

  secondFunction();
  console.log(x); // Output: 10 (x from firstFunction, unaffected by secondFunction's x)
}

firstFunction();
// Explanation: The variable x inside secondFunction is local to that function and does not affect the x in firstFunction.
// This is due to function scope, where variables are scoped to the function they are declared in.


// Scope Chain: Write a function that declares a variable inside it, 
// then calls another function that also declares a variable with the same name. 
// Have the trainees modify the second function to access the variable from the first function, using the scope chain.

function outerFunction() {
  var x = 5; // Variable declared in the outer function

  function innerFunction() {
    // var x = 10; // Uncomment this line to see how it shadows the outer x
    console.log(x); // Output: 5 (Accessing x from outerFunction via scope chain)
  }

  innerFunction();
}

outerFunction();
// Explanation: The innerFunction has access to the variable x declared in outerFunction due to the scope chain.
// If a variable with the same name is declared in innerFunction, it will shadow the outer x, and the inner x will be used instead.


// 1. Write a program that demonstrates the difference between global and local scope using var and let.
// Declare a variable inside a function using var and another variable inside the same function using let.
// Try to access these variables from outside the function and explain your observations.

function scopeTest() {
  var localVar = "I'm a var variable"; // Local variable declared with var
  let localLet = "I'm a let variable"; // Local variable declared with let

  console.log(localVar); // Output: I'm a var variable
  console.log(localLet); // Output: I'm a let variable
}

scopeTest();

// Trying to access the variables outside the function
console.log(localVar); // Output: ReferenceError: localVar is not defined
console.log(localLet); // Output: ReferenceError: localLet is not defined

// Explanation: Both localVar and localLet are not accessible outside the function where they were declared.
// They have local scope, meaning they can only be accessed within the function they are declared in.


// 2. Write a program that uses const to declare an array or object and modifies it. 
// Explain why the program does or does not throw an error.

const myArray = [1, 2, 3]; // Declaring an array with const
myArray.push(4); // Modifying the array by adding a new element
console.log(myArray); // Output: [1, 2, 3, 4]

const myObject = { name: "John" }; // Declaring an object with const
myObject.age = 30; // Modifying the object by adding a new property
console.log(myObject); // Output: { name: "John", age: 30 }

// Explanation: Modifying an array or object declared with const does not throw an error.
// This is because const prevents reassignment of the variable (you cannot reassign myArray or myObject to something else),
// but it does not prevent modifying the contents of the array or object.


// 3. Write a program that uses nested functions to demonstrate how scope chain works. 
// Declare a variable in the outer function and try to access it from the inner function. 
// Then, declare a variable in the inner function and try to access it from the outer function. 
// Explain your observations.

function outerFunction() {
  let outerVar = "I'm outside"; // Variable in the outer function

  function innerFunction() {
    let innerVar = "I'm inside"; // Variable in the inner function
    console.log(outerVar); // Output: I'm outside (Accessing outerVar from innerFunction)
  }

  innerFunction();
  console.log(innerVar); // Output: ReferenceError: innerVar is not defined
}

outerFunction();

// Explanation: The innerFunction can access outerVar due to the scope chain (innerFunction has access to outerFunction's scope).
// However, outerFunction cannot access innerVar because it is scoped to innerFunction only.


// 4. Write a program that uses the "let" keyword to create a block-scoped variable. 
// Demonstrate how this variable is inaccessible outside of the block it was declared in.

{
  let blockScopedVar = "I exist only within this block";
  console.log(blockScopedVar); // Output: I exist only within this block
}

console.log(blockScopedVar); // Output: ReferenceError: blockScopedVar is not defined

// Explanation: blockScopedVar is declared with let inside a block (curly braces).
// It is inaccessible outside of this block because let is block-scoped.


// 5. Write a program that uses the "const" keyword to declare a variable 
// and explain the difference between reassigning the variable and modifying its value.

const myConstVar = { greeting: "Hello" };

// Trying to reassign myConstVar
// myConstVar = {}; // Output: TypeError: Assignment to constant variable.

// Modifying the value of myConstVar
myConstVar.greeting = "Hi";
console.log(myConstVar.greeting); // Output: Hi

// Explanation: When a variable is declared with const, it cannot be reassigned to a different value or object.
// However, if the const variable is an object or array, you can modify its contents.


// 1. Create a function that returns another function that adds a given number to a counter. 
// The counter should be a private variable that's accessible only to the returned function.

function createAdder() {
  let counter = 0; // Private variable to keep track of the counter

  return function(number) {
    counter += number; // Add the given number to the counter
    return counter; // Return the updated counter value
  };
}

const addFive = createAdder(); // Create a function that adds numbers to the counter
console.log(addFive(5)); // Output: 5 (Counter is now 5)
console.log(addFive(3)); // Output: 8 (Counter is now 8)
console.log(addFive(-2)); // Output: 6 (Counter is now 6)

// Explanation: The `counter` variable is private to the `createAdder` function.
// It can only be accessed and modified by the returned function, making it a closure.


// 2. Create a function that returns an object with two methods: setValue and getValue. 
// setValue should set a private variable to a given value, and getValue should return that value. 
// The private variable should be accessible only to the object's methods.

function createValueManager() {
  let privateValue; // Private variable to hold the value

  return {
    setValue: function(value) {
      privateValue = value; // Set the private variable to the given value
    },
    getValue: function() {
      return privateValue; // Return the value of the private variable
    }
  };
}

const manager = createValueManager();
manager.setValue(42); // Set the private value to 42
console.log(manager.getValue()); // Output: 42 (Returns the private value)

// Explanation: The `privateValue` variable is private to `createValueManager`.
// It can only be accessed and modified via the `setValue` and `getValue` methods, making it encapsulated.


// 3. Create a function that takes an array of strings and returns a function that, when called, 
// logs each string to the console. The function should "remember" which strings have already been logged, 
// and only log the remaining strings when it's called again.

function createLogger(strings) {
  let index = 0; // Index to track which strings have been logged

  return function() {
    if (index < strings.length) {
      console.log(strings[index]); // Log the current string
      index++; // Increment the index to the next string
    } else {
      console.log("All strings have been logged.");
    }
  };
}

const logStrings = createLogger(["Hello", "World", "JavaScript", "Closures"]);
logStrings(); // Output: Hello
logStrings(); // Output: World
logStrings(); // Output: JavaScript
logStrings(); // Output: Closures
logStrings(); // Output: All strings have been logged.

// Explanation: The `index` variable is private to the `createLogger` function.
// The returned function "remembers" the last logged string due to closure and only logs the remaining strings.


// 1. Create a function that takes a number and returns a function that multiplies its argument 
// by the number passed to the first function.

function multiplyBy(factor) {
  return function(number) {
    return number * factor; // Multiply the passed number by the factor
  };
}

let timesThree = multiplyBy(3);
console.log(timesThree(5)); // Output: 15 (3 * 5)

// Explanation: The `multiplyBy` function creates a closure over the `factor` variable.
// The returned function uses this factor to multiply any given number.


// 2. Create a function that takes an array of numbers and returns the sum of all the numbers. 
// Use a closure to keep track of the running total as you iterate through the array.

function sumArray(numbers) {
  let total = 0; // Private variable to keep track of the running total

  numbers.forEach(function(number) {
    total += number; // Add each number to the total
  });

  return total; // Return the final total
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// Explanation: The `total` variable is private to the `sumArray` function and is updated 
// with each number in the array. This demonstrates closure as `total` retains its value across iterations.


// 3. Create a function that takes a string and returns a function that logs the string to the console. 
// The returned function should also take a number and repeat the string that many times before logging it.

function repeatLogger(string) {
  return function(times) {
    console.log(string.repeat(times)); // Log the string repeated `times` times
  };
}

let logHello = repeatLogger("Hello");
logHello(3); // Output: HelloHelloHello

// Explanation: The `repeatLogger` function creates a closure over the `string` variable.
// The returned function uses this string and repeats it the specified number of times before logging it.


// 4. Create a function that takes an object with two properties, value and callback. 
// The function should return a new object with two methods: getValue, which returns the value property, 
// and runCallback, which calls the callback property with the value as an argument.

function createObjectWithMethods(obj) {
  return {
    getValue: function() {
      return obj.value; // Return the value property of the object
    },
    runCallback: function() {
      return obj.callback(obj.value); // Call the callback with the value as an argument
    }
  };
}

let myObject1 = {
  value: 10,
  callback: function(val) {
    return val * 2; // Example callback function that doubles the value
  }
};

let newObj = createObjectWithMethods(myObject1);
console.log(newObj.getValue()); // Output: 10
console.log(newObj.runCallback()); // Output: 20 (10 * 2)

// Explanation: The `createObjectWithMethods` function takes an object and returns a new object 
// with methods that interact with the original object's properties. The methods encapsulate the 
// value and callback within the new object, demonstrating how closures retain access to these properties.


// 5. Create a function that takes an array of strings and returns a new array with the same strings, 
// but in reverse order. Use a closure to keep track of the index of the current string as you iterate through the array.

function reverseArray(strings) {
  let reversedArray = []; // Array to store the reversed strings

  function reverse() {
    for (let i = strings.length - 1; i >= 0; i--) {
      reversedArray.push(strings[i]); // Push strings in reverse order
    }
    return reversedArray;
  }

  return reverse(); // Call the reverse function and return the result
}

console.log(reverseArray(["apple", "banana", "cherry"])); // Output: ["cherry", "banana", "apple"]

// Explanation: The `reverseArray` function uses a closure to track the index as it iterates 
// through the array in reverse order, storing each string in a new array and returning it.
