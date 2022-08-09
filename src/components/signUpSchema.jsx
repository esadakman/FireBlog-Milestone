import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(20, "fullname 20 veya daha az karakter olmalıdır")
    .required("Please fill out this field"),

  lastName: Yup.string()
    .max(20, "fullname 20 veya daha az karakter olmalıdır")
    .required("Please fill out this field"),

  email: Yup.string()
    .email("Lutfen gecerli email adresini giriniz.")
    .required("Please fill out this field"),

  password: Yup.string()
    .min(8, "Sifre en az 8 karakter icermelidir")
    .max(16, "Sifre en fazla 16 karakter icermelidir.")
    .required("Please fill out this field")
    .matches(/\d+/, "Sifre rakam icermelidir")
    .matches(/[a-z]+/, "Sifre kucuk harf icermelidir")
    .matches(/[A-Z]+/, "Sifre buyuk harf icermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Sifreniz ozel karakter icermelidir"),
});
