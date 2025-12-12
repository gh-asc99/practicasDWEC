"use strict";

import React, { useState } from "react";
import "./Matricula.css";

const Matricula = (props) => {
  /*Paso el objeto .json (el listado de discentes) como parámetro y lo almaceno en todosDiscentes 
para no alterar la lista original al actualizar su estado*/

const [todosDiscentes, setTodosDiscentes] = useState([...props.discentes]);
//Tener un estado de todosDiscentes me ayudará a mantener la lista actualizada al usar la función desmatricularAlumno

  const [discentesMostrados, setDiscentesMostrados] = useState([...props.discentes]);

  const mostrarAlumnado2DAW = () => {
    const filtrados = todosDiscentes.filter(
      (discente) => discente.curso === "2DAW"
    );
    setDiscentesMostrados(filtrados);
  };

  const mostrarAlumnadoPrimerCurso = () => {
    const filtrados = todosDiscentes.filter((discente) =>
      discente.curso.includes("1")
    );
    setDiscentesMostrados(filtrados);
  };

  const mostrarAlumnadoDAW = () => {
    const filtrados = todosDiscentes.filter((discente) =>
      discente.curso.includes("DAW")
    );
    setDiscentesMostrados(filtrados);
  };

  const mostrarAlumnadoLector = () => {
    const filtrados = todosDiscentes.filter((discente) =>
      discente.aficiones.includes("lectura")
    );
    setDiscentesMostrados(filtrados);
  };

  const mostrarAlumnadoAlfabeticamente = () => {
    const filtrados = [...discentesMostrados].sort((a, b) =>
      a.nombre[0].localeCompare(b.nombre[0])
    );
    /*En este caso, sería necesario ordenar los discentes mostrados actualmente (usando ...discentesMostrados
    en lugar de llamar a todosDiscentes, pues usando este último se actualizaria la lista a su estado original,
    lo cual no interesa para esta función en específico) */
    setDiscentesMostrados(filtrados);
  };

  const reiniciar = () => {
    setDiscentesMostrados(todosDiscentes);
  };

  const [modoDesmatricular, setModoDesmatricular] = useState(false);

  const desmatricularAlumno = (id) => {
    if (modoDesmatricular) {
    const nuevosMostrados = discentesMostrados.filter(discente => discente.id !== id);
    const nuevosTodos = todosDiscentes.filter(discente => discente.id !== id);

    setDiscentesMostrados(nuevosMostrados);
    setTodosDiscentes(nuevosTodos);
  }
  };

  return (
    <>
      <div>
        <button className="alumnado2DAW" onClick={mostrarAlumnado2DAW}>
          Alumnado 2ºDAW
        </button>
        <button
          className="alumnadoPrimerCurso"
          onClick={mostrarAlumnadoPrimerCurso}
        >
          Alumnado 1er curso
        </button>
        <button className="alumnadoDAW" onClick={mostrarAlumnadoDAW}>
          Alumnado DAW
        </button>
        <button className="alumnadoLector" onClick={mostrarAlumnadoLector}>
          Alumnado lector
        </button>
        <button
          className="alumnadoOrdenado"
          onClick={mostrarAlumnadoAlfabeticamente}
        >
          Listado actual en orden alfabético
        </button>
        <button className="listadoOriginal" onClick={reiniciar}>
          Reiniciar listado
        </button>
        <button className="desmatricularAlumnado" onClick={() => setModoDesmatricular(!modoDesmatricular)}>
          Desmatricular
        </button>

        <h2>Lista de discentes:</h2>
        <table className="tablaMatriculados">
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Curso</th>
            <th>Aficiones</th>
            <th>Comida</th>
          </tr>
          {discentesMostrados.map((discente) => (
            <tr key={discente.id}>
              <td onClick={() => desmatricularAlumno(discente.id)}>{discente.nombre}</td>
              <td>{discente.apellidos}</td>
              <td>{discente.curso}</td>
              <td>{discente.aficiones.join(", ")}</td>
              <td>{discente.comida}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Matricula;
