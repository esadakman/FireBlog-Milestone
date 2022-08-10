import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please fill out email field"),

  password: Yup.string().required("Please fill out password field"),
  // .min(8, "Password should be at least 8 characters"),
});
