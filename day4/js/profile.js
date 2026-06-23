
const showdetails = (panel, data) => {
    panel.innerHTML = "";

    const name = document.createElement("p");
    name.textContent = `Name: ${data.name}`;
    panel.appendChild(name);

    const course = document.createElement("p");
    course.textContent = `Course: ${data.course}`;
    panel.appendChild(course);

    const skills = document.createElement("p");
    skills.textContent = `Skills: ${data.skills.join(", ")}`;
    panel.appendChild(skills);

    const city = document.createElement("p");
    city.textContent = `City: ${data.city}`;
    panel.appendChild(city);
}


const btn = document.getElementById("btn");

const student_name = document.getElementById("name").value;
const course_name = document.getElementById("course-name").value;
const skills = document.getElementById("skills").value;
const city = document.getElementById("city").value;

skills_arr = skills.split(",").map(skill => skill.trim());

const profile = {
    name: student_name,
    course: course_name,
    skills: skills_arr,
    city: city
};

const old_details_panel = document.getElementById("old-details");

showdetails(old_details_panel, profile);

btn.addEventListener("click", () => {

    const updated_details_panel = document.getElementById("updated-details");

    document.getElementById("updated-details").innerHTML = "";

    const student_name = document.getElementById("name").value;
    const course_name = document.getElementById("course-name").value;
    const skills = document.getElementById("skills").value;
    const city = document.getElementById("city").value;

    skills_arr = skills.split(",").map(skill => skill.trim());

    const updated_profile = structuredClone(profile);
    updated_profile.name = student_name;
    updated_profile.course = course_name;
    updated_profile.skills = skills_arr;
    updated_profile.city = city;

    showdetails(updated_details_panel, updated_profile);

});

