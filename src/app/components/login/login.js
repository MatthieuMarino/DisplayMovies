'use strict';

/**
 * @ngdoc function
 * @name filmDisplayApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the filmDisplayApp
 */
angular.module('filmDisplayApp')
  .controller('LoginCtrl', function ($scope, $cookies, firebaseFactory) {
    $scope.user = {};
    if($cookies.auth){
    $scope.user.email = $cookies.auth.email;
    $scope.user.password = $cookies.auth.password;
    }

    $scope.loginUser = firebaseFactory.login;
  });
