import { useState, useEffect, createContext } from "react";

const ContextoDiscos = createContext();

const ProveedorDiscos = ({ children }) => {

    const API_URL = "http://localhost:3000/discos";

    const [listadoDiscos, setListadoDiscos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const obtenerDiscoPorId = (id) => {
        return listadoDiscos.find(disco => disco.id === id);
    };

    const guardarOActualizarDisco = (disco) => {
        if (disco.id) {
            return actualizarDisco(disco);
        } else {
            return guardarDisco(disco);
        }
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

    const cargarDiscos = async () => {
        try {
            setCargando(true);
            const respuesta = await fetch(API_URL);
            const datos = await respuesta.json();
            setListadoDiscos(datos);
        } catch (error) {
            console.error("Error al cargar discos:", error);
        } finally {
            setCargando(false);
        }
    };

    const guardarDisco = async (disco) => {
        const respuesta = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(disco)
        });

        const nuevoDisco = await respuesta.json();
        setListadoDiscos(prev => [...prev, nuevoDisco]);
    };

    const eliminarDisco = async (id) => {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        setListadoDiscos(discoPrevio =>
            discoPrevio.filter(disco => disco.id !== id)
        );
    };

    const actualizarDisco = async (disco) => {
        await fetch(`${API_URL}/${disco.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(disco)
        });

        setListadoDiscos(discoPrevio =>
            discoPrevio.map(elemento => elemento.id === disco.id ? disco : elemento)
        );
    };

    useEffect(() => {
        cargarDiscos();
    }, []);

    const elementosExportados = { listadoDiscos, cargando, guardarDisco, validarDisco, eliminarDisco, actualizarDisco, obtenerDiscoPorId, guardarOActualizarDisco};

    return (
        <ContextoDiscos value={elementosExportados}>{children}</ContextoDiscos>
    );
};

export default ProveedorDiscos;

export { ContextoDiscos };