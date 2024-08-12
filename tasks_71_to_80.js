//Task Seventy-one
// Definition :
// 71. Write a JavaScript program to check whether the first element and the last element are equal of a given array of integers length 3.

// function check_1_Come_FirstOrLast(arr){
//     let checkedArrayLength = arr.length;
//     if(ArrayLength < 1) return false;
//     if(arr[0] === 1 || arr[checkedArrayLength-1] ===1 ){
//         return true;
//     }else{
//         return false;
//     }
// }

// Task Seventy-two
// Definition :
// 72. Write a JavaScript program to check whether the first element and the last element are equal of a given array of integers length 3.

// function check_FirstAndLast_Element_Same(arr){
//     let ArrayLength = arr.length;
//     if(ArrayLength < 1) return false;
//     if(arr[0] === arr[ArrayLength-1]){
//         return true;
//     }else{
//         return false;
//     }
// }

//Task Seventy-three
// Definition :
//73. Write a JavaScript program to reverse the elements of a given array of integers of length 3.

// function reverse_Array_Element(arr){
//     return arr.reverse();
// }

// Task Seventy-four
// Definition :
// 74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.

// function find_Largest_Element(arr){
//     return arr[0] > arr[arr.length-1] ? arr.fill(arr[0]) : arr.fill(arr[arr.length-1])
// }

// Task Seventy-five
// Definition :
// 75. Write a JavaScript program to create a new array taking the middle elements of the two given arrays of integers of same length.

// function arrayOf_Middle_Elements(arr1, arr2) {
//   if (arr1.length < 1 || arr2.length < 1) return false;
//   const LengthArr1 = arr1.length;
//   const LengthArr2 = arr2.length;
//   let FinalArr = [];

//   FinalArr.push(arr1[(LengthArr1 - 1) / 2], arr2[(LengthArr2 - 1) / 2]);

//   return FinalArr;
// }

// Task Seventy-six
// Definition :
//76. Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.

// function arrayOf_FirstAndLast_Elements(arr1) {
//   if (arr1.length < 1) return false;
//   const LengthArr1 = arr1.length;
//   let FinalArr = [];

//   FinalArr.push(arr1[0], arr1[LengthArr1 - 1]);

//   return FinalArr;
// }

// Task Seventy-seven
// Definition :
//77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.

// function check_Array_Contains_1_Or_3(arr){
//     if(arr.includes(1) || arr.includes(3)){
//         return true;
//     } else{
//         return false;
//     }
// }

// Task Seventy-eight
// Definition :
// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.

// function check_Array_Not_Contains_1_Or_3(arr) {
//   if (arr.includes(1) || arr.includes(3)) {
//     return false;
//   } else {
//     return true;
//   }
// }

// Task Seventy-nine
// Definition :
// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.

// function check_Array_Contains_twice_30_And_40(arr) {
//   if (arr.length < 2) return false;
//   let FilteredArray = arr.filter((v) => {
//     if (v === 30 || v === 40) {
//       return v;
//     }
//   });

//   if (FilteredArray.length < 4) return false;
//   return FilteredArray.length % 2 === 0 ? true : false;
// }

// Task Eighty
// Definition :
// 80. Write a JavaScript program to swap the first and last elements of a given array of integers of length 3.
// function swap_FirstAndLast_Element(arr) {
//   if (arr.length < 1) return false;
//   if (arr.length === 1) return [arr[0], arr[0]];
//   let FinalArray = arr;
//   let FIrstElement = FinalArray.shift();
//   let LastElement = FinalArray.pop();

//   FinalArray.unshift(LastElement);
//   FinalArray.push(FIrstElement);
//   return FinalArray;
// }
