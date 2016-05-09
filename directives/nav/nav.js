angular.module('teaParty')
.directive('teaNav', ['$log','$location', function ($log, $location) {

  return {
    restrict: 'E',
    templateUrl: '/directives/nav/nav.html',
    scope: {},
    link: function (scope, element, attr, fn) {

      scope.isActive = function (viewLocation) {
        $log.log('In Nav Directive', viewLocation);
        return viewLocation === $location.path();
      }


    }
  }
}])
