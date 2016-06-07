'use strict';

/**
 * @ngdoc function
 * @name filmDisplayApp.controller:DetailscontrollerCtrl
 * @description
 * # DetailscontrollerCtrl
 * Controller of the filmDisplayApp
 */
angular.module('filmDisplayApp')
  .controller('DetailscontrollerCtrl', function ($scope, $routeParams, $location, FirebaseFactory) {
    var id = $routeParams.id;

    FirebaseFactory.hasLoaded().then(function(){
      $scope.film = FirebaseFactory.get(id);
      // console.log('$scope.films', $scope.films);
    });


    $scope.delete = function(film){
      FirebaseFactory.delete(film);
      $location.path('#/');

    }
  });
