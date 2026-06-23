const CourseCard = ({ course_data }) => {
  return (
    <div>
      <h3>Course Card</h3>
      <p>Course: {course_data.course}</p>
      <p>Trainer: {course_data.trainer}</p>
      <p>Duration: {course_data.duration}</p>
    </div>
  );
};

export default CourseCard;
