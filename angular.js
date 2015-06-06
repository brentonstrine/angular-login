(function(angular) {
angular.module('login1', [])
  .controller('LoginController', function($http) {
    this.username = "default";
    this.password = "default2";
    this.message = "You are not logged in.";
    this.updateMessage = function updateMessage() {
        this.message = "new message!";
    }; 
    
    this.authenticate = function authenticate() {
        var passhash = CryptoJS.MD5(this.password); // should be retrieving salt from DB based on username and then adding it to the PW before hashing, but i'll get to that later if there's time.
        var queryResult = this.queryDatabase(this.username, passhash);
        console.log(queryResult);
    };
    
    this.queryDatabase = function(username, hash) {
        return $q($http.post('checklogin.php', {'username':username.toString(), 'hash': hash.toString()})
            .then(function (response) {
                console.log("response is: " + response.data.toString());
                return response.data.toString();
            }), 1000);
        
        //this results in $q is not defined. I'm having a hard time figuring out promises in angular. 
    };
  });
})(window.angular);


/*

        console.log(promise);
        if(promise=="true"){
                console.log("successful login");
                this.message = "Welcome, " + this.username;
            } else {
                console.log("failed login");
                console.log(this.document);
                this.message = "That login info is not correct. Please try again.";
            }
            
            */