
import React, { useState } from 'react';

const SearchBar = ({ students, onStudentSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    onStudentSelect(student);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedStudent(null);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const shouldShowScroll = filteredStudents.length > 3;

  return (
    <div className="search-bar ">
      <div className="search-input ">
        <input
          className="bg-lime-200 rounded-full"
          type="text"
          placeholder="Search for a student..."
          value={searchTerm}
          onChange={handleChange}
        />
        <div className=' py-2'>
        <button onClick={handleReset} className="bg-blue-500 rounded-full text-white p-2 my-1 ml-2 ">
          Reset
        </button>
        </div>
      </div>
      {selectedStudent ? (
        <div className="selected-student">
          {selectedStudent.name}
        </div>
      ) : (
        searchTerm && (
          <div className={`student-results ${shouldShowScroll ? 'scrollable' : ''}`}>
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="student-name text-center cursor-pointer p-2 hover:bg-gray-200"
                onClick={() => handleStudentClick(student)}
              >
                {student.name}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default SearchBar;



/*import React, { useState } from 'react';

const SearchBar = ({ students, onStudentSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    onStudentSelect(student);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedStudent(null);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-bar">
      <div className="search-input">
        <input
          className="bg-red-500"
          type="text"
          placeholder="Search for a student..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleReset} className="bg-blue-500 text-white p-2 ml-2">
          Reset
        </button>
      </div>
      {selectedStudent ? (
        <div className="selected-student">
          {selectedStudent.name}
        </div>
      ) : (
        searchTerm && (
          <div className="student-results">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="student-name cursor-pointer p-2 hover:bg-gray-200"
                onClick={() => handleStudentClick(student)}
              >
                {student.name}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default SearchBar;*/




/*import React, { useState } from 'react';

const SearchBar = ({ students, onStudentSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    onStudentSelect(student);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-bar">
      <input
        className="bg-red-500"
        type="text"
        placeholder="Search for a student..."
        value={searchTerm}
        onChange={handleChange}
      />
      {selectedStudent ? (
        <div className="selected-student">
          {selectedStudent.name}
        </div>
      ) : (
        searchTerm && (
          <div className="student-results">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="student-name cursor-pointer p-2 hover:bg-gray-200"
                onClick={() => handleStudentClick(student)}
              >
                {student.name}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default SearchBar; */



/*import React, { useState } from 'react';

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
              className="student-name cursor-pointer p-2 hover:bg-gray-200"
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

export default SearchBar; */