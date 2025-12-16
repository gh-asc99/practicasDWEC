"use strict";
import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <>
      <nav className="barra_navegacion">
        <Link className='botonMenu' to='/'>
          Inicio
        </Link>
        <Link className='botonMenu' to='/peliculas'>
          Películas
        </Link>
        <Link className='botonMenu' to='/interpretes'>
          Intérpretes
        </Link>
        <Link className='botonMenu' to='/galeria'>
          Galeria
        </Link>
        <Link className='botonMenu' to='/acerca_de'>
          Acerca de
        </Link>
      </nav>
    </>
  );
};

export default Menu;