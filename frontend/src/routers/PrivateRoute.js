import { Navigate, Route, useLocation } from 'react-router-dom';

// Auths
import useAuth from '../auth/useAuth';

// Helpers
import routes from '../helpers/routes';

function PrivateRoute({ hasRole: role, ...rest }) {
    // Constante que guarda la ruta anterior visitada
    const location = useLocation();
    const { hasRole, isLogged } = useAuth();

    if (role && !hasRole(role)) 
        return <Navigate to={ routes.home } />

    if (!isLogged())
        return <Navigate to={ routes.login } state={{ from: location }} />

    return (
        <Route { ...rest } />
    );
};
        
export default PrivateRoute;