'use strict'
angular.module('mainApp')
.controller('AddUserCtrl', ['$scope','$location','RestUsers',function($scope,$location,RestUsers) {

    //grab user from form and post it, return to root after function call
    this.addUser = function addUser(user){

      this.empty = {};
      var last = user.name.last,
          first = user.name.first,
          age = user.age,
          email = user.email,
          active = user.active;

      RestUsers.post(last,first,age,email,active);
      user = this.empty;
      $location.url('/');
    }
  }]);


