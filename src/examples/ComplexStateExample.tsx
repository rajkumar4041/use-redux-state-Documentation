import { useReduxState } from 'redux-toolkit-state';
import CodeBlock from '../components/CodeBlock';

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const ComplexStateExample = () => {
  const [user, setUser] = useReduxState<User>('complex-user', {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    isActive: true,
  });

  const [settings, setSettings] = useReduxState<{
    theme: 'light' | 'dark';
    notifications: boolean;
    language: string;
  }>('complex-settings', {
    theme: 'light',
    notifications: true,
    language: 'en',
  });

  const updateUserName = (name: string) => {
    setUser({ ...user, name });
  };

  const toggleUserStatus = () => {
    setUser({ ...user, isActive: !user.isActive });
  };

  const updateTheme = (theme: 'light' | 'dark') => {
    setSettings({ ...settings, theme });
  };

  const toggleNotifications = () => {
    setSettings({ ...settings, notifications: !settings.notifications });
  };

  const codeExample = `import { useReduxState } from 'redux-toolkit-state';

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const ComplexStateExample = () => {
  const [user, setUser] = useReduxState<User>('complex-user', {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    isActive: true,
  });

  const [settings, setSettings] = useReduxState<{
    theme: 'light' | 'dark';
    notifications: boolean;
    language: string;
  }>('complex-settings', {
    theme: 'light',
    notifications: true,
    language: 'en',
  });

  const updateUserName = (name: string) => {
    setUser({ ...user, name });
  };

  const toggleUserStatus = () => {
    setUser({ ...user, isActive: !user.isActive });
  };

  const updateTheme = (theme: 'light' | 'dark') => {
    setSettings({ ...settings, theme });
  };

  const toggleNotifications = () => {
    setSettings({ ...settings, notifications: !settings.notifications });
  };

  return (
    <div>
      <h3>User: {user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Status: {user.isActive ? 'Active' : 'Inactive'}</p>
      <p>Theme: {settings.theme}</p>
      <p>Notifications: {settings.notifications ? 'On' : 'Off'}</p>
      
      <button onClick={() => updateUserName('Jane Smith')}>
        Update Name
      </button>
      <button onClick={toggleUserStatus}>
        Toggle Status
      </button>
      <button onClick={() => updateTheme('dark')}>
        Switch to Dark
      </button>
      <button onClick={toggleNotifications}>
        Toggle Notifications
      </button>
    </div>
  );
};`;

  return (
    <div className="example-container">
      <p className="description">
        This example demonstrates managing complex state objects with multiple properties and nested
        updates.
      </p>

      <div className="demo-section">
        <h3>User: {user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Status: {user.isActive ? 'Active' : 'Inactive'}</p>
        <p>Theme: {settings.theme}</p>
        <p>Notifications: {settings.notifications ? 'On' : 'Off'}</p>

        <div className="button-group">
          <button onClick={() => updateUserName('Jane Smith')}>Update Name</button>
          <button onClick={toggleUserStatus}>Toggle Status</button>
          <button onClick={() => updateTheme('dark')}>Switch to Dark</button>
          <button onClick={toggleNotifications}>Toggle Notifications</button>
        </div>
      </div>

      <div className="code-section">
        <h3>Code</h3>
        <CodeBlock code={codeExample} language="typescript" title="ComplexStateExample.tsx" />
      </div>

      <div className="features">
        <h3>Key Features Demonstrated</h3>
        <ul>
          <li>Complex object state management</li>
          <li>TypeScript interfaces for type safety</li>
          <li>Immutable state updates with spread operator</li>
          <li>Multiple state slices in one component</li>
          <li>Custom update functions for complex logic</li>
        </ul>
      </div>
    </div>
  );
};

export default ComplexStateExample;
