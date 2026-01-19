import Contenedor from "./Contenedor.jsx"

const ContenedorIniciarSesion = (props) => {
    return (
        <>
            <Contenedor titulo={props.titulo} clase={props.clase}>
                <input type="button" value="Iniciar sesión"/>
            </Contenedor>
        </>
    )
}

export default ContenedorIniciarSesion;