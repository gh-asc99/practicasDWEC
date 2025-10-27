"use strict";
import React from "react";
import { Link } from "react-router-dom";
import "../menu.css";

const Submenu = () => {
  return (
    <>
      <nav className="barra_navegacion">
        <Link className='botonMenu' to='galeria/por_titulo'>
          Por título
        </Link>
        <Link className='botonMenu' to='galeria/por_interprete'>
          Por intérprete
        </Link>
        <Link className='botonMenu' to='galeria/por_director'>
          Por director
        </Link>
      </nav>
    </>
  );
};

export default Submenu;