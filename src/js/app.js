import angular from 'angular';
import TodoListController from './controller/todoListController.js';

angular.module('todoList', [])
  .controller('todoListController', TodoListController);
