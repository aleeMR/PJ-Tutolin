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

const LoginPage = () => {
    const { login } = useAuth();
    const location = useLocation();
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if(Object.keys(errors).length === 0 && submitted) {
            logIn();
            setSubmitted(false);
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

        // Validación del correo
        if(!values.email.trim())
            errors.email = 'Este campo es necesario';
        else if(!/^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}$/.test(values.email))
            errors.email = 'Debe ingresar un correo válido';
        // Validación de la contraseña
        if(!values.password)
            errors.password = 'Este campo es necesario';

        return errors;
    };

    const logIn = () => {
        axios.post(`${ process.env.REACT_APP_SERVER }/api/auth/signin`, values)
            .then(res => {
                const data = res.data;
                const user = data.user;
                const token = data.token;
                localStorage.setItem('tl-user', JSON.stringify(user));
                localStorage.setItem('tl-token', token);
                login({ user, token }, location.state?.from);
            }).catch(err => console.error(err));
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <form onSubmit={ handleSubmit } className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto shadow md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-2xl font-medium title-font text-center mb-6">
                        BIENVENIDO
                    </h2>
                    <InputText id="email" type="email" style_extra="mb-4" label="Correo electrónico" value={ values.email } onChange={ handleChange } errorMsg={ errors.email } />
                    <InputText id="password" type="password" style_extra="mb-1" label="Contraseña" value={ values.password } onChange={ handleChange } errorMsg={ errors.password } />
                    <Option link={ routes.register } style_link="text-xs text-right text-gray-400 hover:text-gray-900" option="¿Olvidaste tu contraseña?" />
                    <Button style_extra="mt-7 mb-10 text-gray-400 hover:text-gray-900" type="submit" style_button="w-full px-8 py-2 text-white text-lg bg-color-2" option="Ingresar" />
                    <p className="text-sm text-gray-500 text-center border-t border-gray-300 pt-6">
                        ¿No tienes una cuenta?
                        <Option link={ routes.register } style_link="ml-1 text-cyan-600 hover:text-cyan-800 font-semibold" option="Regístrate" />
                    </p>
                </form>
            </div>
        </section>
    );
};
        
export default LoginPage;