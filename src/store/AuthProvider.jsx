import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = createContext({
  user: {},
  isLoading: false,
  login() {},
  logout() {},
  register() {},
  feedback: {
    show: false,
    message: "",
    type: "",
  },
});

AuthContext.displayName = "Authentification";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    show: false,
    msg: '',
    type: '',
  })



  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("prisijungimas", user.email);
        setUser(user);
        setFeedback({
            show: true,
            msg: 'User logged in',
            type: 'success',
          });
      } else {
        console.log("Logout User");
        setUser(null);
      }
    });
  }, []);

  const authCtx = {
    user,
    isLoading,
    setIsLoading,
  };

  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
