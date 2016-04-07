"use strict";
//javascripts/controllers/list.js

userApp.controller('ListController', function ($scope, $http) {
    $scope.users = [];
    
    $http.get('/api/users')
        .success(function(data) {
            data.forEach(function(user) {
                $scope.users.push(User.fromDatabase(user));
            });
        })
        .error(function(error) {
            $scope.alerts.push({type: 'danger', msg: error});
        });
    
    $scope.removeUser = function(user) {
        $http.delete('/api/users/' + user.id)
            .success(function() {
                $scope.alerts.push({type: 'success', msg: 'Remove of ' + user.fullname + ' successful'});
                $scope.users.splice($scope.users.indexOf(user), 1);
            })
            .error(function(error) {
                $scope.alerts.push({type: 'danger', msg: error});
            });
    }
});