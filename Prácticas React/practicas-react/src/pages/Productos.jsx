"use strict";
import "./estiloPaginas.css";
import { useNavigate } from "react-router-dom";

const Productos = () => {
    const navegar = useNavigate();
  return (
    <>
      <div className="bodyPagina">
        <h2>Listado de productos:</h2>
        <ul>
          <li>
            <div>
              <h3>Producto 1</h3>
              <p>Descripción del producto 1</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Producto 2</h3>
              <p>Descripción del producto 2</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Producto 3</h3>
              <p>Descripción del producto 3</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Producto 4</h3>
              <p>Descripción del producto 4</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Producto 5</h3>
              <p>Descripción del producto 5</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Producto 6</h3>
              <p>Descripción del producto 6</p>
            </div>
          </li>
        </ul>
        <button
          onClick={() => {navegar("/");
          }}
        >
          Volver a Inicio
        </button>
      </div>
    </>
  );
};

export default Productos;
