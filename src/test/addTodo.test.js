import addTestTodo from '../modules/addtest_todo';
import getTodos from '../modules/get_todo';
import deleteTodo from '../modules/delete_todo';

jest.mock('../__mocks__/localstorage');
jest.mock('../__mocks__/list');

describe('Add...', () => {

    test('Test Empty Localstorage', () => {
      document.body.innerHTML = '<ul class="todoList"></ul>';
      const local = getTodos.allTodos();
      //const local = localStorage.getItem('todos');
      expect(local).toBe(null);
    });

    
});