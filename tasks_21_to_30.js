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

// function check_Num_Is_Divisible_By_3_Or_7(num){
//     if(num % 3 == 0 || num % 7 == 0){
//     return true
// }else {
//     return false
// }
// }
