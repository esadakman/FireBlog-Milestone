import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
// import {
//   toastErrorNotify,
//   toastSuccessNotify,
//   toastWarnNotify,
// } from "../helpers/ToastNotify";

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

const auth = getAuth(app);

export default app;

// ! Register
export const register = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    // toastSuccessNotify('Registered successfully!');
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    // toastErrorNotify(err.message);
  }
};

//! Login
export const login = async (email, password, navigate) => {
  //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    // toastSuccessNotify('Logged in successfully!');
    // sessionStorage.setItem('user', JSON.stringify(userCredential.user));
    console.log(userCredential);
  } catch (err) {
    // toastErrorNotify(err.message);
    console.log(err);
  }
};

//? User Observer
export const userObserver = (setUserCheck) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserCheck(user);
    } else {
      // User is signed out
      setUserCheck(false);
    }
  });
};

export const logout = () => {
  signOut(auth);
};

// ! Google Register
export const GoogleRegister = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      // toastSuccessNotify('Logged out successfully!');
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};

export const forgotPassword = (email) => {
  //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // toastWarnNotify("Please check your mail box!");
      // alert("Please check your mail box!");
    })
    .catch((err) => {
      // toastErrorNotify(err.message);
      // alert(err.message);
      // ..
    });
};
