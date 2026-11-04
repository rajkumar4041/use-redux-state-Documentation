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
            for React applications. <b>Zero runtime dependencies</b>, no Provider required, and a
            familiar <code>useState</code>-like API — built with TypeScript for modern development
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
              <code>{`// No Provider required — state is global out of the box
import { useReduxState } from 'redux-toolkit-state';

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
            <h3>Global State, No Provider</h3>
            <p>
              State is global out of the box — share a value across components just by using the
              same key. No Context or Provider boilerplate.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💾</div>
            <h3>Survive-Refresh Persistence</h3>
            <p>
              Opt into an ephemeral IndexedDB bridge that restores state after a page reload, then
              clears itself — just wrap your app in GlobalReduxProvider.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>Zero Dependencies</h3>
            <p>No Redux, no react-redux — React is the only peer dependency. Tree-shakeable.</p>
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
            <div className="stat-number">0</div>
            <div className="stat-label">Dependencies</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">1.6kb</div>
            <div className="stat-label">Gzipped</div>
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
