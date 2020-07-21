/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="page-container">
          <div className="content-warp">
            <NavBar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
          </div>
          <Footer className="footer" />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
