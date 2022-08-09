import React from "react";
import NotFoundStyle from "./ComponentsStyles/NotFound.module.scss";
import vega from "../assets/vincent.gif";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../contexts/BlogContext";

const NotFound = () => {
  const navigate = useNavigate();
  const { setSearch } = useBlogContext();

  return (
    <section className={NotFoundStyle["section"]}>
      <div className={NotFoundStyle["divStyled"]}>
        <img src={vega} alt="" />
        <h1>404</h1>
        <p>Sorry, we couldn't find what you're looking for. </p>
        <button
          className={NotFoundStyle["buttonStyled"]}
          onClick={() => {
            setSearch("");
            navigate(-1);
          }}
        >
          Go Back
        </button>
      </div>
    </section>
  );
};

export default NotFound;
