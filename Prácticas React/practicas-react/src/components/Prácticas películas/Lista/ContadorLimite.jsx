"use strict";

import React, { useState } from "react";
import "./ContadorLimite.css";

const ContadorLimite = () => {
    const [valor, setValor] = useState(0);

    const incrementarNumero = () => {
        setValor(valor+1);
    };

    const decrementarNumero = () => {
        setValor(valor-1);
    };

    return (
        <>
        <div className="contadorLimite_alert">
        <p>Valor: {valor}</p>
        <button disabled={valor===10?true:false} onClick={incrementarNumero}>Incrementar</button>
        <button disabled={valor===0?true:false} onClick={decrementarNumero}>Decrementar</button>
      </div>
        </>
    );
};

export default ContadorLimite;