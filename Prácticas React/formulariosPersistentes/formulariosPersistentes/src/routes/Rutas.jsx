"use strict";

import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import InsertarDisco from "../pages/InsertarDisco.jsx";

const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/insertar_disco" element={<InsertarDisco />}/>
                <Route path="/listar_disco" />
            </Routes>
        </>
    );
};

export default Rutas;