const InicioSesionRegistro = () => {
    return(
        <>
        <div id="cuerpoInicioRegistro">
            <div id="marcoRegistro">
                <form>
                    <div>
                    <label htmlFor="inputNombre">Nombre: </label>
                    <input type="text" name="inputNombre" id="inputNombre" />
                    </div>
                    <label htmlFor="inputEmail">Correo: </label>
                    <input type="email" name="inputEmail" id="inputEmail" />

                </form>
            </div>
        </div>
        </>
    )
}

export default InicioSesionRegistro;