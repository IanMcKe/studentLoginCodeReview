studentLogin.controller('CoursesController', function CoursesController($scope, CoursesFactory) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;
});
