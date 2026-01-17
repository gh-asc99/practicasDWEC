import { useState } from "react";

const useAPI = (url) => {
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const cargar = async () => {
        try {
            setCargando(true);
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            setDatos(data);
        } catch (error) {
            console.error("Error al cargar:", error);
        } finally {
            setCargando(false);
        }
    };

    const crear = async (elemento) => {
        const respuesta = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(elemento)
        });

        if (!respuesta.ok) {
            throw new Error("Error al crear");
        }

        let nuevo = null;

        try {
            nuevo = await respuesta.json();
        } catch (error) {
            console.error("Ha habido un error:", error);
        }

        if (nuevo) {
            setDatos(datoPrevio => [...datoPrevio, nuevo]);
        } else {
            cargar();
        }
    };

    const eliminar = async (id) => {
        await fetch(`${url}/${id}`, { method: "DELETE" });
        setDatos(datoPrevio => datoPrevio.filter(e => e.id !== id));
    };

    const actualizar = async (elemento) => {
        await fetch(`${url}/${elemento.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(elemento)
        });

        setDatos(datoPrevio =>
            datoPrevio.map(dato => dato.id === elemento.id ? elemento : dato)
        );
    };

    return {
        datos,
        cargando,
        cargar,
        crear,
        eliminar,
        actualizar
    };
};

export default useAPI;
