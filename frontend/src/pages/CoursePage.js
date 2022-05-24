import axios from 'axios';
import { useState, useEffect } from 'react';

// Importación de rutas
import useAuth from '../auth/useAuth';

// Importación de componentes
import Button from '../components/Button';
import InputNumber from '../components/InputNumber';
import InputSelect from '../components/InputSelect';
import InputText from '../components/InputText';
import InputTextArea from '../components/InputTextArea';

const CoursePage = () => {
    const { user } = useAuth();
    const [values, setValues] = useState({
        title: '',
        description: '',
        price: '',
        quantity_max: ''
    });
    const [tabs, setTabs] = useState(1);
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    
    useEffect(() => {
        //loadTutor();
      }, []);

    useEffect(() => {
        if(Object.keys(errors).length === 0 && submitted) {
            createService();
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

    const handleImage = (e) => {
        const file = e.target.files[0];
        setImage({ file, preview: URL.createObjectURL(file) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setSubmitted(true);
    };

    const validate = (values) => {
        let errors = {};

        // Validación del título
        if(!values.title.trim())
            errors.title = 'Este campo es necesario';
        // Validación de la descripción
        if(!values.description.trim())
            errors.description = 'Este campo es necesario';
        // Validación del precio
        if(!values.price.trim())
            errors.price = 'Este campo es necesario';
        // Validación de la cantidad máxima
        if(!values.quantity_max.trim())
            errors.quantity_max = 'Este campo es necesario';

        return errors;
    };

    const loadServices = () => {
        axios.get(`${ process.env.REACT_APP_SERVER }/api/tutors/${ user.id }`)
            .then(res => {
                const data = res.data;
                const tutor = data.tutor;
                setValues({
                    name: tutor.name,
                    surname: tutor.surname,
                    country: tutor.country ? tutor.country : '',
                    city: tutor.city ? tutor.city : '',
                    biography: tutor.biography ? tutor.biography : '',
                    website1: tutor.network.website1 ? tutor.network.website1 : '',
                    website2: tutor.website2 ? tutor.website : '',
                    linkedin: tutor.network.linkedin ? tutor.network.linkedin : '',
                    facebook: tutor.network.facebook ? tutor.network.facebook : '',
                    youtube: tutor.network.youtube ? tutor.network.youtube : '',
                    github: tutor.network.github ? tutor.network.github : ''
                });
                setImage(tutor.image);
            }).catch(err => console.error(err));
    };

    const createService = async () => {
        const data = {
            title: values.title,
            description: values.description,
            price: parseFloat(values.price),
            quantity_max: parseInt(values.quantity_max)
        };
        const img = new FormData();
        img.append('image', image.file);
        let service_id;
        const tutor_id = localStorage.getItem('tl-tutor');

        await axios.post(`${ process.env.REACT_APP_SERVER }/api/services/${ tutor_id }`, data, {
                headers: {
                    'x-access-token': localStorage.getItem('tl-token')
                }
            })
            .then(res => {
                const data = res.data;
                service_id = data.serviceSaved._id;
                const msg = data.msg;
                alert(msg);
            }).catch(err => console.error(err));

        await axios.put(`${ process.env.REACT_APP_SERVER }/api/services/${ service_id }`, img, {
                headers: {
                    'x-access-token': localStorage.getItem('tl-token'),
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                const data = res.data;
            }).catch(err => console.error(err));
    };

    const toggleTab = (index) => {
        setTabs(index);
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-5/6 md:w-3/4 bg-gray-100 rounded-lg px-11 py-8 mx-auto md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="col-span-2 text-gray-900 text-2xl font-medium title-font text-center mb-6">
                        SERVICIOS
                    </h2>
                    <div className="col-span-2 mb-4 border-b border-gray-500">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-400">
                            <li className="mr-2">
                                <button type="button" className={ `inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 hover:bg-gray-200 group ${ tabs === 1 ? "text-gray-600 border-gray-300 bg-gray-200" : "" }` } onClick={ () => toggleTab(1) }>
                                    <svg className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                    </svg>
                                    Mis Servicios
                                </button>
                            </li>
                            <li>
                                <button type="button" className={ `inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 hover:bg-gray-200 group ${ tabs === 2 ? "text-gray-600 border-gray-300 bg-gray-200" : "" }` } onClick={ () => toggleTab(2) }>
                                    <svg className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                                    </svg>
                                    Publicar Servicio
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div id="tabsProfileContent">
                        <div className={ `p-4 rounded-lg ${ tabs === 1 ? "" : "hidden" }` }>
                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <InputText id="name" type="text" style_extra="col-span-2 sm:col-span-1" label="Nombres" value={ values.name } onChange={ handleChange } errorMsg={ errors.name } />
                                <InputText id="surname" type="text" style_extra="col-span-2 sm:col-span-1" label="Apellidos" value={ values.surname } onChange={ handleChange } errorMsg={ errors.surname } />
                                <InputSelect id="country" style_extra="col-span-2 sm:col-span-1" label="País" valueSelect={ values.country } options={ [{ title: '' }, { title: "Colombia" }, { title: "Perú" }] } onChange={ handleChange } />
                                <InputText id="city" type="text" style_extra="col-span-2 sm:col-span-1" label="Ciudad" value={ values.city } onChange={ handleChange } />
                                <InputText id="biography" type="text" style_extra="col-span-2" label="Biografía" value={ values.biography } onChange={ handleChange } />
                            </div>
                        </div>
                        <form onSubmit={ handleSubmit } encType="multipart/form-data" className={ `p-4 rounded-lg ${ tabs === 2 ? "" : "hidden" }` }>
                            <div className="grid grid-cols-3 gap-6 mb-10">
                                <InputText id="title" type="text" style_extra="lg:col-span-2 col-span-3" label="Título" value={ values.title } onChange={ handleChange } errorMsg={ errors.title } />
                                <div className="lg:col-span-1 col-span-3">
                                    <label className="leading-7 text-sm text-gray-600">Imagen</label>
                                    <div className="flex items-center">
                                        <label className="cursor-pointer bg-slate-50 hover:bg-slate-200 py-3 px-3 border border-gray-300 rounded-l-lg shadow-sm text-sm leading-4 font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <input type="file" name="image" onChange={ handleImage } />
                                            Seleccionar...
                                        </label>
                                        <input type="text" value={ image ? image.file.name : "" } className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8" readOnly />
                                    </div>
                                </div>
                                <InputTextArea id="description" type="text" style_extra="col-span-2 row-span-2" label="Descripción" value={ values.description } onChange={ handleChange } errorMsg={ errors.description } />
                                <InputNumber id="price" step=".01" style_extra="sm:col-span-1" label="Precio" value={ values.price } onChange={ handleChange } errorMsg={ errors.price } />
                                <InputNumber id="quantity_max" style_extra="sm:col-span-1" label="Cantidad Máxima" value={ values.quantity_max } onChange={ handleChange } errorMsg={ errors.quantity_max } />
                            </div>
                            <div className="w-full inline-flex justify-end">
                                <Button style_extra="text-gray-400 hover:text-gray-900" type="submit" style_button="px-8 py-2 text-white text-lg bg-color-2" option="Publicar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
        
export default CoursePage;