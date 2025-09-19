import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Contenedor from './components/Ejercicio 1/Contenedor.jsx';
import Interprete from './components/Ejercicio 2/Interprete.jsx';

function App() {

  return (
    <>
      <Contenedor>
        <Interprete nombre="nombre" foto="foto">
          biografía
        </Interprete>
      </Contenedor>
    </>
  )
};

export default App;
