//  String Method & Concatenation

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
