import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="branding">
          Math
          <br />
          Magicians
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calculator"
              >
                Calculator
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quote"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
