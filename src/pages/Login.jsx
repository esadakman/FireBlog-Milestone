import React from "react";
import "./pagesStyles/Login.scss";

const Login = () => {
  return (
    <div className="body">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="formik">
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button className="login">Log In</button>
        <div className="social">
          <button className="go">Sign in with Google</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
