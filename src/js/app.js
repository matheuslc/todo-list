import angular from 'angular';

angular.module('todoList', []);

angular.module('todoList')
  .controller('TodoListCtrl', function($scope) {
    $scope.todos = [];

    $scope.addTodo = (todo) => {
      console.log('a');

      $scope.todos.push(angular.copy(todo));

      delete $scope.todo;
    }

    $scope.deleteTodo = (todo) => {
      let index = $scope.todos.indexOf(todo);

      return !!$scope.todos.splice(index, 1);
    }
  });
