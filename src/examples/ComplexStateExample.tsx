import { useReduxState } from 'use-redux-state';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

const ComplexStateExample = () => {
  const [user, setUser, { update }] = useReduxState<User>('complex-user', {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 25,
    preferences: {
      theme: 'light',
      notifications: true,
    },
  });

  const handleUpdateName = () => {
    setUser({ ...user, name: 'Jane Smith' });
  };

  const handleUpdateAge = () => {
    update({ age: 30 });
  };

  const handleToggleTheme = () => {
    update({
      preferences: {
        ...user.preferences,
        theme: user.preferences.theme === 'light' ? 'dark' : 'light',
      },
    });
  };

  const handleToggleNotifications = () => {
    update({
      preferences: {
        ...user.preferences,
        notifications: !user.preferences.notifications,
      },
    });
  };

  return (
    <div className="example-container">
      <h2>Complex State Management</h2>
      <p className="description">
        Managing complex objects with nested properties. Demonstrates both direct state updates and
        partial updates using the update method.
      </p>

      <div className="demo-section">
        <div className="user-card">
          <h3>User Profile</h3>
          <div className="user-info">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>Theme:</strong> {user.preferences.theme}
            </p>
            <p>
              <strong>Notifications:</strong>{' '}
              {user.preferences.notifications ? 'Enabled' : 'Disabled'}
            </p>
          </div>

          <div className="button-group">
            <button onClick={handleUpdateName}>Update Name</button>
            <button onClick={handleUpdateAge}>Update Age</button>
            <button onClick={handleToggleTheme}>Toggle Theme</button>
            <button onClick={handleToggleNotifications}>Toggle Notifications</button>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h3>Code</h3>
        <pre>
          <code>{`interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
}

const ComplexStateExample = () => {
  const [user, setUser, { update }] = useReduxState<User>('complex-user', {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 25,
    preferences: {
      theme: 'light',
      notifications: true,
    },
  });

  // Direct state update
  const handleUpdateName = () => {
    setUser({ ...user, name: 'Jane Smith' });
  };

  // Partial update using update method
  const handleUpdateAge = () => {
    update({ age: 30 });
  };

  // Nested object update
  const handleToggleTheme = () => {
    update({
      preferences: {
        ...user.preferences,
        theme: user.preferences.theme === 'light' ? 'dark' : 'light',
      },
    });
  };
};`}</code>
        </pre>
      </div>

      <div className="features">
        <h3>Key Features Demonstrated</h3>
        <ul>
          <li>Complex object state management</li>
          <li>Partial state updates with update method</li>
          <li>Nested object updates</li>
          <li>TypeScript interfaces for type safety</li>
          <li>Immutable state updates</li>
        </ul>
      </div>
    </div>
  );
};

export default ComplexStateExample;
