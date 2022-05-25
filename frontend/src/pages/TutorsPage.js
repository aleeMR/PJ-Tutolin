import axios from 'axios';
import { useState, useEffect } from 'react';

const TutorsPage = () => {
    const [tutors, setTutors] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        loadTutors();
      }, []);

    const loadTutors = () => {
        axios.get(`${ process.env.REACT_APP_SERVER }/api/tutors`)
            .then(res => {
                const data = res.data;
                setTutors(data.tutors);
            }).catch(err => console.error(err));
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const filterTutors = () => {
        if (search.length == 0)
            loadTutors();

        const filtered = tutors.filter(tutor => tutor.name.includes(search));
        setTutors(filtered);
    }

    return (
        <main>
            <div className="container mx-auto flex flex-wrap pt-12 px-5 items-center">
                <div className="input-group relative flex w-full mb-4">
                    <input type="search" value={ search } onChange={ handleSearch } className="w-full bg-white rounded-l-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out focus:outline-none" placeholder="Buscar en todos los tutores..." aria-label="Search" aria-describedby="button-addon2" />
                    <button type="button" onClick={ filterTutors } className="btn inline-block px-6 py-2.5 bg-color-2 text-white font-medium text-xs leading-tight uppercase rounded-r-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="container mx-auto py-3 sm:py-6 px-5">
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-12">
                    {
                        tutors.map((tutor) =>
                            <div className="flex rounded border border-gray-300" key={ tutor._id }>
                                <div className="h-full flex-1 min-w-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-l-lg overflow-hidden group-hover:opacity-75 lg:w-80 lg:aspect-none">
                                    <img src={ tutor.image ? tutor.image : require("../assets/img/avatar.png") } alt={ tutor._id } className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                                </div>
                                <div className="my-4 mx-8 flex-1">
                                    <h3 className="mb-1 text-base font-medium text-gray-800">
                                        { tutor.name + " " + tutor.surname }
                                    </h3>
                                    <div className="flex justify-end">
                                        <p className="text-sm font-medium text-gray-900">{ tutor.city + ", " + tutor.country }</p>
                                    </div>
                                    <p className=" my-2 text-sm text-gray-500">{ tutor.biography }</p>
                                    {
                                        tutor.network ? 
                                            <ul>
                                                <p className="mb-1 text-gray-700">Contacto:</p>
                                                {
                                                    tutor.network.mobile ?
                                                    <li className="ml-4 text-sm inline-flex text-gray-600 hover:text-gray-800">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 mt-1 bi bi-telephone-fill" viewBox="0 0 16 16" fill="currentColor">
                                                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                                        </svg>
                                                        { tutor.network.mobile }
                                                    </li>
                                                    : <></>
                                                }
                                                {
                                                    tutor.network.webemail ?
                                                    <li className="ml-4 text-sm text-gray-600 hover:text-gray-800">
                                                        <a href={ "mailto:"+tutor.network.webemail } className="inline-flex">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                            </svg>
                                                            { tutor.network.webemail }
                                                        </a>
                                                    </li>
                                                    : <></>
                                                }
                                                {
                                                    tutor.network.website1 ?
                                                    <li className="ml-4 text-sm text-gray-600 hover:text-gray-800">
                                                        <a href={ "https://"+tutor.network.website1 } className="inline-flex">
                                                            <svg className="h-4 w-4 mr-1 mt-1" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M3.33789 17C5.06694 19.989 8.29866 22 12.0001 22C15.7015 22 18.9332 19.989 20.6622 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M3.33789 7C5.06694 4.01099 8.29866 2 12.0001 2C15.7015 2 18.9332 4.01099 20.6622 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M13 21.9506C13 21.9506 14.4079 20.0966 15.2947 16.9999" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M13 2.04932C13 2.04932 14.4079 3.90328 15.2947 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M11 21.9506C11 21.9506 9.59215 20.0966 8.70532 16.9999" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M11 2.04932C11 2.04932 9.59215 3.90328 8.70532 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round "/>
                                                                <path d="M9 10L10.5 15L12 10L13.5 15L15 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M1 10L2.5 15L4 10L5.5 15L7 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M17 10L18.5 15L20 10L21.5 15L23 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            { tutor.network.website1 }
                                                        </a>
                                                    </li>
                                                    : <></>
                                                }
                                                {
                                                    tutor.network.website2 ?
                                                    <li className="ml-4 text-sm text-gray-600 hover:text-gray-800">
                                                        <a href={ "https://"+tutor.network.website2 } className="inline-flex">
                                                            <svg className="h-4 w-4 mr-1 mt-1" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M3.33789 17C5.06694 19.989 8.29866 22 12.0001 22C15.7015 22 18.9332 19.989 20.6622 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M3.33789 7C5.06694 4.01099 8.29866 2 12.0001 2C15.7015 2 18.9332 4.01099 20.6622 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M13 21.9506C13 21.9506 14.4079 20.0966 15.2947 16.9999" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M13 2.04932C13 2.04932 14.4079 3.90328 15.2947 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M11 21.9506C11 21.9506 9.59215 20.0966 8.70532 16.9999" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M11 2.04932C11 2.04932 9.59215 3.90328 8.70532 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round "/>
                                                                <path d="M9 10L10.5 15L12 10L13.5 15L15 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M1 10L2.5 15L4 10L5.5 15L7 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M17 10L18.5 15L20 10L21.5 15L23 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            { tutor.network.website2 }
                                                        </a>
                                                    </li>
                                                    : <></>
                                                }
                                                {
                                                    tutor.network.linkedin ?
                                                    <li className="ml-4 text-sm text-gray-600 hover:text-gray-800">
                                                        <a href={ "https://"+tutor.network.linkedin } className="inline-flex">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 mt-1 bi bi-linkedin" viewBox="0 0 16 16" fill="currentColor">
                                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                            </svg>
                                                            { tutor.network.linkedin }
                                                        </a>
                                                    </li>
                                                    : <></>
                                                }
                                                {
                                                    tutor.network.facebook ?
                                                    <li className="ml-4 text-sm text-gray-600 hover:text-gray-800">
                                                        <a href={ "https://"+tutor.network.facebook } className="inline-flex">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 mt-1" viewBox="0 0 24 24" fill="currentColor">
                                                                <path fill="none" d="M0 0h24v24H0z"/>
                                                                <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.598z" />
                                                            </svg>
                                                            { tutor.network.facebook }
                                                        </a>
                                                    </li>
                                                    : <></>
                                                }
                                                {
                                                    tutor.network.youtube ?
                                                    <li className="ml-4 text-sm text-gray-600 hover:text-gray-800">
                                                        <a href={ "https://"+tutor.network.youtube } className="inline-flex">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 mt-1 bi bi-youtube" viewBox="0 0 16 16" fill="currentColor">
                                                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                                            </svg>
                                                            { tutor.network.youtube }
                                                        </a>
                                                    </li>
                                                    : <></>
                                                }
                                                {
                                                    tutor.network.github ?
                                                    <li className="ml-4 text-sm text-gray-600 hover:text-gray-800">
                                                        <a href={ "https://"+tutor.network.github } className="inline-flex">
                                                            <svg className="h-4 w-4 mr-1 mt-1" viewBox="0 0 25 25" fill="currentColor">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                                                            </svg>
                                                            { tutor.network.github }
                                                        </a>
                                                    </li>
                                                    : <></>
                                                }
                                            </ul>
                                        :
                                            ""
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </main>
    );
}
    
export default TutorsPage;