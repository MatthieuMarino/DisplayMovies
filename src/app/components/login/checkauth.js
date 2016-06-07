'use strict';

/**
 * @ngdoc directive
 * @name filmDisplayApp.directive:checkAuth
 * @description
 * # checkAuth
 */
angular.module('filmDisplayApp')
  .directive('checkAuth', function (AuthFactory) {
    return {
      template: '',
      restrict: 'A',
      controller: function () {

        AuthFactory.checkAuth();
      }
    };
  });
