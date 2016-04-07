"use strict";
//javascripts/controllers/create.js

userApp.controller('CreateController', function ($scope, $http) {
    $scope.user = new User();
    $scope.create = function(user) {
        $http.post('/api/users', user)
            .success(function(user) {
                $scope.alerts.push({type: 'success', msg: 'User "' + user._id + '" created.'});
                $scope.user = new User();
            })
            .error(function(error){
                $scope.alerts.push({type: 'danger', msg: error});
            });
    };
});