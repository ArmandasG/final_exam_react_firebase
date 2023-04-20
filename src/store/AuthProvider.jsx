import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    user: {},
    isLoading: false,
    login() {},
    logout() {},
    register() {},
    feedback: {
        show: false,
        msg: '',
        type: '',
    },
});

function AuthProvider({children}) {
const [user, setUser] = useState(null)
const [isLoading, setIsLoading] = useState(false)

const authCtx = {
    user,
    isLoading,
    setIsLoading,
};

return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
)
}

AuthContext.displayName = 'Authentification'

export default AuthProvider;

export function useAuthCtx() {
return useContext(AuthContext)
}