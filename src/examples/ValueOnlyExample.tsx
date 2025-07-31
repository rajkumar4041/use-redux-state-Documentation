import { useReduxState, useReduxStateValue } from 'redux-toolkit-state';

const ValueOnlyExample = () => {
  // Initialize state in parent component
  const [counter, setCounter] = useReduxState('value-counter', 0);
  const [user, setUser] = useReduxState('value-user', { name: 'John', age: 25 });
  const [theme, setTheme] = useReduxState('value-theme', 'light');

  return (
    <div className="example-container">
      <h2>Value Only Access</h2>
      <p className="description">
        Using useReduxStateValue to access state values without setters. Perfect for read-only
        components that only need to display data.
      </p>

      <div className="demo-section">
        <div className="controls">
          <h3>Controls (Parent Component)</h3>
          <div className="button-group">
            <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
            <button onClick={() => setUser({ ...user, age: user.age + 1 })}>Increase Age</button>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              Toggle Theme
            </button>
          </div>
        </div>

        <div className="readonly-components">
          <ReadOnlyCounter />
          <ReadOnlyUser />
          <ReadOnlyTheme />
          <ReadOnlyStats />
        </div>
      </div>

      <div className="code-section">
        <h3>Code</h3>
        <pre>
          <code>{`// Parent component with full access
const [counter, setCounter] = useReduxState('value-counter', 0);
const [user, setUser] = useReduxState('value-user', { name: 'John', age: 25 });
const [theme, setTheme] = useReduxState('value-theme', 'light');

// Read-only components using useReduxStateValue
const ReadOnlyCounter = () => {
  const counter = useReduxStateValue<number>('value-counter');
  return <div>Counter: {counter}</div>;
};

const ReadOnlyUser = () => {
  const user = useReduxStateValue<{ name: string; age: number }>('value-user');
  return <div>User: {user.name}, Age: {user.age}</div>;
};

const ReadOnlyTheme = () => {
  const theme = useReduxStateValue<string>('value-theme');
  return <div>Current Theme: {theme}</div>;
};`}</code>
        </pre>
      </div>

      <div className="features">
        <h3>Key Features Demonstrated</h3>
        <ul>
          <li>Read-only state access with useReduxStateValue</li>
          <li>Separation of concerns between read and write access</li>
          <li>Performance optimization for display-only components</li>
          <li>Type-safe value access</li>
          <li>Automatic re-rendering when state changes</li>
        </ul>
      </div>
    </div>
  );
};

// Read-only components that only access values
const ReadOnlyCounter = () => {
  const counter = useReduxStateValue<number>('value-counter');

  return (
    <div className="readonly-card">
      <h4>Read-Only Counter</h4>
      <p>
        Current value: <strong>{counter}</strong>
      </p>
      <p className="note">This component cannot modify the counter</p>
    </div>
  );
};

const ReadOnlyUser = () => {
  const user = useReduxStateValue<{ name: string; age: number }>('value-user');

  return (
    <div className="readonly-card">
      <h4>Read-Only User</h4>
      <p>
        Name: <strong>{user.name}</strong>
      </p>
      <p>
        Age: <strong>{user.age}</strong>
      </p>
      <p className="note">This component cannot modify user data</p>
    </div>
  );
};

const ReadOnlyTheme = () => {
  const theme = useReduxStateValue<string>('value-theme');

  return (
    <div className="readonly-card">
      <h4>Read-Only Theme</h4>
      <p>
        Current theme: <strong>{theme}</strong>
      </p>
      <div className={`theme-preview ${theme}`}>Theme Preview</div>
      <p className="note">This component cannot change the theme</p>
    </div>
  );
};

const ReadOnlyStats = () => {
  const counter = useReduxStateValue<number>('value-counter');
  const user = useReduxStateValue<{ name: string; age: number }>('value-user');
  const theme = useReduxStateValue<string>('value-theme');

  return (
    <div className="readonly-card">
      <h4>Read-Only Stats</h4>
      <p>
        Total states accessed: <strong>3</strong>
      </p>
      <p>
        Counter is: <strong>{counter > 10 ? 'High' : 'Low'}</strong>
      </p>
      <p>
        User is: <strong>{user.age >= 18 ? 'Adult' : 'Minor'}</strong>
      </p>
      <p>
        Theme is: <strong>{theme === 'light' ? 'Light' : 'Dark'}</strong>
      </p>
      <p className="note">This component combines multiple read-only values</p>
    </div>
  );
};

export default ValueOnlyExample;
