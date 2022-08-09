import React from "react";
import BlogCard from "../components/BlogCard";
import { useAuthContext } from "../contexts/AuthContext";
import { useBlogContext } from "../contexts/BlogContext";

const Profile = () => {
  const { userCheck } = useAuthContext();
  const { data } = useBlogContext();

  let datas = data.filter((myBlog) => myBlog.author.id === userCheck.uid);
  // console.log(datas);
  return (
    <div>
      <BlogCard data={datas} />
    </div>
  );
};

export default Profile;
