import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PeliculaUseRef from './components/Ejercicio1/PeliculaUseRef.jsx';
import Contenedor from './components/Lista/Contenedor.jsx';

function App() {

  return (

    <>
      <PeliculaUseRef 
      titulo="Los piratas del Caribe 2" director="Gore Verbinski" portada="https://www.mubis.es/media/movies/966/66037/piratas-del-caribe-2-el-cofre-del-hombre-muerto-original.jpg"
      actor1="Johnny Depp" fotoActor1="https://m.media-amazon.com/images/M/MV5BZjA3NzZiZDktZjc2My00MzY2LThhOWMtZGFjYzg4ZDI2ZWVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" descripcionActor1="En la piel del Capitán Jack Sparrow."
      actor2="Orlando Bloom" fotoActor2="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Orlando_Bloom_Cannes_2013.jpg/250px-Orlando_Bloom_Cannes_2013.jpg" descripcionActor2="En la piel del joven bucanero William Turner."
      actor3="Keira Knightley" fotoActor3="https://www.lavanguardia.com/peliculas-series/images/all/profile/1985/3/116/w1280/pxzcVzTyJBKwfuyRLDtax1Jmr7o.jpg" descripcionActor3="En la piel de Elizabeth Swann, la hija del gobernador.">
        Jack Sparrow descubre que le debe su alma a Davy Jones y busca el legendario cofre que guarda su corazón.
        Will Turner y Elizabeth Swann se ven arrastrados a la peligrosa aventura.
        Traiciones, monstruos marinos y batallas navales marcan la carrera por sobrevivir y dominar los mares.
      </PeliculaUseRef>
    </> 

  )
};

export default App;