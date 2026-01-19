import { Route, Routes } from "react-router-dom"
import Inicio from "../pages/Inicio.jsx";
import CrearListado from "../pages/CrearListado.jsx";
import VerListado from "../pages/VerListado.jsx";

const Rutas = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/nuevoListado" element={<CrearListado/>}/>
                <Route path="/misListas" element={<VerListado/>}/>
            </Routes>
        </>
    )
}

export default Rutas;