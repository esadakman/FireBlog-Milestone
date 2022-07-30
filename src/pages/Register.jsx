import React from "react";
import "./pagesStyles/Register.scss";

const Register = () => {
  return (
    <div className="body">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="formik">
        <h3>Sign Up</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button className="login">Sign Up</button>
        <div className="social">
          <button className="go">Sign up with Google</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
