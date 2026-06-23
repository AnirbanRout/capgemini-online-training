const StudentProfile = ({ student_data }) => {
  return (
    <div>
      <h3>Student Profile</h3>
      <p>Name: {student_data.name}</p>
      <p>Batch: {student_data.batch}</p>
      <p>Skill: {student_data.skill}</p>
    </div>
  );
};

export default StudentProfile;
