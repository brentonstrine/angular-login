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
  <b>Invoice:</b>
  <div>
    Quantity: <input type="number" min="0" ng-model="login.qty" required >
  </div>
  <div>
    Costs: <input type="number" min="0" ng-model="login.cost" required >
    <select ng-model="login.inCurr">
      <option ng-repeat="c in login.currencies">{{c}}</option>
    </select>
  </div>
  <div>
    <b>Total:</b>
    <span ng-repeat="c in login.currencies">
      {{login.total(c) | currency:c}}
    </span>
    <button class="btn" ng-click="login.pay()">Pay</button>
  </div>
</div>
</body>
</html>