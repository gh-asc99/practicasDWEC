const CampoFormulario = (props) => {
    let contenido;
    if (props.inputTipo === "text" || props.inputTipo === "number"){
        if(props.inputNombre === "inputNombre" || props.inputNombre === "inputArtista"){
        contenido = <div>
                        <label htmlFor={props.inputNombre}>{props.campo}</label>
                        <input type={props.inputTipo} name={props.inputNombre} id={props.inputNombre} required/>
                    </div>;
        } else {
        contenido = <div>
                        <label htmlFor={props.inputNombre}>{props.campo}</label>
                        <input type={props.inputTipo} name={props.inputNombre} id={props.inputNombre} />
                    </div>;
        }
    } else { //Para inputs de tipo checkbox o radio.
        let valorID = props.inputID ? props.inputID : props.inputNombre;
        let valorFor = props.inputFor ? props.inputFor : props.inputNombre;
        if(props.valor === "no"){
        contenido = <div>
                        <label htmlFor={valorFor}>{props.campo}</label>
                        <input type={props.inputTipo} name={props.inputNombre} id={valorID} value={props.valor} defaultChecked/>
                    </div>;
        }else{
        contenido = <div>
                        <label htmlFor={valorFor}>{props.campo}</label>
                        <input type={props.inputTipo} name={props.inputNombre} id={valorID} value={props.valor} />
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