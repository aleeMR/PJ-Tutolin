import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
            token: userCredentials.token
        });
        // Si existe ruta anterior, redirecciona la página ahí
        if (fromLocation)
            navigate(fromLocation);
    };

    // Función de cerrar sesión
    const logout = () => setUser(null);

    const isLogged = () => !!user;
    
    const contextValue = {
        user,
        login,
        logout,
        isLogged
    };

    return (
        <AuthContext.Provider value={ contextValue }>
            { children }
        </AuthContext.Provider>
    );
};
        
export default AuthProvider;