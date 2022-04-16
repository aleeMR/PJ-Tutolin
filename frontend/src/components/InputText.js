const InputText = (props) => {
    return (
        <div class={`relative ${ props.style_extra }`}>
            <label for={ props.id } class="leading-7 text-sm text-gray-600">
                { props.label }
            </label>
            <input id={ props.id } type={ props.type } name={ props.id } valur={ props.val } onChange={ props.oChange } class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
    );
}

export default InputText;