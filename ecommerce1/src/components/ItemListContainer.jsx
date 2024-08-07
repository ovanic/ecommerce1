import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import products from './../asyncmock';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams(); // Obtiene la categoría de la URL

  useEffect(() => {
    // Simulación de llamada asíncrona para obtener productos
    setTimeout(() => {
      if (category) {
        // Filtrar productos por categoría si existe
        setItems(products.filter(product => product.category === decodeURIComponent(category)));
      } else {
        // Mostrar todos los productos si no hay categoría
        setItems(products);
      }
    }, 1000); // Simula un retardo de 1 segundo
  }, [category]); // Dependencia en `category` para actualizar cuando cambie

  return (
    <div>
      <h1>{category ? `Productos en ${decodeURIComponent(category)}` : 'Todos los Productos'}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;


