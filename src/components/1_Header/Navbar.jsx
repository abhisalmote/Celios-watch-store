import React from "react";
import "../1_Header/Navbar.css";
import logo from "../Assets/Images/All-Images/Logo.gif";
import user from "../Assets/Images/All-Images/User.png";
import cart from "../Assets/Images/All-Images/Cart.png";
import wishlist from "../Assets/Images/All-Images/Heart-Hollow-Black.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img id="logo" src={logo} alt="company logo" />
        </Link>
      </div>
      <div className="category-list">
        <Link to="/watches">
          <h4>Watch</h4>
        </Link>
        <Link to="/mens">
          <h4>Men</h4>
        </Link>
        <Link to="womens">
          <h4>Women</h4>
        </Link>
        <Link to="kid">
          <h4>Kid</h4>
        </Link>
        <Link to="smart">
          <h4>Smart</h4>
        </Link>
      </div>
      <div className="icons-list">
        <Link to="/profile/Signin">
          <img className="Icons" src={user} alt="profile" />
        </Link>
        <Link to="wishlist">
          <img className="Icons" src={cart} alt="wishlist" />
        </Link>
        <Link to="cart">
          <img className="Icons" src={wishlist} alt="cart" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
