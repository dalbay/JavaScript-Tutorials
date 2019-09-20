// ARRAY OBJECT & Array Methods

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

// MUTATING ARRAYS:

// Add on to end
numbers.push(250);

// Add on to front
numbers.unshift(120);

// Take off from end
numbers.pop();

// Take off from front
numbers.shift();

// Splice values
numbers.splice(1,3);

// Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use the "compare function" to sort an array of numbers from low to high
val = numbers.sort(function(x, y){
    return x - y;
});

// Reverse sort
val = numbers.sort(function(x, y){
  return y - x;
});

// Find - returns the first value
function over50(num){
  return num > 50;
}
val = numbers.find(over50);

console.log(numbers);
console.log(val);

// Object Literals
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

 // Array of Objects
  const people = [  
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 40}
  ];
  
  for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
  }