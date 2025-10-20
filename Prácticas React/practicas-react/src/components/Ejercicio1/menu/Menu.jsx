import React from "react";
import { Link } from "react-router-dom";
import './menu.css';

const Menu = () => {
  return (
    <>
      <div className="botones">
        <Link className='elenco' to='/elenco'>
          Elenco
        </Link>
        <Link className='taquilla' to='/taquilla'>
          Taquilla
        </Link>
      </div>
    </>
  );
};

export default Menu;