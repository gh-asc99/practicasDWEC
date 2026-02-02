import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/config.js";

const useSesion = () => {

    const navegar = useNavigate();

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
        })

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
        navegar("/bienvenida");
    };

    const actualizarDatoRegistro = (valor, nombre) => {
        setDatosRegistro(prev => ({ ...prev, [nombre]: valor }));
    };

    const actualizarDatoLogin = (valor, nombre) => {
        setDatosLogin(prev => ({ ...prev, [nombre]: valor }));
    };

    return {
        usuarioLogueado,
        nombreUsuario,
        comprobarSesion,
        registrarUsuario,
        iniciarSesion,
        cerrarSesion,
        actualizarDatoRegistro,
        actualizarDatoLogin,
        navegar
    };
};

export default useSesion;
