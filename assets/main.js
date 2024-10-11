const inputTask = document.querySelector('.input-task');
const addTask = document.querySelector('.add-task');
const task = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
}

function createDeleteButton(li) {
    li.innerText += ' '
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('class', 'delete');
    deleteButton.setAttribute('title', 'Delete this task');
    li.appendChild(deleteButton);
}

inputTask.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
if (!inputTask.value) return;
createTask (inputTask.value);
    }
});

function cleanInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createTask(inputText) {
    const li = createLi();
    li.innerText = inputText;
    task.appendChild(li);
    cleanInput();
    createDeleteButton(li);
    saveTask();
}

addTask.addEventListener('click', function() {
if (!inputTask.value) return;
createTask (inputTask.value);
});

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('delete')){
        el.parentElement.remove();
        saveTask();
    }
});

function saveTask() {
    const liTask = task.querySelectorAll('li');
    const taskList = [];

    for(let task of liTask) {
        let textTask = task.innerText;
        textTask = textTask.replace('Delete', '').trim();
        taskList.push(textTask);
    }

    const taskJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', taskJSON);

}

function addSavedTasks () {
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);
    for (let tasks of taskList) {
    createTask(tasks);
    }
}
addSavedTasks();