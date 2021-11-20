//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter');

//Event Listeners
todoButton.addEventListener('click', addTodo);

todoList.addEventListener('click', deleteCheck);

filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    // create div by clicking
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');//add class

    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value; //il valore scritto dentro l'input, viene stampato nel LI
    newTodo.classList.add('todo-item');
    //attached li in the div
    todoDiv.appendChild(newTodo);

    //COMPLETED BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';//check icon
    completedButton.classList.add('completed-btn'); //add class
    todoDiv.appendChild(completedButton); //append to div

    //DELETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; //trash icon
    deleteButton.classList.add('delete-btn'); //add class
    todoDiv.appendChild(deleteButton); //append to div

    //APPEND DIV TO LIST
    todoList.appendChild(todoDiv);

    //Clear input value after adding the new LI
    todoInput.value = '';
}

function deleteCheck(e){
const item = e.target;
//delete
if(item.classList[0] === 'delete-btn'){
    const todo = item.parentElement;
    todo.classList.add('fall');  //animation
    todo.addEventListener('transitionend', function(){ //wait the end of the animation-transition
        todo.remove(); //remove LI
    })
}

//check
if(item.classList[0] === 'completed-btn'){
    const todo = item.parentElement;
    todo.classList.toggle('completed'); //attiva la classe 
}
}

//FILTER
function filterTodo(e){
const todos = todoList.childNodes;
todos.forEach(function(todo){
    switch(e.target.value){
        case 'all' : 
        todo.style.display = 'flex';
        case 'completed':
            if(todo.classList.contains('completed')){
                todo.style.display = 'flex';
            } else {
                todo.style.display = 'none';
            }
    }
})
}