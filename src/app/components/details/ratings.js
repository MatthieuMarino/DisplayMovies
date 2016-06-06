'use strict';

/**
 * @ngdoc service
 * @name filmDisplayApp.RATINGS
 * @description
 * # RATINGS
 * Constant in the filmDisplayApp.
 */
angular.module('filmDisplayApp')
  .constant('RATINGS', [
    {label: 'nul', value: 0},
    {label: 'mauvais', value: 1},
    {label:'moyen', value: 2},
    {label: 'bon', value: 3},
    {label: 'excellent', value: 4}
  ]);
