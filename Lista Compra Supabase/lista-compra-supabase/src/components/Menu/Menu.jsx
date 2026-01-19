import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return (
        <>
            <nav>
                <Link className="botonMenu" to="/">Inicio</Link>
                <Link className="botonMenu" to="/nuevoProducto">Nuevo producto</Link>
                <Link className="botonMenu" to="/misProductos">Mis productos</Link>
                <Link className="botonMenu" to="/nuevoListado">Nuevo listado</Link>
                <Link className="botonMenu" to="/misListas">Mis listas</Link>
            </nav>
        </>
    )
}

export default Menu;