// Mouse Events

	const clearBtn = document.querySelector('.clear-tasks');  // button on the form
	const card = document.querySelector('.card');	// the whole form
	const heading = document.querySelector('h5');	// form title

// Click
	clearBtn.addEventListener('click', runEvent);
// Doubleclick
	clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
	clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
	clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
	card.addEventListener('mouseenter', runEvent);
// Mouseleave
	card.addEventListener('mouseleave', runEvent);
// Mouseover
	card.addEventListener('mouseover', runEvent);
// Mouseout
	card.addEventListener('mouseout', runEvent);
// Mousemove
	card.addEventListener('mousemove', runEvent);

//Event Handler

	function runEvent(e) {
	  console.log(`EVENT TYPE: ${e.type}`); // returns the event type spots the location of the event
	  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`; 	  
	  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`; // changes the color as you move around -
	}
