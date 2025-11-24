"use strict";

import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import InsertarDisco from "../pages/InsertarDisco.jsx";
import ListarDisco from "../pages/ListarDisco.jsx";

const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/insertar_disco" element={<InsertarDisco />}/>
                <Route path="/listar_disco" element={<ListarDisco />}/>
            </Routes>
        </>
    );
};

export default Rutas;