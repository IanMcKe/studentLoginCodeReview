var studentLogin = angular.module('studentLogin', ['ui.router']);

studentLogin.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html",
        controller: "CoursesController"
    });

    $stateProvider.state('course', {
      url: "course/:courseId",
      templateUrl: "partials/course.html",
      controller: "CoursesController"
    });

    $stateProvider.state('sign-in', {
      url: "sign-in",
      templateUrl: "partials/sign-in.html",
      controller: "StudentsController"
    });

    $stateProvider.state('signed-in', {
      url: "who's_here",
      templateUrl: "partials/signed-in.html",
      controller: "StudentsController"
    });
});
