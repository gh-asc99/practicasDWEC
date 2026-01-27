import { Link } from "react-router-dom";
import "./Menu.css";
import { useContext } from "react";
import { ContextoSesion } from "../../context/ProveedorSesion.jsx";

const Menu = () => {
    const { usuarioLogueado } = useContext(ContextoSesion);

    return (
        <nav>
            {usuarioLogueado ? (
                <>
                    <Link className="botonMenu" to="/">Inicio</Link>
                    <Link className="botonMenu" to="/nuevoProducto">Nuevo producto</Link>
                    <Link className="botonMenu" to="/misProductos">Mis productos</Link>
                    <Link className="botonMenu" to="/nuevoListado">Nuevo listado</Link>
                    <Link className="botonMenu" to="/misListas">Mis listas</Link>
                </>
            ) : (
            <>
                <Link className="botonMenu" to="/bienvenida">Bienvenida a la APP</Link>
                <Link className="botonMenu" to="/misProductos">Mis productos</Link>
            </>


            )}
        </nav>
    );
};

export default Menu;
