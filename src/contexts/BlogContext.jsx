import { getDatabase, onValue, ref, update } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import { toastWarn } from "../helpers/customToastify";
import app, { auth, db } from "../helpers/firebase";
const BlogContext = createContext({});

// ? consume function (kendi hook'umu oluşturarak useContext yerine kullandım)
export const useBlogContext = () => {
  return useContext(BlogContext);
};

export const BlogContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
    });
  }, []);
  // !LIKE
  const handleLikes = (info) => {
    const like = info.likes;
    // console.log(info.likes);
    // if (Object.values(info.likes).includes(auth.currentUser.uid)) {
    if (Object.values(info.fav).includes(auth.currentUser.uid)) {
      // console.log(auth.currentUser.displayName);

      toastWarn("You already liked this content");
    } else {
      update(ref(db, `blog/` + info.id), {
        ...info,
        likes: like + 1,
        fav: [...info.fav, auth.currentUser.uid],
      });
    }
    // else {
    //   update(ref(db, `blog/` + info.id), {
    //     likes: like - 1,
    //   });
    // }
  };
  const handleUnlikes = (info) => {
    const like = info.likes.counter;
    // update(ref(db, `blog/` + info.id), {
    //   likes: { counter: like - 1, fav: false },
    // });
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
