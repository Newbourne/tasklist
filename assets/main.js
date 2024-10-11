const inputTask = document.querySelector('.input-task');
const addTask = document.querySelector('.add-task');
const task = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
}

function createTask(inputText) {
    const li = createLi();
    li.innerText = inputText;
    task.appendChild(li);
}

addTask.addEventListener('click', function() {
if (!inputTask.value) return;
createTask (inputTask.value);
})