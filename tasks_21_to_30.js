// Task Twenty-one
// Definition :
// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

// function addPY(a){
//     if(a.startsWith("Py") || a.startsWith("PY") || a.startsWith("py") ){
//         return a;
//     }else{
//         return "Py"+a;
//     }
// }

// Task Twenty-two
// Definition :
// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

// function remove_Specified_Char(position) {
//     let sampleString = 'abcdefghijk';
//     return (sampleString.replace(sampleString[position],''));
// }

// Task Twenty-three
// Definition :
//23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

// function change_First_Last_Position(st){
//     if(st.length >= 1){
//        return (st.slice(-1) + st.slice(1,-1) + st.slice(0,1))

//     }else{
//         return -1
//     }
// }

// Task Twenty-four
// 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

// function change_First_Char_Add_To_Last_And_First(st){
//     if(st.length == 0) return -1;
//     if(st.length == 1) return st;
//     return (st + st.slice(0,1));
// }

// Task Twenty-five
// Definition :
// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  

// function check_Num_Is_Divisible_By_3_Or_7(num){
//     if(num % 3 == 0 || num % 7 == 0){
//     return true
// }else {
//     return false
// }
// }

// Task Twenty-six
// Definition :
//26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

// function add_Last_3_Chars_Front_And_Back(str) {
//     if (str.length < 3) {
//         return false;
//     } else {
//         let last3Chars = str.slice(-3);
//         return last3Chars + str + last3Chars;
//     }
// }

// Task Twenty-seven
// Definition :
//27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.
// function starts_With_Java(str){
//     str.startsWith('Java') ? console.log(true) : console.log(false)
// }

// Task Twenty-eight
// Definition :
// 29. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range. 

// function check_2_Values_InRange_Of_50_To_99(x,y){
//     if((x >= 50 && x <= 99) || (y >= 50 && y <= 99) ){
//         return true;
//     }else {
//         return false;
//     }
// }

// Task Twenty-nine
// Definition :
// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range. 

// function check_3_Values_InRange_Of_50_To_99(x,y,z){
//     if((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (y >= 50 && y <= 99) ){
//         return true;
//     }else {
//         return false;
//     }
// }

// Task Thirty
// Definition :
//30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

// function check_Script_Appears_4th_Index(str){
//     if( (str.indexOf("script") == 4) || str.indexOf("Script") == 4){
//         return true;
//     }else{
//         return false;
//     }
// }