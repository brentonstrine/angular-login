(function(angular) {
  'use strict';
angular.module('login1', [])
  .controller('LoginController', function($http) {
    
                console.log(this);
    this.username = "default";
    this.password = "default2";
    this.message = "You are not logged in.";
    this.authenticate = function authenticate() {
        var passhash = CryptoJS.MD5(this.password); // should be retrieving salt from DB based on username and then adding it to the PW before hashing, but i'll get to that later if there's time.
        this.queryDatabase(this.username, passhash);
    };
    
    this.queryDatabase = function(username, hash) {
        $http.post('checklogin.php', {'username':username.toString(), 'hash': hash.toString()})
          .success(function(data, status, headers, config) {
            console.log(data);
            if(data=="true"){
                console.log("successful login");
                this.message = "Welcome, " + this.username;
            } else {
                console.log("failed login");
                console.log(this);
                this.message = "That login info is not correct. Please try again.";
            }
          })
          .error(function(data, status, headers, config) {
            alert("error " + data);
          });
    };
  });
})(window.angular);