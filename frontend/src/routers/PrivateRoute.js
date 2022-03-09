import { Navigate, Route } from 'react-router-dom';

// Auths
import useAuth from '../auth/useAuth';

// Helpers
import routes from '../helpers/routes';

function PrivateRoute({hasRole: role, ...rest}) {
    const { hasRole, isLogged } = useAuth();

    if (role && !hasRole(role)) 
        return <Navigate to="/"/>

    if (!isLogged()) 
        return <Navigate to={routes.login}/>

    return (
        <Route {...rest}/>
    );
}
        
export default PrivateRoute;