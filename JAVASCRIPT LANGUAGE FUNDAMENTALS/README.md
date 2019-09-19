# JAVASCRIPT LANGUAGE FUNDAMENTALS

## Create a Simple HTML structure – 
–	VS-Code includes emit by default which allows us to use shortcuts 
! tab    for basic HTML structure.
–	Open file with Life Server  right click ‘open with life server’
–	Run page with Life Server  Ctrl + S to save the page and it will update automatically
–	Open up console in browser  F12
–	You can write all the code inside the console, change and manipulate the document
–	You can also print output to console 
## Log to the Console - from your JavaScript file.
### Log to console - string
```JavaScript
console.log('Hello World');  this will print out to the console
```
Hello World

### Log arrays to the console:
```JavaScript
console.log([1,2,3,4]);
```
 [object Array]: [1, 2, 3, 4]
0: 1
1: 2
2: 3
3: 4

length: 4

### Log objects - this is an object literal
```JavaScript
console.log({a:1, b:2});
```
[object Object]: {a: 1, b: 2}
a: 1
b: 2
__proto__: Object

–	Print out the object on the console as a table -> ```console.table({a:1, b:2});```
–	Pring out as an error; this will print out in red ->``` console.error('This is an error');```
–	Print out a warning   ->```   console.warn('this is a warning');```
–	Clear the console   ->```   console.clear();```
–	Display how long something takes in your script to process ->
 ```JavaScript 
 console.time('Some text');
   // script here ... 
console.time('Some text');
```


## Variables and Declaration
### var, let, const
```JavaScript
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);
```

### Init var
```JavaScript
var greeting;
console.log(greeting);  -> undefined
```
*	To comment everything out  Highlight everything and Crtl + / *
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
[object Object]: {age: 31, name: "Sarah"}
 const numbers = [1,2,3,4];
 numbers.push(5);
 console.log(numbers);
[object Array]: [1, 2, 3, 4, 5]
//can't do (assign a new array)->
 numbers = [1,2,3,4,5,6,7];
0: Assignment to const
```
## Primitive Data Types vs. Reference Types
JavaScript is a Dynamically Typed Language. 
–	Types are associated with values not variables
–	The same variable can hold multiple types
–	We do not need to specify types
–	There are supersets of JS and addons to allow static typing (TypeScript, Flow)

### PRIMITIVE  
- The data is stored directly in the location that the variable accesses;
- it's stored on the stack - when you access a primitive type you access its actual value.


#### String
```JavaScript
const name = 'John Doe';
console.log(typeof name);  //string
```
#### Number
```JavaScript
const age = 45;
```
#### Boolean
```JavaScript
const hasKids = true;
```
#### Null
```JavaScript
const car = null;
```
#### Undefined
```JavaScript
let test;
```
#### Symbol
```JavaScript
const sym = Symbol();
```

### REFERENCE TYPES – Objects

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
val = String(4+4);  // this will override val
// Output
console.log(val);   8
console.log(typeof val);    string 
console.log(val.length);    1
```
### Bool to String
```JavaScript
val = String(true);
// Output
console.log(val);    true
console.log(typeof val);    string
console.log(val.length);    4
```
### Date to String
```JavaScript
val = String(new Date());
// Output
console.log(val);    Sun Jul 14 2019 14:21:22 GMT-0400 (Eastern Daylight Time)
console.log(typeof val);   string
console.log(val.length);    57
```
### Array to String
```JavaScript
val = String([1,2,3,4]);
// Output
console.log(val);   1,2,3,4
console.log(typeof val);    string
console.log(val.length);    7

In addition to the String() function, you can also use the toString() method..
val = (5).toString();
val = (true).toString();
```
### String to number
```JavaScript
val = Number('5');
Output
console.log(val);  5
console.log(typeof val);    number
```
### toFixed() - allows us to specify decimals.
```JavaScript
console.log(val.toFixed(2));   5.00

In addition to the Number() function, you can also use the parseInt() method..
val = parseInt('5');
val = parseFloat('105.50');  -- for decimals
```

## Numbers & The Math Object
```JavaScript
const num1 = 100;
const num2 = 50;
let val;

Simple math with numbers
val = num1 + num2;
val = num1 * num2;

Math Object
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

val = Math.floor(Math.random() * 20 + 1);   this will give you a random whole number; 20 is the max number that we want

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
```
### Concatenation
```JavaScript
val = firstName + ' ' + lastName;
```
### Append
```JavaScript
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
```
### Escaping
```JavaScript
val =  'That\'s awesome, I can\'t wait';
```
### Length
```JavaScript
val = firstName.length;
```
### concat()
```JavaScript
val = firstName.concat(' ', lastName);
```
### Change case
```JavaScript
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];
```
### indexOf()
```JavaScript
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
```
### charAt()
```JavaScript
val = firstName.charAt('2');
```
### Get last char
```JavaScript
val = firstName.charAt(firstName.length - 1);
```
### subString()
```JavaScript
val = firstName.substring(0, 4);
```
### slice()
```JavaScript
val = firstName.slice(0,4);
val = firstName.slice(-3);
```
### split()
```JavaScript
val = str.split(' ');   This will give us an array
				[object Array]: ["Hello", "there", "my", "name", "is", "Brad"]
0: "Hello"
1: "there"
2: "my"
3: "name"
4: "is"
5: "Brad"
length: 6

val = tags.split(',');
				[object Array]: ["web design", "web development", "programming"]
0: "web design"
1: "web development"
2: "programming"
length: 3
```
### replace()
```JavaScript
val = str.replace('Brad', 'Jack');
```
### includes()
```JavaScript
val = str.includes('foo');

console.log(val);

```
## Template Literals

	A lot of times, you will be inserting HTML from JavaScript; when you fetch something through Ajax and you want to put in something in an unordered list or a table with dynamic data, you going to do that with JavaScript.
const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

Without template strings (es5)
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

With template strings (es6)
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

Output: 
•	Name: John
•	Age: 31
•	Job: Web Developer
•	City: Miami
•	4
•	hello
•	Over 30
Arrays & Array Methods
Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

Get array length
val = numbers.length;
Check if is array
val = Array.isArray(numbers);
Get single value
val = numbers[3];
val = numbers[0];
Insert into array
numbers[2] = 100;
Find index of value
val = numbers.indexOf(36);

MUTATING ARRAYS
Add on to end
numbers.push(250);
Add on to front
numbers.unshift(120);
Take off from end
numbers.pop();
Take off from front
numbers.shift();
Splice values
numbers.splice(1,3);
Reverse
numbers.reverse();
Concatenate array
val = numbers.concat(numbers2);
Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use the "compare function" to sort an array of numbers from low to high
val = numbers.sort(function(x, y){
    return x - y;
});

Reverse sort
val = numbers.sort(function(x, y){
  return y - x;
});

Find - returns the first value
function over50(num){
  return num > 50;
}
val = numbers.find(over50);

console.log(numbers);
console.log(val);


Object Literals

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
  
  array of objects
  const people = [  
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 40}
  ];
  
  for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
  }


Date & Time

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
If Statements & Comparison Operators


