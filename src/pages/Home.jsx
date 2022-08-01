import React from "react";
import BlogCard from "../components/BlogCard";
import toast from "react-hot-toast";

const Home = () => {
  toast.success("Successfully toasted!");
  return (
    <div>
      <BlogCard />
    </div>
  );
};

export default Home;
