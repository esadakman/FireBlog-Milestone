import React from "react";
import BlogCard from "../components/BlogCard";
import NotFound from "../components/NotFound";
import { useAuthContext } from "../contexts/AuthContext";
import { useBlogContext } from "../contexts/BlogContext";
import loadingGif from "../assets/loading.svg";
import { Box } from "@mui/material";

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
    <Box sx={{ minHeight: { xs: "84.2vh", sm: "83vh" } }}>
      {isLoading ? (
        <>{datas?.length > 0 ? <BlogCard data={datas} /> : <NotFound />}</>
      ) : (
        <img src={loadingGif} alt="Loading Gif" />
      )}
    </Box>
  );
};

export default Profile;
