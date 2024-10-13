import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import AboutUs from "./pages/AboutUS.jsx";
import ContactUs from "./pages/contactUs.jsx";
<<<<<<< HEAD
import Login from "./pages/loginPage.jsx";
=======
import Cart from "./pages/CartPage.jsx";
import WishList from "./pages/wishlistPage.jsx";
>>>>>>> d0540ee90ac0113e73258ecae71d30bdbca8dc20
import BrandProducts from "./components/fetchEachBrand.jsx"; 
import LaptopPage from "./components/laptopPdts.jsx";
import MobilePage from "./components/mobilePdts.jsx";
import TabletPage from "./components/tabletPdts.jsx";
import GamingPage from "./components/gamingPdts.jsx";
import AccessoriesPage from "./components/accessoryPdts.jsx";
import WearablePage from "./components/wearablePdts.jsx";
import ShopNow from "./components/shopNow.jsx";
import TopSellingProducts from "./components/topSelling.jsx";
import SearchResults from "./components/searchResults.jsx";
import Layout from "./components/Layout.jsx";
import Signup from "./pages/signupPage.jsx";
import React from 'react';
<<<<<<< HEAD
import WishlistPage from "./pages/wishlistPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header.jsx";
import { useEffect,useState } from "react";
import ProductsProvider from "./store/ProductsContext.jsx";
import { CartContext } from "./context/cart/cartContext.jsx";

=======
import LoginPage from "./pages/loginPage.jsx";
>>>>>>> d0540ee90ac0113e73258ecae71d30bdbca8dc20

const App = () => {
  const [cart,setCart]=useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const cartLocalState = localStorage.getItem("cart");
    if (cartLocalState) {
       const cart = JSON.parse(cartLocalState);
       setCart(Array.isArray(cart) ? cart : []); 
    } else {
       localStorage.setItem("cart", JSON.stringify([]));
    }
 
    const wishlistLocalState = localStorage.getItem("wishlist");
    if (wishlistLocalState) {
       const wishlist = JSON.parse(wishlistLocalState);
       setWishlist(Array.isArray(wishlist) ? wishlist : []); 
    } else {
       localStorage.setItem("wishlist", JSON.stringify([]));
    }
 }, []);
 const removeFromWishlist = (product) => {
  setWishlist((prevsArray) => {
     const validPrevArray = Array.isArray(prevsArray) ? prevsArray : []; // Ensure array
     const newList = validPrevArray.filter((item) => item.title !== product.title);
     localStorage.setItem("wishlist", JSON.stringify(newList));
     return newList;
  });
};

const addToWishlist = (product) => {
  setWishlist((prevWishlistArray) => {
     const validPrevArray = Array.isArray(prevWishlistArray) ? prevWishlistArray : []; // Ensure array
     const idx = validPrevArray.findIndex((item) => item.title === product.title);
     if (idx > -1) {
        localStorage.setItem("wishlist", JSON.stringify(validPrevArray));
        return validPrevArray;
     } else {
        const updatedWishlist = [...validPrevArray, product];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        return updatedWishlist;
     }
  });
};
const addToCart = (product) => {
  setCart((prevCartArray) => {
     const validPrevArray = Array.isArray(prevCartArray) ? prevCartArray : [];
     const idx = validPrevArray.findIndex((_product) => _product.title === product.title);
     if (idx > -1) {
        const updatedProduct = { ...validPrevArray[idx], quantity: validPrevArray[idx].quantity + 1 };
        const updatedCart = [...validPrevArray];
        updatedCart[idx] = updatedProduct;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
     } else {
        const newProduct = { ...product, quantity: 1 };
        const updatedCart = [...validPrevArray, newProduct];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
     }
  });
};

const removeFromCart = (product) => {
  setCart((prevCartArray) => {
     const validPrevArray = Array.isArray(prevCartArray) ? prevCartArray : [];
     const newCart = validPrevArray.filter((_product) => _product.title !== product.title);
     localStorage.setItem("cart", JSON.stringify(newCart));
     return newCart;
  });
};
  return (
    <ProductsProvider>
    <CartContext.Provider 
    value={{
      cart,
      addToCart,
      removeFromCart,
      wishlist,
      addToWishlist,
      removeFromWishlist,
      }}
      >
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={< Signup />} />

          <Route path="cart" element={<CartPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="checkout" element={<CheckoutPage />} />

          <Route path="laptop" element={<LaptopPage />} />
          <Route path="mobile" element={<MobilePage />} />
          <Route path="tablet" element={<TabletPage />} />
          <Route path="gaming" element={<GamingPage />} />
          <Route path="wearable" element={<WearablePage />} />
          <Route path="accessory" element={<AccessoriesPage />} />
          <Route path="/shopnow" element={<ShopNow />} />
          <Route path="topselling" element={<TopSellingProducts />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="products/:brandName" element={<BrandProducts />} />
        </Route>
      </Routes>
    </Router>
    </CartContext.Provider>  
</ProductsProvider>
  );
};

export default App;
