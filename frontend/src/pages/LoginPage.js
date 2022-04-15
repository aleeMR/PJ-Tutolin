import { useLocation } from 'react-router-dom';

// Importación de rutas
import routes from '../helpers/routes';
import useAuth from '../auth/useAuth';

// Importación de componentes
import Button from '../components/Button';
import InputText from '../components/InputText';
import Option from '../components/Option';

const userCredentials = {};

const LoginPage = () => {
    const location = useLocation();
    const { login } = useAuth();

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto shadow md:ml-auto w-full mt-10 md:mt-0">
                    <h2 class="text-gray-900 text-2xl font-medium title-font text-center mb-6">
                        BIENVENIDO
                    </h2>
                    <InputText id="email" type="email" style_extra="mb-4" label="Correo electrónico" />
                    <InputText id="password" type="password" style_extra="mb-1" label="Contraseña" />
                    <Option link={routes.register} style_link="text-xs text-right text-gray-400 hover:text-gray-900" option="¿Olvidaste tu contraseña?" />
                    <Button link={routes.login} style_extra="mt-7 mb-10 text-gray-400 hover:text-gray-900" style_button="w-full px-8 py-2 text-white text-lg bg-color-2" option="Ingresar" oClick={ () => login(userCredentials, location.state?.from) } />
                    <p class="text-sm text-gray-500 text-center border-t border-gray-300 pt-6">
                        ¿No tienes una cuenta?
                        <Option link={routes.register} style_link="ml-1 text-cyan-600 hover:text-cyan-800 font-semibold" option="Regístrate" />
                    </p>
                </div>
            </div>
        </section>
    );
};
        
export default LoginPage;