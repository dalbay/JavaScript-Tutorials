# JAVASCRIPT LANGUAGE FUNDAMENTALS

## Create a Simple HTML structure: 
– VS-Code allows us to use shortcuts 
- ! + tab  ->  for a basic HTML structure
– Open file with Life Server Extension 
- Ctrl + S to save the page ->  updates page automatically
– F12 -> Open up console in browser 
 
## Log to the Console - for Debugging code
### Log string to console
```JavaScript
console.log('Hello World'); 

// OUTPUT:
// Hello World
```
### Log arrays to console
```JavaScript
console.log([1,2,3,4]);
/*
OUTPUT:
 [object Array]: [1, 2, 3, 4]
0: 1
1: 2
2: 3
3: 4

length: 4
*/
```
### Log objects - (object literal)
```JavaScript
console.log({a:1, b:2});
/*
OUTPUT:
[object Object]: {a: 1, b: 2}
a: 1
b: 2
__proto__: Object
*/
```
– Print out the object on the console as a table -> ```console.table({a:1, b:2});```
– Pring out as an error; this will print out in red ->``` console.error('This is an error');```
– Print out a warning   ->```   console.warn('this is a warning');```
– Clear the console   ->```   console.clear();```
– Display how long something takes in your script to process ->
 ```JavaScript 
 console.time('Some text');
   // script here ... 
console.time('Some text');
```


## Variables and Declaration
### VAR
```JavaScript
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);
```


*To comment everything out -> Highlight out and Crtl + /*
### LET
- is identical when it comes to global scope
- has advantages when it comes to block level scoping
```JavaScript
let name = 'John Doe';+

console.log(name);
name = 'Steve Smith';
console.log(name);
```
### CONST

- can't change/reassign a value
- have to assign a value, cannot be instantiated
- we can change arrays and object but we can’t redeclare them to new values
```JavaScript
const person  = {
    name: 'John',
    age: 30
}
 person.name = 'Sarah';
 person.age = 31;
 console.log(person);
 // OUTPUT:
 // [object Object]: {age: 31, name: "Sarah"}
 
 const numbers = [1,2,3,4];
 numbers.push(5);
 console.log(numbers);
 // OUTPUT:
 // [object Array]: [1, 2, 3, 4, 5]
 // can't do (need to assign a new array)->
 numbers = [1,2,3,4,5,6,7];
 // OUTPUT:
 // 0: Assignment to const
```
## Primitive Data Types vs. Reference Types
JavaScript is a Dynamically Typed Language. 
– Types are associated with values not variables
– The same variable can hold multiple types
– We do not need to specify types
– There are supersets of JS and addons to allow static typing (TypeScript, Flow)

### Primitive Types:
- The data is stored directly in the location that the variable accesses;
- it's stored on the stack - when you access a primitive type you access its actual value.

```JavaScript
// String:
const name = 'John Doe';
console.log(typeof name);  //string

// Number:
const age = 45;

// Boolean:
const hasKids = true;

// Null:
const car = null;

// Undefined:
let test;

// Symbol:
const sym = Symbol();
```

### Reference Types – Objects

- Accessed by reference
- Data is stored on the heap - a pointer to locate in memory
#### Array
```JavaScript
const hobbies = ['movies', 'music'];
```
#### Object literal
```JavaScript
const address = {
  city: 'Boston',
  state: 'MA'
}
const today = new Date();
console.log(today);  Sat Jul 13 2019 00:46:51 GMT-0400 (Eastern Daylight Time)
console.log(typeof today);  object
```
## Type Conversion
When you are taking input from a form, that will be string by default; for calculation you need to parse it to a number.
```JavaScript
let val;
// use let, var would give you an error here
```

### Number to string
```JavaScript
val = String(555);
val = String(4+4);        // this will override val

console.log(val);         //   8
console.log(typeof val);  //   string 
console.log(val.length);  //   1
```
### Bool to String
```JavaScript
val = String(true);

console.log(val);         //  true
console.log(typeof val);  //  string
console.log(val.length);  //  4
```
### Date to String
```JavaScript
val = String(new Date());

console.log(val);        // Sun Jul 14 2019 14:21:22 GMT-0400 (Eastern Daylight Time)
console.log(typeof val); // string
console.log(val.length); // 57
```
### Array to String
```JavaScript
val = String([1,2,3,4]);

console.log(val);         // 1,2,3,4
console.log(typeof val);  // string
console.log(val.length);  // 7

//In addition to the String() function, you can also use the toString() method..
val = (5).toString();
val = (true).toString();
```
### String to number
```JavaScript
val = Number('5');

console.log(val);        // 5
console.log(typeof val); // number
```
### toFixed() - allows us to specify decimals.
```JavaScript
console.log(val.toFixed(2)); // 5.00

//In addition to the Number() function, you can also use the parseInt() method..
val = parseInt('5');
val = parseFloat('105.50');  -- for decimals
```

## Numbers & The Math Object
```JavaScript
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random();   this will give us a random decimal.

val = Math.floor(Math.random() * 20 + 1);  // this will give you a random whole number; 20 is the max number that we want

console.log(val);
```



## String Method & Concatenation
```JavaScript
const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;
val = firstName + lastName;

// CONCATENATION
val = firstName + ' ' + lastName;

// APPEND
val = 'Brad ';
val += 'Traversy';
val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// ESCAPING
val =  'That\'s awesome, I can\'t wait';

// LENGTH
val = firstName.length;

// CONCAT()
val = firstName.concat(' ', lastName);

// CHANGE CASE
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// INDEXOF()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// CHARAT()
val = firstName.charAt('2');

// GET LAST CHAR
val = firstName.charAt(firstName.length - 1);

// SUBSTRING()
val = firstName.substring(0, 4);

// SLICE()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// SPLIT()
val = str.split(' '); 
/* This will give us an array
[object Array]: ["Hello", "there", "my", "name", "is", "Brad"]
0: "Hello"
1: "there"
2: "my"
3: "name"
4: "is"
5: "Brad"
length: 6
*/
val = tags.split(',');
/*
[object Array]: ["web design", "web development", "programming"]
0: "web design"
1: "web development"
2: "programming"
length: 3
*/

