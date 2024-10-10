import React, { useState } from 'react';
import "../styles/Header.css"; // Link to your CSS file (optional)
import { Link, useNavigate } from 'react-router-dom';
import SearchDropdown from './searchDropDown.jsx'; // Import the dropdown component

const Header = () => {
  const [searchTerm, setSearchTerm] = useState(''); // For managing the search input
  const [showDropdown, setShowDropdown] = useState(false); // For showing the dropdown
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowDropdown(value.length > 0); // Show dropdown if there is input
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowDropdown(false); // Close dropdown on search submit
    if (searchTerm) {
      navigate(`/search?query=${searchTerm}`); // Navigate to the search page with the query
    }
  };

  return (
    <>
      {/* HEADER */}
      <header>
        {/* MAIN HEADER */}
        <div id="header">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* LOGO */}
              <div className="col-md-3">
                <div className="header-logo">
                  <Link to="/" className="logo">
                    <h1 id="logo-h1">TechCrest</h1>
                  </Link>
                </div>
              </div>
              {/* /LOGO */}
              
              {/* SEARCH BAR */}
              <div className="col-md-6">
                <div className="header-search">
                  <form id="form" onSubmit={handleSearchSubmit}>
                    <input
                      className="input"
                      placeholder="Search here"
                      value={searchTerm}
                      onChange={handleSearchInputChange}
                    />
                    <button className="search-btn" type="submit">
                      Search
                    </button>
                  </form>
                  {/* Display dropdown if there are search results */}
                  {showDropdown && <SearchDropdown searchTerm={searchTerm} />}
                </div>
              </div>
              {/* /SEARCH BAR */}
              
              {/* ACCOUNT */}
              <div className="col-md-3 clearfix">
                <div className="header-ctn">
                  {/* Wishlist */}
                  <div>
                    <Link to="/wishlist">
                      <i className="fa fa-heart-o"></i>
                      <span>Your Wishlist</span>
                    </Link>
                  </div>
                  {/* /Wishlist */}
                  
                  {/* Cart */}
                  <div className="dropdown">
                    <Link to="/cart">
                      <i className="fa fa-shopping-cart"></i>
                      <span>Your Cart</span>
                    </Link>
                  </div>
                  {/* /Cart */}
                  
                  {/* My Account */}
                  <div>
                    <Link to="/login">
                      <i className="fa fa-user-o"></i>
                      <span>My Account</span>
                    </Link>
                  </div>
                  {/* /My Account */}
                </div>
              </div>
              {/* /ACCOUNT */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /MAIN HEADER */}
      </header>
      {/* /HEADER */}
      
      {/* NAVIGATION */}
      <nav id="navigation">
        {/* container */}
        <div className="container">
          {/* responsive-nav */}
          <div id="responsive-nav">
            {/* NAV */}
            <ul className="main-nav nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/laptop">Laptops</Link></li>
              <li><Link to="/mobile">Mobiles</Link></li>
              <li><Link to="/tablet">Tablets</Link></li>
              <li><Link to="/gaming">Gaming</Link></li>
              <li><Link to="/wearable">Wearables</Link></li>
              <li><Link to="/accessory">Accessories</Link></li>
            </ul>
            {/* /NAV */}
          </div>
          {/* /responsive-nav */}
        </div>
        {/* /container */}
      </nav>
      {/* /NAVIGATION */}
    </>
  );
};

export default Header;
