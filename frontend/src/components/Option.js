import { Link } from 'react-router-dom';

const Option = (props) => {
    return (
        <Link to={ props.link } class={ props.style_link } onClick={ props.oClick }>
            { props.option }
        </Link>
    );
}

export default Option;