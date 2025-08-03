import React from 'react';

const DocumentationPage: React.FC = () => {
  return (
    <div className="documentation-page">
      <div className="page-header">
        <h1>Documentation</h1>
        <p>Complete API reference and technical documentation for Redux Toolkit State.</p>
      </div>

      <div className="docs-container">
        <aside className="docs-sidebar">
          <nav className="docs-nav">
            <div className="nav-section">
              <h3>Getting Started</h3>
              <ul>
                <li>
                  <a href="#installation">Installation</a>
                </li>
                <li>
                  <a href="#basic-usage">Basic Usage</a>
                </li>
                <li>
                  <a href="#setup">Setup Guide</a>
                </li>
              </ul>
            </div>

            <div className="nav-section">
              <h3>API Reference</h3>
              <ul>
                <li>
                  <a href="#useReduxState">useReduxState</a>
                </li>
                <li>
                  <a href="#useReduxStateSelector">useReduxStateSelector</a>
                </li>
                <li>
                  <a href="#useReduxStateValue">useReduxStateValue</a>
                </li>
                <li>
                  <a href="#useMultipleGlobalStates">useMultipleGlobalStates</a>
                </li>
                <li>
                  <a href="#GlobalReduxProvider">GlobalReduxProvider</a>
                </li>
              </ul>
            </div>

            <div className="nav-section">
              <h3>Advanced Topics</h3>
              <ul>
                <li>
                  <a href="#typescript">TypeScript Guide</a>
                </li>
                <li>
                  <a href="#performance">Performance Optimization</a>
                </li>
                <li>
                  <a href="#migration">Migration Guide</a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        <main className="docs-content">
          <section id="installation" className="doc-section">
            <h2>Installation</h2>
            <p>Install Redux Toolkit State using npm or yarn:</p>
            <div className="code-block">
              <pre>
                <code>npm install redux-toolkit-state</code>
              </pre>
            </div>
          </section>

          <section id="useReduxState" className="doc-section">
            <h2>useReduxState</h2>
            <p>The primary hook for managing global state.</p>
            <div className="api-signature">
              <code>
                useReduxState&lt;T&gt;(key: string, initialValue?: T): [T, (value: T) =&gt; void,{' '}
                {'{'} update: (partial: Partial&lt;T&gt;) =&gt; void, reset: () =&gt; void {'}'}]
              </code>
            </div>
            <div className="code-example">
              <h4>Example</h4>
              <pre>
                <code>{`const [count, setCount, { update, reset }] = useReduxState('counter', 0);

// Direct update
setCount(5);

// Partial update (for objects)
update({ name: 'John' });

// Reset to initial value
reset();`}</code>
              </pre>
            </div>
          </section>

          <section id="useReduxStateSelector" className="doc-section">
            <h2>useReduxStateSelector</h2>
            <p>Hook for creating derived state with memoization.</p>
            <div className="api-signature">
              <code>
                useReduxStateSelector&lt;R, T&gt;(key: string, selector: (state: T) =&gt; R): R
              </code>
            </div>
            <div className="code-example">
              <h4>Example</h4>
              <pre>
                <code>{`const totalPrice = useReduxStateSelector('cart', (cart) => 
  cart.items.reduce((sum, item) => sum + item.price, 0)
);`}</code>
              </pre>
            </div>
          </section>

          <section id="useReduxStateValue" className="doc-section">
            <h2>useReduxStateValue</h2>
            <p>Read-only hook for accessing state values without setters.</p>
            <div className="api-signature">
              <code>useReduxStateValue&lt;T&gt;(key: string): T</code>
            </div>
            <div className="code-example">
              <h4>Example</h4>
              <pre>
                <code>{`const user = useReduxStateValue('user');
// user is read-only, no setter provided`}</code>
              </pre>
            </div>
          </section>

          <section id="useMultipleGlobalStates" className="doc-section">
            <h2>useMultipleGlobalStates</h2>
            <p>Hook for accessing multiple state slices at once.</p>
            <div className="api-signature">
              <code>useMultipleGlobalStates(keys: string[]): Record&lt;string, any&gt;</code>
            </div>
            <div className="code-example">
              <h4>Example</h4>
              <pre>
                <code>{`const states = useMultipleGlobalStates(['user', 'settings', 'cart']);
// Returns: { user: {...}, settings: {...}, cart: {...} }`}</code>
              </pre>
            </div>
          </section>

          <section id="GlobalReduxProvider" className="doc-section">
            <h2>GlobalReduxProvider</h2>
            <p>Provider component that wraps your React application.</p>
            <div className="code-example">
              <h4>Example</h4>
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
          </section>
        </main>
      </div>
    </div>
  );
};

export default DocumentationPage;
