import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(20, "Must be at most 20 characters")
    .required("Please enter a first name"),

  lastName: Yup.string()
    .max(20, "Must be at most 20 characters")
    .required("Please enter a last name"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please fill out this field"),

  password: Yup.string()
    .min(6, "Password should be at least 6 characters")
    .max(16, "Password  should be maximum 16 characters")
    .required("Please fill out this field")
    .matches(/\d+/, "Password should contain numbers ")
    .matches(/[a-z]+/, "Password should contain letters "),
  // .matches(/[A-Z]+/, "Sifre buyuk harf icermelidir"),
});
