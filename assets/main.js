const inputTask = document.querySelector('.input-task');
const addTask = document.querySelector('.add-task');
const task = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
}

function createDeleteButton(li) {
    li.innerText += '               '
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
}

addTask.addEventListener('click', function() {
if (!inputTask.value) return;
createTask (inputTask.value);
});

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('delete')){
        el.parentElement.remove();
    }
})