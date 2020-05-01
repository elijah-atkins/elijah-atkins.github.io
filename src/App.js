import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './scss/App.scss';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  return (
    <div className="App">


      <Navbar />

      <Main />
      <Footer />

    </div>
  );
}

export default App;
