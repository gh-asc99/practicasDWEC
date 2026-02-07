import { supabase } from "../supabase/config";

const useSupabase = () => {

    const traerDatosSupabase = async (tabla, seleccion) => {
        const { data, error } = await supabase
            .from(tabla)
            .select(seleccion);

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }


    const borrarDatosSupabase = async (tabla, id) => {
            const { error } = await supabase
            .from(tabla)
            .delete()
            .eq('id', id);

        if (error) {
            throw new Error(error.message);
        }
    }

    const insertarDatoSupabase = async (tabla, objeto) => {
        const { error } = await supabase
            .from(tabla)
            .insert([objeto]);

        if (error) {
            throw new Error(error.message);
        }
    };

    const actualizarDatoSupabase = async (tabla, id, cambios) => {
        const { error } = await supabase
            .from(tabla)
            .update([cambios])
            .eq('id', id);

        if (error) {
            throw new Error(error.message);
        }
    };


  return {
    traerDatosSupabase,
    borrarDatosSupabase,
    insertarDatoSupabase,
    actualizarDatoSupabase
  }
}

export default useSupabase
