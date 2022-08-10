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
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
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
      toastError("This email address is already in use");
    } else if (
      error.code === "auth/invalid-email" ||
      error.code === "auth/missing-email"
    ) {
      toastWarn("This email address is not valid.");
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
    toastSuccess("Logged in ");
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
    toastSuccess("Logged out !");
    navigate("/login");
    return true;
  } catch (error) {
    toastError(error.message);
  }
};

const provider = new GoogleAuthProvider();

export const GoogleRegister = (navigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      toastSuccess("Logged in ");
      navigate("/");
      return user;
    })
    .catch((error) => {
      if (error.code === "auth/popup-closed-by-user") {
        console.log("Popup closed by user");
      } else if (error.code === "auth/cancelled-popup-request") {
        console.log("cancelled-popup-request");
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
      toastWarn("Please check your mail box!");
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
