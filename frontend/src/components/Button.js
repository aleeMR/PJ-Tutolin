import { Link } from 'react-router-dom';


const Button = (props) => {
return (
    <Link to={ props.link }>
        <button class={`inline-flex items-center border-0 focus:outline-none rounded-md mt-4 md:mt-0 ${ props.extra }`}>
            { props.option }
        </button>
    </Link>
)}

export default Button;