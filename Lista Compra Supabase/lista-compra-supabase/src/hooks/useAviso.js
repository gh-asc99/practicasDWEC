import { useState } from "react";

const useAviso = () => {
    const avisoInicial = {
        visible: false,
        tipo: "info",
        titulo: "",
        mensaje: ""
    };
    const [aviso, setAviso] = useState(avisoInicial);

    const mostrarAviso = ({ tipo = "info", titulo, mensaje }) => {
        setAviso({
            visible: true,
            tipo,
            titulo,
            mensaje
        });
    };

    const ocultarAviso = () => {
        setAviso(avisoInicial);
    };

    return{
        aviso,
        mostrarAviso,
        ocultarAviso
    }
}

export default useAviso;