const CampoFormulario = (props) => {

    const inputsConError = props.inputsConError ? props.inputsConError : [];

    if (
        props.inputTipo === "text" ||
        props.inputTipo === "number" ||
        props.inputTipo === "url"
    ) {
        return (
            <div className={inputsConError.includes(props.inputNombre) ? "error" : ""}>
                <label htmlFor={props.campoID}>{props.campo}</label>
                <input
                    type={props.inputTipo}
                    name={props.inputNombre}
                    id={props.campoID}
                    value={props.valor}
                    onChange={props.onChange}
                />
            </div>
        );
    }

    if (props.inputTipo === "radio" || props.inputTipo === "checkbox") {
        return (
            <div className={inputsConError.includes(props.inputNombre) ? "error" : ""}>
                <label htmlFor={props.inputFor || props.campoID}>
                    {props.campo}
                </label>
                <input
                    type={props.inputTipo}
                    name={props.inputNombre}
                    id={props.campoID}
                    value={props.valor}
                    checked={props.checked}
                    onChange={props.onChange}
                />
            </div>
        );
    }

    return null;
};

export default CampoFormulario;
