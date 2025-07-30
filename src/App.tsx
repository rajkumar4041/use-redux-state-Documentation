import './App.css';

import GlobalReduxProvider, {
  getSliceForKey,
  useMultipleGlobalStates,
  useReduxState,
  useReduxStateSelector,
  useReduxStateValue,
} from 'use-redux-state';

function App() {
  return (
    <GlobalReduxProvider>
      <A />
    </GlobalReduxProvider>
  );
}

export default App;

function A() {
  const [count, setCount, { reset }] = useReduxState<number>('counter', 0);
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
    </>
  );
}

const Counter = () => {
  const [count] = useReduxState<number>('counter');
  const [student] = useReduxState<{ name: string; age: number }>('student', { name: '', age: 0 });
  console.log('val here check', 'getSliceForKey', getSliceForKey('counter'));
  const counter = useReduxStateSelector<number, any>('counter', (state) => state);
  console.log('b here', counter);

  const multipleStates = useMultipleGlobalStates(['counter', 'student']);

  return (
    <div>
      <h2>Global Counter Component</h2>
      <p>parent Count: {count}</p>
      <p>parent by useReduxStateSelector Count: {counter}</p>
      Multiple States
      {JSON.stringify(multipleStates)}
      <div style={{ display: 'flex', gap: 1 }}> student Name : {student.name}</div>
      <div style={{ display: 'flex', gap: 1 }}> student Age : {student.age}</div>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      <div style={{ marginTop: 20 }}>
        <ReduxValueStateExample />
      </div>
    </div>
  );
};

const ReduxValueStateExample = () => {
  const una = useReduxStateValue<number>('value');
  const count = useReduxStateValue<number>('counter');
  const student = useReduxStateValue<{ name: string; age: number }>('student');

  console.log('ReduxValueStateExample', una, 'count', count, 'student', student);

  return (
    <div>
      <h2>Redux Value State value Example</h2>"{' '}
      <div style={{ display: 'flex', gap: 1 }}> not in registory :{una}</div>
      <div style={{ display: 'flex', gap: 1 }}> counter : {count}</div>
      <div style={{ display: 'flex', gap: 1 }}> student : {student.name}</div>
      <div style={{ display: 'flex', gap: 1 }}> student Age : {student.age}</div>
    </div>
  );
};
