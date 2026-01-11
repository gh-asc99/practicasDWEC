"use strict";
import "./Cabecera.css";

const Cabecera = (props) => {

    return (
        <>
            <header>
                <div id="datosPresentacion">
                    <img src={props.imagen} alt="Enciclopedia Star Wars" />
                    <h2>{props.titulo}</h2>
                </div>
                <div id="barraNavegacion">
                    {props.children}
                </div>
            </header>
        </>
    );
}

export default Cabecera;