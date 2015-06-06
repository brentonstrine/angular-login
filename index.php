<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Angular Login</title>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>
  <script src="angular.js"></script>
</head>
<body >
  <div ng-app="login1" ng-controller="LoginController as login">
  <b>Please Log In:</b>
  <div>
    Username: <input type="text" min="0" ng-model="login.username" required >
  </div>
  <div>
    Password: <input type="password" min="0" ng-model="login.password" required >
  </div>
  <div>
    <button class="btn" ng-click="login.authenticate()">Log In</button>
  </div>
</div>
</body>
</html>