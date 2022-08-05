// import { query } from "firebase/database";
// import { collection, onSnapshot, orderBy } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
import { getDatabase, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { ref } from "firebase/database";
import BlogCard from "../components/BlogCard";
import { useAuthContext } from "../contexts/AuthContext";
import app, { db } from "../helpers/firebase";
// import { db } from "../helpers/firebase";
// import { toastWarn } from "../helpers/customToastify";

const Home = () => {
  // toastWarn("Success !");
  const { setData, data } = useAuthContext();

  // Bilgi Çağırma

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setData([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((item) =>
          setData((oldArray) => [...oldArray, item])
        );
      }
    });
  }, [setData]);

  // console.log(data);

  return (
    <div>
      <BlogCard />
    </div>
  );
};

export default Home;
