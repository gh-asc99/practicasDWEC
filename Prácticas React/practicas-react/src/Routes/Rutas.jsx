"use strict";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import AcercaDe from "../pages/AcercaDe.jsx";
import Error from "../pages/Error.jsx";
import Peliculas from "../pages/Peliculas.jsx";
import Galeria from "../pages/Galeria.jsx";
import Interpretes from "../pages/Interpretes.jsx";
import GaleriaPorTitulo from "../pages/GaleriaPorTitulo.jsx";
import GaleriaPorInterprete from "../pages/GaleriaPorInterprete.jsx";
import GaleriaPorDirector from "../pages/GaleriaPorDirector.jsx";
import PeliculaDetalle from "../pages/PeliculaDetalle.jsx";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/peliculas' element={<Peliculas />} >
          <Route path=':id' element={<PeliculaDetalle/>}/>
        </Route>
        <Route path='/interpretes' element={<Interpretes />} />
        <Route path='/galeria' element={<Galeria />} >
          <Route path='galeria/por_titulo' element={<GaleriaPorTitulo/>} />
          <Route path='galeria/por_interprete' element={<GaleriaPorInterprete/>} />
          <Route path='galeria/por_director' element={<GaleriaPorDirector/>} />
        </Route>
        <Route path='/acerca_de' element={<AcercaDe />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default Rutas;