'use strict';

/**
 * @ngdoc function
 * @name filmDisplayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the filmDisplayApp
 */
angular.module('filmDisplayApp')
  .controller('MainCtrl', function ($scope, firebaseFactory) {

    firebaseFactory.hasLoaded().then(function(){
      $scope.films = firebaseFactory.list();
      // console.log('$scope.films', $scope.films);
    },function(){
      alert('Database unable to load');
    })
  });
