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
  // {homeData.length > 0 ? <BlogCard data={homeData} /> : <NotFound />}
  console.log(homeData);
  return (
    <div className={HomeStyle["container"]}>
      {isLoading ? (
        <BlogCard data={homeData} />
      ) : (
        // {homeData.length > 0 ? <BlogCard data={homeData} /> : <NotFound />}

        <img src={loadingGif} alt="loading Gif"></img>
      )}
    </div>
  );
};

export default Home;
