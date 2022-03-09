// Importación de rutas
import routes from '../helpers/routes';
import NavbarOption from './NavbarOption';

const Navbar = () => {
return (
    <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img class="w-10" src={require("../assets/img/logo_icono.png")} alt="tutolin"/>
                <span class="ml-3 text-xl">
                    TUTOLIN
                </span>
            </a>
            <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                <NavbarOption link={routes.home} option="Inicio"/>
                <NavbarOption link={routes.tutors} option="Tutores"/>
                <NavbarOption link={routes.services} option="Servicios"/>
            </nav>
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Iniciar Sesión
            </button>
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Regístrate
            </button>
        </div>
    </header>
)}

export default Navbar;
