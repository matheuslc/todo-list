import angular from 'angular';

export default class TodoListController {
  constructor($scope) {
    this.$scope = $scope;
    this.$scope.todos = [];
    this.$scope.error = 'Not yet :)';
  }

  addTodo(todo) {
    if (todo.text.length > 5) {
      this.$scope.todos.push(angular.copy(todo));

      todo = null;
    } else {
      this.$scope.error = 'Please! A to-do with 5 caracters min.'
    }
  }

  editItem(todo) {
    todo.editing = true;
  }

  doneEditing(todo) {
    todo.editing = false;
  }

  deleteTodo(todo) {
    let index = this.$scope.todos.indexOf(todo);

    return !!this.$scope.todos.splice(index, 1);
  }

  toggleTodoStatus(todo) {
    let index = this.$scope.todos.indexOf(todo);

    if (this.$scope.todos[index].done) {
      this.$scope.todos[index].done = false;

      return;
    }

    this.$scope.todos[index].done = true;
  }
}
