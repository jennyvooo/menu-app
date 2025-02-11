import React from 'react';

const MenuItem = ({ itemName, itemDescription, itemPrice, onAddToCart }) => {
  const price = Number(itemPrice);

  return (
    <div className="menu-item">
      <h3>{itemName}</h3>
      <p>{itemDescription}</p>
      <p>${price.toFixed(2)}</p>
      <button onClick={() => onAddToCart({ itemName, itemPrice: price, itemDescription })}>
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItem;
