import { Link } from 'react-router-dom';

const Option = (props) => {
    return (
        <Link to={ props.link } className={ props.style_link } onClick={ props.onClick }>
            { props.option }
        </Link>
    );
}

export default Option;