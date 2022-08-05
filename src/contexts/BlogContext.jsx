import { getDatabase, onValue, ref } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import app, { auth } from "../helpers/firebase";
const BlogContext = createContext({});

// ? consume function (kendi hook'umu oluşturarak useContext yerine kullandım)
export const useBlogContext = () => {
  return useContext(BlogContext);
};

export const BlogContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState();
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
  const values = {
    isLoading,
    setIsLoading,
    data,
    setData,
  };
  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export default BlogContext;
