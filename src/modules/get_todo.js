import default_todos from "./default_todo";

class getTodos {

   static allTodos = () => {
        
        let todos = JSON.parse(localStorage.getItem('todos'));
    
        if (!todos) {
            todos = default_todos;
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

     static sortArray = (arr) => {
        return arr.sort((a, b) => b.index - a.index);
      }
    
}


export default getTodos;