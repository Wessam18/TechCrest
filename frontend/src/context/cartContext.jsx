import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},

});
export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prevCartArray) => {
      const idx = prevCartArray.findIndex(
        (_product) => _product.title === product.title
      );
      if (idx > -1) {
        const productItem = prevCartArray[idx];
        productItem.quantity = productItem.quantity + 1;
        localStorage.setItem("cart", JSON.stringify(prevCartArray));
        return prevCartArray;
      } else {
        const currentProduct = product;
        currentProduct.quantity = 1;

        localStorage.setItem(
          "cart",
          JSON.stringify([...prevCartArray, currentProduct])
        );
        return [...prevCartArray, currentProduct];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCartArray) => {
      const idx = prevCartArray.findIndex(
        (_product) => _product.title === product.title
      );
      if (idx > -1) {
        const newCartItems = cart.filter(
          (_product) => _product.title !== product.title);
        localStorage.setItem("cart", JSON.stringify(newCartItems));
        return newCartItems;
      } else {
        localStorage.setItem("cart", JSON.stringify(prevCartArray));
        return prevCartArray;
      }
    });
  };

  useEffect(() => {
    const cartLocalState = localStorage.getItem("cart");
    if (cartLocalState) {
      const cart = JSON.parse(cartLocalState);
      setCart(cart);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }

  }, []);

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
    {children}
    </CartContext.Provider>;
}