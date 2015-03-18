'use strict';

(function(){
angular.module('mainApp')
  .controller('UpdateUserCtrl', ['$scope','$location','RestUsers',function($scope,$location,RestUsers) {
    var editUser = RestUsers.getEditUser();
    var isEdit = true;
    var that = this;
    this.user = {
      name:{
        last: editUser.name.last,
        first:editUser.name.first
      },
      age: editUser.age,
      email:editUser.email,
      createDate: editUser.createDate,
      editDate: "",
      active: editUser.active
    }

    this.updateUser = function updateUser(user){

      this.empty = {};
      var last = user.name.last,
        first = user.name.first,
        age = user.age,
        email = user.email,
        active = user.active,
        editDate = (new Date(new Date())).toLocaleString();

      RestUsers.update(that.isEdit,last,first,age,email,that.user.createDate,editDate,active);
      user = this.empty;
      $location.url('/');

    }

  }]);

})();
