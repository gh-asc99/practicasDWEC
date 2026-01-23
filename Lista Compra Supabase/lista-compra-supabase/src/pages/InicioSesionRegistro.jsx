import { useContext, useState } from "react";
import "./InicioSesionRegistro.css";
import { ContextoSesion } from "../context/ProveedorSesion.jsx";
import Aviso from "../components/Aviso.jsx";

const InicioSesionRegistro = () => {

    const { actualizarDatoRegistro, actualizarDatoLogin, registrarUsuario, iniciarSesion, navegar, mostrarAviso } = useContext(ContextoSesion);

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
                            <input type="button" value="Registrarme" onClick={() => {
                                registrarUsuario();
                                mostrarAviso();
                            }}/>
                        </div>
                    </form>
                </div>
                <div id="marcoLogin">
                    <h2>Accede a la App</h2>
                    <form>
                        <div className="campoFormulario">
                            <label htmlFor="correo"><strong>Correo: </strong></label>
                            <input type="email" name="correo" id="inputEmailLogin" onChange={(evento) => {
                                actualizarDatoLogin(evento.target.value, evento.target.name)
                            }}/>
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="password"><strong>Contraseña: </strong></label>
                            <input type="password" name="password" id="inputPasswordLogin" onChange={(evento) => {
                                actualizarDatoLogin(evento.target.value, evento.target.name)
                            }}/>
                        </div>
                        <div className="botonFormulario">
                            <input type="button" value="Acceder" onClick={() => {
                                iniciarSesion();
                                navegar("/");
                            }}/>
                        </div>
                    </form>
                </div>
                <Aviso titulo="Confirmación de correo." descripcion = "Si el correo que has usado es válido, deberá llegarte un nuevo correo a tu email con el enlace de confirmación para activar tu cuenta."/>
            </div>
        </>
    )
}

export default InicioSesionRegistro;