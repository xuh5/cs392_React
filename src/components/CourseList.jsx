import CourseCard from './CourseCard';
import './CourseList.css';
const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {Object.values(courses).map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default CourseList;