angular.module('teaParty')
.factory('cartService', ['$log',function ($log) {

  var cartService = {
    cart: [],
    getCart: function () {
      $log.log('5 in cart service Get Cart', this.cart)
      return this.cart;
    },
    sendToCart: function (cart) {
      this.cart = cart;
      $log.log('2 in service send to cart', this.cart)
      return this.cart;

    }
  }
  return cartService;
}]);
