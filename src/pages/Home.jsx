import BlogCard from "../components/BlogCard";
import loadingGif from "../assets/loading.svg";
import { useBlogContext } from "../contexts/BlogContext";
import HomeStyle from "./pagesStyles/Home.module.scss";
import NotFound from "../components/NotFound";

const Home = () => {
  const { isLoading, data, search } = useBlogContext();
  let homeData = data;
  if (search) {
    homeData = data.filter((param) =>
      param.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <div className={HomeStyle["container"]}>
      {isLoading ? (
        <>
          {homeData?.length > 0 ? <BlogCard data={homeData} /> : <NotFound />}
        </>
      ) : (
        <img src={loadingGif} alt="Loading Gif" />
      )}
    </div>
  );
};

export default Home;
