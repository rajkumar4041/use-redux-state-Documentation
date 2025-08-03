import { useReduxState } from 'redux-toolkit-state';
import CodeBlock from '../components/CodeBlock';

const BasicUsageExample = () => {
  const [count, setCount] = useReduxState<number>('basic-counter', 0);

  const codeExample = `import { useReduxState } from 'redux-toolkit-state';

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
};`;

  return (
    <div className="example-container">
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
        <CodeBlock code={codeExample} language="typescript" title="BasicUsageExample.tsx" />
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
