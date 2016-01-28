import angular from 'angular';

class TodoListController {
  constructor($scope) {
    this.$scope = $scope;
    this.$scope.todos = [];
  }

  addTodo(todo) {
    this.$scope.todos.push(angular.copy(todo));
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

export default TodoListController
