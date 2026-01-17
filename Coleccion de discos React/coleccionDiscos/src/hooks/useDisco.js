import { useContext } from "react";
import { ContextoDiscos } from "../context/ProveedorDiscos.jsx";

const useDiscos = () => {
    const contexto = useContext(ContextoDiscos);

    if (!contexto) {
        throw new Error(
            "El hook useDisco ha fallado."
        );
    }

    return contexto;
};

export default useDiscos;