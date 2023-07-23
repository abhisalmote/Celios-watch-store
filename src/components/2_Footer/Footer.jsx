import React from "react";
import "../2_Footer/Footer.css";
import Twitter from "../Assets/Images/All-Images/twitter.png";
import Instagram from "../Assets/Images/All-Images/instagram.png";
import Facebook from "../Assets/Images/All-Images/facebook.png";
import Youtube from "../Assets/Images/All-Images/youtube.png";

function Footer() {
  return (
    <div>
      <div className="Footer">
        <div>
          <h4>COMPANY</h4>

          <li>About Us</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li>Our Stores</li>
          <li>Price Match Gaurantee</li>
        </div>
        <div>
          <h4>POLICIES AND ORDER</h4>

          <li>Authenticity Guarantee</li>
          <li>Disclaimer</li>
          <li>Privacy Policy</li>
          <li>Shipping and Return Policies</li>
          <li>Terms and Conditions</li>
          <li>Warranty Information</li>
        </div>
        <div>
          <h4>HELP</h4>

          <li>Corporate Gifting</li>
          <li>FAQ's</li>
          <li>My Account</li>
          <li>Repair Center</li>
          <li>Track Order</li>
          <li>Exchange</li>
        </div>
        <div>
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>

          <li>
            Be the first to hear about new arrivals, by-invitation-only sales
            and special events
          </li>
          <div className="Subscribe">
            <input
              id="Subscribe-Input"
              type="text"
              placeholder="Email Addres"
            />
            <button id="Subscribe-btn">Subscribe</button>
          </div>
          <div className="Social-Media-Container">
            <li>Stay Connected</li>
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
            <img src={Facebook} alt="" />
            <img src={Youtube} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
