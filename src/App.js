import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Message from './components/Message';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import Route from './Route';

function App() {
  return (
    <Router>
      <Header />
      <Route />
      <Message />
      <Footer />
    </Router>
  );
}

export default App;
