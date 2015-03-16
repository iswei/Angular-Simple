/**
 * Created by linwei on 3/15/2015.
 */
'use strict';
angular.module('mainApp')
.directive('useritem', function () {
  return {
    restrict: 'E', //E = element, A = attribute, C = class, M = comment
    /*
     scope: {
     //@ reads the attribute value, = provides two-way binding, & works with functions
     title: '@'         },
     */
    templateUrl: 'app/scripts/views/userItem.html',

    controller: function($scope){
      console.log('do stuff');

    }, //Embed a custom controller in the directive
    link: function ($scope, element, attrs) { } //DOM manipulation
  };
});
