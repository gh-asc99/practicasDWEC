import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return(
        <>
            <nav className="barraMenu">
                <Link className="botonMenu" to="/">
                    Inicio
                </Link>
                <Link className="botonMenu" to="/registroDisco">
                    Insertar disco
                </Link>
                <Link className="botonMenu" to="/listadoDiscos">
                    Listar discos
                </Link>
            </nav>
        </>
    )
}

export default Menu;