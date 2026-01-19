import Contenedor from "./Contenedor";

const ContenedorPiePagina = (props) => {
    return(
        <>
        <Contenedor clase={props.clase}>
            <small><strong>Desarrollador: </strong>Alejandro Soler Cruz</small>
            <small><strong>Asignatura: </strong>Desarrollo Web en Entorno Cliente</small>
            <small><strong>Curso: </strong>2º DAW</small>
        </Contenedor>
        </>
    )
}

export default ContenedorPiePagina;