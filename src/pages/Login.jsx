import React from "react";
import {
  Avatar,
  Box,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Formik } from "formik";
import { loginSchema } from "../components/formik/LoginSchema";
import LoginForm from "../components/formik/LoginForm";
const Login = () => {
  return (
    <Grid
      container
      component="main"
      sx={{ height: { xs: "84.2vh", sm: "83vh" } }}
    >
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        lg={8}
        // lg={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        lg={4}
        md={6}
        // lg={5}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              mt: 1,
              //  width: { md: "100%" }
              width: "100%",
            }}
          >
            {/* //! FORMİK============== */}
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              component={(props) => <LoginForm {...props} />}
            ></Formik>
            {/* //! FORMİK============== */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
