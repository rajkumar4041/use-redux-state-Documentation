import { useReduxState, useReduxStateValue } from 'redux-toolkit-state';

interface Theme {
  mode: 'light' | 'dark';
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
}

const ThemeToggleExample = () => {
  const [theme, setTheme] = useReduxState<Theme>('app-theme', {
    mode: 'light',
    primaryColor: '#007bff',
    secondaryColor: '#6c757d',
    backgroundColor: '#ffffff',
    textColor: '#212529',
  });

  const toggleTheme = () => {
    if (theme.mode === 'light') {
      setTheme({
        mode: 'dark',
        primaryColor: '#0d6efd',
        secondaryColor: '#adb5bd',
        backgroundColor: '#212529',
        textColor: '#f8f9fa',
      });
    } else {
      setTheme({
        mode: 'light',
        primaryColor: '#007bff',
        secondaryColor: '#6c757d',
        backgroundColor: '#ffffff',
        textColor: '#212529',
      });
    }
  };

  const updatePrimaryColor = (color: string) => {
    setTheme({ ...theme, primaryColor: color });
  };

  return (
    <div className="example-container">
      <h2>Theme Management</h2>
      <p className="description">
        Managing application-wide theme state with real-time UI updates. Demonstrates how to create
        a theme system that affects the entire application.
      </p>

      <div className="demo-section">
        <div className="theme-controls">
          <h3>Theme Controls</h3>
          <div className="control-group">
            <button onClick={toggleTheme} className="theme-toggle">
              Switch to {theme.mode === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </div>

          <div className="color-controls">
            <label>
              Primary Color:
              <input
                type="color"
                value={theme.primaryColor}
                onChange={(e) => updatePrimaryColor(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="theme-preview">
          <h3>Theme Preview</h3>
          <div className="preview-container">
            <div className="preview-card">
              <h4>Sample Card</h4>
              <p>This is a sample card that demonstrates the current theme.</p>
              <div className="preview-buttons">
                <button className="primary-btn">Primary Button</button>
                <button className="secondary-btn">Secondary Button</button>
              </div>
            </div>
          </div>
        </div>

        <div className="theme-components">
          <h3>Theme-Aware Components</h3>
          <div className="components-grid">
            <ThemeAwareComponent />
            <ThemeAwareComponent />
            <ThemeAwareComponent />
          </div>
        </div>
      </div>

      <div className="code-section">
        <h3>Code</h3>
        <pre>
          <code>{`interface Theme {
  mode: 'light' | 'dark';
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
}

const ThemeToggleExample = () => {
  const [theme, setTheme] = useReduxState<Theme>('app-theme', {
    mode: 'light',
    primaryColor: '#007bff',
    secondaryColor: '#6c757d',
    backgroundColor: '#ffffff',
    textColor: '#212529',
  });

  const toggleTheme = () => {
    if (theme.mode === 'light') {
      setTheme({
        mode: 'dark',
        primaryColor: '#0d6efd',
        secondaryColor: '#adb5bd',
        backgroundColor: '#212529',
        textColor: '#f8f9fa',
      });
    } else {
      setTheme({
        mode: 'light',
        primaryColor: '#007bff',
        secondaryColor: '#6c757d',
        backgroundColor: '#ffffff',
        textColor: '#212529',
      });
    }
  };
};

// Theme-aware component using useReduxStateValue
const ThemeAwareComponent = () => {
  const theme = useReduxStateValue<Theme>('app-theme');
  
  return (
    <div style={{
      backgroundColor: theme.backgroundColor,
      color: theme.textColor,
      border: \`2px solid \${theme.primaryColor}\`
    }}>
      Theme-aware content
    </div>
  );
};`}</code>
        </pre>
      </div>

      <div className="features">
        <h3>Key Features Demonstrated</h3>
        <ul>
          <li>Application-wide theme state management</li>
          <li>Real-time theme switching</li>
          <li>Dynamic color customization</li>
          <li>Theme-aware components with useReduxStateValue</li>
          <li>Persistent theme state across components</li>
          <li>Type-safe theme configuration</li>
        </ul>
      </div>

      <style>{`
        .theme-toggle {
          background-color: ${theme.primaryColor};
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }

        .preview-container {
          background-color: ${theme.backgroundColor};
          color: ${theme.textColor};
          padding: 20px;
          border-radius: 8px;
          border: 2px solid ${theme.secondaryColor};
        }

        .primary-btn {
          background-color: ${theme.primaryColor};
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          margin-right: 10px;
        }

        .secondary-btn {
          background-color: ${theme.secondaryColor};
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

// Theme-aware component that reads theme state
const ThemeAwareComponent = () => {
  const theme = useReduxStateValue<Theme>('app-theme');

  return (
    <div
      className="theme-aware-card"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        border: `2px solid ${theme.primaryColor}`,
        padding: '15px',
        borderRadius: '8px',
        margin: '10px',
      }}
    >
      <h4>Theme-Aware Component</h4>
      <p>This component automatically adapts to theme changes.</p>
      <div style={{ color: theme.primaryColor }}>Primary color text</div>
    </div>
  );
};

export default ThemeToggleExample;
