const CardDetail = (props) => {
    return (
        <div className="flex rounded-lg h-full bg-white p-8 flex-col">
            <div className="flex items-center mb-3">
                <i className={`mr-3 inline-flex items-center justify-center text-color-1 text-2xl flex-shrink-0 ${ props.icon }`}></i>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                    { props.detail }
                </h2>
            </div>
            <div className="flex-grow">
                <p className="leading-relaxed text-base">
                    { props.description }
                </p>
            </div>
        </div>
    );
}

export default CardDetail;