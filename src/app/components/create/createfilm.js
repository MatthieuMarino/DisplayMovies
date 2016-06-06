'use strict';

/**
 * @ngdoc directive
 * @name filmDisplayApp.directive:createFilm
 * @description
 * # createFilm
 */
angular.module('filmDisplayApp')
  .directive('createFilm', function () {
    return {
      templateUrl: 'app/components/create/createTemplate.html',
      restrict: 'E',
      scope:{
        create: '=',
        upload: '='
      },
      controller: function($scope, RATINGS){

        $scope.film = {
          name: 'film name',
          affiche: {url:'url',
          image: null},
          realisator: 'realisator name',
          actors: [{
            name: 'actor 1'
          },
            {
              name: 'actor 2'
            }
          ],
          releaseDate: '01/01/0001',
          rating: 0
        };

        $scope.ratingPossible = RATINGS

      },
      link: function(scope, element){
        element.find('.fileInput').bind('change', function(event) {
          scope.upload(event).then(function(image){
            scope.film.affiche.image = image;
          });
        });
      }
    };
  });
