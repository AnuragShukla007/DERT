// src/components/RightSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './RightSidebar.css';

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="sidebar-content">
        <ul>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default RightSidebar;
