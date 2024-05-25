import React, { useState } from 'react';
import SearchBar from '../components/seachBar';
import StudentDetails from '../components/stundentDetails';
import studentsData from '../data/students';
import './HomePage.css';

const HomePage = () => {
 const [selectedStudent, setSelectedStudent] = useState(null);

 const handleStudentSelect = (student) => {
   setSelectedStudent(student);
 };

 return (
   <div className="home-page">
     <div className="border-animated"></div>
     <SearchBar students={studentsData} onStudentSelect={handleStudentSelect} />
     <StudentDetails student={selectedStudent} />
   </div>
 );
};

export default HomePage;


