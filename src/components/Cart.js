import React, { useState } from 'react';

const Cart = () => {
  // Cart starts empty
  const [cartItems] = useState([]);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.length === 0 ? (
          <li>Your cart is empty</li>
        ) : (
          cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Cart;
