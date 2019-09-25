//Example – we will have the form put data to our local storage:
 
document.querySelector('form').addEventListener('submit',function(e){
   let task = document.getElementById('task').value;
   localStorage.setItem('task', task);

   e.preventDefault();
 });

/*
 Right now, we can only store one task at a time; the new task will replaced the previous one. We could fix this by creating an array of tasks and store them as a string.
 */
document.querySelector('form').addEventListener('submit', function (e) {
    const task = document.getElementById('task').value;
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []; // sets an empty array if no tasks
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.preventDefault();
});
