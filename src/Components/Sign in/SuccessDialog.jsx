import React, { useState } from 'react';
import './SuccessDialog.css';
import successImage from '../video-img/sign-in,login-out/Jumping girl (2).gif';
import { FaArrowRight } from 'react-icons/fa';
import videoBg from '../video-img/istockphoto-481273422-640_adpp_is.mp4';

const SuccessDialog = ({ onClose, userName }) => {
  const [showWelcome, setShowWelcome] = useState(false);
  const word = "Success";
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];
  
  const handleOkClick = () => {
    setShowWelcome(true);
  };

  const handleArrowHover = () => {
    if (onClose) {
      onClose();
    }
  };

  if (showWelcome) {
    return (
      <div className="welcome-page">
        <video className="welcome-video-background" autoPlay loop muted playsInline>
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="welcome-video-overlay"></div>
        <div className="welcome-content">
          <h2 className="welcome-message">Welcome, {userName || 'User'}!</h2>
          <p> Explore games, stories, and learning adventures! </p>
          <div className="arrow-container" onMouseEnter={handleArrowHover}>
            <FaArrowRight className="home-arrow" />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="dialog-title">
          {word.split('').map((char, index) => (
            <span
              key={index}
              className="animated-letter"
              style={{
                '--delay': `${index * 0.1}s`,
                '--color': colors[index % colors.length]
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>
        <div className="dialog-icon">
          <img src={successImage} alt="Success" className="dialog-image" />
        </div>
        <button className="dialog-ok-btn" onClick={handleOkClick}>
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessDialog;

