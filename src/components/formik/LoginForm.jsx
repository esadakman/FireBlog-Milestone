import { Button, Grid, Link } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { toastWarn } from "./../../helpers/customToastify";
import {
  forgotPassword,
  GoogleRegister,
  login,
} from "./../../helpers/firebase";
import GoogleIcon from "@mui/icons-material/Google";

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (values.email && values.password) {
      await login(values.email, values.password, navigate);
    } else {
      toastWarn("Please fill out all fields.");
    }
  };
  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <Grid
          container
          spacing={2}
          sx={{ width: "100%" /* minHeight: "18rem" */ }}
        >
          <Grid item xs={12}>
            <TextField
              label="Email *"
              name="email"
              id="email"
              type="email"
              variant="outlined"
              value={values.email}
              fullWidth
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.email && errors.email}
              error={touched.email && Boolean(errors.email)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password *"
              name="password"
              id="password"
              type="password"
              variant="outlined"
              fullWidth
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.password && errors.password}
              error={touched.password && Boolean(errors.password)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleLogin}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          fullWidth
          className="google"
          onClick={() => {
            GoogleRegister(navigate);
          }}
        >
          <GoogleIcon sx={{ width: "50px" }} />
          Sign in with Google
        </Button>
      </div>
      <Grid container justifyContent="flex-end">
        <Grid item xs>
          <Link
            href="#"
            variant="body2"
            onClick={() => forgotPassword(values.email)}
          >
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link to="/register" variant="body2" component={RouterLink}>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
