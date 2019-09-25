// Event Listeners & The Event Object

// Event Listener with Unnamed Function

	document.querySelector('.clear-tasks').addEventListener('click', function(e){
	  console.log('Hello World');
	  // put a # tag inside the href, prevents the browser to redirect, or use:
	  // e.preventDefault(); ->this will stop the default behavior(testing purposes) 
	});

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
