import React, { useState } from 'react';
import MenuApp from "./components/MenuApp/MenuApp";

function App() {
  const menuData = [
    {
      menuName: "Dinner",
      menuItems: [
        {
          itemId: 1,
          itemPrice: "12",
          itemName: "Lasagne",
          itemDescription: "Meat and cheese layered between house-made pasta with bell peppers and onions."
        },
        {
          itemId: 2,
          itemPrice: "10",
          itemName: "Cheese Ravioli",
          itemDescription: "Cheese-filled ravioli served with house red sauce."
        },
        {
          itemId: 3,
          itemPrice: "14",
          itemName: "Chicken Parmesan",
          itemDescription: "Breaded chicken topped with marinara sauce and lots of cheese served over house-made spaghetti."
        }
      ]
    },
    {
      menuName: "Dessert",
      menuItems: [
        {
          itemId: 45,
          itemPrice: "10",
          itemName: "Chocolate Lava Cake",
          itemDescription: "Dark chocolate molten lava cake. Serves 2-3."
        },
        {
          itemId: 47,
          itemPrice: "8",
          itemName: "Tiramisu",
          itemDescription: "Layers of espresso-soaked ladyfingers and marscarpone cream topped with cocoa and espresso powder."
        },
        {
          itemId: 49,
          itemPrice: "5",
          itemName: "Cannolis",
          itemDescription: "Three flaky pastries enclosing a rich, ricotta filling dotted with decadent chocolate chips."
        },
        {
          itemId: 50,
          itemPrice: "5",
          itemName: "Cappuccino",
          itemDescription: "Steamed milk with two ristretto shots of espresso."
        }
      ]
    }
  ];

   // State for cart
   const [cart, setCart] = useState([]);

   // Add item to cart
   const handleAddToCart = (item) => {
     setCart(prevCart => [...prevCart, item]);
   };
 
   // Remove item from cart
   const handleRemoveFromCart = (itemId) => {
     setCart(prevCart => prevCart.filter(item => item.itemId !== itemId));
   };
 
   // Calculate total price
   const calculateTotal = () => {
     return cart.reduce((total, item) => total + item.itemPrice, 0).toFixed(2);
   };
 

   return (
    <div className="app">
      <h1>Restaurant Menu</h1>
      <MenuApp data={menuData} onAddToCart={handleAddToCart} /> {}
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cart.map(item => (
            <li key={item.itemId}>
              {item.itemName} - ${item.itemPrice.toFixed(2)}
              <button onClick={() => handleRemoveFromCart(item.itemId)}>Remove</button>
            </li>
          ))}
        </ul>
        <h3>Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
}

export default App;