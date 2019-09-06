import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Switch } from 'react-router-dom';
import Result from './components/Result';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Landing/>
    </div>
  );
}

export default App;
