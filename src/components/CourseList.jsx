import CourseCard from './CourseCard';
import './CourseList.css';
const CourseList = ({ courses ,selected,toggleSelected}) => {
  return (
    <div className="course-list">
      {courses.map(([key, course]) => (
        <CourseCard key={key} id={key}  course={course} selected={selected} toggleSelected={toggleSelected}/>
      ))}
    </div>
  );
};

export default CourseList;