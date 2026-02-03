import { useEffect, useState } from "react";
import { supabase } from "../supabase/config.js";

const useProducto = () => {

    const objetoProducto = {
        nombre: "",
        descripcion: "",
        peso: "",
        precio: "",
        categoria: "",
        imagen: ""
    }

    const [productoCreado, setProductoCreado] = useState(objetoProducto);
    const [listaProductos, setListaProductos] = useState([]);
    const [modoBorrado, setModoBorrado] = useState(false);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [productoABorrar, setProductoABorrar] = useState(null);
    const [productoAEditar, setProductoAEditar] = useState(null);


    const cambiarModoBorrado = (boolean) => {
        setModoBorrado(boolean);
    }

    const cambiarModoEdicion = (boolean) => {
        setModoEdicion(boolean);
    }

    const cambiarProductoABorrar = (elemento) => {
        setProductoABorrar(elemento);
    }

    const cambiarProductoAEditar = (elemento) => {
        setProductoAEditar(elemento);
    }

    const actualizarDatoProducto = (campo, valor) => {
        setProductoCreado(previo => ({ ...previo, [campo]: valor }))
    }

    const agregarProductoSupabase = async (producto) => {
        const { data, error } = await supabase.from('producto').insert([
            {
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                peso: Number(producto.peso),
                precio: Number(producto.precio),
                categoria: producto.categoria,
                imagen: producto.imagen
            }
        ])

        if (error) {
            throw new Error(error.message);
        }

    }

    const actualizarProductoSupabase = async (producto) => {
        const { data, error } = await supabase
        .from('producto')
        .update([
            {
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                peso: Number(producto.peso),
                precio: Number(producto.precio),
                categoria: producto.categoria,
                imagen: producto.imagen
            }
        ])
        .eq('id', producto.id);

        if (error) {
            throw new Error(error.message);
        }

    }

    const traerProductosSupabase = async () => {
        const { data, error } = await supabase.from('producto').select('*');
        if (error) {
            throw new Error("No ha sido posible traer el listado de productos de Supabase.")
        } else {
            setListaProductos(data);
        }
    }

    const borrarProductoSupabase = async (id) => {
        const { data, error } = await supabase
            .from('producto')
            .delete()
            .eq('id', id);

        if (error) {
            throw new Error(error.message);
        }
    };

    const erroresFormularioProducto = {
        nombre: "El nombre del producto debe contener 5 carácteres como mínimo.",
        descripcion: "La descripción del producto debe contener 25 carácteres como mínimo.",
        peso: "El peso del producto debe ser mayor que 0.",
        precio: "El precio del producto debe ser mayor que 0.",
        categoria: "Debes seleccionar alguna categoría para el producto.",
        imagen: "La imagen del producto debe corresponderse con una URL válida."
    }

    return {
        erroresFormularioProducto,
        objetoProducto,
        productoCreado,
        actualizarDatoProducto,
        agregarProductoSupabase,
        actualizarProductoSupabase,
        traerProductosSupabase,
        borrarProductoSupabase,
        listaProductos,
        cambiarModoBorrado,
        cambiarModoEdicion,
        cambiarProductoABorrar,
        cambiarProductoAEditar,
        modoBorrado,
        modoEdicion,
        productoABorrar,
        productoAEditar
    }
}

export default useProducto;