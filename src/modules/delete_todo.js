import getTodos from './get_todo.js';
import AddTodo from './add_todo.js';
// import updateTodo from './update_todo.js';

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
      // updateTodo.refreshId(newTodo);
      AddTodo.storeTodo(JSON.stringify(newTodo));
    }
}

export default deleteTodo;