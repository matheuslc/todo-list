import angular from 'angular';

let Confirm = function() {
  return {
    template: `<div class="confirm-message" ng-show="isOpened">
      <p class="alert-confirm-message">
        I hope that todo isn't important to you, because it was deleted!
      </p>
        <button class="alert-msg-btn-confirm" type="button" ng-click="confirm()">Do it!</button>
        <button class="alert-msg-btn-close" type="button" ng-click="close()">No!</button>
    </div>`,

    link: function($scope, $element, $attrs) {
      $scope.isOpened = false;
      $scope.selectedTodo = {};

      $scope.confirm = function() {
        $scope.t.deleteTodo($scope.selectedTodo);

        $scope.close();
      }

      $scope.open = function(todo) {
        if (!$scope.isOpened) {
          $scope.isOpened = true;
          $scope.selectedTodo = todo;
        }
      }

      $scope.close = function() {
        $scope.isOpened = false;
      }
    }
  }
}

export { Confirm };
