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
    .controller('MainCtrl', ['$scope','$location','RestUsers',function($scope,$location,RestUsers) {
      var that = this;
      this.users = [];
      this.itemsByPage = 15;
      this.isLoading = false;
      this.isEdit = false;
      var editUserIndex = -1;
      var newUser = {}; //new user created
      var randomUser = {}; //random users
      var updatedUser = {}; //updated user info returned from edit page
      newUser = RestUsers.getNew();
      randomUser = RestUsers.get;
      updatedUser = RestUsers.getEditUser();
      editUserIndex = RestUsers.getEditUserIndex();
      console.log(updatedUser);
      console.log(editUserIndex);

      this.addRandomUser = function addRandomUsers(randomUser){
          that.users.push(randomUser);
      }


      this.addNewUser = function addNewUser(newUser) {
        if (newUser.email != null && newUser.email != undefined) {
          that.users.splice(0, 0, newUser);
        }
      }

      this.removeUser = function removeUser(row) {
        var index = that.users.indexOf(row);
        if (index !== -1) {
          that.users.splice(index, 1);
        }
      }

      this.editUser = function editUser(row) {
        that.editUserIndex = that.users.indexOf(row);
        RestUsers.setEditUserIndex(that.editUserIndex);
        if (that.editUserIndex !== -1) {
          RestUsers.update(
            that.isEdit,
            that.users[that.editUserIndex].name.last,
            that.users[that.editUserIndex].name.first,
            that.users[that.editUserIndex].age,
            that.users[that.editUserIndex].email,
            that.users[that.editUserIndex].createDate,
            that.users[that.editUserIndex].editDate,
            that.users[that.editUserIndex].active
          );
        }
        $location.url('/edit');
      }

      this.editUserReturned = function editUserReturned(index,updatedUser){
        if(index!==-1 && updatedUser.editDate != null){

          that.users.splice(index, 1);
          that.addNewUser(updatedUser);
        }
      }

      for (var j = 0; j < 200; j++) {
        this.addRandomUser(randomUser());
      }

      this.addNewUser(newUser);

      this.editUserReturned(editUserIndex,updatedUser);
    }]);

})();
