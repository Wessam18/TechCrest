import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SingleProductContext = createContext();

export const SingleProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to fetch and set the product by its ID
  const fetchProductById = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:5000/products/${productId}`);
      setSelectedProduct(response.data);
    } catch (error) {
      console.error("Failed to fetch product", error);
    }
  };

  return (
    <SingleProductContext.Provider value={{ selectedProduct, fetchProductById }}>
      {children}
    </SingleProductContext.Provider>
  );
};

export default SingleProductProvider;
