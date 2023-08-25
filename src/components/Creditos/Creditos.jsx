import React from 'react';
import Titulo from '../Util/Titulo';



const Creditos = () => {


  return (
    <footer className='creditos' id='creditos' aria-labelledby='title-creditos'>
      <div className='container'>
        <div className='content-titulo'> <Titulo id='title-creditos'>Créditos</Titulo></div>

        <div className='conteudo'>
          <p className='text'>Layout totalmente desenvolvido por Iasmin Lisboa Nogueira.</p>
          <div className='conteudo-links'>
            <p className='link'>Ilustração inicial:  <a href="https://undraw.co/illustrations" target='_blank' rel="noreferrer">unDraw</a></p>
            <p className='link'>Imagem seta:  <a href="https://www.vexels.com/png-svg/preview/218235/straight-horizontal-arrow-doodle" target='_blank' rel="noreferrer">Vexels</a></p>
            <p className='link'>Icons diversos:  <a href="https://fontawesome.com/icons" target='_blank' rel="noreferrer">Font Awesome</a></p>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Creditos;