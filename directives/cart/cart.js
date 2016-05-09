angular.module('teaParty')
.directive('teaCart', ['cartService', '$log','$location', function (cartService, $log, $location) {

  return {
    restrict: 'E',
    templateUrl: '/directives/cart/cart.html',
    scope: {},
    link: function (scope, element, attr, fn) {
      scope.vm = {};
      scope.vm.allow = false;
      scope.vm.path = $location.path();

      scope.cart = cartService.getCart();

      scope.total = function() {
        var total = 0;
        scope.cart.forEach(function(item) {
          total += (item.subTotal());
        })
        return total;
      }

      scope.allowEdit = function () {
        return scope.vm.allow = true;
      }

      scope.saveEdit = function () {
        return scope.vm.allow = false;
      }

      scope.delete = function (item) {
        scope.cart.splice(scope.cart.indexOf(item), 1);
        return
      }

    }
  }
}])
