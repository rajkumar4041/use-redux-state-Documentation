import React from 'react';

const GettingStartedPage: React.FC<{ onTabClick?: (tab: string) => void }> = ({ onTabClick }) => {
  return (
    <div className="getting-started-page">
      <div className="page-header">
        <h1>Getting Started</h1>
        <p>Learn how to install and set up Redux Toolkit State in your React application.</p>
      </div>

      <div className="content-grid">
        {/* Installation Section */}
        <section className="content-section">
          <h2>Installation</h2>
          <div className="installation-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Install the Package</h3>
                <div className="code-block">
                  <div className="code-header">
                    <span>Terminal</span>
                    <button className="copy-button">Copy</button>
                  </div>
                  <pre>
                    <code>npm install redux-toolkit-state</code>
                  </pre>
                </div>
                <p>Or using yarn:</p>
                <div className="code-block">
                  <pre>
                    <code>yarn add redux-toolkit-state</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Wrap Your App</h3>
                <p>Wrap your React application with the GlobalReduxProvider:</p>
                <div className="code-block">
                  <div className="code-header">
                    <span>App.tsx</span>
                    <button className="copy-button">Copy</button>
                  </div>
                  <pre>
                    <code>{`import { GlobalReduxProvider } from 'redux-toolkit-state';

function App() {
  return (
    <GlobalReduxProvider>
      <YourApp />
    </GlobalReduxProvider>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Start Using Hooks</h3>
                <p>Use the hooks in your components:</p>
                <div className="code-block">
                  <div className="code-header">
                    <span>Component.tsx</span>
                    <button className="copy-button">Copy</button>
                  </div>
                  <pre>
                    <code>{`import { useReduxState } from 'redux-toolkit-state';

function Counter() {
  const [count, setCount] = useReduxState('counter', 0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="content-section">
          <h2>Quick Start Example</h2>
          <div className="example-card">
            <div className="example-header">
              <h3>Simple Counter App</h3>
              <span className="example-badge">Basic</span>
            </div>
            <div className="example-content">
              <div className="code-tabs">
                <div className="tab-header">
                  <button className="tab-button active">App.tsx</button>
                  <button className="tab-button">Counter.tsx</button>
                </div>
                <div className="tab-content">
                  <pre>
                    <code>{`import React from 'react';
import { GlobalReduxProvider } from 'redux-toolkit-state';
import Counter from './Counter';

function App() {
  return (
    <GlobalReduxProvider>
      <div className="app">
        <h1>My Counter App</h1>
        <Counter />
      </div>
    </GlobalReduxProvider>
  );
}

export default App;`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="content-section">
          <h2>Requirements</h2>
          <div className="requirements-grid">
            <div className="requirement-card">
              <div className="requirement-icon">⚛️</div>
              <h3>React</h3>
              <p>React 16.8+ (for hooks support)</p>
            </div>
            <div className="requirement-card">
              <div className="requirement-icon">📝</div>
              <h3>TypeScript</h3>
              <p>TypeScript 4.0+ (recommended)</p>
            </div>
            <div className="requirement-card">
              <div className="requirement-icon">📦</div>
              <h3>Node.js</h3>
              <p>Node.js 14+ and npm/yarn</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="content-section">
          <h2>Next Steps</h2>
          <div className="next-steps">
            <div className="step-link">
              <span className="step-icon">💡</span>
              <div className="step-info">
                <h3>Explore Examples</h3>
                <p>Check out our comprehensive examples to learn advanced patterns.</p>
              </div>
              <button className="step-button" onClick={() => onTabClick?.('examples')}>
                View Examples
              </button>
            </div>
            <div className="step-link">
              <span className="step-icon">📚</span>
              <div className="step-info">
                <h3>Read Documentation</h3>
                <p>Dive deep into the API reference and advanced concepts.</p>
              </div>
              <button className="step-button" onClick={() => onTabClick?.('documentation')}>
                Read Docs
              </button>
            </div>
            <div className="step-link">
              <span className="step-icon">⭐</span>
              <div className="step-info">
                <h3>Discover Features</h3>
                <p>Learn about all the powerful features available in the library.</p>
              </div>
              <button className="step-button" onClick={() => onTabClick?.('features')}>
                Explore Features
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GettingStartedPage;