// REPLACE()
val = str.replace('Brad', 'Jack');

// INCLUDES()
val = str.includes('foo');

console.log(val);
```
## Template Literals

A lot of times, you will be inserting HTML from JavaScript; when you fetch something through Ajax and you want to put in something in an unordered list or a table with dynamic data, you going to do that with JavaScript.
```JavaScript
const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;
```
### Without template strings (es5)
```JavaScript
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job+ ' </li><li>City: '+ city +' </li></ul>';

html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';

function hello(){
  return 'hello';
}
```
### With template strings (es6)
```JavaScript
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;
/*
Output: 
•	Name: John
•	Age: 31
•	Job: Web Developer
•	City: Miami
•	4
•	hello
•	Over 30
*/
```
## Arrays & Array Methods
```JavaScript
// CREATE ARRAY:

const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// GET LENGTH:
val = numbers.length;

// CHECK IF IS ARRAY:
val = Array.isArray(numbers);

// GET SINGLE VALUE:
val = numbers[3];
val = numbers[0];

// INSERT INTO ARRAY:
numbers[2] = 100;

// FIND INDEX OF VALUE:
val = numbers.indexOf(36);
```
### MUTATING ARRAYS
#### Add on to end
```JavaScript
numbers.push(250);
```
#### Add on to front
```JavaScript
numbers.unshift(120);
```
#### Take off from end
```JavaScript
numbers.pop();
```
#### Take off from front
```JavaScript
numbers.shift();
```
#### Splice values
```JavaScript
numbers.splice(1,3);
```
#### Reverse
```JavaScript
numbers.reverse();
```
#### Concatenate array
```JavaScript
val = numbers.concat(numbers2);
```
#### Sorting arrays
```JavaScript
val = fruit.sort();
val = numbers.sort();

// Use the "compare function" to sort an array of numbers from low to high
val = numbers.sort(function(x, y){
    return x - y;
});
```
#### Reverse sort
```JavaScript
val = numbers.sort(function(x, y){
  return y - x;
});
```
#### Find - returns the first value
```JavaScript
function over50(num){
  return num > 50;
}
val = numbers.find(over50);

console.log(numbers);
console.log(val);

```
## Object Literals
```JavaScript
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 36,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {            // embedded object
      city: 'Miami',
      state: 'FL'
    },
    getBirthYear: function(){
      return 2017 - this.age;
    }
  }
  
  let val;
  
  val = person;
  // Get specific value
  val = person.firstName;
  val = person['lastName'];
  val = person.age;
  val = person.hobbies[1];
  val = person.address.state;
  val = person.address['city'];
  val = person.getBirthYear();
  
  console.log(val);
 ```
 ### Array of Objects
 ```JavaScript
  const people = [  
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 40}
  ];
  
  for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
  }
```

## Date & Time
```JavaScript
let val;
const today = new Date();  // today will be todays date
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);
console.log(birthday);
```

## If Statements & Comparison Operators

```JavaScript
const id = 100;

