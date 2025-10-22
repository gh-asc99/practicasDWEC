import { useState } from "react";
import "./App.css";
import Rutas from "./Routes/Rutas.jsx";
import Menu from "./Menu/Menu.jsx";
import Contenedor from "./components/Lista/Contenedor.jsx";

function App() {
  return (
    <>
      <Contenedor>
        <h2>GAMEcity</h2>
        <p>Tu tienda gamer online de confianza.</p>
      </Contenedor>
      <Contenedor>
        <Menu />
      </Contenedor>
      <Contenedor>
        <Rutas />
      </Contenedor>
      <Contenedor>
        <div className="footer">
          <h3>Datos de la página web</h3>
          <p><strong>Nombre: </strong>GAMEcity</p>
          <p><strong>Desarrollador: </strong>Alejandro Soler Cruz</p>
          <p><strong>Localidad: </strong>Elda (Alicante)</p>
        </div>
      </Contenedor>
    </>
  );
}

export default App;
