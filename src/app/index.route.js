(function() {
  'use strict';

  angular
    .module('filmDisplayApp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'app/components/about/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/create', {
        templateUrl: 'app/components/create/createcontroller.html',
        controller: 'CreatecontrollerCtrl',
        controllerAs: 'createController'
      })
      .when('/details/:id', {
        templateUrl: 'app/components/details/detailscontroller.html',
        controller: 'DetailscontrollerCtrl',
        controllerAs: 'detailsController'
      })
      .when('/edit/:id', {
        templateUrl: 'app/components/edit/editcontroller.html',
        controller: 'EditcontrollerCtrl',
        controllerAs: 'editController'
      })
      .when('/login', {
        templateUrl: 'app/components/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
