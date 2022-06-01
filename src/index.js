import _ from 'lodash';
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import getTodos from './modules/get_todo.js';


const todoElement = document.querySelector('.todoList');

const todos = getTodos.sortArray(getTodos.allTodos());

// This is the part that loads the objects
function init() {
  if (todos.length === 0) {
    todoElement.innerHTML = '';
  } else {
    todos.forEach((td) => getTodos.displayTodos(td, todoElement));
  }
}

console.log(todos)
document.addEventListener('DOMContentLoaded', init);