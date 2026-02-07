import { useEffect } from "react"
import ProductoResumido from "./ProductoResumido.jsx";
import "./ListaAgregarProductos.css";
import useProducto from "../hooks/useProducto.js";

const ListaAgregarProductos = () => {

    const { listaProductos, 
      traerProductosSupabase } = useProducto();

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
