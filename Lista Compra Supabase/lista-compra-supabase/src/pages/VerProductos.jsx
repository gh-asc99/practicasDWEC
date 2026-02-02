import { useContext, useEffect, useState } from "react";
import { ContextoProducto } from "../context/ProveedorProducto.jsx";
import ProductoDetalles from "../components/ProductoDetalles.jsx";
import "./VerProductos.css";
import useSesion from "../hooks/useSesion.js";

const VerProductos = () => {
    const { traerProductosSupabase, listaProductos } = useContext(ContextoProducto);

    const { usuarioLogueado, comprobarSesion } = useSesion();

    const [filtroActivo, setFiltroActivo] = useState("nombre");
    const [ordenActivo, setOrdenActivo] = useState("");
    const [busquedaNombre, setBusquedaNombre] = useState("");
    const [busquedaPrecio, setBusquedaPrecio] = useState(0);
    const [busquedaPeso, setBusquedaPeso] = useState(0);

    const aplicarFiltro = (lista) => {
        switch (filtroActivo) {
            case "nombre":
                return lista.filter(p =>
                    p.nombre.toLowerCase().includes(busquedaNombre.toLowerCase())
                );
            case "precio":
                return lista.filter(p =>
                    p.precio <= busquedaPrecio
                );
            case "peso":
                return lista.filter(p =>
                    p.peso <= busquedaPeso
                );
            default:
                return lista;
        }
    };

    const aplicarOrden = (lista) => {
        switch (ordenActivo) {
            case "nombre":
                return [...lista].sort((a, b) =>
                    a.nombre.localeCompare(b.nombre)
                );
            case "precio":
                return [...lista].sort((a, b) =>
                    a.precio - b.precio
                );
            case "peso":
                return [...lista].sort((a, b) =>
                    a.peso - b.peso
                );
            default:
                return lista;
        }
    };

    let productosFiltrados = aplicarFiltro(listaProductos);
    productosFiltrados = aplicarOrden(productosFiltrados);


    const calcularPrecioMedioListado = () => {
        let precioTotal = 0;
        listaProductos.map(producto => precioTotal += producto.precio);
        const media = precioTotal / listaProductos.length;

        const precioMedioFormateado = (media).toLocaleString('es-ES', {
            style: 'currency',
            currency: 'EUR'
        })

        return precioMedioFormateado;
    }

    useEffect(() => {
        traerProductosSupabase();
        comprobarSesion();
    }, []);

    return (
        <div id="cuerpoVerProductos">
            <h3 id="tituloPagina">Listado de productos</h3>

            <div id="cuerpoCompleto">
                <div id="marcoListado">
                    {usuarioLogueado && (<>
                    <div id="barraBotones">
                        <div id="cuerpoFiltros">
                            <h4>Búscar por filtro</h4>
                            <div id="cuerpoFiltrarPorNombre" className="filtro">
                                <label htmlFor="inputBuscadorNombre"><strong>Filtrar por nombre: </strong></label>
                                <input type="search" name="inputBuscadorNombre" id="inputBuscadorNombre" value={busquedaNombre}
                                    onFocus={() => setFiltroActivo("nombre")}
                                    onChange={(evento) => {
                                        setBusquedaNombre(evento.target.value);
                                        aplicarFiltro(listaProductos);
                                    }} />
                            </div>
                            <div id="cuerpoFiltrarPorPrecio" className="filtro">
                                <label htmlFor="inputBuscadorPrecio"><strong>Filtrar por precio: </strong></label>
                                <input type="number" step="0.01" name="inputBuscadorPrecio" id="inputBuscadorPrecio" value={busquedaPrecio}
                                    onFocus={() => setFiltroActivo("precio")}
                                    onChange={(evento) => {
                                        setBusquedaPrecio(evento.target.value);
                                        aplicarFiltro(listaProductos);
                                    }} />
                            </div>
                            <div id="cuerpoFiltrarPorPeso" className="filtro">
                                <label htmlFor="inputBuscadorPeso"><strong>Filtrar por peso: </strong></label>
                                <input type="number" step="0.01" name="inputBuscadorPeso" id="inputBuscadorPeso" value={busquedaPeso}
                                    onFocus={() => setFiltroActivo("peso")}
                                    onChange={(evento) => {
                                        setBusquedaPeso(evento.target.value);
                                        aplicarFiltro(listaProductos);
                                    }} />
                            </div>
                        </div>

                        <div id="cuerpoOrdenar">
                            <h4>Ordenar por campo</h4>
                            <div id="cuerpoBotones">
                                <input type="button" value="Nombre" className="botonOrdenar" onClick={() => { setOrdenActivo("nombre"); aplicarOrden(productosFiltrados) }} />
                                <input type="button" value="Precio" className="botonOrdenar" onClick={() => { setOrdenActivo("precio"); aplicarOrden(productosFiltrados) }} />
                                <input type="button" value="Peso" className="botonOrdenar" onClick={() => { setOrdenActivo("peso"); aplicarOrden(productosFiltrados) }} />
                            </div>
                        </div>
                    </div>
                    </>)}

                    <div id="seccionListado">
                        <div id="contenedorListado">
                            {productosFiltrados.length
                                ? productosFiltrados.map((producto, index) => (
                                    <ProductoDetalles key={index} datos={producto} />
                                ))
                                : "No se han encontrado productos"}
                        </div>

                        <div id="valoresFinales">
                            <p><strong>Coste medio: </strong>{calcularPrecioMedioListado()}</p>
                            <p><strong>Productos totales: </strong>{listaProductos.length}</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default VerProductos;
