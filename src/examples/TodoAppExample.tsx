import { useState } from 'react';
import { useReduxState, useReduxStateSelector } from 'redux-toolkit-state';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

const TodoAppExample = () => {
  const [todos, setTodos] = useReduxState<Todo[]>('todos', []);
  const [newTodoText, setNewTodoText] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  // Selectors for derived state
  const filteredTodos = useReduxStateSelector<Todo[], any>('todos', (todos) => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  });

  const stats = useReduxStateSelector<{ total: number; completed: number; active: number }, any>(
    'todos',
    (todos: any) => ({
      total: todos.length,
      completed: todos.filter((todo: any) => todo.completed).length,
      active: todos.filter((todo: any) => !todo.completed).length,
    })
  );

  const addTodo = () => {
    if (newTodoText.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: newTodoText.trim(),
        completed: false,
        priority,
        createdAt: new Date(),
      };
      setTodos([...todos, newTodo]);
      setNewTodoText('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoText = (id: number, newText: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="example-container">
      <h2>Todo App</h2>
      <p className="description">
        A complete CRUD application demonstrating state management for a todo list with filtering,
        statistics, and real-time updates.
      </p>

      <div className="demo-section">
        <div className="todo-stats">
          <div className="stat-item">
            <span>Total: {stats.total}</span>
          </div>
          <div className="stat-item">
            <span>Active: {stats.active}</span>
          </div>
          <div className="stat-item">
            <span>Completed: {stats.completed}</span>
          </div>
        </div>

        <div className="todo-controls">
          <div className="add-todo">
            <input
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              placeholder="Add a new todo..."
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value as any)}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button onClick={addTodo}>Add Todo</button>
          </div>

          <div className="filters">
            <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
              All
            </button>
            <button
              className={filter === 'active' ? 'active' : ''}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button
              className={filter === 'completed' ? 'active' : ''}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
            <button className="button-custom" onClick={clearCompleted}>
              Clear Completed
            </button>
          </div>
        </div>

        <div className="todo-list">
          {filteredTodos.map((todo: any) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onUpdate={updateTodoText}
            />
          ))}
          {filteredTodos.length === 0 && <p className="empty-state">No todos found</p>}
        </div>
      </div>

      <div className="code-section">
        <h3>Code</h3>
        <pre>
          <code>{`interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

const TodoAppExample = () => {
  const [todos, setTodos] = useReduxState<Todo[]>('todos', []);

  // Selectors for derived state
  const filteredTodos = useReduxStateSelector<Todo[]>('todos', (todos) => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  });

  const stats = useReduxStateSelector('todos', (todos) => ({
    total: todos.length,
    completed: todos.filter(todo => todo.completed).length,
    active: todos.filter(todo => !todo.completed).length,
  }));

  const addTodo = () => {
    if (newTodoText.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: newTodoText.trim(),
        completed: false,
        priority,
        createdAt: new Date(),
      };
      setTodos([...todos, newTodo]);
    }
  };
};`}</code>
        </pre>
      </div>

      <div className="features">
        <h3>Key Features Demonstrated</h3>
        <ul>
          <li>Complete CRUD operations (Create, Read, Update, Delete)</li>
          <li>Complex state management with arrays and objects</li>
          <li>Derived state with selectors for filtering and statistics</li>
          <li>Real-time state updates across components</li>
          <li>Type-safe state management with TypeScript</li>
          <li>Performance optimization with memoized selectors</li>
        </ul>
      </div>
    </div>
  );
};

const TodoItem = ({
  todo,
  onToggle,
  onDelete,
  onUpdate,
}: {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdate(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}`}>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />

      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSave()}
            onBlur={handleSave}
            autoFocus
          />
        </div>
      ) : (
        <div className="todo-content" onDoubleClick={() => setIsEditing(true)}>
          <span className="todo-text">{todo.text}</span>
          <span className={`priority-badge ${todo.priority}`}>{todo.priority}</span>
        </div>
      )}

      <div className="todo-actions">
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoAppExample;
