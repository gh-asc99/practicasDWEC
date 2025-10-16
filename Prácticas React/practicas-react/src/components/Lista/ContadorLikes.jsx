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
        <h2>Feo.</h2>
        <button className="likes" onClick={incrementarLikes}>
          Like {valorLike}
        </button>
        <button className="dislikes" onClick={incrementarDislikes}>
          Dislike {valorDislike}
        </button>
      </div>
    </>
  );
};

export default ContadorLikes;
