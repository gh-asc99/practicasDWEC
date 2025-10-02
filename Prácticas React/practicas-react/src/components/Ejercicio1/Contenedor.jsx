import React from "react";
import "./Contenedor.css";

const Contenedor = (props) => {
    return(
        <>
        <div className='contenedor_alerta'>
            <h2>Contenedor</h2>
            {props.children}
        </div>
        </>
    );
};

export default Contenedor;