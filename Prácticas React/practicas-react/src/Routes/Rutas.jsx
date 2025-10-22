"use strict";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import Contacto from "../pages/Contacto.jsx";
import AcercaDe from "../pages/AcercaDe.jsx";
import Productos from "../pages/Productos.jsx";
import Error from "../pages/Error.jsx";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/acercaDe' element={<AcercaDe />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default Rutas;