'use strict';

/**
 * @ngdoc function
 * @name filmDisplayApp.controller:CreatecontrollerCtrl
 * @description
 * # CreatecontrollerCtrl
 * Controller of the filmDisplayApp
 */
angular.module('filmDisplayApp')
  .controller('CreatecontrollerCtrl', function ($scope, $location, $q, firebaseFactory) {

    $scope.create = function (film) {
      // console.log('creating film', film);
      firebaseFactory.create(film);//.then(function(){
        $location.path('/#/');
      // });
    };

    $scope.upload = function(afficheFile){
      // console.log('afficheFile', afficheFile);
      var affiche = {};
      var defer = $q.defer();
      var filename = afficheFile.target.files[0];
      var fr = new FileReader();
      fr.onload = function (res) {
        defer.resolve(res.target.result);
      };
      fr.readAsDataURL(filename);
      return defer.promise;
    };
  });
