import React from 'react';
import { useFormData } from '../utilities/useFormData';
import { useNavigate } from 'react-router-dom';

const CourseForm = ({ course, onCancel }) => {
  const [state, handleChange] = useFormData(null, {
    title: course?.title || '',
    meetingTimes: course?.meetingTimes || ''
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const handleCancel = () => {
    navigate('/');  
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Course Title</label>
        <input 
          id="title" 
          type="text" 
          value={state.values.title} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="meetingTimes">Meeting Times</label>
        <input 
          id="meetingTimes" 
          type="text" 
          value={state.values.meetingTimes} 
          onChange={handleChange} 
        />
      </div>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default CourseForm;
