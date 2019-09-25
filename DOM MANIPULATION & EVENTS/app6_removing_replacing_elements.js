// Removing & Replacing Elements

// Replace Elements

*//Example – replacing h5 with an h2 element;*

//1. Get the Element

	const newHeading = document.createElement('h2');

//2. Add an Id

	newHeading.id = 'task-title';

//3. Create New Text Node

	newHeading.appendChild(document.createTextNode('Task List'));

//4. Get the Old Element

	const oldHeading = document.getElementById('task-title');

//5. Get the Parent

	const cardAction = document.querySelector('.card-action');

//6. Replace the Nodes

	cardAction.replaceChild(newHeading, oldHeading);

// Remove Element

// Get the Element

	const lis = document.querySelectorAll('li');
	const list = document.querySelector('ul');

// Remove list item

	lis[0].remove();

// Remove child element

	list.removeChild(lis[3]);   Same result as above


// Classes & Attributes

	const firstLi = document.querySelector('li:first-child');
	const link = firstLi.children[0];  // we are calling the a tag.

	let val;

// Classes:

	val = link.className;  // returns a string of the class names.
	val = link.classList;  // returns a DOMTokenList, which is set up like an array
	val = link.classList[0];
	link.classList.add('test');  // to add a class 
	link.classList.remove('test'); // to remove a class
	val = link;  

// Attributes:

	val = link.getAttribute('href');
	val = link.setAttribute('href', 'http://google.com');
	link.setAttribute('title', 'Google');
	val = link.hasAttribute('title');
	link.removeAttribute('title');
	val = link;

	console.log(val);