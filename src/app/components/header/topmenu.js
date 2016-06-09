angular.module('filmDisplayApp')
  .directive('topMenu', function (AuthFactory) {
    return {
      templateUrl: 'app/components/header/topmenu.html',
      restrict: 'E',
      transclude: true,
      controller: function ($scope) {

        $scope.$watch(function(){
          return AuthFactory.getUser()
        }, function(){
          $scope.user = AuthFactory.getUser();
        });

        $scope.disconnect = AuthFactory.logout;

      }
    };
  });
