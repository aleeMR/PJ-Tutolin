const Logo = (props) => {
    return (
        <div class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img class="w-10" src={require("../assets/img/logo_icono.png")} alt="logo"/>
            <span class={`ml-3 ${ props.style_span }`}>
                TUTOLIN
            </span>
        </div>
    );
}

export default Logo;