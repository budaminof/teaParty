angular.module('teaParty')
.directive('teaCart', ['cartService', '$log', function (cartService, $log) {

  return {
    restrict: 'E',
    templateUrl: '/directives/cart/cart.html',
    scope: {},
    link: function (scope, element, attr, fn) {
      scope.cart = cartService.getCart();
      $log.log('IN DIRECTIVE CART',scope.cart)

    }
  }
}])
