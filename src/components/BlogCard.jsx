import React from "react";
import { Link } from "react-router-dom";
import "./ComponentsStyles/BlogCard.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BlogForm from "./BlogForm";
// import ModeCommentIcon from "@mui/icons-material/ModeComment";
const BlogCard = () => {
  return (
    <>
      <div className="row">
        <div className="example-2 card">
          <div className="wrapper">
            <div className="header">
              <div className="date">
                <span className="day">12</span>
                <span className="month">Aug</span>
                <span className="year">2016</span>
              </div>
              <ul className="menu-content">
                <li>
                  <FavoriteBorderIcon />
                  <span>18</span>
                </li>
              </ul>
            </div>
            <div className="data">
              <div className="content">
                <span className="author">Jane Doe</span>
                <h1 className="title">
                  <Link to="#">
                    Stranger Things: The sound of the Upside Down
                  </Link>
                </h1>
                <p className="text">
                  The antsy bingers of Netflix will eagerly anticipate the
                  digital release of the Survive soundtrack, out today.
                </p>
                <Link to="/" className="button">
                  {/* <BlogForm /> */}Read more...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
