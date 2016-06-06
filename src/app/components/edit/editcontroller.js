'use strict';

/**
 * @ngdoc function
 * @name filmDisplayApp.controller:EditcontrollerCtrl
 * @description
 * # EditcontrollerCtrl
 * Controller of the filmDisplayApp
 */
angular.module('filmDisplayApp')
  .controller('EditcontrollerCtrl', function ($scope, $routeParams, firebaseFactory) {

    var id = $routeParams.id;

    firebaseFactory.hasLoaded().then(function(){
      $scope.film = firebaseFactory.get(id);
    });

    $scope.save = function (film) {
      firebaseFactory.save(film);
      alert('Changements sauvegardés');
    };

    $scope.upload = function(afficheFile){
      // console.log('afficheFile', afficheFile);
      firebaseFactory.uploadAffiche(id, afficheFile);
    };

    // $scope.$watch('fileInput', function(newValue, oldValue){
    //   if(newValue && newValue != oldValue){
    //     console.log('newValue', newValue);
    //     upload(newValue);
    //   }
    // })
  });
