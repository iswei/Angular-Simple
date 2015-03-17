'use strict';

/**
 * @ngdoc function
 * @name simpleMeanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleMeanApp
 */


(function(){
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
    .controller('MainCtrl', ['$scope','$http','RestUsers',function($scope,$http,RestUsers){
      var nameList = ['Wei', 'Jason', 'Christina', 'Emily', 'Mayu'];
      var familyName = ['Frank', 'Lam', 'Herderson', 'Potter', 'Kudo'];
      this.users = [];
      this.itemsByPage=15;

      $scope.isLoading = false;
      function createRandomItem() {
        var
          first = nameList[Math.floor(Math.random() * 4)],
          last = familyName[Math.floor(Math.random() * 4)],
          age = Math.floor(Math.random() * 100),
          email = first + last + '@whatever.com',
          createDate = (new Date(new Date())).toLocaleString(),
          editDate = (new Date(new Date())).toLocaleString(),
          active = false;

        return {
          name:{
            last: last,
            first: first
          },
          age: age,
          email: email,
          createDate: createDate,
          editDate: editDate,
          active: active
        };
      }


      for (var j = 0; j < 200; j++) {
        this.users.push(createRandomItem());
      }

      this.removeUser = function removeUser(row) {
        var index = this.users.indexOf(row);
        if (index !== -1) {
          this.users.splice(index, 1);
        }
      }

      /**
      this.getData = function(){
        var that = this;
        RestUsers.get(function(data){
          that.users = data;
        });
      };

      this.getData();
      **/
    }]);

})();
