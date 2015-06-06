(function(angular) {
  'use strict';
angular.module('login1', [])
  .controller('LoginController', function() {
    this.authenticate = function authenticate() {
        var passhash = CryptoJS.MD5(this.password); // should be retrieving salt from DB based on username and then adding it to the PW before hashing, but i'll get to that later if there's time.
        alert(this.username + " : " + passhash);
    };
  });
})(window.angular);