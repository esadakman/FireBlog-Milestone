import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";

const SignUpForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Full Name"
          name="fullName"
          id="fullName"
          type="text"
          variant="outlined"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.fullName && errors.fullName}
          error={touched.fullName && Boolean(errors.fullName)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email && errors.email}
          error={touched.email && Boolean(errors.email)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
        />
      </Grid>
    </Grid>
  );
};

export default SignUpForm;
