studentLogin.factory('CoursesFactory', function CoursesFactory() {
  var factory = {};
  factory.courses = [{ name: "PHP/JavaScript/Drupal", id: 1, students: [] }, { name: "Ruby/JavaScript/Rails", id: 2, students: [] }, { name: "Java/JavaScript/Android", id: 3, students: [] }];
  factory.addCourse = function() {
    factory.courses.push({ name: factory.courseName, id: factory.courses.length + 1, students: [] });
    factory.courseName = null;
  };
  return factory;
});
