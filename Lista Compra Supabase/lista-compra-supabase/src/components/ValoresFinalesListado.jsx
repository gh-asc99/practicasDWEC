import { useContext, useEffect } from 'react'
import { ContextoListado } from '../context/ProveedorListado.jsx'
import "./ValoresFinalesListado.css";

const ValoresFinalesListado = (props) => {

    const { calcularPrecioYPesoTotalListado,
        precioTotalListado,
        pesoTotalListado,
        traerListadosSupabase,
        listaListados
    } = useContext(ContextoListado);

    const precio = (precioTotalListado).toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR'
    });

    const formateadorPeso = new Intl.NumberFormat('es-ES', {
        style: 'unit',
        unit: 'gram',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const peso = formateadorPeso.format(pesoTotalListado);

    const fecha = new Date(props.fecha);

    const fechaEuropea = fecha.toLocaleDateString('es-ES');

    useEffect(() => {
        calcularPrecioYPesoTotalListado(props.idListado)
        traerListadosSupabase();
    }, [listaListados]);

    return (
        <div className='valoresFinalesLista'>
            <p><strong>Peso total: </strong>{peso}</p>
            <p><strong>Precio total: </strong>{precio}</p>
            <p><strong>Fecha de creación: </strong>{fechaEuropea}</p>
        </div>
    )
}

export default ValoresFinalesListado