import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Helpers
import roles from '../helpers/roles';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Función de iniciar sesión
    const login = (userCredentials, fromLocation) => {
        setUser({ 
            id: userCredentials.user._id, 
            name: userCredentials.user.name,
            surname: userCredentials.user.surname,
            email: userCredentials.user.email,
            token: userCredentials.token, 
            role: roles.student
        });
        // Si existe ruta anterior, redirecciona la página ahí
        if (fromLocation)
            navigate(fromLocation);
    };

    // Función de cerrar sesión
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
        <AuthContext.Provider value={ contextValue }>
            { children }
        </AuthContext.Provider>
    );
};
        
export default AuthProvider;