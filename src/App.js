/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Landing from './components/home/Landing';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Landing />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
