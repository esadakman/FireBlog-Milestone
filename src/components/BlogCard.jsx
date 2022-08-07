import React from "react";
import { useNavigate } from "react-router-dom";
import BlogCardStyle from "./ComponentsStyles/BlogCard.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useBlogContext } from "../contexts/BlogContext";
import { Button } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";

const BlogCard = () => {
  const { isLoading, data } = useBlogContext();
  const { userCheck } = useAuthContext();
  const navigate = useNavigate();

  const handleDetails = (blog) => {
    if (userCheck) {
      navigate(`/details/${blog.title}`, {
        state: blog,
      });
    } else {
      console.log("You Should Login to See Details");
    }
    // console.log(blog);
  };
  return (
    <>
      {/* // ({ id, title, description, imageUrl, createdAt, author }) */}
      <div className={BlogCardStyle["row"]}>
        {data?.map((blog) => (
          <div className={BlogCardStyle["card"]} key={blog.id}>
            <div
              className={BlogCardStyle["wrapper"]}
              style={{ backgroundImage: `url(${blog.imageUrl})` }}
            >
              <div className={BlogCardStyle["header"]}>
                <div className={BlogCardStyle["date"]}>
                  <span className={BlogCardStyle["day"]}>{blog.createdAt}</span>
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
                    {blog.author?.name}
                  </span>
                  <h1 className={BlogCardStyle["title"]}>
                    <p>
                      {blog.title}
                      {/* Stranger Things: The sound of the Upside Down */}
                    </p>
                  </h1>
                  <p className={BlogCardStyle["text"]}>
                    {/* The antsy bingers of Netflix will eagerly anticipate the
                  digital release of the Survive soundtrack, out today. */}
                    {blog.description.slice(0, 100)}...
                  </p>
                  <Button
                    onClick={() => handleDetails(blog)}
                    className={BlogCardStyle["button"]}
                  >
                    Read more...
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogCard;
