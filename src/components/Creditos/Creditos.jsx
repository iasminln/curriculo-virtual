import React from 'react';
import Titulo from '../Util/Titulo';



const Creditos = () => {


  return (
    <section className='creditos'>
      <div className='container'>
        <div className='content-titulo'> <Titulo>Créditos</Titulo></div>

        <div className='conteudo'>
          <p className='text'>Layout totalmente desenvolvido por Iasmin Lisboa Nogueira.</p>
          <div className='conteudo-links'>
            <p className='link'>Ilustração inicial:  <a href="https://undraw.co/illustrations" target='_blank' rel="noreferrer">unDraw</a></p>
            <p className='link'>Imagem seta:  <a href="https://www.vexels.com/png-svg/preview/218235/straight-horizontal-arrow-doodle" target='_blank' rel="noreferrer">Vexels</a></p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Creditos;