import { Navigate, Route, useLocation } from 'react-router-dom';

// Auths
import useAuth from '../auth/useAuth';

// Helpers
import routes from '../helpers/routes';

function PrivateRoute({ hasRole: role, children }) {
    // Constante que guarda la ruta anterior visitada
    const location = useLocation();
    const { isLogged } = useAuth();

    if (!isLogged())
        return <Navigate to={ routes.login } state={{ from: location }} />

    return children;
};
        
export default PrivateRoute;