import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact='true' element={<Home/>} />
        <Route path='/SignIn' exact='true' element={<SignIn/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
