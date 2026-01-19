import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return (
        <>
            <nav>
                <Link className="botonMenu" to="/">Inicio</Link>
                <Link className="botonMenu" to="/nuevoListado">Nueva lista</Link>
                <Link className="botonMenu" to="/misListas">Mis listas</Link>
            </nav>
        </>
    )
}

export default Menu;