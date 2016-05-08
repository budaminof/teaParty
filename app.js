angular.module('teaParty',['ngRoute'])
.filter('currencyConverter', function () {
  return function (input){
    return input / 100;
  }
})
.filter('inStock', function () {
  return function (input){
    if(input) return "Yes"
    else return "No"
  }
})
.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        template: '<tea-stock></tea-stock>'
      })
      .when('/cart', {
        template: '<tea-cart></tea-cart>'
      })
      .when('/404', {
        template: '<div class="error text-center"><img class="error" src="http://www.cruiseindubai.com/wp-content/uploads/2014/03/404-bg_2x.gif" style="height:400px"></div>'
      })
      .otherwise({
        redirectTo: '/404'
      })

      $locationProvider.html5Mode(true);
});
