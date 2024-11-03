import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utils/LocalStorage"

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState([])
    useEffect(() => {
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
    }, []);
    
    

  return (
    <div>
        <AuthContext.Provider value = {userData}>
        {children} 
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider