
// // In this code, a is an empty object that is being assigned properties using the square bracket notation. The values of the properties are being set to the numbers 123 and 456. The keys of the properties are the objects b and c.

// // When the console.log statement is executed, it logs the value of the property of a whose key is the object b. In this case, the value of this property is 456, because the value of the property was last set to 456 when the object c was used as the key.

// // This behavior occurs because when objects are used as keys in an object, the object's default behavior is to convert the object to a string representation. In this case, both b and c are converted to the string [object Object], which means that they both end up being used as the same key in the a object. As a result, the value of the property that is set using the object c as the key overwrites the value of the property that was set using the object b as the key.

// let a = {};
// let b = { key: "b" };
// let c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);


// // In this code, we are declaring three variables obj1, obj2, and obj3, and assigning an object to each of them. Then, we are reassigning a new object to obj2 and modifying a property of obj1.

// // When the console.log statement is executed, it logs the values of the key property for each object. The value of the key property for obj1 is "new value", the value of the key property for obj2 is "another value", and the value of the key property for obj3 is "new value".

// // This is because when an object is assigned to a variable, the variable stores a reference to the object in memory rather than the object itself. Changing the value of a property of the object using one variable will affect the value of that property when accessed using a different variable that references the same object. However, reassigning a new object to a variable will change the reference stored in that variable, so the original object is no longer accessible using that variable.

// // In this case, the value of the key property for obj1 was changed to "new value" using the obj1 variable, which affected the value of the key property when accessed using the obj3 variable, because both variables reference the same object. However, the value of the key property for obj2 was not affected, because the obj2 variable was reassigned to reference a new object.

// let obj1 = { key: "value" };
// let obj2 = obj1;
// let obj3 = obj2;

// obj1.key = "new value";
// obj2 = { key: "another value" };

// console.log(obj1.key, obj2.key, obj3.key);



// // When the method obj.b is called directly on obj, the output will be "foo". This is because this refers to the object that the method is called on, and obj.a is equal to "foo".

// // When the variable c is assigned the value of obj.b, it is a reference to the function itself and not the object obj. When c is called, it is not called on an object, so this will not refer to obj and the value of this.a is undefined. As a result, the output when calling c() will be undefined.

// const obj = {
//     a: "foo",
//     b: function () {
//       console.log(this.a);
//     },
//   };
  
//   const c = obj.b;
  
//   obj.b();
//   c();
 

// // The addFoo function takes an object as an argument and returns the value of obj.foo + 1. When addFoo is called with x as the argument, the output will be 2, because x.foo is equal to 1. When addFoo is called with y as the argument, the output will be 3, because y.foo is equal to 2.
// const x = { foo: 1 };
// const y = { foo: 2 };

// function addFoo(obj) {
//   return obj.foo + 1;
// }

// console.log(addFoo(x));
// console.log(addFoo(y));


// // The if statement is evaluating the function f as a boolean value. In JavaScript, functions are truthy values, so the condition will evaluate to true and the code block inside the if statement will be executed. The value of x is then incremented by the string "undefined", which is the result of calling typeof f.

// let x = 1;

// if (function f() {}) {
//   x += typeof f;
// }

// console.log(x);



// // When comparing two objects with the == operator, it compares their references, not their values. In this case, x and y are different objects with the same values. z is assigned the value of y, so they refer to the same object. As a result, the first comparison returns false, the second comparison also returns false and the third comparison returns true. and the last comparison also returns false.

// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;

// console.log(x == y);
// console.log(x === y);
// console.log(z == y);
// console.log(z == x);



// // The for loop is iterating 5 times, and in each iteration, it is scheduling a function to be invoked after 1000 milliseconds (1 second) using setTimeout. This function increments the value of x and logs it.

// // But all the 5 functions invoked after 1000 milliseconds.

// // Since, javascript is single threaded and event loop queue all the functions in the event loop and execute them one by one.

// // But inside each setTimeout callback execution, x++ increments x value by 1.

// // It makes difference when position of x++ code changes wrt the setTimout callback.

// // So all the 5 callbacks logs the values in incremental way, which is 1 2 3 4 5.

// var x = 0;
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     x++;
//     console.log(x);
//   }, 1000);
// }


// let a = { x: 1 };
// let b = { x: 2 };
// let c = { x: 3 };
// let d = { x: 4 };
// let e = { x: 5 };
// let arr = [a, b, c, d, e];

// arr.forEach((obj) => (obj.x = obj.x * 2));

// console.log(a.x, b.x, c.x, d.x, e.x);



// // The code creates an object obj with properties name and age. Then it creates a new object newObj using the spread operator to copy the properties of obj and then it updates the age property to 30.

// // The spread operator ... creates a new object with properties copied from the original object.

// // So, the first console.log statement logs the value of age property of obj which is 25.

// // And, the second console.log statement logs the value of age property of newObj which is 30.

// It doesn't affect the original object obj.
// let obj = { name: "John", age: 25 };
// let newObj = { ...obj, age: 30 };

// console.log(obj.age);
// console.log(newObj.age);
