import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/logo.png";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "./ComponentsStyles/Navbar.scss";
import { useAuthContext } from "../contexts/AuthContext";
import { logout } from "../helpers/firebase";
import { toastWarn } from "../helpers/customToastify";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const { userCheck } = useAuthContext();
  const navigate = useNavigate();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleProfile = () => {
    // if (userCheck) {
    //   navigate(`/profile/${userCheck.displayName}`, {
    //     state: userCheck.uid,
    //   });
    // } else {
    //   toastWarn("You Should Login to See Details");
    // }
    // navigate(`/profile/${userCheck.displayName}`);
    console.log(userCheck.uid);
  };
  return (
    // <header className="navbar">
    <AppBar
      position="static"
      color="info"
      // sx={{ justifyContent: "space-between" }}
    >
      <Container maxWidth="100vw">
        <Toolbar disableGutters>
          <Typography
            variant="link"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <img src={logo} alt="logo" width="35rem" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {userCheck ? (
                <div>
                  <MenuItem component={RouterLink} to="/">
                    Home
                  </MenuItem>
                  <MenuItem component={RouterLink} to="/newblog">
                    New Blog
                  </MenuItem>

                  <MenuItem
                    component={RouterLink}
                    to="/register"
                    onClick={logout}
                  >
                    Log Out
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem component={RouterLink} to="/">
                    Home
                  </MenuItem>
                  <MenuItem component={RouterLink} to="/login">
                    Login
                  </MenuItem>

                  <MenuItem
                    component={RouterLink}
                    to="/register"
                    // onClick={logOutCleaner}
                  >
                    Register
                  </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
          <Typography
            variant="link"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              justifyContent: "flex-end",
            }}
          >
            <img src={logo} alt="logo" width="35rem" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
            }}
          >
            {userCheck ? (
              <div sx={{ display: "flex" }}>
                <Button
                  className="mb-0 text-capitalize"
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "white",
                      pointerEvents: "none !important",
                    },
                  }}
                  variant="link"
                  component={RouterLink}
                  to="/profile"
                  // onClick={handleProfile}
                >
                  {userCheck.displayName}
                </Button>
                <Button
                  sx={{ color: "white" }}
                  variant="link"
                  component={RouterLink}
                  to="/"
                >
                  Home
                </Button>

                <Button
                  sx={{ color: "white" }}
                  variant="link"
                  component={RouterLink}
                  to="/newblog"
                >
                  New Blog
                </Button>

                <Button
                  sx={{ color: "white" }}
                  variant="link"
                  component={RouterLink}
                  to="/login"
                  onClick={logout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  sx={{ color: "white" }}
                  variant="link"
                  component={RouterLink}
                  to="/"
                >
                  Home
                </Button>

                <Button
                  sx={{ color: "white" }}
                  variant="link"
                  component={RouterLink}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ color: "white" }}
                  variant="link"
                  component={RouterLink}
                  to="/register"
                >
                  Register
                </Button>
              </div>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // </header>
  );
};
export default Navbar;

// <Typography
// textAlign="center"
// variant="link"
// component={RouterLink}
// // to="/"
// onClick={navigate(`/${page}`)}
//   ></Typography>;
