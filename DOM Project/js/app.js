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
window.addEventListener('load', loadEventListeners, false);
