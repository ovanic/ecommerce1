import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import products from './../asyncmock';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = () => {
      setTimeout(() => {
        if (category) {
          setItems(products.filter(product => product.category === category));
        } else {
          setItems(products);
        }
      }, 1000);
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
      <h1>{category ? `Productos en ${category}` : 'Todos los Productos'}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
