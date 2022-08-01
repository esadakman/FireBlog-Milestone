import React, { useState } from "react";
import registerStyle from "./pagesStyles/register.module.scss";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { GoogleRegister, register } from "../helpers/firebase";
// import { toastWarn } from "../helpers/customToastify";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //
  const handleSignUp = async (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    if (email && password && firstName && lastName) {
      await register(email, password, displayName, navigate);
    } else {
      // toastWarn("Please fill out all fields.");
      console.log("Please fill out all fields.");
    }
  };
  return (
    <div className={registerStyle["body"]}>
      <div className={registerStyle["background"]}>
        <div className={registerStyle["shape"]}></div>
        <div className={registerStyle["shape"]}></div>
      </div>
      <div className={registerStyle["formDiv"]}>
        {/* <div className={registerStyle["formik"]}> */}
        <form onSubmit={handleSignUp}>
          <h3>Sign Up </h3>
          <div className={registerStyle["name"]}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                id="name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                placeholder="Surname"
                id="surname"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className={registerStyle["userPassword"]}>
            <label htmlFor="username">Email Adress</label>
            <input
              type="email"
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
          </div>

          <button className={registerStyle["login"]}>Sign Up</button>
          <div className={registerStyle["googles"]}>
            <div
              className={registerStyle["go"]}
              onClick={() => {
                GoogleRegister(navigate);
              }}
            >
              <GoogleIcon />
              Sign Up with Google
            </div>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Register;
