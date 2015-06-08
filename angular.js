angular.module('login1', [])
  .controller('LoginController', function($http) {
    var self = this;
    self.message = "You are not logged in.";
    self.authenticate = function authenticate() {
        var passhash = CryptoJS.MD5(self.password); // should be retrieving salt from DB based on username and then adding it to the PW before hashing, but i'll get to that later if there's time.
        self.queryDatabase(self.username, passhash);
    };
    
    self.queryDatabase = function(username, hash) {
        $http.post('checklogin.php', {'username':username.toString(), 'hash': hash.toString()})
          .success(function(data, status, headers, config) {
            if(data=="true"){
                self.message = "Welcome, " + self.username;
            } else {
                self.message = "That login info is not correct. Please try again.";
            }
          })
          .error(function(data, status, headers, config) {
                console.log("error " + data);
          });
    };
  });