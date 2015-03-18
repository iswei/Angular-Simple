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

    //generate random users logic
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

    //create user
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

    //handle update user object
    var updateUser = function(last,first,age,email,createDate,editDate,active) {

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

      that.editUser = data;
    };

    //getter and setters
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


