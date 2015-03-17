'use strict';

/**
 * @ngdoc function
 * @name simpleMeanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleMeanApp
 */


(function(){
  angular.module('mainApp',['smart-table'])
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
          else if(angular.lowercase(user.createDate).indexOf(angular.lowercase(search))!== -1){
            filtered.push(user);
          }
          else if(angular.lowercase(user.editDate).indexOf(angular.lowercase(search))!== -1){
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
    .controller('MainCtrl', ['$scope','RestUsers',function($scope,RestUsers) {
      var firstList = ['Wei', 'Jeremy', 'Christina', 'Emily', 'Mayu'];
      var lastName = ['Frankenstein', 'Lin', 'Henderson', 'Su', 'Kudo'];
      this.users = [];
      this.itemsByPage = 15;
      this.isLoading = false;

      for (var j = 0; j < 200; j++) {
        this.users.push(RestUsers.get());
      }

      if (RestUsers.getNew() != null) {
      this.users.splice(0, 0, RestUsers.getNew());
      }

      this.removeUser = function removeUser(row) {
        var index = this.users.indexOf(row);
        if (index !== -1) {
          this.users.splice(index, 1);
        }
      }



    }]);

})();
