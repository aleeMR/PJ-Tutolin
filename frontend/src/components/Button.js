import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to={ props.link } class={ props.style_extra }>
            <button class={`border-0 focus:outline-none rounded-md ${ props.style_button }`} onClick={ props.oClick }>
                { props.option }
            </button>
        </Link>
    );
}

export default Button;