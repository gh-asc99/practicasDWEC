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

    const actualizarDatoSupabase = async (tabla, columnaId, id, cambios) => {
        const { error } = await supabase
            .from(tabla)
            .update(cambios)
            .eq(columnaId, id);

        if (error) {
            throw new Error(error.message);
        }
    };

    const agregarProductoAListadoSupabase = async (listaId, productoId) => {
        const { error } = await supabase
            .from('lista_producto')
            .insert([
                {
                    id_lista: listaId,
                    id_producto: productoId,
                    cantidad: 1,
                    comprado: false
                }
            ]);

        if (error) {
            throw new Error(error.message);
        }
    };

    const quitarProductoAListadoSupabase = async (listaId, productoId) => {
        const { error } = await supabase
            .from('lista_producto')
            .delete('*')
            .eq('id_lista', listaId)
            .eq('id_producto', productoId);

        if (error) {
            throw new Error(error.message);
        }
    };

    const sumarORestarUnidadAProductoEnListadoSupabase = async (listaId, productoId, operacion) => {
        const cantidadActual = await obtenerCantidadDelProductoEnListado(listaId, productoId);

        let nuevaCantidad;

        if (nuevaCantidad < 0) {
            return;
        }

        if (operacion === "sumar") {
            nuevaCantidad = cantidadActual + 1;
        } else if (operacion === "restar") {
            nuevaCantidad = cantidadActual - 1;
        } else {
            throw new Error("Operación no válida");
        }

        const { error } = await supabase
            .from('lista_producto')
            .update({ cantidad: nuevaCantidad })
            .eq('id_lista', listaId)
            .eq('id_producto', productoId);

        if (error) {
            throw new Error(error.message);
        }
    };

    const comprobarSiExisteFilaEnSupabase = async (listaId, productoId) => {
        const { data, error } = await supabase.from('lista_producto').select('*')
            .eq('id_lista', listaId)
            .eq('id_producto', productoId);
        if (error) {
            return false;
        }
        return data.length > 0;
    };

    const obtenerCantidadDelProductoEnListado = async (listaId, productoId) => {
        const { data, error } = await supabase.from('lista_producto').select('cantidad')
            .eq('id_lista', listaId)
            .eq('id_producto', productoId)
            .single();
        if (error) {
            throw new Error(error.message);
        }
        return data.cantidad;
    }

    return {
        traerDatosSupabase,
        borrarDatosSupabase,
        insertarDatoSupabase,
        actualizarDatoSupabase,
        agregarProductoAListadoSupabase,
        quitarProductoAListadoSupabase,
        sumarORestarUnidadAProductoEnListadoSupabase,
        comprobarSiExisteFilaEnSupabase,
        obtenerCantidadDelProductoEnListado
    }
}

export default useSupabase
