/**
 * Created by linwei on 3/15/2015.
 */
'use strict';

angular.module('mainApp')
  .factory('RestUsers', ['$location',function($location){
    var firstList = ['Wei', 'Jeremy', 'Christina', 'Emily', 'Mayu'];
    var lastName = ['Frankenstein', 'Lin', 'Henderson', 'Su', 'Kudo'];
    this.newUser = [];
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

    var editUser = function(){

    };

    var getNewUser = function(){
          return that.newUser;
    }
    return {
      get: getRandomUser,
      getNew: getNewUser,
      post: createUser,
      update: editUser
    };
  }]);


