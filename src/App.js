import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 React App Built with GitHub Actions</h1>
        <p>
          This React application is automatically built and deployed using GitHub Actions CI/CD workflows.
        </p>
        <div className="features">
          <h2>Features:</h2>
          <ul>
            <li>✅ Automated Build Process</li>
            <li>✅ Continuous Integration Testing</li>
            <li>✅ Automated Deployment to GitHub Pages</li>
            <li>✅ Environment-based Workflows</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
