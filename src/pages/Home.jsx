import BlogCard from "../components/BlogCard";
import loadingGif from "../assets/loading.svg";
import { useBlogContext } from "../contexts/BlogContext";
import HomeStyle from "./pagesStyles/Home.module.scss";

const Home = () => {
  const { isLoading, data, search } = useBlogContext();
  let homeData = data;
  if (search) {
    homeData = data.filter((param) =>
      param.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  // console.log(search);
  return (
    <div className={HomeStyle["container"]}>
      {isLoading ? (
        <BlogCard data={homeData} />
      ) : (
        <img src={loadingGif} alt="loading Gif"></img>
      )}
    </div>
  );
};

export default Home;
