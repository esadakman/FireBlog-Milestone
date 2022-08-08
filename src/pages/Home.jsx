import BlogCard from "../components/BlogCard";
import loadingGif from "../assets/loading.svg";
import { useBlogContext } from "../contexts/BlogContext";
const Home = () => {
  const { isLoading } = useBlogContext();
  return (
    <div
      style={{
        display: "flex",
        minHeight: "90vh",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {isLoading ? <BlogCard /> : <img src={loadingGif} alt=""></img>}
    </div>
  );
};

export default Home;
