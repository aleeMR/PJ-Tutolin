const Logo = (props) => {
    return (
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img className="w-10" src={require("../assets/img/logo_icono.png")} alt="logo"/>
            <span className={`ml-3 ${ props.style_span }`}>
                TUTOLIN
            </span>
        </div>
    );
}

export default Logo;