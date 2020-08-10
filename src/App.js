import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import Title from './components/Title';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <Navigation />
      <Title />
    </BrowserRouter>


  );
}

export default App;
