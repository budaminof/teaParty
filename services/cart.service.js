angular.module('teaParty')
.factory('cartService', function () {

  var cartService = {
    cart: [
      {
          "_id": "55c8ee82152165d244b98302",
          "name": "Flexner white tea",
          "ingredients": "hot sauce, iron, beetle nut, fresco, blarney, raw mashed potato",
          "caffeineScale": 38,
          "price": 4991,
          "inStock": true,
          "rating": 4,
          "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
          "__v": 0,
          "categories": ["cold"],
          "quantity": 2,
          subTotal: function () {
            return (this.price * this.quantity);
          }
      },
      {
          "_id": "55c8ee82152165d244b98303",
          "name": "Pressor leaf",
          "ingredients": "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
          "caffeineScale": 153,
          "price": 5496,
          "inStock": true,
          "rating": 1,
          "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
          "__v": 0,
          "categories": ["dry", "hot", "awesome"],
          "quantity": 4,
          subTotal: function () {
            return (this.price * this.quantity);
          }
          
      }
    ],

    getCart: function () {
      return this.cart;
    }
  }
  return cartService;
});
