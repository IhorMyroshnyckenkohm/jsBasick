class Student {
    constructor(firstName, lastName, birthYear, initialCourse) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.courses = {};
        this.addCourse(initialCourse);
    }

    addCourse(courseName) {
        if (!this.courses[courseName]) {
            this.courses[courseName] = {
                grades: [],
                attendance: [],
            };
        }
    }

    removeCourse(courseName) {
        delete this.courses[courseName];
    }

    addGrade(courseName, grade) {
        if (this.courses[courseName]) {
            this.courses[courseName].grades.push(grade);
        }
    }

    addAttendance(courseName, attended) {
        if (this.courses[courseName]) {
            this.courses[courseName].attendance.push(attended);
        }
    }

    getAverageGrade(courseName) {
        const grades = this.courses[courseName]?.grades || [];
        const sum = grades.reduce((a, b) => a + b, 0);
        return grades.length ? sum / grades.length : 0;
    }

    getAverageAttendance(courseName) {
        const attendance = this.courses[courseName]?.attendance || [];
        const attended = attendance.filter(a => a).length;
        return attendance.length ? attended / attendance.length : 0;
    }

    getTotalClasses(courseName) {
        return this.courses[courseName]?.attendance.length || 0;
    }

    getCoursesInfo() {
        return Object.entries(this.courses).map(([name, data]) => ({
            courseName: name,
            averageGrade: this.getAverageGrade(name),
            averageAttendance: this.getAverageAttendance(name),
            totalClasses: this.getTotalClasses(name),
        }));
    }

    getInfo() {
        return {
            fullName: `${this.firstName} ${this.lastName}`,
            birthYear: this.birthYear,
            courses: this.getCoursesInfo(),
        };
    }
}

class Group {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    removeStudent(firstName, lastName) {
        this.students = this.students.filter(
            student => student.firstName !== firstName || student.lastName !== lastName
        );
    }

    getAttendanceRating(courseName) {
        return this.students
            .map(student => ({
                student: `${student.firstName} ${student.lastName}`,
                averageAttendance: student.getAverageAttendance(courseName),
            }))
            .sort((a, b) => b.averageAttendance - a.averageAttendance);
    }

    getGradeRating(courseName) {
        return this.students
            .map(student => ({
                student: `${student.firstName} ${student.lastName}`,
                averageGrade: student.getAverageGrade(courseName),
            }))
            .sort((a, b) => b.averageGrade - a.averageGrade);
    }
}


const student1 = new Student("Іван", "Іваненко", 2001, "Математика");
const student2 = new Student("Марія", "Петренко", 2002, "Фізика");

student1.addGrade("Математика", 5);
student1.addGrade("Математика", 4);
student1.addAttendance("Математика", true);
student1.addAttendance("Математика", false);

student2.addGrade("Фізика", 3);
student2.addAttendance("Фізика", true);

const group = new Group();
group.addStudent(student1);
group.addStudent(student2);

console.log(group.getAttendanceRating("Математика"));

console.log(group.getGradeRating("Фізика"));

console.log(student1.getInfo());
