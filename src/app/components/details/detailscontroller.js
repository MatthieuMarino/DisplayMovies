'use strict';

/**
 * @ngdoc function
 * @name filmDisplayApp.controller:DetailscontrollerCtrl
 * @description
 * # DetailscontrollerCtrl
 * Controller of the filmDisplayApp
 */
angular.module('filmDisplayApp')
  .controller('DetailscontrollerCtrl', function ($scope, $routeParams, $location, firebaseFactory) {
    var id = $routeParams.id;

    firebaseFactory.hasLoaded().then(function(){
      $scope.film = firebaseFactory.get(id);
      // console.log('$scope.films', $scope.films);
    });


    $scope.delete = function(film){
      firebaseFactory.delete(film);
      $location.path('/#/');

    }
  });
