import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import FormularioRegistro from "../pages/FormularioRegistro.jsx";
import ListadoDiscos from "../pages/ListadoDiscos.jsx";

const Rutas = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/registroDisco" element={<FormularioRegistro/>}/>
                <Route path="/listadoDiscos" element={<ListadoDiscos/>}>
                    <Route path=":id" element={<FormularioRegistro />} />
                </Route>
            </Routes>
        </>
    )
}

export default Rutas;