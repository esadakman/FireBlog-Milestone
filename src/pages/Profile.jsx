import React from "react";
import BlogCard from "../components/BlogCard";
import NotFound from "../components/NotFound";
import { useAuthContext } from "../contexts/AuthContext";
import { useBlogContext } from "../contexts/BlogContext";
import loadingGif from "../assets/loading.svg";

const Profile = () => {
  const { userCheck } = useAuthContext();
  const { data, search, isLoading } = useBlogContext();

  let datas = data.filter((myBlog) => myBlog.author.id === userCheck.uid);
  if (search && userCheck) {
    datas = datas.filter((param) =>
      param.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div style={{ minHeight: "83vh" }}>
      {isLoading ? (
        <>{datas?.length > 0 ? <BlogCard data={datas} /> : <NotFound />}</>
      ) : (
        <img src={loadingGif} alt="Loading Gif" />
      )}
    </div>
  );
};

export default Profile;
