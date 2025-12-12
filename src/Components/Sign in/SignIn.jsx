import React, { useState } from 'react';
import './SignIn.css';
import childImage from './Activities for Kids - ALDI UK.jfif';
import doctorImage from './تنزيل.jfif';
import WelcomeBack from './WelcomeBack';
import SignUp from './SignUp';

const SignIn = ({ onSignInSuccess }) => {
  const [selectedRole, setSelectedRole] = useState(null); // 'child' or 'doctor'
  const [currentScreen, setCurrentScreen] = useState('role-selection'); // 'role-selection', 'signin', 'signup'

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setCurrentScreen('signin');
  };

  const handleScreenChange = (screen) => {
    setCurrentScreen(screen);
  };

  const handleSignInSuccess = (name, image) => {
    if (onSignInSuccess) {
      onSignInSuccess(selectedRole, name, image);
    }
  };

  // Show Welcome Back (Sign In) screen
  if (currentScreen === 'signin') {
    return <WelcomeBack role={selectedRole} onScreenChange={handleScreenChange} onSignInSuccess={handleSignInSuccess} />;
  }

  // Show Sign Up screen
  if (currentScreen === 'signup') {
    return (
      <SignUp 
        role={selectedRole} 
        onScreenChange={handleScreenChange}
        onSignUpSuccess={handleSignInSuccess}
      />
    );
  }

  // Show role selection screen
  return (
    <div className="signin-container">
      <div className="signin-content">
        <h1 className="signin-title">Who are you?</h1>
        <div className="role-options">
          <div 
            className="role-card" 
            style={{backgroundImage: `url("${childImage}")`}}
            onClick={() => handleRoleSelect('child')}
          >
            <div className="role-overlay"></div>
            <div className="role-content">
              <h2 className="role-title">I'm a Child</h2>
              <p className="role-description">Explore games, stories, and learning adventures!</p>
            </div>
          </div>
          <div 
            className="role-card" 
            style={{backgroundImage: `url("${doctorImage}")`}}
            onClick={() => handleRoleSelect('doctor')}
          >
            <div className="role-overlay"></div>
            <div className="role-content">
              <h2 className="role-title">I'm a Doctor</h2>
              <p className="role-description">Access patient records, manage appointments, and clinical tools.</p>
              <a href="/support" className="support-link">Need help? Contact support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

