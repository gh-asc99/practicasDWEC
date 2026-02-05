import { useContext, useState } from "react";
import "./InicioSesionRegistro.css";
import { ContextoSesion } from "../context/ProveedorSesion.jsx";
import { ContextoAviso } from "../context/ProveedorAviso.jsx";

const InicioSesionRegistro = () => {

    const { mostrarAviso } = useContext(ContextoAviso);

    const { actualizarDatoRegistro, 
        actualizarDatoLogin, 
        registrarUsuario, 
        iniciarSesion, 
        navegar} = useContext(ContextoSesion);

    return (
        <>
            <div id="cuerpoInicioRegistro">
                <div id="marcoRegistro">
                    <h3>¿Todavía no te has registrado?</h3>
                    <form id="formularioRegistro">
                        <div className="campoFormulario">
                            <label htmlFor="nombre"><strong>Nombre: </strong></label>
                            <input type="text" name="nombre" id="inputNombreRegistro" onChange={(evento) => {
                                actualizarDatoRegistro(evento.target.value, evento.target.name);
                            }} />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="correo"><strong>Correo: </strong></label>
                            <input type="email" name="correo" id="inputEmailRegistro" onChange={(evento) => {
                                actualizarDatoRegistro(evento.target.value, evento.target.name);
                            }} />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="password"><strong>Contraseña: </strong></label>
                            <input type="password" name="password" id="inputPasswordRegistro" onChange={(evento) => {
                                actualizarDatoRegistro(evento.target.value, evento.target.name);
                            }} />
                        </div>
                        <div className="botonFormulario">
                            <input
                                type="button"
                                value="Registrarme"
                                onClick={async () => {
                                    const ok = await registrarUsuario();
                                    if (ok) {
                                        mostrarAviso({
                                            tipo: "exito",
                                            titulo: "Registro correcto",
                                            mensaje: "Revisa tu correo para confirmar la cuenta"
                                        });
                                    } else {
                                        mostrarAviso({
                                            tipo: "error",
                                            titulo: "Registro fallido",
                                            mensaje: "Comprueba que has rellenado los datos del formulario de registro de forma correcta."
                                        });

                                    }
                                }}
                            />
                        </div>
                    </form>
                </div>
                <div id="marcoLogin">
                    <h2>Accede a la App</h2>
                    <form id="formularioLogin">
                        <div className="campoFormulario">
                            <label htmlFor="correo"><strong>Correo: </strong></label>
                            <input type="email" name="correo" id="inputEmailLogin" onChange={(evento) => {
                                actualizarDatoLogin(evento.target.value, evento.target.name)
                            }} />
                        </div>
                        <div className="campoFormulario">
                            <label htmlFor="password"><strong>Contraseña: </strong></label>
                            <input type="password" name="password" id="inputPasswordLogin" onChange={(evento) => {
                                actualizarDatoLogin(evento.target.value, evento.target.name)
                            }} />
                        </div>
                        <div className="botonFormulario">
                            <input
                                type="button"
                                value="Acceder"
                                onClick={async () => {
                                    const ok = await iniciarSesion();
                                    if (ok) {
                                        navegar("/");
                                    } else {
                                            mostrarAviso({
                                            tipo: "error",
                                            titulo: "Login fallido",
                                            mensaje: "Comprueba que has rellenado los datos del formulario de inicio de sesión de forma correcta."
                                        });
                                    }
                                }}
                            />

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InicioSesionRegistro;