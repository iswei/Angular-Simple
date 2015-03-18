/**
 * Created by linwei on 3/15/2015.
 */
'use strict';

angular.module('mainApp')
  .factory('RestUsers', ['$location',function($location){
    var firstList = ['Wei', 'Jeremy', 'Christina', 'Emily', 'Mayu'];
    var lastName = ['Frankenstein', 'Lin', 'Henderson', 'Su', 'Kudo'];
    this.newUser = {};
    this.editUser = {};
    this.editUserIndex = -1;
    var that = this;
    var getRandomUser = function(){
        var
          first = firstList[Math.floor(Math.random() * 4)],
          last = lastName[Math.floor(Math.random() * 4)],
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

    };

    var createUser = function(last,first,age,email,active){
      var
        createDate = (new Date(new Date())).toLocaleString(),
        editDate = (new Date(new Date())).toLocaleString();

      var data = {
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

      that.newUser = data;
    };

    var updateUser = function(isEdit,last,first,age,email,createDate,editDate,active) {
      if (isEdit) {
        var data = {
          name: {
            last: last,
            first: first
          },
          age: age,
          email: email,
          createDate: createDate,
          editDate: editDate,
          active: active
        };

      } else {

        var data = {
          name: {
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
      that.editUser = data;
    };

      this.currentUser = function currentUser(row) {
        var index = that.users.indexOf(row);
        if (index !== -1) {
          that.users.splice(index, 1);
        }
      };


    var getNewUser = function(){
      return that.newUser;
    };

    var getEditUser = function(){
      return that.editUser;
    }
    var setEditUserIndex = function(indx){
      that.editUserIndex = indx;
    }
    var getEditUserIndex = function(){
      return that.editUserIndex;
    }
    return {
      get: getRandomUser,
      getNew: getNewUser,
      getEditUser: getEditUser,
      setEditUserIndex: setEditUserIndex,
      getEditUserIndex: getEditUserIndex,
      post: createUser,
      update: updateUser
    };
  }]);


