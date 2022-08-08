import { getDatabase, onValue, ref, update } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import app, { db } from "../helpers/firebase";
const BlogContext = createContext({});

// ? consume function (kendi hook'umu oluşturarak useContext yerine kullandım)
export const useBlogContext = () => {
  return useContext(BlogContext);
};

export const BlogContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState();
  // ! REad
  useEffect(() => {
    const db = getDatabase(app);
    const userRef = ref(db, "blog/");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setData(userArray);
      setIsLoading(false);
    });
  }, []);
  // !LIKE
  const handleLikes = (info) => {
    const like = info.likes.counter;
    // console.log(info.likes);
    update(ref(db, `blog/` + info.id), {
      likes: { counter: like + 1, fav: true },
    });
  };
  const handleUnlikes = (info) => {
    const like = info.likes.counter;

    // console.log(info.likes);

    update(ref(db, `blog/` + info.id), {
      likes: { counter: like - 1, fav: false },
    });
  };

  const values = {
    isLoading,
    setIsLoading,
    data,
    setData,
    handleLikes,
    handleUnlikes,
  };
  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export default BlogContext;
