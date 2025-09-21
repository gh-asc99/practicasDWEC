import React from "react";
import "./Interprete.css";

const Interprete = (props) => {
    let claseExtra = "";
  if (props.tipo === "pelicula") claseExtra = "peliculaInterprete_alert";
  if (props.tipo === "elenco") claseExtra = "peliculaElenco_alert";
    return(
        <>
        <div className={`interprete_alert ${claseExtra}`}>
            <div className='imagen'><img src={props.foto} alt="Foto"></img></div>
            <h2>{props.nombre}</h2>
            <p>{props.children}</p>
        </div>
        </>
        
    );
};

export default Interprete;