// Importación de rutas
import routes from '../helpers/routes';

// Importación de componentes
import Button from './Button';
import Logo from "./Logo";
import Option from './Option';

const Navbar = () => {
    return (
        <header class="text-gray-600 body-font bg-gray-100">
            <div class="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
                <Logo style_span="text-xl" />
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
                    <Option link={routes.home} style_link="mr-5 text-gray-400 hover:text-gray-900" option="Inicio" />
                    <Option link={routes.tutors} style_link="mr-5 text-gray-400 hover:text-gray-900" option="Tutores" />
                    <Option link={routes.services} style_link="mr-5 text-gray-400 hover:text-gray-900" option="Servicios" />
                </nav>
                <Button link={routes.login} style_extra="mr-2 mt-4 md:mt-0" style_button="inline-flex items-center bg-gray-200 hover:bg-gray-300 px-3 py-2" option="Iniciar Sesión" />
                <Button link={routes.register} style_extra="mr-2 mt-4 md:mt-0" style_button="inline-flex items-center text-white bg-color-2 px-3 py-2" option="Regístrate" />
            </div>
        </header>
    );
};

export default Navbar;
