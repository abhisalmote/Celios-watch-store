import React from "react";
import "../1_Header/Navbar.css";
import logo from "../Assets/Images/All-Images/Logo.gif";
import user from "../Assets/Images/All-Images/User.png";
import cart from "../Assets/Images/All-Images/Cart.png";
import wishlist from "../Assets/Images/All-Images/Heart-Hollow-Black.png";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img id="logo" src={logo} alt="company logo" />
      </div>
      <div className="category-list">
        <h4>Watch</h4>
        <h4>Men</h4>
        <h4>Women</h4>
        <h4>Kid</h4>
        <h4>Smart</h4>
      </div>
      <div className="icons-list">
        <img className="Icons" src={user} alt="profile" />
        <img className="Icons" src={cart} alt="wishlist" />
        <img className="Icons" src={wishlist} alt="cart" />
      </div>
    </nav>
  );
}

export default Navbar;
