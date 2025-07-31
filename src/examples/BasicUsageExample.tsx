import { useReduxState } from 'use-redux-state';

const BasicUsageExample = () => {
  const [count, setCount] = useReduxState<number>('basic-counter', 0);

  return (
    <div className="example-container">
      <h2>Basic Usage</h2>
      <p className="description">
        The most basic usage of useReduxState. This example shows how to create and manage a simple
        counter state.
      </p>

      <div className="demo-section">
        <h3>Counter: {count}</h3>
        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>

      <div className="code-section">
        <h3>Code</h3>
        <pre>
          <code>{`import { useReduxState } from 'use-redux-state';

const BasicUsageExample = () => {
  const [count, setCount] = useReduxState<number>('basic-counter', 0);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};`}</code>
        </pre>
      </div>

      <div className="features">
        <h3>Key Features Demonstrated</h3>
        <ul>
          <li>Simple state management with useReduxState</li>
          <li>TypeScript support with generic types</li>
          <li>Direct state updates with setter function</li>
          <li>Global state accessible across components</li>
        </ul>
      </div>
    </div>
  );
};

export default BasicUsageExample;
