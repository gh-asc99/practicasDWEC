import { createContext } from 'react'
import { useState } from 'react';
import { supabase } from "../supabase/config.js";
import useSupabase from "../hooks/useSupabase.js";

const ContextoListado = createContext();

const ProveedorListado = ({children}) => {

      const { traerDatosSupabase,
        borrarDatosSupabase,
        insertarDatoSupabase
    } = useSupabase();

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
    const [precioTotalListado, setPrecioTotalListado] = useState(0);
    const [pesoTotalListado, setPesoTotalListado] = useState(0);

    const cambiarPrecioTotalListado = (valor) => {
        setPrecioTotalListado(valor);
    }

    const cambiarPesoTotalListado = (valor) => {
        setPesoTotalListado(valor);
    }

    const cambiarListadoSeleccionado = (datos) => {
        setListadoSeleccionado(datos);
    }

    const cambiarModoIncluirProductos = () => {
        setModoIncluirProductos(!modoIncluirProductos);
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
        const data = await traerDatosSupabase(
            "lista",
            `id,
         nombre,
         descripcion,
         fechaCreacion,
         lista_producto (
            cantidad,
            comprado,
            producto (
                id,
                nombre,
                descripcion,
                precio,
                peso,
                categoria,
                imagen
            )
         )`
        );
        setListaListados(data);

    }

    const agregarListadoSupabase = async (listado) => {
        const listadoFormateado = {
            nombre: listado.nombre,
            descripcion: listado.descripcion
        };

        await insertarDatoSupabase("lista", listadoFormateado);
    }

    const borrarListadoSupabase = async (id) => {
        await borrarDatosSupabase("lista", id);
    };

    const erroresFormularioListado = {
        nombre: "El nombre del listado debe contener 5 carácteres como mínimo.",
        descripcion: "La descripción del listado debe contener 25 carácteres como mínimo.",
    }

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

    const calcularPrecioYPesoTotalListado = (listaId) => {
        cambiarPrecioTotalListado(0);
        cambiarPesoTotalListado(0);

        let totalPrecioListado = 0;
        let totalPesoListado = 0;

        const listadoFiltrado = listaListados.filter(lista => lista.id === listaId)[0];

        if (listadoFiltrado.length === 0 || !listadoFiltrado.lista_producto) {
            return 0;
        }

        listadoFiltrado.lista_producto.map(registro => {
            const cantidad = registro.cantidad;

            totalPrecioListado += registro.producto.precio * cantidad;
            totalPesoListado += registro.producto.peso * cantidad;
        });

        cambiarPrecioTotalListado(totalPrecioListado);
        cambiarPesoTotalListado(totalPesoListado);
    }

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

    const incluirUnidadDeProductoAListadoSupabase = async (listaId, productoId) => {
        if (await comprobarSiExisteFilaEnSupabase(listaId, productoId)) {
            await sumarORestarUnidadAProductoEnListadoSupabase(listaId, productoId, "sumar")
        } else {
            await agregarProductoAListadoSupabase(listaId, productoId);
        }

        await traerListadosSupabase();
    }

    const quitarUnidadDeProductoAListadoSupabase = async (listaId, productoId) => {
        if (await comprobarSiExisteFilaEnSupabase(listaId, productoId)) {
            const cantidadActual = await obtenerCantidadDelProductoEnListado(listaId, productoId);
            if (cantidadActual > 1) {
                await sumarORestarUnidadAProductoEnListadoSupabase(listaId, productoId, "restar")
            } else {
                await quitarProductoAListadoSupabase(listaId, productoId);
            }
        }

        await traerListadosSupabase();
    }

    const calcularPesoListado = (listaId) => {
        let pesoTotal = 0;

        const listadoFiltrado = listaListados.filter(lista => lista.id === listaId)[0];

        if (!listadoFiltrado || !listadoFiltrado.lista_producto) {
            return 0;
        }

        listadoFiltrado.lista_producto.map(registro => {
            pesoTotal += registro.producto.peso * registro.cantidad;
        });

        return pesoTotal;
    };


    const datosInsertadosContexto = {
        listadoCreado,
        listaListados,
        productoEnListado,
        listadoDetallesAbierto,
        listadoABorrar,
        modoBorradoListado,
        listadoSeleccionado,
        modoIncluirProductos,
        precioTotalListado,
        pesoTotalListado,
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
        incluirUnidadDeProductoAListadoSupabase,
        quitarUnidadDeProductoAListadoSupabase,
        calcularPrecioYPesoTotalListado,
        calcularPesoListado
    }

    return (
    <ContextoListado.Provider value={datosInsertadosContexto}>
        {children}
    </ContextoListado.Provider>
  )

}

export default ProveedorListado

export {ContextoListado}