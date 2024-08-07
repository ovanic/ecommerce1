import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate(); // Hook para redirección

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleViewDetails = () => {
    navigate(`/item/${item.id}`); // Redirige a la página de detalles del producto
  };

  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <div className="quantity-container">
        <button 
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <input
          type="number"
          id={`quantity-${item.id}`}
          name={`quantity-${item.id}`}
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
          aria-label={`Quantity for ${item.name}`}
        />
        <button 
          onClick={() => setQuantity(quantity + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <p>Total: ${item.price * quantity}</p>
      <button onClick={handleViewDetails}>Ver detalles</button> {}
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemList;
