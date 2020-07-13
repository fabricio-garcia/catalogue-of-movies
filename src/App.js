import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Landing from './components/home/Landing';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
