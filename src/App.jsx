

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePages';
// import  BackgroundText from './components/background'
const App = () => {
  return (

    <div className="relative h-screen bg-customGreen overflow-hidden">
      <div className="background-text">ESMICOM 2022</div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
    
  );
};

export default App;


