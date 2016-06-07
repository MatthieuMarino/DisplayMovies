'use strict';

/**
 * @ngdoc function
 * @name filmDisplayApp.controller:EditcontrollerCtrl
 * @description
 * # EditcontrollerCtrl
 * Controller of the filmDisplayApp
 */
angular.module('filmDisplayApp')
  .controller('EditcontrollerCtrl', function ($scope, $routeParams, FirebaseFactory) {

    var id = $routeParams.id;

    FirebaseFactory.hasLoaded().then(function(){
      $scope.film = FirebaseFactory.get(id);
    });

    $scope.save = function (film) {
      FirebaseFactory.save(film);
      alert('Changements sauvegardés');
    };

    $scope.upload = function(afficheFile){
      // console.log('afficheFile', afficheFile);
      FirebaseFactory.uploadAffiche(id, afficheFile);
    };

    // $scope.$watch('fileInput', function(newValue, oldValue){
    //   if(newValue && newValue != oldValue){
    //     console.log('newValue', newValue);
    //     upload(newValue);
    //   }
    // })
  });
