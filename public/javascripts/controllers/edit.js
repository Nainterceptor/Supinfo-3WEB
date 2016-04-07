"use strict";
//javascripts/controllers/edit.js

userApp.controller('EditController', function ($stateParams, $scope, $http) {
    $scope.user = new User();
    $http.get('/api/users/' + $stateParams.id)
        .success(function(user){
            $scope.user = User.fromDatabase(user);
        })
        .error(function(){
            $scope.alerts.push({type: 'danger', msg: error});
        });
    $scope.update = function(user) {
        $http.put('/api/users/' + user.id, user)
            .success(function(user) {
                $scope.alerts.push({type: 'success', msg: 'User "' + user._id + '" updated.'});
                $scope.user = User.fromDatabase(user);
            })
            .error(function(error){
                $scope.alerts.push({type: 'danger', msg: error});
            });
    };
});