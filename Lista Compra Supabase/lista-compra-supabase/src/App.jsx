import './App.css'
import Contenedor from './components/Contenedor.jsx'
import ContenedorIniciarSesion from './components/ContenedorIniciarSesion.jsx'
import ContenedorPiePagina from './components/ContenedorPiePagina.jsx'
import Menu from './components/Menu/Menu.jsx'
import Rutas from './routes/Rutas.jsx'

function App() {
 return (
    <>
      <Contenedor titulo="Lista de la compra APP" clase="cabecera">
        <ContenedorIniciarSesion titulo="¡Accede ya!" clase="iniciarSesion"/>
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
