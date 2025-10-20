import React from "react";
import "./Interprete.css";

const Interprete = (props) => {
/*Esta idea (la de crear los 2 condicionales para obtener claseExtra) la he obtenido de ChatGPT porque en el ejecicio 3 quería destacar
 el tamaño de la imagen (portada) de la película por encima de las imágenes de los actores que aparecen en esta. Por ello en Pelicula.css
 se pueden encontrar reglas de estilo que se corresponden con peliculaInterprete_alert y peliculaElenco_alert en función del tipo
 de elemento con el que se identifique.*/
    let claseExtra = "";
  if (props.tipo === "pelicula") claseExtra = "peliculaInterprete_alert";
  if (props.tipo === "elenco") claseExtra = "peliculaElenco_alert";
    return(
        <>
        <div className={`interprete_alert ${claseExtra}`}>
            <h2>{props.nombre}</h2>
            <div className='imagen'><img src={props.foto} alt="Foto"></img></div>
            <div>{props.children}</div>
        </div>
        </>
        
    );
};

export default Interprete;