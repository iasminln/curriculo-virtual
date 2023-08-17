import React from 'react';
import Titulo from '../Util/Titulo';
import IconLinkedin from '../../assets/icon-linkedin.png'
import IconGithub from '../../assets/icon-github.png'
import IconGmail from '../../assets/icon-gmail.png'


const Contato = () => {


  return (
    <section className='contato' id='contato'>
      <div className='container'>
        <div className='content-titulo'> <Titulo>Contato</Titulo></div>

        <div className='conteudo'>
          <p className='text'>Vamos conversar? Entre em contato! 😊</p>
          <div className='links'>
            <a href="https://www.linkedin.com/in/iasminln/" target='_blank' rel="noreferrer"><img src={IconLinkedin} alt="" /></a>
            <a href="https://github.com/iasminln" target='_blank' rel="noreferrer"><img src={IconGithub} alt="" /></a>
            <a href="mailto:iasmin.ln94@gmail.com" target='_blank' rel="noreferrer" ><img src={IconGmail} alt="" /></a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contato;