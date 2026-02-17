import "./AdministrarRoles.css";
import useSesion from "../hooks/useSesion.js";
import useRol from "../hooks/useRol.js";
import { useEffect, useState, useContext } from "react";
import { ContextoAviso } from "../context/ProveedorAviso.jsx";

const AdministrarRoles = () => {

  const { mostrarAviso } = useContext(ContextoAviso);

  const {
    usuarioLogueado,
    nombreUsuario,
    traerIdUsuarioLogueado
  } = useSesion();

  const {
    traerDatosRolesPorId,
    traerRolesSupabase,
    actualizarRolesSupabase
  } = useRol()

  const datosRolUsuarioLogueado = traerDatosRolesPorId() || {};
  const rolInicial = datosRolUsuarioLogueado.rol ? datosRolUsuarioLogueado.rol : "usuario";

  const [rolUsuario, setRolUsuario] = useState(rolInicial)

  useEffect(() => {
    traerRolesSupabase()
  }, [])

  useEffect(() => {
  if (datosRolUsuarioLogueado.rol) {
    setRolUsuario(datosRolUsuarioLogueado.rol);
  }
}, [datosRolUsuarioLogueado.rol]);


  const valorNombreUsuario = usuarioLogueado ? nombreUsuario : "";
  return (
    <>
      <div id="cuerpoAdministrarRoles">
        <h3 id="tituloAdministrarRoles">Cambiar rol de los usuarios</h3>
        <div id="contFormAdministrarRol">
          <form>
            <div className="campoFormulario">
              <label htmlFor="nombre">Usuario: </label>
              <input type="text" name="nombre" id="inputNombre" value={valorNombreUsuario} readOnly />
            </div>
            <div className="campoFormulario">
              <label htmlFor="correo">Correo: </label>
              <input type="text" name="correo" id="inputCorreo" value={datosRolUsuarioLogueado.correo || ""} readOnly />
            </div>
            <div className="campoFormulario">
              <label htmlFor="roles">Rol: </label>
              <select name="roles" id="roles" onChange={(evento) => {
                setRolUsuario(evento.target.value)
              }}>
                <option value="usuario">Usuario</option>
                <option value="administrador">Administrador</option>
              </select>
            </div>
            <div id="botonAsignarRol">
              <input type="button" value="Asignar rol" onClick={async () => {
                const idUsuarioLogueado = await traerIdUsuarioLogueado();
                
                actualizarRolesSupabase({
                  id_rol: idUsuarioLogueado,
                  correo: datosRolUsuarioLogueado.correo,
                  rol: rolUsuario
                });
                mostrarAviso({
                  tipo: "exito",
                  titulo: "Rol actualizado correctamente",
                  mensaje: `Ahora el usuario ${valorNombreUsuario} tiene permisos de ${rolUsuario}.`
                });
              }} />
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default AdministrarRoles