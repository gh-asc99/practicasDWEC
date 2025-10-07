import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Matricula from './components/Ejercicio1/Matricula.jsx';
import matriculados from './components/Ejercicio1/json/matriculados.json';

function App() {
  const listaDiscentes = matriculados.discentes;

  return (

    <>
      <Matricula discentes={listaDiscentes}></Matricula>
    </> 

  )
};

export default App;