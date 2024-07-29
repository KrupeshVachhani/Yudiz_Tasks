// Task Eleven
// Definition :
// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

// function celsius_To_Fahrenheit(celsius) {
//     let fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
//   }

//   function fahrenheit_To_Celsius(fahrenheit) {
//     let celsius = (fahrenheit - 32) * 5/9;
//     return celsius;
//   }

//   let celsius = 25;
//   let fahrenheit = celsius_To_Fahrenheit(celsius);
//   console.log(`${celsius}°C is equal to ${fahrenheit}°F`);

//   fahrenheit = 77;
//   celsius = fahrenheit_To_Celsius(fahrenheit);
//   console.log(`${fahrenheit}°F is equal to ${celsius}°C`);

// Task Twelve
// Definition :
// 12. Write a JavaScript program to get the website URL (loading page).

// console.log(document.URL);

// Task Thirteen
// Definition :
// 13. Write a JavaScript exercise to create a variable using a user-defined name.

// let name = prompt("Enter your name: ");
// console.log(`Hello ${name}`);

// Task Fourteen
// Definition :
// 14. Write a JavaScript exercise to get the filename extension.

// let filename = "example.txt";
// let extension = filename.split('.').pop();
// console.log(extension);

// Task Fifteen
// Definition :
// 5. Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

// function difference_Of_13(n)
//  {
//     if (n <= 13)
//         return 13 - n;
//     else
//         return (n - 13) * 2;
//  }

// Task Sixteen
// Definition :
//16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

// function add_With_Triple(a, b){
//     if(a === b){
//         return (a + b)*3;
//     }else{
//         return a + b;
//     }
// }

// Task Seventeen
// Definition :
// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

// function difference_Of_19(a){
//     if(a<=19){
//         return (19-a);
//     }else{
//         return ((a-19)*3);
//     }
// }

// Task Eighteen
// Definition :
// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

// function check_50_Or_Addition_50(a,b){
//     if(a === 50 || b === 50 || (a+b) === 50){
//         return true;
//     }else{
//         return false;
//     }
// }

// Task Nineteen
// Definition :
// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

// function check_20_Or_100_Or_400(a){
//     if(Math.abs(a-100) <= 20 || Math.abs(a-400) <= 20 ){
//         return true;
//     }else{
//         return false;
//     }
// }

// Task Twenty
// Definition :
//20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.

// function check_Positive_Negative(a, b){
//     if((a<0 && b>0) || (a>0 && b<0)){
//         return true;
//     }else{
//         return false;
//     }
// }
