//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);


//Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    // create div by clicking
    const todoDiv = document.createElement('div');
    //add class
    todoDiv.classList.add('todo');


}