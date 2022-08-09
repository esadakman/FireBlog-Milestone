import BlogCard from "../components/BlogCard";
import loadingGif from "../assets/loading.svg";
import { useBlogContext } from "../contexts/BlogContext";
import HomeStyle from "./pagesStyles/Home.module.scss";

const Home = () => {
  const { isLoading, data } = useBlogContext();

  return (
    <div className={HomeStyle["container"]}>
      <div className={HomeStyle["searchContainer"]}>
        <form className={HomeStyle["formContainer"]}>
          <input type="text" placeholder="Search for a post ..." />
          <button>Search</button>
        </form>
      </div>
      {isLoading ? (
        <BlogCard data={data} />
      ) : (
        <img src={loadingGif} /* style={{ width: "5rem" }}  */ alt=""></img>
      )}
    </div>
  );
};

export default Home;
