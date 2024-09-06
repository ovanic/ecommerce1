import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Navibar.css';

const Navibar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="navibar">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Xiaomi">Xiaomi</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Samsung">Samsung</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/Iphone">Iphone</Link>
          </li>
          <li className="nav-item cart-icon">
            <Link to="/cart">
              🛒
              <span className="cart-count">{cartItems.length}</span>
            </Link>
            {cartItems.length > 0 && (
              <div className="cart-dropdown">
                <ul>
                  {cartItems.map(item => (
                    <li key={item.id}>
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                      <span>{item.name}</span>
                      <span>x{item.quantity}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/cart" className="cart-link">
                  Ver Carrito
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navibar;

