// Block Scope With LET & CONST

// Example 1.

// Global Scope
var a = 1;
let b = 2;
const c = 3;

console.log('Global Scope : ', a, b, c);

// Output:
// Global Scope : 1 2 3


// Example 2.

// Global Scope
var a = 1;
let b = 2;
const c = 3;

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope : ', a, b, c);
}
test();

console.log('Global Scope : ', a, b, c);

//Output:
// Function scope : 4 5 6
// Global Scope : 1 2 3

/*
- the second a, b, and c declarations are inside a functions - meaning they are in a different scope, so they become different variables.
- Var is a functions scope declaration – meaning, you can have a different variable with the same name inside a function.
- A block level scope is anything that is wrapped inside a{}, an if statement, …
*/

// Example 3.

// Global Scope
var a = 1;
let b = 2;
const c = 3;

if(true) {
  // Block Scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('If Scope: ', a, b, c);
}
console.log('Global Scope: ', a, b, c);

//Output:
//If Scope: 4 5 6
//Global Scope: 4 2 3   var has changed in the global scope after changing the 

// let and const have not changed and are still the same in the global scope.

// Example 4.

// Global Scope
var a = 1;
let b = 2;
const c = 3;

for(var a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);

/*
Output:
Loop: 0
Loop: 1
Loop: 2
Loop: 3
Loop: 4
Loop: 5
Loop: 6
Loop: 7
Loop: 8
Loop: 9
Global Scope:  10 2 3

We used var in the for loop and it has changed the global variable.
If we had used let in the for loop, var a would not have changed in the global – 
	Output: 
…
Loop: 7
Loop: 8
Loop: 9
Global Scope:  1 2 3
*/

