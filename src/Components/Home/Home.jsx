import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from './Navbar';
import Chat from './Chat';

const Home = ({ role, userName, userImage }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  // Mock data for sessions
  const sessions = [
    { id: 1, title: 'Sounds Tutoring', date: '25th Dec 2024', time: '3:00 PM - 4:00 PM' },
    { id: 2, title: 'Sounds Tutoring', date: '26th Dec 2024', time: '3:00 PM - 4:00 PM' },
    { id: 3, title: 'Sounds Tutoring', date: '27th Dec 2024', time: '3:00 PM - 4:00 PM' },
    { id: 4, title: 'Sounds Tutoring', date: '28th Dec 2024', time: '3:00 PM - 4:00 PM' }
  ];

  // Progress data
  const soundsWordsPercentage = 70;
  const fluencyData = [30, 45, 60, 55, 70, 75, 80];

  return (
    <div className="home-container">
      <Navbar 
        userName={userName || 'John Doe'} 
        userImage={userImage}
        onNavigate={handleNavigate}
      />
      <div className="home-content">
        {currentPage === 'home' && (
          <div className={`home-main ${isLoaded ? 'loaded' : ''}`}>
            {/* Progress Section */}
            <div className={`progress-section ${isLoaded ? 'fade-in' : ''}`}>
              <div className="progress-card">
                <h2 className="progress-title">Your Child's Progress</h2>
                <div className="progress-content">
                  {/* Sounds & Words Gauge */}
                  <div className="gauge-container">
                    <div className="gauge-wrapper">
                      <svg className="gauge" viewBox="0 0 200 120">
                        {/* Background arc */}
                        <path
                          d="M 20 100 A 80 80 0 0 1 180 100"
                          fill="none"
                          stroke="#e0e0e0"
                          strokeWidth="20"
                          strokeLinecap="round"
                        />
                        {/* Green section */}
                        <path
                          d="M 20 100 A 80 80 0 0 1 60 60"
                          fill="none"
                          stroke="#4CAF50"
                          strokeWidth="20"
                          strokeLinecap="round"
                        />
                        {/* Yellow section */}
                        <path
                          d="M 60 60 A 80 80 0 0 1 100 50"
                          fill="none"
                          stroke="#FFC107"
                          strokeWidth="20"
                          strokeLinecap="round"
                        />
                        {/* Orange section */}
                        <path
                          d="M 100 50 A 80 80 0 0 1 140 60"
                          fill="none"
                          stroke="#FF9800"
                          strokeWidth="20"
                          strokeLinecap="round"
                        />
                        {/* Red section */}
                        <path
                          d="M 140 60 A 80 80 0 0 1 180 100"
                          fill="none"
                          stroke="#F44336"
                          strokeWidth="20"
                          strokeLinecap="round"
                        />
                        {/* Needle */}
                        <g transform={`rotate(${(soundsWordsPercentage / 100) * 180 - 90}, 100, 100)`}>
                          <line
                            x1="100"
                            y1="100"
                            x2="100"
                            y2="20"
                            stroke="#333"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </g>
                        {/* Center circle */}
                        <circle cx="100" cy="100" r="8" fill="#333" />
                      </svg>
                      <div className="gauge-percentage">{soundsWordsPercentage}%</div>
                    </div>
                    <p className="gauge-label">Sounds & Words</p>
                    <div className="gauge-numbers">
                      <span>2.</span>
                      <span>4.</span>
                      <span>6.</span>
                      <span>8.</span>
                    </div>
                  </div>

                  {/* Fluency Score Graph */}
                  <div className="graph-container">
                    <div className="graph-wrapper">
                      <svg className="fluency-graph" viewBox="0 0 200 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#98D8C8" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#98D8C8" stopOpacity="0.1" />
                          </linearGradient>
                        </defs>
                        {/* Area under curve */}
                        <path
                          d={`M 0,100 ${fluencyData.map((value, index) => {
                            const x = (index / (fluencyData.length - 1)) * 200;
                            const y = 100 - (value / 100) * 80;
                            return `L ${x},${y}`;
                          }).join(' ')} L 200,100 Z`}
                          fill="url(#gradient)"
                        />
                        {/* Line */}
                        <polyline
                          points={fluencyData.map((value, index) => {
                            const x = (index / (fluencyData.length - 1)) * 200;
                            const y = 100 - (value / 100) * 80;
                            return `${x},${y}`;
                          }).join(' ')}
                          fill="none"
                          stroke="#F44336"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="graph-label">Fluency Score</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sessions Section */}
            <div className={`sessions-section ${isLoaded ? 'fade-in' : ''}`}>
              <h2 className="sessions-title">Upcoming Sessions</h2>
              <div className="sessions-grid">
                {sessions.map((session, index) => (
                  <div 
                    key={session.id} 
                    className={`session-card ${isLoaded ? 'slide-up' : ''}`}
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <h3 className="session-title">{session.title}</h3>
                    <div className="session-info">
                      <p className="session-date">Date: {session.date}</p>
                      <p className="session-time">Time: {session.time}</p>
                    </div>
                    <button className="session-join-btn">
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </div>
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
          <Chat />
        )}
      </div>
    </div>
  );
};

export default Home;

