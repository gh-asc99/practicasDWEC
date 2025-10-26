import { useState } from "react";
import "./App.css";
import Rutas from "./Routes/Rutas.jsx";
import Menu from "./Menu/Menu.jsx";
import Contenedor from "./components/Lista/Contenedor.jsx";
import Cabecera from "./template/Cabecera.jsx";
function App() {
  return (
    <>
      <Cabecera titulo="Películas Online">
        <Menu></Menu>
      </Cabecera>
      <Contenedor tipo="cuerpo">
        <Rutas />
      </Contenedor>
      <Contenedor tipo="pie">
        <h3>Información de la aplicación web:</h3>
        <strong>Programador:</strong> <i>Alejandro Soler Cruz.</i><br />
        <strong>Asignatura:</strong> <i>Desarrollo Web en Entorno Cliente.</i><br />
        <strong>Módulo:</strong> <i>2º DAW.</i>
      </Contenedor>
    </>
  );
}

export default App;
