angular.module('login1', [])
  .controller('LoginController', function($http) {
    
                var self = this;
    self.username = "default";
    self.password = "default2";
    self.message = "You are not logged in.";
    self.authenticate = function authenticate() {
        var passhash = CryptoJS.MD5(self.password); // should be retrieving salt from DB based on username and then adding it to the PW before hashing, but i'll get to that later if there's time.
        self.queryDatabase(self.username, passhash);
    };
    
    self.queryDatabase = function(username, hash) {
        $http.post('checklogin.php', {'username':username.toString(), 'hash': hash.toString()})
          .success(function(data, status, headers, config) {
            console.log(data);
            if(data=="true"){
                console.log("successful login");
                self.message = "Welcome, " + self.username;
            } else {
                console.log("failed login");
                console.log(self);
                self.message = "That login info is not correct. Please try again.";
            }
          })
          .error(function(data, status, headers, config) {
            alert("error " + data);
          });
    };
  });