//EQUAL TO
if(id == 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

//EQUAL TO VALUE & TYPE
if(id !== 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

//Test if undefined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}
```

## LOGICAL OPERATORS
```JavaScript
const name = 'Steve';
const age = 70;

// AND &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

```
### Switches
```JavaScript
let day;

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);
```
## FUNCTION DECLARATION & EXPRESSIONS

### Function Declaration
```JavaScript
function greet(firstName, lastName){
    return 'Hello ' + firstName + ' ' + lastName;
  }
  
console.log(greet('John', 'Doe'));

function greet(firstName = 'John', lastName = 'Doe'){   ES6
    // if(typeof firstName === 'undefined'){firstName = 'John'}  ES5
    // if(typeof lastName === 'undefined'){lastName = 'Doe'}	   ES5
    return 'Hello ' + firstName + ' ' + lastName;
  }
  
console.log(greet());

```
### Function Expressions
```JavaScript
  // anonymous function assigned to a variable (3 is default)
  const square = function(x = 3){ 
    return x*x;
  };
  
 console.log(square(8));  output: 64

```

### Immediately Invokable Function Expressions – IIFEs

- a function that you declare and run at the same time; 
- don't forget, functions finish with ()
```JavaScript
  (function(){
    console.log('IIFE Ran..');
  })();
  
  (function(name){
    console.log('Hello '+ name);
  })('Brad');

```
### Property Methods

- functions inside of objects
- when a function is put inside an object it's called a method
```JavaScript
  // create a variable and set it to an object with {}
  // we declare two functions- add and edit inside this object
  const todo = {
    add: function(){
      console.log('Add todo..');
    },
    edit: function(id){
      console.log(`Edit todo ${id}`);
    }
  }
  // defining functions to the todo outside of the {}
  todo.delete = function(){
    console.log('Delete todo...');
  }
  
  // calling the todo objects methods
  todo.add();
  todo.edit(22);
  todo.delete();
```

## GENERAL LOOPS

### FOR LOOP
```JavaScript
for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favorite number');
    continue;  //..to skip go to next iteration
  }
  if(i === 5){
    console.log('Stop the loop');
    break;  //.. to break out of the loop.
  }
  console.log('Number '+ i);
}
/*
Number 0
Number 1
2 is my favorite number
Number 3
Number 4
Stop the loop
*/
```
### WHILE LOOP
```JavaScript
let i = 0;

while(i < 10){
  console.log('Number ' + i);
  i++;
}
```
### DO WHILE
```JavaScript
let i = 100;

do {
  console.log('Number ' + i);
  i++;
}
while(i < 10);
```

### LOOP THROUGH ARRAYS
```JavaScript
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

```
### FOREACH - array loop
```JavaScript
cars.forEach(function(car){
    console.log(car);
});

cars.forEach(car =>  {
  console.log(car);
});


cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});

```
### MAP 
- is used to return something different (a different array)
```JavaScript
//create an array of object users
const users  = [
  {id: 1, name:'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'},
  {id: 4, name: 'Steve'}
];

// this will return each id inside of an arrya
const ids = users.map(function(user){
   return user.id;
});

