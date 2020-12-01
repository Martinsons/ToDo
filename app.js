const todoInput = document.querySelector('#todo-input');
const todoBtn = document.querySelector('#btn');
const todoList = document.querySelector('.todo-list');

todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(e){
    e.preventDefault();

    const todoBox = document.createElement('div');
    todoBox.classList.add('todo-box');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoBox.appendChild(newTodo);

    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.classList.add('complete-btn');
    todoBox.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');
    todoBox.appendChild(deleteBtn);

    todoList.appendChild(todoBox);

    todoInput.value = '';
}

function deleteCheck(e) {
    console.log('111');

    const item = e.target;

    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}