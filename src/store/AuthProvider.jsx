import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import PropTypes from 'prop-types';

const AuthContext = createContext({
  user: {},
  token:{},
  isLoggedIn: false,
  isLoading: false,
  feedback: {
    show: false,
    message: "",
    type: "",
  },
  ui: {},
});

AuthContext.displayName = "Authentification";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({
    show: false,
    msg: "",
    type: "",
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setFeedback({
          show: true,
          msg: "User logged in",
          type: "success",
        });
      } else if (!!user){

      }
      else {
        setUser(null);
      }
    });
  }, []);

  const {show, msg} = feedback
  useEffect(() => {
    if (show === true && msg !=='Loading') {
      setTimeout(() => {
        setFeedback({
          show: false,
          msg: '',
          type: '',
        })
      }, 2500)
    }
  }, [show, msg])

  const ui = {
    showSuccess(msg = '') {
      setFeedback({
        show: true,
        msg: msg || 'Success',
        type: 'success',
      })
    },
    showError(msg = '') {
      setFeedback({
        show: true,
        msg: msg || 'Klaida',
        type: 'error',
      })
    },
    showLoading(msg = '') {
      setFeedback({
        show: true,
        msg: msg || 'Loading...',
        type: 'info',
      })
    },
    closeAlert() {
      setFeedback({
        show: false,
        msg: '',
        type: '',
      })
    }
  }

  const isLoggedIn = !!user

  const authCtx = {
    user,
    isLoading,
    setIsLoading,
    isLoggedIn,
    feedback,
    ui
  };

  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;

export function useAuthCtx() {
  return useContext(AuthContext);
}
