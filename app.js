angular.module('teaParty',[])
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
