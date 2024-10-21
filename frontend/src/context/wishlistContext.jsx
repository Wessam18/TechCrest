import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const wishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [wishlistItems, setWishlistItems] = useState(() => {
    // Load wishlist items from local storage if available
    const savedWishlist = localStorage.getItem("wishlistItems");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Function to update products from the backend
  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  const addToWishlist = (_id, title, price, image1) => {
    setWishlistItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === _id);
      if (!existingItem) {
        const updatedWishlist = [...prevItems, { _id, title, price, image1 }];
        // Save to local storage
        localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
        return updatedWishlist;
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (_id) => {
    setWishlistItems((prevItems) => {
      const updatedWishlist = prevItems.filter(item => item._id !== _id);
      // Save to local storage
      localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    // Clear local storage
    localStorage.removeItem("wishlistItems");
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
    <wishlistContext.Provider value={{ products, wishlistItems, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </wishlistContext.Provider>
  );
};

export default WishlistProvider;
