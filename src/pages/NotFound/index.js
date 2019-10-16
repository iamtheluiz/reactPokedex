import React, { useEffect } from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';

function App() {
  useEffect(() => {
    document.querySelector("meta[name='theme-color']").setAttribute("content", "#000");
  }, []);

  return (
    <div id="NotFound">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Error 404: Not Found!
        </h1>
        <p>
          This page doesn't exist!
        </p>
        <a
          className="App-link"
          href="/"
        >
          Go back to home
        </a>
      </header>
    </div>
  );
}

export default App;
