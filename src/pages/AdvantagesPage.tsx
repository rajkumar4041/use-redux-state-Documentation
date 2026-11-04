import React from 'react';

const AdvantagesPage: React.FC = () => {
  return (
    <div className="advantages-page">
      <div className="page-header">
        <h1>Advantages</h1>
        <p>
          Discover why Redux Toolkit State is the superior choice for modern React applications.
        </p>
      </div>

      <div className="advantages-container">
        {/* Performance Advantages */}
        <section className="advantage-section">
          <h2>Performance Advantages</h2>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>
                Optimized for maximum performance with minimal re-renders and efficient state
                updates.
              </p>
              <ul>
                <li>Smart re-rendering optimization</li>
                <li>Efficient state synchronization</li>
                <li>Minimal memory footprint</li>
              </ul>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">📦</div>
              <h3>Tiny & Zero Dependencies</h3>
              <p>
                Just ~1.6 kB gzipped (3.7 kB minified) with no Redux and no react-redux — React is
                the only peer dependency.
              </p>
              <ul>
                <li>~1.6 kB gzipped bundle size</li>
                <li>Zero runtime dependencies</li>
                <li>React {'>'}=18 as the only peer dependency</li>
              </ul>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">🧠</div>
              <h3>Smart Caching</h3>
              <p>Intelligent memoization and caching strategies for optimal performance.</p>
              <ul>
                <li>Memoized selectors</li>
                <li>Automatic dependency tracking</li>
                <li>Efficient state updates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Developer Experience */}
        <section className="advantage-section">
          <h2>Developer Experience</h2>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">🎯</div>
              <h3>Simple API</h3>
              <p>Intuitive hooks-based API that feels natural to React developers.</p>
              <ul>
                <li>Familiar React patterns</li>
                <li>Zero configuration required</li>
                <li>Easy learning curve</li>
              </ul>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">🔒</div>
              <h3>Type Safety</h3>
              <p>
                Full TypeScript support with intelligent type inference and compile-time safety.
              </p>
              <ul>
                <li>Complete type coverage</li>
                <li>Intelligent type inference</li>
                <li>Compile-time error detection</li>
              </ul>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">🛠️</div>
              <h3>Store Utilities</h3>
              <p>
                Inspect and reset state programmatically with built-in helpers — great for
                debugging and testing.
              </p>
              <ul>
                <li>getStore() for the store instance</li>
                <li>getRegisteredKeys() to list all keys</li>
                <li>clearSlices() to reset in tests</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Advantages */}
        <section className="advantage-section">
          <h2>Technical Advantages</h2>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">🔄</div>
              <h3>Global State Management</h3>
              <p>
                Seamless global state with no Provider, plus opt-in survive-refresh persistence when
                you need it.
              </p>
              <ul>
                <li>Global state accessibility</li>
                <li>Opt-in survive-refresh persistence</li>
                <li>Cross-component synchronization</li>
              </ul>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">🎨</div>
              <h3>Flexible Architecture</h3>
              <p>Flexible architecture that adapts to your application's needs.</p>
              <ul>
                <li>Modular state design</li>
                <li>Scalable architecture</li>
                <li>Easy state composition</li>
              </ul>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon">🛡️</div>
              <h3>Immutable Updates</h3>
              <p>Built-in immutability with automatic state updates and change detection.</p>
              <ul>
                <li>Automatic immutability</li>
                <li>Change detection</li>
                <li>Predictable state updates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison with Alternatives */}
        <section className="comparison-section">
          <h2>Why Choose Redux Toolkit State?</h2>
          <div className="comparison-cards">
            <div className="comparison-card">
              <h3>vs Redux</h3>
              <div className="comparison-content">
                <div className="advantage-list">
                  <div className="advantage-item">
                    <span className="advantage-icon">✅</span>
                    <span>90% less boilerplate</span>
                  </div>
                  <div className="advantage-item">
                    <span className="advantage-icon">✅</span>
                    <span>Smaller bundle size</span>
                  </div>
                  <div className="advantage-item">
                    <span className="advantage-icon">✅</span>
                    <span>Better TypeScript support</span>
                  </div>
                  <div className="advantage-item">
                    <span className="advantage-icon">✅</span>
                    <span>Simpler API</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="comparison-card">
              <h3>vs Zustand</h3>
              <div className="comparison-content">
                <div className="advantage-list">
                  <div className="advantage-item">
                    <span className="advantage-icon">✅</span>
                    <span>Familiar useState-like API</span>
                  </div>
                  <div className="advantage-item">
                    <span className="advantage-icon">✅</span>
                    <span>No store definition boilerplate</span>
                  </div>
                  <div className="advantage-item">
                    <span className="advantage-icon">✅</span>
                    <span>Built-in partial update &amp; reset</span>
                  </div>
                  <div className="advantage-item">
                    <span className="advantage-icon">✅</span>
                    <span>Opt-in survive-refresh persistence</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="comparison-card">
              <h3>vs Context API</h3>
              <div className="comparison-content">
                <div className="advantage-list">
                  <div className="advantage-item">
                    <span className="advantage-icon">✅</span>
                    <span>Better performance (no re-render cascades)</span>
                  </div>
                  <div className="advantage-item">
                    <span className="advantage-icon">✅</span>
                    <span>No Provider wrapping needed</span>
                  </div>
                  <div className="advantage-item">
                    <span className="advantage-icon">✅</span>
                    <span>Full TypeScript support</span>
                  </div>
                  <div className="advantage-item">
                    <span className="advantage-icon">✅</span>
                    <span>Selectors &amp; partial updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="use-cases-section">
          <h2>Perfect For</h2>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <div className="use-case-icon">🏢</div>
              <h3>Enterprise Applications</h3>
              <p>
                Scalable state management for large enterprise applications with complex state
                requirements.
              </p>
            </div>

            <div className="use-case-card">
              <div className="use-case-icon">🛒</div>
              <h3>E-commerce Platforms</h3>
              <p>
                Manage complex shopping carts, user preferences, and product catalogs efficiently.
              </p>
            </div>

            <div className="use-case-card">
              <div className="use-case-icon">📊</div>
              <h3>Dashboard Applications</h3>
              <p>Handle real-time data, user settings, and complex UI state management.</p>
            </div>

            <div className="use-case-card">
              <div className="use-case-icon">🎮</div>
              <h3>Interactive Applications</h3>
              <p>Manage game state, user progress, and real-time interactions.</p>
            </div>

            <div className="use-case-card">
              <div className="use-case-icon">📱</div>
              <h3>Mobile Applications</h3>
              <p>
                Efficient state management for React Native applications with minimal bundle size.
              </p>
            </div>

            <div className="use-case-card">
              <div className="use-case-icon">🌐</div>
              <h3>Progressive Web Apps</h3>
              <p>Offline-capable applications with persistent state and synchronization.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Experience the Advantages?</h2>
            <p>Join thousands of developers who have already switched to Redux Toolkit State.</p>
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
    </div>
  );
};

export default AdvantagesPage;
