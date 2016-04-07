"use strict";
//controllers.js
AngularApp.controller("ProductsCtrl", function($scope) {
    $scope.products = [
        new Product()
    ];
    $scope.newProduct = function() {
        $scope.products.push(new Product())
    };
    $scope.removeProduct = function(product) {
        var index = $scope.products.indexOf(product);
        $scope.products.splice(index, 1);
    }
});