import './App.css';

import GlobalReduxProvider, { useReduxState } from 'use-redux-state';

function App() {
  return (
    <GlobalReduxProvider>
      <A />
    </GlobalReduxProvider>
  );
}

export default App;

function A() {
  const [count, setCount, { reset }] = useReduxState('counter', 3);
  const [student, setStudent, { update }] = useReduxState('student', { name: '', age: 0 });

  return (
    <>
      <h1>Redux State Examples</h1>
      <div style={{ display: 'flex', gap: 1 }}> student Name : {student.name}</div>
      <div style={{ display: 'flex', gap: 1 }}> student Age : {student.age}</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <Counter />
        <button onClick={() => setStudent({ name: 'John', age: 25 })}>Set Student</button>
        <button onClick={() => update({ age: 30 })}>partially Student Age </button>
        <button onClick={() => reset()}>reset Counter</button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

const Counter = () => {
  const [count] = useReduxState<number>('counter', 0);

  return (
    <div>
      <h2>Global Counter Component</h2>
      <p>Current Count: {count}</p>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
    </div>
  );
};
