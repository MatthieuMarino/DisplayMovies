'use strict';

/**
 * @ngdoc directive
 * @name filmDisplayApp.directive:editFilm
 * @description
 * # editFilm
 */
angular.module('filmDisplayApp')
  .directive('editFilm', function ($filter, RATINGS) {
    return {
      templateUrl: 'app/components/edit/editTemplate.html',
      restrict: 'E',
      scope:{
        film: "=",
        save:'=',
        upload: "="
      },
      controller: function($scope){

        $scope.ratingPossible = RATINGS;
        // $scope.fileInput = {};

        $scope.addActor = function(actor){
          if(actor && actor.name){
            $scope.film.actors.push(actor);
          }
        };

        $scope.deleteActor = function(actor, size){

            // console.log('actor', actor);
            var index = $scope.film.actors.indexOf(actor);
            // console.log('$scope.film.actors', $scope.film.actors);
            // console.log('index', index);
            if(index != -1){
              $scope.film.actors.splice(index, 1);
            }else{
              console.log('can\'t find actor');
            }
          
        }
      },
      link: function(scope, element){
        element.find('.fileInput').bind('change', scope.upload);
      }
    };
  });
