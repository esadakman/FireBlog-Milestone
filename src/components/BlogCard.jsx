import React from "react";
import { useNavigate } from "react-router-dom";
import BlogCardStyle from "./ComponentsStyles/BlogCard.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useBlogContext } from "../contexts/BlogContext";
import { Button } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";
import { toastWarn } from "../helpers/customToastify";
import { update } from "firebase/database";
import { ref } from "yup";
import { auth, db } from "../helpers/firebase";

const BlogCard = ({ data }) => {
  const { handleLikes } = useBlogContext();
  const { userCheck } = useAuthContext();
  const navigate = useNavigate();

  const handleDetails = (blog) => {
    if (userCheck) {
      navigate(`/details/${blog.title}`, {
        state: blog,
      });
    } else {
      toastWarn("You Should Login to See Details");
      // update(ref(db, `blog/`), {
      //   likes: { fav: false },
      // });
    }
    // console.log(blog);
  };

  const likeCheck = (blog) => {
    if (userCheck) {
      handleLikes(blog);
    } else {
      toastWarn("Please login for like");
    }
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
                  <li style={{ transition: " all 2s linear" }}>
                    {/* {blog?.likes > 0 ? ( */}
                    {blog?.fav.includes(auth.currentUser.uid) ? (
                      <FavoriteIcon
                        sx={{ color: "crimson" }}
                        onClick={() => likeCheck(blog)}
                      />
                    ) : (
                      <FavoriteIcon
                        sx={{ color: "white" }}
                        onClick={() => likeCheck(blog)}
                      />
                    )}
                    <span>{blog?.likes}</span>
                  </li>
                </ul>
              </div>
              <div className={BlogCardStyle["data"]}>
                <div className={BlogCardStyle["content"]}>
                  <span className={BlogCardStyle["author"]}>
                    @{blog.author?.name.toLowerCase().replace(/\s/g, "")}
                  </span>
                  <h1 className={BlogCardStyle["title"]}>
                    <p>{blog.title.slice(0, 25)}</p>
                  </h1>
                  <p className={BlogCardStyle["text"]}>
                    {blog.description.slice(0, 130)}...
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
