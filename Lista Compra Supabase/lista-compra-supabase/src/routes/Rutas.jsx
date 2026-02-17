import { Route, Routes } from "react-router-dom"
import Inicio from "../pages/Inicio.jsx";
import CrearListado from "../pages/CrearListado.jsx";
import VerListados from "../pages/VerListados.jsx";
import CrearProducto from "../pages/CrearProducto.jsx";
import VerProductos from "../pages/VerProductos.jsx";
import InicioSesionRegistro from "../pages/InicioSesionRegistro.jsx";
import Bienvenida from "../pages/Bienvenida.jsx";
import AdministrarRoles from "../pages/AdministrarRoles.jsx";

const Rutas = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/nuevoListado" element={<CrearListado/>}/>
                <Route path="/misListas" element={<VerListados/>}/>
                <Route path="/nuevoProducto" element={<CrearProducto/>}/>
                <Route path="/misProductos" element={<VerProductos/>}/>
                <Route path="/administrarRoles" element={<AdministrarRoles/>}/>
                <Route path="/accesoApp" element={<InicioSesionRegistro/>}/>
                <Route path="/bienvenida" element={<Bienvenida/>}/>
            </Routes>
        </>
    )
}

export default Rutas;