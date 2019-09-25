# DOM Manipulation & Events
**Examining the Document object for this project**
- index.html file:
```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <title>Task List</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <div id="main" class="card">
                    <div class="card-content">
                        <span class="card-title">Task List</span>
                        <div class="row">
                            <form id="task-form">
                                <div class="input-field col s12">
                                    <input type="text" name="task" id="task" value="Walk the dog">
                                    <label for="task">New Task</label>
                                </div>
                        </div>
                        <input type="submit" value="Add Task" class="btn">
                        </form>
                    </div>
                    <div class="card-action">
                        <h5 id="task-title">Tasks</h5>
                        <ul class="collection">
                            <li class="collection-item">
                                List Item
                                <a href="#" class="delete-item secondary-content">
                                    <i class="fa fa-remove"></i>
                                </a>
                            </li>
                            <li class="collection-item">
                                List Item
                                <a href="#" class="delete-item secondary-content">
                                    <i class="fa fa-remove"></i>
                                </a>
                            </li>
                            <li class="collection-item">
                                List Item
                                <a href="#" class="delete-item secondary-content">
                                    <i class="fa fa-remove"></i>
                                </a>
                            </li>
                            <li class="collection-item">
                                List Item
                                <a href="#" class="delete-item secondary-content">
                                    <i class="fa fa-remove"></i>
                                </a>
                            </li>
                            <li class="collection-item">
                                List Item
                                <a href="#" class="delete-item secondary-content">
                                    <i class="fa fa-remove"></i>
                                </a>
                            </li>
                        </ul>
                        <a class="clear-tasks btn black" href="#">Clear Tasks</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.js"
        integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
    <script src="app.js"></script>
</body>

</html>
```
![project dom](./images/domImg.png)
```JavaScript
let val;

val = document.all[1];
console.log(val);
/*
	OUTPUT:
	<head>...</head>
*/

val = document.URL;
console.log(val);
/*
	OUTPUT:
	http://127.0.0.1:5500/index.html
*/

// val = document.forms[0].id;
val = document.forms;
console.log(val);
/*
	OUTPUT:
	HTMLCollection [form#task-form, task-form: form#task-form]
	0: form#task-form
	length: 1
	task-form: form#task-form
	__proto__: HTMLCollection
*/

val = document.links[0].className;
console.log(val);
/*
	OUTPUT:
	delete-item secondary-content
*/

val = document.scripts;
console.log(val);
/*
	OUTPUT:
	HTMLCollection(3) [script, script, script]
	0: script
	1: script
	2: script
	3: script
	length: 4
	__proto__: HTMLCollection
*/

// you can turn HTML collections into arrays to use forEach looping
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
/*
	OUTPUT:
	https://code.jquery.com/jquery-3.2.1.js
	https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js
	app.js
*/
```
## DOM Selectors for Single Elements
### document.getElementById()
```JavaScript
	const taskTitle = document.getElementById('task-title');

	// Change styling
	 taskTitle.style.color = 'red';
	 taskTitle.style.padding = '5px';

	// Change content
	taskTitle.textContent = 'Task List';
	taskTitle.innerText = 'My Tasks';
	taskTitle.innerHTML = '<span style="color:red">Task List</span>';
```
### document.querySelector()
```JavaScript
	// Change styling
	document.querySelector('li').style.color = 'red';
	document.querySelector('ul li').style.color = 'blue';
	document.querySelector('li:last-child').style.color = 'red';
	document.querySelector('li:nth-child(3)').style.color = 'yellow';
	document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
```
## DOM Selectors for Multiple Elements
### document.getElementsByClassName()
```JavaScript
	const items = document.getElementsByClassName('collection-item');

	console.log(items);
	/* OUTPUT:
	HTMLCollection(5)
		0: li.collection-item
		1: li.collection-item
		2: li.collection-item
		3: li.collection-item
		4: li.collection-item
		length: 5
		__proto__: HTMLCollection
	*/
	console.log(items[0]);  // the first li item in the HtmlCollection

	// Change styling

	 items[0].style.color = 'red';
	 items[3].textContent = 'Hello';
```
### document.getElementsByTagName()
```JavaScript
 let lis = document.getElementsByTagName('li');
 console.log(lis);		
 /* OUTPUT - same result as above
    HTMLCollection(5)
        0: li.collection-item
        1: li.collection-item
        2: li.collection-item
        3: li.collection-item
        4: li.collection-item
        length: 5
        __proto__: HTMLCollection
  */ 
 console.log(lis[0]);	// the first li item in the HtmlCollection
 
 // Change styling
 
 lis[0].style.color = 'red';
 lis[3].textContent = 'Hello';
```
### document.querySelectorAll()
- querySelectorAll will returns a Node-List
- A Node-List will not just count elements but also Text nodes
- We don’t have to convert it to an array to loop through it
```JavaScript
 const items = document.querySelectorAll('ul.collection li.collection-item');
 console.log(items);
 /* OUTPUT:
    NodeList(5)
        0: li.collection-item
        1: li.collection-item
        2: li.collection-item
        3: li.collection-item
        4: li.collection-item
        length: 5
        __proto__: NodeList
  */
 
 //Change styling/
 const liOdd = document.querySelectorAll('li:nth-child(odd)');
 
 liOdd.forEach(function(li, index){
   li.style.background = '#ccc';
 });
```
![project dom](./images/domImg1.png)
## Traversing the DOM

