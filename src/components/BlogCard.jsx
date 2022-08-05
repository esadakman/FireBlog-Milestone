import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCardStyle from "./ComponentsStyles/BlogCard.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAuthContext } from "../contexts/AuthContext";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "../helpers/firebase";
// import BlogDetails from "./BlogDetails";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase(app);
    const userRef = ref(db, "blog/");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

const BlogCard = () => {
  // const { data } = useAuthContext();
  // console.log(data[0]);
  const { isLoading, contactList } = useFetch();
  console.log(contactList[0].createdAt);
  return (
    <>
      <div className={BlogCardStyle["row"]}>
        {contactList?.map(
          ({ id, title, description, imageUrl, createdAt, author }) => (
            <div className={BlogCardStyle["card"]} key={id}>
              <div
                className={BlogCardStyle["wrapper"]}
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                <div className={BlogCardStyle["header"]}>
                  <div className={BlogCardStyle["date"]}>
                    <span className={BlogCardStyle["day"]}>{createdAt}</span>
                    <span className={BlogCardStyle["month"]}>Aug</span>
                    <span className={BlogCardStyle["year"]}>2016</span>
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
