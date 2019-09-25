// Keyboard & Input Events

	const form = document.querySelector('form'); 
	const taskInput = document.getElementById('task');

	form.addEventListener('submit', runEvent);

	function runEvent(e){
	  console.log(`EVENT TYPE: ${e.type}`);
	  console.log(taskInput.value);
	  e.preventDefault();
	}


// Event Types:
// Submit
	form.addEventListener('submit', runEvent);
// Keydown
	taskInput.addEventListener('keydown', runEvent);
// Keydown
	taskInput.addEventListener('keyup', runEvent);
//Keypress
	taskInput.addEventListener('keypress', runEvent); // generalized key event
// Focus
	taskInput.addEventListener('focus', runEvent); 
// Blur
	taskInput.addEventListener('blur', runEvent); // opposite of focus(click out)
// Cut
	taskInput.addEventListener('cut', runEvent); // right click and cut Ctrl+x
// Paste
	taskInput.addEventListener('paste', runEvent); // right click and paste Ctrl+v
// Input
	taskInput.addEventListener('input', runEvent); // any input(cut,past,focus,…)
// Change
/*<select>
	  <option value="1">1</option>
	  <option value="2">2</option>
	  <option value="3">3</option>
  </select>
(Note: When using materialize.js we need to use some jQuery to see it on the page. )
*/
const select = document.querySelector('select');
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value); // value of the element it happens on (input)
  heading.innerText = e.target.value; // input changes the heading with keydown
  e.preventDefault();
}
