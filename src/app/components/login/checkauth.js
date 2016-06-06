'use strict';

/**
 * @ngdoc directive
 * @name filmDisplayApp.directive:checkAuth
 * @description
 * # checkAuth
 */
angular.module('filmDisplayApp')
  .directive('checkAuth', function (firebaseFactory, $location) {
    return {
      template: '',
      restrict: 'E',
      controller: function () {
        
        if(!firebaseFactory.isAuth()){
          $location.path('/#/login');
        }
      }
    };
  });
