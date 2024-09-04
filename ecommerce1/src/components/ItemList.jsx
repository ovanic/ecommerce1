// src/components/ItemList.jsx
import React from 'react';
import './ItemList.css'; // Asegúrate de que el archivo CSS esté correctamente importado

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <div key={item.id} className="item-card">
          <img src={item.image} alt={item.name} className="item-image" />
          <h2>{item.name}</h2>
          <p>Precio: ${item.price}</p>
          <button>Ver Detalles</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
