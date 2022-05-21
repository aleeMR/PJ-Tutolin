const Button = (props) => {
    return (
        <div className={ props.style_extra }>
            <button type= { props.type } className={`border-0 focus:outline-none rounded-md ${ props.style_button }`} onClick={ props.onClick }>
                { props.option }
            </button>
        </div>
    );
}

export default Button;