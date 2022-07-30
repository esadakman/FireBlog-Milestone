import {
  BrowserRouter,
  //   Navigate,
  //   Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import { AuthContext } from "../context/AuthContext";
// import Main from "../pages/Main";

const AppRouter = () => {
  //   const { currentUser } = useContext(AuthContext);
  //   function PrivateRouter() {
  //     return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
  //   }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
