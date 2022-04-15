import { Routes, Route } from 'react-router-dom';

// Helpers
import roles from './helpers/roles';
import routes from './helpers/routes';

// Validación de Rutas
import PublicRoute from './routers/PublicRoute';
import PrivateRoute from './routers/PrivateRoute';

// Páginas Generales
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Layouts del Cliente
import LayoutClient from './layouts/LayoutClient';

function AppRouter() {
  return (
    <LayoutClient>
      <Routes>
        <Route exact path={routes.home} element={<HomePage />}/>
        <Route exact path={routes.login} element={<PublicRoute><LoginPage /></PublicRoute>}/>
        <Route exact path={routes.register} element={<PublicRoute><RegisterPage /></PublicRoute>}/>

        <Route exact path={routes.tutors} element="TutorsPage"/>
        <Route exact path={routes.tutor()} element="TutorPerfil"/>
        
        <Route exact path={routes.services} element="ServicesPage"/>
        <Route exact path={routes.service()} element="ServiceDetails"/>

        <Route hasRole={roles.tutor} exact path={routes.panel.profile} element={<PrivateRoute>"AccountPage"</PrivateRoute>}/>

        <Route path="*" element="NotFoundPage"/>
      </Routes>
    </LayoutClient>
  );
}

export default AppRouter;