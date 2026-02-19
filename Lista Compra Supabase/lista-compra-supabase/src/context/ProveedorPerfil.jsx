import { useState, createContext } from 'react';
import useSupabase from "../hooks/useSupabase.js";

const ContextoPerfil = createContext();

const ProveedorPerfil = ({ children }) => {

    const {
        traerDatosSupabase,
        actualizarDatoSupabase
    } = useSupabase();

    const [listaPerfiles, setListaPerfiles] = useState([])


    const traerPerfilesSupabase = async () => {
        const data = await traerDatosSupabase("perfiles", "*")
        setListaPerfiles(data)
        return (data);
    }

    const actualizarPerfilesSupabase = async (registroPerfil) => {
        const perfilFormateado = {
            avatar: registroPerfil.avatar,
            nombre: registroPerfil.nombre,
            descripcion: registroPerfil.descripcion
        };

        await actualizarDatoSupabase("perfiles", "id", registroPerfil.id, perfilFormateado);
        await traerPerfilesSupabase();
    }

    const traerDatosPerfilesPorId = (idUsuario) => {
        return listaPerfiles.find(registro => registro.id_usuario === idUsuario) || null;
    }

    const datosInsertadosContexto = {
        listaPerfiles,
        traerPerfilesSupabase,
        actualizarPerfilesSupabase,
        traerDatosPerfilesPorId
    }
    return (
        <ContextoPerfil.Provider value={datosInsertadosContexto}>
            {children}
        </ContextoPerfil.Provider>
    )
}

export default ProveedorPerfil

export { ContextoPerfil };
