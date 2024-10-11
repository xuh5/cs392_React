import './CourseCard.css';
import { Link } from 'react-router-dom';

const CourseCard = ({ id, course, selected, toggleSelected, isConflicting }) => {
  const isSelected = selected.includes(id);

  const handleClick = () => {
    if (!isConflicting || isSelected) {
      toggleSelected(id);
    }
  };

  return (
    <div
      className={`Course card m-1 p-2 ${isConflicting && !isSelected ? 'conflicting' : ''} ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <div className="card-body">
        <h5 className="card-title">{course.term} CS {course.number}</h5>
        <p className="card-text">{course.title}</p>
        
      </div>
      <div className="card-footer">
        <small className="card-text">{course.meets}</small>
        <Link to={`/edit/${id}`}>
      <button className="btn btn-primary">
        <i className="bi bi-pencil"></i> Edit
      </button>
    </Link>
      </div>
    </div>
  );
};

export default CourseCard;
