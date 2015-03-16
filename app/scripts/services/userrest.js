/**
 * Created by linwei on 3/15/2015.
 */
'use strict';

angular.module('restModule',['mainApp']).factory('RestUsers', ['$http', function($http){

    var getUser = function(cb){

      $http.get('/data/userdb.js').success(function(data){
        cb(data);

      });
    };

    var createUser = function(){

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


