import React from 'react';

const HomePage: React.FC<{ onTabClick?: (tab: string) => void }> = ({ onTabClick }) => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title" style={{ color: 'var(--primary-color)' }}>
            Redux Toolkit State Management
          </h1>
          <p className="hero-subtitle">
            A <b>powerful</b>, <b>lightweight</b>, and <b>intuitive</b> state management solution
            for React applications. Built with TypeScript and designed for modern development
            workflows.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => onTabClick?.('getting-started')}>
              Get Started
            </button>
            <button className="btn btn-secondary" onClick={() => onTabClick?.('examples')}>
              View Examples
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-preview">
            <div className="code-header">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
            </div>
            <pre className="code-content">
              <code>{`import GlobalReduxProvider, { useReduxState } 
              from 'redux-toolkit-state';

<GlobalReduxProvider>
  <App />
</GlobalReduxProvider>

const Counter = () => {
  const [count, setCount] = useReduxState('counter', 0);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Redux Toolkit State?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Optimized performance with minimal re-renders and efficient state updates.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Type Safe</h3>
            <p>Full TypeScript support with intelligent type inference and compile-time safety.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Simple API</h3>
            <p>Intuitive hooks-based API that feels natural to React developers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Global State</h3>
            <p>Seamless global state management with automatic persistence and synchronization.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛠️</div>
            <h3>Developer Tools</h3>
            <p>
              Built-in debugging tools and Redux DevTools integration for better development
              experience.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>Tiny Bundle</h3>
            <p>Minimal bundle size with tree-shaking support for optimal production builds.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Examples</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">TypeScript</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5kb</div>
            <div className="stat-label">Bundle Size</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">∞</div>
            <div className="stat-label">Possibilities</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>
            Join thousands of developers who are already using Redux Toolkit State in their
            projects.
          </p>
          <div className="cta-actions">
            <a
              href="https://www.npmjs.com/package/redux-toolkit-state?activeTab=readme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">Start Now</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
