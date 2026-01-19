import "./Inicio.css";

const Inicio = () => {
    return (
        <>
            <div id="cuerpoInicio">
                <h3>¡Bienvenido a la aplicación <em>Lista de la compra</em>!</h3>
                <h5>Aquí tienes un breve tutorial para poder usar la app.</h5>
                <ul>
                    <li>Empieza por crear nuevos productos en <strong>Nuevo producto</strong>.</li>
                    <li>Podrás consultar los productos creados en <strong>Mis productos</strong>.</li>
                    <li>Luego crea tus listas desde la sección <strong>Nuevo listado</strong>.</li>
                    <li>Podrás consultar los listados creados en <strong>Mis listas</strong>.</li>
                </ul>
            </div>
        </>
    )

}

export default Inicio;