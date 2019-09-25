// *** document.getElementsByClassName()

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

// *** document.getElementsByTagName()

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

// *** document.querySelectorAll()
/*
- querySelectorAll will returns a Node-List
- A Node-List will not just count elements but also Text nodes
- We don’t have to convert it to an array to loop through it
*/
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