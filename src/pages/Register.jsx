import React from "react";
import "./pagesStyles/Register.scss";
import GoogleIcon from "@mui/icons-material/Google";
const Register = () => {
  return (
    <div className="body">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="formik">
        <h3>Sign Up </h3>
        <div className="name">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" id="name" />
          </div>
          <div>
            <label htmlFor="surname">Surname</label>
            <input type="text" placeholder="Surname" id="surname" />
          </div>
        </div>
        <div className="userPassword">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
        </div>

        <button className="login">Sign Up</button>
        <div className="social">
          <button className="go">
            <GoogleIcon />
            Sign Up with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
