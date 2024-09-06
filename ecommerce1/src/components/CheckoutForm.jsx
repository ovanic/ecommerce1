import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './../firebaseConfig';

const CheckoutForm = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer,
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      date: new Date(),
      total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart(); 
    } catch (error) {
      console.error('Error al crear la orden: ', error);
    }
  };

  return (
    <div>
      {orderId ? (
        <div>
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu ID de compra es: {orderId}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Finalizar Compra</h2>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" value={buyer.name} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" value={buyer.email} onChange={handleInputChange} required />
          </div>
          <div>
            <label htmlFor="phone">Teléfono:</label>
            <input type="tel" id="phone" name="phone" value={buyer.phone} onChange={handleInputChange} required />
          </div>
          <button type="submit">Confirmar Compra</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
