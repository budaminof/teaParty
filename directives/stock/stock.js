angular.module('teaParty')
.directive('teaStock', ['teaService','$log', function (teaService, $log) {

  return {
    restrict: 'E',
    templateUrl: '/directives/stock/stock.html',
    scope: {},
    link: function (scope, element, attr, fn) {
      scope.stock = teaService.getStock();
      teaService.categoriesScraper();
      scope.categoriesMaster = teaService.getCategories();
    }

  }
}])
