import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Listado from './components/Ejercicio1/Listado.jsx';
import ContadorLimite from './components/Ejercicio2/ContadorLimite.jsx';
import ContadorLikes from './components/Ejercicio3/ContadorLikes.jsx';

function App() {

  return (

    <>
      {/* <h2>Estado con array</h2>
      <Listado>Pulsa "Generar" para empezar a construir tu lista de números aleatorios.</Listado> */}

      {/* <h2>Contador con límites</h2>
      <ContadorLimite/> */}

      <h2>Contador de "likes" (y "dislikes")</h2>
      <ContadorLikes/>
    </> 

  )
};

export default App;