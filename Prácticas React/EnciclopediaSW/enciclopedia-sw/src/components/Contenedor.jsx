"use strict";

import "./Contenedor.css";

const Contenedor = (props) => {
    return (
        <>
            <div id="contenedorPrincipal">
                {props.children}
            </div>
        </>
    );
}

export default Contenedor;