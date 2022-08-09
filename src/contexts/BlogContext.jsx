import { getDatabase, onValue, ref, update } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import app, { auth, db } from "../helpers/firebase";
const BlogContext = createContext({});

// ? consume function (kendi hook'umu oluşturarak useContext yerine kullandım)
export const useBlogContext = () => {
  return useContext(BlogContext);
};

export const BlogContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  // console.log(search);

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
    if (Object.values(info.fav).includes(auth.currentUser.uid)) {
      update(ref(db, `blog/` + info.id), {
        ...info,
        likes: like - 1,
        fav: info.fav.filter((unlike) => unlike !== auth.currentUser.uid),
      });
    } else {
      update(ref(db, `blog/` + info.id), {
        ...info,
        likes: like + 1,
        fav: [...info.fav, auth.currentUser.uid],
      });
    }
  };

  const values = {
    isLoading,
    setIsLoading,
    data,
    setData,
    handleLikes,
    search,
    setSearch,
  };
  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export default BlogContext;
