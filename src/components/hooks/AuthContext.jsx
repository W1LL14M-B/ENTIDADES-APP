import { createContext, useState, useEffect} from 'react';
import jwtDecode from 'jwt-decode';







export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const login = (token) => {
        localStorage.setItem(token);
        setUser(jwtDecode(token))
    };
    
    const logout = () => {
        localStorage.removeItem("token")
        setUser(null);
    };
    
 useEffect (() => {
    const token = localStorage.getItem("token");
    if(token) setUser(jwtDecode(token))
 }, [] )

return (
    <AuthContext.Provider value = {{user, login, logout}}>

{ children}
    </AuthContext.Provider>
)




}