import { Link } from 'react-router-dom';

const NavbarOption = (props) => {
return (
    <Link to={ props.link }>
        <a class="mr-5 text-gray-400 hover:text-gray-900">
            { props.option }
        </a>
    </Link>
)}

export default NavbarOption;