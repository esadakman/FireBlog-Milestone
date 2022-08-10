import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import EditBlog from "../components/EditBlog";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";
import { useAuthContext } from "../contexts/AuthContext";
import BlogDetails from "../pages/BlogDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const AppRouter = () => {
  const { userCheck } = useAuthContext();

  function PrivateRouter() {
    return userCheck ? <Outlet /> : <Navigate to="/" replace />;
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
        <Route path="/profile" element={<PrivateRouter />}>
          <Route path="/profile:displayName" element={<Profile />} />
        </Route>
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
