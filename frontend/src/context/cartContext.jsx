import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from local storage if available
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Function to update products from the backend
  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  const addToCart = (_id, title, price, image1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === _id);
      let updatedItems;
      if (existingItem) {
        updatedItems = prevItems.map((item) =>
          item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedItems = [...prevItems, { _id, title, price, image1, quantity: 1 }];
      }
      // Save to local storage
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const increaseQuantity = (_id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
      );
      // Save to local storage
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const decreaseQuantity = (_id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item._id === _id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
      // Save to local storage
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const removeFromCart = (_id) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(item => item._id !== _id);
      // Save to local storage
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    // Clear local storage
    localStorage.removeItem("cartItems");
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
    <cartContext.Provider value={{ products, updateProducts, cartItems, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
