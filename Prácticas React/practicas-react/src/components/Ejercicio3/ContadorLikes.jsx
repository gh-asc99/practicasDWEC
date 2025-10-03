"use strict";

import React, { useState } from "react";
import "./ContadorLikes.css";

const ContadorLikes = () => {
  const [valorLike, setValorLike] = useState(0);
  const [valorDislike, setValorDislike] = useState(0);

  const incrementarLikes = () => {
    setValorLike(valorLike + 1);
  };

  const incrementarDislikes = () => {
    setValorDislike(valorDislike + 1);
  };

  return (
    <>
      <div className="cajaLikesDislikes_alert">
        <h2>Contador de likes.</h2>
        <p>
          Cantidad: {valorLike}
        </p>
        <button className="likes" onClick={incrementarLikes}>
          Like
        </button>
      </div>
      <div className="cajaLikesDislikes_alert">
        <h2>Contador de dislikes.</h2>
        <p>
          Cantidad: {valorDislike}
        </p>
        <button className="dislikes" onClick={incrementarDislikes}>
          Dislike
        </button>
      </div>
    </>
  );
};

export default ContadorLikes;
