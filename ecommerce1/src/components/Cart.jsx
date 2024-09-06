import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <div>
      <h1>Tu Carrito</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <span>${item.price * item.quantity}</span>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h2>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <Link to="/checkout">
        <button>Finalizar Compra</button>
      </Link>
    </div>
  );
};

export default Cart;

