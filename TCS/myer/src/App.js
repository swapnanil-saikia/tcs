import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
import Land from './landing/landing';
import Login from './login/log';
import Stocktake from './stocktake/Stocktake'
import React from 'react';
function App() {
  return (

    // <h2>mjjh2>
    <Router>

      <Routes>
        <Route path="/landing" element={<Land />} exact></Route>
        <Route path="/" element={<Login />} exact></Route>
        <Route path="/stocktake" element={<Stocktake />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
