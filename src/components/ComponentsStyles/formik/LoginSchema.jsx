import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please fill out this field"),

  password: Yup.string()
    .min(8, "Password should be at least 8 characters")
    .max(16, "Password  should be maximum 16 characters")
    .required("Please fill out this field")
    .matches(/\d+/, "Password should contain numbers ")
    .matches(/[a-z]+/, "Password should contain letters "),
  // .matches(/[A-Z]+/, "Sifre buyuk harf icermelidir"),
});
