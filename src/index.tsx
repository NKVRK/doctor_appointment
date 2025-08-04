import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const Root: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <BrowserRouter>
      <div className={`${isDarkMode ? 'dark' : ''} m-0 p-0`}>
        <React.StrictMode>
          <App isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </React.StrictMode>
      </div>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Root />);