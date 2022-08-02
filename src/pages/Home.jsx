import { query } from "firebase/database";
import { collection, onSnapshot, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { db } from "../helpers/firebase";
// import { toastWarn } from "../helpers/customToastify";

const Home = () => {
  // toastWarn("Success !");

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);

      console.log(articles);
    });
  }, []);

  return (
    <div>
      <BlogCard articles={articles} />
    </div>
  );
};

export default Home;
