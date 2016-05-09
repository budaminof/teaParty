angular.module('teaParty')
.factory('cartService', ['$log',function ($log) {

  var cartService = {
    cart: [],
    getCart: function () {
      return this.cart;
    },
    sendToCart: function (cart) {
      this.cart = cart;
      return this.cart;

    }
  }
  return cartService;
}]);
