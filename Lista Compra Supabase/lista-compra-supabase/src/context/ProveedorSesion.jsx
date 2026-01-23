import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/config.js";

const ContextoSesion = createContext();

const ProveedorSesion = ({ children }) => {

    const datosInicialesFormularioRegistro = {
        "nombre": "",
        "correo": "",
        "password": ""
    }

    const datosInicialesFormularioLogin = {
        "correo": "",
        "password": ""
    }

    const [datosRegistro, setDatosRegistro] = useState(datosInicialesFormularioRegistro);
    const [datosLogin, setDatosLogin] = useState(datosInicialesFormularioLogin);
    const [usuarioLogueado, setUsuarioLogueado] = useState(null);
    const [nombreUsuario, setNombreUsuario] = useState(null);


    const navegar = useNavigate();

const comprobarUsuarioLogueado = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
        setUsuarioLogueado(true);
        setNombreUsuario(user.user_metadata.display_name);
    } else {
        setUsuarioLogueado(false);
        setNombreUsuario(null);
    }
};


    const registrarUsuario = async () => {
        const { nombre, correo, password } = datosRegistro;
        const { data, error } = await supabase.auth.signUp({
            email: correo,
            password: password,
            options: {
                data: {
                    display_name: nombre
                }
            }
        })
        if (error) {
            console.log(error.message);
            //Crear componente error (modo confirm)
        } else {
            console.log("usuario creado");
            //Crear cuadro mensaje de "se ha enviado confirmación al correo electrónico"
            setDatosRegistro(datosInicialesFormularioRegistro);
        }
    }

    const iniciarSesion = async () => {
        const { correo, password } = datosLogin;
        const { data, error } = await supabase.auth.signInWithPassword({
            email: correo,
            password: password
        })
        setUsuarioLogueado(true);

        if (error) {
            console.log(error.message);
            //Reutilizar componente error
        } else {
            console.log("Usuario logueado correctamente.")
            //Crear cuadro mensaje de "se ha enviado confirmación al correo electrónico"
        }
    };

    const [avisoVisible, setAvisoVisible] = useState(false);

    const mostrarAviso = () => {
        setAvisoVisible(true);
    }

    const ocultarAviso = () => {
        setAvisoVisible(false);
    }

    const cerrarSesion = async () => {
        await supabase.auth.signOut();
        setUsuarioLogueado(false);
    }

    const actualizarDatoRegistro = (valor, nombre) => {
        setDatosRegistro(datosPrevios => ({ ...datosPrevios, [nombre]: valor }));
    }

    const actualizarDatoLogin = (valor, nombre) => {
        setDatosLogin(datosPrevios => ({ ...datosPrevios, [nombre]: valor }))
    }

    useEffect(() => {
        comprobarUsuarioLogueado();
    }, []);

    const elementosExportados = {
        navegar,
        actualizarDatoRegistro,
        actualizarDatoLogin,
        registrarUsuario,
        iniciarSesion,
        usuarioLogueado,
        cerrarSesion,
        nombreUsuario,
        avisoVisible,
        ocultarAviso,
        mostrarAviso
    };
    return (
        <ContextoSesion.Provider value={elementosExportados}>{children}</ContextoSesion.Provider>
    )
}

export default ProveedorSesion;

export { ContextoSesion };