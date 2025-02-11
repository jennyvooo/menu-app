import React from "react";
import Menu from "../Menu/Menu";

const MenuApp = ({ data = [], onAddToCart }) => {
  return (
    <div>
      {data.length > 0 ? (
        data.map((menu, index) => (
          <Menu
            key={index}
            menuName={menu.menuName}
            menuItems={menu.menuItems}
            onAddToCart={onAddToCart} 
          />
        ))
      ) : (
        <p>No menu data available.</p>
      )}
    </div>
  );
};

export default MenuApp;
