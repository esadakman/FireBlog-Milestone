import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { toastWarn } from "./../../helpers/customToastify";
import { register } from "./../../helpers/firebase";

const SignUpForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  const navigate = useNavigate();

  // console.log(values.firstName);
  const handleSignUp = async (e) => {
    e.preventDefault();
    const displayName = `${values.firstName} ${values.lastName}`;
    if (
      values.email &&
      values.password &&
      values.firstName &&
      values.lastName
    ) {
      await register(values.email, values.password, displayName, navigate);
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
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name *"
            name="firstName"
            id="firstName"
            type="text"
            variant="outlined"
            fullWidth
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.firstName && errors.firstName}
            error={touched.firstName && Boolean(errors.firstName)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name *"
            name="lastName"
            id="lastName"
            type="text"
            fullWidth
            variant="outlined"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.lastName && errors.lastName}
            error={touched.lastName && Boolean(errors.lastName)}
          />
        </Grid>
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
