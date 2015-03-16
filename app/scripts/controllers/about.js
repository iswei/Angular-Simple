'use strict';

/**
 * @ngdoc function
 * @name simpleMeanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simpleMeanApp
 */
angular.module('mainApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
