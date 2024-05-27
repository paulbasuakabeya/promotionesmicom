

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePages';
import  BackgroundText from './components/background'
const App = () => {
  return (
    <div className="bg-customGreen relative h-screen">
       <BackgroundText />
    <Router >
       <h1 className="">
      ESMICOM 2022
      </h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;



/*import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import studentsData from './data/students';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Border = styled.div`
  border: 5px solid #4CAF50;
  padding: 20px;
  border-radius: 50%;
  animation: ${rotate} 10s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 400px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 80%;
  margin: 20px 0;
`;

const StudentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StudentItem = styled.li`
  cursor: pointer;
  padding: 10px;
  background-color: #f1f1f1;
  margin-bottom: 5px;
  border-radius: 5px;
  &:hover {
    background-color: #ddd;
  }
`;

const StudentDetails = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSelectedStudent(null);
  };

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Promotion 2024</h1>
      <Border>
        <SearchInput
          type="text"
          placeholder="Rechercher un élève..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </Border>
      {searchTerm && (
        <StudentList>
          {filteredStudents.map((student) => (
            <StudentItem key={student.id} onClick={() => handleSelectStudent(student)}>
              {student.name}
            </StudentItem>
          ))}
        </StudentList>
      )}
      {selectedStudent && (
        <StudentDetails>
          <h2>{selectedStudent.name}</h2>
          <img src={selectedStudent.photo} alt={selectedStudent.name} width="150" />
          <p><strong>Email:</strong> {selectedStudent.email}</p>
          <p><strong>Téléphone:</strong> {selectedStudent.phone}</p>
        </StudentDetails>
      )}
    </div>
  );
};

export default App;
*/