import { createContext, useEffect } from "react";
import useSesion from "../hooks/useSesion.js";
import { supabase } from "../supabase/config.js";

const ContextoSesion = createContext();

const ProveedorSesion = ({ children }) => {

    const sesion = useSesion();
    const { comprobarSesion } = sesion;
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
    return (
        <ContextoSesion.Provider value={sesion}>
            {children}
        </ContextoSesion.Provider>
    );
};

export default ProveedorSesion;
export { ContextoSesion };
