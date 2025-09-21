import React from "react";
import Contenedor from "../Ejercicio 1/Contenedor.jsx";
import Interprete from "../Ejercicio 2/Interprete.jsx";
import './Pelicula.css';

const Pelicula = (props) => {
    return(
        <>
            <Contenedor className='peliculaContenedor_alert'>
                <Interprete tipo="pelicula" nombre={props.titulo} foto={props.portada}>
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

export default Pelicula;