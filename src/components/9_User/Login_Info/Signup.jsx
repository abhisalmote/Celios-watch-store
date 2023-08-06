import React from "react";
import "../Login_Info/Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="Login_Box">
      <div className="Login_Container">
        <div>
          <h2>Sign Up</h2>
        </div>
        <div className="Input">
          <p>Email</p>
          <input type="email" required />
        </div>
        <div className="Input">
          <p>Create Password</p>
          <input type="text" required />
        </div>
        <div className="Input">
          <p>Confirm Password</p>
          <input type="text" required />
        </div>
        <div>
          <button id="Login_Btn">Sign Up</button>
        </div>
        <div className="text">
          <p>Forgot Password?</p>
        </div>
        <div className="text">
          <p>
            Already have an account? <Link to="/profile/Signin">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
