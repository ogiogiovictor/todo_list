import getTodos from './get_todo.js';
import addTodo from './add_todo.js';

class updateCheckbox {
    static changeStatus = (todotaks, id) => {
      // Get todo from localstorage
      const todos = getTodos.allTodos();
      todos.forEach((todo) => {
        // console.log(todotaks);
        if (todo.index === Number(id)) {
          if (todo.completed === true) {
            todo.completed = false;
          } else {
            todo.completed = true;
          }
        }
        return todo;
      });

      const todoElement = document.querySelector('.todoList');
      addTodo.storeTodo(JSON.stringify(todos));
      window.location.reload();
    }
}

export default updateCheckbox;