angular.module('teaParty')
.directive('teaStock', ['teaService','$log','cartService',function (teaService, $log, cartService) {

  return {
    restrict: 'E',
    templateUrl: '/directives/stock/stock.html',
    scope: {},
    link: function (scope, element, attr, fn) {
      scope.tempCart = [];
      scope.vm = {};
      scope.vm.number = 0;

      scope.stock = teaService.getStock();
      teaService.categoriesScraper();
      scope.categoriesMaster = teaService.getCategories();

      scope.addToCart = function (item) {
        var index = scope.tempCart.indexOf(item);
        if (!item.quantity) {
          item.quantity = 1;
          }
        if(index >= 0){
            scope.tempCart[index].quantity = Number(item.quantity);
            $log.log('if exist UPDATE',scope.tempCart)
          } else {
            item.quantity = Number(item.quantity);

            item.subTotal = function () {
              return (this.price * this.quantity);
            }
            scope.tempCart.push(item);
          }
        scope.cartQuantity();
        return
      }

      scope.checkout = function () {
        cartService.sendToCart(scope.tempCart);
        return
      }

      scope.cartQuantity = function () {
        scope.vm.number = 0;
        scope.tempCart.forEach(function (e){
        scope.vm.number += e.quantity;
        })
        return scope.vm.number;
      }

    }

  }
}]);
