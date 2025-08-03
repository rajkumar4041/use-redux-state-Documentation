import React from 'react';

interface Tab {
  id: string;
  name: string;
  icon: string;
  component: React.ComponentType;
}

interface SidebarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  tabs: Tab[];
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, tabs }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-title">Navigations</h3>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {tabs.map((tab) => (
            <li key={tab.id} className="nav-item">
              <button
                className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => onTabChange(tab.id)}
              >
                <span className="nav-icon">{tab.icon}</span>
                <span className="nav-text">{tab.name}</span>
                {activeTab === tab.id && <div className="active-indicator" />}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="version-label">Version</span>
          <span className="version-number">1.2.1</span>
        </div>
        <div className="package-info">
          <span className="package-name">redux-toolkit-state</span>
        </div>
        <div className="package-info">
          <div style={{ fontSize: '13px', color: '#777' }}>
            <span>
              &copy; {new Date().getFullYear()} Rajkumar. All rights reserved.
              <a
                href="https://github.com/rajkumar4041"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
