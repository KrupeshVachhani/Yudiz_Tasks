//Task One
// Definition :
// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// let today = new Date();
// let day = today.getDay();
// let dayList = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// console.log("Today is : " + dayList[day]);
// console.log("Current time is : " + today.toLocaleTimeString());

//Different way
// day.toString().slice(0,3);

//Task Two
// Definition :
// 2. Write a JavaScript program to print the current window contents.

// console.log(window);
// console.log(global);

//Task Three
// Definition :
// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// let today = new Date();
// let dd = today.getDate();
// let mm = today.getMonth() + 1; //January is 0!
// let yyyy = today.getFullYear();

// console.log(`${mm}-${dd}-${yyyy}`);

//Task Four
// Definition :
// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

// let s1 = 5;
// let s2 = 6;
// let s3 = 7;

// let s = (s1 + s2 + s3) / 2;
// let area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
// console.log(area);

//Task Five
// Definition :
// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// function rotate_String_Right(str) {
//     let rotatedStr = str;
//     setInterval(() => {
//
//         let lastChar = rotatedStr.slice(-1);
//
//         rotatedStr = lastChar + rotatedStr.slice(0, -1);
//
//         console.log(rotatedStr);
//     }, 1000);
// }

//Task Six
// Definition :
// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// let year = 2024;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(`${year} is a leap year`);
// } else {
//     console.log(`${year} is not a leap year`);
// }

//Task Seven
// Definition :
// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

// for (let year = 2014; year <= 2050; year++) {
//     let date = new Date(year, 0, 1);
//     if (date.getDay() === 0) {
//         console.log(`1st January ${year} is a Sunday`);
//     }
// }

//Task Eight
// Definition :
// 8.Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

// let randomNumber = Math.floor(Math.random() * (max - min +1) + min)

// console.log(randomNumber);
// let guessedNumberByUser = prompt("Guess the number: ");

// if(randomNumber == guessedNumberByUser){
//     alert('Good Word');
// }else{
//     alert('Not Matched');
// }

//Task Nine
// Definition :
// 9. Write a JavaScript program to calculate days left until next Christmas.
// function days_Until_Christmas() {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const christmasDate = new Date(currentYear, 11, 25);

//     if (today > christmasDate) {
//       christmasDate.setFullYear(currentYear + 1);
//     }

//     const oneDay = 1000 * 60 * 60 * 24;  // milliseconds in one day
//     const daysLeft = Math.ceil((christmasDate - today) / oneDay);

//     return daysLeft;
//   }

//   console.log(`There are ${days_Until_Christmas()} days left until Christmas.`);

//Task Ten
// Definition :
// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

// let num1 = prompt("Enter the first number: ");
// let num2 = prompt("Enter the second number: ");

// let multiplication = num1 * num2;

// let division = num1 / num2;
// console.log(`Multiplication: ${multiplication}`);
// console.log(`Division: ${division}`);
