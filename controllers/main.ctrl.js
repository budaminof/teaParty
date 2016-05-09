angular.module('teaParty')
.controller('MainCtrl', ['teaService', '$scope', '$log','$location', function (teaService, $scope, $log, $location) {
  $scope.vm = {};
  $scope.isActive = function (viewLocation) {
    $log.log('In CTRL ', viewLocation);
      return viewLocation === $location.url();
  }

}])
