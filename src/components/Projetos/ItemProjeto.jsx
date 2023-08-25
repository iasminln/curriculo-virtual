import React, { useState, useContext } from "react";
import { IconDireita } from "./Icons";
import { IconEsquerda } from "./Icons";
import ImageWebp from "../Util/ImageWebp";
import { UserContext } from "../../userContext";

const ItemProjeto = ({ img, imgWebp, title, hover, height, width }) => {
  const [visibleImg, setVisibleImg] = useState(true);
  const { darkAtivo } = useContext(UserContext)
  const colorNavIcons = darkAtivo ? '#FAEBEB' : '#210808'

  return (
    <div className="item-projeto" aria-label={`Projeto: ${title}`}>
      <div className="box">
        {visibleImg ? (
          <ImageWebp
            src={img}
            srcWebp={imgWebp}
            alt={title}
            width={width}
            height={height}
          />
        ) : null}
        {!visibleImg ? <div className="text-hover">{hover}</div> : null}
      </div>

      <div className="container-btn-slide">
        <button
          className="btn-slide"
          aria-label="Clique para ver a imagem."
          disabled={visibleImg ? true : false}
          onClick={() => {
            setVisibleImg(true);
          }}
        >
          <IconEsquerda color={colorNavIcons} />
        </button>
        <button
          className="btn-slide"
          aria-label="Clique para ver o box de informações."
          disabled={!visibleImg ? true : false}
          onClick={() => {
            setVisibleImg(false);
          }}
        >
          <IconDireita color={colorNavIcons} />
        </button>
      </div>

      <p className="title">{title}</p>
    </div>
  );
};

export default ItemProjeto;
