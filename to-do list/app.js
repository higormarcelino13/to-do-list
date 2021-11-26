// selectors

const todoInput = document.querySelector('.todo-input'); // querySelector is a method that returns the first element that matches a specified CSS selector(CSS stands for Cascading Style Sheets)
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//event listeners

todoButton.addEventListener('click', addTodo); // addEventListener is a method that adds an event listener to the selected element.

//functions

function addTodo(event){
    event.preventDefault(); // preventDefault is a method that prevents the default action of an element from happening.}
    const todoDiv = document.createElement('div'); // createElement is a method that creates an element of the specified type and returns it as a DOM element.
    todoDiv.classList.add('todo'); // classList is a property that returns the class list (space-separated list of the element's classes) for the specified element.    
//create LI

const newTodo = document.createElement('li'); //
newTodo.innerText = 'hey';
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

//check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn")
todoDiv.appendChild(completedButton);

//check trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("complete-btn")
todoDiv.appendChild(trashButton);

//append to list

todoList.appendChild(todoDiv); // appendChild is a method that inserts the specified element into the DOM before the specified child element.

}


