import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Box,
  CssBaseline,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Formik } from "formik";
import { signUpSchema } from "../components/formik/signUpSchema";
import SignUpForm from "../components/formik/SignUpForm";
const Register = () => {
  return (
    <Grid
      container
      component="main"
      sx={{ minHeight: { xs: "84.2vh", sm: "83vh" } }}
    >
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
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
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            // my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              // marginTop: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: { xs: "83.2vh", sm: "82vh" },
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              sx={{
                mt: 2,
                width: "100%",
              }}
            >
              {/* //! FORMİK============== */}
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                }}
                validationSchema={signUpSchema}
                component={(props) => <SignUpForm {...props} />}
              ></Formik>
              {/* //! FORMİK============== */}

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/login" variant="body2" component={RouterLink}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
