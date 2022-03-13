// Importación de rutas
import routes from '../helpers/routes';
import Button from './Button';
import NavbarOption from './NavbarOption';


const Navbar = () => {
return (
    <header class="text-gray-600 body-font bg-gray-100">
        <div class="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img class="w-10" src={require("../assets/img/logo_icono.png")} alt="logo"/>
                <span class="ml-3 text-xl">
                    TUTOLIN
                </span>
            </a>
            <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
                <NavbarOption link={routes.home} option="Inicio"/>
                <NavbarOption link={routes.tutors} option="Tutores"/>
                <NavbarOption link={routes.services} option="Servicios"/>
            </nav>
            <Button link={routes.login} style="bg-gray-200 hover:bg-gray-300 px-3 py-2 mr-2" option="Iniciar Sesión"/>
            <Button link={routes.register} style="text-white bg-color-2 px-3 py-2" option="Regístrate"/>
        </div>
    </header>
)}

export default Navbar;
