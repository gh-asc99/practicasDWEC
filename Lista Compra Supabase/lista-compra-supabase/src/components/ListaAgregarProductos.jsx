import { useContext, useEffect } from "react"
import { ContextoProducto } from "../context/ProveedorProducto.jsx"
import ProductoResumido from "./ProductoResumido.jsx";
import "./ListaAgregarProductos.css";

const ListaAgregarProductos = () => {

    const { listaProductos, traerProductosSupabase } = useContext(ContextoProducto);

    const listadoDeProductos = listaProductos;

    useEffect(()=> {
        traerProductosSupabase();
    }, [])

  return (
    <>
    <div id="marcoAgregarProductos">
        <h4>Listado de productos</h4>
        {listadoDeProductos.length ? listadoDeProductos.map((producto, index) => (<ProductoResumido key={index} datos={producto}/>))
        : "No se han encontrado productos."}
    </div>
    </>
  )
}

export default ListaAgregarProductos
