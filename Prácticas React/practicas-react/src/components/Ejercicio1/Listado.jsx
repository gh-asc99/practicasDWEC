import React, { useState } from "react";
import "./Listado.css";


const Listado = (props) => {
  const [numeroAleatorio, setNumeroAleatorio] = useState([]);

  const generarNumeroAleatorio = () => {
    const nuevoNumeroAleatorio = Math.floor(Math.random() * 100) + 1;
    numeroAleatorio.includes(nuevoNumeroAleatorio) ?
      generarNumeroAleatorio()
      : setNumeroAleatorio([...numeroAleatorio, nuevoNumeroAleatorio]);
  };

  const eliminarNumeroAleatorio = () => {
    setNumeroAleatorio([]);
  };

  return (
    <>
      <div className="listado_alert">
        <p>{props.children}</p>
        <button onClick={generarNumeroAleatorio}>Generar</button>
        <button onClick={eliminarNumeroAleatorio}>Eliminar</button>
      </div>
      <br/>
      <h2>Lista de números aleatorios (de 1 a 100):</h2>
      
        <ul>
          {Array.isArray(numeroAleatorio) && numeroAleatorio.length
            ? numeroAleatorio.map((numero, indice) => {
                return (
                  <li id={indice} key={crypto.randomUUID()}>
                    {numero}
                  </li>
                );
              })
            : "No hay números en la lista."}
        </ul>
    </>
  );
};

export default Listado;
