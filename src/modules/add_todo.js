import getTodos from './get_todo.js';

const todoElement = document.querySelector('.todoList');

class AddTodo {
  constructor(index, description, completed = false) {
    this.index = index + 1;
    this.description = description;
    this.completed = completed;
  }

  static storeTodo(todo) {
    return localStorage.setItem('todos', todo);
  }

    static todaArray = getTodos.allTodos();

    static addToArray = (description, completed) => {
      const todo = new AddTodo(this.todaArray.length, description, completed);
      this.todaArray.push(todo);
      this.storeTodo(JSON.stringify(this.todaArray));
      getTodos.displayTodos(todo, todoElement);
    }

    static pushtoUI = (inputValue, completed) => {
      this.addToArray(inputValue, completed);
    }
}

export default AddTodo;