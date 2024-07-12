import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button className='btn btn-custom-primary'>Hola</button>
        <button className='btn btn-custom-secondary'>Hola</button>
        <button className='btn btn-custom-tertiary'>Hola</button>
        <button className='btn btn-custom-quaternary'>Hola</button>
        <div className="alert alert-custom-primary">aaaaaaaaaaaaaa</div>
        <div className="badge bg-custom-primary">aaaaaaaaaaaaaa</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
