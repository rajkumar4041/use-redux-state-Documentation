import { useReduxState } from 'redux-toolkit-state';

const CounterWithResetExample = () => {
  const [count, setCount, { reset }] = useReduxState<number>('reset-counter', 0);
  const [step, setStep] = useReduxState<number>('counter-step', 1);
  const [history, setHistory] = useReduxState<number[]>('counter-history', []);

  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const decrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const resetCounter = () => {
    reset(); // Reset to initial value (0)
    setHistory([]);
  };

  const resetToValue = (value: number) => {
    setCount(value);
    setHistory([...history, value]);
  };

  const undo = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      const previousValue = newHistory[newHistory.length - 1];
      setCount(previousValue);
      setHistory(newHistory);
    }
  };

  return (
    <div className="example-container">
      <h2>Counter with Reset</h2>
      <p className="description">
        Demonstrating the reset functionality and advanced state management features including
        history tracking and undo functionality.
      </p>

      <div className="demo-section">
        <div className="counter-display">
          <h3>Current Count: {count}</h3>
          <div className="step-controls">
            <label>
              Step Size:
              <input
                type="number"
                value={step}
                onChange={(e) => setStep(parseInt(e.target.value) || 1)}
                min="1"
                max="10"
              />
            </label>
          </div>
        </div>

        <div className="counter-controls">
          <div className="button-group">
            <button onClick={decrement}>-{step}</button>
            <button onClick={increment}>+{step}</button>
          </div>

          <div className="reset-controls">
            <button onClick={resetCounter} className="reset-btn">
              Reset to 0
            </button>
            <button onClick={() => resetToValue(100)} className="reset-btn">
              Reset to 100
            </button>
            <button onClick={() => resetToValue(-50)} className="reset-btn">
              Reset to -50
            </button>
          </div>

          <div className="history-controls">
            <button onClick={undo} disabled={history.length <= 1} className="undo-btn">
              Undo
            </button>
            <span className="history-count">History: {history.length} steps</span>
          </div>
        </div>

        <div className="history-display">
          <h4>History</h4>
          <div className="history-list">
            {history.slice(-10).map((value, index) => (
              <span key={index} className="history-item">
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="state-info">
          <h4>State Information</h4>
          <div className="info-grid">
            <div className="info-item">
              <strong>Current Value:</strong> {count}
            </div>
            <div className="info-item">
              <strong>Step Size:</strong> {step}
            </div>
            <div className="info-item">
              <strong>History Length:</strong> {history.length}
            </div>
            <div className="info-item">
              <strong>Can Undo:</strong> {history.length > 1 ? 'Yes' : 'No'}
            </div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h3>Code</h3>
        <pre>
          <code>{`const CounterWithResetExample = () => {
  const [count, setCount, { reset }] = useReduxState<number>('reset-counter', 0);
  const [step, setStep] = useReduxState<number>('counter-step', 1);
  const [history, setHistory] = useReduxState<number[]>('counter-history', []);

  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const decrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const resetCounter = () => {
    reset(); // Reset to initial value (0)
    setHistory([]);
  };

  const resetToValue = (value: number) => {
    setCount(value);
    setHistory([...history, value]);
  };

  const undo = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      const previousValue = newHistory[newHistory.length - 1];
      setCount(previousValue);
      setHistory(newHistory);
    }
  };
};`}</code>
        </pre>
      </div>

      <div className="features">
        <h3>Key Features Demonstrated</h3>
        <ul>
          <li>Reset functionality with the reset method</li>
          <li>Multiple state slices working together</li>
          <li>History tracking and undo functionality</li>
          <li>Dynamic step size configuration</li>
          <li>State persistence across component re-renders</li>
          <li>Complex state interactions and updates</li>
        </ul>
      </div>
    </div>
  );
};

export default CounterWithResetExample;
