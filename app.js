var studentLogin = angular.module('studentLogin', ['ui.router']);

studentLogin.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html"
    });
});
