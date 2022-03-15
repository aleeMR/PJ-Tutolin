const CardDetail = (props) => {
    return (
        <div class="flex rounded-lg h-full bg-white p-8 flex-col">
            <div class="flex items-center mb-3">
                <i class={`mr-3 inline-flex items-center justify-center text-color-1 text-2xl flex-shrink-0 ${ props.icon }`}></i>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                    { props.detail }
                </h2>
            </div>
            <div class="flex-grow">
                <p class="leading-relaxed text-base">
                    { props.description }
                </p>
            </div>
        </div>
    );
}

export default CardDetail;