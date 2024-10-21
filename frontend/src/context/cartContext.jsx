import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const cartContext = createContext();

export const cartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]); // Change to an array

  // Function to update products from the backend
  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  const addToCart = (_id, title, price) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === _id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { _id, title, price, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (_id) => {
    setCartItems((prevItems) => prevItems.filter(item => item._id !== _id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    axios.get("http://localhost:5000/products").then((response) => {
      const backendData = response.data;
      const frontendData = backendData.map((item) => ({
        ...item,
        _id: item._id,
        title: item.title,
        image1: item.image1,
      }));
      setProducts(frontendData);
    });
  }, []);

  return (
    <cartContext.Provider value={{ products, updateProducts, cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default cartProvider;
