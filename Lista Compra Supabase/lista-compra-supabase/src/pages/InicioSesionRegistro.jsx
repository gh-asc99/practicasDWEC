import { useState } from "react";
import "./InicioSesionRegistro.css";

const InicioSesionRegistro = () => {

    const datosFormularioRegistro = {
        "nombre": "",
        "correo": "",
        "password": ""
    }

    const [datosRegistro, setDatosRegistro] = useState(datosFormularioRegistro);

    const actualizarDatoRegistro = (valor, nombre) => {
        let datosRecogidos = datosRegistro;
        datosRecogidos[nombre] = valor;
        setDatosRegistro(datosRecogidos);
    }

    return (
        <>
            <div id="cuerpoInicioRegistro">
                <div id="marcoRegistro">
                    <h3>¿Todavía no te has registrado?</h3>
                    <form>
                        <div className="campoFormulario">
                            <label htmlFor="nombre"><strong>Nombre: </strong></label>
                            <input type="text" name="nombre" id="inputNombreRegistro" onChange={(evento) =>{
                                actualizarDatoRegistro(evento.target.value, evento.target.name);
                            }}/>
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="correo">Correo: </label>
                            <input type="email" name="correo" id="inputEmailRegistro" onChange={(evento) =>{
                                actualizarDatoRegistro(evento.target.value, evento.target.name);
                            }}/>
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="password"><strong>Contraseña: </strong></label>
                            <input type="password" name="password" id="inputPasswordRegistro" onChange={(evento) =>{
                                actualizarDatoRegistro(evento.target.value, evento.target.name);
                            }}/>
                        </div>
                        <div className="botonFormulario">
                            <input type="button" value="Registrarme" />
                        </div>
                    </form>
                </div>
                <div id="marcoLogin">
                    <h2>Accede a la App</h2>
                    <form>
                        <div className="campoFormulario">
                            <label htmlFor="inputEmail"><strong>Correo: </strong></label>
                            <input type="email" name="inputEmail" id="inputEmailLogin" />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="inputPassword"><strong>Contraseña: </strong></label>
                            <input type="password" name="inputPassword" id="inputPasswordLogin" />
                        </div>
                        <div className="botonFormulario">
                            <input type="button" value="Acceder" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InicioSesionRegistro;