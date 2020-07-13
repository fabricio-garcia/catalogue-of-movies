import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Landing from './components/home/Landing';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Landing />
      <Footer />
    </Provider>
  );
}

export default App;
