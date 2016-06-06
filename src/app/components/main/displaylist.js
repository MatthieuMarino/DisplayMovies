'use strict';

/**
 * @ngdoc directive
 * @name filmDisplayApp.directive:displayList
 * @description
 * # displayList
 */
angular.module('filmDisplayApp')
  .directive('displayList', function () {
    return {
      templateUrl: 'app/components/main/listTemplate.html',
      restrict: 'E',
      scope:{
        films: "="
      },
      controller: function(){

      }
    };
  });
