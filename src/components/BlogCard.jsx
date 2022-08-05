import React from "react";
import { Link } from "react-router-dom";
import BlogCardStyle from "./ComponentsStyles/BlogCard.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useBlogContext } from "../contexts/BlogContext";

const BlogCard = () => {
  const { isLoading, data } = useBlogContext();
  return (
    <>
      <div className={BlogCardStyle["row"]}>
        {data?.map(
          ({ id, title, description, imageUrl, createdAt, author }) => (
            <div className={BlogCardStyle["card"]} key={id}>
              <div
                className={BlogCardStyle["wrapper"]}
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                <div className={BlogCardStyle["header"]}>
                  <div className={BlogCardStyle["date"]}>
                    <span className={BlogCardStyle["day"]}>{createdAt}</span>
                    {/* <span className={BlogCardStyle["month"]}>Aug</span>
                    <span className={BlogCardStyle["year"]}>2016</span> */}
                  </div>
                  <ul className={BlogCardStyle["menu-content"]}>
                    <li>
                      <FavoriteBorderIcon />
                      <span>18</span>
                    </li>
                  </ul>
                </div>
                <div className={BlogCardStyle["data"]}>
                  <div className={BlogCardStyle["content"]}>
                    <span className={BlogCardStyle["author"]}>
                      {author?.name}
                    </span>
                    <h1 className={BlogCardStyle["title"]}>
                      <Link to="/details">
                        {title}
                        {/* Stranger Things: The sound of the Upside Down */}
                      </Link>
                    </h1>
                    <p className={BlogCardStyle["text"]}>
                      {/* The antsy bingers of Netflix will eagerly anticipate the
                      digital release of the Survive soundtrack, out today. */}
                      {description.slice(0, 100)}...
                    </p>
                    <Link to="/details" className={BlogCardStyle["button"]}>
                      Read more...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default BlogCard;
