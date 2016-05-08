angular.module('teaParty')
.directive('teaCart', ['cartService', '$log', function (cartService, $log) {

  return {
    restrict: 'E',
    templateUrl: '/directives/cart/cart.html',
    scope: {},
    link: function (scope, element, attr, fn) {
      scope.vm = {};
      scope.vm.allow= false;

      scope.cart = cartService.getCart();
      $log.log('IN DIRECTIVE CART',scope.cart);

      scope.total = function() {
        var total = 0;
        scope.cart.forEach(function(item) {
          total += (item.subTotal());
        })
        return total;
      }

      scope.allowEdit = function () {
        $log.log('EDIT submit function !!!', scope.cart[0].subTotal())

        return scope.vm.allow = true;
      }

      scope.saveEdit = function () {
        $log.log('SAVE edit submit function !!!', scope.cart[0].subTotal())
        return scope.vm.allow = false;
      }

      scope.delete = function (item) {
        scope.cart.splice(scope.cart.indexOf(item), 1);
        return
      }

    }
  }
}])
