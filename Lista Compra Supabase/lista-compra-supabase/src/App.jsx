import './App.css'
import Contenedor from './components/Contenedor.jsx'
import ContenedorEstadoSesion from './components/ContenedorEstadoSesion.jsx'
import ContenedorPiePagina from './components/ContenedorPiePagina.jsx'
import Menu from './components/Menu/Menu.jsx'
import SaludoUsuario from './components/SaludoUsuario.jsx'
import Rutas from './routes/Rutas.jsx'

function App() {
 return (
    <>
      <Contenedor titulo="Lista de la compra APP" clase="cabecera">
        <SaludoUsuario/>
        <ContenedorEstadoSesion/>
      </Contenedor>
      <Menu/>
      <Contenedor clase="cuerpo">
        <Rutas/>
      </Contenedor>
      <ContenedorPiePagina clase="piePagina"/>
    </>
  )
}

export default App
