// *** Selecting Elements

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

// *** Get Child Nodes
/*
- Will also count the text nodes 
- Returns a nodeList
*/
val = list.childNodes;
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
/*
Node Type by number:
- 1 Element
- 2 Attribute (deprecated)
- 3 Text node
- 8 Comment
- 9 Document itself
- 10 Doctype
*/

// *** Get Children Element Nodes
/*
- Will only count the elements
- Returns an HtmlCollection
*/
val = list.children;
console.log(val);
/*
 OUTPUT:
	<HtmlCollection length="5">
		<li class="collection-item">...</li>
		<li class="collection-item">...</li>
		<li class="collection-item">...</li>
		<li class="collection-item">...</li>
		<li class="collection-item">...</li>
	</HtmlCollection>
*/

// Get an Element from the Children

	val = list.children[1];
	list.children[1].textContent = 'Hello';

// Children of children

	val = list.children[3].children;
	list.children[3].children[0].id = 'test-link';

// First child

	val = list.firstChild;  // returns first node, whether it’s an element/text,...

// First Element Child

	val = list.firstElementChild;  // returns first actual element.

// Last child

	val = list.lastChild;  // returns last node, whether it’s an element/text,...

// Last Element child

	val = list.lastElementChild; // returns last actual element.

// Count child elements

	val = list.childElementCount;

// Get Parent Node

	val = listItem.parentNode;
	val = listItem.parentElement; // most cases it will be the same.


// Parent of Parent

	val = listItem.parentElement.parentElement;


// Get next sibling

	val = listItem.nextSibling; // returns next node, whether it’s an element/text 
	val = listItem.nextElementSibling;  // returns next actual element

// Move to the other siblings

	val = listItem.nextElementSibling.nextElementSibling;


// Get previous sibling

	val = listItem.previousSibling; // returns previous node; element/text
	val = listItem.previousElementSibling; // returns previouis actual element
