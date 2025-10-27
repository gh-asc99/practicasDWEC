"use strict";
import { Link, Outlet } from "react-router-dom";
import "./estiloPaginas.css";
import { useState } from "react";
import Submenu from "../Menu/submenu/Submenu.jsx";

const Galeria = () => {

    return (
        <>
        <div>
                <h2>Galería de Carteles</h2>
                
            </div>
        <Submenu />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Galeria;
