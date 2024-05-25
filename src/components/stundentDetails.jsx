import React from 'react';

const StudentDetails = ({ student }) => {
  if (!student) {
    return <div className="student-details">Select a student to see details</div>;
  }

  return (
    <div className="student-details">
      <img src={student.cover} alt={student.name} />
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Phone: {student.phone}</p>
    </div>
  );
};

export default StudentDetails;
