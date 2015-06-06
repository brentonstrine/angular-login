(function(angular) {
  'use strict';
angular.module('login1', [])
  .controller('LoginController', function() {
    this.authenticate = function authenticate() {
        var passhash = CryptoJS.MD5(this.password);
        alert(this.username + " : " + passhash);
    };
  });
})(window.angular);