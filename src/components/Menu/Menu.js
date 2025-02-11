import React from "react";
import MenuItem from "../MenuItem/MenuItem";

const Menu = ({ menuName, menuItems, onAddToCart }) => {
  return (
    <div>
      <h2>{menuName}</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.itemId}>
            <MenuItem
              itemName={item.itemName}
              itemPrice={item.itemPrice}
              itemDescription={item.itemDescription}
              onAddToCart={onAddToCart} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
