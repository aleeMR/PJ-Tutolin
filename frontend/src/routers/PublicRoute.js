import { Navigate, Route } from 'react-router-dom';
import useAuth from '../auth/useAuth';

function PublicRoute(props) {
    const { isLogged } = useAuth();

    if (isLogged()) return <Navigate to="/tutors"/>

    return (
        <Route {...props}/>
    );
}
        
export default PublicRoute;