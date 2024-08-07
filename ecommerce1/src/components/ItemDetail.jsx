import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
