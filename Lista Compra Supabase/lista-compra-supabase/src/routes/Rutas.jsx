import { Route, Routes } from "react-router-dom"
import Inicio from "../pages/Inicio.jsx";
import CrearListado from "../pages/CrearListado.jsx";
import VerListados from "../pages/VerListados.jsx";
import CrearProducto from "../pages/CrearProducto.jsx";
import VerProductos from "../pages/VerProductos.jsx";

const Rutas = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/nuevoListado" element={<CrearListado/>}/>
                <Route path="/misListas" element={<VerListados/>}/>
                <Route path="/nuevoProducto" element={<CrearProducto/>}/>
                <Route path="/misProductos" element={<VerProductos/>}/>
            </Routes>
        </>
    )
}

export default Rutas;