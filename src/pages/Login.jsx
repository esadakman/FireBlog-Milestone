import React, { useState } from "react";
import "./pagesStyles/Login.scss";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
// import { toastInfo, toastWarn } from "../helpers/customToastify";
import { login } from "../helpers/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // const user = await login(email, password, navigate);
    if (email && password) {
      await login(email, password);
    } else {
      // toastWarn("Please fill out all fields.");
      console.log("asd");
    }
  };

  return (
    <div className="body">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="formik" onSubmit={handleLogin}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email Adress"
          id="username"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login">Log In</button>
        <div className="social">
          <button className="go">
            <GoogleIcon />
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
