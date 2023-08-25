import React, { useState } from 'react';
import Titulo from '../Util/Titulo';
import ImageIasmin from '../../assets/iasmin.jpg'
import ImageIasminWebp from '../../assets/iasmin.webp'
import ImageIasminWebpMobile from '../../assets/iasmin-mobile.webp'
import useMedia from '../../Hooks/useMedia';
import ButtonDefault from '../Util/Button';
import Curiosidades from './Curiosidades';
import ImageWebp from '../Util/ImageWebp';


const Sobre = () => {
  const isMobile = useMedia('(max-width: 47.5rem)')
  const [curiosidades, setCuriosidades] = useState(false)


  return (
    <section className='sobre' id='sobre' aria-labelledby='title-sobre'>
      <div className='title-image'>
        <Titulo id='title-sobre'>Sobre</Titulo>
        {isMobile &&
          <ImageWebp
            className='avatar-pequeno'
            src={ImageIasmin}
            srcWebp={ImageIasminWebp}
            srcWebpMobile={ImageIasminWebpMobile}
            media='760px'
            width='340px'
            height='340px'
            alt="Avatar de Iasmin"
          />}
      </div>

      <div className='content-main'>

        <div className='box'>
          <ul>
            <li>Me chamo <span className='destaque'>Iasmin Lisboa Nogueira</span>, tenho 29 anos, sou mineira e moro em Florianópolis, SC.</li>
            <li>Comecei a aprender HTML e CSS em 2006, com uns 12 anos, em tempos pré YouTube e pré Tumblr. Tive um blog e criava todo o layout e identidade visual. Mas parei de mexer nisso quando fui pro ensino médio, retornando só na faculdade de engenharia.</li>
            <li>Sou formada em engenharia civil e atuei fazendo projetos hidráulicos e de prevenção contra incêndio, residencial e predial. Mas não estava feliz nessa carreira.</li>
            <li>Comecei a rever e estudar programação em 2018, mas só mudei de carreira oficialmente em 2021. Depois de me aperfeiçoar melhor em desenvolvimento web, quero aprender tecnologias mobile.</li>
          </ul>
        </div>

        {!isMobile && <img className='avatar' src={ImageIasmin} alt="Avatar de Iasmin" />}
      </div>

      <div className='container-btn-curiosidades'>
        <span className='text-btn'> Deseja saber mais sobre essa página? </span>
        <ButtonDefault onClick={() => setCuriosidades(!curiosidades)}>{curiosidades ? "Ver menos" : "Ver mais"}</ButtonDefault>
      </div>

      {curiosidades && <Curiosidades />}

    </section>
  )
}

export default Sobre;