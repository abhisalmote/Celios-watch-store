import React from "react";
import "../Login_Info/Signin.css";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="Login_Box">
      <div className="Login_Container">
        <div>
          <h2>Sign In</h2>
        </div>
        <div className="Input">
          <p>Email</p>
          <input type="email" required />
        </div>
        <div className="Input">
          <p>Password</p>
          <input type="text" required />
        </div>
        <div>
          <button id="Login_Btn">Sign In</button>
        </div>
        <div className="text">
          <p>Forgot Password?</p>
        </div>
        <div className="text">
          <p>
            Need an account? <Link to="/profile/Signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
