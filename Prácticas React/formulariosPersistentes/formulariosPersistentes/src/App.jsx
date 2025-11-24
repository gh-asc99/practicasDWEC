import './App.css'
import Cabecera from './template/cabecera.jsx'
import Menu from './template/menu/Menu.jsx'
import PiePagina from './template/PiePagina.jsx'
import Rutas from './routes/Rutas.jsx'

function App() {
  return (
    <>
      <Cabecera>
        <Menu/>
      </Cabecera>
        <Rutas />
      <PiePagina autor="Alejandro Soler Cruz" asignatura="Desarrollo Web en Entorno Cliente (DWES)" curso="2º DAW"/>
    </>
  )
}

export default App
