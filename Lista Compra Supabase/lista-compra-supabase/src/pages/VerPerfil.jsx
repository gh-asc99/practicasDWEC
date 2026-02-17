import perfil from "../assets/img/perfil.png";

const VerPerfil = () => {



    return (
        <>
            <div id='cuerpoVerPerfil'>
                <h3 id='tituloPagina'>Datos de usuario</h3>
                <div id='formDatosUsuario'>
                    <form>
                        <img src={perfil} alt="Foto de perfíl" />
                        <div className="campoFormulario">
                            <label htmlFor="nombre">Nombre: </label>
                            <input type="text" name="nombre" id="inputNombre"/>
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="descripcion">Descripción: </label>
                            <input type="text" name="descripcion" id="inputDescripcion"/>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default VerPerfil