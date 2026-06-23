
const add_student = document.getElementById("submit-student");
const add_teacher = document.getElementById("submit-teacher");

const show_all = document.getElementById("show-all");
const clear_all = document.getElementById("clear-all");


const students = [];
const teachers = [];


class Person {
    constructor(id, name, age, type) {

        this.id = id;
        this.name = name;
        this.age = age;
        this.type = type;
    }
    getInfo() {
        return `
            ID: ${this.id}
            Name: ${this.name}
            Age: ${this.age}
        `;
    }
}

class Student extends Person {
    constructor(id, name, age, grade) {
        super(id, name, age, "Student");
        this.grade = grade;
    }

    getDetails() {
        return `
            ID: ${this.id}
            Name: ${this.name}
            Age: ${this.age}
            Grade: ${this.grade}
            Performance: ${gradeMessage(this.grade)}
        `;
    }
}


class Teacher extends Person {
    constructor(id, name, age, subject, salary) {
        super(id, name, age, "Teacher");
        this.subject = subject;
        this.salary = salary;
    }

    getDetails() {
        return `
            ID: ${this.id}
            Name: ${this.name}
            Age: ${this.age}
            Subject: ${this.subject}
            Salary: ${this.salary}
            Annual Salary: ${this.salary * 12}
        `;
    }
}

const gradeMessage = (student_grade) => {
    switch (student_grade) {
        case "A":
            return "Excellent";
        case "B":
            return "Good";
        case "C":
            return "Average";
        case "D":
            return "Below Average";
        case "F":
            return "Failing";
        default:
            return "Invalid Grade";
    }
};


add_student.addEventListener("click", () => {

    const id = document.getElementById("student-id").value;
    const name = document.getElementById("student-name").value;
    const age = document.getElementById("student-age").value;
    const grade = document.getElementById("student-grade").value.toUpperCase();
    if (
        id.trim() === "" ||
        name.trim() === "" ||
        age.trim() === "" ||
        grade.trim() === ""
    ) {
        alert("Please fill all student fields");
        return;
    }

    const student = new Student(id, name, age, grade);
    students.push(student);
    displayCards();


    document.getElementById("student-id").value = "";
    document.getElementById("student-name").value = "";
    document.getElementById("student-age").value = "";
    document.getElementById("student-grade").value = "";
});


add_teacher.addEventListener("click", () => {

    const id = document.getElementById("teacher-id").value;
    const name = document.getElementById("teacher-name").value;
    const age = document.getElementById("teacher-age").value;
    const subject = document.getElementById("teacher-subject").value;
    const salary = document.getElementById("teacher-salary").value;
    if (
        id.trim() === "" ||
        name.trim() === "" ||
        age.trim() === "" ||
        subject.trim() === "" ||
        salary.trim() === ""
    ) {
        alert("Please fill all teacher fields");
        return;
    }

    const teacher = new Teacher(id, name, age, subject, salary);
    teachers.push(teacher);
    displayCards();

    document.getElementById("teacher-id").value = "";
    document.getElementById("teacher-name").value = "";
    document.getElementById("teacher-age").value = "";
    document.getElementById("teacher-subject").value = "";
    document.getElementById("teacher-salary").value = "";
});


const displayCards = () => {

    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    students.forEach((student) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>Student</h2>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Age:</strong> ${student.age}</p>
            <p><strong>Grade:</strong> ${student.grade}</p>
            <p>
                <strong>Performance:</strong>
                ${gradeMessage(student.grade)}
            </p>
        `;
        cards.appendChild(card);
    });

    teachers.forEach((teacher) => {

        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h2>Teacher</h2>
            <p><strong>ID:</strong> ${teacher.id}</p>
            <p><strong>Name:</strong> ${teacher.name}</p>
            <p><strong>Age:</strong> ${teacher.age}</p>
            <p><strong>Subject:</strong> ${teacher.subject}</p>
            <p><strong>Salary:</strong> ${teacher.salary}</p>
            <p>
                <strong>Annual Salary:</strong>
                ${teacher.salary * 12}
            </p>
        `;
        cards.appendChild(card);
    });
};


show_all.addEventListener("click", () => {
    displayCards();
});

clear_all.addEventListener("click", () => {
    students.length = 0;
    teachers.length = 0;
    document.getElementById("cards").innerHTML = "";
});


const add_student_btn = document.getElementById("add-student-btn");
const add_teacher_btn = document.getElementById("add-teacher-btn");
const student_section = document.getElementById("add-student");
const teacher_section = document.getElementById("add-teacher");

add_student_btn.addEventListener("click", () => {
    student_section.style.display = "block";
    teacher_section.style.display = "none";
});

add_teacher_btn.addEventListener("click", () => {
    teacher_section.style.display = "block";
    student_section.style.display = "none";
});
