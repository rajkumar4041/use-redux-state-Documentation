import React, { useState } from 'react';
// Import all example components
import BasicUsageExample from '../examples/BasicUsageExample';
import ComplexStateExample from '../examples/ComplexStateExample';
import CounterWithResetExample from '../examples/CounterWithResetExample';
import FormStateExample from '../examples/FormStateExample';
import MultipleStatesExample from '../examples/MultipleStatesExample';
import SelectorExample from '../examples/SelectorExample';
import ShoppingCartExample from '../examples/ShoppingCartExample';
import ThemeToggleExample from '../examples/ThemeToggleExample';
import TodoAppExample from '../examples/TodoAppExample';
import ValueOnlyExample from '../examples/ValueOnlyExample';

const ExamplesPage: React.FC = () => {
  const [activeExample, setActiveExample] = useState('basic');

  const examples = [
    {
      id: 'basic',
      name: 'Basic Usage',
      difficulty: 'Beginner',
      component: BasicUsageExample,
    },
    {
      id: 'complex',
      name: 'Complex State',
      difficulty: 'Intermediate',
      component: ComplexStateExample,
    },
    {
      id: 'selector',
      name: 'State Selectors',
      difficulty: 'Intermediate',
      component: SelectorExample,
    },
    {
      id: 'multiple',
      name: 'Multiple States',
      difficulty: 'Intermediate',
      component: MultipleStatesExample,
    },
    {
      id: 'value',
      name: 'Value Only Access',
      difficulty: 'Beginner',
      component: ValueOnlyExample,
    },
    {
      id: 'todo',
      name: 'Todo App',
      difficulty: 'Advanced',
      component: TodoAppExample,
    },
    {
      id: 'cart',
      name: 'Shopping Cart',
      difficulty: 'Advanced',
      component: ShoppingCartExample,
    },
    {
      id: 'theme',
      name: 'Theme Management',
      difficulty: 'Intermediate',
      component: ThemeToggleExample,
    },
    {
      id: 'form',
      name: 'Form State',
      difficulty: 'Advanced',
      component: FormStateExample,
    },
    {
      id: 'counter-reset',
      name: 'Counter with Reset',
      difficulty: 'Intermediate',
      component: CounterWithResetExample,
    },
  ];

  const ActiveComponent =
    examples.find((ex) => ex.id === activeExample)?.component || BasicUsageExample;

  return (
    <div className="examples-page">
      <div className="page-header">
        <h1>Examples</h1>
        <h4>Explore comprehensive examples demonstrating various use cases and patterns.</h4>
      </div>

      <div className="examples-container">
        <aside className="examples-sidebar">
          <div className="sidebar-header">
            <h3>Examples</h3>
            <div className="filter-controls">
              <select className="difficulty-filter">
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          <nav className="examples-nav">
            <ul className="examples-list">
              {examples.map((example) => (
                <li key={example.id} className="example-item">
                  <button
                    className={`example-button ${activeExample === example.id ? 'active' : ''}`}
                    onClick={() => setActiveExample(example.id)}
                  >
                    <div className="example-info">
                      <h4>{example.name}</h4>
                    </div>
                    {/* <span className={`difficulty-badge ${example.difficulty.toLowerCase()}`}>
                      {example.difficulty}
                    </span> */}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="examples-content">
          <div className="example-viewer">
            <ActiveComponent />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExamplesPage;
