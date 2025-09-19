import React from "react";
import "./Interprete.css";

const Interprete = (props) => {
    return(
        <>
        <div className='interprete_alerta'>
            <img src={props.foto} alt="Foto"></img>
            <h2>{props.nombre}</h2>
            <p>{props.children}</p>
        </div>
        </>
    );
};

export default Interprete;