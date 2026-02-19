import darth from "../assets/img/perfil/darthVader.png";
import dead from "../assets/img/perfil/deadpool.png";
import gato from "../assets/img/perfil/gato.png";
import god from "../assets/img/perfil/godOfWar.png";
import mickey from "../assets/img/perfil/mickey.png";
import pikachu from "../assets/img/perfil/pikachu.png";
import usePerfil from "../hooks/usePerfil.js";
import useSesion from "../hooks/useSesion.js";
import useAviso from "../hooks/useAviso.js";
import "./ImagenesPerfil.css";

const ImagenesPerfil = () => {
  const {
    traerPerfilesSupabase,
    traerDatosPerfilesPorId,
    actualizarPerfilesSupabase
  } = usePerfil();

  const { mostrarAviso } = useAviso();

  const { traerIdUsuarioLogueado } = useSesion();

  const cambiarAvatar = async (nuevaImagen) => {
    try {
      await traerPerfilesSupabase();

      const idUsuario = await traerIdUsuarioLogueado();
      const perfilActual = traerDatosPerfilesPorId(idUsuario);

      if (perfilActual) {
        await actualizarPerfilesSupabase({
          id: perfilActual.id,
          nombre: perfilActual.nombre,
          descripcion: perfilActual.descripcion,
          avatar: nuevaImagen
        });
        mostrarAviso({
          tipo: "exito",
          titulo: "Avatar actualizado correctamente",
          mensaje: "¡Esto sí que es un perfil con estilo!"
        });
      } else {
        mostrarAviso({
          tipo: "error",
          titulo: "No se ha encontrado el perfil del usuario",
          mensaje: "No es posible cambiar el avatar de tu usuario ahora mismo."
        });
      }
    } catch (error) {
      mostrarAviso({
        tipo: "error",
        titulo: "Error al actualizar el avatar",
        mensaje: error.message
      });
    }
  };
  return (
    <>
      <div id="marcoImagenesPerfil">
        <img src={darth} alt="Darth Vader" onClick={() => { cambiarAvatar(darth); }} />
        <img src={dead} alt="Deadpool" onClick={() => { cambiarAvatar(dead) }} />
        <img src={gato} alt="Gato anime" onClick={() => { cambiarAvatar(gato) }} />
        <img src={god} alt="God of war" onClick={() => { cambiarAvatar(god) }} />
        <img src={mickey} alt="Mickey mouse" onClick={() => { cambiarAvatar(mickey) }} />
        <img src={pikachu} alt="Pikachu" onClick={() => { cambiarAvatar(pikachu) }} />
      </div>
    </>
  )
}

export default ImagenesPerfil