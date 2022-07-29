// import { initializeApp } from "firebase/app";
// import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  //   createUserWithEmailAndPassword,
  //   signInWithEmailAndPassword,
  //   signOut,
  //   updateProfile,
  //   signInWithPopup,
  //   sendPasswordResetEmail,
} from "firebase/auth";
// import { toastError, toastSuccess, toastWarn } from "../helpers/ToastNotify";

const firebaseConfig = {
  apiKey: "AIzaSyA04MIKTIm39ifgn6fPkTIerrsBaU_Cv18",
  authDomain: "fireblog-e69a1.firebaseapp.com",
  projectId: "fireblog-e69a1",
  storageBucket: "fireblog-e69a1.appspot.com",
  messagingSenderId: "494740012141",
  appId: "1:494740012141:web:5986e8f9b157249f269364",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// !

export const db = getFirestore(app);
// !
export const auth = getAuth(app);

// export const register = async (email, password, displayName, navigate) => {
//   try {
//     const { user } = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     await updateProfile(auth.currentUser, { displayName: displayName });
//     navigate("/");
//     console.log(displayName);
//     toastSuccess("Signed Up ");
//     return user;
//   } catch (error) {
//     if (error.code === "auth/email-already-in-use") {
//       toastError("The email address is already in use");
//     } else if (
//       error.code === "auth/invalid-email" ||
//       error.code === "auth/missing-email"
//     ) {
//       toastError("The email address is not valid.");
//     } else if (error.code === "auth/weak-password") {
//       toastWarn("Password should be at least 6 characters");
//     } else {
//       toastError(error.message);
//     }
//   }
// };

// export const login = async (email, password, navigate) => {
//   try {
//     const user = await signInWithEmailAndPassword(auth, email, password);
//     toastSuccess("Logged In");
//     navigate("/");
//     return user;
//   } catch (error) {
//     if (
//       error.code === "auth/wrong-password" ||
//       error.code === "auth/invalid-email"
//     ) {
//       toastError("Your email or password is incorrect. \nPlease Try Again");
//     } else if (error.code === "auth/user-not-found") {
//       toastWarn("User not found.");
//     } else {
//       toastError(error.message);
//     }
//   }
// };

// export const logout = async () => {
//   try {
//     await signOut(auth);
//     toastSuccess("Logged out !");
//     return true;
//   } catch (error) {
//     toastWarn(error.message);
//   }
// };

// ! Provider
const provider = new GoogleAuthProvider();

// export const GoogleRegister = (navigate) => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const user = result.user;
//       toastSuccess("Logged In");
//       navigate("/");
//       return user;
//     })
//     .catch((error) => {
//       if (error.code === "auth/popup-closed-by-user") {
//         console.log("Popup closed by user");
//       } else {
//         toastError(error.message);
//       }
//     });
// };

// export const forgotPassword = (email) => {
//   //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
//   sendPasswordResetEmail(auth, email)
//     .then(() => {
//       // Password reset email sent!
//       toastWarn("Please check your mail box!");
//       // alert("Please check your mail box!");
//     })
//     .catch((error) => {
//       if (error.code === "auth/missing-email") {
//         toastWarn("Please enter your mail adress!");
//       } else {
//         toastError(error.message);
//       }
//     });
// };

// export default app;
