"use strict";

import "./Cabecera.css";

const Cabecera = (props) => {
    return (
        <>
            <header className="headerPagina">
                    <h2>Mi colección de discos</h2>

                {props.children}
            </header>
        </>
    );
};

export default Cabecera;