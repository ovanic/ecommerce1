import React, { useState } from 'react';
import './ItemList.css';

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

const ItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <div className="quantity-container">
        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
        />
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <p>Total: ${item.price * quantity}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemList;
