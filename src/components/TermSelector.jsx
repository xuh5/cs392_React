import React from 'react';

const TermSelector = ({ selectedTerm, setSelectedTerm }) => {
  return (
    <div>
      <button
        onClick={() => setSelectedTerm('Fall')}
        className={selectedTerm === 'Fall' ? 'selected' : ''}
      >
        Fall
      </button>
      <button
        onClick={() => setSelectedTerm('Winter')}
        className={selectedTerm === 'Winter' ? 'selected' : ''}
      >
        Winter
      </button>
      <button
        onClick={() => setSelectedTerm('Spring')}
        className={selectedTerm === 'Spring' ? 'selected' : ''}
      >
        Spring
      </button>
    </div>
  );
};

export default TermSelector;
