import { useState } from 'react';
import { supabase } from "../supabase/config.js";

const useListado = () => {

    const objetoListado = {
        nombre: "",
        descripcion: "",
        fechaCreacion: "",
        articulos: []
    }

    const [listadoCreado, setListadoCreado] = useState(objetoListado);
    const [listaListados, setListaListados] = useState([]);
    const [productoEnListado, setProductoEnListado] = useState(false);

    const adaptarProductoEnListado = () => {
        if(window.location.pathname === "/misListas"){
            setProductoEnListado(true);
        } else {
            setProductoEnListado(false);
        }
    }

    const actualizarDatoListado = (campo, valor) => {
        if (campo !== "articulos") {
            setListadoCreado(previo => ({ ...previo, [campo]: valor }))
        }
    }

    const traerListadosSupabase = async () => {
        const { data, error } = await supabase.from('lista').select('*');
        if (error) {
            throw new Error("No ha sido posible traer el listado de listas de Supabase.")
        } else {
            setListaListados(data);
        }
    }

    const agregarListadoSupabase = async (listado) => {
        const { data, error } = await supabase.from('lista').insert([
            {
                nombre: listado.nombre,
                descripcion: listado.descripcion
            }
        ])

        if (error) {
            throw new Error(error.message);
        }

    }

    const borrarListadoSupabase = async (id) => {
        const { data, error } = await supabase
            .from('lista')
            .delete()
            .eq('id', id);

        if (error) {
            throw new Error(error.message);
        }
    };

    const erroresFormularioListado = {
        nombre: "El nombre del listado debe contener 5 carácteres como mínimo.",
        descripcion: "La descripción del listado debe contener 25 carácteres como mínimo.",
    }

    return {
        listadoCreado,
        listaListados,
        productoEnListado,
        adaptarProductoEnListado,
        agregarListadoSupabase,
        borrarListadoSupabase,
        actualizarDatoListado,
        erroresFormularioListado,
        traerListadosSupabase
    }
}

export default useListado
