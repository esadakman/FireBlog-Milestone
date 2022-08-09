import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { toastError, toastSuccess, toastWarn } from "./customToastify";

//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
  apiKey: "AIzaSyCoq2qmigC3rhWN4pdPnMVGz0NlpjNjRow",
  authDomain: "fireblog-26.firebaseapp.com",
  databaseURL: "https://fireblog-26-default-rtdb.firebaseio.com",
  projectId: "fireblog-26",
  storageBucket: "fireblog-26.appspot.com",
  messagingSenderId: "648901323570",
  appId: "1:648901323570:web:86fbde4a50f981cd6c452b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const register = async (email, password, displayName, navigate) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, { displayName: displayName });
    navigate("/");
    console.log(displayName);
    toastSuccess("Signed Up ");
    return user;
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      toastError("The email address is already in use");
    } else if (
      error.code === "auth/invalid-email" ||
      error.code === "auth/missing-email"
    ) {
      toastWarn("The email address is not valid.");
    } else if (error.code === "auth/weak-password") {
      toastWarn("Password should be at least 6 characters");
    } else {
      toastError(error.message);
    }
  }
};

export const login = async (email, password, navigate) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    toastSuccess("Logged In");
    navigate("/");
    return user;
  } catch (error) {
    if (
      error.code === "auth/wrong-password" ||
      error.code === "auth/invalid-email"
    ) {
      toastWarn("Your email or password is incorrect. \nPlease Try Again");
    } else if (error.code === "auth/user-not-found") {
      toastWarn("User not found.");
    } else {
      toastError(error.message);
    }
  }
};

export const logout = async (navigate) => {
  try {
    await signOut(auth);
    toastWarn("Logged out !");
    navigate("/login");
    return true;
  } catch (error) {
    toastError(error.message);
    toastSuccess("asddd");
  }
};

const provider = new GoogleAuthProvider();

export const GoogleRegister = (navigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      toastSuccess("Logged In");
      navigate("/");
      return user;
    })
    .catch((error) => {
      if (error.code === "auth/popup-closed-by-user") {
        console.log("Popup closed by user");
      } else {
        toastError(error.message);
      }
    });
};

export const forgotPassword = (email) => {
  //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      console.log("Please check your mail box!");
      // alert("Please check your mail box!");
    })
    .catch((error) => {
      if (error.code === "auth/missing-email") {
        toastWarn("Please enter your mail adress!");
      } else {
        toastError(error.message);
      }
    });
};

export default app;
