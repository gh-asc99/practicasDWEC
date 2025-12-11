"use strict";

import "./Seccion.css";

const Seccion = (props) => {
    return (
        <>
            <div id="contenedorSeccion">
                {props.children}
            </div>
        </>
    );
}

export default Seccion;