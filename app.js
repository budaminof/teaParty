angular.module('teaParty',[])
.filter('currencyConverter', function () {
  return function (input){
    return input / 100;
  }
})
