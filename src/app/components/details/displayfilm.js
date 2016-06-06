'use strict';

/**
 * @ngdoc directive
 * @name filmDisplayApp.directive:displayFilm
 * @description
 * # displayFilm
 */
angular.module('filmDisplayApp')
  .directive('displayFilm', function () {
    return {
      templateUrl: 'app/components/details/detailsTemplate.html',
      restrict: 'E',
      scope:{
        film: '=',
        delete: '='
      },
      controller: function(){

      }
    };
  });
