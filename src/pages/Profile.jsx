import React from "react";
import BlogCard from "../components/BlogCard";
import NotFound from "../components/NotFound";
import { useAuthContext } from "../contexts/AuthContext";
import { useBlogContext } from "../contexts/BlogContext";

const Profile = () => {
  const { userCheck } = useAuthContext();
  const { data, search } = useBlogContext();

  let datas = data.filter((myBlog) => myBlog.author.id === userCheck.uid);
  if (search && userCheck) {
    datas = datas.filter((param) =>
      param.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div>{datas.length > 0 ? <BlogCard data={datas} /> : <NotFound />}</div>
  );
};

export default Profile;
