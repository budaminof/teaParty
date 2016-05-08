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

      scope.addToCart = function (foo) {
        console.log(foo.quantity);
        var index = scope.tempCart.indexOf(foo);

        if(!foo.quantity){
          foo.quantity = 1;
          console.log(foo.quantity);
        }
        console.log('index', index);
        if(index >= 0){
          scope.tempCart[index].quantity = Number(foo.quantity);
        } else {
          console.log('inside else');
          foo.subTotal = function () {
            return (this.price * this.quantity);
          }
          foo.quantity = Number(foo.quantity);
          scope.tempCart.push(foo);
        }
        console.log('FOO',foo);
        console.log('CART', scope.tempCart);


        // if (isNaN(foo.quantity)) {
        //   foo.quantity = 1;
        // }
        // if (index >= 0) {
        //   if (isNaN(foo.quantity)) {
        //     foo.quantity = 1;
        //   }
        //   scope.tempCart[index].quantity = Number(foo.quantity);
        // } else {
        //   foo.quantity = Number(foo.quantity);
        //
        // }
        return

      }

      scope.checkout = function () {
        cartService.sendToCart(scope.tempCart);
        $log.log('3 sending to checkout', scope.tempCart)
        return
      }

      scope.cartQuantity = function () {

        var number = 0;
        scope.tempCart.forEach(function (e){
          number += e.quantity;
        })
        return number;
      }
    }

  }
}])
