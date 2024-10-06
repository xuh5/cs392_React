import './CourseCard.css'
const CourseCard = ({ id,course , selected, toggleSelected}) => {
    return (
      <div className="Course card m-1 p-2" onClick={() => toggleSelected(id)} >
        <div className={`card-body ${selected.includes(id) ? 'selected' : ''}`}>
          <h5 className="card-title">{course.term} CS {course.number}</h5>
          <p className="card-text">{course.title}</p>
        </div>
        <div className="card-footer">
          <small className="card-text">{course.meets}</small>
        </div>
      </div>
    );
  };
  
  export default CourseCard;