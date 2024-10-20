import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext({
  wishlist: [],
  addToWishlist: () => { },
  removeFromWishlist: () => { },
});

export const useWishlist = () => useContext(WishlistContext);

export default function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlistArray) => {
      const idx = prevWishlistArray.findIndex((item) => item._id === product._id);
      if (idx > -1) {
        // Item already exists in wishlist, do nothing
        return prevWishlistArray;
      } else {
        const updatedWishlist = [...prevWishlistArray, product];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        return updatedWishlist;
      }
    });
  };

  const removeFromWishlist = (product) => {
    setWishlist((prevWishlistArray) => {
      const updatedWishlist = prevWishlistArray.filter((item) => item._id !== product._id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  useEffect(() => {
    const wishlistLocalState = localStorage.getItem("wishlist");
    if (wishlistLocalState) {
      setWishlist(JSON.parse(wishlistLocalState));
    } else {
      localStorage.setItem("wishlist", JSON.stringify([]));
    }
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}
