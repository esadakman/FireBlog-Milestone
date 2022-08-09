import BlogCard from "../components/BlogCard";
import loadingGif from "../assets/loading.svg";
import { useBlogContext } from "../contexts/BlogContext";
import HomeStyle from "./pagesStyles/Home.module.scss";

const Home = () => {
  const { isLoading, data } = useBlogContext();

  return (
    <div
      style={{
        display: "flex",
        minHeight: "90vh",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div className={HomeStyle["searchContainer"]}></div>
      {isLoading ? (
        <BlogCard data={data} />
      ) : (
        <img src={loadingGif} alt=""></img>
      )}
    </div>
  );
};

export default Home;
