import React from "react";
import Contenedor from "../Lista/Contenedor.jsx";
import Interprete from "../Lista/Interprete.jsx";
import '../Lista/Pelicula.css';

const PeliculaUseRef = (props) => {
    return(
        <>
            <h1>{props.titulo}</h1>
            <Contenedor className='peliculaContenedor_alert'>
                <Interprete tipo="pelicula" nombre={props.titulo} foto={props.portada}>
                    <p>Dirigida por: {props.director}</p>

                    <p>{props.children}</p>
                    <Interprete tipo="elenco" className='peliculaElenco_alert' nombre={props.actor1} foto={props.fotoActor1}>
                        <p>{props.descripcionActor1}</p>
                    </Interprete>
                    <Interprete tipo="elenco" nombre={props.actor2} foto={props.fotoActor2}>
                        <p>{props.descripcionActor2}</p>
                    </Interprete>
                    <Interprete tipo="elenco" nombre={props.actor3} foto={props.fotoActor3}>
                        <p>{props.descripcionActor3}</p>
                    </Interprete>
                </Interprete>
            </Contenedor>
        </>
    );
};

export default PeliculaUseRef;