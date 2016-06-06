'use strict';

/**
 * @ngdoc filter
 * @name filmDisplayApp.filter:ratingDisplay
 * @function
 * @description
 * # ratingDisplay
 * Filter in the filmDisplayApp.
 */
angular.module('filmDisplayApp')
  .filter('ratingDisplay', function () {
    return function (input) {
      var rating = '';
      if(input > 5){
        input = 5;
      }else if (input < 0){
        input = 0;
      }
      for(var i =0; i< input; i++){
        rating+='\u2605';
      }
      for(var i = 0; i< 5-input; i++){
        rating+='\u2606';
      }

      return rating;
    };
  });
