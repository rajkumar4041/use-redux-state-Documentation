import './App.css';

import { useState } from 'react';
import GlobalReduxProvider from 'redux-toolkit-state';
// Import all example components
import BasicUsageExample from './examples/BasicUsageExample';
import ComplexStateExample from './examples/ComplexStateExample';
import CounterWithResetExample from './examples/CounterWithResetExample';
import FormStateExample from './examples/FormStateExample';
import MultipleStatesExample from './examples/MultipleStatesExample';
import SelectorExample from './examples/SelectorExample';
import ShoppingCartExample from './examples/ShoppingCartExample';
import ThemeToggleExample from './examples/ThemeToggleExample';
import TodoAppExample from './examples/TodoAppExample';
import ProfileAvatars from './Profiles';

// import ValueOnlyExample from './examples/ValueOnlyExample';

/**
 * @author Rajkumar Rathod
 * @description A comprehensive showcase of redux-toolkit-state package capabilities
 */
function App() {
  const [activeExample, setActiveExample] = useState('basic');

  const examples = [
    { id: 'basic', name: 'Basic Usage', component: BasicUsageExample },
    { id: 'complex', name: 'Complex State', component: ComplexStateExample },
    { id: 'selector', name: 'State Selectors', component: SelectorExample },
    { id: 'multiple', name: 'Multiple States', component: MultipleStatesExample },
    // { id: 'value', name: 'Value Only', component: ValueOnlyExample },
    { id: 'todo', name: 'Todo App', component: TodoAppExample },
    { id: 'cart', name: 'Shopping Cart', component: ShoppingCartExample },
    { id: 'theme', name: 'Theme Toggle', component: ThemeToggleExample },
    { id: 'form', name: 'Form State', component: FormStateExample },
    { id: 'counter-reset', name: 'Counter with Reset', component: CounterWithResetExample },
  ];

  const ActiveComponent =
    examples.find((ex) => ex.id === activeExample)?.component || BasicUsageExample;

  return (
    <GlobalReduxProvider>
      <div className="app">
        <header className="app-header">
          <div>
            <h1>redux-toolkit-state Examples</h1>
            <p>A comprehensive showcase of redux-toolkit-state package capabilities</p>
          </div>
          <ProfileAvatars />
        </header>

        <div className="app-container">
          <nav className="sidebar">
            <h3>Examples</h3>
            <ul>
              {examples.map((example) => (
                <li key={example.id}>
                  <button
                    className={activeExample === example.id ? 'active' : ''}
                    onClick={() => setActiveExample(example.id)}
                  >
                    {example.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <main className="main-content">
            <ActiveComponent />
          </main>
        </div>
      </div>
    </GlobalReduxProvider>
  );
}

export default App;
