import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext({
  wishlist: [],
  addToWishlist: () => { },
  removeFromWishlist: () => { },

});
export const useWishlist = () => useContext(WishlistContext)
export default function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (product) => {
    setWishlist((prevWishlistArray) => {
      const idx = prevWishlistArray.findIndex((item) => {
        const condition = item.title === product.title;
        return condition;
      });
      if (idx > -1) {
        localStorage.setItem("wishlist", JSON.stringify(prevWishlistArray))

        return prevWishlistArray;
      } else {
        localStorage.setItem("wishlist",
          JSON.stringify([...prevWishlistArray, product]));

        return [...prevWishlistArray, product];
      }
    });
  };

  const removeFromWishlist = (product) => {
    setWishlist((prevsArray) => {
      const newList = prevsArray.filter((item) => {
        const condition = item.title !== product.title;
        return condition;

      });
      localStorage.setItem("Wishlist", JSON.stringify(newList));

      return newList;
    });
  };



  useEffect(() => {

    const wishlistLocalState = localStorage.getItem("wishlist");
    if (wishlistLocalState) {
      const wishlist = JSON.parse(wishlistLocalState);
      setWishlist(wishlist);
    } else {
      localStorage.setItem("wishlist", JSON.stringify([]));
    }
  }, []);


  return <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
    {children}
  </WishlistContext.Provider>;
}