console.log(ids);
```
### FOR IN LOOP 
- iterate through objects so we can get key value pairs.
```JavaScript
const user = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}
/*
firstName : John
lastName : Doe
age : 39
*/
```

## A Look at the WINDOW OBJECT

### What is Node.js?
• Node.js is an open source server environment
• Node.js is free
• Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
• Node.js uses JavaScript on the server
### Why Node.js?
- Node.js uses asynchronous programming!
- A common task for a web server can be to open a file on the server and return the content to the client.
#### Here is how PHP or ASP handles a file request:
1. Sends the task to the computer's file system.
2. Waits while the file system opens and reads the file.
3. Returns the content to the client.
4. Ready to handle the next request.
#### Here is how Node.js handles a file request:
1. Sends the task to the computer's file system.
2. Ready to handle the next request.
3. When the file system has opened and read the file, the server returns the content to the client.
- Node.js eliminates the waiting, and simply continues with the next request.
- Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.

### What Can Node.js Do?
• Node.js can generate dynamic page content
• Node.js can create, open, read, write, delete, and close files on the server
• Node.js can collect form data
• Node.js can add, delete, modify data in your database
### What is a Node.js File?
• Node.js files contain tasks that will be executed on certain events
• A typical event is someone trying to access a port on the server
• Node.js files must be initiated on the server before having any effect
• Node.js files have extension ".js"

*The **window is the global object** in the client-side JavaScript. Node.js is a JavaScript runtime that runs as a stand-alone process on your machine/system. In client site the window is the global environment. Node.js and Chrome are both using the JavaScript engine called V8; it works the same way, it just works in different environment. The window object has a lot to do with it :*
- Local storage
- Fetch API – to make HTTP request
- Navigator object - Geolocation
- Methods like alert ,…
- Document object – DOM

### WINDOW METHODS / OBJECTS / PROPERTIES

#### Methods:

**Alert** - You could use alerts in form validations, and using the DOM and outputting a nice Bootstrap alert, rather than using simple alert.
```JavaScript alert('Hello World');```


**Prompt** - will take an input from the user.
```JavaScript const input = prompt(); 
alert(input);
```
**Confirm** - is used when you deleting somethind
```JavaScript
if(confirm('Are you sure')){
  console.log('YES');
} else {
  console.log('NO');
}
```
#### Properties:


**Outter height and width**
```JavaScript
let val;
val = window.outerHeight; // returns the window screen height.
val = window.outerWidth;  // returns the window screen width.
```
**Inner height and width**
```JavaScript
val = window.innerHeight;  // if you have scroll bars 
val = window.innerWidth;   // if you have scroll bars 
```
**Scroll points**
```JavaScript
val = window.scrollY;  // to figure out where you are in terms of scrolling 
val = window.scrollX;

// For instance, if you put a div in the body with a margin-top: 1000px; will give you a scroll bar
// You could use this when you want to show an animation when you scroll down to a certain point 
```


#### Location Object
```JavaScript
val = window.location;
console.log(val);

/*OUTPUT:
[object Object]: {assign: function assign() { [native code] }, hash: "", host: "127.0.0.1:5500", hostname: "127.0.0.1", href: "http://127.0.0.1:5500/index.html"...}
assign: function assign() { [native code] }
hash: ""
host: "127.0.0.1:5500"
hostname: "127.0.0.1"
href: "http://127.0.0.1:5500/index.html"
origin: "http://127.0.0.1:5500"
pathname: "/index.html"
port: "5500"
protocol: "http:"
reload: function reload() { [native code] }
replace: function replace() { [native code] }
search: ""
toString: function toString() { [native code] }
__proto__: LocationPrototype
*/
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;  // use it with queryStrings.
```
- For instance if you type in *?id=1*, the url will show 
http://127.0.0.1:5500/index.html?id=1
	
We can extract the query string values from the URL and use it in our script; or 
create links that people click on; or get forms that people submit with these parameters.

**Redirect** - ```window.location.href = 'http://google.com';```

**Reload** - ```window.location.reload();```

#### History Object:
- will get your browsing history
```JavaScript
window.history.go(-2);
val = window.history.length;
```

#### Navigator Object:
- has to do with the browser itself
```JavaScript
val = window.navigator;
/*
[object Navigator]: {activeVRDisplays: Array, appCodeName: "Mozilla", appName: "Netscape", appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18362", cookieEnabled: true...}
activeVRDisplays: Array
appCodeName: "Mozilla"
appName: "Netscape"
appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18362"
cookieEnabled: true
credentials: CredentialsContainer
doNotTrack: null
geolocation: Geolocation
hardwareConcurrency: 8
language: "en-US"
languages: Array
maxTouchPoints: 0
mediaDevices: MediaDevices
mimeTypes: Array
msManipulationViewsEnabled: true
onLine: true
platform: "Win32"
plugins: Array
product: "Gecko"
productSub: "20030107"
serviceWorker: ServiceWorkerContainer
userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18362"
vendor: ""
vendorSub: ""
webdriver: false
__proto__: NavigatorPrototype
*/
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; // if windows do.. if mac do …
val = window.navigator.vendor;
val = window.navigator.language;  // en-US
```




### Block Scope With LET & CONST

#### Example 1.
```JavaScript
// Global Scope
var a = 1;
let b = 2;
const c = 3;

console.log('Global Scope : ', a, b, c);

// Output:
// Global Scope : 1 2 3

```
#### Example 2.
```JavaScript
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
```
- the second a, b, and c declarations are inside a functions - meaning they are in a different scope, so they become different variables.
- **Var** is a functions scope declaration – meaning, you can have a different variable with the same name inside a function.
- A **block level scope** is anything that is wrapped inside a{}, an if statement, …

#### Example 3.
```JavaScript
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

//*let and const have not changed and are still the same in the global scope.*
```
##### Example 4.
```JavaScript
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
```
