angular.module('teaParty')
.directive('teaStock', ['teaService','$log','cartService',function (teaService, $log, cartService) {

  return {
    restrict: 'E',
    templateUrl: '/directives/stock/stock.html',
    scope: {},
    link: function (scope, element, attr, fn) {
      scope.tempCart = [];

      scope.stock = teaService.getStock();
      teaService.categoriesScraper();
      scope.categoriesMaster = teaService.getCategories();

      scope.addToCart = function (item) {
        if (!item.quantity) {
          item.quantity = 1;
          }
        item.quantity = Number(item.quantity);
        item.subTotal = function () {
          return (this.price * this.quantity);
          }
        scope.tempCart.push(item);
        $log.log('1 in add to cart', scope.tempCart)
        return
      }

      scope.checkout = function () {
        cartService.sendToCart(scope.tempCart);
        $log.log('3 sending to checkout', scope.tempCart)
        return
      }
    }

  }
}])
