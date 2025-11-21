"use strict";

import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
        <nav className="navegacionPagina">
            <Link className="botonNavegacionPagina" to={'/'}>
                Inicio
            </Link>
            <Link className="botonNavegacionPagina" to={'/insertar_disco'}>
                Insertar disco
            </Link>
            <Link className="botonNavegacionPagina" to={'/listar_disco'}>
                Listar disco
            </Link>
        </nav>
        </>
    );
};

export default Menu;