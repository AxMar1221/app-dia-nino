import { createContext, useContext, useState } from "react"
import { app } from "../../Firebase/Firebase";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user] = useState(auth);
    const [isLoggedIn, setIsLoggedIn] = useState(user !== null);
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);