import { useState } from "react";
import "./App.css";
import PeliculaUseRef from "./components/Ejercicio1/PeliculaUseRef.jsx";
import Rutas from "./components/Ejercicio1/routes/Rutas.jsx";
import Menu from "./components/Ejercicio1/menu/Menu.jsx";
import Referencias from "./components/Ejercicio1/Referencias.jsx";

function App() {
  return (
    //La cifra pasada como parámetro en "precio" hace referencia a la recaudación a nivel mundial de la película en dólares
    <>
      <PeliculaUseRef
        titulo="Los piratas del Caribe 2"
        director="Gore Verbinski"
        portada="https://www.mubis.es/media/movies/966/66037/piratas-del-caribe-2-el-cofre-del-hombre-muerto-original.jpg"
      >
        Jack Sparrow descubre que le debe su alma a Davy Jones y busca el
        legendario cofre que guarda su corazón. Will Turner y Elizabeth Swann se
        ven arrastrados a la peligrosa aventura. Traiciones, monstruos marinos y
        batallas navales marcan la carrera por sobrevivir y dominar los mares.
        <Referencias />
      </PeliculaUseRef>
    </>
  );
}

export default App;
