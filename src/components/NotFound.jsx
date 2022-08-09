import React from "react";
import NotFoundStyle from "./ComponentsStyles/NotFound.module.scss";
import vega from "../assets/vincent.gif";

const NotFound = () => {
  return (
    <section className={NotFoundStyle["section"]}>
      <div className={NotFoundStyle["divStyled"]}>
        <img src={vega} alt="" />
        <h1>404</h1>
        <p>Ooppss... Something went wrong</p>
      </div>
    </section>
  );
};

export default NotFound;
