import { useState, useEffect, createContext } from "react";

const ContextoDiscos = createContext();

const ProveedorDiscos = ({ children }) => {

    const cargarListadoDiscosLocalStorage = () => {
        return JSON.parse(localStorage.getItem("listadoDiscos"));
    }

    const guardarListadoDiscosLocalStorage = () => {
        localStorage.setItem("listadoDiscos", JSON.stringify(listadoDiscos));
    }

    const listadoRecuperado = cargarListadoDiscosLocalStorage();
    const [listadoDiscos, setListadoDiscos] = useState(listadoRecuperado ? listadoRecuperado : []);

    const addDisco = (disco) => {
        setListadoDiscos(listadoPrevio => [...listadoPrevio, disco]);
    };

    const validarDisco = (disco) => {
        let errores = [];

        if (disco.nombre.length < 5) errores = [...errores, "nombre"];
        if (disco.artista.length < 5) errores = [...errores, "artista"];

        if (disco.fecha < 1000 || disco.fecha > 9999) {
            errores = [...errores, "fecha"];
        }

        const pattern = /^ES-\d{3}[A-Z]{2}$/;
        if (!pattern.test(disco.localizacion)) {
            errores = [...errores, "localizacion"];
        }

        if (!disco.genero || disco.genero.length === 0) {
            errores = [...errores, "genero"];
        }

        return errores;
    };

    useEffect(() => {
        const datos = cargarListadoDiscosLocalStorage();
        if (datos) setListadoDiscos(datos);
    }, []);

    useEffect(() => {
        guardarListadoDiscosLocalStorage();
    }, [listadoDiscos]);

    const elementosExportados = { listadoDiscos, addDisco, validarDisco };

    return (
        <ContextoDiscos value={elementosExportados}>{children}</ContextoDiscos>
    );
};

export default ProveedorDiscos;

export { ContextoDiscos };