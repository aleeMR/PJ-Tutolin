// Importación de rutas
import routes from '../helpers/routes';

// Importación de componentes
import Button from '../components/Button';
import InputText from '../components/InputText';
import Option from '../components/Option';

const RegisterPage = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div class="lg:w-3/6 md:w-1/2 bg-gray-100 rounded-lg px-11 py-8 mx-auto md:ml-auto w-full mt-10 md:mt-0">
                    <div class="grid grid-cols-2 gap-6 mb-10">
                        <h2 class="col-span-2 text-gray-900 text-2xl font-medium title-font text-center mb-6">
                            CREAR CUENTA
                        </h2>
                        <InputText id="names" type="text" style_extra="col-span-2 sm:col-span-1" label="Nombres" />
                        <InputText id="full-names" type="text" style_extra="col-span-2 sm:col-span-1" label="Apellidos" />
                        <InputText id="email" type="email" style_extra="col-span-2" label="Correo electrónico" />
                        <InputText id="password" type="password" style_extra="col-span-2 sm:col-span-1" label="Contraseña" />
                        <InputText id="password-repeat" type="password" style_extra="col-span-2 sm:col-span-1" label="Confirmar contraseña" />
                    </div>
                    <Button link={routes.login} style_extra="text-gray-400 hover:text-gray-900" style_button="w-full px-8 py-2 text-white text-lg bg-color-2" option="Registrar" />
                    <p class="mb-8 max-w-sm mx-auto text-sm text-gray-500 text-center border-t border-gray-300 pt-6">
                        Al registrarte indicas que has leído y estás de acuerdo con la política de privacidad y los términos y condiciones.
                    </p>
                    <p class="text-sm text-gray-500 text-center border-t border-gray-300 pt-6">
                        ¿Ya tienes una cuenta?
                        <Option link={routes.login} style_link="ml-1 text-cyan-600 hover:text-cyan-800 font-semibold" option="Inicia Sesión" />
                    </p>
                </div>
            </div>
        </section>
    );
};
        
export default RegisterPage;