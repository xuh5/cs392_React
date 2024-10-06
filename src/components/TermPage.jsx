import React, { useState } from 'react';
import TermSelector from './TermSelector';
import CourseList from './CourseList';

const TermPage = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const [selected, setSelected] = useState([]);
  
  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

  const filteredCourses = Object.entries(courses).filter(([key, course]) => course.term === selectedTerm);

  return (
    <div>
      <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <CourseList courses={filteredCourses} selected={selected} toggleSelected={toggleSelected} />
    </div>
  );
};

export default TermPage;
