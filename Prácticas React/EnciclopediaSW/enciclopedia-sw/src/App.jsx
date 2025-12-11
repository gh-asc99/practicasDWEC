import "./App.css";
import Menu from "./components/Menu.jsx";
import Cabecera from "./template/Cabecera.jsx";
import PeliculaDetalles from "./components/PeliculaDetalles.jsx";
import Personaje from "./components/Personaje.jsx";
import { useState } from "react";
import Contenedor from "./components/Contenedor.jsx";
import Seccion from "./components/Seccion.jsx";
import Footer from "./template/Footer.jsx";

function App() {
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);

  return (
    <>
      <Cabecera
        imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/2560px-Star_Wars_Yellow_Logo.svg.png"
        titulo="Enciclopedia Star Wars"
      >
        <Menu setPeliculaSeleccionada={setPeliculaSeleccionada} />
      </Cabecera>

      <Contenedor>
        <Seccion>
          <PeliculaDetalles
            peliculaSeleccionada={peliculaSeleccionada}
            setPersonajeSeleccionado={setPersonajeSeleccionado}
          />
        </Seccion>

        <Seccion>
          <Personaje personajeSeleccionado={personajeSeleccionado} />
        </Seccion>
      </Contenedor>

      <Footer autor="Alejandro Soler Cruz" asignatura="Desarrollo Web en Entorno Cliente" curso="2º DAW"/>
    </>
  );
}

export default App;
