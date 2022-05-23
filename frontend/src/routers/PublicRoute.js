import { Navigate } from 'react-router-dom';

// Auths
import useAuth from '../auth/useAuth';

// Helpers
import routes from '../helpers/routes';

function PublicRoute({ children }) {
    const { isLogged } = useAuth();

    if (isLogged()) 
        return <Navigate to={ routes.panel.profile } replace />

    return children;
};
        
export default PublicRoute;