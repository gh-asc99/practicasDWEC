"use strict";
import "./CuerpoPagina.css";

const CuerpoPagina = (props) => {
    return(
        <>
        <body className="cuerpoPagina">
            {props.children}
        </body>
        </>
    );
};

export default CuerpoPagina;