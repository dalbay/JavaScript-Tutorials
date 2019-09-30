// Define UI Vars
//...get form
const form = document.querySelector('#task-form');
//...get ul 
const taskList = document.querySelector('.collection');
//...get text input
const taskInput = document.getElementById('task');
//...general event-listener

// Get the input element with the id=”filter” for filtering
const filter = document.querySelector('#filter');


function loadEventListeners() {
    //...listen for form submit and call functions addTask
    form.addEventListener('submit', addTask);
    // Remove task event that will remove the task from the list
    taskList.addEventListener('click', removeTask);
    //Add a keyup event listener inside the loadAllEventListerners function for the filter const. 
    // Filter tasks event
  filter.addEventListener('keyup',filterTasks);
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


/* We will use the querySelectorAll() method, which returns a nodelist; if we use the getElementByClass() method, which returns an HTMLCollection, we would have to convert the collection to an array in order to use a forEach loop.
*/
// Create the Filter Task Function
function filterTasks(e) {
    // get input text value
    const text = e.target.value.toLowerCase();
    // forEach list in the ul
    document.querySelectorAll('.collection-item').forEach(function (task) {
        // get the textNode value
        const liItem = task.firstChild.textContent;
        if (liItem.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
    // // same as above... we use ‘=>’ instead of ‘function’
    // liCollection = document.querySelectorAll('.collection-item');
    // liCollection.forEach(element => {
    //     const liItem = element.firstChild.textContent;
    //     if (liItem.toLowerCase().indexOf(text) != -1) {
    //         element.style.display = 'block';
    //     } else {
    //         element.style.display = 'none';
    //     }
    // });
}
  




window.addEventListener('load', loadEventListeners, false);
