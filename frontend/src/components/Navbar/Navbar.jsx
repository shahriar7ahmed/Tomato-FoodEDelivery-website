import React, { useState } from 'react'
import "./Navbar.css";
import { assets } from "../../assets/assets"; 

const Navbar = () => {
    const [menu,setMenu] = useState("home");
  return (
    <div className="Navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>Home</li>
        <li className={menu === "about" ? "active" : ""}>About</li>
        <li className={menu === "mobile-app" ? "active" : ""}>Mobile App</li>
        <li className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="User" />
            <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
