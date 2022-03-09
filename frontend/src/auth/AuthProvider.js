import { createContext } from "react";
import { useState } from "react";

// Helpers
import roles from '../helpers/roles';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = () => setUser({id: 1, role: roles.client});
    const logout = () => setUser(null);

    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;

    const contextValue = {
        user,
        login,
        logout,
        isLogged,
        hasRole
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}
        
export default AuthProvider;