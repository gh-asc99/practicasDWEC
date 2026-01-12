const PieDePagina = (props) => {
    return(
        <>
            <div className="contenedorPieDePagina">
                <small><strong>Desarrollador: </strong>{props.autor}</small>
                <small><strong>Asignatura: </strong>{props.asignatura}</small>
                <small><strong>Curso: </strong>{props.curso}</small>
            </div>
        </>
    )
}

export default PieDePagina;