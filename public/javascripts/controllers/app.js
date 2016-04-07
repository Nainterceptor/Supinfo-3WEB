"use strict";
//javascripts/controllers/app.js

userApp.controller('AppController', function ($scope) {
    $scope.alerts = [];
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});