(function(angular) {
  'use strict';
angular.module('login1', [])
  .controller('LoginController', function() {
    this.username;
    this.password;

    this.authenticate = function authenticate() {
        alert(this.username);
    };
    this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
      return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
    };
    this.pay = function pay() {
      window.alert("Thanks!");
    };
  });
})(window.angular);