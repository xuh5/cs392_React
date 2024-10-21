import './CourseCard.css';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../utilities/profiles';

const CourseCard = ({ id, course, selected, toggleSelected, isConflicting }) => {
  const isSelected = selected.includes(id);

  const handleClick = () => {
    if (!isConflicting || isSelected) {
      toggleSelected(id);
    }
  };
  const navigate = useNavigate();
  const [{user, isAdmin}, isLoading, error] = useProfile();
 
  const handleEdit = () => {
    navigate(`/edit/${id}`, { state: { course , courseid : id } }); 
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
        {isAdmin && (
          <button className="btn btn-primary" onClick={handleEdit}>
            <i className="bi bi-pencil"></i> Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
