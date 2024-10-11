import React from 'react';
import { useFormData } from '../utilities/useFormData';
import { useNavigate } from 'react-router-dom';

const validateCourseData = (key, val) => {
  switch (key) {
    case 'title':
      return val.length >= 2 ? '' : 'Course title must be at least two characters';
    case 'meetingTimes':
      return val === '' || /^(M|Tu|W|Th|F)+( \d{1,2}:\d{2}-\d{1,2}:\d{2})$/.test(val) 
        ? '' : 'must contain days and start-end, e.g., MWF 12:00-13:20';
    default: 
      return '';
  }
};

const InputField = ({name, label, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{label}</label>
    <input 
      type="text" 
      className={`form-control`} 
      id={name} 
      value={state.values[name]} 
      onChange={change}
    />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = ({disabled}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button 
        type="button" 
        className="btn btn-outline-dark me-2" 
        onClick={() => navigate('/')}>
        Cancel
      </button>
      <button 
        type="submit" 
        className="btn btn-primary" 
        disabled={disabled}>
        Submit
      </button>
    </div>
  );
};

const CourseForm = ({ course }) => {
  const [state, handleChange] = useFormData(validateCourseData, {
    title: course?.title || '',
    meetingTimes: course?.meetingTimes || ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!state.errors) {

    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={state.errors ? 'was-validated' : null}>
      <InputField 
        name="title" 
        label="Course Title" 
        state={state} 
        change={handleChange} 
      />
      <InputField 
        name="meetingTimes" 
        label="Meeting Times" 
        state={state} 
        change={handleChange} 
      />
      <ButtonBar disabled={!!state.errors} />
    </form>
  );
};

export default CourseForm;
