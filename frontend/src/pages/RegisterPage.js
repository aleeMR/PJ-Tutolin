import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Importación de rutas
import routes from '../helpers/routes';
import useAuth from '../auth/useAuth';

// Importación de componentes
import Button from '../components/Button';
import InputText from '../components/InputText';
import Option from '../components/Option';

const RegisterPage = () => {
    const { login } = useAuth();
    const location = useLocation();
    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        password_repeat: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if(Object.keys(errors).length === 0 && submitted) {
            register();
        }
    }, [errors]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value 
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setSubmitted(true);
    };

    const validate = (values) => {
        let errors = {};

        // Validación del nombre
        if(!values.name.trim())
            errors.name = 'Este campo es necesario';
        // Validación del apellido
        if(!values.surname.trim())
            errors.surname = 'Este campo es necesario';
        // Validación del correo
        if(!values.email.trim())
            errors.email = 'Este campo es necesario';
        else if(!/^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}$/.test(values.email))
            errors.email = 'Debe ingresar un correo válido';
        // Validación de la contraseña
        if(!values.password)
            errors.password = 'Este campo es necesario';
        else if(!/^[\w@|"#$%&/='*¿?¡!(){},.:;+^~_-]{6,}$/.test(values.password))
            errors.password = 'La contraseña debe tener 6 caracteres como mínimo';
        // Validación de la contraseña repetida
        if(!values.password_repeat)
            errors.password_repeat = 'Este campo es necesario';
        else if(values.password_repeat !== values.password)
            errors.password_repeat = 'La contraseña no coincide';

        return errors;
    };

    const register = () => {
        axios.post(`${ process.env.REACT_APP_SERVER }/api/auth/signup`, values)
            .then(res => {
                const data = res.data;
                const user = data.userSaved;
                const token = data.token;
                localStorage.setItem('tl-user', JSON.stringify(user));
                localStorage.setItem('tl-token', token);
                login({ user, token }, location.state?.from);
            }).catch(err => console.error(err));
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <form onSubmit={ handleSubmit } className="lg:w-3/6 md:w-1/2 bg-gray-100 rounded-lg px-11 py-8 mx-auto md:ml-auto w-full mt-10 md:mt-0">
                    <div className="grid grid-cols-2 gap-6 mb-10">
                        <h2 className="col-span-2 text-gray-900 text-2xl font-medium title-font text-center mb-6">
                            CREAR CUENTA
                        </h2>
                        <InputText id="name" type="text" style_extra="col-span-2 sm:col-span-1" label="Nombres" value={ values.name } onChange={ handleChange } errorMsg={ errors.name } />
                        <InputText id="surname" type="text" style_extra="col-span-2 sm:col-span-1" label="Apellidos" value={ values.surname } onChange={ handleChange } errorMsg={ errors.surname } />
                        <InputText id="email" type="email" style_extra="col-span-2" label="Correo electrónico" value={ values.email } onChange={ handleChange } errorMsg={ errors.email } />
                        <InputText id="password" type="password" style_extra="col-span-2 sm:col-span-1" label="Contraseña" value={ values.password } onChange={ handleChange } errorMsg={ errors.password } />
                        <InputText id="password_repeat" type="password" style_extra="col-span-2 sm:col-span-1" label="Confirmar contraseña" value={ values.password_repeat } onChange={ handleChange } errorMsg={ errors.password_repeat } />
                    </div>
                    <Button style_extra="text-gray-400 hover:text-gray-900" type="submit" style_button="w-full px-8 py-2 text-white text-lg bg-color-2" option="Registrar" />
                    <p className="mb-8 max-w-sm mx-auto text-sm text-gray-500 text-center border-t border-gray-300 pt-6">
                        Al registrarte indicas que has leído y estás de acuerdo con la política de privacidad y los términos y condiciones.
                    </p>
                    <p className="text-sm text-gray-500 text-center border-t border-gray-300 pt-6">
                        ¿Ya tienes una cuenta?
                        <Option link={ routes.login } style_link="ml-1 text-cyan-600 hover:text-cyan-800 font-semibold" option="Inicia Sesión" />
                    </p>
                </form>
            </div>
        </section>
    );
};
        
export default RegisterPage;