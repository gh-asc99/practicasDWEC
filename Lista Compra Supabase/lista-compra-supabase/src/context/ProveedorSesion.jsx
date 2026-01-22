import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/config";

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

    const navegar = useNavigate();

    const registrarUsuario = async () => {
        const {nombre, correo, password} = datosRegistro;
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
        const {correo, password} = datosLogin;
        const {data, error} = await supabase.auth.signInWithPassword({
            email: correo,
            password: password
        })

        if(error){
            console.log(error.message);
            //Reutilizar componente error
        } else{
            console.log("Usuario logueado correctamente.")
            //Crear cuadro mensaje de "se ha enviado confirmación al correo electrónico"
        }
    };

    const actualizarDatoRegistro = (valor, nombre) => {
        setDatosRegistro(datosPrevios => ({ ...datosPrevios, [nombre]: valor }));
    }

    const actualizarDatoLogin = (valor,nombre) => {
        setDatosLogin(datosPrevios => ({...datosPrevios, [nombre]: valor}))
    }

    const elementosExportados = { navegar, actualizarDatoRegistro, actualizarDatoLogin, registrarUsuario, iniciarSesion };
    return (
        <ContextoSesion.Provider value={elementosExportados}>{children}</ContextoSesion.Provider>
    )
}

export default ProveedorSesion;

export { ContextoSesion };