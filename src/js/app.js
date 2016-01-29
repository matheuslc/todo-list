import angular from 'angular';
import TodoListController from './controller/todoListController.js';
import { Confirm } from './directives/confirm.js';

require('../css/main.scss');

angular.module('todoList', [])
  .controller('todoListController', TodoListController)
  .directive('alertMsg', Confirm);
