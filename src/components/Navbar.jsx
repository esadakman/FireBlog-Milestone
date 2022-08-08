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
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  // maxWidth: "13rem",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    // width: "auto",
    maxWidth: "13rem",

    marginLeft: 0,
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "10rem",
    },
  },
}));

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { userCheck } = useAuthContext();
  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    e.preventDefault();
    await logout(navigate);
  };
  return (
    <AppBar position="static" color="info">
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
                  <MenuItem
                    onClick={() => {
                      navigate(`/profile/${userCheck.displayName}`);
                    }}
                  >
                    My Profile
                  </MenuItem>
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

                  <MenuItem component={RouterLink} to="/register">
                    Register
                  </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
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
              <div sx={{ display: "flex" }} className="links">
                <MenuItem
                  onClick={() => {
                    navigate(`/profile/${userCheck.displayName}`);
                  }}
                >
                  {userCheck.displayName}
                </MenuItem>
                <MenuItem
                  sx={{ color: "white" }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </MenuItem>

                <MenuItem
                  sx={{ color: "white" }}
                  onClick={() => {
                    navigate("/newblog");
                  }}
                >
                  New Blog
                </MenuItem>

                <MenuItem sx={{ color: "white" }} onClick={handleLogOut}>
                  Logout
                </MenuItem>
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
