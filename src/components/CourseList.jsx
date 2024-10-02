const CourseList = ({ courses }) => {
  return (
    <div>
      {Object.values(courses).map((course, index) => (
        <p key={index}>
          {course.term} CS {course.number}: {course.title}
        </p>
      ))}
    </div>
  );
};

export default CourseList;