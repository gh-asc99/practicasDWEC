"use strict";
import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <>
      <nav>
        <Link className='botonMenu' to='/'>
          Inicio
        </Link>
        <Link className='botonMenu' to='/contacto'>
          Contacto
        </Link>
        <Link className='botonMenu' to='/acercaDe'>
          Acerca de
        </Link>
        <Link className='botonMenu' to='/productos'>
          Productos
        </Link>
      </nav>
    </>
  );
};

export default Menu;