import { createContext } from "react"
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/config";

const ContextoSesion = createContext();

const ProveedorSesion = ({children}) => {

    const navegar = useNavigate();

    const registrarUsuario = () => {
        supabase.auth.signUp({correo, password});
    }

    const elementosExportados = { navegar };
    return(
        <ContextoSesion value={elementosExportados}>{children}</ContextoSesion>
    )
}

export default ProveedorSesion;

export { ContextoSesion };