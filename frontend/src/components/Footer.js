// Importación de componentes
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Logo style_span="text-2xl" />
                    <p className="mt-2 text-sm text-gray-500">
                        Encuentra a tu tutor ideal en línea o conviertete en uno
                    </p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/2 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">INFORMACIÓN</h2>
                        <nav className="list-none mb-10">
                            <li className="mb-1">
                                <a className="text-gray-600 hover:text-gray-800" href="/">Política de Privacidad</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" href="/">Términos y condiciones</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACTO</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-500 hover:text-gray-800 inline-flex items-end" href="mailto:ayuda@tutolin.com.pe">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span className="ml-1 text-gray-600">ayuda@tutolin.com.pe</span>
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-gray-800 inline-flex items-end" href="https://github.com/aleeMR/PJ-Tutolin">
                                    <svg className="h-5 w-5" viewBox="0 0 25 25" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                                    </svg>
                                    <span className="ml-1 text-gray-600">aleeMR/PJ-Tutolin</span>
                                </a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Tutolin. Todos los derechos reservados —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">Desarrollado por AMR</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
    
export default Footer;
    