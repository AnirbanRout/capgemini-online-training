import React, { useState } from "react";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [about, setAbout] = useState("");
  const [focused, setFocused] = useState(false);
  const [welcome, setWelcome] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleHobbies = (e) => {
    const hobby = e.target.value;
    if (e.target.checked) {
      setHobbies([...hobbies, hobby]);
    } else {
      setHobbies(hobbies.filter((h) => h !== hobby));
    }
  };

  const handleFocus = (e) => {
    setFocused(e.target.focus());
    setFocused((e.target.style.backgroundColor = "lightyellow"));
  };

  const handleGreeting = () => {
    setWelcome(!welcome);
  };

  return (
    <div className="student-form">
      <h1>Student Form</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        onFocus={handleFocus}
        value={name}
        onChange={handleName}
      />
      <p>Student Name: {name === "" ? "No name entered" : name}</p>
      <label htmlFor="course">Course:</label>
      <select
        name="course"
        id="course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="">Select a course</option>
        <option value="React">React</option>
        <option value="Angular">Angular</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
      </select>
      <p>Student Course: {course === "" ? "No course selected" : course}</p>
      <h2>Hobbies:</h2>
      <input
        type="checkbox"
        name="hobbies"
        id="Reading"
        value="Reading"
        onChange={handleHobbies}
      />{" "}
      <label htmlFor="Reading">Reading</label>
      <input
        type="checkbox"
        name="hobbies"
        id="Swimming"
        value="Swimming"
        onChange={handleHobbies}
      />
      <label htmlFor="Swimming">Swimming</label>
      <input
        type="checkbox"
        name="hobbies"
        id="Coding"
        value="Coding"
        onChange={handleHobbies}
      />
      <label htmlFor="Coding">Coding</label>
      <p>
        Hobbies:{" "}
        {hobbies.length > 0 ? hobbies.join(", ") : "No hobbies selected"}
      </p>
      <label htmlFor="about">About:</label>
      <textarea
        name="about"
        id="about"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />
      <p>About Student: {about === "" ? "No information provided" : about}</p>
      <button onClick={handleGreeting}>Update Welcome Message</button>
      <p>{welcome ? "Have a great learning day!" : "Welcome Student"}</p>
      <h2>Details:</h2>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>About: {about}</p>
      <p>
        welcome message:
        {welcome ? "Have a great learning day!" : "Welcome Student"}
      </p>
    </div>
  );
};

export default StudentForm;
