import React, { useState } from 'react';
import TermSelector from './TermSelector';
import CourseList from './CourseList';
import Modal from './Modal';
import Cart from './Cart';
const TermPage = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const [selected, setSelected] = useState([]);
  
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

  const filteredCourses = Object.fromEntries(
    Object.entries(courses)
      .filter(([key, course]) => course.term === selectedTerm)
  );

  return (
    <div>
        <div className="d-flex">
          <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
          <button className="btn btn-outline-dark ms-auto" onClick={openModal}>
            <i className="bi bi-cart4"></i>
          </button>
        </div>
      <Modal open={open} close={closeModal}>  <Cart selected={selected} courses={courses} /></Modal>

      <CourseList courses={filteredCourses} selected={selected} toggleSelected={toggleSelected} />
    </div>
  );
};

export default TermPage;
