/**
 * @jest-environment jsdom
 */
import addTestTodo from '../modules/addtest_todo';
import getTodos from '../modules/get_todo';
import deleteTodo from '../modules/delete_todo';

jest.mock('../__mocks__/localstorage');
jest.mock('../__mocks__/list');

describe('Add...', () => {
  test('Test Empty Localstorage', () => {
    document.body.innerHTML = '<ul class="todoList"></ul>';
    const local = localStorage.getItem('todos');
    expect(local).toBe(null);
  });

  test('Test Empty DOM', () => {
    document.body.innerHTML = '<ul class="todoList"></ul>';
    getTodos.allTodos();
    expect(document.body.querySelectorAll('li').length).toBe(0);
  });

  test('Test Adding Tasks', () => {
    document.body.innerHTML = '<ul class="todoList"></ul>';

    const input = { value: 'Book 1' };
    const input2 = { value: 'Book 2' };
    addTestTodo(input);
    addTestTodo(input2);
    const local = JSON.parse(localStorage.getItem('todos'));
    expect(local.length).toBe(2);
  });
});

describe('Remove', () => {
  test('removing first one', () => {
    document.body.innerHTML = '<ul class="todoList"></ul>';
    getTodos.allTodos();
    const todos = JSON.parse(localStorage.getItem('todos'));
    const { index } = todos[0];
    // const li = document.getElementById(index);
    deleteTodo.removeFromLocalStorage(index);
    expect(document.querySelectorAll('li').length).toBe(0);
  });
});
