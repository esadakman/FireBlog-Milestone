import React from "react";
import { useNavigate } from "react-router-dom";
import BlogCardStyle from "./ComponentsStyles/BlogCard.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useBlogContext } from "../contexts/BlogContext";
import { Button } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";

const BlogCard = () => {
  const { handleLikes, handleUnlikes, data } = useBlogContext();
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
    console.log(blog);
  };

  return (
    <>
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
                </div>
                <ul className={BlogCardStyle["menu-content"]}>
                  <li>
                    {blog?.likes.fav ? (
                      <FavoriteIcon
                        sx={{ color: "crimson" }}
                        onClick={() => handleUnlikes(blog)}
                      />
                    ) : (
                      <FavoriteBorderIcon onClick={() => handleLikes(blog)} />
                    )}
                    <span>{blog?.likes.counter}</span>
                  </li>
                </ul>
              </div>
              <div className={BlogCardStyle["data"]}>
                <div className={BlogCardStyle["content"]}>
                  <span className={BlogCardStyle["author"]}>
                    @{blog.author?.name.toLowerCase().replace(/\s/g, "")}
                  </span>
                  <h1 className={BlogCardStyle["title"]}>
                    <p>{blog.title}</p>
                  </h1>
                  <p className={BlogCardStyle["text"]}>
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
