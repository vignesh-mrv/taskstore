// STRING METHODS

let str = "Hello Moto Hello ";
console.log(str.length); // calculate length of the string

console.log(str.toUpperCase()); // changes all characters to UPPER CASE

console.log (str.toLowerCase()); // changes all characters to LOWER CASE

console.log (str.charAt(2)); // Retrieves the particular character for the index given

console.log(str.indexOf("l")); // Returns the index of the character given which comes 1st, here l comes at index 2,3 but it picks 2 since it is the 1st

console.log(str.lastIndexOf ("l")); // Returns the index of the character given at the last, here l comes at index 2,3 but it picks 3rd since it is the last

console.log(str.slice (3)); // slickes/ cuts the 1st 3 characters of the variable given

console.log(str.slice (-3)); // slickes/ cuts the last 3 characters of the variable given

console.log(str.substring(0, 5)); // RANGE which should be printed output

console.log(str.replace ("Hello", "Hi")); // Replaces the value which comes 1st not all are replaced

console.log(str.replaceAll ("Hello", "Hi")); // Replaces all

console.log(str.trim()); //removes spaces at the begining and end not in middle

console.log(str.split(" ")); //can split characters each ("") or in words (" "). output executed in array block only

console.log(str.split(" ").join(" ")); // used to join charactes or words splitted. Only afte using split, join will work

console.log(str.concat(" hiiii ")); // will join two or more values at the end of the string

console.log(str.startsWith(" ")); // check if the string starts with specified substring

console.log(str.endsWith(" ")); // check if string ends with specified substring

console.log(str.includes(" ")); // check if string has specified substring