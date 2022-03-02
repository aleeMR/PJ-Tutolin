import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Rutas Generales
import HomePage from './pages/HomePage';

// Layouts del Cliente
import LayoutClient from './layouts/LayoutClient';

function AppRouter() {
  return (
    <Router>
      <LayoutClient>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/login" element="LoginPage"/>
          <Route exact path="/register" element="RegisterPage"/>

          <Route exact path="/tutors" element="TutorsPage"/>
          <Route exact path="/tutor/:tutorId" element="TutorPerfil"/>
          
          <Route exact path="/services" element="ServicesPage"/>
          <Route exact path="/services/:serviceId" element="ServiceDetails"/>

          <Route path="*" element="NotFoundPage"/>
        </Routes>
      </LayoutClient>
    </Router>
  );
}

export default AppRouter;