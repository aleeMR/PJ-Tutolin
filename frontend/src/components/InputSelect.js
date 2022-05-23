const InputSelect = (props) => {
    return (
        <div className={`relative ${ props.style_extra }`}>
            <label htmlFor={ props.id } className="leading-7 text-sm text-gray-600">
                { props.label }
            </label>
            <select id={ props.id } name={ props.id } value={ props.valueSelect } onChange={ props.onChange } className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                {
                    props.options.map((option) =>
                        <option key={ option.title } value={ option.title }>{ option.title }</option>
                    )
                }
            </select>
        </div>
    );
}

export default InputSelect;