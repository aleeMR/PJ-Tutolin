import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Helpers
import routes from './helpers/routes';
import useAuth from './auth/useAuth';

// Validación de Rutas
import PublicRoute from './routers/PublicRoute';
import PrivateRoute from './routers/PrivateRoute';

// Páginas Generales
import AccountPage from './pages/AccountPage';
import CoursePage from './pages/CoursePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ServicesPage from './pages/ServicesPage';
import TutorsPage from './pages/TutorsPage';

// Layouts del Cliente
import LayoutClient from './layouts/LayoutClient';

function AppRouter() {
  const { login } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('tl-user'));
    const token = localStorage.getItem('tl-token');

    if (user && token)
      login({ user, token }, location.state?.from);
  }, []);

  return (
    <LayoutClient>
      <Routes>
        <Route exact path={ routes.home } element={ <HomePage /> } />
        <Route exact path={ routes.login } element={ <PublicRoute><LoginPage /></PublicRoute> } />
        <Route exact path={ routes.register } element={ <PublicRoute><RegisterPage /></PublicRoute> } />

        <Route exact path={ routes.tutors } element={ <TutorsPage /> } />
        <Route exact path={ routes.tutor() } element="TutorPerfil" />
        
        <Route exact path={ routes.services } element={ <ServicesPage /> } />
        <Route exact path={ routes.service() } element="ServiceDetails" />

        <Route exact path={ routes.panel.profile } element={ <PrivateRoute><AccountPage /></PrivateRoute> } />
        <Route exact path={ routes.panel.courses } element={ <PrivateRoute><CoursePage /></PrivateRoute> } />
      
        <Route path="*" element="NotFoundPage" />
      </Routes>
    </LayoutClient>
  );
}

export default AppRouter;