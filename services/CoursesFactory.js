studentLogin.factory('CoursesFactory', function CoursesFactory() {
  var factory = {};
  factory.courses = [{ name: "PHP/JavaScript/Drupal", id: 1, students: [{ name: ["Jose", "Torres"], attendance: false }, { name: ["Annie", "Hoogendoorn"], attendance: false }, { name: ["Timothy", "White"], attendance: false }, { name: ["Alex", "Costa"], attendance: false }, { name: ["Casey", "Heitz"], attendance: false }, { name: ["Logan", "Wu"], attendance: false }, { name: ["Ian", "McKenney"], attendance: false }, { name: ["Kevin", "Tokheim"], attendance: false }, { name: ["Jason", "Bethel"], attendance: false }, { name: ["Kelli", "Margaret"], attendance: false }, { name: ["Samuel", "Martinez"], attendance: false }, { name: ["Samantha", "Maturen"], attendance: false }] }, { name: "Ruby/JavaScript/Rails", id: 2, students: [] }, { name: "Java/JavaScript/Android", id: 3, students: [] }];
  factory.addCourse = function() {
    factory.courses.push({ name: factory.courseName, id: factory.courses.length + 1, students: [] });
    factory.courseName = null;
  };
  return factory;
});
