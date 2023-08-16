import React from 'react';
import LyaoutAntigo from "../../../assets/layout-antigo.png"
import PlayerMusica from './PlayerMusica/PlayerMusica';


const HeaderAntigo = () => {


  return (
    <header className='container-antigo header-antigo'>
      <div className='content-antigo'>
        <img src={LyaoutAntigo} alt="" />
      </div>
    </header>
  )
}

export default HeaderAntigo;