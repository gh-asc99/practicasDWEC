import { useState } from "react";
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

    const actualizarDatoProducto = (campo, valor) => {
        setProductoCreado(previo => ({ ...previo, [campo]: valor }))
    }

    const agregarProducto = async (producto) => {
        const { data, error } = await supabase.from('producto').insert([
            {
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                peso: producto.peso,
                precio: producto.precio,
                categoria: producto.categoria,
                imagen: producto.imagen
            }
        ])

        if (error) {
            throw new Error("No ha sido posible agregar el producto al listado de Supabase.")
        } else {
            setProductoCreado(objetoProducto);
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



    return {
        objetoProducto,
        productoCreado,
        actualizarDatoProducto,
        agregarProducto,
        traerProductosSupabase,
        listaProductos
    }
}

export default useProducto;