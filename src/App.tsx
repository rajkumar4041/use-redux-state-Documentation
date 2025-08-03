import './App.css';

import { useState } from 'react';
import GlobalReduxProvider from 'redux-toolkit-state';
// Import all page components
import Header from './components/Header';
// Import components
import Sidebar from './components/Sidebar';
import AdvantagesPage from './pages/AdvantagesPage';
import DocumentationPage from './pages/DocumentationPage';
import ExamplesPage from './pages/ExamplesPage';
import FeaturesPage from './pages/FeaturesPage';
import GettingStartedPage from './pages/GettingStartedPage';
import HomePage from './pages/HomePage';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', name: 'Home', icon: '🏠', component: HomePage },
    { id: 'getting-started', name: 'Getting Started', icon: '🚀', component: GettingStartedPage },
    { id: 'examples', name: 'Examples', icon: '💡', component: ExamplesPage },
    { id: 'documentation', name: 'Documentation', icon: '📚', component: DocumentationPage },
    { id: 'features', name: 'Features', icon: '⭐', component: FeaturesPage },
    { id: 'advantages', name: 'Advantages', icon: '🏆', component: AdvantagesPage },
  ];

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component || HomePage;

  return (
    <GlobalReduxProvider>
      <div className="app">
        <Header />
        <div className="app-container">
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />
          <main className="main-content">
            <ActiveComponent onTabClick={setActiveTab} />
          </main>
        </div>
      </div>
    </GlobalReduxProvider>
  );
}

export default App;
