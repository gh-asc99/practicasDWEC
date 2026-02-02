import "./Aviso.css";
const Aviso = ({ visible, tipo, titulo, mensaje, onClose }) => {
    if (!visible) return null;

    return (
        <div className={`aviso aviso-${tipo}`}>
            <h4>{titulo}</h4>
            <p>{mensaje}</p>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default Aviso;