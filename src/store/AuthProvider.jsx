import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";

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
  const location = useLocation()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && location.pathname==='/shops') {
        setUser(user);
        setFeedback({
          show: true,
          msg: "User logged in",
          type: "success",
        });
      } else if (user && (location.pathname==='/login' || location.pathname==='/register')){
        setUser(user)
        setFeedback({
          show: true,
          msg: 'You are already logged in',
          type: 'info',   
        });
      }
      else if (!user && location.pathname==='/shops'){
        setUser(user)
        setFeedback({
          show: true,
          msg: 'Unauthorized access',
          type: 'error',   
        });
      }
      else {
        setUser(null);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
