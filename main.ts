// map , foreach , filter , join , find includes

// array syntax
let numbers: number[] = [1, 2, 3, 4, 5];

//map
let doubleNumbers: number[] = numbers.map(num => num* 2);

console.log(doubleNumbers);

//filter()

let evenNumbers: number[] = numbers.filter(num => num % 2 == 0);

console.log(evenNumbers);

//reduce
let sum: number = numbers.reduce((acc , curr ) => acc + curr ,0);
console.log(sum);

//foreach method

numbers.forEach(num => {console.log(num);
});

number.array.forEach(element => {
    
});

//student management system

interface student {
    name: string;
    id: number;
    age: number;
}

// initial student array
let students: student[] =[
    {name:" Kaneez fatima",id:1 ,age:18},
    {name:" Tabassum fatima",id:2 ,age:16},
    {name:" Faizan raza",id:3 ,age:11},
];

//using map()
let studentNames:string[] = students.map(students => students.name);
console.log("StudentNames", studentNames);


//using filter()

let youngStudents:student[]= students.filter(student => student.age < 17);
console.log("young Students" , youngStudents);
