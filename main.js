// map , foreach , filter , join , find includes
// array syntax
var numbers = [1, 2, 3, 4, 5];
//map
var doubleNumbers = numbers.map(function (num) { return num * 2; });
console.log(doubleNumbers);
//filter()
var evenNumbers = numbers.filter(function (num) { return num % 2 == 0; });
console.log(evenNumbers);
//reduce
var sum = numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
console.log(sum);
//foreach method
numbers.forEach(function (num) {
    console.log(num);
});
// initial student array
var students = [
    { name: " Kaneez fatima", id: 1, age: 18 },
    { name: " Tabassum fatima", id: 2, age: 16 },
    { name: " bisma", id: 3, age: 11 },
];
//using map()
var studentNames = students.map(function (students) { return students.name; });
console.log("StudentNames", studentNames);
//using filter()
var youngStudents = students.filter(function (student) { return student.age < 17; });
console.log("young Students", youngStudents);
