import { useState } from 'react';
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
    const [body, setBody] = useState({ 
        email: '', 
        password: '' 
    });

    const inputs = [
        {
            id: "email",
            type: "email",
            label: "Correo electrónico",
            errorMsg: "Debe ingresar un correo electrónico válido",
            required: true,
            style_extra: "mb-4"
        },
        {
            id: "password",
            type: "password",
            label: "Contraseña",
            errorMsg: "Debe ingresar este campo",
            required: true,
            style_extra: "mb-1"
        }
    ];

    const inputChange = ({ target }) => {
        const { name, value } = target;
        setBody({
            ...body,
            [name]: value
        });
    };

    const validate = (values) => {
        if (!values.email) {
            inputs[0].errorMsg = "Debe ingresar este campo";
            inputs[0].focused = "true";
        }
        console.log(inputs[0].errorMsg+"-"+inputs[0].focused)
    };

    const userCredentials = body;
    const onSubmit = () => {
        validate(body);
        fetch(`${ process.env.REACT_APP_SERVER }/api/auth/signin`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(async (res) => {
                if (res.ok)
                    login(userCredentials, location.state?.from);
                console.log(await res.json())
            })
            .catch(err => console.error(err));
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto shadow md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-2xl font-medium title-font text-center mb-6">
                        BIENVENIDO
                    </h2>
                    { inputs.map((input) => (
                        <InputText key={ input.id } { ...input } value={ body[input.name] } onChange={ inputChange } />
                    )) }
                    <Option link={routes.register} style_link="text-xs text-right text-gray-400 hover:text-gray-900" option="¿Olvidaste tu contraseña?" />
                    <Button link={routes.login} style_extra="mt-7 mb-10 text-gray-400 hover:text-gray-900" style_button="w-full px-8 py-2 text-white text-lg bg-color-2" option="Ingresar" onClick={ onSubmit } />
                    <p className="text-sm text-gray-500 text-center border-t border-gray-300 pt-6">
                        ¿No tienes una cuenta?
                        <Option link={routes.register} style_link="ml-1 text-cyan-600 hover:text-cyan-800 font-semibold" option="Regístrate" />
                    </p>
                </div>
            </div>
        </section>
    );
};
        
export default LoginPage;