import {
  BrowserRouter,
  //   Navigate,
  //   Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
// import { AuthContext } from "../context/AuthContext";
// import Main from "../pages/Main";

const AppRouter = () => {
  //   const { currentUser } = useContext(AuthContext);
  //   function PrivateRouter() {
  //     return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
  //   }
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<Main />} /> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
