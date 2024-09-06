import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from './../asyncmock';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    
    setTimeout(() => {
      const foundItem = products.find(product => product.id === parseInt(id));
      setItem(foundItem);
    }, 1000); 
  }, [id]);

  if (!item) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="item-detail">
      <img src={item.image} alt={item.name} className="item-detail-image" />
      <h1>{item.name}</h1>
      <p>Precio: ${item.price}</p>
      <p>{item.description}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;

