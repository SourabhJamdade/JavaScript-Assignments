/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.allToDo = [];
  }

  add(todo) {
    this.allToDo.push(todo);
  }
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.allToDo.length)
      this.allToDo.splice(indexOfTodo, 1);
    else
      return;
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.allToDo.length)
      this.allToDo[index] = updatedTodo;
    else
      return;
  }

  getAll() {
    return this.allToDo;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.allToDo.length)
      return this.allToDo[indexOfTodo];
    else
      return null;

  }

  clear() {
    this.allToDo = []
  }
}

module.exports = Todo;