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
                                    <h3 className="text-base font-medium text-gray-800">
                                        { tutor.name + " " + tutor.surname }
                                    </h3>
                                    <div className="flex justify-end">
                                        <p className="text-sm font-medium text-gray-900">{ tutor.city + ", " + tutor.country }</p>
                                    </div>
                                    <p className=" my-2 text-sm text-gray-500">{ tutor.biography }</p>
                                    <ul>Contacto:
                                        <li className="ml-4 text-sm"><a href={ "https://"+tutor.network.website1 }>{ tutor.network.website1 }</a></li>
                                        <li>{ tutor.network.website2 }</li>
                                    </ul>
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