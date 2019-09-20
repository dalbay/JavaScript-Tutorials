/*** Type Conversion ***
     A user form input is of type string by default; for calculation you need to parse it to a number.
*/

 let val;

// Number to string
val = String(555);
val = String(4+4);        // this will override val

console.log(val);         //   8
console.log(typeof val);  //   string 
console.log(val.length);  //   1

// Bool to String

val = String(true);

console.log(val);         //  true
console.log(typeof val);  //  string
console.log(val.length);  //  4

// Date to String

val = String(new Date());

console.log(val);        // Sun Jul 14 2019 14:21:22 GMT-0400 (Eastern Daylight Time)
console.log(typeof val); // string
console.log(val.length); // 57

// Array to String
val = String([1,2,3,4]);

console.log(val);         // 1,2,3,4
console.log(typeof val);  // string
console.log(val.length);  // 7

// In addition to the String() function, you can also use the toString() method..
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');

console.log(val);        // 5
console.log(typeof val); // number

// toFixed() - allows us to specify decimals.
console.log(val.toFixed(2)); // 5.00

//In addition to the Number() function, you can also use the parseInt() method..
val = parseInt('5');
val = parseFloat('105.50');  // for decimals
