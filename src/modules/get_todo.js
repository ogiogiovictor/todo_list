import defaultTodos from './default_todo.js';

class getTodos {
   static allTodos = () => {
     let todos = JSON.parse(localStorage.getItem('todos'));

     if (!todos) {
       todos = defaultTodos;
       return todos;
     }

     return todos;
   }

   static displayTodos(todo, el) {
     const item = document.createElement('li');
     item.innerHTML = `
          <input type="checkbox" name="check" />
          ${todo.description}
          <span class="push-trash"><i data-id="${todo.id}"  class="fas fa-trash-alt"></i>'</span>
        `;
     el.appendChild(item);
   }

     static sortArray = (arr) => arr.sort((a, b) => b.index - a.index)
}

export default getTodos;