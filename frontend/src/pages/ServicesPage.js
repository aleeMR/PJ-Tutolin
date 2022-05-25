import axios from 'axios';
import { useState, useEffect } from 'react';

const ServicesPage = () => {
    const [services, setServices] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        loadServices();
      }, []);

    const loadServices = () => {
        axios.get(`${ process.env.REACT_APP_SERVER }/api/services`)
            .then(res => {
                const data = res.data;
                setServices(data.services);
            }).catch(err => console.error(err));
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const filterServices = () => {
        if (search.length == 0)
            loadServices();

        const filtered = services.filter(service => service.title.includes(search));
        setServices(filtered);
    }

    return (
        <main>
            <div className="container mx-auto flex flex-wrap pt-12 px-5 items-center">
                <div className="input-group relative flex w-full mb-4">
                    <input type="search" value={ search } onChange={ handleSearch } className="w-full bg-white rounded-l-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out focus:outline-none" placeholder="Buscar en todos los servicios..." aria-label="Search" aria-describedby="button-addon2" />
                    <button type="button" onClick={ filterServices } className="btn inline-block px-6 py-2.5 bg-color-2 text-white font-medium text-xs leading-tight uppercase rounded-r-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="container mx-auto py-3 sm:py-6 px-5">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
                    {
                        services.map((service) =>
                            <div className="group relative rounded border border-gray-300" key={ service._id }>
                                <div className="w-full min-h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-lg overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
                                    <img src={ service.image ? service.image : require("../assets/img/curso.png") } alt={ service._id } className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                                </div>
                                <div className="m-4 flex justify-between">
                                    <h3 className="text-base font-medium text-gray-800">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        { service.title }
                                    </h3>
                                    <div className="flex justify-end">
                                        <svg className="text-gray-800 mt-1 w-3.5 h-3.5 bi bi-person-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                        <p className="ml-1 text-sm font-medium text-gray-900">{ service.quantity_max }</p>
                                        <p className="ml-4 text-sm font-medium text-gray-900">S/. { service.price }</p>
                                    </div>
                                </div>
                                <p className="mx-4 my-2 text-sm text-gray-500">{ service.description }</p>
                                <hr />
                                <p className="mx-4 my-2 text-sm text-gray-500">{ service.tutor_id.name + " " + service.tutor_id.surname }</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </main>
    );
}
    
export default ServicesPage;