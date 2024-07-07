const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');
const addTaskBtn = document.getElementById('add-task-btn');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});

function addTask(task) {
    fetch('/todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `task=${task}`
    })
   .then(() => {
        getTasks();
    });
}

function getTasks() {
    fetch('/todo')
   .then(response => response.json())
   .then(tasks => {
        todoList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task;
            todoList.appendChild(li);
        });
    });
}

getTasks();