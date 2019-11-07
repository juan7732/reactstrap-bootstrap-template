import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="p-3 bg-secondary my-2 rounded">
          <Toast>
            <ToastHeader>
              Reactstrap
            </ToastHeader>
            <ToastBody>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                This is a toast! To learn React!
              </a>
            </ToastBody>
          </Toast>
        </div>

      </header>
    </div>
  );
}

export default App;
