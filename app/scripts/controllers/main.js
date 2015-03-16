'use strict';

/**
 * @ngdoc function
 * @name simpleMeanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleMeanApp
 */



  angular.module('mainApp',['restModule','smart-table'])
    .filter('filterUser', function(){
      return function(users, search){
        var filtered = [];
        if(!search){
          return users;
        }

        angular.forEach(users, function(user){
          console.log(user);
          console.log(search);
          console.log(user.name.first);
          console.log("This is last name:   " +user.name.last);
          if(angular.lowercase(user.name.last).indexOf(angular.lowercase(search))!== -1){
            filtered.push(user);
          }
          else if(angular.lowercase(user.name.first).indexOf(angular.lowercase(search))!== -1){
            filtered.push(user);
          }
          else if((user.age) == search){
            filtered.push(user);
          }
          else if(angular.lowercase(user.email).indexOf(angular.lowercase(search))!== -1){
            filtered.push(user);
          }
          else if((user.createDate).indexOf(search)!== -1){
            filtered.push(user);
          }
          else if((user.editDate).indexOf(search)!== -1){
            filtered.push(user);
          }
        });
        return filtered;
      };
    })
    .config([function(){
      console.log('Loaded User Module configuration');
    }])
    .run([function(){
      console.log('User Module is running');
    }])
    .controller('MainCtrl', ['$scope','$http','RestUsers',function($scope,$http,RestUsers){

      this.getData = function(){
        var that = this;
        RestUsers.get(function(data){
          that.users = data;
        });
      };

      this.getData();

    }]);


