import React from 'react';

import HeaderAntigo from './EstruturaAntiga/HeaderAntigo';
import FooterAntigo from './EstruturaAntiga/FooterAntigo';
import BodyAntigo from './EstruturaAntiga/BodyAntigo';
import PlayerMusica from './EstruturaAntiga/PlayerMusica/PlayerMusica';



const Antigo = () => {
  return (
    <>
      <PlayerMusica />
      <HeaderAntigo />
      <BodyAntigo />
      <FooterAntigo />
    </>
  );
};

export default Antigo;