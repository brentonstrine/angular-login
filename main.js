var username = document.querySelector(".js-username");
var password = document.querySelector(".js-password");
var loginButton = document.querySelector(".js-loginButton");
var loginMessage = document.querySelector(".js-loginMessage");

loginButton.addEventListener("click", function(){
    getUserSalt(username.value);
});

var authenticate = function authenticate(username, password, salt) {
    var saltedHash = md5(salt + password);
    queryDatabase(username, saltedHash);
};

var queryDatabase = function(username, hash) {
    $.ajax({
        url: "checklogin.php",
        type: "POST",
        data: {username: username, hash: hash, request: "authenticate"},
        success: function(data){
            window.loginMessage.textContent = data;
        }
    });
};

var getUserSalt = function(username, hash) {
    $.ajax({
        url: "checklogin.php",
        type: "POST",
        data: {username: username, request: "usersalt"},
        success: function(data){
            authenticate(username, password.value, data);
        }
    });
};