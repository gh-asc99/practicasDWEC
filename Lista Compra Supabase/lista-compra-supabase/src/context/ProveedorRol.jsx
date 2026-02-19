import { createContext } from "react"
import { useState } from 'react';
import useSupabase from "../hooks/useSupabase.js";
import useSesion from "../hooks/useSesion.js";

const ContextoRol = createContext();

const ProveedorRol = ({ children }) => {

    const { traerDatosSupabase,
        actualizarDatoSupabase
    } = useSupabase();

    const {
        traerIdUsuarioLogueado
    } = useSesion();

    const [listaRoles, setListaRoles] = useState([])


    const traerRolesSupabase = async () => {
        const data = await traerDatosSupabase("roles", "*")
        setListaRoles(data)
    }

    const actualizarRolesSupabase = async (registroRol) => {
        const rolFormateado = {
            correo: registroRol.correo,
            rol: registroRol.rol,
        };

        await actualizarDatoSupabase("roles", "id_rol", registroRol.id_rol, rolFormateado);
        await traerRolesSupabase();
    }

    const traerDatosRolesPorId = () => {
        const idUsuario = traerIdUsuarioLogueado();
        return listaRoles.find(registro => registro.id_rol === idUsuario) || null;
    }

    const datosInsertadosContexto = {
        traerDatosRolesPorId,
        traerRolesSupabase,
        actualizarRolesSupabase
    }
  return (
    <ContextoRol.Provider value={datosInsertadosContexto}>
        {children}
    </ContextoRol.Provider>
  )
}

export default ProveedorRol

export { ContextoRol }
