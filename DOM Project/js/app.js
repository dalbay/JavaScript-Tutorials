// Define UI Vars
//...get form
const form = document.querySelector('#task-form');
//...get ul 
const taskList = document.querySelector('.collection');
//...get text input
const taskInput = document.getElementById('task');
//...general event-listener
function loadEventListeners() {
    //...listen for form submit and call functions addTask
    form.addEventListener('submit', addTask);
    // Remove task event that will remove the task from the list
    taskList.addEventListener('click', removeTask);
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }
    //...create the li elememt
    const li = document.createElement('li');
    li.className = 'collection-item'; // materialize class
    li.appendChild(document.createTextNode(taskInput.value));

    //...create the a tag inside the li element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content'; // materialize class
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //...append link to li
    li.appendChild(link);
    //...append li to ul
    taskList.appendChild(li);

    e.preventDefault();
}

// Create the remove function:
function removeTask(e) {
    // First, target the i tag 
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure?')) { // console confirmation
            // Remove the li tag
            e.target.parentElement.parentElement.remove();
        }
    }
}


window.addEventListener('load', loadEventListeners, false);
