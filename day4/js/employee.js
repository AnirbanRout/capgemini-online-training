const initialEmployees = [
    { id: 101, name: "Riya Sharma", department: "Engineering", position: "Frontend Developer", salary: 75000, location: "Bangalore", skills: ["HTML", "CSS", "JavaScript", "React"] },
    { id: 102, name: "Amit Kumar", department: "HR", position: "Recruiter", salary: 45000, location: "Delhi", skills: ["Communication", "Negotiation", "MS Office"] },
    { id: 103, name: "Sania Mehta", department: "Marketing", position: "SEO Specialist", salary: 50000, location: "Mumbai", skills: ["SEO", "Content Writing", "Analytics", "Ads"] },
    { id: 104, name: "Vikram Singh", department: "Engineering", position: "Backend Developer", salary: 80000, location: "Bangalore", skills: ["Node.js", "MongoDB", "SQL", "Docker"] },
    { id: 105, name: "Priya Iyer", department: "Design", position: "UI/UX Designer", salary: 60000, location: "Chennai", skills: ["Figma", "Sketch", "Adobe XD"] }
];

let employees = [...initialEmployees];

function renderEmployees(data) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = "";
    data.forEach(employee => {
        const { id, name, department, position, salary } = employee;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>${department}</td>
            <td>${position}</td>
            <td>${salary}</td>
            <td>
                <button onclick="viewDetails(${id})">
                    View Details
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function viewDetails(id) {
    const employee = employees.find(emp => emp.id === id);
    if (!employee) return;
    const { name, department, salary, location } = employee;
    const { position } = employee;
    const [skill1, skill2] = employee.skills;
    const detailsContent = document.getElementById('details-content');

    detailsContent.innerHTML = `
        <div class="detail-item">
            <strong>Name:</strong> ${name}
        </div>
        <div class="detail-item">
            <strong>ID:</strong> ${employee.id}
        </div>
        <div class="detail-item">
            <strong>Position:</strong> ${position}
        </div>
        <div class="detail-item">
            <strong>Department:</strong> ${department}
        </div>
        <div class="detail-item">
            <strong>Salary:</strong> ${salary}
        </div>
        <div class="detail-item">
            <strong>Location:</strong> ${location}
        </div>
        <hr>
        <div class="detail-item">
            <strong>Top 2 Skills:</strong> <br/>
            <span class="skills-tag">${skill1}</span>
            <span class="skills-tag">${skill2}</span>
        </div>
    `;
}

function updateStats(data) {
    const totalCount = data.length;
    if (totalCount === 0) {
        document.getElementById('total-emp').innerText = 0;
        document.getElementById('max-salary').innerText = '0';
        document.getElementById('min-salary').innerText = '0';
        return;
    }
    const salaries = data.map(emp => emp.salary);
    const maxSalary = Math.max(...salaries);
    const minSalary = Math.min(...salaries);
    const avgSalary = salaries.reduce((sum, sal) => sum + sal, 0) / totalCount;
    document.getElementById('total-emp').innerText = totalCount;
    document.getElementById('max-salary').innerText = `${maxSalary}`;
    document.getElementById('min-salary').innerText = `${minSalary}`;
    document.getElementById('avg-salary').innerText = avgSalary.toFixed(2);
}

document.getElementById('employee-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user_id = parseInt(document.getElementById('new-id').value);
    const name = document.getElementById('new-name').value.trim();
    const department = document.getElementById('new-dept').value;
    const position = document.getElementById('new-position').value.trim();
    const salary = parseInt(document.getElementById('new-salary').value);
    const location = document.getElementById('new-location').value.trim();
    const skillsInput = document.getElementById('new-skills').value.trim();
    if (!user_id || !name || !position || !location || isNaN(salary) || salary <= 0) {
        alert("Please fill all fields correctly.");
        return;
    }
    const skills = skillsInput.split(',').map(skill => skill.trim())

    const newEmployee = {
        id: user_id,
        name,
        department,
        position,
        salary,
        location,
        skills
    };

    employees.push(newEmployee);
    renderEmployees(employees);
    updateStats(employees);
    document.getElementById('employee-form').reset();
});

renderEmployees(employees);
updateStats(employees);

document.getElementById('dept-filter').addEventListener('change', (e) => {
    const dept = e.target.value;
    if (dept === "All") {
        renderEmployees(employees);
        updateStats(employees);
    }
    else {
        const filtered = employees.filter(emp => {
            return emp.department === dept;
        });
        renderEmployees(filtered);
        updateStats(filtered);
    }
});

