studentLogin.controller('StudentsController', function StudentsController($scope, $stateParams, CoursesFactory, UtilitiesFactory) {
  $scope.course = UtilitiesFactory.findById(CoursesFactory.courses, $stateParams.courseId);
  $scope.addStudent = function() {
    $scope.course.students.push({ name: $scope.studentName.split(" "), attendance: false });
    $scope.studentName = null;
  };
});
