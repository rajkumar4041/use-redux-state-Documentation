import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ProfileAvatars from '../Profiles';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <div className="logo-icon">R</div>
          <div className="logo-text">
            <span className="logo-title">Redux Toolkit State</span>
            <span className="logo-subtitle">Global State Management Library</span>
          </div>
        </div>
      </div>

      {/* <div className="header-center">
        <div className="search-bar">
          <input type="text" placeholder="Search documentation..." className="search-input" />
          <button className="search-button">
            <span>🔍</span>
          </button>
        </div>
      </div> */}

      <div className="header-right">
        <div className="header-actions">
          <button
            className="theme-toggle-button"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          {/* <button className="action-button">
            <span>🔔</span>
            <span className="notification-badge">3</span>
          </button>
          <button className="action-button">
            <span>⚙️</span>
          </button> */}
          {/* <div className="user-profile"> */}
          {/* <div className="avatar">
              <span>👨‍💻</span>
            </div> */}
          {/* <div className="user-info"> */}
          {/* <span className="user-name">Developer</span> */}
          {/* <span className="user-role">Admin</span> */}
          <ProfileAvatars />
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
