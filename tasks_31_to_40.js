//Task Thirty-One
// Definition :
// 31. Write a JavaScript program to find the maximum of three numbers.

const { required } = require("joi");

function find_Max_From_3_Nums(a, b, c) {
  return Math.max(a, b, c);
}

// Task Thirty-Two
// Definition :
// 32. Write a JavaScript program to find the closest value to 100 from two numerical values.

// function find_Closest_Value_From_100(num1,num2){
//     let num_a = Math.abs(100-num1);
//     let num_b = Math.abs(100-num2);

//     num_a > num_b ? console.log(num2) : console.log(num1)
// }

// Task Thirty-Three
// Definition :
// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

// function check_Num_In_Range_Of_40_60_Or_70_100(num1,num2){
//     if((num1 >= 40 && num1 <= 60) || (num2 >= 40 && num2 <= 60)){
//         return true;
//     }else if((num1 >= 70 && num1 <= 100) || (num2 >= 70 && num2 <= 100)){
//         return true;
//     }else{
//         return false;
//     }
// }

// const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// const numCores = 4; // Using 4 cores as specified
// let inputArray; // This will be set in the main function

// function searchElement(arr, element) {
//   if (isMainThread) {
//     return new Promise((resolve) => {
//       const chunkSize = Math.ceil(arr.length / numCores);
//       let foundElement = null;
//       let completedWorkers = 0;

//       for (let i = 0; i < numCores; i++) {
//         const start = i * chunkSize;
//         const end = Math.min(start + chunkSize, arr.length);
//         const worker = new Worker(__filename, {
//           workerData: { arr: arr.slice(start, end), element, workerId: i, start }
//         });

//         worker.on('message', (message) => {
//           if (message.found) {
//             foundElement = message.element;
//             console.log(`Worker ${message.workerId} found element ${message.element} at index ${message.index}`);
//             resolve(foundElement);
//           } else {
//             completedWorkers++;
//             if (completedWorkers === numCores) {
//               resolve(null); // Element not found
//             }
//           }
//         });

//         worker.on('error', (error) => {
//           console.error(`Worker error: ${error}`);
//         });
//       }
//     });
//   } else {
//     const { arr, element, workerId, start } = workerData;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === element) {
//         parentPort.postMessage({ found: true, element, workerId, index: start + i });
//         return;
//       }
//     }
//     parentPort.postMessage({ found: false, workerId });
//   }
// }

// function generateUnsortedArray(size) {
//   return Array.from({ length: size }, () => Math.floor(Math.random() * 1000));
// }

// async function main() {
//   console.time('Generate Array');
//   inputArray = generateUnsortedArray(100000);
//   console.timeEnd('Generate Array');

//   const elementToFind = inputArray[Math.floor(Math.random() * inputArray.length)];
//   console.log("Element to find:", elementToFind);

//   console.time('Search');
//   const result = await searchElement(inputArray, elementToFind);
//   console.timeEnd('Search');

//   if (result !== null) {
//     console.log(`Element ${result} found`);
//   } else {
//     console.log('Element not found');
//     console.log('This should not happen as the element is definitely in the array.');
//   }
// }

// if (isMainThread) {
//   main();
// } else {
//   // This ensures the worker code is executed
//   searchElement(workerData.arr, workerData.element);
// }
