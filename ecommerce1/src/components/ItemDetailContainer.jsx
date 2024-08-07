import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from './../asyncmock';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams(); // Obtiene el ID del producto desde la URL

  useEffect(() => {
    // Simulación de llamada asíncrona para obtener un producto por ID
    setTimeout(() => {
      const foundItem = products.find(product => product.id === parseInt(id));
      setItem(foundItem);
    }, 1000); // Simula un retardo de 1 segundo
  }, [id]);

  if (!item) {
    return <p>Cargando...</p>; // Mostrar un mensaje mientras se carga el producto
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

