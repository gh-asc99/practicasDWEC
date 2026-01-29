import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/config.js";

const useSesion = () => {

    const navegar = useNavigate();

    const tituloErrores = {
        iniciarSesion: "No se ha podido iniciar sesión.",
        registro: "No se ha podido registrar al usuario."
    };

    const descripcionErrores = {
        iniciarSesion: "Revisa que los campos del formulario de inicio de sesión estén rellenados correctamente.",
        registro: "Revisa que los campos del formulario de registro estén rellenados correctamente."
    };

    const datosInicialesRegistro = {
        nombre: "",
        correo: "",
        password: ""
    };

    const datosInicialesLogin = {
        correo: "",
        password: ""
    };

    const [datosRegistro, setDatosRegistro] = useState(datosInicialesRegistro);
    const [datosLogin, setDatosLogin] = useState(datosInicialesLogin);

    const [usuarioLogueado, setUsuarioLogueado] = useState(false);
    const [nombreUsuario, setNombreUsuario] = useState(null);

    const [aviso, setAviso] = useState({
        visible: false,
        tipo: null,
        origen: null,
        titulo: "",
        descripcion: ""
    });

    const comprobarSesion = async () => {
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
            setUsuarioLogueado(true);
            setNombreUsuario(user.user_metadata.display_name ?? "");
        } else {
            setUsuarioLogueado(false);
            setNombreUsuario(null);
        }
    };

    const registrarUsuario = async () => {
        const { nombre, correo, password } = datosRegistro;

        const { error } = await supabase.auth.signUp({
            email: correo,
            password,
            options: {
                data: { display_name: nombre }
            }
        });

        if (error) return false;

        setDatosRegistro(datosInicialesRegistro);
        return true;
    };

    const iniciarSesion = async () => {
        const { correo, password } = datosLogin;

        const { data, error } = await supabase.auth.signInWithPassword({
            email: correo,
            password
        });

        if (error) return false;

        setUsuarioLogueado(true);
        setNombreUsuario(data.user.user_metadata.display_name ?? "");
        return true;
    };

    const cerrarSesion = async () => {
        await supabase.auth.signOut();
        setUsuarioLogueado(false);
        setNombreUsuario(null);
        navigate("/bienvenida");
    };

    const mostrarAvisoMensaje = (origen, titulo, descripcion) => {
        setAviso({
            visible: true,
            tipo: "mensaje",
            origen,
            titulo,
            descripcion
        });
    };

    const mostrarAvisoError = (origen) => {
        setAviso({
            visible: true,
            tipo: "error",
            origen,
            titulo: tituloErrores[origen],
            descripcion: descripcionErrores[origen]
        });
    };

    const ocultarAviso = () => {
        setAviso(prev => ({ ...prev, visible: false }));
    };

    const actualizarDatoRegistro = (valor, nombre) => {
        setDatosRegistro(prev => ({ ...prev, [nombre]: valor }));
    };

    const actualizarDatoLogin = (valor, nombre) => {
        setDatosLogin(prev => ({ ...prev, [nombre]: valor }));
    };

    
/*
    useEffect(() => { //pasar al contexto los useEffect aquellas tarea que quiero que se ejecute una sola vez
        comprobarSesion();

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                if (session?.user) {
                    setUsuarioLogueado(true);
                    setNombreUsuario(session.user.user_metadata.display_name ?? "");
                } else {
                    setUsuarioLogueado(false);
                    setNombreUsuario(null);
                }
            }
        );

        return () => listener.subscription.unsubscribe();
    }, []);
*/
    return {
        usuarioLogueado,
        nombreUsuario,
        aviso,
        comprobarSesion,
        registrarUsuario,
        iniciarSesion,
        cerrarSesion,
        mostrarAvisoMensaje,
        mostrarAvisoError,
        ocultarAviso,
        actualizarDatoRegistro,
        actualizarDatoLogin,
        navegar
    };
};

export default useSesion;
