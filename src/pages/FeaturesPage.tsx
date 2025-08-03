import React from 'react';

const FeaturesPage: React.FC = () => {
  return (
    <div className="features-page">
      <div className="page-header">
        <h1>Features</h1>
        <p>
          Discover the powerful features that make Redux Toolkit State the perfect choice for your
          React applications.
        </p>
      </div>

      <div className="features-grid">
        {/* Core Features */}
        <section className="feature-section">
          <h2>Core Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div className="feature-content">
                <h3>Lightning Fast Performance</h3>
                <p>
                  Optimized for speed with minimal re-renders and efficient state updates. Built on
                  top of Redux with performance optimizations.
                </p>
                <ul>
                  <li>Minimal bundle size (5kb gzipped)</li>
                  <li>Smart re-rendering optimization</li>
                  <li>Efficient state synchronization</li>
                </ul>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <div className="feature-content">
                <h3>Full TypeScript Support</h3>
                <p>
                  Complete type safety with intelligent type inference and compile-time error
                  checking.
                </p>
                <ul>
                  <li>Generic type support</li>
                  <li>Automatic type inference</li>
                  <li>Compile-time error detection</li>
                </ul>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <div className="feature-content">
                <h3>Simple & Intuitive API</h3>
                <p>
                  Hooks-based API that feels natural to React developers. No complex setup or
                  boilerplate required.
                </p>
                <ul>
                  <li>Familiar React hooks pattern</li>
                  <li>Zero configuration required</li>
                  <li>Easy learning curve</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="feature-section">
          <h2>Advanced Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">🔄</div>
              <div className="feature-content">
                <h3>Global State Management</h3>
                <p>
                  Seamless global state management with automatic persistence and cross-component
                  synchronization.
                </p>
                <ul>
                  <li>Global state accessible anywhere</li>
                  <li>Automatic state persistence</li>
                  <li>Cross-component synchronization</li>
                </ul>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🧠</div>
              <div className="feature-content">
                <h3>Smart Selectors</h3>
                <p>
                  Memoized selectors for derived state with automatic dependency tracking and
                  performance optimization.
                </p>
                <ul>
                  <li>Memoized calculations</li>
                  <li>Automatic dependency tracking</li>
                  <li>Performance optimization</li>
                </ul>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🛠️</div>
              <div className="feature-content">
                <h3>Developer Tools</h3>
                <p>
                  Built-in debugging tools and Redux DevTools integration for better development
                  experience.
                </p>
                <ul>
                  <li>Redux DevTools integration</li>
                  <li>State inspection</li>
                  <li>Time-travel debugging</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Utility Features */}
        <section className="feature-section">
          <h2>Utility Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">📦</div>
              <div className="feature-content">
                <h3>Multiple State Access</h3>
                <p>
                  Access multiple state slices simultaneously with the useMultipleGlobalStates hook.
                </p>
                <ul>
                  <li>Bulk state access</li>
                  <li>Efficient state retrieval</li>
                  <li>Reduced hook calls</li>
                </ul>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">👁️</div>
              <div className="feature-content">
                <h3>Read-Only Access</h3>
                <p>
                  Read-only state access for components that only need to display data, improving
                  performance.
                </p>
                <ul>
                  <li>Performance optimization</li>
                  <li>Separation of concerns</li>
                  <li>Prevents accidental mutations</li>
                </ul>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🔄</div>
              <div className="feature-content">
                <h3>Partial Updates</h3>
                <p>
                  Update only specific parts of complex objects without affecting other properties.
                </p>
                <ul>
                  <li>Immutable updates</li>
                  <li>Selective property updates</li>
                  <li>Maintains object integrity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Features */}
        <section className="feature-section">
          <h2>Integration Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">⚛️</div>
              <div className="feature-content">
                <h3>React Integration</h3>
                <p>Seamless integration with React's ecosystem and existing patterns.</p>
                <ul>
                  <li>React 16.8+ hooks support</li>
                  <li>Concurrent features ready</li>
                  <li>Strict mode compatible</li>
                </ul>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🔧</div>
              <div className="feature-content">
                <h3>Build Tool Support</h3>
                <p>
                  Works with all modern build tools and bundlers without additional configuration.
                </p>
                <ul>
                  <li>Webpack support</li>
                  <li>Vite compatibility</li>
                  <li>Tree-shaking support</li>
                </ul>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🌐</div>
              <div className="feature-content">
                <h3>Framework Agnostic</h3>
                <p>Can be used with any React-based framework or library.</p>
                <ul>
                  <li>Next.js support</li>
                  <li>Gatsby compatibility</li>
                  <li>Create React App ready</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Feature Comparison */}
      <section className="comparison-section">
        <h2>Feature Comparison</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Redux Toolkit State</th>
                <th>Redux</th>
                <th>Zustand</th>
                <th>Context API</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bundle Size</td>
                <td>5kb</td>
                <td>15kb</td>
                <td>3kb</td>
                <td>0kb</td>
              </tr>
              <tr>
                <td>TypeScript</td>
                <td>✅ Full</td>
                <td>⚠️ Partial</td>
                <td>✅ Full</td>
                <td>⚠️ Manual</td>
              </tr>
              <tr>
                <td>DevTools</td>
                <td>✅ Built-in</td>
                <td>✅ Built-in</td>
                <td>⚠️ Plugin</td>
                <td>❌ None</td>
              </tr>
              <tr>
                <td>Learning Curve</td>
                <td>🟢 Easy</td>
                <td>🔴 Hard</td>
                <td>🟢 Easy</td>
                <td>🟡 Medium</td>
              </tr>
              <tr>
                <td>Performance</td>
                <td>🟢 Excellent</td>
                <td>🟡 Good</td>
                <td>🟢 Excellent</td>
                <td>🔴 Poor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
