'use strict';

/**
 * @ngdoc overview
 * @name simpleMeanApp
 * @description
 * # simpleMeanApp
 *
 * Main module of the application.
 */

angular
  .module('dataxuapp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restModule',
    'mainApp'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as userCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'addUserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
