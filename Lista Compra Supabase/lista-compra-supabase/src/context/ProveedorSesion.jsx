import { createContext } from "react"
import { useNavigate } from "react-router-dom";

const ContextoSesion = createContext();

const ProveedorSesion = ({children}) => {

    const navegar = useNavigate();

    const elementosExportados = { navegar };
    return(
        <ContextoSesion value={elementosExportados}>{children}</ContextoSesion>
    )
}

export default ProveedorSesion;

export { ContextoSesion };