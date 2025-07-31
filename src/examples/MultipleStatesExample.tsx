import { useMultipleGlobalStates, useReduxState } from 'redux-toolkit-state';

const MultipleStatesExample = () => {
  // Initialize multiple states
  const [user, setUser] = useReduxState('multi-user', { name: 'John', role: 'user' });
  const [settings, setSettings] = useReduxState('multi-settings', {
    theme: 'light',
    language: 'en',
  });
  const [notifications, setNotifications] = useReduxState('multi-notifications', {
    count: 0,
    enabled: true,
  });
  const [cart, setCart] = useReduxState('multi-cart', { items: [], total: 0 });

  // Access multiple states at once
  const multipleStates = useMultipleGlobalStates([
    'multi-user',
    'multi-settings',
    'multi-notifications',
    'multi-cart',
  ]);

  const updateUser = () => {
    setUser({ name: 'Jane', role: 'admin' });
  };

  const toggleTheme = () => {
    setSettings({ ...settings, theme: settings.theme === 'light' ? 'dark' : 'light' });
  };

  const addNotification = () => {
    setNotifications({ ...notifications, count: notifications.count + 1 });
  };

  const addToCart = () => {
    const newItem = {
      id: Date.now(),
      name: `Item ${cart.items.length + 1}`,
      price: Math.floor(Math.random() * 100) + 10,
    };
    setCart({
      items: [...cart.items, newItem] as any,
      total: cart.total + newItem.price,
    });
  };

  return (
    <div className="example-container">
      <h2>Multiple States Management</h2>
      <p className="description">
        Managing multiple global states simultaneously. This example shows how to access and update
        multiple state slices efficiently.
      </p>

      <div className="demo-section">
        <div className="states-grid">
          <div className="state-card">
            <h3>User State</h3>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
            <button onClick={updateUser}>Update User</button>
          </div>

          <div className="state-card">
            <h3>Settings State</h3>
            <p>
              <strong>Theme:</strong> {settings.theme}
            </p>
            <p>
              <strong>Language:</strong> {settings.language}
            </p>
            <button onClick={toggleTheme}>Toggle Theme</button>
          </div>

          <div className="state-card">
            <h3>Notifications State</h3>
            <p>
              <strong>Count:</strong> {notifications.count}
            </p>
            <p>
              <strong>Enabled:</strong> {notifications.enabled ? 'Yes' : 'No'}
            </p>
            <button onClick={addNotification}>Add Notification</button>
          </div>

          <div className="state-card">
            <h3>Cart State</h3>
            <p>
              <strong>Items:</strong> {cart.items.length}
            </p>
            <p>
              <strong>Total:</strong> ${cart.total}
            </p>
            <button onClick={addToCart}>Add Item</button>
          </div>
        </div>

        <div className="multiple-states-display">
          <h3>All States Combined (useMultipleGlobalStates)</h3>
          <div className="json-display">
            <pre>{JSON.stringify(multipleStates, null, 2)}</pre>
          </div>
        </div>
      </div>

      <div className="code-section">
        <h3>Code</h3>
        <pre>
          <code>{`// Initialize multiple states
const [user, setUser] = useReduxState('multi-user', { name: 'John', role: 'user' });
const [settings, setSettings] = useReduxState('multi-settings', { theme: 'light', language: 'en' });
const [notifications, setNotifications] = useReduxState('multi-notifications', { count: 0, enabled: true });
const [cart, setCart] = useReduxState('multi-cart', { items: [], total: 0 });

// Access multiple states at once
const multipleStates = useMultipleGlobalStates([
  'multi-user', 
  'multi-settings', 
  'multi-notifications', 
  'multi-cart'
]);

// Update individual states
const updateUser = () => {
  setUser({ name: 'Jane', role: 'admin' });
};

const toggleTheme = () => {
  setSettings({ ...settings, theme: settings.theme === 'light' ? 'dark' : 'light' });
};`}</code>
        </pre>
      </div>

      <div className="features">
        <h3>Key Features Demonstrated</h3>
        <ul>
          <li>Managing multiple independent state slices</li>
          <li>Bulk state access with useMultipleGlobalStates</li>
          <li>Independent state updates</li>
          <li>State isolation and separation of concerns</li>
          <li>Efficient state management for complex applications</li>
        </ul>
      </div>
    </div>
  );
};

export default MultipleStatesExample;
