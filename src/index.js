// import _ from 'lodash';
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import getTodos from './modules/get_todo.js';
import addTodo from './modules/add_todo.js';
import deleteTodo from './modules/delete_todo.js';
import updateTodo from './modules/update_todo.js';
import updateCheckbox from './modules/update_checkbox.js';

const todoElement = document.querySelector('.todoList');
const inputElement = document.querySelector('.todo-input');
const removeBtn = document.querySelector('#list');
const clearAll = document.querySelector('#clear');

const todos = getTodos.allTodos();
const todoIndex = todos.length;

// This is the part that loads the objects
function init() {
  if (todos.length === 0) {
    todoElement.innerHTML = 'No todo added yet..';
  } else {
    todos.forEach((td) => getTodos.displayTodos(td, todoElement));
  }
}

document.addEventListener('DOMContentLoaded', init);

removeBtn.addEventListener('click', (e) => {
  const getID = e.target.parentElement.parentNode;
  deleteTodo.removeBookUI(e.target.parentElement.parentNode);
  const tid = getID.getAttribute('data-id');
  deleteTodo.removeFromLocalStorage(tid);
});

todoElement.addEventListener('change', (e) => {
  const getID = e.target;
  if (getID.classList[0] === 'desc-input') {
    const id = getID.getAttribute('data-id');
    // const todotaks =  getID.getAttribute('value'); //only shows previous values
    updateTodo.changeDesc(getID.value, id);
  } else if (getID.classList[0] === 'my-checkbox') {
    // console.log(getID.nextElementSibling.classList.remove('completed'));
    if (getID.nextElementSibling.classList.contains('completed')) {
      console.log(getID.nextElementSibling);
      getID.nextElementSibling.classList.remove('completed');
    } else {
      console.log(getID.nextElementSibling);
      getID.nextElementSibling.classList.add('completed');
    }
    const id = getID.getAttribute('data-id');
    updateCheckbox.changeStatus(getID.value, id);
  }
});

clearAll.addEventListener('click', (e) => updateTodo.deleteAllMarked());

inputElement.addEventListener('change', (e) => {
  e.preventDefault();
  addTodo.pushtoUI(inputElement.value, 'false');
  inputElement.value = '';
  window.location.reload();
  inputElement.focus();
});
