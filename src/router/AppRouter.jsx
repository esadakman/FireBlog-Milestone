import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import BlogDetails from "../components/BlogDetails";
import EditBlog from "../components/EditBlog";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAuthContext } from "../contexts/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Register from "../pages/Register";
// import Main from "../pages/Main";

const AppRouter = () => {
  const { userCheck } = useAuthContext();

  function PrivateRouter() {
    return userCheck ? <Outlet /> : <Navigate to="/login" replace />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<PrivateRouter />}>
          <Route path="/details:title" element={<BlogDetails />} />
        </Route>
        <Route path="/edit" element={<EditBlog />} />
        <Route path="/newblog" element={<NewBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
