import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Helpers
import roles from './helpers/roles';
import routes from './helpers/routes';

import PublicRoute from './routers/PublicRoute';
import PrivateRoute from './routers/PrivateRoute';

// Rutas Generales
import HomePage from './pages/HomePage';

// Layouts del Cliente
import LayoutClient from './layouts/LayoutClient';

function AppRouter() {
  return (
    <Router>
      <LayoutClient>
        <Routes>
          <Route exact path={routes.home} element={<HomePage/>}/>
          <Route exact path={routes.login} element={<PublicRoute>"LoginPage"</PublicRoute>}/>
          <Route exact path={routes.register} element={<PublicRoute>"RegisterPage"</PublicRoute>}/>

          <Route exact path={routes.tutors} element="TutorsPage"/>
          <Route exact path={routes.tutor()} element="TutorPerfil"/>
          
          <Route exact path={routes.services} element="ServicesPage"/>
          <Route exact path={routes.service()} element="ServiceDetails"/>

          <Route hasRole={roles.tutor} exact path={routes.panel.profile} element={<PrivateRoute>"AccountPage"</PrivateRoute>}/>

          <Route path="*" element="NotFoundPage"/>
        </Routes>
      </LayoutClient>
    </Router>
  );
}

export default AppRouter;