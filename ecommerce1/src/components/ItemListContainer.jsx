import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams(); 

  const products = [
    { id: 1, name: 'Pocophone X4', category: 'Xiaomi', price: 500000, image: 'url/to/image1.jpg' },
    { id: 2, name: 'Redmi Note 13', category: 'Xiaomi', price: 450000, image: 'url/to/image2.jpg' },
    { id: 3, name: 'Galaxy S21', category: 'Samsung', price: 600000, image: 'url/to/image3.jpg' },
    { id: 4, name: 'Galaxy S23', category: 'Samsung', price: 700000, image: 'url/to/image4.jpg' },
    { id: 5, name: 'Iphone 14', category: 'Iphone', price: 800000, image: 'url/to/image5.jpg' },
    { id: 6, name: 'Iphone 13', category: 'Iphone', price: 650000, image: 'url/to/image6.jpg' },
  ];

  useEffect(() => {
    
    setTimeout(() => {
      if (category) {
        
        setItems(products.filter(product => product.category === category));
      } else {
        
        setItems(products);
      }
    }, 1000); 
  }, [category]); 

  return (
    <div>
      <h1>{category ? `Productos en ${category}` : 'Todos los Productos'}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;

