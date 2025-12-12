import React, { useState } from 'react';
import './App.css';
import SignIn from './Components/Sign in/SignIn';
import Home from './Components/Home/Home';
import videoBg from './Components/video-img/istockphoto-481273422-640_adpp_is.mp4';

function App() {
  const [currentView, setCurrentView] = useState('signin'); // 'signin' or 'home'
  const [userRole, setUserRole] = useState(null); // 'child' or 'doctor'
  const [userName, setUserName] = useState(null);
  const [userImage, setUserImage] = useState(null);

  const handleSignInSuccess = (role, name, image) => {
    setUserRole(role);
    setUserName(name || 'John Doe');
    setUserImage(image);
    setCurrentView('home');
  };

  return (
    <div className="App">
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
      <div className="app-content">
        {currentView === 'signin' ? (
          <SignIn onSignInSuccess={handleSignInSuccess} />
        ) : (
          <Home role={userRole} userName={userName} userImage={userImage} />
        )}
      </div>
    </div>
  );
}

export default App;
