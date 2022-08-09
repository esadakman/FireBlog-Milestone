import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { toastWarn } from "../../../helpers/customToastify";
import { register } from "../../../helpers/firebase";

const SignUpForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  const navigate = useNavigate();

  // console.log(values.firstName);
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (values.email && values.password) {
      await register(values.email, values.password, navigate);
    } else {
      toastWarn("Please fill out all fields.");
    }
  };
  return (
    <>
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
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
    </>
  );
};

export default SignUpForm;
