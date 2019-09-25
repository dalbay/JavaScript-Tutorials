// let val;

// val = document;
// console.log(val);
// val = document.all;
// console.log(val);
// val = document.all[1];
// console.log(val);
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');
// console.log(val);

// //you can turn HTML collections into arrays to use forEach looping
// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);


// // *** document.getElementById() ***

// const taskTitle = document.getElementById('task-title');

// // Change styling
//  taskTitle.style.color = 'red';
//  taskTitle.style.padding = '5px';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';


// // *** document.querySelector() ***

// // Change styling
// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

// // *** getElementsByClassName() ***
// const items = document.getElementsByClassName('collection-item');

// //console.log(items);
// /* OUTPUT:
// HTMLCollection(5)
//     0: li.collection-item
//     1: li.collection-item
//     2: li.collection-item
//     3: li.collection-item
//     4: li.collection-item
//     length: 5
//     __proto__: HTMLCollection
// */
// //console.log(items[0]);  // the first li item in the HtmlCollection

// // Change styling

//  items[0].style.color = 'red';
//  items[3].textContent = 'Hello';




//  //  *** document.getElementsByTagName ***

//  let lis = document.getElementsByTagName('li');
//  //console.log(lis);		
//  /* OUTPUT - same result as above
//     HTMLCollection(5)
//         0: li.collection-item
//         1: li.collection-item
//         2: li.collection-item
//         3: li.collection-item
//         4: li.collection-item
//         length: 5
//         __proto__: HTMLCollection
//   */ 
//  console.log(lis[0]);	// the first li item in the HtmlCollection
 
//  // Change styling
 
//  lis[0].style.color = 'red';
//  lis[3].textContent = 'Hello'; 
 
 
 
//  //  *** document.querySelectorAll ***

//  const items = document.querySelectorAll('ul.collection li.collection-item');
//  console.log(items);
//  /* OUTPUT:
//     NodeList(5)
//         0: li.collection-item
//         1: li.collection-item
//         2: li.collection-item
//         3: li.collection-item
//         4: li.collection-item
//         length: 5
//         __proto__: NodeList
//   */
 
//  //Change styling/
//  const liOdd = document.querySelectorAll('li:nth-child(odd)');
 
//  liOdd.forEach(function(li, index){
//    li.style.background = '#ccc';
//  });


//  ----------------------------------------------

 


let val;

//Selecting elements
const list = document.querySelector('ul.collection');
console.log(list);
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

//   *** Get child nodes***

val = list.childNodes;

val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType; 
	

// Event Listener with Named Function

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');
  let val;
  // Event target element - Represents the element that the event actually happened on 
  val = e;
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  // Event type - in this case a click
  val = e.type;   
  // Timestamp
  val = e.timeStamp;
  // Coordinates of the Even Relative to the window
  val = e.clientY;
  val = e.clientX;
  // Relative to the Element Itself
  val = e.offsetY;
  val = e.offsetX;
  
  console.log(val);
}

const form = document.querySelector('form'); 
const taskInput = document.getElementById('task');

form.addEventListener('submit', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(taskInput.value);
  e.preventDefault();
}

