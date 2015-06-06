<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Angular Login</title>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>
  <?php // found at http://stackoverflow.com/questions/1655769/fastest-md5-implementation-in-javascript ?>
  <script src="http://crypto-js.googlecode.com/svn/tags/3.0.2/build/rollups/md5.js"></script>
  <script src="angular.js"></script>
</head>
<body >
  <div ng-app="login1" ng-controller="LoginController as login">
  <b>Please Log In:</b>
  <div>
    Username: <input type="text" ng-model="login.username" required >
  </div>
  <div>
    Password: <input type="password" ng-model="login.password" required >
  </div>
  <div>
    <button class="btn" ng-click="login.authenticate()">Log In</button>
    <button class="btn" ng-click="login.updateMessage()">New Message</button>
  </div>
  <div>{{login.message}}</div>
</div>
</body>
</html>