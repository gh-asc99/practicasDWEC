import darth from "./darthVader.png";
import dead from "./deadpool.png";
import gato from "./gato.png";
import god from "./godOfWar.png";
import mickey from "./mickey.png";
import pikachu from "./pikachu.png";
import "./ImagenesPerfil.css";


const ImagenesPerfil = () => {
  return (
    <>
    <div id="marcoImagenesPerfil">
        <img src={darth} alt="Darth Vader" onClick={() => {
          
        }}/>
        <img src={dead} alt="Deadpool"/>
        <img src={gato} alt="Gato anime"/>
        <img src={god} alt="God of war"/>
        <img src={mickey} alt="Mickey mouse"/>
        <img src={pikachu} alt="Pikachu"/>
    </div>
    </>
  )
}

export default ImagenesPerfil