import getTodos from './get_todo.js';
import addTodo from './add_todo.js';

class updateTodo {
    static itodos = getTodos.allTodos();

    static changeDesc = (todotaks, id) => {
      // Get todo from localstorage
      const todos = getTodos.allTodos();
      todos.forEach((todo) => {
        // console.log(todotaks);
        if (todo.index === Number(id)) {
          todo.description = todotaks;
        }
        return todo;
      });

      addTodo.storeTodo(JSON.stringify(todos));
      console.log(todos);
    }

    static deleteAllMarked = () => {
      // const todoElement = document.querySelector('.todoList');

      const newTodoList = this.itodos.filter((t) => {
        if (t.completed !== true) return true;
        return null;
      });
      console.log(newTodoList);
      const reset = newTodoList.map((e, i) => {
        e.index = i + 1;
        return e;
      });
      console.log(reset);
      addTodo.storeTodo(JSON.stringify(reset));
      window.location.reload();
    }

    // Old Reset
    static refreshId = (tasks) => {
      for (let i = 0; i < tasks.length; i += 1) tasks[i].index = i;
      return tasks;
    }
}

export default updateTodo;