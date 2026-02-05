import { useState } from 'react';
import { supabase } from "../supabase/config.js";

const useListado = () => {

    const objetoListado = {
        nombre: "",
        descripcion: "",
        fechaCreacion: ""
    }

    const [listadoCreado, setListadoCreado] = useState(objetoListado);
    const [listaListados, setListaListados] = useState([]);
    const [modoBorradoListado, setModoBorradoListado] = useState(false);
    const [listadoABorrar, setListadoABorrar] = useState(null);
    const [productoEnListado, setProductoEnListado] = useState(false);
    const [listadoSeleccionado, setListadoSeleccionado] = useState(null);
    const [modoIncluirProductos, setModoIncluirProductos] = useState(false);
    const [listadoDetallesAbierto, setListadoDetallesAbierto] = useState("");
    const cambiarListadoSeleccionado = (datos) => {
        setListadoSeleccionado(datos);
    }

    const cambiarModoIncluirProductos = () => {
        setModoIncluirProductos(true);
    }

    const cambiarModoBorradoListado = (boolean) => {
        setModoBorradoListado(boolean);
    }

    const cambiarListadoABorrar = (elemento) => {
        setListadoABorrar(elemento);
    }

    const mostrarOcutarDatosSecundarios = (id) => {
        setListadoDetallesAbierto(prev => prev === id ? "" : id);
    };

    const adaptarProductoEnListado = () => {
        if (window.location.pathname === "/misListas") {
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
        const { data, error } = await supabase.from('lista').select(`id, nombre, descripcion, fechaCreacion,
            lista_producto (cantidad, comprado, 
            producto (id,nombre, descripcion, precio, peso, categoria, imagen)
            )`);
        if (error) {
            throw new Error("No ha sido posible traer las listas de Supabase.")
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

    const agregarProductoAListadoSupabase = async ({ listaId, productoId, cantidad }) => {
        const { error } = await supabase
            .from('lista_producto')
            .insert([
                {
                    lista_id: listaId,
                    producto_id: productoId,
                    cantidad: cantidad,
                    comprado: false
                }
            ]);

        if (error) {
            throw new Error(error.message);
        }
    };

    return {
        listadoCreado,
        listaListados,
        productoEnListado,
        listadoDetallesAbierto,
        listadoABorrar,
        modoBorradoListado,
        listadoSeleccionado,
        modoIncluirProductos,
        cambiarListadoSeleccionado,
        cambiarModoIncluirProductos,
        cambiarModoBorradoListado,
        cambiarListadoABorrar,
        adaptarProductoEnListado,
        agregarListadoSupabase,
        borrarListadoSupabase,
        actualizarDatoListado,
        erroresFormularioListado,
        traerListadosSupabase,
        mostrarOcutarDatosSecundarios,
        agregarProductoAListadoSupabase
    }
}

export default useListado
