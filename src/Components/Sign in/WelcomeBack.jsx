import React, { useState } from 'react';
import './WelcomeBack.css';
import ForgotPassword from './ForgotPassword';
import SuccessDialog from './SuccessDialog';
import welcomeBg from '../video-img/sign-in,login-out/log_image.png';

const WelcomeBack = ({ role, onScreenChange, onSignInSuccess }) => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // In a real app, you would fetch user data from API based on phoneNumber
    // For now, we'll use default values
    const userName = 'John Doe'; // This should come from API
    const userImage = role === 'child' ? null : null; // This should come from API
    
    setShowSuccessDialog(true);
    // Store user data temporarily
    window.tempUserData = { name: userName, image: userImage };
  };

  const handleDialogClose = () => {
    setShowSuccessDialog(false);
    if (onSignInSuccess) {
      const userData = window.tempUserData || { name: phoneNumber || 'John Doe', image: null };
      onSignInSuccess(userData.name, userData.image);
    }
  };

  if (showForgotPassword) {
    return <ForgotPassword role={role} onBack={() => setShowForgotPassword(false)} />;
  }

  return (
    <>
      <div className="welcome-back-container">
        <div className="welcome-back-content">
          <h1 className="welcome-title">WELCOME BACK</h1>
          <div className="welcome-illustration">
            <img src={welcomeBg} alt="Welcome illustration" className="illustration-img" />
          </div>
          <div className="form-container">
            <div className="input-group">
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="form-input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            
            <div className="input-group">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>

            <button 
              type="button"
              className="forgot-password-link"
              onClick={() => setShowForgotPassword(true)}
            >
              Forgot Password?
            </button>

            <button className="signin-btn" onClick={handleSignIn}>
              SIGN IN
            </button>

            <div className="or-separator">
              <span>OR</span>
            </div>

            <button className="signup-btn" onClick={() => onScreenChange('signup')}>
              SIGN UP
            </button>
          </div>
        </div>
      </div>
      {showSuccessDialog && (
        <SuccessDialog 
          onClose={handleDialogClose} 
          userName={phoneNumber || 'User'}
        />
      )}
    </>
  );
};

export default WelcomeBack;

