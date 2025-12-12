import React, { useState } from 'react';
import './Navbar.css';
import { FaBell } from 'react-icons/fa';
import { FaHome, FaBook, FaChartBar, FaComments } from 'react-icons/fa';

const Navbar = ({ userName, userImage, onNavigate }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [notificationCount] = useState(3);

  const menuItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'exercises', label: 'Exercises', icon: FaBook },
    { id: 'reports', label: 'Reports', icon: FaChartBar },
    { id: 'chat', label: 'Chat', icon: FaComments }
  ];

  const handleMenuClick = (itemId) => {
    setShowMenu(false);
    if (onNavigate) {
      onNavigate(itemId);
    }
  };

  return (
    <div className="home-navbar">
      <div className="navbar-content" onClick={() => setShowMenu(!showMenu)}>
        <div className="navbar-left">
          <div className="user-avatar">
            {userImage ? (
              <img src={userImage} alt="User" className="avatar-img" />
            ) : (
              <div className="avatar-placeholder">
                {userName ? userName.charAt(0).toUpperCase() : 'U'}
              </div>
            )}
          </div>
          <div className="user-info">
            <h3 className="user-greeting">Hello, {userName || 'User'}</h3>
            <p className="welcome-text">Welcome Back</p>
          </div>
        </div>
        <div className="navbar-right">
          <div className="notification-icon">
            <FaBell />
            {notificationCount > 0 && (
              <span className="notification-badge">{notificationCount}</span>
            )}
          </div>
        </div>
      </div>
      
      {showMenu && (
        <div className="navbar-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="menu-item"
                onClick={() => handleMenuClick(item.id)}
              >
                <Icon className="menu-icon" />
                <span className="menu-label">{item.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;

