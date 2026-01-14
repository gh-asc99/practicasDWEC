const CampoFormulario = (props) => {
    const { inputsConError, campoID } = props;
    let contenido;
    if (props.inputTipo === "text" || props.inputTipo === "number") {
        if (props.campoID === "inputNombre" || props.campoID === "inputArtista") {
            contenido = <div className={inputsConError.includes(props.inputNombre) ? "error" : ""}>
                <label htmlFor={props.inputNombre}>{props.campo}</label>
                <input type={props.inputTipo} name={props.inputNombre} id={props.campoID} required />
            </div>;
        } else {
            contenido = <div className={inputsConError.includes(props.inputNombre) ? "error" : ""}>
                <label htmlFor={props.inputNombre}>{props.campo}</label>
                <input type={props.inputTipo} name={props.inputNombre} id={props.campoID} />
            </div>;
        }
    } else { //Para inputs de tipo checkbox o radio.
        let valorFor = props.inputFor ? props.inputFor : props.inputNombre;
        if (props.inputTipo === "radio") {
            if (props.valor === "no") {
                contenido = <div>
                    <label htmlFor={valorFor}>{props.campo}</label>
                    <input type={props.inputTipo} name={props.inputNombre} id={props.campoID} value={props.valor} defaultChecked />
                </div>;
            } else {
                contenido = <div>
                    <label htmlFor={valorFor}>{props.campo}</label>
                    <input type={props.inputTipo} name={props.inputNombre} id={props.campoID} value={props.valor} />
                </div>;
            }
        } else {
            contenido = <div className={inputsConError.includes(props.inputNombre) ? "error" : ""}>
                <label htmlFor={valorFor}>{props.campo}</label>
                <input type={props.inputTipo} name={props.inputNombre} id={props.campoID} value={props.valor} />
            </div>;
        }
    }
    return (
        <>
            {contenido}
        </>
    )
}

export default CampoFormulario;