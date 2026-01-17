import { createContext, useEffect } from "react";
import useAPI from "../hooks/useAPI.js";

const ContextoDiscos = createContext();

const ProveedorDiscos = ({ children }) => {

    const API_URL = "http://localhost:3000/discos";

    const {
        datos: listadoDiscos,
        cargando,
        cargar,
        crear,
        eliminar,
        actualizar
    } = useAPI(API_URL);

    useEffect(() => {
        cargar();
    }, []);

    const obtenerDiscoPorId = (id) =>
        listadoDiscos.find(disco => disco.id === id);

    const guardarOActualizarDisco = (disco) =>
        disco.id ? actualizar(disco) : crear(disco);

    const validarDisco = (disco) => {
        let errores = [];
        if (disco.nombre.length < 5) errores.push("nombre");
        if (disco.artista.length < 5) errores.push("artista");
        if (disco.fecha < 1000 || disco.fecha > 9999) errores.push("fecha");
        if (!/^ES-\d{3}[A-Z]{2}$/.test(disco.localizacion)) errores.push("localizacion");
        if (!disco.genero?.length) errores.push("genero");
        return errores;
    };

    return (
        <ContextoDiscos.Provider value={{
            listadoDiscos,
            cargando,
            eliminarDisco: eliminar,
            actualizarDisco: actualizar,
            guardarDisco: crear,
            guardarOActualizarDisco,
            obtenerDiscoPorId,
            validarDisco
        }}>
            {children}
        </ContextoDiscos.Provider>
    );
};

export { ContextoDiscos };
export default ProveedorDiscos;