### Selecting elements
```JavaScript
let val;
const list = document.querySelector('ul.collection');
/* OUTPUT:
    <ul class="collection">
    <li class="collection-item">...</li>
    <li class="collection-item">...</li>
    <li class="collection-item">...</li>
    <li class="collection-item">...</li>
    <li class="collection-item">...</li>
    </ul>
*/
const listItem = document.querySelector('li.collection-item:first-child');
console.log(list);
/* OUTPUT:    
    <li class="collection-item">
        List Item<a class="delete-item secondary-content" href="#">...</a>
    </li>
*/
val = listItem;
val = list;
```
### Get child nodes
- Will also count the text nodes 
- Returns a nodeList
val = list.childNodes;
```JavaScript
console.log(list);
/* OUTPUT: 
	<NodeList length="11">
		EmptyTextNode
		<li class="collection-item">...</li>
		EmptyTextNode
		<li class="collection-item">...</li>
		EmptyTextNode
		<li class="collection-item">...</li>
		EmptyTextNode
		<li class="collection-item">...</li>
		EmptyTextNode
		<li class="collection-item">...</li>
		EmptyTextNode
	</NodeList>
*/
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType; // nodeType will returns a number
```
Node Type by number:
- 1 Element
- 2 Attribute (deprecated)
- 3 Text node
- 8 Comment
- 9 Document itself
- 10 Doctype

### Get children element nodes
- Will only count the elements
- Returns an HtmlCollection
val = list.children;
```html
/* OUTPUT:
	<HtmlCollection length="5">
		<li class="collection-item">...</li>
		<li class="collection-item">...</li>
		<li class="collection-item">...</li>
		<li class="collection-item">...</li>
		<li class="collection-item">...</li>
	</HtmlCollection>
*/
```
#### Get an Element from the Children
```JavaScript
val = list.children[1];
list.children[1].textContent = 'Hello';
```
#### Children of children
```JavaScript
val = list.children[3].children;
list.children[3].children[0].id = 'test-link';
```
#### First child
```JavaScript
val = list.firstChild;  // returns first node, whether it’s an element/text,...
```
#### First Element Child
```JavaScript
val = list.firstElementChild;  // returns first actual element.
```
#### Last child
```JavaScript
val = list.lastChild;  // returns last node, whether it’s an element/text,...
```
#### Last Element child
```JavaScript
val = list.lastElementChild; // returns last actual element.
```
#### Count child elements
```JavaScript
val = list.childElementCount;
```
### Get parent node
```JavaScript
val = listItem.parentNode;
val = listItem.parentElement; // most cases it will be the same.
```

#### Parent of Parent
```JavaScript
val = listItem.parentElement.parentElement;
```

#### Get next sibling
```JavaScript
val = listItem.nextSibling; // returns next node, whether it’s an element/text 
val = listItem.nextElementSibling;  // returns next actual element
```
#### Move to the other siblings
```JavaScript
val = listItem.nextElementSibling.nextElementSibling;
```

#### Get previous sibling
```JavaScript
val = listItem.previousSibling;  returns previous node; element/text
val = listItem.previousElementSibling;   returns previouis actual element
```

### Creating Elements

- Create element
```JavaScript
const li  = document.createElement('li');
```
- Add class
```JavaScript
li.className = 'collection-item';
```
- Add id
```JavaScript
li.id = 'new-item';
```
- Add attribute
```JavaScript
li.setAttribute('title', 'New Item');
```
- Create text node and append
```JavaScript
li.appendChild(document.createTextNode('Hello World'));
```
- Create new link element
```JavaScript
const link = document.createElement('a');
```
- Add classes
```JavaScript
link.className = 'delete-item secondary-content';
```
- Add icon html
```JavaScript
link.innerHTML = '<i class="fa fa-remove"></i>';  materialize.min.js add-on
Append link into li
li.appendChild(link);
```
- Append li as child to ul
```JavaScript
document.querySelector('ul.collection').appendChild(li);

console.log(li);
```
### Removing & Replacing Elements
#### Replace Elements

- Example – replacing h5 with an h2 element;

- Get the Element
```JavaScript
const newHeading = document.createElement('h2');
```
- Add an Id
```JavaScript
newHeading.id = 'task-title';
```
- Create New Text Node
```JavaScript
newHeading.appendChild(document.createTextNode('Task List'));
```
- Get the Old Element
```JavaScript
const oldHeading = document.getElementById('task-title');
```
- Get the Parent
```JavaScript
const cardAction = document.querySelector('.card-action');
```
- Replace the Nodes
```JavaScript
cardAction.replaceChild(newHeading, oldHeading);
```
#### Remove Element

- Get the Element
```JavaScript
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
```
- Remove list item
```JavaScript
lis[0].remove();
```
- Remove child element
```JavaScript
list.removeChild(lis[3]);   Same result as above
```

#### Classes & Attributes
```JavaScript
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];  // we are calling the a tag.

let val;
```
- Classes:
```JavaScript
val = link.className;   returns a string of the class names.
val = link.classList;   returns a DOMTokenList, which is set up like an array
val = link.classList[0];
link.classList.add('test');   to add a class 
link.classList.remove('test');   to remove a class
val = link;  
```
- Attributes:
```JavaScript
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);
```


