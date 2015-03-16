/**
 * Created by linwei on 3/15/2015.
 */
'use strict';

angular.module('restModule',['mainApp']).factory('RestUsers', ['$http', function($http){

    var getUser = function(cb){

      $http.get('/data/user.json').success(function(data){
        cb(data);

      });
    };

    var createUser = function(){
      var data = $.param({
        json: JSON.stringify({
          "name" : {
            "last" : this.lastName,
            "first"  : this.firstName
          },
          "age" : this.age,
          "email" : this.email,
          "createDate" : new Date(),
          "editDate" : new Date(),
          "active": true
        })
      });

      $http.post('/addUser', data).success(function(data, status) {
        console.log('post success');
      });
    };
    var editUser = function(){

    };
    var deleteUser = function(){

    };
    return {
      get: getUser,
      post: createUser,
      update: editUser,
      delete: deleteUser
    };
  }]);


