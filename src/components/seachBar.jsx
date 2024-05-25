import React, { useState } from 'react';

const SearchBar = ({ students, onStudentSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-bar">
      <input className='bg-red-500'
        type="text"
        placeholder="Search for a student..."
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm && (
        <div className="student-results">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="student-name"
              onClick={() => onStudentSelect(student)}
            >
              {student.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;