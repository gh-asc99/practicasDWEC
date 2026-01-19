import "./Contenedor.css";

const Contenedor = (props) => {
    return (
        <>
            <div className={props.clase}>
                <h3>{props.titulo}</h3>
                <div>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Contenedor;