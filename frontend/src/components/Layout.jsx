import { Outlet } from "react-router-dom";
import Header from "./header.jsx";
import React from 'react';
import Footer from "./footer.jsx";

// import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      < Footer/>
    </div>
  );
};

export default Layout;
