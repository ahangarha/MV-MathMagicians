import React from 'react';
import { Link } from 'react-router-dom';
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
