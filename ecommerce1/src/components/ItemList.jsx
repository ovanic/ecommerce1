import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ItemList.css';

const Item = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (quantity < item.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (item.stock > 0) {
      addToCart(item, quantity);
    }
  };

  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <h2>{item.name}</h2>
      <p>Precio: ${item.price}</p>
      <p>Stock disponible: {item.stock}</p>
      <div className="quantity-selector">
        <button onClick={decrementQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={incrementQuantity}>+</button>
      </div>
      <button
        onClick={handleAddToCart}
        disabled={item.stock === 0} 
      >
        {item.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
