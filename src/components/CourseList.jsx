import CourseCard from './CourseCard';
import { hasConflict } from '../utilities/time_check';
import { Link } from 'react-router-dom';
import './CourseList.css';
const CourseList = ({ courses ,selected,toggleSelected}) => {
  return (
    <div className="course-list">
        {Object.entries(courses).map(([key, course]) => { 
        const isConflicting = selected.some(selectedId => hasConflict(course, courses[selectedId]));
          
        return (
          <CourseCard
            key={key}             
            id={key}              
            course={course}       
            selected={selected}
            toggleSelected={toggleSelected}
            isConflicting={isConflicting} 
          />
        );
      })}
    </div>
  );
};

export default CourseList;