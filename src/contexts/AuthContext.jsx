import { createContext, useContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";
const AuthContext = createContext({});

// ? consume function (kendi hook'umu oluşturarak useContext yerine kullandım)
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [userCheck, setUserCheck] = useState("");
  // ? Kullanıcının durumunu takip etmek için fonksiyonumu buraya yazdım ve ihtiyaç durumunda useContext sayesinde çağırdım
  useEffect(() => {
    // setCurrentUser(JSON.parse(sessionStorage.getItem('user')));
    userObserver(setUserCheck);
  }, []);
  const values = {
    userCheck,
    setUserCheck,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
