// Importación de rutas
import routes from '../helpers/routes';

// Importación de componentes
import Button from '../components/Button';
import CardDetail from '../components/CardDetail';

const HomePage = () => {
    return (
        <main>
            <section class="relative bg-white overflow-hidden">
                <div class="max-w-7xl mx-auto">
                    <div class="relative z-10 pt-6 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <div class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div class="sm:text-center lg:text-left lg:max-w-xl">
                                <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span class="block xl:inline">Encuentra a tu </span>
                                    <span class="block text-color-2 xl:inline">tutor en línea</span>
                                </h1>
                                <p class="mt-4 text-base text-gray-500 sm:mt-6 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0">
                                    ¿Problemas con algún curso? ¿Hay un tema que no logras entender? 
                                    ¿O tienes una tarea dificil de resolver?
                                    Descuida, la ayuda que necesitas se encuentra aquí.
                                </p>
                                <p class="mt-2 text-base text-gray-500 sm:mt-4 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-4 md:text-xl lg:mx-0">
                                    Descubre la variedad de servicios de asesoramiento que tenemos 
                                    para ti, escoge el que mejor se adapte a tus necesidades
                                    y comienza a reforzar tus conocimientos.
                                </p>
                                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <Button link={routes.services} style_button="inline-flex items-center font-medium text-white bg-color-2 px-8 py-3 md:py-4 md:text-lg md:px-10" option="EXPLORAR" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img class="object-cover lg:w-full lg:h-full" src={require("../assets/img/banner_1.png")} alt="banner"/>
                </div>
            </section>

            <section class="text-gray-600 body-font bg-slate-100">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="lg:w-5/12 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <h2 class="text-lg">
                            ACERCA DE NOSOTROS
                        </h2>
                        <h1 class="mt-2 text-4xl font-bold">
                            Bienvenido a TUTOLIN
                        </h1>
                        <p class="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-base sm:max-w-lg sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                            Somos una empresa poner al alcance de los estudiantes una plataforma 
                            que reuna diversos servicios de tutoría de distintas áreas con los 
                            cuales puedan reforzar sus conocimientos, y a su vez, brindar a los 
                            educadores iniciantes un espacio donde ofertar sus servicios.
                            <br /><br />
                            Con el objetivo de conectar a los estudiantes con necesidades de reforzar 
                            su aprendizaje y a las personas que deseen compartir sus conocimientos.
                        </p>
                    </div>
                    <div class="flex flex-wrap lg:py-6 -mb-10 lg:w-7/12 lg:pl-12 lg:text-left text-center">
                        <div class="p-4 md:w-1/2">
                            <CardDetail
                                icon="bi bi-people-fill"
                                detail="Soporte Educativo"
                                description="Fomentar el aprendizaje y trabajo en equipo de manera segura."
                            />
                        </div>
                        <div class="p-4 md:w-1/2">
                            <CardDetail
                                icon="bi bi-stopwatch-fill"
                                detail="Búsqueda Rápida"
                                description="Reducir el tiempo de búsqueda de servicios de tutoría específicos."
                            />
                        </div>
                        <div class="p-4 md:w-1/2">
                            <CardDetail
                                icon="bi bi-piggy-bank-fill"
                                detail="Costos Accesibles"
                                description="Brindar oportunidades de apoyo académico a precios económicos."
                            />
                        </div>
                        <div class="p-4 md:w-1/2">
                            <CardDetail
                                icon="bi bi-mortarboard-fill"
                                detail="Desarrollo Profesional"
                                description="Incentivar la formación de futuros profesionales en la educación."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
    
export default HomePage;