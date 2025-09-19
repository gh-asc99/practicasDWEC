import React from "react";
import "./Interprete.css";

const Interprete = (props) => {
    return(
        <>
        <div className='interprete_alerta'>
            <div className='imagen'><img src={props.foto} alt="Foto"></img></div>
            <h2>{props.nombre}</h2>
            <p>{props.children}</p>
        </div>
        </>
    );
};

export default Interprete;