import getTodos from './get_todo.js';

const todoElement = document.querySelector('.todoList');

class addTodo {
  constructor(index, description, completed = false) {
    this.index = index,
    this.description = description,
    this.completed = completed;
  }

  static storeTodo(todo) {
    return localStorage.setItem('todos', todo);
  }

    static todaArray = getTodos.allTodos();

    static addToArray = (description, completed) => {
      const todo = new addTodo(this.todaArray.length, description, completed);
      this.todaArray.push(todo);
      this.storeTodo(JSON.stringify(this.todaArray));
      getTodos.displayTodos(todo, todoElement);
    }

    static pushtoUI = (inputValue, completed) => {
      const todoArray = this.addToArray(inputValue, completed);
    }
}

export default addTodo;