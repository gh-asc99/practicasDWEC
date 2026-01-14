import './App.css'
import Contenedor from './components/Contenedor.jsx'
import Menu from "./components/Menu/Menu.jsx";
import PieDePagina from './components/PieDePagina.jsx'
import Rutas from './routes/Rutas.jsx'
import ProveedorDiscos from './context/ProveedorDiscos.jsx';

function App() {

  return (
    <>
      <Contenedor className="estiloEncabezado">
        <h3>Colección de discos</h3>
        <Menu/>
      </Contenedor>
      <Contenedor className="estiloCuerpo">
        <ProveedorDiscos>
          <Rutas/>
        </ProveedorDiscos>
      </Contenedor>
      <Contenedor className="estiloPieDePagina">
        <PieDePagina autor="Alejandro Soler Cruz" asignatura="Desarrollo Web en Entorno Cliente" curso="2º DAW"/>
      </Contenedor>
    </>
  )
}

export default App
