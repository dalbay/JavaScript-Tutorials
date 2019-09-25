// *** document.getElementById()

	const taskTitle = document.getElementById('task-title');

// Change styling
	 taskTitle.style.color = 'red';
	 taskTitle.style.padding = '5px';

// Change content
	taskTitle.textContent = 'Task List';
	taskTitle.innerText = 'My Tasks';
	taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// *** document.querySelector()

// Change styling
	document.querySelector('li').style.color = 'red';
	document.querySelector('ul li').style.color = 'blue';
	document.querySelector('li:last-child').style.color = 'red';
	document.querySelector('li:nth-child(3)').style.color = 'yellow';
	document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
