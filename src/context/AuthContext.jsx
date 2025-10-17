import { createContext, useEffect, useState } from "react";
import { verifyToken } from "../services/auth-service";

export const AuthContext = createContext(null);

export default function AuthProvider({ children, value }) {

  const [token, setToken] = useState(localStorage.getItem("token") || sessionStorage.getItem("token"));

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")))
  const [isLoading, setIsLoading] = useState(true)

  useEffect (() => {
    const checkToken = async () => {
      try {
        setIsLoading(true)
      const response = await verifyToken()
      if (response.success){
        setIsLoading(false)
        setIsAuthenticated(true)
        setUserInfo(response.data.decoded)
        localStorage.setItem("userInfo", JSON.stringify(response.data.decoded))
      }
    } catch (error) {
      setIsLoading(false)
    }
    }
    checkToken ()
  }, [token])

  function clearToken() {
    setToken(null);
    setUserInfo(null)
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    sessionStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ token, setToken, clearToken, isAuthenticated, userInfo, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
