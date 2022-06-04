import getTodos from './get_todo.js';
import addTodo from './add_todo.js';
import updateTodo from './update_todo.js';

// const todoElement = document.querySelector('.todoList');

class deleteTodo {
    static removeBookUI = (element) => {
      if (element.classList.contains('btn')) {
        element.parentElement.parentElement.remove();
      }
    }

    static removeFromLocalStorage = (index) => {
      const todos = getTodos.allTodos();
      const newTodo = todos.filter((td) => td.index !== Number(index));
      // console.log(newTodo);
      // updateTodo.refreshId(newTodo);
      addTodo.storeTodo(JSON.stringify(newTodo));
    }
}

export default deleteTodo;