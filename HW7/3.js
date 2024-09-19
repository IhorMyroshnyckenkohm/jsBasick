function calculateAverageGrade(students) {
    let totalGrade = 0;

    for (let i = 0; i < students.length; i++) {
        totalGrade += students[i].averageGrade;
    }

    return totalGrade / students.length;
}
const students = [
    { name: "John", age: 20, averageGrade: 1 },
    { name: "Jane", age: 22, averageGrade: 100 },
    { name: "Mark", age: 21, averageGrade: 10 }
];

console.log(calculateAverageGrade(students));
// = 85
