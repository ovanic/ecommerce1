import React from 'react';
import { Link } from 'react-router-dom';
import './Navibar.css'

const Navibar = () => {
  return (
    <header className="navibar">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Categoría 1">Xiaomi</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Categoría 2">Samsung</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Categoría 3">Iphone</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navibar;
