import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

 
  const products = [
    { id: 1, name: 'Pocophone X4', category: 'Xiaomi', price: 10, image: 'url/to/image1.jpg' },
    { id: 2, name: 'Redmi Note 10', category: 'Xiaomi', price: 15, image: 'url/to/image2.jpg' },
    { id: 3, name: 'Samsung Galaxy Note 20', category: 'Samsung', price: 20, image: 'url/to/image3.jpg' },
    { id: 4, name: 'Samsung S21', category: 'Samsung', price: 25, image: 'url/to/image4.jpg' },
    { id: 5, name: 'Iphone 15', category: 'Iphone', price: 30, image: 'url/to/image5.jpg' },
    { id: 6, name: 'Iphone 14', category: 'Iphone', price: 35, image: 'url/to/image6.jpg' },
  ];

  useEffect(() => {
   
    setTimeout(() => {
      setItems(products);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Lista de productos</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
