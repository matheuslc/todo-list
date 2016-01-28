import angular from 'angular';
import TodoListController from './controller/todoListController.js';

require('../css/main.scss');

angular.module('todoList', [])
  .controller('todoListController', TodoListController);
