import React, { useState } from 'react';
import './Home.css';
import Navbar from './Navbar';

const Home = ({ role, userName, userImage }) => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="home-container">
      <Navbar 
        userName={userName || 'John Doe'} 
        userImage={userImage}
        onNavigate={handleNavigate}
      />
      <div className="home-content">
        {currentPage === 'home' && (
          <div className="home-main">
            <h1 className="home-title">Welcome to Home!</h1>
            <p className="home-subtitle">
              {role === 'child' 
                ? 'Explore games, stories, and learning adventures!' 
                : 'Access patient records, manage appointments, and clinical tools.'}
            </p>
          </div>
        )}
        {currentPage === 'exercises' && (
          <div className="page-content">
            <h2>Exercises</h2>
            <p>Exercises content will be here</p>
          </div>
        )}
        {currentPage === 'reports' && (
          <div className="page-content">
            <h2>Reports</h2>
            <p>Reports content will be here</p>
          </div>
        )}
        {currentPage === 'chat' && (
          <div className="page-content">
            <h2>Chat</h2>
            <p>Chat content will be here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

