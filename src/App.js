// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';

import Dashboard from './components/Dashboard';
import AboutDevice from './components/AboutDevice';
import Settings from './components/Settings';
import RightSidebar from './components/RightSidebar';

import './App.css';

function App() {
  return (
      <div className="app-container">
        <LeftSidebar />
        <Header />

        <div className="main-content">
          <div className="content">
            <Routes>
              
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/about-device" element={<AboutDevice/>} />
              <Route path="/settings" element={<Settings/>} />
            </Routes>
          </div>
          <div className='right-con'>
            <RightSidebar />
          </div>
        </div>
      </div>
  );
}

export default App;
