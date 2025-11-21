import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './template/cabecera.jsx'
import Menu from './template/menu/Menu.jsx'
import PiePagina from './template/PiePagina.jsx'
import CuerpoPagina from './template/CuerpoPagina.jsx'
import Rutas from './routes/Rutas.jsx'

function App() {
  return (
    <>
      <Cabecera>
        <Menu/>
      </Cabecera>
      <CuerpoPagina>
        <Rutas />
      </CuerpoPagina>
      <PiePagina autor="Alejandro Soler Cruz" asignatura="Desarrollo Web en Entorno Cliente (DWES)" curso="2º DAW"/>
    </>
  )
}

export default App
