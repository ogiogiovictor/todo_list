const documentListTodo = (todo) => {
  const el = document.querySelector('.todoList');

  const item = document.createElement('li');
  item.setAttribute('draggable', 'true');
  item.classList.add('list-item');
  item.setAttribute('datali-id', `${todo.index}`);
  let changeState;
  let checkState;
  if (todo.completed === true) {
    changeState = `<input type="text" class="desc-input completed" id="desc-input" data-id="${todo.index}" name="description" value="${todo.description}" />`;
    checkState = `<input checked type="checkbox" name="check" class="my-checkbox" data-id="${todo.index}"/>`;
  } else {
    changeState = `<input type="text" class="desc-input" id="desc-input" data-id="${todo.index}" name="description" value="${todo.description}" />`;
    checkState = `<input type="checkbox" name="check" class="my-checkbox" data-id="${todo.index}"/>`;
  }
  item.innerHTML = `
         ${checkState}
         ${changeState}
         <span class="push-trash"><button class="btn" data-id="${todo.index}"><i class="fas fa-trash-alt grey-light"></i></button>
         </span>
        
       `;
  el.appendChild(item);
  return el;
};

export default documentListTodo;