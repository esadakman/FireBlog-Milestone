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
    // console.log("Signed Up ");
    return user;
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      console.log("The email address is already in use");
    } else if (
      error.code === "auth/invalid-email" ||
      error.code === "auth/missing-email"
    ) {
      console.log("The email address is not valid.");
    } else if (error.code === "auth/weak-password") {
      console.log("Password should be at least 6 characters");
    } else {
      console.log(error.message);
    }
  }
};

export const login = async (email, password, navigate) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged In");
    navigate("/");
    return user;
  } catch (error) {
    if (
      error.code === "auth/wrong-password" ||
      error.code === "auth/invalid-email"
    ) {
      console.log("Your email or password is incorrect. \nPlease Try Again");
    } else if (error.code === "auth/user-not-found") {
      console.log("User not found.");
    } else {
      console.log(error.message);
    }
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("Logged out !");
    return true;
  } catch (error) {
    // console.log(error.message);
  }
};

const provider = new GoogleAuthProvider();

export const GoogleRegister = (navigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Logged In");
      navigate("/");
      return user;
    })
    .catch((error) => {
      if (error.code === "auth/popup-closed-by-user") {
        console.log("Popup closed by user");
      } else {
        console.log(error.message);
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
        console.log("Please enter your mail adress!");
      } else {
        console.log(error.message);
      }
    });
};

export default app;
