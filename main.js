var username = document.querySelector(".js-username");
var password = document.querySelector(".js-password");
var loginButton = document.querySelector(".js-loginButton");
var loginMessage = document.querySelector(".js-loginMessage");

loginButton.addEventListener("click", function(){
    authenticate(username.value, password.value);
});

var authenticate = function authenticate(username, password) {
    var passhash = md5(password); // should be retrieving salt from DB based on username and then adding it to the PW before hashing, but i'll get to that later if there's time.
    queryDatabase(username, passhash);
};

var queryDatabase = function(username, hash) {
    $.ajax({
        url: "checklogin.php",
        type: "POST",
        data: {username: username, hash: hash},
        success: function(data){
            window.loginMessage.textContent = data;
        }
    });
};