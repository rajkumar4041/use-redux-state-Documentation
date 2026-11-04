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
                  <a href="#useReduxStateValue">useReduxStateValue</a>
                </li>
                <li>
                  <a href="#useReduxStateSetValue">useReduxStateSetValue</a>
                </li>
                <li>
                  <a href="#useReduxStateReset">useReduxStateReset</a>
                </li>
                <li>
                  <a href="#useReduxStateSelector">useReduxStateSelector</a>
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
              <h3>Store Utilities</h3>
              <ul>
                <li>
                  <a href="#getStore">getStore</a>
                </li>
                <li>
                  <a href="#getRegisteredKeys">getRegisteredKeys</a>
                </li>
                <li>
                  <a href="#clearSlices">clearSlices</a>
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
            <p>
              The library has <strong>zero runtime dependencies</strong> — no Redux and no
              react-redux. React (<code>&gt;=18</code>) is the only peer dependency, since the store
              subscribes via <code>useSyncExternalStore</code>. No Provider is required for global
              state.
            </p>
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

// Functional update (just like useState)
setCount((prev) => prev + 1);

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
                useReduxStateSelector&lt;T, R&gt;(key: string, selector: (state: T) =&gt; R): R
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

          <section id="useReduxStateSetValue" className="doc-section">
            <h2>useReduxStateSetValue</h2>
            <p>
              Returns only the setters for a key — no value subscription, so the component does not
              re-render when the state changes. Ideal for write-only controls.
            </p>
            <div className="api-signature">
              <code>
                useReduxStateSetValue&lt;T&gt;(key: string, initialValue?: T): [(value: T) =&gt;
                void, (partial: Partial&lt;T&gt;) =&gt; void]
              </code>
            </div>
            <div className="code-example">
              <h4>Example</h4>
              <pre>
                <code>{`const [setUser, update] = useReduxStateSetValue('user');

// Replace the whole value
setUser({ name: 'Jane', email: 'jane@example.com' });

// Merge a partial update
update({ name: 'Jane' });`}</code>
              </pre>
            </div>
          </section>

          <section id="useReduxStateReset" className="doc-section">
            <h2>useReduxStateReset</h2>
            <p>
              Returns a handler that resets a single slice back to its initial value. Useful for
              clear/cancel buttons without subscribing to the value.
            </p>
            <div className="api-signature">
              <code>useReduxStateReset(key: string): () =&gt; void</code>
            </div>
            <div className="code-example">
              <h4>Example</h4>
              <pre>
                <code>{`const resetUser = useReduxStateReset('user');

// Call when needed
<button onClick={resetUser}>Reset</button>`}</code>
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
            <p>
              <strong>Optional.</strong> Global state works without any Provider. Wrap your app in{' '}
              <code>GlobalReduxProvider</code> only to enable <em>survive-refresh</em> persistence:
              state is stashed in IndexedDB, restored on the next load, then wiped — a bridge across
              a reload, not long-term storage. Because the restore read is async, the first paint
              shows initial values and then re-renders once restore completes. It safely no-ops in
              SSR or environments without IndexedDB.
            </p>
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

          <section id="getStore" className="doc-section">
            <h2>getStore</h2>
            <p>Returns the underlying store instance. Useful for debugging and testing.</p>
            <div className="api-signature">
              <code>getStore(): Store</code>
            </div>
            <div className="code-example">
              <h4>Example</h4>
              <pre>
                <code>{`import { getStore } from 'redux-toolkit-state';

const store = getStore();`}</code>
              </pre>
            </div>
          </section>

          <section id="getRegisteredKeys" className="doc-section">
            <h2>getRegisteredKeys</h2>
            <p>Returns an array of all state keys currently registered in the store.</p>
            <div className="api-signature">
              <code>getRegisteredKeys(): string[]</code>
            </div>
            <div className="code-example">
              <h4>Example</h4>
              <pre>
                <code>{`import { getRegisteredKeys } from 'redux-toolkit-state';

const keys = getRegisteredKeys();
// e.g. ['counter', 'user', 'cart']`}</code>
              </pre>
            </div>
          </section>

          <section id="clearSlices" className="doc-section">
            <h2>clearSlices</h2>
            <p>Clears all registered state slices. Handy for resetting state between tests.</p>
            <div className="api-signature">
              <code>clearSlices(): void</code>
            </div>
            <div className="code-example">
              <h4>Example</h4>
              <pre>
                <code>{`import { clearSlices } from 'redux-toolkit-state';

// e.g. in a test teardown
clearSlices();`}</code>
              </pre>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DocumentationPage;
