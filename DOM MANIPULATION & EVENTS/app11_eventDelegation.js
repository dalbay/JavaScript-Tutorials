/*
We could have added the event listener to the ul tag.  
For demo purpose, we added the event listener to the body tag; and as a result, if we click anywhere inside the body the event will be fired up.  
To get the a tag, we need to check inside the deleteItem function the target element that fires the event. 
*/
	document.body.addEventListener('click', deleteItem);

	function deleteItem(e) {
	    if (e.target.parentElement.className === 'delete-item secondary-content') {
	        console.log('delete item');
	    }
	    // a better way would be to use .classList just in case we want to add another class in the future to one of the a tags.
	    if (e.target.parentElement.classList.contains('delete-item')) {
	        console.log('delete item');
	        e.target.parentElement.parentElement.remove(); //this will remove the li tag 
	    }
	}