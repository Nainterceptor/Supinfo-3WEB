//app.js
var userApp = angular.module(
    'userApp',
    [
        'ui.bootstrap',
        'ui.router'
    ]
);

userApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/list");
    $stateProvider
        .state('app', {
            templateUrl: "views/index.html",
            controller: 'AppController'
        })
        .state('app.list', {
            url: "/list",
            templateUrl: "views/list.html",
            controller: 'ListController'
        })
        .state('app.create', {
            url: "/new",
            templateUrl: "views/create.html",
            controller: 'CreateController'
        })
        .state('app.edit', {
            url: "/:id/edit",
            templateUrl: "views/edit.html",
            controller: 'EditController'
        });
});