'use strict';

/**
 * @ngdoc function
 * @name filmDisplayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the filmDisplayApp
 */
angular.module('filmDisplayApp')
  .controller('MainCtrl', function ($scope, FirebaseFactory) {

    FirebaseFactory.hasLoaded().then(function(){
      $scope.films = FirebaseFactory.list();
      // console.log('$scope.films', $scope.films);
    },function(){
      alert('Database unable to load');
    })
  });
