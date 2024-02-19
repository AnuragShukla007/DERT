// src/components/LeftSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LeftSidebar.css';

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-content">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/about-device">About the Device</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;

