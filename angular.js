(function(angular) {
  'use strict';
angular.module('login1', [])
  .controller('LoginController', function() {
    this.authenticate = function authenticate() {
        var passhash = CryptoJS.MD5(this.password); // should be retrieving salt from DB based on username and then adding it to the PW before hashing, but i'll get to that later if there's time.
        alert(this.username + " : " + passhash);
        
    };
    
    this.queryDatabase = function(username, hash) {
        // Simple POST request example (passing data) :
        $http.post('/someUrl', {msg:'hello word!'}).
          success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
    };
  });
})(window.angular);